(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    101: function (t, e) {
      'serviceWorker' in navigator
        ? navigator.serviceWorker
            .register('/sw.js', {
              scope: '/',
            })
            .then(function (t) {
              window.$sw = t;
            })
            .catch(function (t) {
              console.error('Service worker registration failed:', t);
            })
        : console.warn('Service workers are not supported.');
    },
    138: function (t, e, n) {
      'use strict';
      n(1), n(40);
      var r = n(13),
        o = n(7),
        c = n(8),
        l = window.__NUXT__;

      function h() {
        if (!this._hydrated) return this.$fetch();
      }

      function f() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t;
          (this._hydrated = !0),
            (this._fetchKey = +this.$vnode.elm.dataset.fetchKey);
          var data = l.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) o.default.set(this.$data, e, data[e]);
        } else d.call(this);
      }

      function d() {
        var t = !1 !== this.$options.fetchOnServer;
        if (
          ('function' == typeof this.$options.fetchOnServer &&
            (t = !1 !== this.$options.fetchOnServer.call(this)),
          t && !this.$nuxt.isPreview && this.$nuxt._pagePayload)
        ) {
          (this._hydrated = !0),
            (this._fetchKey = this.$nuxt._payloadFetchIndex++);
          var data = this.$nuxt._pagePayload.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) o.default.set(this.$data, e, data[e]);
        }
      }

      function m() {
        var t = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = v.call(this).then(function () {
              delete t._fetchPromise;
            })),
          this._fetchPromise
        );
      }

      function v() {
        return y.apply(this, arguments);
      }

      function y() {
        return (y = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              o = this;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      t.next = 15;
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.o)(t.t0));
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 19),
                        new Promise(function (t) {
                          return setTimeout(t, r);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return o.$nuxt.nbFetching--;
                        });
                    case 23:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      e.a = {
        beforeCreate: function () {
          Object(c.l)(this) &&
            ((this._fetchDelay =
              'number' == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.default.util.defineReactive(this, '$fetchState', {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = m.bind(this)),
            Object(c.a)(this, 'created', f),
            Object(c.a)(this, 'beforeMount', h));
        },
      };
    },
    140: function (t, e, n) {
      t.exports = n(141);
    },
    141: function (t, e, n) {
      'use strict';
      n.r(e),
        function (t) {
          n(49), n(3), n(39), n(21), n(22), n(11), n(33);
          var e = n(26),
            r = (n(120), n(72), n(89), n(2), n(1), n(4), n(74), n(40), n(13)),
            o = (n(14), n(121), n(154), n(161), n(163), n(7)),
            c = n(134),
            l = n(98),
            h = n(8),
            f = n(29),
            d = n(138),
            m = n(82);
          n(205);

          function v(t, e) {
            var n;
            if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (!t) return;
                  if ('string' == typeof t) return y(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  'Object' === n && t.constructor && (n = t.constructor.name);
                  if ('Map' === n || 'Set' === n) return Array.from(t);
                  if (
                    'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return y(t, e);
                })(t)) ||
                (e && t && 'number' == typeof t.length)
              ) {
                n && (t = n);
                var i = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return i >= t.length
                      ? {
                          done: !0,
                        }
                      : {
                          done: !1,
                          value: t[i++],
                        };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: r,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            }
            var o,
              c = !0,
              l = !1;
            return {
              s: function () {
                n = t[Symbol.iterator]();
              },
              n: function () {
                var t = n.next();
                return (c = t.done), t;
              },
              e: function (t) {
                (l = !0), (o = t);
              },
              f: function () {
                try {
                  c || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              },
            };
          }

          function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n;
          }
          o.default.__nuxt__fetch__mixin__ ||
            (o.default.mixin(d.a), (o.default.__nuxt__fetch__mixin__ = !0)),
            o.default.component(m.a.name, m.a),
            o.default.component('NLink', m.a),
            t.fetch || (t.fetch = c.a);
          var w,
            x,
            _ = [],
            k = window.__NUXT__ || {};
          if (
            (Object.assign(o.default.config, {
              silent: !0,
              performance: !1,
            }),
            !o.default.config.$nuxt)
          ) {
            var $ = o.default.config.errorHandler;
            (o.default.config.errorHandler = (function () {
              var t = Object(r.a)(
                regeneratorRuntime.mark(function t(e, n, r) {
                  var c,
                    l,
                    h,
                    d,
                    m,
                    v,
                    y,
                    w = arguments;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((c = null), 'function' == typeof $)) {
                            for (
                              l = w.length,
                                h = new Array(l > 3 ? l - 3 : 0),
                                d = 3;
                              d < l;
                              d++
                            )
                              h[d - 3] = w[d];
                            c = $.apply(void 0, [e, n, r].concat(h));
                          }
                          if (!0 !== c) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt('return', c);
                        case 4:
                          if (!n || !n.$root) {
                            t.next = 15;
                            break;
                          }
                          if (
                            !(m = Object.keys(o.default.config.$nuxt).find(
                              function (t) {
                                return n.$root[t];
                              }
                            )) ||
                            !n.$root[m].error ||
                            'render function' === r
                          ) {
                            t.next = 15;
                            break;
                          }
                          if (
                            ((v = n.$root[m]),
                            'function' ==
                              typeof (y = (f.a.options || f.a).layout) &&
                              (y = y(v.context)),
                            !y)
                          ) {
                            t.next = 13;
                            break;
                          }
                          return (
                            (t.next = 13), v.loadLayout(y).catch(function () {})
                          );
                        case 13:
                          v.setLayout(y), v.error(e);
                        case 15:
                          if ('function' != typeof $) {
                            t.next = 17;
                            break;
                          }
                          return t.abrupt('return', c);
                        case 17:
                          console.error(e.message || e);
                        case 18:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n, r) {
                return t.apply(this, arguments);
              };
            })()),
              (o.default.config.$nuxt = {});
          }
          o.default.config.$nuxt.$nuxt = !0;
          var O = o.default.config.errorHandler || console.error;

          function j(t, e, n) {
            for (
              var r = function (component) {
                  var t =
                    (function (component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {};
                      var option = component.options[t];
                      if ('function' == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r];
                        return option.apply(void 0, n);
                      }
                      return option;
                    })(component, 'transition', e, n) || {};
                  return 'string' == typeof t
                    ? {
                        name: t,
                      }
                    : t;
                },
                o = n ? Object(h.g)(n) : [],
                c = Math.max(t.length, o.length),
                l = [],
                f = function (i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]));
                  Object.keys(e)
                    .filter(function (t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes('leave')
                      );
                    })
                    .forEach(function (t) {
                      n[t] = e[t];
                    }),
                    l.push(n);
                },
                i = 0;
              i < c;
              i++
            )
              f(i);
            return l;
          }

          function C(t, e, n) {
            return P.apply(this, arguments);
          }

          function P() {
            return (P = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  l,
                  f,
                  d = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(w.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(h.i)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (
                            (t.next = 9),
                            Object(h.q)(e, function (t, e) {
                              return {
                                Component: t,
                                instance: e,
                              };
                            })
                          );
                        case 9:
                          (o = t.sent),
                            o.some(function (t) {
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function (t) {
                                      return d._diffQuery[t];
                                    })
                                  : 'function' == typeof c &&
                                    c.apply(o, [e.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          r(), (t.next = 26);
                          break;
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (l =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (f = c.message || ''),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(f))
                          ) {
                            t.next = 23;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt('return');
                        case 23:
                          this.error({
                            statusCode: l,
                            message: f,
                          }),
                            this.$nuxt.$emit('routeChanged', e, n, c),
                            r();
                        case 26:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }

          function S(t, e) {
            return k.serverRendered && e && Object(h.b)(t, e), (t._Ctor = t), t;
          }

          function A(t) {
            var path = Object(h.f)(t.options.base, t.options.mode);
            return Object(h.d)(
              t.match(path),
              (function () {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var l;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('function' != typeof e || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (
                              (l = S(
                                Object(h.r)(e),
                                k.data ? k.data[c] : null
                              )),
                              (r.components[o] = l),
                              t.abrupt('return', l)
                            );
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n, r, o, c) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }

          function E(t, e, n) {
            var r = this,
              o = [],
              c = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(h.r)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function (t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function (t) {
                return 'function' == typeof t
                  ? t
                  : ('function' != typeof l.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: 'Unknown middleware ' + t,
                      })),
                    l.a[t]);
              })),
              !c)
            )
              return Object(h.n)(o, e);
          }

          function R(t, e, n) {
            return T.apply(this, arguments);
          }

          function T() {
            return (T = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, o) {
                var c,
                  l,
                  d,
                  m,
                  y,
                  x,
                  k,
                  $,
                  O,
                  C,
                  P,
                  S,
                  A,
                  R,
                  T,
                  M,
                  D = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                          ) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt('return', o());
                        case 2:
                          return (
                            (c = !1),
                            e === n
                              ? ((_ = []), (c = !0))
                              : ((l = []),
                                (_ = Object(h.g)(n, l).map(function (t, i) {
                                  return Object(h.c)(n.matched[l[i]].path)(
                                    n.params
                                  );
                                }))),
                            (d = !1),
                            (m = function (path) {
                              n.path === path.path &&
                                D.$loading.finish &&
                                D.$loading.finish(),
                                n.path !== path.path &&
                                  D.$loading.pause &&
                                  D.$loading.pause(),
                                d || ((d = !0), o(path));
                            }),
                            (t.next = 8),
                            Object(h.s)(w, {
                              route: e,
                              from: n,
                              next: m.bind(this),
                            })
                          );
                        case 8:
                          if (
                            ((this._dateLastError = w.nuxt.dateErr),
                            (this._hadError = Boolean(w.nuxt.err)),
                            (y = []),
                            (x = Object(h.g)(e, y)).length)
                          ) {
                            t.next = 27;
                            break;
                          }
                          return (t.next = 15), E.call(this, x, w.context);
                        case 15:
                          if (!d) {
                            t.next = 17;
                            break;
                          }
                          return t.abrupt('return');
                        case 17:
                          return (
                            (k = (f.a.options || f.a).layout),
                            (t.next = 20),
                            this.loadLayout(
                              'function' == typeof k
                                ? k.call(f.a, w.context)
                                : k
                            )
                          );
                        case 20:
                          return (
                            ($ = t.sent),
                            (t.next = 23),
                            E.call(this, x, w.context, $)
                          );
                        case 23:
                          if (!d) {
                            t.next = 25;
                            break;
                          }
                          return t.abrupt('return');
                        case 25:
                          return (
                            w.context.error({
                              statusCode: 404,
                              message: 'This page could not be found',
                            }),
                            t.abrupt('return', o())
                          );
                        case 27:
                          return (
                            x.forEach(function (t) {
                              t._Ctor &&
                                t._Ctor.options &&
                                ((t.options.asyncData =
                                  t._Ctor.options.asyncData),
                                (t.options.fetch = t._Ctor.options.fetch));
                            }),
                            this.setTransitions(j(x, e, n)),
                            (t.prev = 29),
                            (t.next = 32),
                            E.call(this, x, w.context)
                          );
                        case 32:
                          if (!d) {
                            t.next = 34;
                            break;
                          }
                          return t.abrupt('return');
                        case 34:
                          if (!w.context._errored) {
                            t.next = 36;
                            break;
                          }
                          return t.abrupt('return', o());
                        case 36:
                          return (
                            'function' == typeof (O = x[0].options.layout) &&
                              (O = O(w.context)),
                            (t.next = 40),
                            this.loadLayout(O)
                          );
                        case 40:
                          return (
                            (O = t.sent),
                            (t.next = 43),
                            E.call(this, x, w.context, O)
                          );
                        case 43:
                          if (!d) {
                            t.next = 45;
                            break;
                          }
                          return t.abrupt('return');
                        case 45:
                          if (!w.context._errored) {
                            t.next = 47;
                            break;
                          }
                          return t.abrupt('return', o());
                        case 47:
                          (C = !0),
                            (t.prev = 48),
                            (P = v(x)),
                            (t.prev = 50),
                            P.s();
                        case 52:
                          if ((S = P.n()).done) {
                            t.next = 63;
                            break;
                          }
                          if (
                            'function' == typeof (A = S.value).options.validate
                          ) {
                            t.next = 56;
                            break;
                          }
                          return t.abrupt('continue', 61);
                        case 56:
                          return (t.next = 58), A.options.validate(w.context);
                        case 58:
                          if ((C = t.sent)) {
                            t.next = 61;
                            break;
                          }
                          return t.abrupt('break', 63);
                        case 61:
                          t.next = 52;
                          break;
                        case 63:
                          t.next = 68;
                          break;
                        case 65:
                          (t.prev = 65), (t.t0 = t.catch(50)), P.e(t.t0);
                        case 68:
                          return (t.prev = 68), P.f(), t.finish(68);
                        case 71:
                          t.next = 77;
                          break;
                        case 73:
                          return (
                            (t.prev = 73),
                            (t.t1 = t.catch(48)),
                            this.error({
                              statusCode: t.t1.statusCode || '500',
                              message: t.t1.message,
                            }),
                            t.abrupt('return', o())
                          );
                        case 77:
                          if (C) {
                            t.next = 80;
                            break;
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: 'This page could not be found',
                            }),
                            t.abrupt('return', o())
                          );
                        case 80:
                          return (
                            (t.next = 82),
                            Promise.all(
                              x.map(
                                (function () {
                                  var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, i) {
                                      var o, l, f, d, m, v, x, k, p;
                                      return regeneratorRuntime.wrap(function (
                                        t
                                      ) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (
                                                ((r._path = Object(h.c)(
                                                  e.matched[y[i]].path
                                                )(e.params)),
                                                (r._dataRefresh = !1),
                                                (o = r._path !== _[i]),
                                                D._routeChanged && o
                                                  ? (r._dataRefresh = !0)
                                                  : D._paramChanged && o
                                                  ? ((l = r.options.watchParam),
                                                    (r._dataRefresh = !1 !== l))
                                                  : D._queryChanged &&
                                                    (!0 ===
                                                    (f = r.options.watchQuery)
                                                      ? (r._dataRefresh = !0)
                                                      : Array.isArray(f)
                                                      ? (r._dataRefresh =
                                                          f.some(function (t) {
                                                            return D
                                                              ._diffQuery[t];
                                                          }))
                                                      : 'function' ==
                                                          typeof f &&
                                                        (R ||
                                                          (R = Object(h.h)(e)),
                                                        (r._dataRefresh =
                                                          f.apply(R[i], [
                                                            e.query,
                                                            n.query,
                                                          ])))),
                                                D._hadError ||
                                                  !D._isMounted ||
                                                  r._dataRefresh)
                                              ) {
                                                t.next = 6;
                                                break;
                                              }
                                              return t.abrupt('return');
                                            case 6:
                                              return (
                                                (d = []),
                                                (m =
                                                  r.options.asyncData &&
                                                  'function' ==
                                                    typeof r.options.asyncData),
                                                (v =
                                                  Boolean(r.options.fetch) &&
                                                  r.options.fetch.length),
                                                (x = m && v ? 30 : 45),
                                                m &&
                                                  ((k =
                                                    D.isPreview || c
                                                      ? Object(h.p)(
                                                          r.options.asyncData,
                                                          w.context
                                                        )
                                                      : D.fetchPayload(e.path)
                                                          .then(function (t) {
                                                            return t.data[i];
                                                          })
                                                          .catch(function (t) {
                                                            return Object(h.p)(
                                                              r.options
                                                                .asyncData,
                                                              w.context
                                                            );
                                                          })).then(function (
                                                    t
                                                  ) {
                                                    Object(h.b)(r, t),
                                                      D.$loading.increase &&
                                                        D.$loading.increase(x);
                                                  }),
                                                  d.push(k)),
                                                d.push(
                                                  D.fetchPayload(e.path)
                                                    .then(function (t) {
                                                      t.mutations.forEach(
                                                        function (t) {
                                                          D.$store.commit(
                                                            t[0],
                                                            t[1]
                                                          );
                                                        }
                                                      );
                                                    })
                                                    .catch(function (t) {
                                                      return null;
                                                    })
                                                ),
                                                (D.$loading.manual =
                                                  !1 === r.options.loading),
                                                D.isPreview ||
                                                  c ||
                                                  d.push(
                                                    D.fetchPayload(
                                                      e.path
                                                    ).catch(function (t) {
                                                      return null;
                                                    })
                                                  ),
                                                v &&
                                                  (((p = r.options.fetch(
                                                    w.context
                                                  )) &&
                                                    (p instanceof Promise ||
                                                      'function' ==
                                                        typeof p.then)) ||
                                                    (p = Promise.resolve(p)),
                                                  p.then(function (t) {
                                                    D.$loading.increase &&
                                                      D.$loading.increase(x);
                                                  }),
                                                  d.push(p)),
                                                t.abrupt(
                                                  'return',
                                                  Promise.all(d)
                                                )
                                              );
                                            case 16:
                                            case 'end':
                                              return t.stop();
                                          }
                                      },
                                      t);
                                    })
                                  );
                                  return function (e, n) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                          );
                        case 82:
                          d ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            o()),
                            (t.next = 99);
                          break;
                        case 85:
                          if (
                            ((t.prev = 85),
                            (t.t2 = t.catch(29)),
                            'ERR_REDIRECT' !== (T = t.t2 || {}).message)
                          ) {
                            t.next = 90;
                            break;
                          }
                          return t.abrupt(
                            'return',
                            this.$nuxt.$emit('routeChanged', e, n, T)
                          );
                        case 90:
                          return (
                            (_ = []),
                            Object(h.k)(T),
                            'function' ==
                              typeof (M = (f.a.options || f.a).layout) &&
                              (M = M(w.context)),
                            (t.next = 96),
                            this.loadLayout(M)
                          );
                        case 96:
                          this.error(T),
                            this.$nuxt.$emit('routeChanged', e, n, T),
                            o();
                        case 99:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [
                    [29, 85],
                    [48, 73],
                    [50, 65, 68, 71],
                  ]
                );
              })
            )).apply(this, arguments);
          }

          function M(t, n) {
            Object(h.d)(t, function (t, n, r, c) {
              return (
                'object' !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.default.extend(t))._Ctor = t),
                  (r.components[c] = t)),
                t
              );
            });
          }

          function D(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (e = !1);
            var n = e
              ? (f.a.options || f.a).layout
              : t.matched[0].components.default.options.layout;
            'function' == typeof n && (n = n(w.context)), this.setLayout(n);
          }

          function I(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error();
          }

          function B(t, e) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(h.h)(t),
                c = Object(h.g)(t);
              o.default.nextTick(function () {
                r.forEach(function (t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    'function' == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) o.default.set(t.$data, n, e[n]);
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit('triggerScroll');
                    });
                  }
                }),
                  I(n);
              });
            }
          }

          function L(t) {
            window.onNuxtReadyCbs.forEach(function (e) {
              'function' == typeof e && e(t);
            }),
              'function' == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              x.afterEach(function (e, n) {
                o.default.nextTick(function () {
                  return t.$nuxt.$emit('routeChanged', e, n);
                });
              });
          }

          function N() {
            return (N = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, l, f, d;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((w = e.app),
                            (x = e.router),
                            e.store,
                            (n = new o.default(w)),
                            k.data || !k.serverRendered)
                          ) {
                            t.next = 14;
                            break;
                          }
                          return (
                            (t.prev = 5),
                            (t.next = 8),
                            n.fetchPayload(n.context.route.path)
                          );
                        case 8:
                          (r = t.sent), Object.assign(k, r), (t.next = 14);
                          break;
                        case 12:
                          (t.prev = 12), (t.t0 = t.catch(5));
                        case 14:
                          return (
                            (c = k.layout || 'default'),
                            (t.next = 17),
                            n.loadLayout(c)
                          );
                        case 17:
                          return (
                            n.setLayout(c),
                            (l = function () {
                              n.$mount('#__nuxt'),
                                x.afterEach(M),
                                x.afterEach(D.bind(n)),
                                x.afterEach(B.bind(n)),
                                o.default.nextTick(function () {
                                  L(n);
                                });
                            }),
                            (t.next = 21),
                            Promise.all(A(x))
                          );
                        case 21:
                          if (
                            ((f = t.sent),
                            (n.setTransitions =
                              n.$options.nuxt.setTransitions.bind(n)),
                            f.length &&
                              (n.setTransitions(j(f, x.currentRoute)),
                              (_ = x.currentRoute.matched.map(function (t) {
                                return Object(h.c)(t.path)(
                                  x.currentRoute.params
                                );
                              }))),
                            (n.$loading = {}),
                            k.error && n.error(k.error),
                            x.beforeEach(C.bind(n)),
                            x.beforeEach(R.bind(n)),
                            k.serverRendered &&
                              '/' !== k.routePath &&
                              '/' !== k.routePath.slice(-1) &&
                              '/' === n.context.route.path.slice(-1) &&
                              (n.context.route.path =
                                n.context.route.path.replace(/\/+$/, '')),
                            !k.serverRendered ||
                              k.routePath !== n.context.route.path)
                          ) {
                            t.next = 32;
                            break;
                          }
                          return l(), t.abrupt('return');
                        case 32:
                          return (
                            (d = function () {
                              M(x.currentRoute, x.currentRoute),
                                D.call(n, x.currentRoute),
                                I(n),
                                l();
                            }),
                            (t.next = 35),
                            new Promise(function (t) {
                              return setTimeout(t, 0);
                            })
                          );
                        case 35:
                          R.call(
                            n,
                            x.currentRoute,
                            x.currentRoute,
                            function (path) {
                              if (path) {
                                var t = x.afterEach(function (e, n) {
                                  t(), d();
                                });
                                x.push(path, void 0, function (t) {
                                  t && O(t);
                                });
                              } else d();
                            }
                          );
                        case 36:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[5, 12]]
                );
              })
            )).apply(this, arguments);
          }
          Object(f.b)(null, k.config)
            .then(function (t) {
              return N.apply(this, arguments);
            })
            .catch(O);
        }.call(this, n(32));
    },
    172: function (t, e, n) {
      t.exports = n.p + 'img/rocket.d656507.png';
    },
    173: function (t, e, n) {
      'use strict';
      var r = n(76);
      n.n(r).a;
    },
    174: function (t, e, n) {
      'use strict';
      var r = n(77);
      n.n(r).a;
    },
    175: function (t, e, n) {
      'use strict';
      var r = n(78);
      n.n(r).a;
    },
    179: function (t, e, n) {},
    180: function (t, e, n) {},
    181: function (t, e, n) {
      'use strict';
      var r = n(79);
      n.n(r).a;
    },
    182: function (t, e, n) {
      'use strict';
      var r = n(80);
      n.n(r).a;
    },
    183: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'strict', function () {
          return o;
        }),
        n.d(e, 'state', function () {
          return c;
        }),
        n.d(e, 'mutations', function () {
          return l;
        });
      var r = n(0),
        o = !1,
        c = function () {
          return {
            loading: !0,
            leaving: !1,
            animating: !0,
            animObjects: {},
            cursorBig: !1,
            transitionDuration: 1e3,
          };
        },
        l = {
          setLoading: function (t, e) {
            t.loading = e;
          },
          cursorBig: function (t, e) {
            t.cursorBig = e;
          },
          setAnimating: function (t, e) {
            t.animating = e;
          },
          setAnimatingObj: function (t, e) {
            t.animObjects = Object.assign(
              {},
              t.animObjects,
              Object(r.a)({}, e.key, e.val)
            );
          },
        };
    },
    193: function (t, e) {},
    205: function (t, e, n) {
      n(14), n(1);
      var r = {},
        o = {},
        c = {};
      (window.__NUXT_JSONP__ = function (t, e) {
        r[t] = e;
      }),
        (window.__NUXT_JSONP_CACHE__ = r),
        (window.__NUXT_IMPORT__ = function (t, e) {
          if (r[t]) return Promise.resolve(r[t]);
          if (c[t]) return Promise.reject(c[t]);
          if (o[t]) return o[t];
          var n,
            l,
            h = (o[t] = new Promise(function (t, e) {
              (n = t), (l = e);
            }));
          delete r[t];
          var f,
            script = document.createElement('script');
          (script.charset = 'utf-8'), (script.timeout = 120), (script.src = e);
          var d = new Error(),
            m =
              (script.onerror =
              script.onload =
                function (e) {
                  if (
                    (clearTimeout(f),
                    delete o[t],
                    (script.onerror = script.onload = null),
                    r[t])
                  )
                    return n(r[t]);
                  var h = e && ('load' === e.type ? 'missing' : e.type),
                    m = e && e.target && e.target.src;
                  (d.message =
                    'Loading chunk ' + t + ' failed.\n(' + h + ': ' + m + ')'),
                    (d.name = 'ChunkLoadError'),
                    (d.type = h),
                    (d.request = m),
                    (c[t] = d),
                    l(d);
                });
          return (
            (f = setTimeout(function () {
              m({
                type: 'timeout',
                target: script,
              });
            }, 12e4)),
            document.head.appendChild(script),
            h
          );
        });
    },
    29: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return kt;
      }),
        n.d(e, 'a', function () {
          return I;
        });
      n(40), n(5), n(3), n(2), n(1), n(4);
      var r = n(13),
        o = n(0),
        c = (n(14), n(7)),
        l = n(135),
        h = n(99),
        f = n.n(h),
        d = n(48),
        m = n.n(d),
        v = n(59),
        y = n(8);
      'scrollRestoration' in window.history &&
        ((window.history.scrollRestoration = 'manual'),
        window.addEventListener('beforeunload', function () {
          window.history.scrollRestoration = 'auto';
        }),
        window.addEventListener('load', function () {
          window.history.scrollRestoration = 'manual';
        }));
      var w = function () {},
        x = v.a.prototype.push;
      (v.a.prototype.push = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
          n = arguments.length > 2 ? arguments[2] : void 0;
        return x.call(this, t, e, n);
      }),
        c.default.use(v.a);
      var _ = {
        mode: 'history',
        base: decodeURI('/'),
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
        scrollBehavior: function (t, e, n) {
          var r = !1,
            o = Object(y.g)(t);
          ((o.length < 2 &&
            o.every(function (t) {
              return !1 !== t.options.scrollToTop;
            })) ||
            o.some(function (t) {
              return t.options.scrollToTop;
            })) &&
            (r = {
              x: 0,
              y: 0,
            }),
            n && (r = n);
          var c = window.$nuxt;
          return (
            t.path === e.path &&
              t.hash !== e.hash &&
              c.$nextTick(function () {
                return c.$emit('triggerScroll');
              }),
            new Promise(function (e) {
              c.$once('triggerScroll', function () {
                if (t.hash) {
                  var n = t.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = '#' + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) &&
                      (r = {
                        selector: n,
                      });
                  } catch (t) {
                    console.warn(
                      'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
                    );
                  }
                }
                e(r);
              });
            })
          );
        },
        routes: [
          {
            path: '/projects/:project?',
            component: function () {
              return Object(y.m)(
                Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 272))
              );
            },
            name: 'projects-project',
          },
          {
            path: '/',
            component: function () {
              return Object(y.m)(
                Promise.all([n.e(0), n.e(7), n.e(3)]).then(n.bind(null, 271))
              );
            },
            name: 'index',
          },
        ],
        fallback: !1,
      };

      function k() {
        return new v.a(_);
      }
      var $ = {
          name: 'NuxtChild',
          functional: !0,
          props: {
            nuxtChildKey: {
              type: String,
              default: '',
            },
            keepAlive: Boolean,
            keepAliveProps: {
              type: Object,
              default: void 0,
            },
          },
          render: function (t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props,
              o = n.$createElement;
            data.nuxtChild = !0;
            for (
              var c = n,
                l = n.$nuxt.nuxt.transitions,
                h = n.$nuxt.nuxt.defaultTransition,
                f = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && f++, (n = n.$parent);
            data.nuxtChildDepth = f;
            var d = l[f] || h,
              m = {};
            O.forEach(function (t) {
              void 0 !== d[t] && (m[t] = d[t]);
            });
            var v = {};
            j.forEach(function (t) {
              'function' == typeof d[t] && (v[t] = d[t].bind(c));
            });
            var y = v.beforeEnter;
            if (
              ((v.beforeEnter = function (t) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit('triggerScroll');
                  }),
                  y)
                )
                  return y.call(c, t);
              }),
              !1 === d.css)
            ) {
              var w = v.leave;
              (!w || w.length < 2) &&
                (v.leave = function (t, e) {
                  w && w.call(c, t), c.$nextTick(e);
                });
            }
            var x = o('routerView', data);
            return (
              r.keepAlive &&
                (x = o(
                  'keep-alive',
                  {
                    props: r.keepAliveProps,
                  },
                  [x]
                )),
              o(
                'transition',
                {
                  props: m,
                  on: v,
                },
                [x]
              )
            );
          },
        },
        O = [
          'name',
          'mode',
          'appear',
          'css',
          'type',
          'duration',
          'enterClass',
          'leaveClass',
          'appearClass',
          'enterActiveClass',
          'enterActiveClass',
          'leaveActiveClass',
          'appearActiveClass',
          'enterToClass',
          'leaveToClass',
          'appearToClass',
        ],
        j = [
          'beforeEnter',
          'enter',
          'afterEnter',
          'enterCancelled',
          'beforeLeave',
          'leave',
          'afterLeave',
          'leaveCancelled',
          'beforeAppear',
          'appear',
          'afterAppear',
          'appearCancelled',
        ],
        C = n(10),
        P = n(12),
        S =
          (n(46),
          (function () {
            function t(e, n, r, o) {
              Object(C.a)(this, t),
                (this.sketch = e),
                (this.body = n.rectangle(
                  0,
                  e.height - 100,
                  e.width + 2500,
                  100,
                  {
                    isStatic: !0,
                    restitution: 0.1,
                    friction: 10,
                  }
                )),
                r.add(o, this.body);
            }
            return (
              Object(P.a)(t, [
                {
                  key: 'show',
                  value: function () {
                    this.sketch.push(),
                      this.sketch.stroke('#353238'),
                      this.sketch.strokeWeight(3),
                      this.sketch.noFill(),
                      this.sketch.rect(
                        0,
                        this.sketch.height - 50,
                        this.sketch.width,
                        100
                      ),
                      this.sketch.fill('#353238'),
                      this.sketch.angleMode(this.sketch.DEGREES);
                    for (var t = 0; t < this.sketch.width / 10; t++)
                      this.sketch.noStroke(),
                        this.sketch.rect(
                          0 + 20 * t,
                          this.sketch.height - 50,
                          1,
                          100
                        );
                    this.sketch.pop();
                  },
                },
              ]),
              t
            );
          })()),
        A = (function () {
          function t(e) {
            Object(C.a)(this, t),
              (this.sketch = e),
              (this.x = e.random(e.width / 2, e.width - 100)),
              (this.y = e.random(-2e3, e.height)),
              (this.r = e.random(2, 10));
          }
          return (
            Object(P.a)(t, [
              {
                key: 'show',
                value: function () {
                  this.sketch.push(),
                    this.sketch.noStroke(),
                    this.sketch.fill('#353238'),
                    this.sketch.ellipse(this.x, this.y, this.r),
                    this.sketch.pop();
                },
              },
            ]),
            t
          );
        })(),
        E = (function () {
          function t(e, n) {
            Object(C.a)(this, t),
              (this.acceleration = e.createVector(0, 0.05)),
              (this.velocity = e.createVector(
                e.random(-1, 1),
                e.random(-1, 0)
              )),
              (this.position = n.copy()),
              (this.lifespan = 155),
              (this.sketch = e);
          }
          return (
            Object(P.a)(t, [
              {
                key: 'run',
                value: function () {
                  this.update(), this.display();
                },
              },
              {
                key: 'update',
                value: function () {
                  this.velocity.add(this.acceleration),
                    this.position.add(this.velocity),
                    (this.lifespan -= 2);
                },
              },
              {
                key: 'display',
                value: function () {
                  this.sketch.stroke(118, 21, 227, this.lifespan),
                    this.sketch.strokeWeight(2),
                    this.sketch.fill(118, 21, 227, this.lifespan),
                    this.sketch.ellipse(
                      this.position.x,
                      this.position.y,
                      12,
                      12
                    );
                },
              },
              {
                key: 'isDead',
                value: function () {
                  return this.lifespan < 0;
                },
              },
            ]),
            t
          );
        })(),
        R = (function () {
          function t(e, n) {
            Object(C.a)(this, t),
              (this.origin = n.copy()),
              (this.particles = []),
              (this.sketch = e);
          }
          return (
            Object(P.a)(t, [
              {
                key: 'addParticle',
                value: function () {
                  this.particles.push(new E(this.sketch, this.origin));
                },
              },
              {
                key: 'run',
                value: function () {
                  for (var i = this.particles.length - 1; i >= 0; i--) {
                    var p = this.particles[i];
                    p.run(), p.isDead() && this.particles.splice(i, 1);
                  }
                },
              },
            ]),
            t
          );
        })(),
        T = {
          props: {
            start: {
              type: Boolean,
              default: !0,
            },
          },
          data: function () {
            return {
              score: 0,
              hiscore: 0,
              endGame: !1,
              playing: !1,
              readyToPlay: !1,
              fuel: 100,
              TIME_LIMIT: 5e3,
              status: 'GO... Spam left click to fly',
              canv: null,
            };
          },
          watch: {
            start: function (t) {
              t || this.init();
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              (t.myp5 = null), (t.canv = null), null === t.myp5 && t.init();
            });
          },
          methods: {
            init: function () {
              var t,
                e,
                r,
                o,
                c,
                l,
                h,
                f,
                d,
                m,
                v = this,
                y = this,
                w = [];
              this.$nextTick(function () {
                if (
                  void 0 !== window.Matter &&
                  void 0 !== window.p5 &&
                  null === v.myp5
                ) {
                  (v.myp5 = null),
                    (h = Matter.Engine),
                    Matter.Render,
                    (f = Matter.World),
                    (d = Matter.Bodies),
                    (m = Matter.Body);
                  v.myp5 = new p5(function (x) {
                    !(function (v) {
                      document
                        .getElementById('restartGame')
                        .addEventListener('click', function (t) {
                          (y.status = 'Filling tank...'),
                            (y.fuel = 100),
                            (y.score = 0),
                            (y.endGame = !1),
                            y.$emit('endGame', !1),
                            (y.playing = !1),
                            (y.readyToPlay = !1),
                            setTimeout(function () {
                              y.status = '...done...';
                            }, 1e3),
                            setTimeout(function () {
                              y.status = 'Get Ready!';
                            }, 1500),
                            setTimeout(function () {
                              y.status = 'Set!';
                            }, 2e3),
                            setTimeout(function () {
                              (y.status = 'GO... Spam left click to fly'),
                                (y.readyToPlay = !0);
                            }, 2500),
                            (c.previousHeight = v.height);
                        }),
                        localStorage.getItem('hiscorerocket') &&
                          (y.hiscore = localStorage.getItem('hiscorerocket')),
                        (v.preload = function () {
                          l = v.loadImage(n(172));
                        }),
                        (v.setup = function () {
                          v.createCanvas(window.innerWidth, window.innerHeight),
                            (t = h.create()),
                            (e = t.world),
                            h.run(t),
                            (r = new S(v, d, f, e));
                          for (var n = 0; n < v.width / 10; n++)
                            w.push(new A(v));
                          (c = new x(v.width - v.width / 3, 10, 50, 100)),
                            setTimeout(function () {
                              y.readyToPlay = !0;
                            }, 2e3),
                            (o = new R(v, v.createVector(0, 0)));
                        }),
                        (v.draw = function () {
                          v.clear(), v.translate(0, -0.01 * c.body.position.y);
                          for (var t = 0; t < w.length; t++) w[t].show();
                          v.translate(
                            0,
                            -1 * c.body.position.y + (v.height - 220)
                          ),
                            v.translate(0, 0.1 * c.body.position.y - 80),
                            r.show(),
                            c.show(),
                            v.translate(
                              c.body.position.x + 25,
                              c.body.position.y + 150
                            ),
                            o.run();
                        }),
                        (v.mousePressed = function () {
                          y.readyToPlay &&
                            (y.endGame ||
                              (y.playing || (y.playing = !0),
                              y.fuel <= 0
                                ? ((y.fuel = 0),
                                  (y.endGame = !0),
                                  y.$emit('endGame', !0))
                                : (c.go(),
                                  (y.fuel -= Math.round(v.random(0, 4))))));
                        });
                      var x = (function () {
                        function t(n, r, o, c) {
                          Object(C.a)(this, t),
                            (this.body = d.rectangle(n, r, o, c, {
                              restitution: 0.3,
                              friction: 1,
                            })),
                            (this.currSpeed = 1),
                            (this.previousHeight = v.height),
                            (this.wid = o),
                            (this.hei = c),
                            f.add(e, this.body);
                        }
                        return (
                          Object(P.a)(t, [
                            {
                              key: 'show',
                              value: function () {
                                var t = this.body.position;
                                v.push(),
                                  v.noStroke(),
                                  v.noFill(),
                                  v.translate(t.x, t.y),
                                  v.rect(0, 50, this.wid, this.hei),
                                  v.image(l, 0, 50, this.wid, this.hei),
                                  v.pop();
                              },
                            },
                            {
                              key: 'go',
                              value: function () {
                                var t = {
                                  x: v.random(-4e-4, 4e-4),
                                  y: -0.05,
                                };
                                o.addParticle(),
                                  m.applyForce(
                                    this.body,
                                    this.body.position,
                                    t
                                  ),
                                  this.body.position.y < this.previousHeight &&
                                    ((this.previousHeight =
                                      this.body.position.y),
                                    (y.score =
                                      55 *
                                      Math.round(
                                        v.height - this.body.position.y
                                      )),
                                    y.score > y.hiscore &&
                                      ((y.hiscore = y.score),
                                      localStorage.setItem(
                                        'hiscorerocket',
                                        y.hiscore
                                      )));
                              },
                            },
                          ]),
                          t
                        );
                      })();
                    })(x),
                      v.$emit('started', !0);
                  }, 'canvas_container');
                }
              });
            },
          },
        },
        M = (n(173), n(30)),
        D = {
          components: {
            RocketGame: Object(M.a)(
              T,
              function () {
                var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
                return n('div', [
                  n(
                    'div',
                    {
                      attrs: {
                        id: 'gui',
                      },
                    },
                    [
                      n(
                        'p',
                        {
                          attrs: {
                            id: 'score',
                          },
                        },
                        [
                          t._v('Score: '),
                          n('span', [t._v(t._s(t.score))]),
                          t._v('m'),
                        ]
                      ),
                      t._v(' '),
                      n(
                        'p',
                        {
                          attrs: {
                            id: 'hiscore',
                          },
                        },
                        [
                          t._v('Hi-Score: '),
                          n('span', [t._v(t._s(t.hiscore))]),
                          t._v('m'),
                        ]
                      ),
                      t._v(' '),
                      n(
                        'p',
                        {
                          attrs: {
                            id: 'time',
                          },
                        },
                        [
                          t._v('Fuel: '),
                          n('span', [t._v(t._s(t.fuel))]),
                          t._v('%'),
                        ]
                      ),
                      t._v(' '),
                      n(
                        'p',
                        {
                          attrs: {
                            id: 'status',
                          },
                        },
                        [t._v(t._s(t.status))]
                      ),
                    ]
                  ),
                  t._v(' '),
                  n('div', {
                    attrs: {
                      id: 'canvas_container',
                    },
                  }),
                ]);
              },
              [],
              !1,
              null,
              '90e5fed0',
              null
            ).exports,
          },
          props: {
            error: {
              type: Object,
              default: null,
            },
          },
          data: function () {
            return {
              endGame: !1,
              showButton: !0,
            };
          },
          methods: {
            toggleGameState: function (t) {
              this.endGame = t;
            },
          },
          head: function () {
            return {
              script: [
                {
                  src: 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js',
                  class: 'game-res',
                },
                {
                  src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js',
                  class: 'game-res',
                },
              ],
            };
          },
        },
        I =
          (n(174),
          Object(M.a)(
            D,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'div',
                {
                  staticClass: 'container',
                },
                [
                  n(
                    'div',
                    {
                      staticClass: 'wrp',
                    },
                    [
                      n('h3', [t._v(t._s(t.error.statusCode))]),
                      t._v(' '),
                      n(
                        'p',
                        [
                          404 === t.error.statusCode
                            ? n(
                                'span',
                                {
                                  staticClass: 'white',
                                },
                                [t._v('Page not found.')]
                              )
                            : n(
                                'span',
                                {
                                  staticClass: 'white',
                                },
                                [t._v('An error occurred.')]
                              ),
                          t._v(' '),
                          n('br'),
                          t._v('Go to '),
                          n(
                            'nuxt-link',
                            {
                              attrs: {
                                to: '/',
                              },
                            },
                            [t._v('home page')]
                          ),
                          t._v(' '),
                          n('br'),
                          t._v('or have fun with this'),
                          n('em', [t._v('"game"')]),
                          t._v(' :)\n    '),
                        ],
                        1
                      ),
                      t._v(' '),
                      n('br'),
                      t._v(' '),
                      n(
                        'button',
                        {
                          class: ['btn btn-primary', t.endGame ? '' : 'hidden'],
                          attrs: {
                            id: 'restartGame',
                          },
                          on: {
                            mouseenter: function (e) {
                              return t.$store.commit('global/cursorBig', !0);
                            },
                            mouseleave: function (e) {
                              return t.$store.commit('global/cursorBig', !1);
                            },
                          },
                        },
                        [
                          t._v('Restart'),
                          n('div', {
                            staticClass: 'btn2',
                          }),
                        ]
                      ),
                      t._v(' '),
                      n(
                        'button',
                        {
                          class: [
                            'btn btn-primary',
                            t.showButton ? '' : 'hidden',
                          ],
                          attrs: {
                            id: 'startGame',
                          },
                          on: {
                            click: function (e) {
                              t.showButton = !1;
                            },
                            mouseenter: function (e) {
                              return t.$store.commit('global/cursorBig', !0);
                            },
                            mouseleave: function (e) {
                              return t.$store.commit('global/cursorBig', !1);
                            },
                          },
                        },
                        [
                          t._v('Start'),
                          n('div', {
                            staticClass: 'btn2',
                          }),
                        ]
                      ),
                    ]
                  ),
                  t._v(' '),
                  n(
                    'no-ssr',
                    {
                      attrs: {
                        placeholder: 'Loading...',
                      },
                    },
                    [
                      n('rocket-game', {
                        attrs: {
                          start: t.showButton,
                        },
                        on: {
                          endGame: function (e) {
                            return t.toggleGameState(e);
                          },
                          started: function (e) {
                            t.showButton = !1;
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              );
            },
            [],
            !1,
            null,
            '1da4b82d',
            null
          ).exports),
        B = (n(21), n(22), n(11), n(28)),
        L = {
          name: 'Nuxt',
          components: {
            NuxtChild: $,
            NuxtError: I,
          },
          props: {
            nuxtChildKey: {
              type: String,
              default: void 0,
            },
            keepAlive: Boolean,
            keepAliveProps: {
              type: Object,
              default: void 0,
            },
            name: {
              type: String,
              default: 'default',
            },
          },
          errorCaptured: function (t) {
            this.displayingNuxtError &&
              ((this.errorFromNuxtError = t), this.$forceUpdate());
          },
          computed: {
            routerViewKey: function () {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(y.c)(this.$route.matched[0].path)(this.$route.params)
                );
              var t = Object(B.a)(this.$route.matched, 1)[0];
              if (!t) return this.$route.path;
              var e = t.components.default;
              if (e && e.options) {
                var n = e.options;
                if (n.key)
                  return 'function' == typeof n.key
                    ? n.key(this.$route)
                    : n.key;
              }
              return /\/$/.test(t.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, '');
            },
          },
          beforeCreate: function () {
            c.default.util.defineReactive(
              this,
              'nuxt',
              this.$root.$options.nuxt
            );
          },
          render: function (t) {
            var e = this;
            return this.nuxt.err
              ? this.errorFromNuxtError
                ? (this.$nextTick(function () {
                    return (e.errorFromNuxtError = !1);
                  }),
                  t('div', {}, [
                    t('h2', 'An error occurred while showing the error page'),
                    t(
                      'p',
                      'Unfortunately an error occurred and while showing the error page another error occurred'
                    ),
                    t(
                      'p',
                      'Error details: '.concat(
                        this.errorFromNuxtError.toString()
                      )
                    ),
                    t(
                      'nuxt-link',
                      {
                        props: {
                          to: '/',
                        },
                      },
                      'Go back to home'
                    ),
                  ]))
                : ((this.displayingNuxtError = !0),
                  this.$nextTick(function () {
                    return (e.displayingNuxtError = !1);
                  }),
                  t(I, {
                    props: {
                      error: this.nuxt.err,
                    },
                  }))
              : t('NuxtChild', {
                  key: this.routerViewKey,
                  props: this.$props,
                });
          },
        },
        N =
          (n(49),
          n(39),
          n(17),
          n(130),
          n(33),
          {
            name: 'NuxtLoading',
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1,
              };
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? '0px'
                      : 'auto'
                    : this.reversed
                    ? 'auto'
                    : '0px')
                );
              },
            },
            beforeDestroy: function () {
              this.clear();
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function () {
                var t = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return t.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function (t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                );
              },
              get: function () {
                return this.percent;
              },
              increase: function (t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                );
              },
              decrease: function (t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                );
              },
              pause: function () {
                return clearInterval(this._timer), this;
              },
              resume: function () {
                return this.startTimer(), this;
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function () {
                var t = this;
                return (
                  this.clear(),
                  setTimeout(function () {
                    (t.show = !1),
                      t.$nextTick(function () {
                        (t.percent = 0), (t.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function (t) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function () {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                  }, 100));
              },
            },
            render: function (t) {
              var e = t(!1);
              return (
                this.show &&
                  (e = t('div', {
                    staticClass: 'nuxt-progress',
                    class: {
                      'nuxt-progress-notransition': this.skipTimerCount > 0,
                      'nuxt-progress-failed': !this.canSucceed,
                    },
                    style: {
                      width: this.percent + '%',
                      left: this.left,
                    },
                  })),
                e
              );
            },
          }),
        F =
          (n(175),
          Object(M.a)(N, void 0, void 0, !1, null, null, null).exports),
        U =
          (n(176),
          n(177),
          n(178),
          n(179),
          n(180),
          {
            computed: {
              loading: function () {
                return this.$store.state.global.loading;
              },
            },
            methods: {
              start: function () {
                this.$store.commit('global/setLoading', !0);
              },
              finish: function () {
                this.$store.commit('global/setLoading', !1);
              },
            },
          }),
        G =
          (n(181),
          Object(M.a)(
            U,
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return this.loading
                ? e(
                    'div',
                    {
                      attrs: {
                        id: 'pac-loader',
                        role: 'progressbar',
                        'aria-busy': 'true',
                        'aria-label': 'Loading the page',
                      },
                    },
                    [this._m(0)]
                  )
                : this._e();
            },
            [
              function () {
                var t = this.$createElement,
                  e = this._self._c || t;
                return e('div', [
                  e('div', {
                    staticClass: 'pacman',
                  }),
                  this._v(' '),
                  e('div', {
                    staticClass: 'dots',
                  }),
                  this._v(' '),
                  e(
                    'div',
                    {
                      staticClass: 'loading-text',
                    },
                    [this._v('\n      L0AD1NG\n    ')]
                  ),
                ]);
              },
            ],
            !1,
            null,
            null,
            null
          ).exports),
        Q = n(60),
        W = (function () {
          function t(e) {
            var n = this;
            Object(C.a)(this, t),
              (this.DOM = {
                el: e,
              }),
              (this.DOM.dot = window.document.querySelector(
                '.cursor__inner--dot'
              )),
              (this.DOM.circle = window.document.querySelector(
                '.cursor__inner--circle'
              )),
              (this.bounds = {
                dot: this.DOM.dot.getBoundingClientRect(),
                circle: this.DOM.circle.getBoundingClientRect(),
              }),
              (this.scale = 1),
              (this.opacity = 1),
              (this.mousePos = {
                x: -100,
                y: -100,
              }),
              (this.lastMousePos = {
                dot: {
                  x: 0,
                  y: 0,
                },
                circle: {
                  x: 0,
                  y: 0,
                },
              }),
              (this.lastScale = 1),
              (this.lastOpacity = 1),
              this.initEvents(),
              requestAnimationFrame(function () {
                return n.render();
              });
          }
          return (
            Object(P.a)(t, [
              {
                key: 'lerp',
                value: function (a, b, t) {
                  return (1 - t) * a + t * b;
                },
              },
              {
                key: 'initEvents',
                value: function () {
                  var t = this,
                    body = window.document.body,
                    e = function (t) {
                      return (
                        t || (t = window.event),
                        {
                          x:
                            t.clientX +
                            body.scrollLeft +
                            window.document.documentElement.scrollLeft,
                          y:
                            t.clientY +
                            body.scrollTop +
                            window.document.documentElement.scrollTop,
                        }
                      );
                    },
                    n = function () {
                      return {
                        width: window.innerWidth,
                        height: window.innerHeight,
                      };
                    };
                  n(),
                    window.addEventListener('resize', n),
                    window.addEventListener('mousemove', function (n) {
                      return (t.mousePos = e(n));
                    }),
                    window.addEventListener(
                      'wheel',
                      Object(Q.a)(function (n) {
                        (t.lastMousePos.dot.y = t.lerp(
                          t.lastMousePos.dot.y,
                          t.mousePos.y - t.bounds.dot.height / 2,
                          1
                        )),
                          (t.lastMousePos.circle.y = t.lerp(
                            t.lastMousePos.circle.y,
                            t.mousePos.y - t.bounds.circle.height / 2,
                            0.15
                          )),
                          (t.mousePos = e(n));
                      }, 150),
                      {
                        passive: !0,
                      }
                    );
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this;
                  (this.lastMousePos.dot.x = this.lerp(
                    this.lastMousePos.dot.x,
                    this.mousePos.x - this.bounds.dot.width / 2,
                    1
                  )),
                    (this.lastMousePos.dot.y = this.lerp(
                      this.lastMousePos.dot.y,
                      this.mousePos.y - this.bounds.dot.height / 2,
                      1
                    )),
                    (this.lastMousePos.circle.x = this.lerp(
                      this.lastMousePos.circle.x,
                      this.mousePos.x - this.bounds.circle.width / 2,
                      0.15
                    )),
                    (this.lastMousePos.circle.y = this.lerp(
                      this.lastMousePos.circle.y,
                      this.mousePos.y - this.bounds.circle.height / 2,
                      0.15
                    )),
                    (this.lastScale = this.lerp(
                      this.lastScale,
                      this.scale,
                      0.15
                    )),
                    (this.lastOpacity = this.lerp(
                      this.lastOpacity,
                      this.opacity,
                      0.1
                    )),
                    (this.DOM.dot.style.transform = 'translateX('
                      .concat(this.lastMousePos.dot.x, 'px) translateY(')
                      .concat(this.lastMousePos.dot.y, 'px)')),
                    (this.DOM.circle.style.transform = 'translateX('
                      .concat(this.lastMousePos.circle.x, 'px) translateY(')
                      .concat(this.lastMousePos.circle.y, 'px) scale(')
                      .concat(this.lastScale, ')')),
                    (this.DOM.circle.style.opacity = this.lastOpacity),
                    requestAnimationFrame(function () {
                      return t.render();
                    });
                },
              },
              {
                key: 'enter',
                value: function () {
                  this.scale = 2.7;
                },
              },
              {
                key: 'leave',
                value: function () {
                  this.scale = 1;
                },
              },
              {
                key: 'click',
                value: function () {
                  (this.lastScale = 1), (this.lastOpacity = 0);
                },
              },
            ]),
            t
          );
        })(),
        z = {
          components: {
            loader: G,
          },
          data: function () {
            return {
              cursor: null,
            };
          },
          computed: {
            currBig: function () {
              return this.$store.state.global.cursorBig;
            },
            isMobileVar: function () {
              return Object(Q.c)();
            },
          },
          watch: {
            $route: function (t, e) {
              'projects-project' === t.name &&
                'projects-project' === e.name &&
                ((this.cursor.lastMousePos.circle.y = 50),
                (this.cursor.mousePos.y = 50));
            },
            currBig: function (t, e) {
              null !== this.cursor &&
                (t ? this.cursor.enter() : this.cursor.leave());
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.$nuxt.$loading.start(),
                t.$store.commit('global/setLoading', !1),
                t.$nuxt.$loading.finish();
            }),
              setTimeout(function () {
                t.cursor = new W();
                for (
                  var e = Array.from(
                      document.querySelectorAll('[data-hover], a, button')
                    ),
                    i = 0;
                  i < e.length;
                  i++
                )
                  e[i].addEventListener('mouseenter', function () {
                    return t.$store.commit('global/cursorBig', !0);
                  }),
                    e[i].addEventListener('mouseleave', function () {
                      return t.$store.commit('global/cursorBig', !1);
                    });
                document.addEventListener('fullscreenchange', function (t) {
                  var e = document.querySelectorAll(
                      '.video-player-box *, .pswp *'
                    ),
                    n = document.createElement('style');
                  if (
                    ((n.id = 'fixFS'),
                    (n.innerHTML =
                      '.pswp__zoom-wrap, .pswp__img {\n              cursor: auto !important;\n            }'),
                    document.fullscreenElement)
                  ) {
                    document.querySelector('head').appendChild(n);
                    for (var r = 0; r < e.length; r++)
                      e[r].style.setProperty('cursor', 'auto', 'important');
                  } else {
                    document.querySelector('#fixFS').remove();
                    for (var o = 0; o < e.length; o++)
                      e[o].style.setProperty('cursor', 'none', 'important');
                  }
                });
              }, 500);
          },
        },
        X =
          (n(182),
          Object(M.a)(
            z,
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                'div',
                [
                  e('loader'),
                  this._v(' '),
                  e('nuxt'),
                  this._v(' '),
                  e(
                    'div',
                    {
                      ref: 'cur',
                      staticClass: 'cursor',
                    },
                    [
                      e('div', {
                        staticClass: 'cursor__inner cursor__inner--circle',
                      }),
                      this._v(' '),
                      e('div', {
                        staticClass: 'cursor__inner cursor__inner--dot',
                      }),
                    ]
                  ),
                  this._v(' '),
                  e(
                    'div',
                    {
                      staticStyle: {
                        position: 'fixed',
                        'z-index': '999',
                        transform: 'translateY(-50%)',
                        top: '50%',
                        right: '0',
                      },
                      attrs: {
                        id: 'awwwards',
                      },
                    },
                    [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'https://www.awwwards.com/sites/yasio-portfolio',
                            target: '_blank',
                          },
                        },
                        [
                          e(
                            'svg',
                            {
                              attrs: {
                                width: '53.08',
                                height: '171.358',
                              },
                            },
                            [
                              e('path', {
                                staticClass: 'js-color-bg',
                                attrs: {
                                  fill: 'white',
                                  d: 'M0 0h53.08v171.358H0z',
                                },
                              }),
                              e(
                                'g',
                                {
                                  staticClass: 'js-color-text',
                                  attrs: {
                                    fill: 'black',
                                  },
                                },
                                [
                                  e('path', {
                                    attrs: {
                                      d: 'M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495',
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports);

      function H(t, e) {
        var n;
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return Y(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Y(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: t[i++],
                    };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }

      function Y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var K = {
          _default: Object(y.r)(X),
        },
        J = {
          render: function (t, e) {
            var n = t('NuxtLoading', {
                ref: 'loading',
              }),
              r = t(this.layout || 'nuxt'),
              o = t(
                'div',
                {
                  domProps: {
                    id: '__layout',
                  },
                  key: this.layoutName,
                },
                [r]
              ),
              c = t(
                'transition',
                {
                  props: {
                    name: 'layout',
                    mode: 'out-in',
                  },
                  on: {
                    beforeEnter: function (t) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit('triggerScroll');
                      });
                    },
                  },
                },
                [o]
              );
            return t(
              'div',
              {
                domProps: {
                  id: '__nuxt',
                },
              },
              [n, c]
            );
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: '',
              nbFetching: 0,
            };
          },
          beforeCreate: function () {
            c.default.util.defineReactive(this, 'nuxt', this.$options.nuxt);
          },
          created: function () {
            (c.default.prototype.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener('online', this.refreshOnlineStatus),
              window.addEventListener('offline', this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((t.$loading = t.$refs.loading), !t.isPreview)) {
                          e.next = 9;
                          break;
                        }
                        if (!t.$store || !t.$store._actions.nuxtServerInit) {
                          e.next = 6;
                          break;
                        }
                        return (
                          t.$loading.start(),
                          (e.next = 6),
                          t.$store.dispatch('nuxtServerInit', t.context)
                        );
                      case 6:
                        return (e.next = 8), t.refresh();
                      case 8:
                        t.$loading.finish();
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          watch: {
            'nuxt.err': 'errorChanged',
          },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
            isPreview: function () {
              return Boolean(this.$options.previewData);
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(y.h)(t.$route)).length) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt('return');
                          case 3:
                            return (
                              t.$loading.start(),
                              (r = n.map(function (e) {
                                var p = [];
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(y.p)(e.$options.fetch, t.context)
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch());
                                else {
                                  var n,
                                    r = H(
                                      Object(y.e)(e.$vnode.componentInstance)
                                    );
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (t) {
                                    r.e(t);
                                  } finally {
                                    r.f();
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(y.p)(
                                        e.$options.asyncData,
                                        t.context
                                      ).then(function (t) {
                                        for (var n in t)
                                          c.default.set(e.$data, n, t[n]);
                                      })
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            );
                          case 8:
                            e.next = 15;
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(y.k)(e.t0),
                              t.error(e.t0);
                          case 15:
                            t.$loading.finish();
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              this.nuxt.err &&
                this.$loading &&
                (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                this.$loading.finish && this.$loading.finish());
            },
            setLayout: function (t) {
              if (t && 'string' != typeof t)
                throw new Error(
                  '[nuxt] Avoid using non-string value as layout property.'
                );
              return (
                (t && K['_' + t]) || (t = 'default'),
                (this.layoutName = t),
                (this.layout = K['_' + t]),
                this.layout
              );
            },
            loadLayout: function (t) {
              return (
                (t && K['_' + t]) || (t = 'default'),
                Promise.resolve(K['_' + t])
              );
            },
            setPagePayload: function (t) {
              (this._pagePayload = t), (this._payloadFetchIndex = 0);
            },
            fetchPayload: function (t) {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function n() {
                  var r, base, o, c;
                  return regeneratorRuntime.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = window.__NUXT__.staticAssetsBase),
                              (base = (e.$router.options.base || '').replace(
                                /\/+$/,
                                ''
                              )) &&
                                t.startsWith(base) &&
                                (t = t.substr(base.length)),
                              (t = (t.replace(/\/+$/, '') || '/')
                                .split('?')[0]
                                .split('#')[0]),
                              (o = Object(y.t)(base, r, t, 'payload.js')),
                              (n.prev = 5),
                              (n.next = 8),
                              window.__NUXT_IMPORT__(decodeURI(t), encodeURI(o))
                            );
                          case 8:
                            return (
                              (c = n.sent),
                              e.setPagePayload(c),
                              n.abrupt('return', c)
                            );
                          case 13:
                            throw (
                              ((n.prev = 13),
                              (n.t0 = n.catch(5)),
                              e.setPagePayload(!1),
                              n.t0)
                            );
                          case 17:
                          case 'end':
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[5, 13]]
                  );
                })
              )();
            },
          },
          components: {
            NuxtLoading: F,
          },
        },
        V = (n(72), n(100));

      function Z(t, e) {
        var n;
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return tt(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tt(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: t[i++],
                    };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }

      function tt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      c.default.use(V.a);
      var et = ['state', 'getters', 'actions', 'mutations'],
        nt = {};
      (nt.modules = nt.modules || {}),
        (function (t, e) {
          t = t.default || t;
          var n = e.replace(/\.(js|mjs)$/, '').split('/'),
            r = n[n.length - 1],
            o = 'store/'.concat(e);
          if (
            ((t =
              'state' === r
                ? (function (t, e) {
                    if ('function' != typeof t) {
                      console.warn(
                        ''.concat(
                          e,
                          ' should export a method that returns an object'
                        )
                      );
                      var n = Object.assign({}, t);
                      return function () {
                        return n;
                      };
                    }
                    return it(t, e);
                  })(t, o)
                : it(t, o)),
            et.includes(r))
          ) {
            var c = r;
            st(
              at(nt, n, {
                isProperty: !0,
              }),
              t,
              c
            );
          } else {
            'index' === r && (n.pop(), (r = n[n.length - 1]));
            var l,
              h = at(nt, n),
              f = Z(et);
            try {
              for (f.s(); !(l = f.n()).done; ) {
                var d = l.value;
                st(h, t[d], d);
              }
            } catch (t) {
              f.e(t);
            } finally {
              f.f();
            }
            !1 === t.namespaced && delete h.namespaced;
          }
        })(n(183), 'global.js');
      var ot =
        nt instanceof Function
          ? nt
          : function () {
              return new V.a.Store(
                Object.assign(
                  {
                    strict: !1,
                  },
                  nt
                )
              );
            };

      function it(t, e) {
        if (t.state && 'function' != typeof t.state) {
          console.warn(
            "'state' should be a method that returns an object in ".concat(e)
          );
          var n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state: function () {
              return n;
            },
          });
        }
        return t;
      }

      function at(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.isProperty,
          o = void 0 !== r && r;
        if (!e.length || (o && 1 === e.length)) return t;
        var c = e.shift();
        return (
          (t.modules[c] = t.modules[c] || {}),
          (t.modules[c].namespaced = !0),
          (t.modules[c].modules = t.modules[c].modules || {}),
          at(t.modules[c], e, {
            isProperty: o,
          })
        );
      }

      function st(t, e, n) {
        e &&
          ('state' === n
            ? (t.state = e || t.state)
            : (t[n] = Object.assign({}, t[n], e)));
      }
      var ct = n(139);
      c.default.use(ct.a, {});
      var ut = n(101),
        lt = n.n(ut),
        ht = function (t, e) {
          return ft.apply(this, arguments);
        };

      function ft() {
        return (ft = Object(r.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var r;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    n(
                      (r = {
                        accessibleIcons: !0,
                        iconProperty: '$icon',
                        icons: {
                          64: '/assets/icons/icon_64.9paqQBFB6CM.png',
                          120: '/assets/icons/icon_120.9paqQBFB6CM.png',
                          144: '/assets/icons/icon_144.9paqQBFB6CM.png',
                          152: '/assets/icons/icon_152.9paqQBFB6CM.png',
                          192: '/assets/icons/icon_192.9paqQBFB6CM.png',
                          384: '/assets/icons/icon_384.9paqQBFB6CM.png',
                          512: '/assets/icons/icon_512.9paqQBFB6CM.png',
                        },
                      }).iconProperty.replace('$', ''),
                      pt(r.icons)
                    );
                  case 2:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var pt = function (t) {
          return function (e) {
            return t[e] || '';
          };
        },
        mt = function (t) {
          var e = t.app.router,
            n = t.store;
          e.afterEach(function (t, e) {
            n.commit('global/cursorBig', !1);
          }),
            e.beforeEach(function (t, e, r) {
              null === e.name
                ? (n.commit('global/setAnimating', !1), r())
                : 'projects-project' == t.name && 'index' == e.name
                ? (n.commit('global/setAnimating', !0),
                  setTimeout(function () {
                    r();
                  }, n.state.global.transitionDuration))
                : 'projects-project' == e.name && 'index' == t.name
                ? (n.commit('global/setAnimating', !1),
                  r(),
                  setTimeout(function () {
                    window.history.replaceState(null, null, '#'),
                      window.history.replaceState(
                        null,
                        null,
                        window.location.href.replace('#', '')
                      );
                  }, 500))
                : (n.commit('global/setAnimating', !1), r());
            });
        },
        vt = n(190);
      c.default.use(vt);
      var gt = n(137);
      c.default.use(gt.a, {
        preLoad: 0.9,
      });
      var yt = n(102),
        bt = function () {
          c.default.component('v-photoswipe', yt.PhotoSwipe),
            c.default.component('v-photoswipe-gallery', yt.PhotoSwipeGallery);
        };

      function wt(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }

      function xt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? wt(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : wt(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      c.default.component(f.a.name, f.a),
        c.default.component(
          m.a.name,
          xt(
            xt({}, m.a),
            {},
            {
              render: function (t, e) {
                return (
                  m.a._warned ||
                    ((m.a._warned = !0),
                    console.warn(
                      '<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead'
                    )),
                  m.a.render(t, e)
                );
              },
            }
          )
        ),
        c.default.component($.name, $),
        c.default.component('NChild', $),
        c.default.component(L.name, L),
        c.default.use(l.a, {
          keyName: 'head',
          attribute: 'data-n-head',
          ssrAttribute: 'data-n-head-ssr',
          tagIDKeyName: 'hid',
        });
      var _t = {
        name: 'page',
        mode: 'out-in',
        appear: !1,
        appearClass: 'appear',
        appearActiveClass: 'appear-active',
        appearToClass: 'appear-to',
      };

      function kt(t) {
        return $t.apply(this, arguments);
      }

      function $t() {
        return ($t = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            var n,
              r,
              o,
              l,
              h,
              f,
              d,
              path,
              m,
              v = arguments;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (m = function (t, e) {
                        if (!t)
                          throw new Error(
                            'inject(key, value) has no key provided'
                          );
                        if (void 0 === e)
                          throw new Error(
                            "inject('".concat(
                              t,
                              "', value) has no value provided"
                            )
                          );
                        (h[(t = '$' + t)] = e),
                          h.context[t] || (h.context[t] = e),
                          (o[t] = h[t]);
                        var n = '__nuxt_' + t + '_installed__';
                        c.default[n] ||
                          ((c.default[n] = !0),
                          c.default.use(function () {
                            Object.prototype.hasOwnProperty.call(
                              c.default.prototype,
                              t
                            ) ||
                              Object.defineProperty(c.default.prototype, t, {
                                get: function () {
                                  return this.$root.$options[t];
                                },
                              });
                          }));
                      }),
                      (n = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                      (t.next = 4),
                      k()
                    );
                  case 4:
                    return (
                      (r = t.sent),
                      ((o = ot(e)).$router = r),
                      (l = o.registerModule),
                      (o.registerModule = function (path, t, e) {
                        return l.call(
                          o,
                          path,
                          t,
                          Object.assign(
                            {
                              preserveState: !0,
                            },
                            e
                          )
                        );
                      }),
                      (h = xt(
                        {
                          head: {
                            htmlAttrs: {
                              lang: 'en',
                            },
                            title:
                              '<Yasio/> Portfolio | Front-end Developer/Fullstack Designer',
                            meta: [
                              {
                                charset: 'utf-8',
                              },
                              {
                                name: 'viewport',
                                content: 'width=device-width, initial-scale=1',
                              },
                              {
                                hid: 'description',
                                name: 'description',
                                content:
                                  'Webdev, Webdesign, UX, UI, IoT, Mobile apps, Motion design and more. Yasio portfolio website SPA, Vue, SSR, PWA, Serverless.',
                              },
                              {
                                hid: 'og:im',
                                prefix: 'og: http://ogp.me/ns#',
                                property: 'og:image',
                                content:
                                  'https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/fb.jpg?alt=media&token=1ea39cdf-91a8-4cf8-a113-863766aa6123',
                              },
                              {
                                hid: 'author',
                                name: 'author',
                                content: 'https://yasio.dev',
                              },
                              {
                                hid: 'publisher',
                                name: 'publisher',
                                content: 'https://yasio.dev',
                              },
                              {
                                hid: 'apple-mobile-web-app-title',
                                name: 'apple-mobile-web-app-title',
                                content:
                                  '<Yasio/> Portfolio | Front-end Developer/Fullstack Designer',
                              },
                              {
                                hid: 'theme-color',
                                name: 'theme-color',
                                content: '#5918df',
                              },
                              {
                                hid: 'og:title',
                                name: 'og:title',
                                content:
                                  '<Yasio/> Portfolio | Front-end Developer/Fullstack Designer',
                              },
                              {
                                hid: 'og:description',
                                name: 'og:description',
                                content:
                                  'Webdev, Webdesign, UX, UI, IoT, Mobile apps, Motion design and more. Yasio portfolio website SPA, Vue, SSR, PWA, Serverless.',
                              },
                              {
                                hid: 'og:type',
                                name: 'og:type',
                                content: 'website',
                              },
                              {
                                hid: 'og:url',
                                name: 'og:url',
                                content: 'https://yasio.dev',
                              },
                              {
                                hid: 'og:image',
                                name: 'og:image',
                                content:
                                  'https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/fb.jpg?alt=media&token=1ea39cdf-91a8-4cf8-a113-863766aa6123',
                              },
                              {
                                hid: 'og:locale',
                                name: 'og:locale',
                                content: 'en_US',
                              },
                              {
                                hid: 'twitter:card',
                                name: 'twitter:card',
                                content: 'summary_large_image',
                              },
                              {
                                hid: 'twitter:site',
                                name: 'twitter:site',
                                content: '@YasiOnFire',
                              },
                              {
                                hid: 'twitter:creator',
                                name: 'twitter:creator',
                                content: '@YasiOnFire',
                              },
                              {
                                hid: 'twitter:title',
                                name: 'twitter:title',
                                content:
                                  '<Yasio/> Portfolio | Front-end Developer/Fullstack Designer',
                              },
                              {
                                hid: 'twitter:description',
                                name: 'twitter:description',
                                content:
                                  'Webdev, Webdesign, UX, UI, IoT, Mobile apps, Motion design and more. Yasio portfolio website SPA, Vue, SSR, PWA, Serverless.',
                              },
                              {
                                hid: 'twitter:image',
                                name: 'twitter:image',
                                content:
                                  'https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/fb.jpg?alt=media&token=1ea39cdf-91a8-4cf8-a113-863766aa6123',
                              },
                              {
                                hid: 'mobile-web-app-capable',
                                name: 'mobile-web-app-capable',
                                content: 'yes',
                              },
                              {
                                hid: 'og:site_name',
                                name: 'og:site_name',
                                property: 'og:site_name',
                                content: 'Yasio portfolio',
                              },
                            ],
                            link: [
                              {
                                rel: 'icon',
                                type: 'image/x-icon',
                                href: 'https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/favicon.ico?alt=media&token=681bee10-9559-46fc-98ad-a77e94fce1ab',
                              },
                              {
                                rel: 'manifest',
                                href: '/assets/manifest.fc7c28a2.json',
                              },
                              {
                                rel: 'shortcut icon',
                                href: 'https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/android-chrome-192x192.png?alt=media&token=ef2d6adc-08df-4f58-a528-1020eb0e3e97',
                              },
                              {
                                rel: 'apple-touch-icon',
                                href: '/assets/icons/icon_512.9paqQBFB6CM.png',
                                sizes: '512x512',
                              },
                            ],
                            style: [],
                            script: [],
                          },
                          store: o,
                          router: r,
                          nuxt: {
                            defaultTransition: _t,
                            transitions: [_t],
                            setTransitions: function (t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function (t) {
                                  return (t = t
                                    ? 'string' == typeof t
                                      ? Object.assign({}, _t, {
                                          name: t,
                                        })
                                      : Object.assign({}, _t, t)
                                    : _t);
                                })),
                                (this.$options.nuxt.transitions = t),
                                t
                              );
                            },
                            err: null,
                            dateErr: null,
                            error: function (t) {
                              (t = t || null),
                                (h.context._errored = Boolean(t)),
                                (t = t ? Object(y.o)(t) : null);
                              var n = h.nuxt;
                              return (
                                this && (n = this.nuxt || this.$options.nuxt),
                                (n.dateErr = Date.now()),
                                (n.err = t),
                                e && (e.nuxt.error = t),
                                t
                              );
                            },
                          },
                        },
                        J
                      )),
                      (o.app = h),
                      (f = e
                        ? e.next
                        : function (t) {
                            return h.router.push(t);
                          }),
                      e
                        ? (d = r.resolve(e.url).route)
                        : ((path = Object(y.f)(r.options.base, r.options.mode)),
                          (d = r.resolve(path).route)),
                      (t.next = 15),
                      Object(y.s)(h, {
                        store: o,
                        route: d,
                        next: f,
                        error: h.nuxt.error.bind(h),
                        payload: e ? e.payload : void 0,
                        req: e ? e.req : void 0,
                        res: e ? e.res : void 0,
                        beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        ssrContext: e,
                      })
                    );
                  case 15:
                    m('config', n),
                      window.__NUXT__ &&
                        window.__NUXT__.state &&
                        o.replaceState(window.__NUXT__.state),
                      (h.context.enablePreview = function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        (h.previewData = Object.assign({}, t)), m('preview', t);
                      }),
                      (t.next = 21);
                    break;
                  case 21:
                    if ('function' != typeof lt.a) {
                      t.next = 24;
                      break;
                    }
                    return (t.next = 24), lt()(h.context, m);
                  case 24:
                    return (t.next = 27), ht(h.context, m);
                  case 27:
                    return (t.next = 30), mt(h.context);
                  case 30:
                    t.next = 33;
                    break;
                  case 33:
                    t.next = 36;
                    break;
                  case 36:
                    return (t.next = 39), bt(h.context);
                  case 39:
                    (h.context.enablePreview = function () {
                      console.warn(
                        'You cannot call enablePreview() outside a plugin.'
                      );
                    }),
                      (t.next = 43);
                    break;
                  case 43:
                    return t.abrupt('return', {
                      store: o,
                      app: h,
                      router: r,
                    });
                  case 44:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    60: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return o;
      }),
        n.d(e, 'd', function () {
          return c;
        }),
        n.d(e, 'c', function () {
          return l;
        }),
        n.d(e, 'e', function () {
          return h;
        }),
        n.d(e, 'a', function () {
          return d;
        });
      n(40);
      var r = n(13);
      n(11);

      function o() {
        var t = window.navigator.userAgent,
          e = t.indexOf('MSIE ');
        if (e > 0) return parseInt(t.substring(e + 5, t.indexOf('.', e)), 10);
        if (t.indexOf('Trident/') > 0) {
          var n = t.indexOf('rv:');
          return parseInt(t.substring(n + 3, t.indexOf('.', n)), 10);
        }
        var r = t.indexOf('Edge/');
        return r > 0 && parseInt(t.substring(r + 5, t.indexOf('.', r)), 10);
      }

      function c(t) {
        return t.replace(/(<([^>]+)>)/gi, ' ');
      }

      function l() {
        var a,
          t = !1;
        return (
          (a = navigator.userAgent || navigator.vendor || window.opera),
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            a
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )) &&
            (t = !0),
          t
        );
      }

      function h(t) {
        return f.apply(this, arguments);
      }

      function f() {
        return (f = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (window.createImageBitmap) {
                      t.next = 3;
                      break;
                    }
                    return e(!1), t.abrupt('return');
                  case 3:
                    'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=',
                      fetch(
                        'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA='
                      )
                        .then(function (t) {
                          return t.blob();
                        })
                        .then(function (t) {
                          createImageBitmap(t).then(
                            function () {
                              e(!0);
                            },
                            function () {
                              e(!1);
                            }
                          );
                        });
                  case 5:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var d = function (t, time) {
        var e;
        return function () {
          var n = arguments,
            r = this,
            o = function () {
              return t.apply(r, n);
            };
          clearTimeout(e), (e = setTimeout(o, time));
        };
      };
    },
    76: function (t, e, n) {},
    77: function (t, e, n) {},
    78: function (t, e, n) {},
    79: function (t, e, n) {},
    8: function (t, e, n) {
      'use strict';
      n.d(e, 'k', function () {
        return y;
      }),
        n.d(e, 'm', function () {
          return w;
        }),
        n.d(e, 'l', function () {
          return x;
        }),
        n.d(e, 'e', function () {
          return _;
        }),
        n.d(e, 'b', function () {
          return k;
        }),
        n.d(e, 'r', function () {
          return $;
        }),
        n.d(e, 'g', function () {
          return O;
        }),
        n.d(e, 'h', function () {
          return j;
        }),
        n.d(e, 'd', function () {
          return C;
        }),
        n.d(e, 'q', function () {
          return P;
        }),
        n.d(e, 'j', function () {
          return S;
        }),
        n.d(e, 's', function () {
          return E;
        }),
        n.d(e, 'n', function () {
          return T;
        }),
        n.d(e, 'p', function () {
          return M;
        }),
        n.d(e, 'f', function () {
          return D;
        }),
        n.d(e, 'c', function () {
          return I;
        }),
        n.d(e, 'i', function () {
          return B;
        }),
        n.d(e, 'o', function () {
          return L;
        }),
        n.d(e, 'a', function () {
          return z;
        }),
        n.d(e, 't', function () {
          return X;
        });
      n(5), n(49), n(3), n(39), n(72), n(89);
      var r = n(28),
        o = (n(17), n(165), n(26)),
        c = (n(21), n(22), n(75), n(128), n(168), n(130), n(11), n(40), n(13)),
        l = (n(33), n(2), n(1), n(4), n(14), n(0)),
        h = n(7);

      function f(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }

      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? f(Object(source), !0).forEach(function (e) {
                Object(l.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : f(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }

      function m(t, e) {
        var n;
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return v(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return v(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: t[i++],
                    };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }

      function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }

      function y(t) {
        h.default.config.errorHandler && h.default.config.errorHandler(t);
      }

      function w(t) {
        return t.then(function (t) {
          return t.default || t;
        });
      }

      function x(t) {
        return (
          t.$options &&
          'function' == typeof t.$options.fetch &&
          !t.$options.fetch.length
        );
      }

      function _(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = m(r);
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value;
            c.$fetch ? n.push(c) : c.$children && _(c, n);
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
        return n;
      }

      function k(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function () {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                d(d({}, data), e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }

      function $(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = h.default.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        );
      }

      function O(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'components';
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, r) {
            return Object.keys(t[n]).map(function (o) {
              return e && e.push(r), t[n][o];
            });
          })
        );
      }

      function j(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return O(t, e, 'instances');
      }

      function C(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return Object.keys(t.components).reduce(function (r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              );
            }, []);
          })
        );
      }

      function P(t, e) {
        return Promise.all(
          C(
            t,
            (function () {
              var t = Object(c.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ('function' != typeof n || n.options) {
                            t.next = 4;
                            break;
                          }
                          return (t.next = 3), n();
                        case 3:
                          n = t.sent;
                        case 4:
                          return (
                            (o.components[c] = n = $(n)),
                            t.abrupt(
                              'return',
                              'function' == typeof e ? e(n, r, o, c) : n
                            )
                          );
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n, r, o) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }

      function S(t) {
        return A.apply(this, arguments);
      }

      function A() {
        return (A = Object(c.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt('return');
                  case 2:
                    return (t.next = 4), P(e);
                  case 4:
                    return t.abrupt(
                      'return',
                      d(
                        d({}, e),
                        {},
                        {
                          meta: O(e).map(function (t, n) {
                            return d(
                              d({}, t.options.meta),
                              (e.matched[n] || {}).meta
                            );
                          }),
                        }
                      )
                    );
                  case 5:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }

      function E(t, e) {
        return R.apply(this, arguments);
      }

      function R() {
        return (R = Object(c.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var c, l, h, f;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: n.payload,
                          error: n.error,
                          base: '/',
                          env: {},
                        }),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function (t, path, n) {
                          if (t) {
                            e.context._redirected = !0;
                            var r = Object(o.a)(path);
                            if (
                              ('number' == typeof t ||
                                ('undefined' !== r && 'object' !== r) ||
                                ((n = path || {}),
                                (path = t),
                                (r = Object(o.a)(path)),
                                (t = 302)),
                              'object' === r &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = W(path, n)),
                                window.location.replace(path),
                                new Error('ERR_REDIRECT'))
                              );
                            e.context.next({
                              path: path,
                              query: n,
                              status: t,
                            });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([S(n.route), S(n.from)])
                    );
                  case 3:
                    (c = t.sent),
                      (l = Object(r.a)(c, 2)),
                      (h = l[0]),
                      (f = l[1]),
                      n.route && (e.context.route = h),
                      n.from && (e.context.from = f),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }

      function T(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : M(t[0], e).then(function () {
              return T(t.slice(1), e);
            });
      }

      function M(t, e) {
        var n;
        return (n =
          2 === t.length
            ? new Promise(function (n) {
                t(e, function (t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          'function' == typeof n.then
          ? n
          : Promise.resolve(n);
      }

      function D(base, t) {
        var path = decodeURI(window.location.pathname);
        return 'hash' === t
          ? window.location.hash.replace(/^#\//, '')
          : (base &&
              (path.endsWith('/') ? path : path + '/').startsWith(base) &&
              (path = path.slice(base.length)),
            (path || '/') + window.location.search + window.location.hash);
      }

      function I(t, e) {
        return (function (t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            'object' === Object(o.a)(t[i]) &&
              (n[i] = new RegExp('^(?:' + t[i].pattern + ')$', Q(e)));
          return function (e, r) {
            for (
              var path = '',
                data = e || {},
                o = (r || {}).pretty ? F : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var l = t[c];
              if ('string' != typeof l) {
                var h = data[l.name || 'pathMatch'],
                  f = void 0;
                if (null == h) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + l.name + '" to be defined'
                  );
                }
                if (Array.isArray(h)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(h) +
                        '`'
                    );
                  if (0 === h.length) {
                    if (l.optional) continue;
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty'
                    );
                  }
                  for (var d = 0; d < h.length; d++) {
                    if (((f = o(h[d])), !n[c].test(f)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '", but received `' +
                          JSON.stringify(f) +
                          '`'
                      );
                    path += (0 === d ? l.prefix : l.delimiter) + f;
                  }
                } else {
                  if (((f = l.asterisk ? F(h, !0) : o(h)), !n[c].test(f)))
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received "' +
                        f +
                        '"'
                    );
                  path += l.prefix + f;
                }
              } else path += l;
            }
            return path;
          };
        })(
          (function (t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = '',
              l = (e && e.delimiter) || '/';
            for (; null != (n = N.exec(t)); ) {
              var h = n[0],
                f = n[1],
                d = n.index;
              if (((path += t.slice(c, d)), (c = d + h.length), f))
                path += f[1];
              else {
                var m = t[c],
                  v = n[2],
                  y = n[3],
                  w = n[4],
                  x = n[5],
                  _ = n[6],
                  k = n[7];
                path && (r.push(path), (path = ''));
                var $ = null != v && null != m && m !== v,
                  O = '+' === _ || '*' === _,
                  j = '?' === _ || '*' === _,
                  C = n[2] || l,
                  pattern = w || x;
                r.push({
                  name: y || o++,
                  prefix: v || '',
                  delimiter: C,
                  optional: j,
                  repeat: O,
                  partial: $,
                  asterisk: Boolean(k),
                  pattern: pattern
                    ? G(pattern)
                    : k
                    ? '.*'
                    : '[^' + U(C) + ']+?',
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && r.push(path);
            return r;
          })(t, e),
          e
        );
      }

      function B(t, e) {
        var n = {},
          r = d(d({}, t), e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }

      function L(t) {
        var e;
        if (t.message || 'string' == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = '['.concat(t.constructor.name, ']');
          }
        return d(
          d({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500,
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window.onNuxtReadyCbs.push(t);
        });
      var N = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      );

      function F(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, function (t) {
          return '%' + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }

      function U(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }

      function G(t) {
        return t.replace(/([=!:$/()])/g, '\\$1');
      }

      function Q(t) {
        return t && t.sensitive ? '' : 'i';
      }

      function W(t, e) {
        var n,
          o = t.indexOf('://');
        -1 !== o
          ? ((n = t.substring(0, o)), (t = t.substring(o + 3)))
          : t.startsWith('//') && (t = t.substring(2));
        var c,
          l = t.split('/'),
          h = (n ? n + '://' : '//') + l.shift(),
          path = l.join('/');
        if (
          ('' === path && 1 === l.length && (h += '/'),
          2 === (l = path.split('#')).length)
        ) {
          var f = l,
            d = Object(r.a)(f, 2);
          (path = d[0]), (c = d[1]);
        }
        return (
          (h += path ? '/' + path : ''),
          e &&
            '{}' !== JSON.stringify(e) &&
            (h +=
              (2 === t.split('?').length ? '&' : '?') +
              (function (t) {
                return Object.keys(t)
                  .sort()
                  .map(function (e) {
                    var n = t[e];
                    return null == n
                      ? ''
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function (t) {
                            return [e, '=', t].join('');
                          })
                          .join('&')
                      : e + '=' + n;
                  })
                  .filter(Boolean)
                  .join('&');
              })(e)),
          (h += c ? '#' + c : '')
        );
      }

      function z(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n);
      }
      var X = function () {
        return [].slice
          .call(arguments)
          .join('/')
          .replace(/\/+/g, '/')
          .replace(':/', '://');
      };
    },
    80: function (t, e, n) {},
    82: function (t, e, n) {
      'use strict';
      n(2), n(49), n(3), n(33), n(39), n(14), n(21), n(22), n(1), n(72), n(89);
      var r = n(7);

      function o(t, e) {
        var n;
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return c(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: t[i++],
                    };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          l = !0,
          h = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (l = t.done), t;
          },
          e: function (t) {
            (h = !0), (o = t);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (h) throw o;
            }
          },
        };
      }

      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var l =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        h =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          },
        f =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var e = t.intersectionRatio,
                link = t.target;
              e <= 0 || link.__prefetch();
            });
          });
      e.a = {
        name: 'NuxtLink',
        extends: r.default.component('RouterLink'),
        props: {
          prefetch: {
            type: Boolean,
            default: !0,
          },
          noPrefetch: {
            type: Boolean,
            default: !1,
          },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = l(this.observe, {
              timeout: 2e3,
            }));
        },
        beforeDestroy: function () {
          h(this.handleId),
            this.__observed &&
              (f.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            f &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              f.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function () {
            var t = this.$router.resolve(this.to, this.$route, this.append);
            return t.resolved.matched
              .map(function (t) {
                return t.components.default;
              })
              .filter(function (e) {
                return (
                  t.href ||
                  ('function' == typeof e && !e.options && !e.__prefetched)
                );
              }).length;
          },
          canPrefetch: function () {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || '').includes('2g') || t.saveData))
            );
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (t) {
                return t.components.default;
              })
              .filter(function (t) {
                return 'function' == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              f.unobserve(this.$el);
              var t,
                e = o(this.getPrefetchComponents());
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    r = n();
                  r instanceof Promise && r.catch(function () {}),
                    (n.__prefetched = !0);
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
              if (!this.$root.isPreview) {
                var c = this.$router.resolve(
                  this.to,
                  this.$route,
                  this.append
                ).href;
                this.$nuxt.fetchPayload(c).catch(function () {});
              }
            }
          },
        },
      };
    },
    98: function (t, e, n) {
      'use strict';
      e.a = {};
    },
  },
  [[140, 5, 2, 6]],
]);
