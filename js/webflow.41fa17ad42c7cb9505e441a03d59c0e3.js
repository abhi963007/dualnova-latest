/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var I = (e, t) => () => (t || e((t = {
    exports: {}
  }).exports, t), t.exports);
  var Yi = I(() => {
    "use strict";
    window.tram = function(e) {
      function t(O, V) {
        var z = new Q.Bare;
        return z.init(O, V)
      }

      function r(O) {
        return O.replace(/[A-Z]/g, function(V) {
          return "-" + V.toLowerCase()
        })
      }

      function n(O) {
        var V = parseInt(O.slice(1), 16),
          z = V >> 16 & 255,
          W = V >> 8 & 255,
          K = 255 & V;
        return [z, W, K]
      }

      function i(O, V, z) {
        return "#" + (1 << 24 | O << 16 | V << 8 | z).toString(16).slice(1)
      }

      function a() {}

      function o(O, V) {
        f("Type warning: Expected: [" + O + "] Got: [" + typeof V + "] " + V)
      }

      function s(O, V, z) {
        f("Units do not match [" + O + "]: " + V + ", " + z)
      }

      function l(O, V, z) {
        if (V !== void 0 && (z = V), O === void 0) return z;
        var W = z;
        return be.test(O) || !_e.test(O) ? W = parseInt(O, 10) : _e.test(O) && (W = 1e3 * parseFloat(O)), 0 > W && (W = 0), W === W ? W : z
      }

      function f(O) {
        te.debug && window && window.console.warn(O)
      }

      function u(O) {
        for (var V = -1, z = O ? O.length : 0, W = []; ++V < z;) {
          var K = O[V];
          K && W.push(K)
        }
        return W
      }
      var p = function(O, V, z) {
          function W(le) {
            return typeof le == "object"
          }

          function K(le) {
            return typeof le == "function"
          }

          function Y() {}

          function se(le, oe) {
            function re() {
              var we = new ue;
              return K(we.init) && we.init.apply(we, arguments), we
            }

            function ue() {}
            oe === z && (oe = le, le = Object), re.Bare = ue;
            var fe, ve = Y[O] = le[O],
              Ge = ue[O] = re[O] = new Y;
            return Ge.constructor = re, re.mixin = function(we) {
              return ue[O] = re[O] = se(re, we)[O], re
            }, re.open = function(we) {
              if (fe = {}, K(we) ? fe = we.call(re, Ge, ve, re, le) : W(we) && (fe = we), W(fe))
                for (var Pr in fe) V.call(fe, Pr) && (Ge[Pr] = fe[Pr]);
              return K(Ge.init) || (Ge.init = le), re
            }, re.open(oe)
          }
          return se
        }("prototype", {}.hasOwnProperty),
        g = {
          ease: ["ease", function(O, V, z, W) {
            var K = (O /= W) * O,
              Y = K * O;
            return V + z * (-2.75 * Y * K + 11 * K * K + -15.5 * Y + 8 * K + .25 * O)
          }],
          "ease-in": ["ease-in", function(O, V, z, W) {
            var K = (O /= W) * O,
              Y = K * O;
            return V + z * (-1 * Y * K + 3 * K * K + -3 * Y + 2 * K)
          }],
          "ease-out": ["ease-out", function(O, V, z, W) {
            var K = (O /= W) * O,
              Y = K * O;
            return V + z * (.3 * Y * K + -1.6 * K * K + 2.2 * Y + -1.8 * K + 1.9 * O)
          }],
          "ease-in-out": ["ease-in-out", function(O, V, z, W) {
            var K = (O /= W) * O,
              Y = K * O;
            return V + z * (2 * Y * K + -5 * K * K + 2 * Y + 2 * K)
          }],
          linear: ["linear", function(O, V, z, W) {
            return z * O / W + V
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(O, V, z, W) {
            return z * (O /= W) * O + V
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(O, V, z, W) {
            return -z * (O /= W) * (O - 2) + V
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(O, V, z, W) {
            return (O /= W / 2) < 1 ? z / 2 * O * O + V : -z / 2 * (--O * (O - 2) - 1) + V
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(O, V, z, W) {
            return z * (O /= W) * O * O + V
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(O, V, z, W) {
            return z * ((O = O / W - 1) * O * O + 1) + V
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(O, V, z, W) {
            return (O /= W / 2) < 1 ? z / 2 * O * O * O + V : z / 2 * ((O -= 2) * O * O + 2) + V
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(O, V, z, W) {
            return z * (O /= W) * O * O * O + V
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(O, V, z, W) {
            return -z * ((O = O / W - 1) * O * O * O - 1) + V
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(O, V, z, W) {
            return (O /= W / 2) < 1 ? z / 2 * O * O * O * O + V : -z / 2 * ((O -= 2) * O * O * O - 2) + V
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(O, V, z, W) {
            return z * (O /= W) * O * O * O * O + V
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(O, V, z, W) {
            return z * ((O = O / W - 1) * O * O * O * O + 1) + V
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(O, V, z, W) {
            return (O /= W / 2) < 1 ? z / 2 * O * O * O * O * O + V : z / 2 * ((O -= 2) * O * O * O * O + 2) + V
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(O, V, z, W) {
            return -z * Math.cos(O / W * (Math.PI / 2)) + z + V
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(O, V, z, W) {
            return z * Math.sin(O / W * (Math.PI / 2)) + V
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(O, V, z, W) {
            return -z / 2 * (Math.cos(Math.PI * O / W) - 1) + V
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(O, V, z, W) {
            return O === 0 ? V : z * Math.pow(2, 10 * (O / W - 1)) + V
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(O, V, z, W) {
            return O === W ? V + z : z * (-Math.pow(2, -10 * O / W) + 1) + V
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(O, V, z, W) {
            return O === 0 ? V : O === W ? V + z : (O /= W / 2) < 1 ? z / 2 * Math.pow(2, 10 * (O - 1)) + V : z / 2 * (-Math.pow(2, -10 * --O) + 2) + V
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(O, V, z, W) {
            return -z * (Math.sqrt(1 - (O /= W) * O) - 1) + V
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(O, V, z, W) {
            return z * Math.sqrt(1 - (O = O / W - 1) * O) + V
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(O, V, z, W) {
            return (O /= W / 2) < 1 ? -z / 2 * (Math.sqrt(1 - O * O) - 1) + V : z / 2 * (Math.sqrt(1 - (O -= 2) * O) + 1) + V
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(O, V, z, W, K) {
            return K === void 0 && (K = 1.70158), z * (O /= W) * O * ((K + 1) * O - K) + V
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(O, V, z, W, K) {
            return K === void 0 && (K = 1.70158), z * ((O = O / W - 1) * O * ((K + 1) * O + K) + 1) + V
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(O, V, z, W, K) {
            return K === void 0 && (K = 1.70158), (O /= W / 2) < 1 ? z / 2 * O * O * (((K *= 1.525) + 1) * O - K) + V : z / 2 * ((O -= 2) * O * (((K *= 1.525) + 1) * O + K) + 2) + V
          }]
        },
        d = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        },
        h = document,
        m = window,
        c = "bkwld-tram",
        y = /[\-\.0-9]/g,
        v = /[A-Z]/,
        E = "number",
        b = /^(rgb|#)/,
        _ = /(em|cm|mm|in|pt|pc|px)$/,
        A = /(em|cm|mm|in|pt|pc|px|%)$/,
        S = /(deg|rad|turn)$/,
        x = "unitless",
        L = /(all|none) 0s ease 0s/,
        w = /^(width|height)$/,
        C = " ",
        k = h.createElement("a"),
        M = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        U = function(O) {
          if (O in k.style) return {
            dom: O,
            css: O
          };
          var V, z, W = "",
            K = O.split("-");
          for (V = 0; V < K.length; V++) W += K[V].charAt(0).toUpperCase() + K[V].slice(1);
          for (V = 0; V < M.length; V++)
            if (z = M[V] + W, z in k.style) return {
              dom: z,
              css: F[V] + O
            }
        },
        X = t.support = {
          bind: Function.prototype.bind,
          transform: U("transform"),
          transition: U("transition"),
          backface: U("backface-visibility"),
          timing: U("transition-timing-function")
        };
      if (X.transition) {
        var ne = X.timing.dom;
        if (k.style[ne] = g["ease-in-back"][0], !k.style[ne])
          for (var P in d) g[P][0] = d[P]
      }
      var G = t.frame = function() {
          var O = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
          return O && X.bind ? O.bind(m) : function(V) {
            m.setTimeout(V, 16)
          }
        }(),
        J = t.now = function() {
          var O = m.performance,
            V = O && (O.now || O.webkitNow || O.msNow || O.mozNow);
          return V && X.bind ? V.bind(O) : Date.now || function() {
            return +new Date
          }
        }(),
        D = p(function(O) {
          function V(ce, pe) {
            var Ie = u(("" + ce).split(C)),
              me = Ie[0];
            pe = pe || {};
            var Re = j[me];
            if (!Re) return f("Unsupported property: " + me);
            if (!pe.weak || !this.props[me]) {
              var Xe = Re[0],
                ke = this.props[me];
              return ke || (ke = this.props[me] = new Xe.Bare), ke.init(this.$el, Ie, Re, pe), ke
            }
          }

          function z(ce, pe, Ie) {
            if (ce) {
              var me = typeof ce;
              if (pe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), me == "number" && pe) return this.timer = new ee({
                duration: ce,
                context: this,
                complete: Y
              }), void(this.active = !0);
              if (me == "string" && pe) {
                switch (ce) {
                  case "hide":
                    re.call(this);
                    break;
                  case "stop":
                    se.call(this);
                    break;
                  case "redraw":
                    ue.call(this);
                    break;
                  default:
                    V.call(this, ce, Ie && Ie[1])
                }
                return Y.call(this)
              }
              if (me == "function") return void ce.call(this, this);
              if (me == "object") {
                var Re = 0;
                Ge.call(this, ce, function(Ae, dI) {
                  Ae.span > Re && (Re = Ae.span), Ae.stop(), Ae.animate(dI)
                }, function(Ae) {
                  "wait" in Ae && (Re = l(Ae.wait, 0))
                }), ve.call(this), Re > 0 && (this.timer = new ee({
                  duration: Re,
                  context: this
                }), this.active = !0, pe && (this.timer.complete = Y));
                var Xe = this,
                  ke = !1,
                  fn = {};
                G(function() {
                  Ge.call(Xe, ce, function(Ae) {
                    Ae.active && (ke = !0, fn[Ae.name] = Ae.nextStyle)
                  }), ke && Xe.$el.css(fn)
                })
              }
            }
          }

          function W(ce) {
            ce = l(ce, 0), this.active ? this.queue.push({
              options: ce
            }) : (this.timer = new ee({
              duration: ce,
              context: this,
              complete: Y
            }), this.active = !0)
          }

          function K(ce) {
            return this.active ? (this.queue.push({
              options: ce,
              args: arguments
            }), void(this.timer.complete = Y)) : f("No active transition timer. Use start() or wait() before then().")
          }

          function Y() {
            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
              var ce = this.queue.shift();
              z.call(this, ce.options, !0, ce.args)
            }
          }

          function se(ce) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
            var pe;
            typeof ce == "string" ? (pe = {}, pe[ce] = 1) : pe = typeof ce == "object" && ce != null ? ce : this.props, Ge.call(this, pe, we), ve.call(this)
          }

          function le(ce) {
            se.call(this, ce), Ge.call(this, ce, Pr, hI)
          }

          function oe(ce) {
            typeof ce != "string" && (ce = "block"), this.el.style.display = ce
          }

          function re() {
            se.call(this), this.el.style.display = "none"
          }

          function ue() {
            this.el.offsetHeight
          }

          function fe() {
            se.call(this), e.removeData(this.el, c), this.$el = this.el = null
          }

          function ve() {
            var ce, pe, Ie = [];
            this.upstream && Ie.push(this.upstream);
            for (ce in this.props) pe = this.props[ce], pe.active && Ie.push(pe.string);
            Ie = Ie.join(","), this.style !== Ie && (this.style = Ie, this.el.style[X.transition.dom] = Ie)
          }

          function Ge(ce, pe, Ie) {
            var me, Re, Xe, ke, fn = pe !== we,
              Ae = {};
            for (me in ce) Xe = ce[me], me in he ? (Ae.transform || (Ae.transform = {}), Ae.transform[me] = Xe) : (v.test(me) && (me = r(me)), me in j ? Ae[me] = Xe : (ke || (ke = {}), ke[me] = Xe));
            for (me in Ae) {
              if (Xe = Ae[me], Re = this.props[me], !Re) {
                if (!fn) continue;
                Re = V.call(this, me)
              }
              pe.call(this, Re, Xe)
            }
            Ie && ke && Ie.call(this, ke)
          }

          function we(ce) {
            ce.stop()
          }

          function Pr(ce, pe) {
            ce.set(pe)
          }

          function hI(ce) {
            this.$el.css(ce)
          }

          function We(ce, pe) {
            O[ce] = function() {
              return this.children ? pI.call(this, pe, arguments) : (this.el && pe.apply(this, arguments), this)
            }
          }

          function pI(ce, pe) {
            var Ie, me = this.children.length;
            for (Ie = 0; me > Ie; Ie++) ce.apply(this.children[Ie], pe);
            return this
          }
          O.init = function(ce) {
            if (this.$el = e(ce), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, te.keepInherited && !te.fallback) {
              var pe = Z(this.el, "transition");
              pe && !L.test(pe) && (this.upstream = pe)
            }
            X.backface && te.hideBackface && R(this.el, X.backface.css, "hidden")
          }, We("add", V), We("start", z), We("wait", W), We("then", K), We("next", Y), We("stop", se), We("set", le), We("show", oe), We("hide", re), We("redraw", ue), We("destroy", fe)
        }),
        Q = p(D, function(O) {
          function V(z, W) {
            var K = e.data(z, c) || e.data(z, c, new D.Bare);
            return K.el || K.init(z), W ? K.start(W) : K
          }
          O.init = function(z, W) {
            var K = e(z);
            if (!K.length) return this;
            if (K.length === 1) return V(K[0], W);
            var Y = [];
            return K.each(function(se, le) {
              Y.push(V(le, W))
            }), this.children = Y, this
          }
        }),
        N = p(function(O) {
          function V() {
            var Y = this.get();
            this.update("auto");
            var se = this.get();
            return this.update(Y), se
          }

          function z(Y, se, le) {
            return se !== void 0 && (le = se), Y in g ? Y : le
          }

          function W(Y) {
            var se = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(Y);
            return (se ? i(se[1], se[2], se[3]) : Y).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
          }
          var K = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          O.init = function(Y, se, le, oe) {
            this.$el = Y, this.el = Y[0];
            var re = se[0];
            le[2] && (re = le[2]), ie[re] && (re = ie[re]), this.name = re, this.type = le[1], this.duration = l(se[1], this.duration, K.duration), this.ease = z(se[2], this.ease, K.ease), this.delay = l(se[3], this.delay, K.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = w.test(this.name), this.unit = oe.unit || this.unit || te.defaultUnit, this.angle = oe.angle || this.angle || te.defaultAngle, te.fallback || oe.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + C + this.duration + "ms" + (this.ease != "ease" ? C + g[this.ease][0] : "") + (this.delay ? C + this.delay + "ms" : ""))
          }, O.set = function(Y) {
            Y = this.convert(Y, this.type), this.update(Y), this.redraw()
          }, O.transition = function(Y) {
            this.active = !0, Y = this.convert(Y, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), Y == "auto" && (Y = V.call(this))), this.nextStyle = Y
          }, O.fallback = function(Y) {
            var se = this.el.style[this.name] || this.convert(this.get(), this.type);
            Y = this.convert(Y, this.type), this.auto && (se == "auto" && (se = this.convert(this.get(), this.type)), Y == "auto" && (Y = V.call(this))), this.tween = new B({
              from: se,
              to: Y,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            })
          }, O.get = function() {
            return Z(this.el, this.name)
          }, O.update = function(Y) {
            R(this.el, this.name, Y)
          }, O.stop = function() {
            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, R(this.el, this.name, this.get()));
            var Y = this.tween;
            Y && Y.context && Y.destroy()
          }, O.convert = function(Y, se) {
            if (Y == "auto" && this.auto) return Y;
            var le, oe = typeof Y == "number",
              re = typeof Y == "string";
            switch (se) {
              case E:
                if (oe) return Y;
                if (re && Y.replace(y, "") === "") return +Y;
                le = "number(unitless)";
                break;
              case b:
                if (re) {
                  if (Y === "" && this.original) return this.original;
                  if (se.test(Y)) return Y.charAt(0) == "#" && Y.length == 7 ? Y : W(Y)
                }
                le = "hex or rgb string";
                break;
              case _:
                if (oe) return Y + this.unit;
                if (re && se.test(Y)) return Y;
                le = "number(px) or string(unit)";
                break;
              case A:
                if (oe) return Y + this.unit;
                if (re && se.test(Y)) return Y;
                le = "number(px) or string(unit or %)";
                break;
              case S:
                if (oe) return Y + this.angle;
                if (re && se.test(Y)) return Y;
                le = "number(deg) or string(angle)";
                break;
              case x:
                if (oe || re && A.test(Y)) return Y;
                le = "number(unitless) or string(unit or %)"
            }
            return o(le, Y), Y
          }, O.redraw = function() {
            this.el.offsetHeight
          }
        }),
        T = p(N, function(O, V) {
          O.init = function() {
            V.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
          }
        }),
        q = p(N, function(O, V) {
          O.init = function() {
            V.init.apply(this, arguments), this.animate = this.fallback
          }, O.get = function() {
            return this.$el[this.name]()
          }, O.update = function(z) {
            this.$el[this.name](z)
          }
        }),
        H = p(N, function(O, V) {
          function z(W, K) {
            var Y, se, le, oe, re;
            for (Y in W) oe = he[Y], le = oe[0], se = oe[1] || Y, re = this.convert(W[Y], le), K.call(this, se, re, le)
          }
          O.init = function() {
            V.init.apply(this, arguments), this.current || (this.current = {}, he.perspective && te.perspective && (this.current.perspective = te.perspective, R(this.el, this.name, this.style(this.current)), this.redraw()))
          }, O.set = function(W) {
            z.call(this, W, function(K, Y) {
              this.current[K] = Y
            }), R(this.el, this.name, this.style(this.current)), this.redraw()
          }, O.transition = function(W) {
            var K = this.values(W);
            this.tween = new ae({
              current: this.current,
              values: K,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var Y, se = {};
            for (Y in this.current) se[Y] = Y in K ? K[Y] : this.current[Y];
            this.active = !0, this.nextStyle = this.style(se)
          }, O.fallback = function(W) {
            var K = this.values(W);
            this.tween = new ae({
              current: this.current,
              values: K,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            })
          }, O.update = function() {
            R(this.el, this.name, this.style(this.current))
          }, O.style = function(W) {
            var K, Y = "";
            for (K in W) Y += K + "(" + W[K] + ") ";
            return Y
          }, O.values = function(W) {
            var K, Y = {};
            return z.call(this, W, function(se, le, oe) {
              Y[se] = le, this.current[se] === void 0 && (K = 0, ~se.indexOf("scale") && (K = 1), this.current[se] = this.convert(K, oe))
            }), Y
          }
        }),
        B = p(function(O) {
          function V(re) {
            le.push(re) === 1 && G(z)
          }

          function z() {
            var re, ue, fe, ve = le.length;
            if (ve)
              for (G(z), ue = J(), re = ve; re--;) fe = le[re], fe && fe.render(ue)
          }

          function W(re) {
            var ue, fe = e.inArray(re, le);
            fe >= 0 && (ue = le.slice(fe + 1), le.length = fe, ue.length && (le = le.concat(ue)))
          }

          function K(re) {
            return Math.round(re * oe) / oe
          }

          function Y(re, ue, fe) {
            return i(re[0] + fe * (ue[0] - re[0]), re[1] + fe * (ue[1] - re[1]), re[2] + fe * (ue[2] - re[2]))
          }
          var se = {
            ease: g.ease[1],
            from: 0,
            to: 1
          };
          O.init = function(re) {
            this.duration = re.duration || 0, this.delay = re.delay || 0;
            var ue = re.ease || se.ease;
            g[ue] && (ue = g[ue][1]), typeof ue != "function" && (ue = se.ease), this.ease = ue, this.update = re.update || a, this.complete = re.complete || a, this.context = re.context || this, this.name = re.name;
            var fe = re.from,
              ve = re.to;
            fe === void 0 && (fe = se.from), ve === void 0 && (ve = se.to), this.unit = re.unit || "", typeof fe == "number" && typeof ve == "number" ? (this.begin = fe, this.change = ve - fe) : this.format(ve, fe), this.value = this.begin + this.unit, this.start = J(), re.autoplay !== !1 && this.play()
          }, O.play = function() {
            this.active || (this.start || (this.start = J()), this.active = !0, V(this))
          }, O.stop = function() {
            this.active && (this.active = !1, W(this))
          }, O.render = function(re) {
            var ue, fe = re - this.start;
            if (this.delay) {
              if (fe <= this.delay) return;
              fe -= this.delay
            }
            if (fe < this.duration) {
              var ve = this.ease(fe, 0, 1, this.duration);
              return ue = this.startRGB ? Y(this.startRGB, this.endRGB, ve) : K(this.begin + ve * this.change), this.value = ue + this.unit, void this.update.call(this.context, this.value)
            }
            ue = this.endHex || this.begin + this.change, this.value = ue + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
          }, O.format = function(re, ue) {
            if (ue += "", re += "", re.charAt(0) == "#") return this.startRGB = n(ue), this.endRGB = n(re), this.endHex = re, this.begin = 0, void(this.change = 1);
            if (!this.unit) {
              var fe = ue.replace(y, ""),
                ve = re.replace(y, "");
              fe !== ve && s("tween", ue, re), this.unit = fe
            }
            ue = parseFloat(ue), re = parseFloat(re), this.begin = this.value = ue, this.change = re - ue
          }, O.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = a
          };
          var le = [],
            oe = 1e3
        }),
        ee = p(B, function(O) {
          O.init = function(V) {
            this.duration = V.duration || 0, this.complete = V.complete || a, this.context = V.context, this.play()
          }, O.render = function(V) {
            var z = V - this.start;
            z < this.duration || (this.complete.call(this.context), this.destroy())
          }
        }),
        ae = p(B, function(O, V) {
          O.init = function(z) {
            this.context = z.context, this.update = z.update, this.tweens = [], this.current = z.current;
            var W, K;
            for (W in z.values) K = z.values[W], this.current[W] !== K && this.tweens.push(new B({
              name: W,
              from: this.current[W],
              to: K,
              duration: z.duration,
              delay: z.delay,
              ease: z.ease,
              autoplay: !1
            }));
            this.play()
          }, O.render = function(z) {
            var W, K, Y = this.tweens.length,
              se = !1;
            for (W = Y; W--;) K = this.tweens[W], K.context && (K.render(z), this.current[K.name] = K.value, se = !0);
            return se ? void(this.update && this.update.call(this.context)) : this.destroy()
          }, O.destroy = function() {
            if (V.destroy.call(this), this.tweens) {
              var z, W = this.tweens.length;
              for (z = W; z--;) this.tweens[z].destroy();
              this.tweens = null, this.current = null
            }
          }
        }),
        te = t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !X.transition,
          agentTests: []
        };
      t.fallback = function(O) {
        if (!X.transition) return te.fallback = !0;
        te.agentTests.push("(" + O + ")");
        var V = new RegExp(te.agentTests.join("|"), "i");
        te.fallback = V.test(navigator.userAgent)
      }, t.fallback("6.0.[2-5] Safari"), t.tween = function(O) {
        return new B(O)
      }, t.delay = function(O, V, z) {
        return new ee({
          complete: V,
          duration: O,
          context: z
        })
      }, e.fn.tram = function(O) {
        return t.call(null, this, O)
      };
      var R = e.style,
        Z = e.css,
        ie = {
          transform: X.transform && X.transform.css
        },
        j = {
          color: [T, b],
          background: [T, b, "background-color"],
          "outline-color": [T, b],
          "border-color": [T, b],
          "border-top-color": [T, b],
          "border-right-color": [T, b],
          "border-bottom-color": [T, b],
          "border-left-color": [T, b],
          "border-width": [N, _],
          "border-top-width": [N, _],
          "border-right-width": [N, _],
          "border-bottom-width": [N, _],
          "border-left-width": [N, _],
          "border-spacing": [N, _],
          "letter-spacing": [N, _],
          margin: [N, _],
          "margin-top": [N, _],
          "margin-right": [N, _],
          "margin-bottom": [N, _],
          "margin-left": [N, _],
          padding: [N, _],
          "padding-top": [N, _],
          "padding-right": [N, _],
          "padding-bottom": [N, _],
          "padding-left": [N, _],
          "outline-width": [N, _],
          opacity: [N, E],
          top: [N, A],
          right: [N, A],
          bottom: [N, A],
          left: [N, A],
          "font-size": [N, A],
          "text-indent": [N, A],
          "word-spacing": [N, A],
          width: [N, A],
          "min-width": [N, A],
          "max-width": [N, A],
          height: [N, A],
          "min-height": [N, A],
          "max-height": [N, A],
          "line-height": [N, x],
          "scroll-top": [q, E, "scrollTop"],
          "scroll-left": [q, E, "scrollLeft"]
        },
        he = {};
      X.transform && (j.transform = [H], he = {
        x: [A, "translateX"],
        y: [A, "translateY"],
        rotate: [S],
        rotateX: [S],
        rotateY: [S],
        scale: [E],
        scaleX: [E],
        scaleY: [E],
        skew: [S],
        skewX: [S],
        skewY: [S]
      }), X.transform && X.backface && (he.z = [A, "translateZ"], he.rotateZ = [S], he.scaleZ = [E], he.perspective = [_]);
      var be = /ms/,
        _e = /s|\./;
      return e.tram = t
    }(window.jQuery)
  });
  var Nl = I((rU, Dl) => {
    "use strict";
    var mI = window.$,
      gI = Yi() && mI.tram;
    Dl.exports = function() {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        a = r.push,
        o = r.slice,
        s = r.concat,
        l = n.toString,
        f = n.hasOwnProperty,
        u = r.forEach,
        p = r.map,
        g = r.reduce,
        d = r.reduceRight,
        h = r.filter,
        m = r.every,
        c = r.some,
        y = r.indexOf,
        v = r.lastIndexOf,
        E = Array.isArray,
        b = Object.keys,
        _ = i.bind,
        A = e.each = e.forEach = function(M, F, U) {
          if (M == null) return M;
          if (u && M.forEach === u) M.forEach(F, U);
          else if (M.length === +M.length) {
            for (var X = 0, ne = M.length; X < ne; X++)
              if (F.call(U, M[X], X, M) === t) return
          } else
            for (var P = e.keys(M), X = 0, ne = P.length; X < ne; X++)
              if (F.call(U, M[P[X]], P[X], M) === t) return;
          return M
        };
      e.map = e.collect = function(M, F, U) {
        var X = [];
        return M == null ? X : p && M.map === p ? M.map(F, U) : (A(M, function(ne, P, G) {
          X.push(F.call(U, ne, P, G))
        }), X)
      }, e.find = e.detect = function(M, F, U) {
        var X;
        return S(M, function(ne, P, G) {
          if (F.call(U, ne, P, G)) return X = ne, !0
        }), X
      }, e.filter = e.select = function(M, F, U) {
        var X = [];
        return M == null ? X : h && M.filter === h ? M.filter(F, U) : (A(M, function(ne, P, G) {
          F.call(U, ne, P, G) && X.push(ne)
        }), X)
      };
      var S = e.some = e.any = function(M, F, U) {
        F || (F = e.identity);
        var X = !1;
        return M == null ? X : c && M.some === c ? M.some(F, U) : (A(M, function(ne, P, G) {
          if (X || (X = F.call(U, ne, P, G))) return t
        }), !!X)
      };
      e.contains = e.include = function(M, F) {
        return M == null ? !1 : y && M.indexOf === y ? M.indexOf(F) != -1 : S(M, function(U) {
          return U === F
        })
      }, e.delay = function(M, F) {
        var U = o.call(arguments, 2);
        return setTimeout(function() {
          return M.apply(null, U)
        }, F)
      }, e.defer = function(M) {
        return e.delay.apply(e, [M, 1].concat(o.call(arguments, 1)))
      }, e.throttle = function(M) {
        var F, U, X;
        return function() {
          F || (F = !0, U = arguments, X = this, gI.frame(function() {
            F = !1, M.apply(X, U)
          }))
        }
      }, e.debounce = function(M, F, U) {
        var X, ne, P, G, J, D = function() {
          var Q = e.now() - G;
          Q < F ? X = setTimeout(D, F - Q) : (X = null, U || (J = M.apply(P, ne), P = ne = null))
        };
        return function() {
          P = this, ne = arguments, G = e.now();
          var Q = U && !X;
          return X || (X = setTimeout(D, F)), Q && (J = M.apply(P, ne), P = ne = null), J
        }
      }, e.defaults = function(M) {
        if (!e.isObject(M)) return M;
        for (var F = 1, U = arguments.length; F < U; F++) {
          var X = arguments[F];
          for (var ne in X) M[ne] === void 0 && (M[ne] = X[ne])
        }
        return M
      }, e.keys = function(M) {
        if (!e.isObject(M)) return [];
        if (b) return b(M);
        var F = [];
        for (var U in M) e.has(M, U) && F.push(U);
        return F
      }, e.has = function(M, F) {
        return f.call(M, F)
      }, e.isObject = function(M) {
        return M === Object(M)
      }, e.now = Date.now || function() {
        return new Date().getTime()
      }, e.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var x = /(.)^/,
        L = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        w = /\\|'|\r|\n|\u2028|\u2029/g,
        C = function(M) {
          return "\\" + L[M]
        },
        k = /^\s*(\w|\$)+\s*$/;
      return e.template = function(M, F, U) {
        !F && U && (F = U), F = e.defaults({}, F, e.templateSettings);
        var X = RegExp([(F.escape || x).source, (F.interpolate || x).source, (F.evaluate || x).source].join("|") + "|$", "g"),
          ne = 0,
          P = "__p+='";
        M.replace(X, function(Q, N, T, q, H) {
          return P += M.slice(ne, H).replace(w, C), ne = H + Q.length, N ? P += `'+
((__t=(` + N + `))==null?'':_.escape(__t))+
'` : T ? P += `'+
((__t=(` + T + `))==null?'':__t)+
'` : q && (P += `';
` + q + `
__p+='`), Q
        }), P += `';
`;
        var G = F.variable;
        if (G) {
          if (!k.test(G)) throw new Error("variable is not a bare identifier: " + G)
        } else P = `with(obj||{}){
` + P + `}
`, G = "obj";
        P = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + P + `return __p;
`;
        var J;
        try {
          J = new Function(F.variable || "obj", "_", P)
        } catch (Q) {
          throw Q.source = P, Q
        }
        var D = function(Q) {
          return J.call(this, Q, e)
        };
        return D.source = "function(" + G + `){
` + P + "}", D
      }, e
    }()
  });
  var Me = I((nU, Hl) => {
    "use strict";
    var ge = {},
      Jt = {},
      er = [],
      Qi = window.Webflow || [],
      Et = window.jQuery,
      Ye = Et(window),
      yI = Et(document),
      Je = Et.isFunction,
      je = ge._ = Nl(),
      Vl = ge.tram = Yi() && Et.tram,
      pn = !1,
      $i = !1;
    Vl.config.hideBackface = !1;
    Vl.config.keepInherited = !0;
    ge.define = function(e, t, r) {
      Jt[e] && Bl(Jt[e]);
      var n = Jt[e] = t(Et, je, r) || {};
      return ql(n), n
    };
    ge.require = function(e) {
      return Jt[e]
    };

    function ql(e) {
      ge.env() && (Je(e.design) && Ye.on("__wf_design", e.design), Je(e.preview) && Ye.on("__wf_preview", e.preview)), Je(e.destroy) && Ye.on("__wf_destroy", e.destroy), e.ready && Je(e.ready) && vI(e)
    }

    function vI(e) {
      if (pn) {
        e.ready();
        return
      }
      je.contains(er, e.ready) || er.push(e.ready)
    }

    function Bl(e) {
      Je(e.design) && Ye.off("__wf_design", e.design), Je(e.preview) && Ye.off("__wf_preview", e.preview), Je(e.destroy) && Ye.off("__wf_destroy", e.destroy), e.ready && Je(e.ready) && EI(e)
    }

    function EI(e) {
      er = je.filter(er, function(t) {
        return t !== e.ready
      })
    }
    ge.push = function(e) {
      if (pn) {
        Je(e) && e();
        return
      }
      Qi.push(e)
    };
    ge.env = function(e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top
    };
    var hn = navigator.userAgent.toLowerCase(),
      Gl = ge.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      bI = ge.env.chrome = /chrome/.test(hn) && /Google/.test(navigator.vendor) && parseInt(hn.match(/chrome\/(\d+)\./)[1], 10),
      II = ge.env.ios = /(ipod|iphone|ipad)/.test(hn);
    ge.env.safari = /safari/.test(hn) && !bI && !II;
    var Ki;
    Gl && yI.on("touchstart mousedown", function(e) {
      Ki = e.target
    });
    ge.validClick = Gl ? function(e) {
      return e === Ki || Et.contains(e, Ki)
    } : function() {
      return !0
    };
    var Ul = "resize.webflow orientationchange.webflow load.webflow",
      TI = "scroll.webflow " + Ul;
    ge.resize = Zi(Ye, Ul);
    ge.scroll = Zi(Ye, TI);
    ge.redraw = Zi();

    function Zi(e, t) {
      var r = [],
        n = {};
      return n.up = je.throttle(function(i) {
        je.each(r, function(a) {
          a(i)
        })
      }), e && t && e.on(t, n.up), n.on = function(i) {
        typeof i == "function" && (je.contains(r, i) || r.push(i))
      }, n.off = function(i) {
        if (!arguments.length) {
          r = [];
          return
        }
        r = je.filter(r, function(a) {
          return a !== i
        })
      }, n
    }
    ge.location = function(e) {
      window.location = e
    };
    ge.env() && (ge.location = function() {});
    ge.ready = function() {
      pn = !0, $i ? _I() : je.each(er, kl), je.each(Qi, kl), ge.resize.up()
    };

    function kl(e) {
      Je(e) && e()
    }

    function _I() {
      $i = !1, je.each(Jt, ql)
    }
    var Ft;
    ge.load = function(e) {
      Ft.then(e)
    };

    function zl() {
      Ft && (Ft.reject(), Ye.off("load", Ft.resolve)), Ft = new Et.Deferred, Ye.on("load", Ft.resolve)
    }
    ge.destroy = function(e) {
      e = e || {}, $i = !0, Ye.triggerHandler("__wf_destroy"), e.domready != null && (pn = e.domready), je.each(Jt, Bl), ge.resize.off(), ge.scroll.off(), ge.redraw.off(), er = [], Qi = [], Ft.state() === "pending" && zl()
    };
    Et(ge.ready);
    zl();
    Hl.exports = window.Webflow = ge
  });
  var jl = I((iU, Xl) => {
    "use strict";
    var Wl = Me();
    Wl.define("brand", Xl.exports = function(e) {
      var t = {},
        r = document,
        n = e("html"),
        i = e("body"),
        a = ".w-webflow-badge",
        o = window.location,
        s = /PhantomJS/i.test(navigator.userAgent),
        l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
        f;
      t.ready = function() {
        var d = n.attr("data-wf-status"),
          h = n.attr("data-wf-domain") || "";
        /\.webflow\.io$/i.test(h) && o.hostname !== h && (d = !0), d && !s && (f = f || p(), g(), setTimeout(g, 500), e(r).off(l, u).on(l, u))
      };
      function g() {
        var d = i.children(a),
          h = d.length && d.get(0) === f,
          m = Wl.env("editor");
        if (h) {
          m && d.remove();
          return
        }
        d.length && d.remove(), m || i.append(f)
      }
      return t
    })
  });
  var Kl = I((aU, Yl) => {
    "use strict";
    var tr = Me();
    tr.define("links", Yl.exports = function(e, t) {
      var r = {},
        n = e(window),
        i, a = tr.env(),
        o = window.location,
        s = document.createElement("a"),
        l = "w--current",
        f = /index\.(html|php)$/,
        u = /\/$/,
        p, g;
      r.ready = r.design = r.preview = d;

      function d() {
        i = a && tr.env("design"), g = tr.env("slug") || o.pathname || "", tr.scroll.off(m), p = [];
        for (var y = document.links, v = 0; v < y.length; ++v) h(y[v]);
        p.length && (tr.scroll.on(m), m())
      }

      function h(y) {
        if (!y.getAttribute("hreflang")) {
          var v = i && y.getAttribute("href-disabled") || y.getAttribute("href");
          if (s.href = v, !(v.indexOf(":") >= 0)) {
            var E = e(y);
            if (s.hash.length > 1 && s.host + s.pathname === o.host + o.pathname) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var b = e(s.hash);
              b.length && p.push({
                link: E,
                sec: b,
                active: !1
              });
              return
            }
            if (!(v === "#" || v === "")) {
              var _ = s.href === o.href || v === g || f.test(v) && u.test(g);
              c(E, l, _)
            }
          }
        }
      }

      function m() {
        var y = n.scrollTop(),
          v = n.height();
        t.each(p, function(E) {
          if (!E.link.attr("hreflang")) {
            var b = E.link,
              _ = E.sec,
              A = _.offset().top,
              S = _.outerHeight(),
              x = v * .5,
              L = _.is(":visible") && A + S - x >= y && A + x <= y + v;
            E.active !== L && (E.active = L, c(b, l, L))
          }
        })
      }

      function c(y, v, E) {
        var b = y.hasClass(v);
        E && b || !E && !b || (E ? y.addClass(v) : y.removeClass(v))
      }
      return r
    })
  });
  var $l = I((sU, Ql) => {
    "use strict";
    var dn = Me();
    dn.define("scroll", Ql.exports = function(e) {
      var t = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        },
        r = window.location,
        n = h() ? null : window.history,
        i = e(window),
        a = e(document),
        o = e(document.body),
        s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(k) {
          window.setTimeout(k, 15)
        },
        l = dn.env("editor") ? ".w-editor-body" : "body",
        f = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
        u = 'a[href="#"]',
        p = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
        g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
        d = document.createElement("style");
      d.appendChild(document.createTextNode(g));

      function h() {
        try {
          return !!window.frameElement
        } catch {
          return !0
        }
      }
      var m = /^#[a-zA-Z0-9][\w:.-]*$/;

      function c(k) {
        return m.test(k.hash) && k.host + k.pathname === r.host + r.pathname
      }
      let y = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

      function v() {
        return document.body.getAttribute("data-wf-scroll-motion") === "none" || y.matches
      }

      function E(k, M) {
        var F;
        switch (M) {
          case "add":
            F = k.attr("tabindex"), F ? k.attr("data-wf-tabindex-swap", F) : k.attr("tabindex", "-1");
            break;
          case "remove":
            F = k.attr("data-wf-tabindex-swap"), F ? (k.attr("tabindex", F), k.removeAttr("data-wf-tabindex-swap")) : k.removeAttr("tabindex");
            break
        }
        k.toggleClass("wf-force-outline-none", M === "add")
      }

      function b(k) {
        var M = k.currentTarget;
        if (!(dn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(M.className))) {
          var F = c(M) ? M.hash : "";
          if (F !== "") {
            var U = e(F);
            U.length && (k && (k.preventDefault(), k.stopPropagation()), _(F, k), window.setTimeout(function() {
              A(U, function() {
                E(U, "add"), U.get(0).focus({
                  preventScroll: !0
                }), E(U, "remove")
              })
            }, k ? 0 : 300))
          }
        }
      }

      function _(k) {
        if (r.hash !== k && n && n.pushState && !(dn.env.chrome && r.protocol === "file:")) {
          var M = n.state && n.state.hash;
          M !== k && n.pushState({
            hash: k
          }, "", k)
        }
      }

      function A(k, M) {
        var F = i.scrollTop(),
          U = S(k);
        if (F !== U) {
          var X = x(k, F, U),
            ne = Date.now(),
            P = function() {
              var G = Date.now() - ne;
              window.scroll(0, L(F, U, G, X)), G <= X ? s(P) : typeof M == "function" && M()
            };
          s(P)
        }
      }

      function S(k) {
        var M = e(f),
          F = M.css("position") === "fixed" ? M.outerHeight() : 0,
          U = k.offset().top - F;
        if (k.data("scroll") === "mid") {
          var X = i.height() - F,
            ne = k.outerHeight();
          ne < X && (U -= Math.round((X - ne) / 2))
        }
        return U
      }

      function x(k, M, F) {
        if (v()) return 0;
        var U = 1;
        return o.add(k).each(function(X, ne) {
          var P = parseFloat(ne.getAttribute("data-scroll-time"));
          !isNaN(P) && P >= 0 && (U = P)
        }), (472.143 * Math.log(Math.abs(M - F) + 125) - 2e3) * U
      }

      function L(k, M, F, U) {
        return F > U ? M : k + (M - k) * w(F / U)
      }

      function w(k) {
        return k < .5 ? 4 * k * k * k : (k - 1) * (2 * k - 2) * (2 * k - 2) + 1
      }

      function C() {
        var {
          WF_CLICK_EMPTY: k,
          WF_CLICK_SCROLL: M
        } = t;
        a.on(M, p, b), a.on(k, u, function(F) {
          F.preventDefault()
        }), document.head.insertBefore(d, document.head.firstChild)
      }
      return {
        ready: C
      }
    })
  });
  var ec = I((oU, Jl) => {
    "use strict";
    var Zl = Me();
    Zl.define("focus", Jl.exports = function() {
      var e = [],
        t = !1;

      function r(o) {
        t && (o.preventDefault(), o.stopPropagation(), o.stopImmediatePropagation(), e.unshift(o))
      }

      function n(o) {
        var s = o.target,
          l = s.tagName;
        return /^a$/i.test(l) && s.href != null || /^(button|textarea)$/i.test(l) && s.disabled !== !0 || /^input$/i.test(l) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(l) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(l) || /^video$/i.test(l) && s.controls === !0
      }

      function i(o) {
        n(o) && (t = !0, setTimeout(() => {
          for (t = !1, o.target.focus(); e.length > 0;) {
            var s = e.pop();
            s.target.dispatchEvent(new MouseEvent(s.type, s))
          }
        }, 0))
      }

      function a() {
        typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Zl.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
      }
      return {
        ready: a
      }
    })
  });
  var rc = I((lU, tc) => {
    "use strict";
    var SI = Me();
    SI.define("focus-visible", tc.exports = function() {
      function e(r) {
        var n = !0,
          i = !1,
          a = null,
          o = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0
          };

        function s(E) {
          return !!(E && E !== document && E.nodeName !== "HTML" && E.nodeName !== "BODY" && "classList" in E && "contains" in E.classList)
        }

        function l(E) {
          var b = E.type,
            _ = E.tagName;
          return !!(_ === "INPUT" && o[b] && !E.readOnly || _ === "TEXTAREA" && !E.readOnly || E.isContentEditable)
        }

        function f(E) {
          E.getAttribute("data-wf-focus-visible") || E.setAttribute("data-wf-focus-visible", "true")
        }

        function u(E) {
          E.getAttribute("data-wf-focus-visible") && E.removeAttribute("data-wf-focus-visible")
        }

        function p(E) {
          E.metaKey || E.altKey || E.ctrlKey || (s(r.activeElement) && f(r.activeElement), n = !0)
        }

        function g() {
          n = !1
        }

        function d(E) {
          s(E.target) && (n || l(E.target)) && f(E.target)
        }

        function h(E) {
          s(E.target) && E.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(a), a = window.setTimeout(function() {
            i = !1
          }, 100), u(E.target))
        }

        function m() {
          document.visibilityState === "hidden" && (i && (n = !0), c())
        }

        function c() {
          document.addEventListener("mousemove", v), document.addEventListener("mousedown", v), document.addEventListener("mouseup", v), document.addEventListener("pointermove", v), document.addEventListener("pointerdown", v), document.addEventListener("pointerup", v), document.addEventListener("touchmove", v), document.addEventListener("touchstart", v), document.addEventListener("touchend", v)
        }

        function y() {
          document.removeEventListener("mousemove", v), document.removeEventListener("mousedown", v), document.removeEventListener("mouseup", v), document.removeEventListener("pointermove", v), document.removeEventListener("pointerdown", v), document.removeEventListener("pointerup", v), document.removeEventListener("touchmove", v), document.removeEventListener("touchstart", v), document.removeEventListener("touchend", v)
        }

        function v(E) {
          E.target.nodeName && E.target.nodeName.toLowerCase() === "html" || (n = !1, y())
        }
        document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("visibilitychange", m, !0), c(), r.addEventListener("focus", d, !0), r.addEventListener("blur", h, !0)
      }

      function t() {
        if (typeof document < "u") try {
          document.querySelector(":focus-visible")
        } catch {
          e(document)
        }
      }
      return {
        ready: t
      }
    })
  });
  var ic = I((cU, nc) => {
    "use strict";
    var AI = Me();
    AI.define("touch", nc.exports = function(e) {
      var t = {},
        r = window.getSelection;
      e.event.special.tap = {
        bindType: "click",
        delegateType: "click"
      }, t.init = function(a) {
        return a = typeof a == "string" ? e(a).get(0) : a, a ? new n(a) : null
      };

      function n(a) {
        var o = !1,
          s = !1,
          l = Math.min(Math.round(window.innerWidth * .04), 40),
          f, u;
        a.addEventListener("touchstart", p, !1), a.addEventListener("touchmove", g, !1), a.addEventListener("touchend", d, !1), a.addEventListener("touchcancel", h, !1), a.addEventListener("mousedown", p, !1), a.addEventListener("mousemove", g, !1), a.addEventListener("mouseup", d, !1), a.addEventListener("mouseout", h, !1);

        function p(c) {
          var y = c.touches;
          y && y.length > 1 || (o = !0, y ? (s = !0, f = y[0].clientX) : f = c.clientX, u = f)
        }

        function g(c) {
          if (o) {
            if (s && c.type === "mousemove") {
              c.preventDefault(), c.stopPropagation();
              return
            }
            var y = c.touches,
              v = y ? y[0].clientX : c.clientX,
              E = v - u;
            u = v, Math.abs(E) > l && r && String(r()) === "" && (i("swipe", c, {
              direction: E > 0 ? "right" : "left"
            }), h())
          }
        }

        function d(c) {
          if (o && (o = !1, s && c.type === "mouseup")) {
            c.preventDefault(), c.stopPropagation(), s = !1;
            return
          }
        }

        function h() {
          o = !1
        }

        function m() {
          a.removeEventListener("touchstart", p, !1), a.removeEventListener("touchmove", g, !1), a.removeEventListener("touchend", d, !1), a.removeEventListener("touchcancel", h, !1), a.removeEventListener("mousedown", p, !1), a.removeEventListener("mousemove", g, !1), a.removeEventListener("mouseup", d, !1), a.removeEventListener("mouseout", h, !1), a = null
        }
        this.destroy = m
      }

      function i(a, o, s) {
        var l = e.Event(a, {
          originalEvent: o
        });
        e(o.target).trigger(l, s)
      }
      return t.instance = t.init(document), t
    })
  });
  var sc = I((uU, ac) => {
    "use strict";
    var Ji = Me();
    Ji.define("edit", ac.exports = function(e, t, r) {
      if (r = r || {}, (Ji.env("test") || Ji.env("frame")) && !r.fixture && !xI()) return {
        exit: 1
      };
      var n = {},
        i = e(window),
        a = e(document.documentElement),
        o = document.location,
        s = "hashchange",
        l, f = r.load || g,
        u = !1;
      try {
        u = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
      } catch {}
      u ? f() : o.search ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) || /\?edit$/.test(o.href)) && f() : i.on(s, p).triggerHandler(s);

      function p() {
        l || /\?edit/.test(o.hash) && f()
      }

      function g() {
        l = !0, window.WebflowEditor = !0, i.off(s, p), v(function(b) {
          e.ajax({
            url: y("https://editor-api.webflow.com/api/editor/view"),
            data: {
              siteId: a.attr("data-wf-site")
            },
            xhrFields: {
              withCredentials: !0
            },
            dataType: "json",
            crossDomain: !0,
            success: d(b)
          })
        })
      }

      function d(b) {
        return function(_) {
          if (!_) {
            console.error("Could not load editor data");
            return
          }
          _.thirdPartyCookiesSupported = b, h(c(_.scriptPath), function() {
            window.WebflowEditor(_)
          })
        }
      }

      function h(b, _) {
        e.ajax({
          type: "GET",
          url: b,
          dataType: "script",
          cache: !0
        }).then(_, m)
      }

      function m(b, _, A) {
        throw console.error("Could not load editor script: " + _), A
      }

      function c(b) {
        return b.indexOf("//") >= 0 ? b : y("https://editor-api.webflow.com" + b)
      }

      function y(b) {
        return b.replace(/([^:])\/\//g, "$1/")
      }

      function v(b) {
        var _ = window.document.createElement("iframe");
        _.src = "https://webflow.com/site/third-party-cookie-check.html", _.style.display = "none", _.sandbox = "allow-scripts allow-same-origin";
        var A = function(S) {
          S.data === "WF_third_party_cookies_unsupported" ? (E(_, A), b(!1)) : S.data === "WF_third_party_cookies_supported" && (E(_, A), b(!0))
        };
        _.onerror = function() {
          E(_, A), b(!1)
        }, window.addEventListener("message", A, !1), window.document.body.appendChild(_)
      }

      function E(b, _) {
        window.removeEventListener("message", _, !1), b.remove()
      }
      return n
    });

    function xI() {
      try {
        return window.top.__Cypress__
      } catch {
        return !1
      }
    }
  });
  var ea = I((fU, oc) => {
    var PI = typeof global == "object" && global && global.Object === Object && global;
    oc.exports = PI
  });
  var Ke = I((hU, lc) => {
    var OI = ea(),
      CI = typeof self == "object" && self && self.Object === Object && self,
      wI = OI || CI || Function("return this")();
    lc.exports = wI
  });
  var rr = I((pU, cc) => {
    var RI = Ke(),
      MI = RI.Symbol;
    cc.exports = MI
  });
  var pc = I((dU, hc) => {
    var uc = rr(),
      fc = Object.prototype,
      FI = fc.hasOwnProperty,
      LI = fc.toString,
      Or = uc ? uc.toStringTag : void 0;

    function DI(e) {
      var t = FI.call(e, Or),
        r = e[Or];
      try {
        e[Or] = void 0;
        var n = !0
      } catch {}
      var i = LI.call(e);
      return n && (t ? e[Or] = r : delete e[Or]), i
    }
    hc.exports = DI
  });
  var mc = I((mU, dc) => {
    var NI = Object.prototype,
      kI = NI.toString;

    function VI(e) {
      return kI.call(e)
    }
    dc.exports = VI
  });
  var bt = I((gU, vc) => {
    var gc = rr(),
      qI = pc(),
      BI = mc(),
      GI = "[object Null]",
      UI = "[object Undefined]",
      yc = gc ? gc.toStringTag : void 0;

    function zI(e) {
      return e == null ? e === void 0 ? UI : GI : yc && yc in Object(e) ? qI(e) : BI(e)
    }
    vc.exports = zI
  });
  var ta = I((yU, Ec) => {
    function HI(e, t) {
      return function(r) {
        return e(t(r))
      }
    }
    Ec.exports = HI
  });
  var ra = I((vU, bc) => {
    var WI = ta(),
      XI = WI(Object.getPrototypeOf, Object);
    bc.exports = XI
  });
  var ft = I((EU, Ic) => {
    function jI(e) {
      return e != null && typeof e == "object"
    }
    Ic.exports = jI
  });
  var na = I((bU, _c) => {
    var YI = bt(),
      KI = ra(),
      QI = ft(),
      $I = "[object Object]",
      ZI = Function.prototype,
      JI = Object.prototype,
      Tc = ZI.toString,
      eT = JI.hasOwnProperty,
      tT = Tc.call(Object);

    function rT(e) {
      if (!QI(e) || YI(e) != $I) return !1;
      var t = KI(e);
      if (t === null) return !0;
      var r = eT.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Tc.call(r) == tT
    }
    _c.exports = rT
  });
  var Sc = I(ia => {
    "use strict";
    Object.defineProperty(ia, "__esModule", {
      value: !0
    });
    ia.default = nT;

    function nT(e) {
      var t, r = e.Symbol;
      return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
    }
  });
  var Ac = I((sa, aa) => {
    "use strict";
    Object.defineProperty(sa, "__esModule", {
      value: !0
    });
    var iT = Sc(),
      aT = sT(iT);

    function sT(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var nr;
    typeof self < "u" ? nr = self : typeof window < "u" ? nr = window : typeof global < "u" ? nr = global : typeof aa < "u" ? nr = aa : nr = Function("return this")();
    var oT = (0, aT.default)(nr);
    sa.default = oT
  });
  var oa = I(Cr => {
    "use strict";
    Cr.__esModule = !0;
    Cr.ActionTypes = void 0;
    Cr.default = Cc;
    var lT = na(),
      cT = Oc(lT),
      uT = Ac(),
      xc = Oc(uT);

    function Oc(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var Pc = Cr.ActionTypes = {
      INIT: "@@redux/INIT"
    };

    function Cc(e, t, r) {
      var n;
      if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
        if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
        return r(Cc)(e, t)
      }
      if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
      var i = e,
        a = t,
        o = [],
        s = o,
        l = !1;

      function f() {
        s === o && (s = o.slice())
      }

      function u() {
        return a
      }

      function p(m) {
        if (typeof m != "function") throw new Error("Expected listener to be a function.");
        var c = !0;
        return f(), s.push(m),
          function() {
            if (c) {
              c = !1, f();
              var v = s.indexOf(m);
              s.splice(v, 1)
            }
          }
      }

      function g(m) {
        if (!(0, cT.default)(m)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (typeof m.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (l) throw new Error("Reducers may not dispatch actions.");
        try {
          l = !0, a = i(a, m)
        } finally {
          l = !1
        }
        for (var c = o = s, y = 0; y < c.length; y++) c[y]();
        return m
      }

      function d(m) {
        if (typeof m != "function") throw new Error("Expected the nextReducer to be a function.");
        i = m, g({
          type: Pc.INIT
        })
      }

      function h() {
        var m, c = p;
        return m = {
          subscribe: function(v) {
            if (typeof v != "object") throw new TypeError("Expected the observer to be an object.");

            function E() {
              v.next && v.next(u())
            }
            E();
            var b = c(E);
            return {
              unsubscribe: b
            }
          }
        }, m[xc.default] = function() {
          return this
        }, m
      }
      return g({
        type: Pc.INIT
      }), n = {
        dispatch: g,
        subscribe: p,
        getState: u,
        replaceReducer: d
      }, n[xc.default] = h, n
    }
  });
  var ca = I(la => {
    "use strict";
    la.__esModule = !0;
    la.default = fT;

    function fT(e) {
      typeof console < "u" && typeof console.error == "function" && console.error(e);
      try {
        throw new Error(e)
      } catch {}
    }
  });
  var Mc = I(ua => {
    "use strict";
    ua.__esModule = !0;
    ua.default = gT;
    var wc = oa(),
      hT = na(),
      SU = Rc(hT),
      pT = ca(),
      AU = Rc(pT);

    function Rc(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function dT(e, t) {
      var r = t && t.type,
        n = r && '"' + r.toString() + '"' || "an action";
      return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function mT(e) {
      Object.keys(e).forEach(function(t) {
        var r = e[t],
          n = r(void 0, {
            type: wc.ActionTypes.INIT
          });
        if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
        var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, {
            type: i
          }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + wc.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
      })
    }

    function gT(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i])
      }
      var a = Object.keys(r);
      if (!1) var o;
      var s;
      try {
        mT(r)
      } catch (l) {
        s = l
      }
      return function() {
        var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
          u = arguments[1];
        if (s) throw s;
        if (!1) var p;
        for (var g = !1, d = {}, h = 0; h < a.length; h++) {
          var m = a[h],
            c = r[m],
            y = f[m],
            v = c(y, u);
          if (typeof v > "u") {
            var E = dT(m, u);
            throw new Error(E)
          }
          d[m] = v, g = g || v !== y
        }
        return g ? d : f
      }
    }
  });
  var Lc = I(fa => {
    "use strict";
    fa.__esModule = !0;
    fa.default = yT;

    function Fc(e, t) {
      return function() {
        return t(e.apply(void 0, arguments))
      }
    }

    function yT(e, t) {
      if (typeof e == "function") return Fc(e, t);
      if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var a = r[i],
          o = e[a];
        typeof o == "function" && (n[a] = Fc(o, t))
      }
      return n
    }
  });
  var pa = I(ha => {
    "use strict";
    ha.__esModule = !0;
    ha.default = vT;

    function vT() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      if (t.length === 0) return function(a) {
        return a
      };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function() {
        return i.reduceRight(function(a, o) {
          return o(a)
        }, n.apply(void 0, arguments))
      }
    }
  });
  var Dc = I(da => {
    "use strict";
    da.__esModule = !0;
    var ET = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    };
    da.default = _T;
    var bT = pa(),
      IT = TT(bT);

    function TT(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function _T() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return function(n) {
        return function(i, a, o) {
          var s = n(i, a, o),
            l = s.dispatch,
            f = [],
            u = {
              getState: s.getState,
              dispatch: function(g) {
                return l(g)
              }
            };
          return f = t.map(function(p) {
            return p(u)
          }), l = IT.default.apply(void 0, f)(s.dispatch), ET({}, s, {
            dispatch: l
          })
        }
      }
    }
  });
  var ma = I(Ue => {
    "use strict";
    Ue.__esModule = !0;
    Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = void 0;
    var ST = oa(),
      AT = ir(ST),
      xT = Mc(),
      PT = ir(xT),
      OT = Lc(),
      CT = ir(OT),
      wT = Dc(),
      RT = ir(wT),
      MT = pa(),
      FT = ir(MT),
      LT = ca(),
      wU = ir(LT);

    function ir(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Ue.createStore = AT.default;
    Ue.combineReducers = PT.default;
    Ue.bindActionCreators = CT.default;
    Ue.applyMiddleware = RT.default;
    Ue.compose = FT.default
  });
  var Nc = I(ga => {
    "use strict";
    Object.defineProperty(ga, "__esModule", {
      value: !0
    });

    function DT(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    DT(ga, {
      EventAppliesTo: function() {
        return kT
      },
      EventBasedOn: function() {
        return VT
      },
      EventContinuousMouseAxes: function() {
        return qT
      },
      EventLimitAffectedElements: function() {
        return BT
      },
      EventTypeConsts: function() {
        return NT
      },
      QuickEffectDirectionConsts: function() {
        return UT
      },
      QuickEffectIds: function() {
        return GT
      }
    });
    var NT = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
      },
      kT = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
      },
      VT = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
      },
      qT = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
      },
      BT = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      },
      GT = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      },
      UT = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      }
  });
  var va = I(ya => {
    "use strict";
    Object.defineProperty(ya, "__esModule", {
      value: !0
    });

    function zT(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    zT(ya, {
      ActionAppliesTo: function() {
        return WT
      },
      ActionTypeConsts: function() {
        return HT
      }
    });
    var HT = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      },
      WT = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      }
  });
  var kc = I(Ea => {
    "use strict";
    Object.defineProperty(Ea, "__esModule", {
      value: !0
    });
    Object.defineProperty(Ea, "InteractionTypeConsts", {
      enumerable: !0,
      get: function() {
        return XT
      }
    });
    var XT = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION"
    }
  });
  var Vc = I(ba => {
    "use strict";
    Object.defineProperty(ba, "__esModule", {
      value: !0
    });
    Object.defineProperty(ba, "ReducedMotionTypes", {
      enumerable: !0,
      get: function() {
        return t_
      }
    });
    var jT = va(),
      {
        TRANSFORM_MOVE: YT,
        TRANSFORM_SCALE: KT,
        TRANSFORM_ROTATE: QT,
        TRANSFORM_SKEW: $T,
        STYLE_SIZE: ZT,
        STYLE_FILTER: JT,
        STYLE_FONT_VARIATION: e_
      } = jT.ActionTypeConsts,
      t_ = {
        [YT]: !0,
        [KT]: !0,
        [QT]: !0,
        [$T]: !0,
        [ZT]: !0,
        [JT]: !0,
        [e_]: !0
      }
  });
  var qc = I(Ia => {
    "use strict";
    Object.defineProperty(Ia, "__esModule", {
      value: !0
    });

    function r_(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    r_(Ia, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
        return E_
      },
      IX2_ANIMATION_FRAME_CHANGED: function() {
        return p_
      },
      IX2_CLEAR_REQUESTED: function() {
        return u_
      },
      IX2_ELEMENT_STATE_CHANGED: function() {
        return v_
      },
      IX2_EVENT_LISTENER_ADDED: function() {
        return f_
      },
      IX2_EVENT_STATE_CHANGED: function() {
        return h_
      },
      IX2_INSTANCE_ADDED: function() {
        return m_
      },
      IX2_INSTANCE_REMOVED: function() {
        return y_
      },
      IX2_INSTANCE_STARTED: function() {
        return g_
      },
      IX2_MEDIA_QUERIES_DEFINED: function() {
        return I_
      },
      IX2_PARAMETER_CHANGED: function() {
        return d_
      },
      IX2_PLAYBACK_REQUESTED: function() {
        return l_
      },
      IX2_PREVIEW_REQUESTED: function() {
        return o_
      },
      IX2_RAW_DATA_IMPORTED: function() {
        return n_
      },
      IX2_SESSION_INITIALIZED: function() {
        return i_
      },
      IX2_SESSION_STARTED: function() {
        return a_
      },
      IX2_SESSION_STOPPED: function() {
        return s_
      },
      IX2_STOP_REQUESTED: function() {
        return c_
      },
      IX2_TEST_FRAME_RENDERED: function() {
        return T_
      },
      IX2_VIEWPORT_WIDTH_CHANGED: function() {
        return b_
      }
    });
    var n_ = "IX2_RAW_DATA_IMPORTED",
      i_ = "IX2_SESSION_INITIALIZED",
      a_ = "IX2_SESSION_STARTED",
      s_ = "IX2_SESSION_STOPPED",
      o_ = "IX2_PREVIEW_REQUESTED",
      l_ = "IX2_PLAYBACK_REQUESTED",
      c_ = "IX2_STOP_REQUESTED",
      u_ = "IX2_CLEAR_REQUESTED",
      f_ = "IX2_EVENT_LISTENER_ADDED",
      h_ = "IX2_EVENT_STATE_CHANGED",
      p_ = "IX2_ANIMATION_FRAME_CHANGED",
      d_ = "IX2_PARAMETER_CHANGED",
      m_ = "IX2_INSTANCE_ADDED",
      g_ = "IX2_INSTANCE_STARTED",
      y_ = "IX2_INSTANCE_REMOVED",
      v_ = "IX2_ELEMENT_STATE_CHANGED",
      E_ = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      b_ = "IX2_VIEWPORT_WIDTH_CHANGED",
      I_ = "IX2_MEDIA_QUERIES_DEFINED",
      T_ = "IX2_TEST_FRAME_RENDERED"
  });
  var Bc = I(Ta => {
    "use strict";
    Object.defineProperty(Ta, "__esModule", {
      value: !0
    });

    function __(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    __(Ta, {
      ABSTRACT_NODE: function() {
        return IS
      },
      AUTO: function() {
        return uS
      },
      BACKGROUND: function() {
        return iS
      },
      BACKGROUND_COLOR: function() {
        return nS
      },
      BAR_DELIMITER: function() {
        return pS
      },
      BORDER_COLOR: function() {
        return aS
      },
      BOUNDARY_SELECTOR: function() {
        return O_
      },
      CHILDREN: function() {
        return dS
      },
      COLON_DELIMITER: function() {
        return hS
      },
      COLOR: function() {
        return sS
      },
      COMMA_DELIMITER: function() {
        return fS
      },
      CONFIG_UNIT: function() {
        return N_
      },
      CONFIG_VALUE: function() {
        return M_
      },
      CONFIG_X_UNIT: function() {
        return F_
      },
      CONFIG_X_VALUE: function() {
        return C_
      },
      CONFIG_Y_UNIT: function() {
        return L_
      },
      CONFIG_Y_VALUE: function() {
        return w_
      },
      CONFIG_Z_UNIT: function() {
        return D_
      },
      CONFIG_Z_VALUE: function() {
        return R_
      },
      DISPLAY: function() {
        return oS
      },
      FILTER: function() {
        return J_
      },
      FLEX: function() {
        return lS
      },
      FONT_VARIATION_SETTINGS: function() {
        return eS
      },
      HEIGHT: function() {
        return rS
      },
      HTML_ELEMENT: function() {
        return ES
      },
      IMMEDIATE_CHILDREN: function() {
        return mS
      },
      IX2_ID_DELIMITER: function() {
        return S_
      },
      OPACITY: function() {
        return Z_
      },
      PARENT: function() {
        return yS
      },
      PLAIN_OBJECT: function() {
        return bS
      },
      PRESERVE_3D: function() {
        return vS
      },
      RENDER_GENERAL: function() {
        return _S
      },
      RENDER_PLUGIN: function() {
        return AS
      },
      RENDER_STYLE: function() {
        return SS
      },
      RENDER_TRANSFORM: function() {
        return TS
      },
      ROTATE_X: function() {
        return X_
      },
      ROTATE_Y: function() {
        return j_
      },
      ROTATE_Z: function() {
        return Y_
      },
      SCALE_3D: function() {
        return W_
      },
      SCALE_X: function() {
        return U_
      },
      SCALE_Y: function() {
        return z_
      },
      SCALE_Z: function() {
        return H_
      },
      SIBLINGS: function() {
        return gS
      },
      SKEW: function() {
        return K_
      },
      SKEW_X: function() {
        return Q_
      },
      SKEW_Y: function() {
        return $_
      },
      TRANSFORM: function() {
        return k_
      },
      TRANSLATE_3D: function() {
        return G_
      },
      TRANSLATE_X: function() {
        return V_
      },
      TRANSLATE_Y: function() {
        return q_
      },
      TRANSLATE_Z: function() {
        return B_
      },
      WF_PAGE: function() {
        return A_
      },
      WIDTH: function() {
        return tS
      },
      WILL_CHANGE: function() {
        return cS
      },
      W_MOD_IX: function() {
        return P_
      },
      W_MOD_JS: function() {
        return x_
      }
    });
    var S_ = "|",
      A_ = "data-wf-page",
      x_ = "w-mod-js",
      P_ = "w-mod-ix",
      O_ = ".w-dyn-item",
      C_ = "xValue",
      w_ = "yValue",
      R_ = "zValue",
      M_ = "value",
      F_ = "xUnit",
      L_ = "yUnit",
      D_ = "zUnit",
      N_ = "unit",
      k_ = "transform",
      V_ = "translateX",
      q_ = "translateY",
      B_ = "translateZ",
      G_ = "translate3d",
      U_ = "scaleX",
      z_ = "scaleY",
      H_ = "scaleZ",
      W_ = "scale3d",
      X_ = "rotateX",
      j_ = "rotateY",
      Y_ = "rotateZ",
      K_ = "skew",
      Q_ = "skewX",
      $_ = "skewY",
      Z_ = "opacity",
      J_ = "filter",
      eS = "font-variation-settings",
      tS = "width",
      rS = "height",
      nS = "backgroundColor",
      iS = "background",
      aS = "borderColor",
      sS = "color",
      oS = "display",
      lS = "flex",
      cS = "willChange",
      uS = "AUTO",
      fS = ",",
      hS = ":",
      pS = "|",
      dS = "CHILDREN",
      mS = "IMMEDIATE_CHILDREN",
      gS = "SIBLINGS",
      yS = "PARENT",
      vS = "preserve-3d",
      ES = "HTML_ELEMENT",
      bS = "PLAIN_OBJECT",
      IS = "ABSTRACT_NODE",
      TS = "RENDER_TRANSFORM",
      _S = "RENDER_GENERAL",
      SS = "RENDER_STYLE",
      AS = "RENDER_PLUGIN"
  });
  var Ve = I(Lt => {
    "use strict";
    Object.defineProperty(Lt, "__esModule", {
      value: !0
    });

    function xS(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    xS(Lt, {
      ActionTypeConsts: function() {
        return OS.ActionTypeConsts
      },
      IX2EngineActionTypes: function() {
        return CS
      },
      IX2EngineConstants: function() {
        return wS
      },
      QuickEffectIds: function() {
        return PS.QuickEffectIds
      }
    });
    var PS = mn(Nc(), Lt),
      OS = mn(va(), Lt);
    mn(kc(), Lt);
    mn(Vc(), Lt);
    var CS = Uc(qc()),
      wS = Uc(Bc());

    function mn(e, t) {
      return Object.keys(e).forEach(function(r) {
        r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Object.defineProperty(t, r, {
          enumerable: !0,
          get: function() {
            return e[r]
          }
        })
      }), e
    }

    function Gc(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (Gc = function(n) {
        return n ? r : t
      })(e)
    }

    function Uc(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = Gc(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
  });
  var zc = I(_a => {
    "use strict";
    Object.defineProperty(_a, "__esModule", {
      value: !0
    });
    Object.defineProperty(_a, "ixData", {
      enumerable: !0,
      get: function() {
        return FS
      }
    });
    var RS = Ve(),
      {
        IX2_RAW_DATA_IMPORTED: MS
      } = RS.IX2EngineActionTypes,
      FS = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case MS:
            return t.payload.ixData || Object.freeze({});
          default:
            return e
        }
      }
  });
  var ar = I(Te => {
    "use strict";
    Object.defineProperty(Te, "__esModule", {
      value: !0
    });
    var LS = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Te.clone = yn;
    Te.addLast = Xc;
    Te.addFirst = jc;
    Te.removeLast = Yc;
    Te.removeFirst = Kc;
    Te.insert = Qc;
    Te.removeAt = $c;
    Te.replaceAt = Zc;
    Te.getIn = vn;
    Te.set = En;
    Te.setIn = bn;
    Te.update = eu;
    Te.updateIn = tu;
    Te.merge = ru;
    Te.mergeDeep = nu;
    Te.mergeIn = iu;
    Te.omit = au;
    Te.addDefaults = su;
    var Hc = "INVALID_ARGS";

    function Wc(e) {
      throw new Error(e)
    }

    function Sa(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
    }
    var DS = {}.hasOwnProperty;

    function yn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Sa(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i]
      }
      return r
    }

    function qe(e, t, r) {
      var n = r;
      n == null && Wc(Hc);
      for (var i = !1, a = arguments.length, o = Array(a > 3 ? a - 3 : 0), s = 3; s < a; s++) o[s - 3] = arguments[s];
      for (var l = 0; l < o.length; l++) {
        var f = o[l];
        if (f != null) {
          var u = Sa(f);
          if (u.length)
            for (var p = 0; p <= u.length; p++) {
              var g = u[p];
              if (!(e && n[g] !== void 0)) {
                var d = f[g];
                t && gn(n[g]) && gn(d) && (d = qe(e, t, n[g], d)), !(d === void 0 || d === n[g]) && (i || (i = !0, n = yn(n)), n[g] = d)
              }
            }
        }
      }
      return n
    }

    function gn(e) {
      var t = typeof e > "u" ? "undefined" : LS(e);
      return e != null && (t === "object" || t === "function")
    }

    function Xc(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t])
    }

    function jc(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e)
    }

    function Yc(e) {
      return e.length ? e.slice(0, e.length - 1) : e
    }

    function Kc(e) {
      return e.length ? e.slice(1) : e
    }

    function Qc(e, t, r) {
      return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
    }

    function $c(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
    }

    function Zc(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), a = 0; a < n; a++) i[a] = e[a];
      return i[t] = r, i
    }

    function vn(e, t) {
      if (!Array.isArray(t) && Wc(Hc), e != null) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (r = r?.[i], r === void 0) return r
        }
        return r
      }
    }

    function En(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var a = yn(i);
      return a[t] = r, a
    }

    function Jc(e, t, r, n) {
      var i = void 0,
        a = t[n];
      if (n === t.length - 1) i = r;
      else {
        var o = gn(e) && gn(e[a]) ? e[a] : typeof t[n + 1] == "number" ? [] : {};
        i = Jc(o, t, r, n + 1)
      }
      return En(e, a, i)
    }

    function bn(e, t, r) {
      return t.length ? Jc(e, t, r, 0) : r
    }

    function eu(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return En(e, t, i)
    }

    function tu(e, t, r) {
      var n = vn(e, t),
        i = r(n);
      return bn(e, t, i)
    }

    function ru(e, t, r, n, i, a) {
      for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), l = 6; l < o; l++) s[l - 6] = arguments[l];
      return s.length ? qe.call.apply(qe, [null, !1, !1, e, t, r, n, i, a].concat(s)) : qe(!1, !1, e, t, r, n, i, a)
    }

    function nu(e, t, r, n, i, a) {
      for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), l = 6; l < o; l++) s[l - 6] = arguments[l];
      return s.length ? qe.call.apply(qe, [null, !1, !0, e, t, r, n, i, a].concat(s)) : qe(!1, !0, e, t, r, n, i, a)
    }

    function iu(e, t, r, n, i, a, o) {
      var s = vn(e, t);
      s == null && (s = {});
      for (var l = void 0, f = arguments.length, u = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++) u[p - 7] = arguments[p];
      return u.length ? l = qe.call.apply(qe, [null, !1, !1, s, r, n, i, a, o].concat(u)) : l = qe(!1, !1, s, r, n, i, a, o), bn(e, t, l)
    }

    function au(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (DS.call(e, r[i])) {
          n = !0;
          break
        } if (!n) return e;
      for (var a = {}, o = Sa(e), s = 0; s < o.length; s++) {
        var l = o[s];
        r.indexOf(l) >= 0 || (a[l] = e[l])
      }
      return a
    }

    function su(e, t, r, n, i, a) {
      for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), l = 6; l < o; l++) s[l - 6] = arguments[l];
      return s.length ? qe.call.apply(qe, [null, !0, !1, e, t, r, n, i, a].concat(s)) : qe(!0, !1, e, t, r, n, i, a)
    }
    var NS = {
      clone: yn,
      addLast: Xc,
      addFirst: jc,
      removeLast: Yc,
      removeFirst: Kc,
      insert: Qc,
      removeAt: $c,
      replaceAt: Zc,
      getIn: vn,
      set: En,
      setIn: bn,
      update: eu,
      updateIn: tu,
      merge: ru,
      mergeDeep: nu,
      mergeIn: iu,
      omit: au,
      addDefaults: su
    };
    Te.default = NS
  });
  var lu = I(Aa => {
    "use strict";
    Object.defineProperty(Aa, "__esModule", {
      value: !0
    });
    Object.defineProperty(Aa, "ixRequest", {
      enumerable: !0,
      get: function() {
        return HS
      }
    });
    var kS = Ve(),
      VS = ar(),
      {
        IX2_PREVIEW_REQUESTED: qS,
        IX2_PLAYBACK_REQUESTED: BS,
        IX2_STOP_REQUESTED: GS,
        IX2_CLEAR_REQUESTED: US
      } = kS.IX2EngineActionTypes,
      zS = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      },
      ou = Object.create(null, {
        [qS]: {
          value: "preview"
        },
        [BS]: {
          value: "playback"
        },
        [GS]: {
          value: "stop"
        },
        [US]: {
          value: "clear"
        }
      }),
      HS = (e = zS, t) => {
        if (t.type in ou) {
          let r = [ou[t.type]];
          return (0, VS.setIn)(e, [r], {
            ...t.payload
          })
        }
        return e
      }
  });
  var uu = I(xa => {
    "use strict";
    Object.defineProperty(xa, "__esModule", {
      value: !0
    });
    Object.defineProperty(xa, "ixSession", {
      enumerable: !0,
      get: function() {
        return nA
      }
    });
    var WS = Ve(),
      et = ar(),
      {
        IX2_SESSION_INITIALIZED: XS,
        IX2_SESSION_STARTED: jS,
        IX2_TEST_FRAME_RENDERED: YS,
        IX2_SESSION_STOPPED: KS,
        IX2_EVENT_LISTENER_ADDED: QS,
        IX2_EVENT_STATE_CHANGED: $S,
        IX2_ANIMATION_FRAME_CHANGED: ZS,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: JS,
        IX2_VIEWPORT_WIDTH_CHANGED: eA,
        IX2_MEDIA_QUERIES_DEFINED: tA
      } = WS.IX2EngineActionTypes,
      cu = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1
      },
      rA = 20,
      nA = (e = cu, t) => {
        switch (t.type) {
          case XS: {
            let {
              hasBoundaryNodes: r,
              reducedMotion: n
            } = t.payload;
            return (0, et.merge)(e, {
              hasBoundaryNodes: r,
              reducedMotion: n
            })
          }
          case jS:
            return (0, et.set)(e, "active", !0);
          case YS: {
            let {
              payload: {
                step: r = rA
              }
            } = t;
            return (0, et.set)(e, "tick", e.tick + r)
          }
          case KS:
            return cu;
          case ZS: {
            let {
              payload: {
                now: r
              }
            } = t;
            return (0, et.set)(e, "tick", r)
          }
          case QS: {
            let r = (0, et.addLast)(e.eventListeners, t.payload);
            return (0, et.set)(e, "eventListeners", r)
          }
          case $S: {
            let {
              stateKey: r,
              newState: n
            } = t.payload;
            return (0, et.setIn)(e, ["eventState", r], n)
          }
          case JS: {
            let {
              actionListId: r,
              isPlaying: n
            } = t.payload;
            return (0, et.setIn)(e, ["playbackState", r], n)
          }
          case eA: {
            let {
              width: r,
              mediaQueries: n
            } = t.payload, i = n.length, a = null;
            for (let o = 0; o < i; o++) {
              let {
                key: s,
                min: l,
                max: f
              } = n[o];
              if (r >= l && r <= f) {
                a = s;
                break
              }
            }
            return (0, et.merge)(e, {
              viewportWidth: r,
              mediaQueryKey: a
            })
          }
          case tA:
            return (0, et.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e
        }
      }
  });
  var hu = I((zU, fu) => {
    function iA() {
      this.__data__ = [], this.size = 0
    }
    fu.exports = iA
  });
  var In = I((HU, pu) => {
    function aA(e, t) {
      return e === t || e !== e && t !== t
    }
    pu.exports = aA
  });
  var wr = I((WU, du) => {
    var sA = In();

    function oA(e, t) {
      for (var r = e.length; r--;)
        if (sA(e[r][0], t)) return r;
      return -1
    }
    du.exports = oA
  });
  var gu = I((XU, mu) => {
    var lA = wr(),
      cA = Array.prototype,
      uA = cA.splice;

    function fA(e) {
      var t = this.__data__,
        r = lA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : uA.call(t, r, 1), --this.size, !0
    }
    mu.exports = fA
  });
  var vu = I((jU, yu) => {
    var hA = wr();

    function pA(e) {
      var t = this.__data__,
        r = hA(t, e);
      return r < 0 ? void 0 : t[r][1]
    }
    yu.exports = pA
  });
  var bu = I((YU, Eu) => {
    var dA = wr();

    function mA(e) {
      return dA(this.__data__, e) > -1
    }
    Eu.exports = mA
  });
  var Tu = I((KU, Iu) => {
    var gA = wr();

    function yA(e, t) {
      var r = this.__data__,
        n = gA(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    Iu.exports = yA
  });
  var Rr = I((QU, _u) => {
    var vA = hu(),
      EA = gu(),
      bA = vu(),
      IA = bu(),
      TA = Tu();

    function sr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
      }
    }
    sr.prototype.clear = vA;
    sr.prototype.delete = EA;
    sr.prototype.get = bA;
    sr.prototype.has = IA;
    sr.prototype.set = TA;
    _u.exports = sr
  });
  var Au = I(($U, Su) => {
    var _A = Rr();

    function SA() {
      this.__data__ = new _A, this.size = 0
    }
    Su.exports = SA
  });
  var Pu = I((ZU, xu) => {
    function AA(e) {
      var t = this.__data__,
        r = t.delete(e);
      return this.size = t.size, r
    }
    xu.exports = AA
  });
  var Cu = I((JU, Ou) => {
    function xA(e) {
      return this.__data__.get(e)
    }
    Ou.exports = xA
  });
  var Ru = I((ez, wu) => {
    function PA(e) {
      return this.__data__.has(e)
    }
    wu.exports = PA
  });
  var tt = I((tz, Mu) => {
    function OA(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function")
    }
    Mu.exports = OA
  });
  var Pa = I((rz, Fu) => {
    var CA = bt(),
      wA = tt(),
      RA = "[object AsyncFunction]",
      MA = "[object Function]",
      FA = "[object GeneratorFunction]",
      LA = "[object Proxy]";

    function DA(e) {
      if (!wA(e)) return !1;
      var t = CA(e);
      return t == MA || t == FA || t == RA || t == LA
    }
    Fu.exports = DA
  });
  var Du = I((nz, Lu) => {
    var NA = Ke(),
      kA = NA["__core-js_shared__"];
    Lu.exports = kA
  });
  var Vu = I((iz, ku) => {
    var Oa = Du(),
      Nu = function() {
        var e = /[^.]+$/.exec(Oa && Oa.keys && Oa.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
      }();

    function VA(e) {
      return !!Nu && Nu in e
    }
    ku.exports = VA
  });
  var Ca = I((az, qu) => {
    var qA = Function.prototype,
      BA = qA.toString;

    function GA(e) {
      if (e != null) {
        try {
          return BA.call(e)
        } catch {}
        try {
          return e + ""
        } catch {}
      }
      return ""
    }
    qu.exports = GA
  });
  var Gu = I((sz, Bu) => {
    var UA = Pa(),
      zA = Vu(),
      HA = tt(),
      WA = Ca(),
      XA = /[\\^$.*+?()[\]{}|]/g,
      jA = /^\[object .+?Constructor\]$/,
      YA = Function.prototype,
      KA = Object.prototype,
      QA = YA.toString,
      $A = KA.hasOwnProperty,
      ZA = RegExp("^" + QA.call($A).replace(XA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function JA(e) {
      if (!HA(e) || zA(e)) return !1;
      var t = UA(e) ? ZA : jA;
      return t.test(WA(e))
    }
    Bu.exports = JA
  });
  var zu = I((oz, Uu) => {
    function ex(e, t) {
      return e?.[t]
    }
    Uu.exports = ex
  });
  var It = I((lz, Hu) => {
    var tx = Gu(),
      rx = zu();

    function nx(e, t) {
      var r = rx(e, t);
      return tx(r) ? r : void 0
    }
    Hu.exports = nx
  });
  var Tn = I((cz, Wu) => {
    var ix = It(),
      ax = Ke(),
      sx = ix(ax, "Map");
    Wu.exports = sx
  });
  var Mr = I((uz, Xu) => {
    var ox = It(),
      lx = ox(Object, "create");
    Xu.exports = lx
  });
  var Ku = I((fz, Yu) => {
    var ju = Mr();

    function cx() {
      this.__data__ = ju ? ju(null) : {}, this.size = 0
    }
    Yu.exports = cx
  });
  var $u = I((hz, Qu) => {
    function ux(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t
    }
    Qu.exports = ux
  });
  var Ju = I((pz, Zu) => {
    var fx = Mr(),
      hx = "__lodash_hash_undefined__",
      px = Object.prototype,
      dx = px.hasOwnProperty;

    function mx(e) {
      var t = this.__data__;
      if (fx) {
        var r = t[e];
        return r === hx ? void 0 : r
      }
      return dx.call(t, e) ? t[e] : void 0
    }
    Zu.exports = mx
  });
  var tf = I((dz, ef) => {
    var gx = Mr(),
      yx = Object.prototype,
      vx = yx.hasOwnProperty;

    function Ex(e) {
      var t = this.__data__;
      return gx ? t[e] !== void 0 : vx.call(t, e)
    }
    ef.exports = Ex
  });
  var nf = I((mz, rf) => {
    var bx = Mr(),
      Ix = "__lodash_hash_undefined__";

    function Tx(e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1, r[e] = bx && t === void 0 ? Ix : t, this
    }
    rf.exports = Tx
  });
  var sf = I((gz, af) => {
    var _x = Ku(),
      Sx = $u(),
      Ax = Ju(),
      xx = tf(),
      Px = nf();

    function or(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
      }
    }
    or.prototype.clear = _x;
    or.prototype.delete = Sx;
    or.prototype.get = Ax;
    or.prototype.has = xx;
    or.prototype.set = Px;
    af.exports = or
  });
  var cf = I((yz, lf) => {
    var of = sf(), Ox = Rr(), Cx = Tn();

    function wx() {
      this.size = 0, this.__data__ = {
        hash: new of,
        map: new(Cx || Ox),
        string: new of
      }
    }
    lf.exports = wx
  });
  var ff = I((vz, uf) => {
    function Rx(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    uf.exports = Rx
  });
  var Fr = I((Ez, hf) => {
    var Mx = ff();

    function Fx(e, t) {
      var r = e.__data__;
      return Mx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    hf.exports = Fx
  });
  var df = I((bz, pf) => {
    var Lx = Fr();

    function Dx(e) {
      var t = Lx(this, e).delete(e);
      return this.size -= t ? 1 : 0, t
    }
    pf.exports = Dx
  });
  var gf = I((Iz, mf) => {
    var Nx = Fr();

    function kx(e) {
      return Nx(this, e).get(e)
    }
    mf.exports = kx
  });
  var vf = I((Tz, yf) => {
    var Vx = Fr();

    function qx(e) {
      return Vx(this, e).has(e)
    }
    yf.exports = qx
  });
  var bf = I((_z, Ef) => {
    var Bx = Fr();

    function Gx(e, t) {
      var r = Bx(this, e),
        n = r.size;
      return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    Ef.exports = Gx
  });
  var _n = I((Sz, If) => {
    var Ux = cf(),
      zx = df(),
      Hx = gf(),
      Wx = vf(),
      Xx = bf();

    function lr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
      }
    }
    lr.prototype.clear = Ux;
    lr.prototype.delete = zx;
    lr.prototype.get = Hx;
    lr.prototype.has = Wx;
    lr.prototype.set = Xx;
    If.exports = lr
  });
  var _f = I((Az, Tf) => {
    var jx = Rr(),
      Yx = Tn(),
      Kx = _n(),
      Qx = 200;

    function $x(e, t) {
      var r = this.__data__;
      if (r instanceof jx) {
        var n = r.__data__;
        if (!Yx || n.length < Qx - 1) return n.push([e, t]), this.size = ++r.size, this;
        r = this.__data__ = new Kx(n)
      }
      return r.set(e, t), this.size = r.size, this
    }
    Tf.exports = $x
  });
  var wa = I((xz, Sf) => {
    var Zx = Rr(),
      Jx = Au(),
      eP = Pu(),
      tP = Cu(),
      rP = Ru(),
      nP = _f();

    function cr(e) {
      var t = this.__data__ = new Zx(e);
      this.size = t.size
    }
    cr.prototype.clear = Jx;
    cr.prototype.delete = eP;
    cr.prototype.get = tP;
    cr.prototype.has = rP;
    cr.prototype.set = nP;
    Sf.exports = cr
  });
  var xf = I((Pz, Af) => {
    var iP = "__lodash_hash_undefined__";

    function aP(e) {
      return this.__data__.set(e, iP), this
    }
    Af.exports = aP
  });
  var Of = I((Oz, Pf) => {
    function sP(e) {
      return this.__data__.has(e)
    }
    Pf.exports = sP
  });
  var wf = I((Cz, Cf) => {
    var oP = _n(),
      lP = xf(),
      cP = Of();

    function Sn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new oP; ++t < r;) this.add(e[t])
    }
    Sn.prototype.add = Sn.prototype.push = lP;
    Sn.prototype.has = cP;
    Cf.exports = Sn
  });
  var Mf = I((wz, Rf) => {
    function uP(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
      return !1
    }
    Rf.exports = uP
  });
  var Lf = I((Rz, Ff) => {
    function fP(e, t) {
      return e.has(t)
    }
    Ff.exports = fP
  });
  var Ra = I((Mz, Df) => {
    var hP = wf(),
      pP = Mf(),
      dP = Lf(),
      mP = 1,
      gP = 2;

    function yP(e, t, r, n, i, a) {
      var o = r & mP,
        s = e.length,
        l = t.length;
      if (s != l && !(o && l > s)) return !1;
      var f = a.get(e),
        u = a.get(t);
      if (f && u) return f == t && u == e;
      var p = -1,
        g = !0,
        d = r & gP ? new hP : void 0;
      for (a.set(e, t), a.set(t, e); ++p < s;) {
        var h = e[p],
          m = t[p];
        if (n) var c = o ? n(m, h, p, t, e, a) : n(h, m, p, e, t, a);
        if (c !== void 0) {
          if (c) continue;
          g = !1;
          break
        }
        if (d) {
          if (!pP(t, function(y, v) {
              if (!dP(d, v) && (h === y || i(h, y, r, n, a))) return d.push(v)
            })) {
            g = !1;
            break
          }
        } else if (!(h === m || i(h, m, r, n, a))) {
          g = !1;
          break
        }
      }
      return a.delete(e), a.delete(t), g
    }
    Df.exports = yP
  });
  var kf = I((Fz, Nf) => {
    var vP = Ke(),
      EP = vP.Uint8Array;
    Nf.exports = EP
  });
  var qf = I((Lz, Vf) => {
    function bP(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function(n, i) {
        r[++t] = [i, n]
      }), r
    }
    Vf.exports = bP
  });
  var Gf = I((Dz, Bf) => {
    function IP(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function(n) {
        r[++t] = n
      }), r
    }
    Bf.exports = IP
  });
  var Xf = I((Nz, Wf) => {
    var Uf = rr(),
      zf = kf(),
      TP = In(),
      _P = Ra(),
      SP = qf(),
      AP = Gf(),
      xP = 1,
      PP = 2,
      OP = "[object Boolean]",
      CP = "[object Date]",
      wP = "[object Error]",
      RP = "[object Map]",
      MP = "[object Number]",
      FP = "[object RegExp]",
      LP = "[object Set]",
      DP = "[object String]",
      NP = "[object Symbol]",
      kP = "[object ArrayBuffer]",
      VP = "[object DataView]",
      Hf = Uf ? Uf.prototype : void 0,
      Ma = Hf ? Hf.valueOf : void 0;

    function qP(e, t, r, n, i, a, o) {
      switch (r) {
        case VP:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          e = e.buffer, t = t.buffer;
        case kP:
          return !(e.byteLength != t.byteLength || !a(new zf(e), new zf(t)));
        case OP:
        case CP:
        case MP:
          return TP(+e, +t);
        case wP:
          return e.name == t.name && e.message == t.message;
        case FP:
        case DP:
          return e == t + "";
        case RP:
          var s = SP;
        case LP:
          var l = n & xP;
          if (s || (s = AP), e.size != t.size && !l) return !1;
          var f = o.get(e);
          if (f) return f == t;
          n |= PP, o.set(e, t);
          var u = _P(s(e), s(t), n, i, a, o);
          return o.delete(e), u;
        case NP:
          if (Ma) return Ma.call(e) == Ma.call(t)
      }
      return !1
    }
    Wf.exports = qP
  });
  var An = I((kz, jf) => {
    function BP(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
      return e
    }
    jf.exports = BP
  });
  var Pe = I((Vz, Yf) => {
    var GP = Array.isArray;
    Yf.exports = GP
  });
  var Fa = I((qz, Kf) => {
    var UP = An(),
      zP = Pe();

    function HP(e, t, r) {
      var n = t(e);
      return zP(e) ? n : UP(n, r(e))
    }
    Kf.exports = HP
  });
  var $f = I((Bz, Qf) => {
    function WP(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n;) {
        var o = e[r];
        t(o, r, e) && (a[i++] = o)
      }
      return a
    }
    Qf.exports = WP
  });
  var La = I((Gz, Zf) => {
    function XP() {
      return []
    }
    Zf.exports = XP
  });
  var Da = I((Uz, eh) => {
    var jP = $f(),
      YP = La(),
      KP = Object.prototype,
      QP = KP.propertyIsEnumerable,
      Jf = Object.getOwnPropertySymbols,
      $P = Jf ? function(e) {
        return e == null ? [] : (e = Object(e), jP(Jf(e), function(t) {
          return QP.call(e, t)
        }))
      } : YP;
    eh.exports = $P
  });
  var rh = I((zz, th) => {
    function ZP(e, t) {
      for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
      return n
    }
    th.exports = ZP
  });
  var ih = I((Hz, nh) => {
    var JP = bt(),
      eO = ft(),
      tO = "[object Arguments]";

    function rO(e) {
      return eO(e) && JP(e) == tO
    }
    nh.exports = rO
  });
  var Lr = I((Wz, oh) => {
    var ah = ih(),
      nO = ft(),
      sh = Object.prototype,
      iO = sh.hasOwnProperty,
      aO = sh.propertyIsEnumerable,
      sO = ah(function() {
        return arguments
      }()) ? ah : function(e) {
        return nO(e) && iO.call(e, "callee") && !aO.call(e, "callee")
      };
    oh.exports = sO
  });
  var ch = I((Xz, lh) => {
    function oO() {
      return !1
    }
    lh.exports = oO
  });
  var xn = I((Dr, ur) => {
    var lO = Ke(),
      cO = ch(),
      hh = typeof Dr == "object" && Dr && !Dr.nodeType && Dr,
      uh = hh && typeof ur == "object" && ur && !ur.nodeType && ur,
      uO = uh && uh.exports === hh,
      fh = uO ? lO.Buffer : void 0,
      fO = fh ? fh.isBuffer : void 0,
      hO = fO || cO;
    ur.exports = hO
  });
  var Pn = I((jz, ph) => {
    var pO = 9007199254740991,
      dO = /^(?:0|[1-9]\d*)$/;

    function mO(e, t) {
      var r = typeof e;
      return t = t ?? pO, !!t && (r == "number" || r != "symbol" && dO.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    ph.exports = mO
  });
  var On = I((Yz, dh) => {
    var gO = 9007199254740991;

    function yO(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gO
    }
    dh.exports = yO
  });
  var gh = I((Kz, mh) => {
    var vO = bt(),
      EO = On(),
      bO = ft(),
      IO = "[object Arguments]",
      TO = "[object Array]",
      _O = "[object Boolean]",
      SO = "[object Date]",
      AO = "[object Error]",
      xO = "[object Function]",
      PO = "[object Map]",
      OO = "[object Number]",
      CO = "[object Object]",
      wO = "[object RegExp]",
      RO = "[object Set]",
      MO = "[object String]",
      FO = "[object WeakMap]",
      LO = "[object ArrayBuffer]",
      DO = "[object DataView]",
      NO = "[object Float32Array]",
      kO = "[object Float64Array]",
      VO = "[object Int8Array]",
      qO = "[object Int16Array]",
      BO = "[object Int32Array]",
      GO = "[object Uint8Array]",
      UO = "[object Uint8ClampedArray]",
      zO = "[object Uint16Array]",
      HO = "[object Uint32Array]",
      Ee = {};
    Ee[NO] = Ee[kO] = Ee[VO] = Ee[qO] = Ee[BO] = Ee[GO] = Ee[UO] = Ee[zO] = Ee[HO] = !0;
    Ee[IO] = Ee[TO] = Ee[LO] = Ee[_O] = Ee[DO] = Ee[SO] = Ee[AO] = Ee[xO] = Ee[PO] = Ee[OO] = Ee[CO] = Ee[wO] = Ee[RO] = Ee[MO] = Ee[FO] = !1;

    function WO(e) {
      return bO(e) && EO(e.length) && !!Ee[vO(e)]
    }
    mh.exports = WO
  });
  var vh = I((Qz, yh) => {
    function XO(e) {
      return function(t) {
        return e(t)
      }
    }
    yh.exports = XO
  });
  var bh = I((Nr, fr) => {
    var jO = ea(),
      Eh = typeof Nr == "object" && Nr && !Nr.nodeType && Nr,
      kr = Eh && typeof fr == "object" && fr && !fr.nodeType && fr,
      YO = kr && kr.exports === Eh,
      Na = YO && jO.process,
      KO = function() {
        try {
          var e = kr && kr.require && kr.require("util").types;
          return e || Na && Na.binding && Na.binding("util")
        } catch {}
      }();
    fr.exports = KO
  });
  var Cn = I(($z, _h) => {
    var QO = gh(),
      $O = vh(),
      Ih = bh(),
      Th = Ih && Ih.isTypedArray,
      ZO = Th ? $O(Th) : QO;
    _h.exports = ZO
  });
  var ka = I((Zz, Sh) => {
    var JO = rh(),
      eC = Lr(),
      tC = Pe(),
      rC = xn(),
      nC = Pn(),
      iC = Cn(),
      aC = Object.prototype,
      sC = aC.hasOwnProperty;

    function oC(e, t) {
      var r = tC(e),
        n = !r && eC(e),
        i = !r && !n && rC(e),
        a = !r && !n && !i && iC(e),
        o = r || n || i || a,
        s = o ? JO(e.length, String) : [],
        l = s.length;
      for (var f in e)(t || sC.call(e, f)) && !(o && (f == "length" || i && (f == "offset" || f == "parent") || a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || nC(f, l))) && s.push(f);
      return s
    }
    Sh.exports = oC
  });
  var wn = I((Jz, Ah) => {
    var lC = Object.prototype;

    function cC(e) {
      var t = e && e.constructor,
        r = typeof t == "function" && t.prototype || lC;
      return e === r
    }
    Ah.exports = cC
  });
  var Ph = I((eH, xh) => {
    var uC = ta(),
      fC = uC(Object.keys, Object);
    xh.exports = fC
  });
  var Rn = I((tH, Oh) => {
    var hC = wn(),
      pC = Ph(),
      dC = Object.prototype,
      mC = dC.hasOwnProperty;

    function gC(e) {
      if (!hC(e)) return pC(e);
      var t = [];
      for (var r in Object(e)) mC.call(e, r) && r != "constructor" && t.push(r);
      return t
    }
    Oh.exports = gC
  });
  var Dt = I((rH, Ch) => {
    var yC = Pa(),
      vC = On();

    function EC(e) {
      return e != null && vC(e.length) && !yC(e)
    }
    Ch.exports = EC
  });
  var Vr = I((nH, wh) => {
    var bC = ka(),
      IC = Rn(),
      TC = Dt();

    function _C(e) {
      return TC(e) ? bC(e) : IC(e)
    }
    wh.exports = _C
  });
  var Mh = I((iH, Rh) => {
    var SC = Fa(),
      AC = Da(),
      xC = Vr();

    function PC(e) {
      return SC(e, xC, AC)
    }
    Rh.exports = PC
  });
  var Dh = I((aH, Lh) => {
    var Fh = Mh(),
      OC = 1,
      CC = Object.prototype,
      wC = CC.hasOwnProperty;

    function RC(e, t, r, n, i, a) {
      var o = r & OC,
        s = Fh(e),
        l = s.length,
        f = Fh(t),
        u = f.length;
      if (l != u && !o) return !1;
      for (var p = l; p--;) {
        var g = s[p];
        if (!(o ? g in t : wC.call(t, g))) return !1
      }
      var d = a.get(e),
        h = a.get(t);
      if (d && h) return d == t && h == e;
      var m = !0;
      a.set(e, t), a.set(t, e);
      for (var c = o; ++p < l;) {
        g = s[p];
        var y = e[g],
          v = t[g];
        if (n) var E = o ? n(v, y, g, t, e, a) : n(y, v, g, e, t, a);
        if (!(E === void 0 ? y === v || i(y, v, r, n, a) : E)) {
          m = !1;
          break
        }
        c || (c = g == "constructor")
      }
      if (m && !c) {
        var b = e.constructor,
          _ = t.constructor;
        b != _ && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof _ == "function" && _ instanceof _) && (m = !1)
      }
      return a.delete(e), a.delete(t), m
    }
    Lh.exports = RC
  });
  var kh = I((sH, Nh) => {
    var MC = It(),
      FC = Ke(),
      LC = MC(FC, "DataView");
    Nh.exports = LC
  });
  var qh = I((oH, Vh) => {
    var DC = It(),
      NC = Ke(),
      kC = DC(NC, "Promise");
    Vh.exports = kC
  });
  var Gh = I((lH, Bh) => {
    var VC = It(),
      qC = Ke(),
      BC = VC(qC, "Set");
    Bh.exports = BC
  });
  var Va = I((cH, Uh) => {
    var GC = It(),
      UC = Ke(),
      zC = GC(UC, "WeakMap");
    Uh.exports = zC
  });
  var Mn = I((uH, Kh) => {
    var qa = kh(),
      Ba = Tn(),
      Ga = qh(),
      Ua = Gh(),
      za = Va(),
      Yh = bt(),
      hr = Ca(),
      zh = "[object Map]",
      HC = "[object Object]",
      Hh = "[object Promise]",
      Wh = "[object Set]",
      Xh = "[object WeakMap]",
      jh = "[object DataView]",
      WC = hr(qa),
      XC = hr(Ba),
      jC = hr(Ga),
      YC = hr(Ua),
      KC = hr(za),
      Nt = Yh;
    (qa && Nt(new qa(new ArrayBuffer(1))) != jh || Ba && Nt(new Ba) != zh || Ga && Nt(Ga.resolve()) != Hh || Ua && Nt(new Ua) != Wh || za && Nt(new za) != Xh) && (Nt = function(e) {
      var t = Yh(e),
        r = t == HC ? e.constructor : void 0,
        n = r ? hr(r) : "";
      if (n) switch (n) {
        case WC:
          return jh;
        case XC:
          return zh;
        case jC:
          return Hh;
        case YC:
          return Wh;
        case KC:
          return Xh
      }
      return t
    });
    Kh.exports = Nt
  });
  var np = I((fH, rp) => {
    var Ha = wa(),
      QC = Ra(),
      $C = Xf(),
      ZC = Dh(),
      Qh = Mn(),
      $h = Pe(),
      Zh = xn(),
      JC = Cn(),
      e2 = 1,
      Jh = "[object Arguments]",
      ep = "[object Array]",
      Fn = "[object Object]",
      t2 = Object.prototype,
      tp = t2.hasOwnProperty;

    function r2(e, t, r, n, i, a) {
      var o = $h(e),
        s = $h(t),
        l = o ? ep : Qh(e),
        f = s ? ep : Qh(t);
      l = l == Jh ? Fn : l, f = f == Jh ? Fn : f;
      var u = l == Fn,
        p = f == Fn,
        g = l == f;
      if (g && Zh(e)) {
        if (!Zh(t)) return !1;
        o = !0, u = !1
      }
      if (g && !u) return a || (a = new Ha), o || JC(e) ? QC(e, t, r, n, i, a) : $C(e, t, l, r, n, i, a);
      if (!(r & e2)) {
        var d = u && tp.call(e, "__wrapped__"),
          h = p && tp.call(t, "__wrapped__");
        if (d || h) {
          var m = d ? e.value() : e,
            c = h ? t.value() : t;
          return a || (a = new Ha), i(m, c, r, n, a)
        }
      }
      return g ? (a || (a = new Ha), ZC(e, t, r, n, i, a)) : !1
    }
    rp.exports = r2
  });
  var Wa = I((hH, sp) => {
    var n2 = np(),
      ip = ft();

    function ap(e, t, r, n, i) {
      return e === t ? !0 : e == null || t == null || !ip(e) && !ip(t) ? e !== e && t !== t : n2(e, t, r, n, ap, i)
    }
    sp.exports = ap
  });
  var lp = I((pH, op) => {
    var i2 = wa(),
      a2 = Wa(),
      s2 = 1,
      o2 = 2;

    function l2(e, t, r, n) {
      var i = r.length,
        a = i,
        o = !n;
      if (e == null) return !a;
      for (e = Object(e); i--;) {
        var s = r[i];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
      }
      for (; ++i < a;) {
        s = r[i];
        var l = s[0],
          f = e[l],
          u = s[1];
        if (o && s[2]) {
          if (f === void 0 && !(l in e)) return !1
        } else {
          var p = new i2;
          if (n) var g = n(f, u, l, e, t, p);
          if (!(g === void 0 ? a2(u, f, s2 | o2, n, p) : g)) return !1
        }
      }
      return !0
    }
    op.exports = l2
  });
  var Xa = I((dH, cp) => {
    var c2 = tt();

    function u2(e) {
      return e === e && !c2(e)
    }
    cp.exports = u2
  });
  var fp = I((mH, up) => {
    var f2 = Xa(),
      h2 = Vr();

    function p2(e) {
      for (var t = h2(e), r = t.length; r--;) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, f2(i)]
      }
      return t
    }
    up.exports = p2
  });
  var ja = I((gH, hp) => {
    function d2(e, t) {
      return function(r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
      }
    }
    hp.exports = d2
  });
  var dp = I((yH, pp) => {
    var m2 = lp(),
      g2 = fp(),
      y2 = ja();

    function v2(e) {
      var t = g2(e);
      return t.length == 1 && t[0][2] ? y2(t[0][0], t[0][1]) : function(r) {
        return r === e || m2(r, e, t)
      }
    }
    pp.exports = v2
  });
  var qr = I((vH, mp) => {
    var E2 = bt(),
      b2 = ft(),
      I2 = "[object Symbol]";

    function T2(e) {
      return typeof e == "symbol" || b2(e) && E2(e) == I2
    }
    mp.exports = T2
  });
  var Ln = I((EH, gp) => {
    var _2 = Pe(),
      S2 = qr(),
      A2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      x2 = /^\w*$/;

    function P2(e, t) {
      if (_2(e)) return !1;
      var r = typeof e;
      return r == "number" || r == "symbol" || r == "boolean" || e == null || S2(e) ? !0 : x2.test(e) || !A2.test(e) || t != null && e in Object(t)
    }
    gp.exports = P2
  });
  var Ep = I((bH, vp) => {
    var yp = _n(),
      O2 = "Expected a function";

    function Ya(e, t) {
      if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(O2);
      var r = function() {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          a = r.cache;
        if (a.has(i)) return a.get(i);
        var o = e.apply(this, n);
        return r.cache = a.set(i, o) || a, o
      };
      return r.cache = new(Ya.Cache || yp), r
    }
    Ya.Cache = yp;
    vp.exports = Ya
  });
  var Ip = I((IH, bp) => {
    var C2 = Ep(),
      w2 = 500;

    function R2(e) {
      var t = C2(e, function(n) {
          return r.size === w2 && r.clear(), n
        }),
        r = t.cache;
      return t
    }
    bp.exports = R2
  });
  var _p = I((TH, Tp) => {
    var M2 = Ip(),
      F2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      L2 = /\\(\\)?/g,
      D2 = M2(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(F2, function(r, n, i, a) {
          t.push(i ? a.replace(L2, "$1") : n || r)
        }), t
      });
    Tp.exports = D2
  });
  var Ka = I((_H, Sp) => {
    function N2(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
      return i
    }
    Sp.exports = N2
  });
  var wp = I((SH, Cp) => {
    var Ap = rr(),
      k2 = Ka(),
      V2 = Pe(),
      q2 = qr(),
      B2 = 1 / 0,
      xp = Ap ? Ap.prototype : void 0,
      Pp = xp ? xp.toString : void 0;

    function Op(e) {
      if (typeof e == "string") return e;
      if (V2(e)) return k2(e, Op) + "";
      if (q2(e)) return Pp ? Pp.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -B2 ? "-0" : t
    }
    Cp.exports = Op
  });
  var Mp = I((AH, Rp) => {
    var G2 = wp();

    function U2(e) {
      return e == null ? "" : G2(e)
    }
    Rp.exports = U2
  });
  var Br = I((xH, Fp) => {
    var z2 = Pe(),
      H2 = Ln(),
      W2 = _p(),
      X2 = Mp();

    function j2(e, t) {
      return z2(e) ? e : H2(e, t) ? [e] : W2(X2(e))
    }
    Fp.exports = j2
  });
  var pr = I((PH, Lp) => {
    var Y2 = qr(),
      K2 = 1 / 0;

    function Q2(e) {
      if (typeof e == "string" || Y2(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -K2 ? "-0" : t
    }
    Lp.exports = Q2
  });
  var Dn = I((OH, Dp) => {
    var $2 = Br(),
      Z2 = pr();

    function J2(e, t) {
      t = $2(t, e);
      for (var r = 0, n = t.length; e != null && r < n;) e = e[Z2(t[r++])];
      return r && r == n ? e : void 0
    }
    Dp.exports = J2
  });
  var Nn = I((CH, Np) => {
    var ew = Dn();

    function tw(e, t, r) {
      var n = e == null ? void 0 : ew(e, t);
      return n === void 0 ? r : n
    }
    Np.exports = tw
  });
  var Vp = I((wH, kp) => {
    function rw(e, t) {
      return e != null && t in Object(e)
    }
    kp.exports = rw
  });
  var Bp = I((RH, qp) => {
    var nw = Br(),
      iw = Lr(),
      aw = Pe(),
      sw = Pn(),
      ow = On(),
      lw = pr();

    function cw(e, t, r) {
      t = nw(t, e);
      for (var n = -1, i = t.length, a = !1; ++n < i;) {
        var o = lw(t[n]);
        if (!(a = e != null && r(e, o))) break;
        e = e[o]
      }
      return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && ow(i) && sw(o, i) && (aw(e) || iw(e)))
    }
    qp.exports = cw
  });
  var Up = I((MH, Gp) => {
    var uw = Vp(),
      fw = Bp();

    function hw(e, t) {
      return e != null && fw(e, t, uw)
    }
    Gp.exports = hw
  });
  var Hp = I((FH, zp) => {
    var pw = Wa(),
      dw = Nn(),
      mw = Up(),
      gw = Ln(),
      yw = Xa(),
      vw = ja(),
      Ew = pr(),
      bw = 1,
      Iw = 2;

    function Tw(e, t) {
      return gw(e) && yw(t) ? vw(Ew(e), t) : function(r) {
        var n = dw(r, e);
        return n === void 0 && n === t ? mw(r, e) : pw(t, n, bw | Iw)
      }
    }
    zp.exports = Tw
  });
  var kn = I((LH, Wp) => {
    function _w(e) {
      return e
    }
    Wp.exports = _w
  });
  var Qa = I((DH, Xp) => {
    function Sw(e) {
      return function(t) {
        return t?.[e]
      }
    }
    Xp.exports = Sw
  });
  var Yp = I((NH, jp) => {
    var Aw = Dn();

    function xw(e) {
      return function(t) {
        return Aw(t, e)
      }
    }
    jp.exports = xw
  });
  var Qp = I((kH, Kp) => {
    var Pw = Qa(),
      Ow = Yp(),
      Cw = Ln(),
      ww = pr();

    function Rw(e) {
      return Cw(e) ? Pw(ww(e)) : Ow(e)
    }
    Kp.exports = Rw
  });
  var Tt = I((VH, $p) => {
    var Mw = dp(),
      Fw = Hp(),
      Lw = kn(),
      Dw = Pe(),
      Nw = Qp();

    function kw(e) {
      return typeof e == "function" ? e : e == null ? Lw : typeof e == "object" ? Dw(e) ? Fw(e[0], e[1]) : Mw(e) : Nw(e)
    }
    $p.exports = kw
  });
  var $a = I((qH, Zp) => {
    var Vw = Tt(),
      qw = Dt(),
      Bw = Vr();

    function Gw(e) {
      return function(t, r, n) {
        var i = Object(t);
        if (!qw(t)) {
          var a = Vw(r, 3);
          t = Bw(t), r = function(s) {
            return a(i[s], s, i)
          }
        }
        var o = e(t, r, n);
        return o > -1 ? i[a ? t[o] : o] : void 0
      }
    }
    Zp.exports = Gw
  });
  var Za = I((BH, Jp) => {
    function Uw(e, t, r, n) {
      for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
        if (t(e[a], a, e)) return a;
      return -1
    }
    Jp.exports = Uw
  });
  var td = I((GH, ed) => {
    var zw = /\s/;

    function Hw(e) {
      for (var t = e.length; t-- && zw.test(e.charAt(t)););
      return t
    }
    ed.exports = Hw
  });
  var nd = I((UH, rd) => {
    var Ww = td(),
      Xw = /^\s+/;

    function jw(e) {
      return e && e.slice(0, Ww(e) + 1).replace(Xw, "")
    }
    rd.exports = jw
  });
  var Vn = I((zH, sd) => {
    var Yw = nd(),
      id = tt(),
      Kw = qr(),
      ad = 0 / 0,
      Qw = /^[-+]0x[0-9a-f]+$/i,
      $w = /^0b[01]+$/i,
      Zw = /^0o[0-7]+$/i,
      Jw = parseInt;

    function eR(e) {
      if (typeof e == "number") return e;
      if (Kw(e)) return ad;
      if (id(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = id(t) ? t + "" : t
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = Yw(e);
      var r = $w.test(e);
      return r || Zw.test(e) ? Jw(e.slice(2), r ? 2 : 8) : Qw.test(e) ? ad : +e
    }
    sd.exports = eR
  });
  var cd = I((HH, ld) => {
    var tR = Vn(),
      od = 1 / 0,
      rR = 17976931348623157e292;

    function nR(e) {
      if (!e) return e === 0 ? e : 0;
      if (e = tR(e), e === od || e === -od) {
        var t = e < 0 ? -1 : 1;
        return t * rR
      }
      return e === e ? e : 0
    }
    ld.exports = nR
  });
  var Ja = I((WH, ud) => {
    var iR = cd();

    function aR(e) {
      var t = iR(e),
        r = t % 1;
      return t === t ? r ? t - r : t : 0
    }
    ud.exports = aR
  });
  var es = I((XH, fd) => {
    var sR = Za(),
      oR = Tt(),
      lR = Ja(),
      cR = Math.max;

    function uR(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : lR(r);
      return i < 0 && (i = cR(n + i, 0)), sR(e, oR(t, 3), i)
    }
    fd.exports = uR
  });
  var ts = I((jH, hd) => {
    var fR = $a(),
      hR = es(),
      pR = fR(hR);
    hd.exports = pR
  });
  var Bn = I(rs => {
    "use strict";
    Object.defineProperty(rs, "__esModule", {
      value: !0
    });

    function dR(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    dR(rs, {
      ELEMENT_MATCHES: function() {
        return yR
      },
      FLEX_PREFIXED: function() {
        return vR
      },
      IS_BROWSER_ENV: function() {
        return dd
      },
      TRANSFORM_PREFIXED: function() {
        return md
      },
      TRANSFORM_STYLE_PREFIXED: function() {
        return ER
      },
      withBrowser: function() {
        return qn
      }
    });
    var mR = gR(ts());

    function gR(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var dd = typeof window < "u",
      qn = (e, t) => dd ? e() : t,
      yR = qn(() => (0, mR.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
      vR = qn(() => {
        let e = document.createElement("i"),
          t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
          r = "";
        try {
          let {
            length: n
          } = t;
          for (let i = 0; i < n; i++) {
            let a = t[i];
            if (e.style.display = a, e.style.display === a) return a
          }
          return r
        } catch {
          return r
        }
      }, "flex"),
      md = qn(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            r = "Transform",
            {
              length: n
            } = t;
          for (let i = 0; i < n; i++) {
            let a = t[i] + r;
            if (e.style[a] !== void 0) return a
          }
        }
        return "transform"
      }, "transform"),
      pd = md.split("transform")[0],
      ER = pd ? pd + "TransformStyle" : "transformStyle"
  });
  var ns = I((KH, bd) => {
    var bR = 4,
      IR = .001,
      TR = 1e-7,
      _R = 10,
      Gr = 11,
      Gn = 1 / (Gr - 1),
      SR = typeof Float32Array == "function";

    function gd(e, t) {
      return 1 - 3 * t + 3 * e
    }

    function yd(e, t) {
      return 3 * t - 6 * e
    }

    function vd(e) {
      return 3 * e
    }

    function Un(e, t, r) {
      return ((gd(t, r) * e + yd(t, r)) * e + vd(t)) * e
    }

    function Ed(e, t, r) {
      return 3 * gd(t, r) * e * e + 2 * yd(t, r) * e + vd(t)
    }

    function AR(e, t, r, n, i) {
      var a, o, s = 0;
      do o = t + (r - t) / 2, a = Un(o, n, i) - e, a > 0 ? r = o : t = o; while (Math.abs(a) > TR && ++s < _R);
      return o
    }

    function xR(e, t, r, n) {
      for (var i = 0; i < bR; ++i) {
        var a = Ed(t, r, n);
        if (a === 0) return t;
        var o = Un(t, r, n) - e;
        t -= o / a
      }
      return t
    }
    bd.exports = function(t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
      var a = SR ? new Float32Array(Gr) : new Array(Gr);
      if (t !== r || n !== i)
        for (var o = 0; o < Gr; ++o) a[o] = Un(o * Gn, t, n);

      function s(l) {
        for (var f = 0, u = 1, p = Gr - 1; u !== p && a[u] <= l; ++u) f += Gn;
        --u;
        var g = (l - a[u]) / (a[u + 1] - a[u]),
          d = f + g * Gn,
          h = Ed(d, t, n);
        return h >= IR ? xR(l, d, t, n) : h === 0 ? d : AR(l, f, f + Gn, t, n)
      }
      return function(f) {
        return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : Un(s(f), r, i)
      }
    }
  });
  var as = I(is => {
    "use strict";
    Object.defineProperty(is, "__esModule", {
      value: !0
    });

    function PR(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    PR(is, {
      bounce: function() {
        return uM
      },
      bouncePast: function() {
        return fM
      },
      ease: function() {
        return CR
      },
      easeIn: function() {
        return wR
      },
      easeInOut: function() {
        return MR
      },
      easeOut: function() {
        return RR
      },
      inBack: function() {
        return tM
      },
      inCirc: function() {
        return $R
      },
      inCubic: function() {
        return NR
      },
      inElastic: function() {
        return iM
      },
      inExpo: function() {
        return YR
      },
      inOutBack: function() {
        return nM
      },
      inOutCirc: function() {
        return JR
      },
      inOutCubic: function() {
        return VR
      },
      inOutElastic: function() {
        return sM
      },
      inOutExpo: function() {
        return QR
      },
      inOutQuad: function() {
        return DR
      },
      inOutQuart: function() {
        return GR
      },
      inOutQuint: function() {
        return HR
      },
      inOutSine: function() {
        return jR
      },
      inQuad: function() {
        return FR
      },
      inQuart: function() {
        return qR
      },
      inQuint: function() {
        return UR
      },
      inSine: function() {
        return WR
      },
      outBack: function() {
        return rM
      },
      outBounce: function() {
        return eM
      },
      outCirc: function() {
        return ZR
      },
      outCubic: function() {
        return kR
      },
      outElastic: function() {
        return aM
      },
      outExpo: function() {
        return KR
      },
      outQuad: function() {
        return LR
      },
      outQuart: function() {
        return BR
      },
      outQuint: function() {
        return zR
      },
      outSine: function() {
        return XR
      },
      swingFrom: function() {
        return lM
      },
      swingFromTo: function() {
        return oM
      },
      swingTo: function() {
        return cM
      }
    });
    var zn = OR(ns());

    function OR(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var ht = 1.70158,
      CR = (0, zn.default)(.25, .1, .25, 1),
      wR = (0, zn.default)(.42, 0, 1, 1),
      RR = (0, zn.default)(0, 0, .58, 1),
      MR = (0, zn.default)(.42, 0, .58, 1);

    function FR(e) {
      return Math.pow(e, 2)
    }

    function LR(e) {
      return -(Math.pow(e - 1, 2) - 1)
    }

    function DR(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function NR(e) {
      return Math.pow(e, 3)
    }

    function kR(e) {
      return Math.pow(e - 1, 3) + 1
    }

    function VR(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function qR(e) {
      return Math.pow(e, 4)
    }

    function BR(e) {
      return -(Math.pow(e - 1, 4) - 1)
    }

    function GR(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function UR(e) {
      return Math.pow(e, 5)
    }

    function zR(e) {
      return Math.pow(e - 1, 5) + 1
    }

    function HR(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function WR(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function XR(e) {
      return Math.sin(e * (Math.PI / 2))
    }

    function jR(e) {
      return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function YR(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function KR(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function QR(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function $R(e) {
      return -(Math.sqrt(1 - e * e) - 1)
    }

    function ZR(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function JR(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function eM(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function tM(e) {
      let t = ht;
      return e * e * ((t + 1) * e - t)
    }

    function rM(e) {
      let t = ht;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function nM(e) {
      let t = ht;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function iM(e) {
      let t = ht,
        r = 0,
        n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function aM(e) {
      let t = ht,
        r = 0,
        n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function sM(e) {
      let t = ht,
        r = 0,
        n = 1;
      return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function oM(e) {
      let t = ht;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function lM(e) {
      let t = ht;
      return e * e * ((t + 1) * e - t)
    }

    function cM(e) {
      let t = ht;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function uM(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function fM(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
  });
  var ls = I(os => {
    "use strict";
    Object.defineProperty(os, "__esModule", {
      value: !0
    });

    function hM(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    hM(os, {
      applyEasing: function() {
        return yM
      },
      createBezierEasing: function() {
        return gM
      },
      optimizeFloat: function() {
        return ss
      }
    });
    var Id = mM(as()),
      pM = dM(ns());

    function dM(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function Td(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (Td = function(n) {
        return n ? r : t
      })(e)
    }

    function mM(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = Td(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }

    function ss(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0
    }

    function gM(e) {
      return (0, pM.default)(...e)
    }

    function yM(e, t, r) {
      return t === 0 ? 0 : t === 1 ? 1 : ss(r ? t > 0 ? r(t) : t : t > 0 && e && Id[e] ? Id[e](t) : t)
    }
  });
  var xd = I(us => {
    "use strict";
    Object.defineProperty(us, "__esModule", {
      value: !0
    });

    function vM(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    vM(us, {
      createElementState: function() {
        return Ad
      },
      ixElements: function() {
        return MM
      },
      mergeActionState: function() {
        return cs
      }
    });
    var Hn = ar(),
      Sd = Ve(),
      {
        HTML_ELEMENT: ZH,
        PLAIN_OBJECT: EM,
        ABSTRACT_NODE: JH,
        CONFIG_X_VALUE: bM,
        CONFIG_Y_VALUE: IM,
        CONFIG_Z_VALUE: TM,
        CONFIG_VALUE: _M,
        CONFIG_X_UNIT: SM,
        CONFIG_Y_UNIT: AM,
        CONFIG_Z_UNIT: xM,
        CONFIG_UNIT: PM
      } = Sd.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: OM,
        IX2_INSTANCE_ADDED: CM,
        IX2_ELEMENT_STATE_CHANGED: wM
      } = Sd.IX2EngineActionTypes,
      _d = {},
      RM = "refState",
      MM = (e = _d, t = {}) => {
        switch (t.type) {
          case OM:
            return _d;
          case CM: {
            let {
              elementId: r,
              element: n,
              origin: i,
              actionItem: a,
              refType: o
            } = t.payload, {
              actionTypeId: s
            } = a, l = e;
            return (0, Hn.getIn)(l, [r, n]) !== n && (l = Ad(l, n, o, r, a)), cs(l, r, s, i, a)
          }
          case wM: {
            let {
              elementId: r,
              actionTypeId: n,
              current: i,
              actionItem: a
            } = t.payload;
            return cs(e, r, n, i, a)
          }
          default:
            return e
        }
      };

    function Ad(e, t, r, n, i) {
      let a = r === EM ? (0, Hn.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, Hn.mergeIn)(e, [n], {
        id: n,
        ref: t,
        refId: a,
        refType: r
      })
    }

    function cs(e, t, r, n, i) {
      let a = LM(i),
        o = [t, RM, r];
      return (0, Hn.mergeIn)(e, o, n, a)
    }
    var FM = [
      [bM, SM],
      [IM, AM],
      [TM, xM],
      [_M, PM]
    ];

    function LM(e) {
      let {
        config: t
      } = e;
      return FM.reduce((r, n) => {
        let i = n[0],
          a = n[1],
          o = t[i],
          s = t[a];
        return o != null && s != null && (r[a] = s), r
      }, {})
    }
  });
  var Pd = I(fs => {
    "use strict";
    Object.defineProperty(fs, "__esModule", {
      value: !0
    });

    function DM(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    DM(fs, {
      clearPlugin: function() {
        return UM
      },
      createPluginInstance: function() {
        return BM
      },
      getPluginConfig: function() {
        return NM
      },
      getPluginDestination: function() {
        return qM
      },
      getPluginDuration: function() {
        return kM
      },
      getPluginOrigin: function() {
        return VM
      },
      renderPlugin: function() {
        return GM
      }
    });
    var NM = e => e.value,
      kM = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
      },
      VM = e => e || {
        value: 0
      },
      qM = e => ({
        value: e.value
      }),
      BM = e => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t
      },
      GM = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n)
      },
      UM = e => {
        window.Webflow.require("lottie").createInstance(e).stop()
      }
  });
  var Cd = I(hs => {
    "use strict";
    Object.defineProperty(hs, "__esModule", {
      value: !0
    });

    function zM(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    zM(hs, {
      clearPlugin: function() {
        return JM
      },
      createPluginInstance: function() {
        return $M
      },
      getPluginConfig: function() {
        return jM
      },
      getPluginDestination: function() {
        return QM
      },
      getPluginDuration: function() {
        return YM
      },
      getPluginOrigin: function() {
        return KM
      },
      renderPlugin: function() {
        return ZM
      }
    });
    var HM = e => document.querySelector(`[data-w-id="${e}"]`),
      WM = () => window.Webflow.require("spline"),
      XM = (e, t) => e.filter(r => !t.includes(r)),
      jM = (e, t) => e.value[t],
      YM = () => null,
      Od = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      }),
      KM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let a = Object.keys(e),
            o = XM(n, a);
          return o.length ? o.reduce((l, f) => (l[f] = Od[f], l), e) : e
        }
        return n.reduce((a, o) => (a[o] = Od[o], a), {})
      },
      QM = e => e.value,
      $M = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? HM(r) : null
      },
      ZM = (e, t, r) => {
        let n = WM(),
          i = n.getInstance(e),
          a = r.config.target.objectId,
          o = s => {
            if (!s) throw new Error("Invalid spline app passed to renderSpline");
            let l = a && s.findObjectById(a);
            if (!l) return;
            let {
              PLUGIN_SPLINE: f
            } = t;
            f.positionX != null && (l.position.x = f.positionX), f.positionY != null && (l.position.y = f.positionY), f.positionZ != null && (l.position.z = f.positionZ), f.rotationX != null && (l.rotation.x = f.rotationX), f.rotationY != null && (l.rotation.y = f.rotationY), f.rotationZ != null && (l.rotation.z = f.rotationZ), f.scaleX != null && (l.scale.x = f.scaleX), f.scaleY != null && (l.scale.y = f.scaleY), f.scaleZ != null && (l.scale.z = f.scaleZ)
          };
        i ? o(i.spline) : n.setLoadHandler(e, o)
      },
      JM = () => null
  });
  var wd = I(ms => {
    "use strict";
    Object.defineProperty(ms, "__esModule", {
      value: !0
    });

    function e3(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    e3(ms, {
      clearPlugin: function() {
        return c3
      },
      createPluginInstance: function() {
        return o3
      },
      getPluginConfig: function() {
        return n3
      },
      getPluginDestination: function() {
        return s3
      },
      getPluginDuration: function() {
        return i3
      },
      getPluginOrigin: function() {
        return a3
      },
      renderPlugin: function() {
        return l3
      }
    });
    var ps = "--wf-rive-fit",
      ds = "--wf-rive-alignment",
      t3 = e => document.querySelector(`[data-w-id="${e}"]`),
      r3 = () => window.Webflow.require("rive"),
      n3 = (e, t) => e.value.inputs[t],
      i3 = () => null,
      a3 = (e, t) => {
        if (e) return e;
        let r = {},
          {
            inputs: n = {}
          } = t.config.value;
        for (let i in n) n[i] == null && (r[i] = 0);
        return r
      },
      s3 = e => e.value.inputs ?? {},
      o3 = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let n = t?.config?.target?.pluginElement;
        return n ? t3(n) : null
      },
      l3 = (e, {
        PLUGIN_RIVE: t
      }, r) => {
        let n = r3(),
          i = n.getInstance(e),
          a = n.rive.StateMachineInputType,
          {
            name: o,
            inputs: s = {}
          } = r.config.value || {};

        function l(f) {
          if (f.loaded) u();
          else {
            let p = () => {
              u(), f?.off("load", p)
            };
            f?.on("load", p)
          }

          function u() {
            let p = f.stateMachineInputs(o);
            if (p != null) {
              if (f.isPlaying || f.play(o, !1), ps in s || ds in s) {
                let g = f.layout,
                  d = s[ps] ?? g.fit,
                  h = s[ds] ?? g.alignment;
                (d !== g.fit || h !== g.alignment) && (f.layout = g.copyWith({
                  fit: d,
                  alignment: h
                }))
              }
              for (let g in s) {
                if (g === ps || g === ds) continue;
                let d = p.find(h => h.name === g);
                if (d != null) switch (d.type) {
                  case a.Boolean: {
                    if (s[g] != null) {
                      let h = !!s[g];
                      d.value = h
                    }
                    break
                  }
                  case a.Number: {
                    let h = t[g];
                    h != null && (d.value = h);
                    break
                  }
                  case a.Trigger: {
                    s[g] && d.fire();
                    break
                  }
                }
              }
            }
          }
        }
        i?.rive ? l(i.rive) : n.setLoadHandler(e, l)
      },
      c3 = (e, t) => null
  });
  var ys = I(gs => {
    "use strict";
    Object.defineProperty(gs, "__esModule", {
      value: !0
    });
    Object.defineProperty(gs, "normalizeColor", {
      enumerable: !0,
      get: function() {
        return u3
      }
    });
    var Rd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32"
    };

    function u3(e) {
      let t, r, n, i = 1,
        a = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Rd[a] == "string" ? Rd[a].toLowerCase() : null) || a;
      if (s.startsWith("#")) {
        let l = s.substring(1);
        l.length === 3 || l.length === 4 ? (t = parseInt(l[0] + l[0], 16), r = parseInt(l[1] + l[1], 16), n = parseInt(l[2] + l[2], 16), l.length === 4 && (i = parseInt(l[3] + l[3], 16) / 255)) : (l.length === 6 || l.length === 8) && (t = parseInt(l.substring(0, 2), 16), r = parseInt(l.substring(2, 4), 16), n = parseInt(l.substring(4, 6), 16), l.length === 8 && (i = parseInt(l.substring(6, 8), 16) / 255))
      } else if (s.startsWith("rgba")) {
        let l = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        t = parseInt(l[0], 10), r = parseInt(l[1], 10), n = parseInt(l[2], 10), i = parseFloat(l[3])
      } else if (s.startsWith("rgb")) {
        let l = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        t = parseInt(l[0], 10), r = parseInt(l[1], 10), n = parseInt(l[2], 10)
      } else if (s.startsWith("hsla")) {
        let l = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(l[0]),
          u = parseFloat(l[1].replace("%", "")) / 100,
          p = parseFloat(l[2].replace("%", "")) / 100;
        i = parseFloat(l[3]);
        let g = (1 - Math.abs(2 * p - 1)) * u,
          d = g * (1 - Math.abs(f / 60 % 2 - 1)),
          h = p - g / 2,
          m, c, y;
        f >= 0 && f < 60 ? (m = g, c = d, y = 0) : f >= 60 && f < 120 ? (m = d, c = g, y = 0) : f >= 120 && f < 180 ? (m = 0, c = g, y = d) : f >= 180 && f < 240 ? (m = 0, c = d, y = g) : f >= 240 && f < 300 ? (m = d, c = 0, y = g) : (m = g, c = 0, y = d), t = Math.round((m + h) * 255), r = Math.round((c + h) * 255), n = Math.round((y + h) * 255)
      } else if (s.startsWith("hsl")) {
        let l = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(l[0]),
          u = parseFloat(l[1].replace("%", "")) / 100,
          p = parseFloat(l[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * p - 1)) * u,
          d = g * (1 - Math.abs(f / 60 % 2 - 1)),
          h = p - g / 2,
          m, c, y;
        f >= 0 && f < 60 ? (m = g, c = d, y = 0) : f >= 60 && f < 120 ? (m = d, c = g, y = 0) : f >= 120 && f < 180 ? (m = 0, c = g, y = d) : f >= 180 && f < 240 ? (m = 0, c = d, y = g) : f >= 240 && f < 300 ? (m = d, c = 0, y = g) : (m = g, c = 0, y = d), t = Math.round((m + h) * 255), r = Math.round((c + h) * 255), n = Math.round((y + h) * 255)
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
      return {
        red: t,
        green: r,
        blue: n,
        alpha: i
      }
    }
  });
  var Md = I(vs => {
    "use strict";
    Object.defineProperty(vs, "__esModule", {
      value: !0
    });

    function f3(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    f3(vs, {
      clearPlugin: function() {
        return b3
      },
      createPluginInstance: function() {
        return y3
      },
      getPluginConfig: function() {
        return p3
      },
      getPluginDestination: function() {
        return g3
      },
      getPluginDuration: function() {
        return d3
      },
      getPluginOrigin: function() {
        return m3
      },
      renderPlugin: function() {
        return E3
      }
    });
    var h3 = ys(),
      p3 = (e, t) => e.value[t],
      d3 = () => null,
      m3 = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return {
          size: parseInt(i, 10)
        };
        if (r.unit === "%" || r.unit === "-") return {
          size: parseFloat(i)
        };
        if (r.red != null && r.green != null && r.blue != null) return (0, h3.normalizeColor)(i)
      },
      g3 = e => e.value,
      y3 = () => null,
      v3 = {
        color: {
          match: ({
            red: e,
            green: t,
            blue: r,
            alpha: n
          }) => [e, t, r, n].every(i => i != null),
          getValue: ({
            red: e,
            green: t,
            blue: r,
            alpha: n
          }) => `rgba(${e}, ${t}, ${r}, ${n})`
        },
        size: {
          match: ({
            size: e
          }) => e != null,
          getValue: ({
            size: e
          }, t) => {
            switch (t) {
              case "-":
                return e;
              default:
                return `${e}${t}`
            }
          }
        }
      },
      E3 = (e, t, r) => {
        let {
          target: {
            objectId: n
          },
          value: {
            unit: i
          }
        } = r.config, a = t.PLUGIN_VARIABLE, o = Object.values(v3).find(s => s.match(a, i));
        o && document.documentElement.style.setProperty(n, o.getValue(a, i))
      },
      b3 = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r)
      }
  });
  var Ld = I(Es => {
    "use strict";
    Object.defineProperty(Es, "__esModule", {
      value: !0
    });
    Object.defineProperty(Es, "pluginMethodMap", {
      enumerable: !0,
      get: function() {
        return A3
      }
    });
    var Wn = Ve(),
      I3 = Xn(Pd()),
      T3 = Xn(Cd()),
      _3 = Xn(wd()),
      S3 = Xn(Md());

    function Fd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (Fd = function(n) {
        return n ? r : t
      })(e)
    }

    function Xn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = Fd(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
    var A3 = new Map([
      [Wn.ActionTypeConsts.PLUGIN_LOTTIE, {
        ...I3
      }],
      [Wn.ActionTypeConsts.PLUGIN_SPLINE, {
        ...T3
      }],
      [Wn.ActionTypeConsts.PLUGIN_RIVE, {
        ..._3
      }],
      [Wn.ActionTypeConsts.PLUGIN_VARIABLE, {
        ...S3
      }]
    ])
  });
  var Is = I(bs => {
    "use strict";
    Object.defineProperty(bs, "__esModule", {
      value: !0
    });

    function x3(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    x3(bs, {
      clearPlugin: function() {
        return D3
      },
      createPluginInstance: function() {
        return F3
      },
      getPluginConfig: function() {
        return C3
      },
      getPluginDestination: function() {
        return M3
      },
      getPluginDuration: function() {
        return R3
      },
      getPluginOrigin: function() {
        return w3
      },
      isPluginType: function() {
        return O3
      },
      renderPlugin: function() {
        return L3
      }
    });
    var P3 = Bn(),
      Dd = Ld();

    function O3(e) {
      return Dd.pluginMethodMap.has(e)
    }
    var kt = e => t => {
        if (!P3.IS_BROWSER_ENV) return () => null;
        let r = Dd.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n
      },
      C3 = kt("getPluginConfig"),
      w3 = kt("getPluginOrigin"),
      R3 = kt("getPluginDuration"),
      M3 = kt("getPluginDestination"),
      F3 = kt("createPluginInstance"),
      L3 = kt("renderPlugin"),
      D3 = kt("clearPlugin")
  });
  var kd = I((lW, Nd) => {
    function N3(e, t) {
      return e == null || e !== e ? t : e
    }
    Nd.exports = N3
  });
  var qd = I((cW, Vd) => {
    function k3(e, t, r, n) {
      var i = -1,
        a = e == null ? 0 : e.length;
      for (n && a && (r = e[++i]); ++i < a;) r = t(r, e[i], i, e);
      return r
    }
    Vd.exports = k3
  });
  var Gd = I((uW, Bd) => {
    function V3(e) {
      return function(t, r, n) {
        for (var i = -1, a = Object(t), o = n(t), s = o.length; s--;) {
          var l = o[e ? s : ++i];
          if (r(a[l], l, a) === !1) break
        }
        return t
      }
    }
    Bd.exports = V3
  });
  var zd = I((fW, Ud) => {
    var q3 = Gd(),
      B3 = q3();
    Ud.exports = B3
  });
  var Ts = I((hW, Hd) => {
    var G3 = zd(),
      U3 = Vr();

    function z3(e, t) {
      return e && G3(e, t, U3)
    }
    Hd.exports = z3
  });
  var Xd = I((pW, Wd) => {
    var H3 = Dt();

    function W3(e, t) {
      return function(r, n) {
        if (r == null) return r;
        if (!H3(r)) return e(r, n);
        for (var i = r.length, a = t ? i : -1, o = Object(r);
          (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;);
        return r
      }
    }
    Wd.exports = W3
  });
  var _s = I((dW, jd) => {
    var X3 = Ts(),
      j3 = Xd(),
      Y3 = j3(X3);
    jd.exports = Y3
  });
  var Kd = I((mW, Yd) => {
    function K3(e, t, r, n, i) {
      return i(e, function(a, o, s) {
        r = n ? (n = !1, a) : t(r, a, o, s)
      }), r
    }
    Yd.exports = K3
  });
  var $d = I((gW, Qd) => {
    var Q3 = qd(),
      $3 = _s(),
      Z3 = Tt(),
      J3 = Kd(),
      eF = Pe();

    function tF(e, t, r) {
      var n = eF(e) ? Q3 : J3,
        i = arguments.length < 3;
      return n(e, Z3(t, 4), r, i, $3)
    }
    Qd.exports = tF
  });
  var Jd = I((yW, Zd) => {
    var rF = Za(),
      nF = Tt(),
      iF = Ja(),
      aF = Math.max,
      sF = Math.min;

    function oF(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return r !== void 0 && (i = iF(r), i = r < 0 ? aF(n + i, 0) : sF(i, n - 1)), rF(e, nF(t, 3), i, !0)
    }
    Zd.exports = oF
  });
  var tm = I((vW, em) => {
    var lF = $a(),
      cF = Jd(),
      uF = lF(cF);
    em.exports = uF
  });
  var nm = I(Ss => {
    "use strict";
    Object.defineProperty(Ss, "__esModule", {
      value: !0
    });
    Object.defineProperty(Ss, "default", {
      enumerable: !0,
      get: function() {
        return hF
      }
    });

    function rm(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function fF(e, t) {
      if (rm(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
        if (!Object.hasOwn(t, r[i]) || !rm(e[r[i]], t[r[i]])) return !1;
      return !0
    }
    var hF = fF
  });
  var Tm = I(Fs => {
    "use strict";
    Object.defineProperty(Fs, "__esModule", {
      value: !0
    });

    function pF(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    pF(Fs, {
      cleanupHTMLElement: function() {
        return h5
      },
      clearAllStyles: function() {
        return f5
      },
      clearObjectCache: function() {
        return MF
      },
      getActionListProgress: function() {
        return d5
      },
      getAffectedElements: function() {
        return Rs
      },
      getComputedStyle: function() {
        return BF
      },
      getDestinationValues: function() {
        return jF
      },
      getElementId: function() {
        return NF
      },
      getInstanceId: function() {
        return LF
      },
      getInstanceOrigin: function() {
        return zF
      },
      getItemConfigByKey: function() {
        return XF
      },
      getMaxDurationItemIndex: function() {
        return Im
      },
      getNamespacedParameterId: function() {
        return y5
      },
      getRenderType: function() {
        return vm
      },
      getStyleProp: function() {
        return YF
      },
      mediaQueriesEqual: function() {
        return E5
      },
      observeStore: function() {
        return qF
      },
      reduceListToGroup: function() {
        return m5
      },
      reifyState: function() {
        return kF
      },
      renderHTMLElement: function() {
        return KF
      },
      shallowEqual: function() {
        return fm.default
      },
      shouldAllowMediaQuery: function() {
        return v5
      },
      shouldNamespaceEventParameter: function() {
        return g5
      },
      stringifyTarget: function() {
        return b5
      }
    });
    var _t = Qn(kd()),
      Ps = Qn($d()),
      xs = Qn(tm()),
      im = ar(),
      Vt = Ve(),
      fm = Qn(nm()),
      dF = ls(),
      mF = ys(),
      it = Is(),
      Fe = Bn();

    function Qn(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var {
      BACKGROUND: gF,
      TRANSFORM: yF,
      TRANSLATE_3D: vF,
      SCALE_3D: EF,
      ROTATE_X: bF,
      ROTATE_Y: IF,
      ROTATE_Z: TF,
      SKEW: _F,
      PRESERVE_3D: SF,
      FLEX: AF,
      OPACITY: Yn,
      FILTER: Ur,
      FONT_VARIATION_SETTINGS: zr,
      WIDTH: rt,
      HEIGHT: nt,
      BACKGROUND_COLOR: hm,
      BORDER_COLOR: xF,
      COLOR: PF,
      CHILDREN: am,
      IMMEDIATE_CHILDREN: OF,
      SIBLINGS: sm,
      PARENT: CF,
      DISPLAY: Kn,
      WILL_CHANGE: dr,
      AUTO: St,
      COMMA_DELIMITER: Hr,
      COLON_DELIMITER: wF,
      BAR_DELIMITER: As,
      RENDER_TRANSFORM: pm,
      RENDER_GENERAL: Os,
      RENDER_STYLE: Cs,
      RENDER_PLUGIN: dm
    } = Vt.IX2EngineConstants, {
      TRANSFORM_MOVE: mr,
      TRANSFORM_SCALE: gr,
      TRANSFORM_ROTATE: yr,
      TRANSFORM_SKEW: Wr,
      STYLE_OPACITY: mm,
      STYLE_FILTER: Xr,
      STYLE_FONT_VARIATION: jr,
      STYLE_SIZE: vr,
      STYLE_BACKGROUND_COLOR: Er,
      STYLE_BORDER: br,
      STYLE_TEXT_COLOR: Ir,
      GENERAL_DISPLAY: $n,
      OBJECT_VALUE: RF
    } = Vt.ActionTypeConsts, gm = e => e.trim(), ws = Object.freeze({
      [Er]: hm,
      [br]: xF,
      [Ir]: PF
    }), ym = Object.freeze({
      [Fe.TRANSFORM_PREFIXED]: yF,
      [hm]: gF,
      [Yn]: Yn,
      [Ur]: Ur,
      [rt]: rt,
      [nt]: nt,
      [zr]: zr
    }), jn = new Map;

    function MF() {
      jn.clear()
    }
    var FF = 1;

    function LF() {
      return "i" + FF++
    }
    var DF = 1;

    function NF(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id
      }
      return "e" + DF++
    }

    function kF({
      events: e,
      actionLists: t,
      site: r
    } = {}) {
      let n = (0, Ps.default)(e, (o, s) => {
          let {
            eventTypeId: l
          } = s;
          return o[l] || (o[l] = {}), o[l][s.id] = s, o
        }, {}),
        i = r && r.mediaQueries,
        a = [];
      return i ? a = i.map(o => o.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: a
        }
      }
    }
    var VF = (e, t) => e === t;

    function qF({
      store: e,
      select: t,
      onChange: r,
      comparator: n = VF
    }) {
      let {
        getState: i,
        subscribe: a
      } = e, o = a(l), s = t(i());

      function l() {
        let f = t(i());
        if (f == null) {
          o();
          return
        }
        n(f, s) || (s = f, r(s, e))
      }
      return o
    }

    function om(e) {
      let t = typeof e;
      if (t === "string") return {
        id: e
      };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: a,
          appliesTo: o,
          useEventTarget: s
        } = e;
        return {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: a,
          appliesTo: o,
          useEventTarget: s
        }
      }
      return {}
    }

    function Rs({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i
    }) {
      if (!i) throw new Error("IX2 missing elementApi");
      let {
        targets: a
      } = e;
      if (Array.isArray(a) && a.length > 0) return a.reduce((k, M) => k.concat(Rs({
        config: {
          target: M
        },
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
      })), []);
      let {
        getValidDocument: o,
        getQuerySelector: s,
        queryDocument: l,
        getChildElements: f,
        getSiblingElements: u,
        matchSelector: p,
        elementContains: g,
        isSiblingNode: d
      } = i, {
        target: h
      } = e;
      if (!h) return [];
      let {
        id: m,
        objectId: c,
        selector: y,
        selectorGuids: v,
        appliesTo: E,
        useEventTarget: b
      } = om(h);
      if (c) return [jn.has(c) ? jn.get(c) : jn.set(c, {}).get(c)];
      if (E === Vt.EventAppliesTo.PAGE) {
        let k = o(m);
        return k ? [k] : []
      }
      let A = (t?.action?.config?.affectedElements ?? {})[m || y] || {},
        S = !!(A.id || A.selector),
        x, L, w, C = t && s(om(t.target));
      if (S ? (x = A.limitAffectedElements, L = C, w = s(A)) : L = w = s({
          id: m,
          selector: y,
          selectorGuids: v
        }), t && b) {
        let k = r && (w || b === !0) ? [r] : l(C);
        if (w) {
          if (b === CF) return l(w).filter(M => k.some(F => g(M, F)));
          if (b === am) return l(w).filter(M => k.some(F => g(F, M)));
          if (b === sm) return l(w).filter(M => k.some(F => d(F, M)))
        }
        return k
      }
      return L == null || w == null ? [] : Fe.IS_BROWSER_ENV && n ? l(w).filter(k => n.contains(k)) : x === am ? l(L, w) : x === OF ? f(l(L)).filter(p(w)) : x === sm ? u(l(L)).filter(p(w)) : l(w)
    }

    function BF({
      element: e,
      actionItem: t
    }) {
      if (!Fe.IS_BROWSER_ENV) return {};
      let {
        actionTypeId: r
      } = t;
      switch (r) {
        case vr:
        case Er:
        case br:
        case Ir:
        case $n:
          return window.getComputedStyle(e);
        default:
          return {}
      }
    }
    var lm = /px/,
      GF = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = QF[n.type]), r), e || {}),
      UF = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = $F[n.type] || n.defaultValue || 0), r), e || {});

    function zF(e, t = {}, r = {}, n, i) {
      let {
        getStyle: a
      } = i, {
        actionTypeId: o
      } = n;
      if ((0, it.isPluginType)(o)) return (0, it.getPluginOrigin)(o)(t[o], n);
      switch (n.actionTypeId) {
        case mr:
        case gr:
        case yr:
        case Wr:
          return t[n.actionTypeId] || Ms[n.actionTypeId];
        case Xr:
          return GF(t[n.actionTypeId], n.config.filters);
        case jr:
          return UF(t[n.actionTypeId], n.config.fontVariations);
        case mm:
          return {
            value: (0, _t.default)(parseFloat(a(e, Yn)), 1)
          };
        case vr: {
          let s = a(e, rt),
            l = a(e, nt),
            f, u;
          return n.config.widthUnit === St ? f = lm.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0, _t.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === St ? u = lm.test(l) ? parseFloat(l) : parseFloat(r.height) : u = (0, _t.default)(parseFloat(l), parseFloat(r.height)), {
            widthValue: f,
            heightValue: u
          }
        }
        case Er:
        case br:
        case Ir:
          return l5({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: a
          });
        case $n:
          return {
            value: (0, _t.default)(a(e, Kn), r.display)
          };
        case RF:
          return t[n.actionTypeId] || {
            value: 0
          };
        default:
          return
      }
    }
    var HF = (e, t) => (t && (e[t.type] = t.value || 0), e),
      WF = (e, t) => (t && (e[t.type] = t.value || 0), e),
      XF = (e, t, r) => {
        if ((0, it.isPluginType)(e)) return (0, it.getPluginConfig)(e)(r, t);
        switch (e) {
          case Xr: {
            let n = (0, xs.default)(r.filters, ({
              type: i
            }) => i === t);
            return n ? n.value : 0
          }
          case jr: {
            let n = (0, xs.default)(r.fontVariations, ({
              type: i
            }) => i === t);
            return n ? n.value : 0
          }
          default:
            return r[t]
        }
      };

    function jF({
      element: e,
      actionItem: t,
      elementApi: r
    }) {
      if ((0, it.isPluginType)(t.actionTypeId)) return (0, it.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case mr:
        case gr:
        case yr:
        case Wr: {
          let {
            xValue: n,
            yValue: i,
            zValue: a
          } = t.config;
          return {
            xValue: n,
            yValue: i,
            zValue: a
          }
        }
        case vr: {
          let {
            getStyle: n,
            setStyle: i,
            getProperty: a
          } = r, {
            widthUnit: o,
            heightUnit: s
          } = t.config, {
            widthValue: l,
            heightValue: f
          } = t.config;
          if (!Fe.IS_BROWSER_ENV) return {
            widthValue: l,
            heightValue: f
          };
          if (o === St) {
            let u = n(e, rt);
            i(e, rt, ""), l = a(e, "offsetWidth"), i(e, rt, u)
          }
          if (s === St) {
            let u = n(e, nt);
            i(e, nt, ""), f = a(e, "offsetHeight"), i(e, nt, u)
          }
          return {
            widthValue: l,
            heightValue: f
          }
        }
        case Er:
        case br:
        case Ir: {
          let {
            rValue: n,
            gValue: i,
            bValue: a,
            aValue: o,
            globalSwatchId: s
          } = t.config;
          if (s && s.startsWith("--")) {
            let {
              getStyle: l
            } = r, f = l(e, s), u = (0, mF.normalizeColor)(f);
            return {
              rValue: u.red,
              gValue: u.green,
              bValue: u.blue,
              aValue: u.alpha
            }
          }
          return {
            rValue: n,
            gValue: i,
            bValue: a,
            aValue: o
          }
        }
        case Xr:
          return t.config.filters.reduce(HF, {});
        case jr:
          return t.config.fontVariations.reduce(WF, {});
        default: {
          let {
            value: n
          } = t.config;
          return {
            value: n
          }
        }
      }
    }

    function vm(e) {
      if (/^TRANSFORM_/.test(e)) return pm;
      if (/^STYLE_/.test(e)) return Cs;
      if (/^GENERAL_/.test(e)) return Os;
      if (/^PLUGIN_/.test(e)) return dm
    }

    function YF(e, t) {
      return e === Cs ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function KF(e, t, r, n, i, a, o, s, l) {
      switch (s) {
        case pm:
          return e5(e, t, r, i, o);
        case Cs:
          return c5(e, t, r, i, a, o);
        case Os:
          return u5(e, i, o);
        case dm: {
          let {
            actionTypeId: f
          } = i;
          if ((0, it.isPluginType)(f)) return (0, it.renderPlugin)(f)(l, t, i)
        }
      }
    }
    var Ms = {
        [mr]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [gr]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [yr]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [Wr]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      },
      QF = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      }),
      $F = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      }),
      ZF = (e, t) => {
        let r = (0, xs.default)(t.filters, ({
          type: n
        }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%"
        }
      },
      JF = Object.keys(Ms);

    function e5(e, t, r, n, i) {
      let a = JF.map(s => {
          let l = Ms[s],
            {
              xValue: f = l.xValue,
              yValue: u = l.yValue,
              zValue: p = l.zValue,
              xUnit: g = "",
              yUnit: d = "",
              zUnit: h = ""
            } = t[s] || {};
          switch (s) {
            case mr:
              return `${vF}(${f}${g}, ${u}${d}, ${p}${h})`;
            case gr:
              return `${EF}(${f}${g}, ${u}${d}, ${p}${h})`;
            case yr:
              return `${bF}(${f}${g}) ${IF}(${u}${d}) ${TF}(${p}${h})`;
            case Wr:
              return `${_F}(${f}${g}, ${u}${d})`;
            default:
              return ""
          }
        }).join(" "),
        {
          setStyle: o
        } = i;
      qt(e, Fe.TRANSFORM_PREFIXED, i), o(e, Fe.TRANSFORM_PREFIXED, a), n5(n, r) && o(e, Fe.TRANSFORM_STYLE_PREFIXED, SF)
    }

    function t5(e, t, r, n) {
      let i = (0, Ps.default)(t, (o, s, l) => `${o} ${l}(${s}${ZF(l,r)})`, ""),
        {
          setStyle: a
        } = n;
      qt(e, Ur, n), a(e, Ur, i)
    }

    function r5(e, t, r, n) {
      let i = (0, Ps.default)(t, (o, s, l) => (o.push(`"${l}" ${s}`), o), []).join(", "),
        {
          setStyle: a
        } = n;
      qt(e, zr, n), a(e, zr, i)
    }

    function n5({
      actionTypeId: e
    }, {
      xValue: t,
      yValue: r,
      zValue: n
    }) {
      return e === mr && n !== void 0 || e === gr && n !== void 0 || e === yr && (t !== void 0 || r !== void 0)
    }
    var i5 = "\\(([^)]+)\\)",
      a5 = /^rgb/,
      s5 = RegExp(`rgba?${i5}`);

    function o5(e, t) {
      let r = e.exec(t);
      return r ? r[1] : ""
    }

    function l5({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n
    }) {
      let i = ws[t],
        a = n(e, i),
        o = a5.test(a) ? a : r[i],
        s = o5(s5, o).split(Hr);
      return {
        rValue: (0, _t.default)(parseInt(s[0], 10), 255),
        gValue: (0, _t.default)(parseInt(s[1], 10), 255),
        bValue: (0, _t.default)(parseInt(s[2], 10), 255),
        aValue: (0, _t.default)(parseFloat(s[3]), 1)
      }
    }

    function c5(e, t, r, n, i, a) {
      let {
        setStyle: o
      } = a;
      switch (n.actionTypeId) {
        case vr: {
          let {
            widthUnit: s = "",
            heightUnit: l = ""
          } = n.config, {
            widthValue: f,
            heightValue: u
          } = r;
          f !== void 0 && (s === St && (s = "px"), qt(e, rt, a), o(e, rt, f + s)), u !== void 0 && (l === St && (l = "px"), qt(e, nt, a), o(e, nt, u + l));
          break
        }
        case Xr: {
          t5(e, r, n.config, a);
          break
        }
        case jr: {
          r5(e, r, n.config, a);
          break
        }
        case Er:
        case br:
        case Ir: {
          let s = ws[n.actionTypeId],
            l = Math.round(r.rValue),
            f = Math.round(r.gValue),
            u = Math.round(r.bValue),
            p = r.aValue;
          qt(e, s, a), o(e, s, p >= 1 ? `rgb(${l},${f},${u})` : `rgba(${l},${f},${u},${p})`);
          break
        }
        default: {
          let {
            unit: s = ""
          } = n.config;
          qt(e, i, a), o(e, i, r.value + s);
          break
        }
      }
    }

    function u5(e, t, r) {
      let {
        setStyle: n
      } = r;
      switch (t.actionTypeId) {
        case $n: {
          let {
            value: i
          } = t.config;
          i === AF && Fe.IS_BROWSER_ENV ? n(e, Kn, Fe.FLEX_PREFIXED) : n(e, Kn, i);
          return
        }
      }
    }

    function qt(e, t, r) {
      if (!Fe.IS_BROWSER_ENV) return;
      let n = ym[t];
      if (!n) return;
      let {
        getStyle: i,
        setStyle: a
      } = r, o = i(e, dr);
      if (!o) {
        a(e, dr, n);
        return
      }
      let s = o.split(Hr).map(gm);
      s.indexOf(n) === -1 && a(e, dr, s.concat(n).join(Hr))
    }

    function Em(e, t, r) {
      if (!Fe.IS_BROWSER_ENV) return;
      let n = ym[t];
      if (!n) return;
      let {
        getStyle: i,
        setStyle: a
      } = r, o = i(e, dr);
      !o || o.indexOf(n) === -1 || a(e, dr, o.split(Hr).map(gm).filter(s => s !== n).join(Hr))
    }

    function f5({
      store: e,
      elementApi: t
    }) {
      let {
        ixData: r
      } = e.getState(), {
        events: n = {},
        actionLists: i = {}
      } = r;
      Object.keys(n).forEach(a => {
        let o = n[a],
          {
            config: s
          } = o.action,
          {
            actionListId: l
          } = s,
          f = i[l];
        f && cm({
          actionList: f,
          event: o,
          elementApi: t
        })
      }), Object.keys(i).forEach(a => {
        cm({
          actionList: i[a],
          elementApi: t
        })
      })
    }

    function cm({
      actionList: e = {},
      event: t,
      elementApi: r
    }) {
      let {
        actionItemGroups: n,
        continuousParameterGroups: i
      } = e;
      n && n.forEach(a => {
        um({
          actionGroup: a,
          event: t,
          elementApi: r
        })
      }), i && i.forEach(a => {
        let {
          continuousActionGroups: o
        } = a;
        o.forEach(s => {
          um({
            actionGroup: s,
            event: t,
            elementApi: r
          })
        })
      })
    }

    function um({
      actionGroup: e,
      event: t,
      elementApi: r
    }) {
      let {
        actionItems: n
      } = e;
      n.forEach(i => {
        let {
          actionTypeId: a,
          config: o
        } = i, s;
        (0, it.isPluginType)(a) ? s = l => (0, it.clearPlugin)(a)(l, i): s = bm({
          effect: p5,
          actionTypeId: a,
          elementApi: r
        }), Rs({
          config: o,
          event: t,
          elementApi: r
        }).forEach(s)
      })
    }

    function h5(e, t, r) {
      let {
        setStyle: n,
        getStyle: i
      } = r, {
        actionTypeId: a
      } = t;
      if (a === vr) {
        let {
          config: o
        } = t;
        o.widthUnit === St && n(e, rt, ""), o.heightUnit === St && n(e, nt, "")
      }
      i(e, dr) && bm({
        effect: Em,
        actionTypeId: a,
        elementApi: r
      })(e)
    }
    var bm = ({
      effect: e,
      actionTypeId: t,
      elementApi: r
    }) => n => {
      switch (t) {
        case mr:
        case gr:
        case yr:
        case Wr:
          e(n, Fe.TRANSFORM_PREFIXED, r);
          break;
        case Xr:
          e(n, Ur, r);
          break;
        case jr:
          e(n, zr, r);
          break;
        case mm:
          e(n, Yn, r);
          break;
        case vr:
          e(n, rt, r), e(n, nt, r);
          break;
        case Er:
        case br:
        case Ir:
          e(n, ws[t], r);
          break;
        case $n:
          e(n, Kn, r);
          break
      }
    };

    function p5(e, t, r) {
      let {
        setStyle: n
      } = r;
      Em(e, t, r), n(e, t, ""), t === Fe.TRANSFORM_PREFIXED && n(e, Fe.TRANSFORM_STYLE_PREFIXED, "")
    }

    function Im(e) {
      let t = 0,
        r = 0;
      return e.forEach((n, i) => {
        let {
          config: a
        } = n, o = a.delay + a.duration;
        o >= t && (t = o, r = i)
      }), r
    }

    function d5(e, t) {
      let {
        actionItemGroups: r,
        useFirstGroupAsInitialState: n
      } = e, {
        actionItem: i,
        verboseTimeElapsed: a = 0
      } = t, o = 0, s = 0;
      return r.forEach((l, f) => {
        if (n && f === 0) return;
        let {
          actionItems: u
        } = l, p = u[Im(u)], {
          config: g,
          actionTypeId: d
        } = p;
        i.id === p.id && (s = o + a);
        let h = vm(d) === Os ? 0 : g.duration;
        o += g.delay + h
      }), o > 0 ? (0, dF.optimizeFloat)(s / o) : 0
    }

    function m5({
      actionList: e,
      actionItemId: t,
      rawData: r
    }) {
      let {
        actionItemGroups: n,
        continuousParameterGroups: i
      } = e, a = [], o = s => (a.push((0, im.mergeIn)(s, ["config"], {
        delay: 0,
        duration: 0
      })), s.id === t);
      return n && n.some(({
        actionItems: s
      }) => s.some(o)), i && i.some(s => {
        let {
          continuousActionGroups: l
        } = s;
        return l.some(({
          actionItems: f
        }) => f.some(o))
      }), (0, im.setIn)(r, ["actionLists"], {
        [e.id]: {
          id: e.id,
          actionItemGroups: [{
            actionItems: a
          }]
        }
      })
    }

    function g5(e, {
      basedOn: t
    }) {
      return e === Vt.EventTypeConsts.SCROLLING_IN_VIEW && (t === Vt.EventBasedOn.ELEMENT || t == null) || e === Vt.EventTypeConsts.MOUSE_MOVE && t === Vt.EventBasedOn.ELEMENT
    }

    function y5(e, t) {
      return e + wF + t
    }

    function v5(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1
    }

    function E5(e, t) {
      return (0, fm.default)(e && e.sort(), t && t.sort())
    }

    function b5(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId) return e.pluginElement + As + e.objectId;
      if (e.objectId) return e.objectId;
      let {
        id: t = "",
        selector: r = "",
        useEventTarget: n = ""
      } = e;
      return t + As + r + As + n
    }
  });
  var Bt = I(Ls => {
    "use strict";
    Object.defineProperty(Ls, "__esModule", {
      value: !0
    });

    function I5(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    I5(Ls, {
      IX2BrowserSupport: function() {
        return T5
      },
      IX2EasingUtils: function() {
        return S5
      },
      IX2Easings: function() {
        return _5
      },
      IX2ElementsReducer: function() {
        return A5
      },
      IX2VanillaPlugins: function() {
        return x5
      },
      IX2VanillaUtils: function() {
        return P5
      }
    });
    var T5 = Tr(Bn()),
      _5 = Tr(as()),
      S5 = Tr(ls()),
      A5 = Tr(xd()),
      x5 = Tr(Is()),
      P5 = Tr(Tm());

    function _m(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (_m = function(n) {
        return n ? r : t
      })(e)
    }

    function Tr(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = _m(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
  });
  var Pm = I(Ns => {
    "use strict";
    Object.defineProperty(Ns, "__esModule", {
      value: !0
    });
    Object.defineProperty(Ns, "ixInstances", {
      enumerable: !0,
      get: function() {
        return B5
      }
    });
    var Sm = Ve(),
      Am = Bt(),
      _r = ar(),
      {
        IX2_RAW_DATA_IMPORTED: O5,
        IX2_SESSION_STOPPED: C5,
        IX2_INSTANCE_ADDED: w5,
        IX2_INSTANCE_STARTED: R5,
        IX2_INSTANCE_REMOVED: M5,
        IX2_ANIMATION_FRAME_CHANGED: F5
      } = Sm.IX2EngineActionTypes,
      {
        optimizeFloat: Zn,
        applyEasing: xm,
        createBezierEasing: L5
      } = Am.IX2EasingUtils,
      {
        RENDER_GENERAL: D5
      } = Sm.IX2EngineConstants,
      {
        getItemConfigByKey: Ds,
        getRenderType: N5,
        getStyleProp: k5
      } = Am.IX2VanillaUtils,
      V5 = (e, t) => {
        let {
          position: r,
          parameterId: n,
          actionGroups: i,
          destinationKeys: a,
          smoothing: o,
          restingValue: s,
          actionTypeId: l,
          customEasingFn: f,
          skipMotion: u,
          skipToValue: p
        } = e, {
          parameters: g
        } = t.payload, d = Math.max(1 - o, .01), h = g[n];
        h == null && (d = 1, h = s);
        let m = Math.max(h, 0) || 0,
          c = Zn(m - r),
          y = u ? p : Zn(r + c * d),
          v = y * 100;
        if (y === r && e.current) return e;
        let E, b, _, A;
        for (let x = 0, {
            length: L
          } = i; x < L; x++) {
          let {
            keyframe: w,
            actionItems: C
          } = i[x];
          if (x === 0 && (E = C[0]), v >= w) {
            E = C[0];
            let k = i[x + 1],
              M = k && v !== w;
            b = M ? k.actionItems[0] : null, M && (_ = w / 100, A = (k.keyframe - w) / 100)
          }
        }
        let S = {};
        if (E && !b)
          for (let x = 0, {
              length: L
            } = a; x < L; x++) {
            let w = a[x];
            S[w] = Ds(l, w, E.config)
          } else if (E && b && _ !== void 0 && A !== void 0) {
            let x = (y - _) / A,
              L = E.config.easing,
              w = xm(L, x, f);
            for (let C = 0, {
                length: k
              } = a; C < k; C++) {
              let M = a[C],
                F = Ds(l, M, E.config),
                ne = (Ds(l, M, b.config) - F) * w + F;
              S[M] = ne
            }
          } return (0, _r.merge)(e, {
          position: y,
          current: S
        })
      },
      q5 = (e, t) => {
        let {
          active: r,
          origin: n,
          start: i,
          immediate: a,
          renderType: o,
          verbose: s,
          actionItem: l,
          destination: f,
          destinationKeys: u,
          pluginDuration: p,
          instanceDelay: g,
          customEasingFn: d,
          skipMotion: h
        } = e, m = l.config.easing, {
          duration: c,
          delay: y
        } = l.config;
        p != null && (c = p), y = g ?? y, o === D5 ? c = 0 : (a || h) && (c = y = 0);
        let {
          now: v
        } = t.payload;
        if (r && n) {
          let E = v - (i + y);
          if (s) {
            let x = v - i,
              L = c + y,
              w = Zn(Math.min(Math.max(0, x / L), 1));
            e = (0, _r.set)(e, "verboseTimeElapsed", L * w)
          }
          if (E < 0) return e;
          let b = Zn(Math.min(Math.max(0, E / c), 1)),
            _ = xm(m, b, d),
            A = {},
            S = null;
          return u.length && (S = u.reduce((x, L) => {
            let w = f[L],
              C = parseFloat(n[L]) || 0,
              M = (parseFloat(w) - C) * _ + C;
            return x[L] = M, x
          }, {})), A.current = S, A.position = b, b === 1 && (A.active = !1, A.complete = !0), (0, _r.merge)(e, A)
        }
        return e
      },
      B5 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case O5:
            return t.payload.ixInstances || Object.freeze({});
          case C5:
            return Object.freeze({});
          case w5: {
            let {
              instanceId: r,
              elementId: n,
              actionItem: i,
              eventId: a,
              eventTarget: o,
              eventStateKey: s,
              actionListId: l,
              groupIndex: f,
              isCarrier: u,
              origin: p,
              destination: g,
              immediate: d,
              verbose: h,
              continuous: m,
              parameterId: c,
              actionGroups: y,
              smoothing: v,
              restingValue: E,
              pluginInstance: b,
              pluginDuration: _,
              instanceDelay: A,
              skipMotion: S,
              skipToValue: x
            } = t.payload, {
              actionTypeId: L
            } = i, w = N5(L), C = k5(w, L), k = Object.keys(g).filter(F => g[F] != null && typeof g[F] != "string"), {
              easing: M
            } = i.config;
            return (0, _r.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: p,
              destination: g,
              destinationKeys: k,
              immediate: d,
              verbose: h,
              current: null,
              actionItem: i,
              actionTypeId: L,
              eventId: a,
              eventTarget: o,
              eventStateKey: s,
              actionListId: l,
              groupIndex: f,
              renderType: w,
              isCarrier: u,
              styleProp: C,
              continuous: m,
              parameterId: c,
              actionGroups: y,
              smoothing: v,
              restingValue: E,
              pluginInstance: b,
              pluginDuration: _,
              instanceDelay: A,
              skipMotion: S,
              skipToValue: x,
              customEasingFn: Array.isArray(M) && M.length === 4 ? L5(M) : void 0
            })
          }
          case R5: {
            let {
              instanceId: r,
              time: n
            } = t.payload;
            return (0, _r.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n
            })
          }
          case M5: {
            let {
              instanceId: r
            } = t.payload;
            if (!e[r]) return e;
            let n = {},
              i = Object.keys(e),
              {
                length: a
              } = i;
            for (let o = 0; o < a; o++) {
              let s = i[o];
              s !== r && (n[s] = e[s])
            }
            return n
          }
          case F5: {
            let r = e,
              n = Object.keys(e),
              {
                length: i
              } = n;
            for (let a = 0; a < i; a++) {
              let o = n[a],
                s = e[o],
                l = s.continuous ? V5 : q5;
              r = (0, _r.set)(r, o, l(s, t))
            }
            return r
          }
          default:
            return e
        }
      }
  });
  var Om = I(ks => {
    "use strict";
    Object.defineProperty(ks, "__esModule", {
      value: !0
    });
    Object.defineProperty(ks, "ixParameters", {
      enumerable: !0,
      get: function() {
        return W5
      }
    });
    var G5 = Ve(),
      {
        IX2_RAW_DATA_IMPORTED: U5,
        IX2_SESSION_STOPPED: z5,
        IX2_PARAMETER_CHANGED: H5
      } = G5.IX2EngineActionTypes,
      W5 = (e = {}, t) => {
        switch (t.type) {
          case U5:
            return t.payload.ixParameters || {};
          case z5:
            return {};
          case H5: {
            let {
              key: r,
              value: n
            } = t.payload;
            return e[r] = n, e
          }
          default:
            return e
        }
      }
  });
  var Cm = I(Vs => {
    "use strict";
    Object.defineProperty(Vs, "__esModule", {
      value: !0
    });
    Object.defineProperty(Vs, "default", {
      enumerable: !0,
      get: function() {
        return eL
      }
    });
    var X5 = ma(),
      j5 = zc(),
      Y5 = lu(),
      K5 = uu(),
      Q5 = Bt(),
      $5 = Pm(),
      Z5 = Om(),
      {
        ixElements: J5
      } = Q5.IX2ElementsReducer,
      eL = (0, X5.combineReducers)({
        ixData: j5.ixData,
        ixRequest: Y5.ixRequest,
        ixSession: K5.ixSession,
        ixElements: J5,
        ixInstances: $5.ixInstances,
        ixParameters: Z5.ixParameters
      })
  });
  var Rm = I((AW, wm) => {
    var tL = bt(),
      rL = Pe(),
      nL = ft(),
      iL = "[object String]";

    function aL(e) {
      return typeof e == "string" || !rL(e) && nL(e) && tL(e) == iL
    }
    wm.exports = aL
  });
  var Fm = I((xW, Mm) => {
    var sL = Qa(),
      oL = sL("length");
    Mm.exports = oL
  });
  var Dm = I((PW, Lm) => {
    var lL = "\\ud800-\\udfff",
      cL = "\\u0300-\\u036f",
      uL = "\\ufe20-\\ufe2f",
      fL = "\\u20d0-\\u20ff",
      hL = cL + uL + fL,
      pL = "\\ufe0e\\ufe0f",
      dL = "\\u200d",
      mL = RegExp("[" + dL + lL + hL + pL + "]");

    function gL(e) {
      return mL.test(e)
    }
    Lm.exports = gL
  });
  var Hm = I((OW, zm) => {
    var km = "\\ud800-\\udfff",
      yL = "\\u0300-\\u036f",
      vL = "\\ufe20-\\ufe2f",
      EL = "\\u20d0-\\u20ff",
      bL = yL + vL + EL,
      IL = "\\ufe0e\\ufe0f",
      TL = "[" + km + "]",
      qs = "[" + bL + "]",
      Bs = "\\ud83c[\\udffb-\\udfff]",
      _L = "(?:" + qs + "|" + Bs + ")",
      Vm = "[^" + km + "]",
      qm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Bm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      SL = "\\u200d",
      Gm = _L + "?",
      Um = "[" + IL + "]?",
      AL = "(?:" + SL + "(?:" + [Vm, qm, Bm].join("|") + ")" + Um + Gm + ")*",
      xL = Um + Gm + AL,
      PL = "(?:" + [Vm + qs + "?", qs, qm, Bm, TL].join("|") + ")",
      Nm = RegExp(Bs + "(?=" + Bs + ")|" + PL + xL, "g");

    function OL(e) {
      for (var t = Nm.lastIndex = 0; Nm.test(e);) ++t;
      return t
    }
    zm.exports = OL
  });
  var Xm = I((CW, Wm) => {
    var CL = Fm(),
      wL = Dm(),
      RL = Hm();

    function ML(e) {
      return wL(e) ? RL(e) : CL(e)
    }
    Wm.exports = ML
  });
  var Ym = I((wW, jm) => {
    var FL = Rn(),
      LL = Mn(),
      DL = Dt(),
      NL = Rm(),
      kL = Xm(),
      VL = "[object Map]",
      qL = "[object Set]";

    function BL(e) {
      if (e == null) return 0;
      if (DL(e)) return NL(e) ? kL(e) : e.length;
      var t = LL(e);
      return t == VL || t == qL ? e.size : FL(e).length
    }
    jm.exports = BL
  });
  var Qm = I((RW, Km) => {
    var GL = "Expected a function";

    function UL(e) {
      if (typeof e != "function") throw new TypeError(GL);
      return function() {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2])
        }
        return !e.apply(this, t)
      }
    }
    Km.exports = UL
  });
  var Gs = I((MW, $m) => {
    var zL = It(),
      HL = function() {
        try {
          var e = zL(Object, "defineProperty");
          return e({}, "", {}), e
        } catch {}
      }();
    $m.exports = HL
  });
  var Us = I((FW, Jm) => {
    var Zm = Gs();

    function WL(e, t, r) {
      t == "__proto__" && Zm ? Zm(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : e[t] = r
    }
    Jm.exports = WL
  });
  var tg = I((LW, eg) => {
    var XL = Us(),
      jL = In(),
      YL = Object.prototype,
      KL = YL.hasOwnProperty;

    function QL(e, t, r) {
      var n = e[t];
      (!(KL.call(e, t) && jL(n, r)) || r === void 0 && !(t in e)) && XL(e, t, r)
    }
    eg.exports = QL
  });
  var ig = I((DW, ng) => {
    var $L = tg(),
      ZL = Br(),
      JL = Pn(),
      rg = tt(),
      eD = pr();

    function tD(e, t, r, n) {
      if (!rg(e)) return e;
      t = ZL(t, e);
      for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a;) {
        var l = eD(t[i]),
          f = r;
        if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
        if (i != o) {
          var u = s[l];
          f = n ? n(u, l, s) : void 0, f === void 0 && (f = rg(u) ? u : JL(t[i + 1]) ? [] : {})
        }
        $L(s, l, f), s = s[l]
      }
      return e
    }
    ng.exports = tD
  });
  var sg = I((NW, ag) => {
    var rD = Dn(),
      nD = ig(),
      iD = Br();

    function aD(e, t, r) {
      for (var n = -1, i = t.length, a = {}; ++n < i;) {
        var o = t[n],
          s = rD(e, o);
        r(s, o) && nD(a, iD(o, e), s)
      }
      return a
    }
    ag.exports = aD
  });
  var lg = I((kW, og) => {
    var sD = An(),
      oD = ra(),
      lD = Da(),
      cD = La(),
      uD = Object.getOwnPropertySymbols,
      fD = uD ? function(e) {
        for (var t = []; e;) sD(t, lD(e)), e = oD(e);
        return t
      } : cD;
    og.exports = fD
  });
  var ug = I((VW, cg) => {
    function hD(e) {
      var t = [];
      if (e != null)
        for (var r in Object(e)) t.push(r);
      return t
    }
    cg.exports = hD
  });
  var hg = I((qW, fg) => {
    var pD = tt(),
      dD = wn(),
      mD = ug(),
      gD = Object.prototype,
      yD = gD.hasOwnProperty;

    function vD(e) {
      if (!pD(e)) return mD(e);
      var t = dD(e),
        r = [];
      for (var n in e) n == "constructor" && (t || !yD.call(e, n)) || r.push(n);
      return r
    }
    fg.exports = vD
  });
  var dg = I((BW, pg) => {
    var ED = ka(),
      bD = hg(),
      ID = Dt();

    function TD(e) {
      return ID(e) ? ED(e, !0) : bD(e)
    }
    pg.exports = TD
  });
  var gg = I((GW, mg) => {
    var _D = Fa(),
      SD = lg(),
      AD = dg();

    function xD(e) {
      return _D(e, AD, SD)
    }
    mg.exports = xD
  });
  var vg = I((UW, yg) => {
    var PD = Ka(),
      OD = Tt(),
      CD = sg(),
      wD = gg();

    function RD(e, t) {
      if (e == null) return {};
      var r = PD(wD(e), function(n) {
        return [n]
      });
      return t = OD(t), CD(e, r, function(n, i) {
        return t(n, i[0])
      })
    }
    yg.exports = RD
  });
  var bg = I((zW, Eg) => {
    var MD = Tt(),
      FD = Qm(),
      LD = vg();

    function DD(e, t) {
      return LD(e, FD(MD(t)))
    }
    Eg.exports = DD
  });
  var Tg = I((HW, Ig) => {
    var ND = Rn(),
      kD = Mn(),
      VD = Lr(),
      qD = Pe(),
      BD = Dt(),
      GD = xn(),
      UD = wn(),
      zD = Cn(),
      HD = "[object Map]",
      WD = "[object Set]",
      XD = Object.prototype,
      jD = XD.hasOwnProperty;

    function YD(e) {
      if (e == null) return !0;
      if (BD(e) && (qD(e) || typeof e == "string" || typeof e.splice == "function" || GD(e) || zD(e) || VD(e))) return !e.length;
      var t = kD(e);
      if (t == HD || t == WD) return !e.size;
      if (UD(e)) return !ND(e).length;
      for (var r in e)
        if (jD.call(e, r)) return !1;
      return !0
    }
    Ig.exports = YD
  });
  var Sg = I((WW, _g) => {
    var KD = Us(),
      QD = Ts(),
      $D = Tt();

    function ZD(e, t) {
      var r = {};
      return t = $D(t, 3), QD(e, function(n, i, a) {
        KD(r, i, t(n, i, a))
      }), r
    }
    _g.exports = ZD
  });
  var xg = I((XW, Ag) => {
    function JD(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
      return e
    }
    Ag.exports = JD
  });
  var Og = I((jW, Pg) => {
    var eN = kn();

    function tN(e) {
      return typeof e == "function" ? e : eN
    }
    Pg.exports = tN
  });
  var wg = I((YW, Cg) => {
    var rN = xg(),
      nN = _s(),
      iN = Og(),
      aN = Pe();

    function sN(e, t) {
      var r = aN(e) ? rN : nN;
      return r(e, iN(t))
    }
    Cg.exports = sN
  });
  var Mg = I((KW, Rg) => {
    var oN = Ke(),
      lN = function() {
        return oN.Date.now()
      };
    Rg.exports = lN
  });
  var Dg = I((QW, Lg) => {
    var cN = tt(),
      zs = Mg(),
      Fg = Vn(),
      uN = "Expected a function",
      fN = Math.max,
      hN = Math.min;

    function pN(e, t, r) {
      var n, i, a, o, s, l, f = 0,
        u = !1,
        p = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(uN);
      t = Fg(t) || 0, cN(r) && (u = !!r.leading, p = "maxWait" in r, a = p ? fN(Fg(r.maxWait) || 0, t) : a, g = "trailing" in r ? !!r.trailing : g);

      function d(A) {
        var S = n,
          x = i;
        return n = i = void 0, f = A, o = e.apply(x, S), o
      }

      function h(A) {
        return f = A, s = setTimeout(y, t), u ? d(A) : o
      }

      function m(A) {
        var S = A - l,
          x = A - f,
          L = t - S;
        return p ? hN(L, a - x) : L
      }

      function c(A) {
        var S = A - l,
          x = A - f;
        return l === void 0 || S >= t || S < 0 || p && x >= a
      }

      function y() {
        var A = zs();
        if (c(A)) return v(A);
        s = setTimeout(y, m(A))
      }

      function v(A) {
        return s = void 0, g && n ? d(A) : (n = i = void 0, o)
      }

      function E() {
        s !== void 0 && clearTimeout(s), f = 0, n = l = i = s = void 0
      }

      function b() {
        return s === void 0 ? o : v(zs())
      }

      function _() {
        var A = zs(),
          S = c(A);
        if (n = arguments, i = this, l = A, S) {
          if (s === void 0) return h(l);
          if (p) return clearTimeout(s), s = setTimeout(y, t), d(l)
        }
        return s === void 0 && (s = setTimeout(y, t)), o
      }
      return _.cancel = E, _.flush = b, _
    }
    Lg.exports = pN
  });
  var kg = I(($W, Ng) => {
    var dN = Dg(),
      mN = tt(),
      gN = "Expected a function";

    function yN(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(gN);
      return mN(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), dN(e, t, {
        leading: n,
        maxWait: t,
        trailing: i
      })
    }
    Ng.exports = yN
  });
  var Jn = I(Hs => {
    "use strict";
    Object.defineProperty(Hs, "__esModule", {
      value: !0
    });

    function vN(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    vN(Hs, {
      actionListPlaybackChanged: function() {
        return ik
      },
      animationFrameChanged: function() {
        return ZN
      },
      clearRequested: function() {
        return YN
      },
      elementStateChanged: function() {
        return nk
      },
      eventListenerAdded: function() {
        return KN
      },
      eventStateChanged: function() {
        return $N
      },
      instanceAdded: function() {
        return ek
      },
      instanceRemoved: function() {
        return rk
      },
      instanceStarted: function() {
        return tk
      },
      mediaQueriesDefined: function() {
        return sk
      },
      parameterChanged: function() {
        return JN
      },
      playbackRequested: function() {
        return XN
      },
      previewRequested: function() {
        return WN
      },
      rawDataImported: function() {
        return GN
      },
      sessionInitialized: function() {
        return UN
      },
      sessionStarted: function() {
        return zN
      },
      sessionStopped: function() {
        return HN
      },
      stopRequested: function() {
        return jN
      },
      testFrameRendered: function() {
        return QN
      },
      viewportWidthChanged: function() {
        return ak
      }
    });
    var Vg = Ve(),
      EN = Bt(),
      {
        IX2_RAW_DATA_IMPORTED: bN,
        IX2_SESSION_INITIALIZED: IN,
        IX2_SESSION_STARTED: TN,
        IX2_SESSION_STOPPED: _N,
        IX2_PREVIEW_REQUESTED: SN,
        IX2_PLAYBACK_REQUESTED: AN,
        IX2_STOP_REQUESTED: xN,
        IX2_CLEAR_REQUESTED: PN,
        IX2_EVENT_LISTENER_ADDED: ON,
        IX2_TEST_FRAME_RENDERED: CN,
        IX2_EVENT_STATE_CHANGED: wN,
        IX2_ANIMATION_FRAME_CHANGED: RN,
        IX2_PARAMETER_CHANGED: MN,
        IX2_INSTANCE_ADDED: FN,
        IX2_INSTANCE_STARTED: LN,
        IX2_INSTANCE_REMOVED: DN,
        IX2_ELEMENT_STATE_CHANGED: NN,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: kN,
        IX2_VIEWPORT_WIDTH_CHANGED: VN,
        IX2_MEDIA_QUERIES_DEFINED: qN
      } = Vg.IX2EngineActionTypes,
      {
        reifyState: BN
      } = EN.IX2VanillaUtils,
      GN = e => ({
        type: bN,
        payload: {
          ...BN(e)
        }
      }),
      UN = ({
        hasBoundaryNodes: e,
        reducedMotion: t
      }) => ({
        type: IN,
        payload: {
          hasBoundaryNodes: e,
          reducedMotion: t
        }
      }),
      zN = () => ({
        type: TN
      }),
      HN = () => ({
        type: _N
      }),
      WN = ({
        rawData: e,
        defer: t
      }) => ({
        type: SN,
        payload: {
          defer: t,
          rawData: e
        }
      }),
      XN = ({
        actionTypeId: e = Vg.ActionTypeConsts.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: r,
        eventId: n,
        allowEvents: i,
        immediate: a,
        testManual: o,
        verbose: s,
        rawData: l
      }) => ({
        type: AN,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: r,
          testManual: o,
          eventId: n,
          allowEvents: i,
          immediate: a,
          verbose: s,
          rawData: l
        }
      }),
      jN = e => ({
        type: xN,
        payload: {
          actionListId: e
        }
      }),
      YN = () => ({
        type: PN
      }),
      KN = (e, t) => ({
        type: ON,
        payload: {
          target: e,
          listenerParams: t
        }
      }),
      QN = (e = 1) => ({
        type: CN,
        payload: {
          step: e
        }
      }),
      $N = (e, t) => ({
        type: wN,
        payload: {
          stateKey: e,
          newState: t
        }
      }),
      ZN = (e, t) => ({
        type: RN,
        payload: {
          now: e,
          parameters: t
        }
      }),
      JN = (e, t) => ({
        type: MN,
        payload: {
          key: e,
          value: t
        }
      }),
      ek = e => ({
        type: FN,
        payload: {
          ...e
        }
      }),
      tk = (e, t) => ({
        type: LN,
        payload: {
          instanceId: e,
          time: t
        }
      }),
      rk = e => ({
        type: DN,
        payload: {
          instanceId: e
        }
      }),
      nk = (e, t, r, n) => ({
        type: NN,
        payload: {
          elementId: e,
          actionTypeId: t,
          current: r,
          actionItem: n
        }
      }),
      ik = ({
        actionListId: e,
        isPlaying: t
      }) => ({
        type: kN,
        payload: {
          actionListId: e,
          isPlaying: t
        }
      }),
      ak = ({
        width: e,
        mediaQueries: t
      }) => ({
        type: VN,
        payload: {
          width: e,
          mediaQueries: t
        }
      }),
      sk = () => ({
        type: qN
      })
  });
  var Gg = I(Xs => {
    "use strict";
    Object.defineProperty(Xs, "__esModule", {
      value: !0
    });

    function ok(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    ok(Xs, {
      elementContains: function() {
        return Ek
      },
      getChildElements: function() {
        return Ik
      },
      getClosestElement: function() {
        return _k
      },
      getProperty: function() {
        return dk
      },
      getQuerySelector: function() {
        return gk
      },
      getRefType: function() {
        return Sk
      },
      getSiblingElements: function() {
        return Tk
      },
      getStyle: function() {
        return pk
      },
      getValidDocument: function() {
        return yk
      },
      isSiblingNode: function() {
        return bk
      },
      matchSelector: function() {
        return mk
      },
      queryDocument: function() {
        return vk
      },
      setStyle: function() {
        return hk
      }
    });
    var lk = Bt(),
      ck = Ve(),
      {
        ELEMENT_MATCHES: Ws
      } = lk.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: qg,
        HTML_ELEMENT: uk,
        PLAIN_OBJECT: fk,
        WF_PAGE: Bg
      } = ck.IX2EngineConstants;

    function hk(e, t, r) {
      e.style[t] = r
    }

    function pk(e, t) {
      if (t.startsWith("--")) return window.getComputedStyle(document.documentElement).getPropertyValue(t);
      if (e.style instanceof CSSStyleDeclaration) return e.style[t]
    }

    function dk(e, t) {
      return e[t]
    }

    function mk(e) {
      return t => t[Ws](e)
    }

    function gk({
      id: e,
      selector: t
    }) {
      if (e) {
        let r = e;
        if (e.indexOf(qg) !== -1) {
          let n = e.split(qg),
            i = n[0];
          if (r = n[1], i !== document.documentElement.getAttribute(Bg)) return null
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
      }
      return t
    }

    function yk(e) {
      return e == null || e === document.documentElement.getAttribute(Bg) ? document : null
    }

    function vk(e, t) {
      return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Ek(e, t) {
      return e.contains(t)
    }

    function bk(e, t) {
      return e !== t && e.parentNode === t.parentNode
    }

    function Ik(e) {
      let t = [];
      for (let r = 0, {
          length: n
        } = e || []; r < n; r++) {
        let {
          children: i
        } = e[r], {
          length: a
        } = i;
        if (a)
          for (let o = 0; o < a; o++) t.push(i[o])
      }
      return t
    }

    function Tk(e = []) {
      let t = [],
        r = [];
      for (let n = 0, {
          length: i
        } = e; n < i; n++) {
        let {
          parentNode: a
        } = e[n];
        if (!a || !a.children || !a.children.length || r.indexOf(a) !== -1) continue;
        r.push(a);
        let o = a.firstElementChild;
        for (; o != null;) e.indexOf(o) === -1 && t.push(o), o = o.nextElementSibling
      }
      return t
    }
    var _k = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
      if (!document.documentElement.contains(e)) return null;
      let r = e;
      do {
        if (r[Ws] && r[Ws](t)) return r;
        r = r.parentNode
      } while (r != null);
      return null
    };

    function Sk(e) {
      return e != null && typeof e == "object" ? e instanceof Element ? uk : fk : null
    }
  });
  var js = I((eX, zg) => {
    var Ak = tt(),
      Ug = Object.create,
      xk = function() {
        function e() {}
        return function(t) {
          if (!Ak(t)) return {};
          if (Ug) return Ug(t);
          e.prototype = t;
          var r = new e;
          return e.prototype = void 0, r
        }
      }();
    zg.exports = xk
  });
  var ei = I((tX, Hg) => {
    function Pk() {}
    Hg.exports = Pk
  });
  var ri = I((rX, Wg) => {
    var Ok = js(),
      Ck = ei();

    function ti(e, t) {
      this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    ti.prototype = Ok(Ck.prototype);
    ti.prototype.constructor = ti;
    Wg.exports = ti
  });
  var Kg = I((nX, Yg) => {
    var Xg = rr(),
      wk = Lr(),
      Rk = Pe(),
      jg = Xg ? Xg.isConcatSpreadable : void 0;

    function Mk(e) {
      return Rk(e) || wk(e) || !!(jg && e && e[jg])
    }
    Yg.exports = Mk
  });
  var Zg = I((iX, $g) => {
    var Fk = An(),
      Lk = Kg();

    function Qg(e, t, r, n, i) {
      var a = -1,
        o = e.length;
      for (r || (r = Lk), i || (i = []); ++a < o;) {
        var s = e[a];
        t > 0 && r(s) ? t > 1 ? Qg(s, t - 1, r, n, i) : Fk(i, s) : n || (i[i.length] = s)
      }
      return i
    }
    $g.exports = Qg
  });
  var ey = I((aX, Jg) => {
    var Dk = Zg();

    function Nk(e) {
      var t = e == null ? 0 : e.length;
      return t ? Dk(e, 1) : []
    }
    Jg.exports = Nk
  });
  var ry = I((sX, ty) => {
    function kk(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2])
      }
      return e.apply(t, r)
    }
    ty.exports = kk
  });
  var ay = I((oX, iy) => {
    var Vk = ry(),
      ny = Math.max;

    function qk(e, t, r) {
      return t = ny(t === void 0 ? e.length - 1 : t, 0),
        function() {
          for (var n = arguments, i = -1, a = ny(n.length - t, 0), o = Array(a); ++i < a;) o[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
          return s[t] = r(o), Vk(e, this, s)
        }
    }
    iy.exports = qk
  });
  var oy = I((lX, sy) => {
    function Bk(e) {
      return function() {
        return e
      }
    }
    sy.exports = Bk
  });
  var uy = I((cX, cy) => {
    var Gk = oy(),
      ly = Gs(),
      Uk = kn(),
      zk = ly ? function(e, t) {
        return ly(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Gk(t),
          writable: !0
        })
      } : Uk;
    cy.exports = zk
  });
  var hy = I((uX, fy) => {
    var Hk = 800,
      Wk = 16,
      Xk = Date.now;

    function jk(e) {
      var t = 0,
        r = 0;
      return function() {
        var n = Xk(),
          i = Wk - (n - r);
        if (r = n, i > 0) {
          if (++t >= Hk) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
      }
    }
    fy.exports = jk
  });
  var dy = I((fX, py) => {
    var Yk = uy(),
      Kk = hy(),
      Qk = Kk(Yk);
    py.exports = Qk
  });
  var gy = I((hX, my) => {
    var $k = ey(),
      Zk = ay(),
      Jk = dy();

    function e4(e) {
      return Jk(Zk(e, void 0, $k), e + "")
    }
    my.exports = e4
  });
  var Ey = I((pX, vy) => {
    var yy = Va(),
      t4 = yy && new yy;
    vy.exports = t4
  });
  var Iy = I((dX, by) => {
    function r4() {}
    by.exports = r4
  });
  var Ys = I((mX, _y) => {
    var Ty = Ey(),
      n4 = Iy(),
      i4 = Ty ? function(e) {
        return Ty.get(e)
      } : n4;
    _y.exports = i4
  });
  var Ay = I((gX, Sy) => {
    var a4 = {};
    Sy.exports = a4
  });
  var Ks = I((yX, Py) => {
    var xy = Ay(),
      s4 = Object.prototype,
      o4 = s4.hasOwnProperty;

    function l4(e) {
      for (var t = e.name + "", r = xy[t], n = o4.call(xy, t) ? r.length : 0; n--;) {
        var i = r[n],
          a = i.func;
        if (a == null || a == e) return i.name
      }
      return t
    }
    Py.exports = l4
  });
  var ii = I((vX, Oy) => {
    var c4 = js(),
      u4 = ei(),
      f4 = 4294967295;

    function ni(e) {
      this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = f4, this.__views__ = []
    }
    ni.prototype = c4(u4.prototype);
    ni.prototype.constructor = ni;
    Oy.exports = ni
  });
  var wy = I((EX, Cy) => {
    function h4(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
      return t
    }
    Cy.exports = h4
  });
  var My = I((bX, Ry) => {
    var p4 = ii(),
      d4 = ri(),
      m4 = wy();

    function g4(e) {
      if (e instanceof p4) return e.clone();
      var t = new d4(e.__wrapped__, e.__chain__);
      return t.__actions__ = m4(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
    Ry.exports = g4
  });
  var Dy = I((IX, Ly) => {
    var y4 = ii(),
      Fy = ri(),
      v4 = ei(),
      E4 = Pe(),
      b4 = ft(),
      I4 = My(),
      T4 = Object.prototype,
      _4 = T4.hasOwnProperty;

    function ai(e) {
      if (b4(e) && !E4(e) && !(e instanceof y4)) {
        if (e instanceof Fy) return e;
        if (_4.call(e, "__wrapped__")) return I4(e)
      }
      return new Fy(e)
    }
    ai.prototype = v4.prototype;
    ai.prototype.constructor = ai;
    Ly.exports = ai
  });
  var ky = I((TX, Ny) => {
    var S4 = ii(),
      A4 = Ys(),
      x4 = Ks(),
      P4 = Dy();

    function O4(e) {
      var t = x4(e),
        r = P4[t];
      if (typeof r != "function" || !(t in S4.prototype)) return !1;
      if (e === r) return !0;
      var n = A4(r);
      return !!n && e === n[0]
    }
    Ny.exports = O4
  });
  var Gy = I((_X, By) => {
    var Vy = ri(),
      C4 = gy(),
      w4 = Ys(),
      Qs = Ks(),
      R4 = Pe(),
      qy = ky(),
      M4 = "Expected a function",
      F4 = 8,
      L4 = 32,
      D4 = 128,
      N4 = 256;

    function k4(e) {
      return C4(function(t) {
        var r = t.length,
          n = r,
          i = Vy.prototype.thru;
        for (e && t.reverse(); n--;) {
          var a = t[n];
          if (typeof a != "function") throw new TypeError(M4);
          if (i && !o && Qs(a) == "wrapper") var o = new Vy([], !0)
        }
        for (n = o ? n : r; ++n < r;) {
          a = t[n];
          var s = Qs(a),
            l = s == "wrapper" ? w4(a) : void 0;
          l && qy(l[0]) && l[1] == (D4 | F4 | L4 | N4) && !l[4].length && l[9] == 1 ? o = o[Qs(l[0])].apply(o, l[3]) : o = a.length == 1 && qy(a) ? o[s]() : o.thru(a)
        }
        return function() {
          var f = arguments,
            u = f[0];
          if (o && f.length == 1 && R4(u)) return o.plant(u).value();
          for (var p = 0, g = r ? t[p].apply(this, f) : u; ++p < r;) g = t[p].call(this, g);
          return g
        }
      })
    }
    By.exports = k4
  });
  var zy = I((SX, Uy) => {
    var V4 = Gy(),
      q4 = V4();
    Uy.exports = q4
  });
  var Wy = I((AX, Hy) => {
    function B4(e, t, r) {
      return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
    }
    Hy.exports = B4
  });
  var jy = I((xX, Xy) => {
    var G4 = Wy(),
      $s = Vn();

    function U4(e, t, r) {
      return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = $s(r), r = r === r ? r : 0), t !== void 0 && (t = $s(t), t = t === t ? t : 0), G4($s(e), t, r)
    }
    Xy.exports = U4
  });
  var f0 = I(no => {
    "use strict";
    Object.defineProperty(no, "__esModule", {
      value: !0
    });
    Object.defineProperty(no, "default", {
      enumerable: !0,
      get: function() {
        return S7
      }
    });
    var z4 = ro(zy()),
      H4 = ro(Nn()),
      W4 = ro(jy()),
      Gt = Ve(),
      Zs = io(),
      si = Jn(),
      X4 = Bt();

    function ro(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var {
      MOUSE_CLICK: j4,
      MOUSE_SECOND_CLICK: Y4,
      MOUSE_DOWN: K4,
      MOUSE_UP: Q4,
      MOUSE_OVER: $4,
      MOUSE_OUT: Z4,
      DROPDOWN_CLOSE: J4,
      DROPDOWN_OPEN: e7,
      SLIDER_ACTIVE: t7,
      SLIDER_INACTIVE: r7,
      TAB_ACTIVE: n7,
      TAB_INACTIVE: i7,
      NAVBAR_CLOSE: a7,
      NAVBAR_OPEN: s7,
      MOUSE_MOVE: o7,
      PAGE_SCROLL_DOWN: r0,
      SCROLL_INTO_VIEW: n0,
      SCROLL_OUT_OF_VIEW: l7,
      PAGE_SCROLL_UP: c7,
      SCROLLING_IN_VIEW: u7,
      PAGE_FINISH: i0,
      ECOMMERCE_CART_CLOSE: f7,
      ECOMMERCE_CART_OPEN: h7,
      PAGE_START: a0,
      PAGE_SCROLL: p7
    } = Gt.EventTypeConsts, Js = "COMPONENT_ACTIVE", s0 = "COMPONENT_INACTIVE", {
      COLON_DELIMITER: Yy
    } = Gt.IX2EngineConstants, {
      getNamespacedParameterId: Ky
    } = X4.IX2VanillaUtils, o0 = e => t => typeof t == "object" && e(t) ? !0 : t, Kr = o0(({
      element: e,
      nativeEvent: t
    }) => e === t.target), d7 = o0(({
      element: e,
      nativeEvent: t
    }) => e.contains(t.target)), at = (0, z4.default)([Kr, d7]), l0 = (e, t) => {
      if (t) {
        let {
          ixData: r
        } = e.getState(), {
          events: n
        } = r, i = n[t];
        if (i && !g7[i.eventTypeId]) return i
      }
      return null
    }, m7 = ({
      store: e,
      event: t
    }) => {
      let {
        action: r
      } = t, {
        autoStopEventId: n
      } = r.config;
      return !!l0(e, n)
    }, Be = ({
      store: e,
      event: t,
      element: r,
      eventStateKey: n
    }, i) => {
      let {
        action: a,
        id: o
      } = t, {
        actionListId: s,
        autoStopEventId: l
      } = a.config, f = l0(e, l);
      return f && (0, Zs.stopActionGroup)({
        store: e,
        eventId: l,
        eventTarget: r,
        eventStateKey: l + Yy + n.split(Yy)[1],
        actionListId: (0, H4.default)(f, "action.config.actionListId")
      }), (0, Zs.stopActionGroup)({
        store: e,
        eventId: o,
        eventTarget: r,
        eventStateKey: n,
        actionListId: s
      }), (0, Zs.startActionGroup)({
        store: e,
        eventId: o,
        eventTarget: r,
        eventStateKey: n,
        actionListId: s
      }), i
    }, Qe = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Qr = {
      handler: Qe(at, Be)
    }, c0 = {
      ...Qr,
      types: [Js, s0].join(" ")
    }, eo = [{
      target: window,
      types: "resize orientationchange",
      throttle: !0
    }, {
      target: document,
      types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
      throttle: !0
    }], Qy = "mouseover mouseout", to = {
      types: eo
    }, g7 = {
      PAGE_START: a0,
      PAGE_FINISH: i0
    }, Yr = (() => {
      let e = window.pageXOffset !== void 0,
        r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
      return () => ({
        scrollLeft: e ? window.pageXOffset : r.scrollLeft,
        scrollTop: e ? window.pageYOffset : r.scrollTop,
        stiffScrollTop: (0, W4.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
        scrollWidth: r.scrollWidth,
        scrollHeight: r.scrollHeight,
        clientWidth: r.clientWidth,
        clientHeight: r.clientHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      })
    })(), y7 = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), v7 = ({
      element: e,
      nativeEvent: t
    }) => {
      let {
        type: r,
        target: n,
        relatedTarget: i
      } = t, a = e.contains(n);
      if (r === "mouseover" && a) return !0;
      let o = e.contains(i);
      return !!(r === "mouseout" && a && o)
    }, E7 = e => {
      let {
        element: t,
        event: {
          config: r
        }
      } = e, {
        clientWidth: n,
        clientHeight: i
      } = Yr(), a = r.scrollOffsetValue, l = r.scrollOffsetUnit === "PX" ? a : i * (a || 0) / 100;
      return y7(t.getBoundingClientRect(), {
        left: 0,
        top: l,
        right: n,
        bottom: i - l
      })
    }, u0 = e => (t, r) => {
      let {
        type: n
      } = t.nativeEvent, i = [Js, s0].indexOf(n) !== -1 ? n === Js : r.isActive, a = {
        ...r,
        isActive: i
      };
      return (!r || a.isActive !== r.isActive) && e(t, a) || a
    }, $y = e => (t, r) => {
      let n = {
        elementHovered: v7(t)
      };
      return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
    }, b7 = e => (t, r) => {
      let n = {
        ...r,
        elementVisible: E7(t)
      };
      return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
    }, Zy = e => (t, r = {}) => {
      let {
        stiffScrollTop: n,
        scrollHeight: i,
        innerHeight: a
      } = Yr(), {
        event: {
          config: o,
          eventTypeId: s
        }
      } = t, {
        scrollOffsetValue: l,
        scrollOffsetUnit: f
      } = o, u = f === "PX", p = i - a, g = Number((n / p).toFixed(2));
      if (r && r.percentTop === g) return r;
      let d = (u ? l : a * (l || 0) / 100) / p,
        h, m, c = 0;
      r && (h = g > r.percentTop, m = r.scrollingDown !== h, c = m ? g : r.anchorTop);
      let y = s === r0 ? g >= c + d : g <= c - d,
        v = {
          ...r,
          percentTop: g,
          inBounds: y,
          anchorTop: c,
          scrollingDown: h
        };
      return r && y && (m || v.inBounds !== r.inBounds) && e(t, v) || v
    }, I7 = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, T7 = e => (t, r) => {
      let n = {
        finished: document.readyState === "complete"
      };
      return n.finished && !(r && r.finshed) && e(t), n
    }, _7 = e => (t, r) => {
      let n = {
        started: !0
      };
      return r || e(t), n
    }, Jy = e => (t, r = {
      clickCount: 0
    }) => {
      let n = {
        clickCount: r.clickCount % 2 + 1
      };
      return n.clickCount !== r.clickCount && e(t, n) || n
    }, oi = (e = !0) => ({
      ...c0,
      handler: Qe(e ? at : Kr, u0((t, r) => r.isActive ? Qr.handler(t, r) : r))
    }), li = (e = !0) => ({
      ...c0,
      handler: Qe(e ? at : Kr, u0((t, r) => r.isActive ? r : Qr.handler(t, r)))
    }), e0 = {
      ...to,
      handler: b7((e, t) => {
        let {
          elementVisible: r
        } = t, {
          event: n,
          store: i
        } = e, {
          ixData: a
        } = i.getState(), {
          events: o
        } = a;
        return !o[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === n0 === r ? (Be(e), {
          ...t,
          triggered: !0
        }) : t
      })
    }, t0 = .05, S7 = {
      [t7]: oi(),
      [r7]: li(),
      [e7]: oi(),
      [J4]: li(),
      [s7]: oi(!1),
      [a7]: li(!1),
      [n7]: oi(),
      [i7]: li(),
      [h7]: {
        types: "ecommerce-cart-open",
        handler: Qe(at, Be)
      },
      [f7]: {
        types: "ecommerce-cart-close",
        handler: Qe(at, Be)
      },
      [j4]: {
        types: "click",
        handler: Qe(at, Jy((e, {
          clickCount: t
        }) => {
          m7(e) ? t === 1 && Be(e) : Be(e)
        }))
      },
      [Y4]: {
        types: "click",
        handler: Qe(at, Jy((e, {
          clickCount: t
        }) => {
          t === 2 && Be(e)
        }))
      },
      [K4]: {
        ...Qr,
        types: "mousedown"
      },
      [Q4]: {
        ...Qr,
        types: "mouseup"
      },
      [$4]: {
        types: Qy,
        handler: Qe(at, $y((e, t) => {
          t.elementHovered && Be(e)
        }))
      },
      [Z4]: {
        types: Qy,
        handler: Qe(at, $y((e, t) => {
          t.elementHovered || Be(e)
        }))
      },
      [o7]: {
        types: "mousemove mouseout scroll",
        handler: ({
          store: e,
          element: t,
          eventConfig: r,
          nativeEvent: n,
          eventStateKey: i
        }, a = {
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0
        }) => {
          let {
            basedOn: o,
            selectedAxis: s,
            continuousParameterGroupId: l,
            reverse: f,
            restingState: u = 0
          } = r, {
            clientX: p = a.clientX,
            clientY: g = a.clientY,
            pageX: d = a.pageX,
            pageY: h = a.pageY
          } = n, m = s === "X_AXIS", c = n.type === "mouseout", y = u / 100, v = l, E = !1;
          switch (o) {
            case Gt.EventBasedOn.VIEWPORT: {
              y = m ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
              break
            }
            case Gt.EventBasedOn.PAGE: {
              let {
                scrollLeft: b,
                scrollTop: _,
                scrollWidth: A,
                scrollHeight: S
              } = Yr();
              y = m ? Math.min(b + d, A) / A : Math.min(_ + h, S) / S;
              break
            }
            case Gt.EventBasedOn.ELEMENT:
            default: {
              v = Ky(i, l);
              let b = n.type.indexOf("mouse") === 0;
              if (b && at({
                  element: t,
                  nativeEvent: n
                }) !== !0) break;
              let _ = t.getBoundingClientRect(),
                {
                  left: A,
                  top: S,
                  width: x,
                  height: L
                } = _;
              if (!b && !I7({
                  left: p,
                  top: g
                }, _)) break;
              E = !0, y = m ? (p - A) / x : (g - S) / L;
              break
            }
          }
          return c && (y > 1 - t0 || y < t0) && (y = Math.round(y)), (o !== Gt.EventBasedOn.ELEMENT || E || E !== a.elementHovered) && (y = f ? 1 - y : y, e.dispatch((0, si.parameterChanged)(v, y))), {
            elementHovered: E,
            clientX: p,
            clientY: g,
            pageX: d,
            pageY: h
          }
        }
      },
      [p7]: {
        types: eo,
        handler: ({
          store: e,
          eventConfig: t
        }) => {
          let {
            continuousParameterGroupId: r,
            reverse: n
          } = t, {
            scrollTop: i,
            scrollHeight: a,
            clientHeight: o
          } = Yr(), s = i / (a - o);
          s = n ? 1 - s : s, e.dispatch((0, si.parameterChanged)(r, s))
        }
      },
      [u7]: {
        types: eo,
        handler: ({
          element: e,
          store: t,
          eventConfig: r,
          eventStateKey: n
        }, i = {
          scrollPercent: 0
        }) => {
          let {
            scrollLeft: a,
            scrollTop: o,
            scrollWidth: s,
            scrollHeight: l,
            clientHeight: f
          } = Yr(), {
            basedOn: u,
            selectedAxis: p,
            continuousParameterGroupId: g,
            startsEntering: d,
            startsExiting: h,
            addEndOffset: m,
            addStartOffset: c,
            addOffsetValue: y = 0,
            endOffsetValue: v = 0
          } = r, E = p === "X_AXIS";
          if (u === Gt.EventBasedOn.VIEWPORT) {
            let b = E ? a / s : o / l;
            return b !== i.scrollPercent && t.dispatch((0, si.parameterChanged)(g, b)), {
              scrollPercent: b
            }
          } else {
            let b = Ky(n, g),
              _ = e.getBoundingClientRect(),
              A = (c ? y : 0) / 100,
              S = (m ? v : 0) / 100;
            A = d ? A : 1 - A, S = h ? S : 1 - S;
            let x = _.top + Math.min(_.height * A, f),
              w = _.top + _.height * S - x,
              C = Math.min(f + w, l),
              M = Math.min(Math.max(0, f - x), C) / C;
            return M !== i.scrollPercent && t.dispatch((0, si.parameterChanged)(b, M)), {
              scrollPercent: M
            }
          }
        }
      },
      [n0]: e0,
      [l7]: e0,
      [r0]: {
        ...to,
        handler: Zy((e, t) => {
          t.scrollingDown && Be(e)
        })
      },
      [c7]: {
        ...to,
        handler: Zy((e, t) => {
          t.scrollingDown || Be(e)
        })
      },
      [i0]: {
        types: "readystatechange IX2_PAGE_UPDATE",
        handler: Qe(Kr, T7(Be))
      },
      [a0]: {
        types: "readystatechange IX2_PAGE_UPDATE",
        handler: Qe(Kr, _7(Be))
      }
    }
  });
  var io = I(po => {
    "use strict";
    Object.defineProperty(po, "__esModule", {
      value: !0
    });

    function A7(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    A7(po, {
      observeRequests: function() {
        return J7
      },
      startActionGroup: function() {
        return uo
      },
      startEngine: function() {
        return pi
      },
      stopActionGroup: function() {
        return co
      },
      stopAllActionGroups: function() {
        return I0
      },
      stopEngine: function() {
        return di
      }
    });
    var x7 = pt(ts()),
      At = pt(Nn()),
      P7 = pt(Ym()),
      O7 = pt(bg()),
      C7 = pt(Tg()),
      w7 = pt(Sg()),
      $r = pt(wg()),
      R7 = pt(kg()),
      ze = Ve(),
      d0 = Bt(),
      Se = Jn(),
      xe = F7(Gg()),
      M7 = pt(f0());

    function pt(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function m0(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (m0 = function(n) {
        return n ? r : t
      })(e)
    }

    function F7(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = m0(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
    var L7 = Object.keys(ze.QuickEffectIds),
      ao = e => L7.includes(e),
      {
        COLON_DELIMITER: so,
        BOUNDARY_SELECTOR: ci,
        HTML_ELEMENT: g0,
        RENDER_GENERAL: D7,
        W_MOD_IX: h0
      } = ze.IX2EngineConstants,
      {
        getAffectedElements: ui,
        getElementId: N7,
        getDestinationValues: oo,
        observeStore: Ut,
        getInstanceId: k7,
        renderHTMLElement: V7,
        clearAllStyles: y0,
        getMaxDurationItemIndex: q7,
        getComputedStyle: B7,
        getInstanceOrigin: G7,
        reduceListToGroup: U7,
        shouldNamespaceEventParameter: z7,
        getNamespacedParameterId: H7,
        shouldAllowMediaQuery: fi,
        cleanupHTMLElement: W7,
        clearObjectCache: X7,
        stringifyTarget: j7,
        mediaQueriesEqual: Y7,
        shallowEqual: K7
      } = d0.IX2VanillaUtils,
      {
        isPluginType: hi,
        createPluginInstance: lo,
        getPluginDuration: Q7
      } = d0.IX2VanillaPlugins,
      p0 = navigator.userAgent,
      $7 = p0.match(/iPad/i) || p0.match(/iPhone/),
      Z7 = 12;

    function J7(e) {
      Ut({
        store: e,
        select: ({
          ixRequest: t
        }) => t.preview,
        onChange: rV
      }), Ut({
        store: e,
        select: ({
          ixRequest: t
        }) => t.playback,
        onChange: nV
      }), Ut({
        store: e,
        select: ({
          ixRequest: t
        }) => t.stop,
        onChange: iV
      }), Ut({
        store: e,
        select: ({
          ixRequest: t
        }) => t.clear,
        onChange: aV
      })
    }

    function eV(e) {
      Ut({
        store: e,
        select: ({
          ixSession: t
        }) => t.mediaQueryKey,
        onChange: () => {
          di(e), y0({
            store: e,
            elementApi: xe
          }), pi({
            store: e,
            allowEvents: !0
          }), v0()
        }
      })
    }

    function tV(e, t) {
      let r = Ut({
        store: e,
        select: ({
          ixSession: n
        }) => n.tick,
        onChange: n => {
          t(n), r()
        }
      })
    }

    function rV({
      rawData: e,
      defer: t
    }, r) {
      let n = () => {
        pi({
          store: r,
          rawData: e,
          allowEvents: !0
        }), v0()
      };
      t ? setTimeout(n, 0) : n()
    }

    function v0() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function nV(e, t) {
      let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: a,
        allowEvents: o,
        immediate: s,
        testManual: l,
        verbose: f = !0
      } = e, {
        rawData: u
      } = e;
      if (n && i && u && s) {
        let p = u.actionLists[n];
        p && (u = U7({
          actionList: p,
          actionItemId: i,
          rawData: u
        }))
      }
      if (pi({
          store: t,
          rawData: u,
          allowEvents: o,
          testManual: l
        }), n && r === ze.ActionTypeConsts.GENERAL_START_ACTION || ao(r)) {
        co({
          store: t,
          actionListId: n
        }), b0({
          store: t,
          actionListId: n,
          eventId: a
        });
        let p = uo({
          store: t,
          eventId: a,
          actionListId: n,
          immediate: s,
          verbose: f
        });
        f && p && t.dispatch((0, Se.actionListPlaybackChanged)({
          actionListId: n,
          isPlaying: !s
        }))
      }
    }

    function iV({
      actionListId: e
    }, t) {
      e ? co({
        store: t,
        actionListId: e
      }) : I0({
        store: t
      }), di(t)
    }

    function aV(e, t) {
      di(t), y0({
        store: t,
        elementApi: xe
      })
    }

    function pi({
      store: e,
      rawData: t,
      allowEvents: r,
      testManual: n
    }) {
      let {
        ixSession: i
      } = e.getState();
      t && e.dispatch((0, Se.rawDataImported)(t)), i.active || (e.dispatch((0, Se.sessionInitialized)({
        hasBoundaryNodes: !!document.querySelector(ci),
        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
      })), r && (fV(e), sV(), e.getState().ixSession.hasDefinedMediaQueries && eV(e)), e.dispatch((0, Se.sessionStarted)()), oV(e, n))
    }

    function sV() {
      let {
        documentElement: e
      } = document;
      e.className.indexOf(h0) === -1 && (e.className += ` ${h0}`)
    }

    function oV(e, t) {
      let r = n => {
        let {
          ixSession: i,
          ixParameters: a
        } = e.getState();
        i.active && (e.dispatch((0, Se.animationFrameChanged)(n, a)), t ? tV(e, r) : requestAnimationFrame(r))
      };
      r(window.performance.now())
    }

    function di(e) {
      let {
        ixSession: t
      } = e.getState();
      if (t.active) {
        let {
          eventListeners: r
        } = t;
        r.forEach(lV), X7(), e.dispatch((0, Se.sessionStopped)())
      }
    }

    function lV({
      target: e,
      listenerParams: t
    }) {
      e.removeEventListener.apply(e, t)
    }

    function cV({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: a,
      parameterGroup: o,
      smoothing: s,
      restingValue: l
    }) {
      let {
        ixData: f,
        ixSession: u
      } = e.getState(), {
        events: p
      } = f, g = p[n], {
        eventTypeId: d
      } = g, h = {}, m = {}, c = [], {
        continuousActionGroups: y
      } = o, {
        id: v
      } = o;
      z7(d, i) && (v = H7(t, v));
      let E = u.hasBoundaryNodes && r ? xe.getClosestElement(r, ci) : null;
      y.forEach(b => {
        let {
          keyframe: _,
          actionItems: A
        } = b;
        A.forEach(S => {
          let {
            actionTypeId: x
          } = S, {
            target: L
          } = S.config;
          if (!L) return;
          let w = L.boundaryMode ? E : null,
            C = j7(L) + so + x;
          if (m[C] = uV(m[C], _, S), !h[C]) {
            h[C] = !0;
            let {
              config: k
            } = S;
            ui({
              config: k,
              event: g,
              eventTarget: r,
              elementRoot: w,
              elementApi: xe
            }).forEach(M => {
              c.push({
                element: M,
                key: C
              })
            })
          }
        })
      }), c.forEach(({
        element: b,
        key: _
      }) => {
        let A = m[_],
          S = (0, At.default)(A, "[0].actionItems[0]", {}),
          {
            actionTypeId: x
          } = S,
          w = (x === ze.ActionTypeConsts.PLUGIN_RIVE ? (S.config?.target?.selectorGuids || []).length === 0 : hi(x)) ? lo(x)(b, S) : null,
          C = oo({
            element: b,
            actionItem: S,
            elementApi: xe
          }, w);
        fo({
          store: e,
          element: b,
          eventId: n,
          actionListId: a,
          actionItem: S,
          destination: C,
          continuous: !0,
          parameterId: v,
          actionGroups: A,
          smoothing: s,
          restingValue: l,
          pluginInstance: w
        })
      })
    }

    function uV(e = [], t, r) {
      let n = [...e],
        i;
      return n.some((a, o) => a.keyframe === t ? (i = o, !0) : !1), i == null && (i = n.length, n.push({
        keyframe: t,
        actionItems: []
      })), n[i].actionItems.push(r), n
    }

    function fV(e) {
      let {
        ixData: t
      } = e.getState(), {
        eventTypeMap: r
      } = t;
      E0(e), (0, $r.default)(r, (i, a) => {
        let o = M7.default[a];
        if (!o) {
          console.warn(`IX2 event type not configured: ${a}`);
          return
        }
        yV({
          logic: o,
          store: e,
          events: i
        })
      });
      let {
        ixSession: n
      } = e.getState();
      n.eventListeners.length && pV(e)
    }
    var hV = ["resize", "orientationchange"];

    function pV(e) {
      let t = () => {
        E0(e)
      };
      hV.forEach(r => {
        window.addEventListener(r, t), e.dispatch((0, Se.eventListenerAdded)(window, [r, t]))
      }), t()
    }

    function E0(e) {
      let {
        ixSession: t,
        ixData: r
      } = e.getState(), n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let {
          mediaQueries: i
        } = r;
        e.dispatch((0, Se.viewportWidthChanged)({
          width: n,
          mediaQueries: i
        }))
      }
    }
    var dV = (e, t) => (0, O7.default)((0, w7.default)(e, t), C7.default),
      mV = (e, t) => {
        (0, $r.default)(e, (r, n) => {
          r.forEach((i, a) => {
            let o = n + so + a;
            t(i, n, o)
          })
        })
      },
      gV = e => {
        let t = {
          target: e.target,
          targets: e.targets
        };
        return ui({
          config: t,
          elementApi: xe
        })
      };

    function yV({
      logic: e,
      store: t,
      events: r
    }) {
      vV(r);
      let {
        types: n,
        handler: i
      } = e, {
        ixData: a
      } = t.getState(), {
        actionLists: o
      } = a, s = dV(r, gV);
      if (!(0, P7.default)(s)) return;
      (0, $r.default)(s, (p, g) => {
        let d = r[g],
          {
            action: h,
            id: m,
            mediaQueries: c = a.mediaQueryKeys
          } = d,
          {
            actionListId: y
          } = h.config;
        Y7(c, a.mediaQueryKeys) || t.dispatch((0, Se.mediaQueriesDefined)()), h.actionTypeId === ze.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(d.config) ? d.config : [d.config]).forEach(E => {
          let {
            continuousParameterGroupId: b
          } = E, _ = (0, At.default)(o, `${y}.continuousParameterGroups`, []), A = (0, x7.default)(_, ({
            id: L
          }) => L === b), S = (E.smoothing || 0) / 100, x = (E.restingState || 0) / 100;
          A && p.forEach((L, w) => {
            let C = m + so + w;
            cV({
              store: t,
              eventStateKey: C,
              eventTarget: L,
              eventId: m,
              eventConfig: E,
              actionListId: y,
              parameterGroup: A,
              smoothing: S,
              restingValue: x
            })
          })
        }), (h.actionTypeId === ze.ActionTypeConsts.GENERAL_START_ACTION || ao(h.actionTypeId)) && b0({
          store: t,
          actionListId: y,
          eventId: m
        })
      });
      let l = p => {
          let {
            ixSession: g
          } = t.getState();
          mV(s, (d, h, m) => {
            let c = r[h],
              y = g.eventState[m],
              {
                action: v,
                mediaQueries: E = a.mediaQueryKeys
              } = c;
            if (!fi(E, g.mediaQueryKey)) return;
            let b = (_ = {}) => {
              let A = i({
                store: t,
                element: d,
                event: c,
                eventConfig: _,
                nativeEvent: p,
                eventStateKey: m
              }, y);
              K7(A, y) || t.dispatch((0, Se.eventStateChanged)(m, A))
            };
            v.actionTypeId === ze.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(c.config) ? c.config : [c.config]).forEach(b) : b()
          })
        },
        f = (0, R7.default)(l, Z7),
        u = ({
          target: p = document,
          types: g,
          throttle: d
        }) => {
          g.split(" ").filter(Boolean).forEach(h => {
            let m = d ? f : l;
            p.addEventListener(h, m), t.dispatch((0, Se.eventListenerAdded)(p, [h, m]))
          })
        };
      Array.isArray(n) ? n.forEach(u) : typeof n == "string" && u(e)
    }

    function vV(e) {
      if (!$7) return;
      let t = {},
        r = "";
      for (let n in e) {
        let {
          eventTypeId: i,
          target: a
        } = e[n], o = xe.getQuerySelector(a);
        t[o] || (i === ze.EventTypeConsts.MOUSE_CLICK || i === ze.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[o] = !0, r += o + "{cursor: pointer;touch-action: manipulation;}")
      }
      if (r) {
        let n = document.createElement("style");
        n.textContent = r, document.body.appendChild(n)
      }
    }

    function b0({
      store: e,
      actionListId: t,
      eventId: r
    }) {
      let {
        ixData: n,
        ixSession: i
      } = e.getState(), {
        actionLists: a,
        events: o
      } = n, s = o[r], l = a[t];
      if (l && l.useFirstGroupAsInitialState) {
        let f = (0, At.default)(l, "actionItemGroups[0].actionItems", []),
          u = (0, At.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!fi(u, i.mediaQueryKey)) return;
        f.forEach(p => {
          let {
            config: g,
            actionTypeId: d
          } = p, h = g?.target?.useEventTarget === !0 && g?.target?.objectId == null ? {
            target: s.target,
            targets: s.targets
          } : g, m = ui({
            config: h,
            event: s,
            elementApi: xe
          }), c = hi(d);
          m.forEach(y => {
            let v = c ? lo(d)(y, p) : null;
            fo({
              destination: oo({
                element: y,
                actionItem: p,
                elementApi: xe
              }, v),
              immediate: !0,
              store: e,
              element: y,
              eventId: r,
              actionItem: p,
              actionListId: t,
              pluginInstance: v
            })
          })
        })
      }
    }

    function I0({
      store: e
    }) {
      let {
        ixInstances: t
      } = e.getState();
      (0, $r.default)(t, r => {
        if (!r.continuous) {
          let {
            actionListId: n,
            verbose: i
          } = r;
          ho(r, e), i && e.dispatch((0, Se.actionListPlaybackChanged)({
            actionListId: n,
            isPlaying: !1
          }))
        }
      })
    }

    function co({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i
    }) {
      let {
        ixInstances: a,
        ixSession: o
      } = e.getState(), s = o.hasBoundaryNodes && r ? xe.getClosestElement(r, ci) : null;
      (0, $r.default)(a, l => {
        let f = (0, At.default)(l, "actionItem.config.target.boundaryMode"),
          u = n ? l.eventStateKey === n : !0;
        if (l.actionListId === i && l.eventId === t && u) {
          if (s && f && !xe.elementContains(s, l.element)) return;
          ho(l, e), l.verbose && e.dispatch((0, Se.actionListPlaybackChanged)({
            actionListId: i,
            isPlaying: !1
          }))
        }
      })
    }

    function uo({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: a = 0,
      immediate: o,
      verbose: s
    }) {
      let {
        ixData: l,
        ixSession: f
      } = e.getState(), {
        events: u
      } = l, p = u[t] || {}, {
        mediaQueries: g = l.mediaQueryKeys
      } = p, d = (0, At.default)(l, `actionLists.${i}`, {}), {
        actionItemGroups: h,
        useFirstGroupAsInitialState: m
      } = d;
      if (!h || !h.length) return !1;
      a >= h.length && (0, At.default)(p, "config.loop") && (a = 0), a === 0 && m && a++;
      let y = (a === 0 || a === 1 && m) && ao(p.action?.actionTypeId) ? p.config.delay : void 0,
        v = (0, At.default)(h, [a, "actionItems"], []);
      if (!v.length || !fi(g, f.mediaQueryKey)) return !1;
      let E = f.hasBoundaryNodes && r ? xe.getClosestElement(r, ci) : null,
        b = q7(v),
        _ = !1;
      return v.forEach((A, S) => {
        let {
          config: x,
          actionTypeId: L
        } = A, w = hi(L), {
          target: C
        } = x;
        if (!C) return;
        let k = C.boundaryMode ? E : null;
        ui({
          config: x,
          event: p,
          eventTarget: r,
          elementRoot: k,
          elementApi: xe
        }).forEach((F, U) => {
          let X = w ? lo(L)(F, A) : null,
            ne = w ? Q7(L)(F, A) : null;
          _ = !0;
          let P = b === S && U === 0,
            G = B7({
              element: F,
              actionItem: A
            }),
            J = oo({
              element: F,
              actionItem: A,
              elementApi: xe
            }, X);
          fo({
            store: e,
            element: F,
            actionItem: A,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: a,
            isCarrier: P,
            computedStyle: G,
            destination: J,
            immediate: o,
            verbose: s,
            pluginInstance: X,
            pluginDuration: ne,
            instanceDelay: y
          })
        })
      }), _
    }

    function fo(e) {
      let {
        store: t,
        computedStyle: r,
        ...n
      } = e, {
        element: i,
        actionItem: a,
        immediate: o,
        pluginInstance: s,
        continuous: l,
        restingValue: f,
        eventId: u
      } = n, p = !l, g = k7(), {
        ixElements: d,
        ixSession: h,
        ixData: m
      } = t.getState(), c = N7(d, i), {
        refState: y
      } = d[c] || {}, v = xe.getRefType(i), E = h.reducedMotion && ze.ReducedMotionTypes[a.actionTypeId], b;
      if (E && l) switch (m.events[u]?.eventTypeId) {
        case ze.EventTypeConsts.MOUSE_MOVE:
        case ze.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
          b = f;
          break;
        default:
          b = .5;
          break
      }
      let _ = G7(i, y, r, a, xe, s);
      if (t.dispatch((0, Se.instanceAdded)({
          instanceId: g,
          elementId: c,
          origin: _,
          refType: v,
          skipMotion: E,
          skipToValue: b,
          ...n
        })), T0(document.body, "ix2-animation-started", g), o) {
        EV(t, g);
        return
      }
      Ut({
        store: t,
        select: ({
          ixInstances: A
        }) => A[g],
        onChange: _0
      }), p && t.dispatch((0, Se.instanceStarted)(g, h.tick))
    }

    function ho(e, t) {
      T0(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState()
      });
      let {
        elementId: r,
        actionItem: n
      } = e, {
        ixElements: i
      } = t.getState(), {
        ref: a,
        refType: o
      } = i[r] || {};
      o === g0 && W7(a, n, xe), t.dispatch((0, Se.instanceRemoved)(e.id))
    }

    function T0(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function EV(e, t) {
      let {
        ixParameters: r
      } = e.getState();
      e.dispatch((0, Se.instanceStarted)(t, 0)), e.dispatch((0, Se.animationFrameChanged)(performance.now(), r));
      let {
        ixInstances: n
      } = e.getState();
      _0(n[t], e)
    }

    function _0(e, t) {
      let {
        active: r,
        continuous: n,
        complete: i,
        elementId: a,
        actionItem: o,
        actionTypeId: s,
        renderType: l,
        current: f,
        groupIndex: u,
        eventId: p,
        eventTarget: g,
        eventStateKey: d,
        actionListId: h,
        isCarrier: m,
        styleProp: c,
        verbose: y,
        pluginInstance: v
      } = e, {
        ixData: E,
        ixSession: b
      } = t.getState(), {
        events: _
      } = E, A = _ && _[p] ? _[p] : {}, {
        mediaQueries: S = E.mediaQueryKeys
      } = A;
      if (fi(S, b.mediaQueryKey) && (n || r || i)) {
        if (f || l === D7 && i) {
          t.dispatch((0, Se.elementStateChanged)(a, s, f, o));
          let {
            ixElements: x
          } = t.getState(), {
            ref: L,
            refType: w,
            refState: C
          } = x[a] || {}, k = C && C[s];
          (w === g0 || hi(s)) && V7(L, C, k, p, o, c, xe, l, v)
        }
        if (i) {
          if (m) {
            let x = uo({
              store: t,
              eventId: p,
              eventTarget: g,
              eventStateKey: d,
              actionListId: h,
              groupIndex: u + 1,
              verbose: y
            });
            y && !x && t.dispatch((0, Se.actionListPlaybackChanged)({
              actionListId: h,
              isPlaying: !1
            }))
          }
          ho(e, t)
        }
      }
    }
  });
  var x0 = I(go => {
    "use strict";
    Object.defineProperty(go, "__esModule", {
      value: !0
    });

    function bV(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    bV(go, {
      actions: function() {
        return _V
      },
      destroy: function() {
        return A0
      },
      init: function() {
        return PV
      },
      setEnv: function() {
        return xV
      },
      store: function() {
        return mi
      }
    });
    var IV = ma(),
      TV = SV(Cm()),
      mo = io(),
      _V = AV(Jn());

    function SV(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function S0(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (S0 = function(n) {
        return n ? r : t
      })(e)
    }

    function AV(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = S0(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
    var mi = (0, IV.createStore)(TV.default);

    function xV(e) {
      e() && (0, mo.observeRequests)(mi)
    }

    function PV(e) {
      A0(), (0, mo.startEngine)({
        store: mi,
        rawData: e,
        allowEvents: !0
      })
    }

    function A0() {
      (0, mo.stopEngine)(mi)
    }
  });
  var w0 = I((wX, C0) => {
    "use strict";
    var P0 = Me(),
      O0 = x0();
    O0.setEnv(P0.env);
    P0.define("ix2", C0.exports = function() {
      return O0
    })
  });
  var F0 = I((RX, M0) => {
    "use strict";
    var yo = window.jQuery,
      st = {},
      gi = [],
      R0 = ".w-ix",
      yi = {
        reset: function(e, t) {
          t.__wf_intro = null
        },
        intro: function(e, t) {
          t.__wf_intro || (t.__wf_intro = !0, yo(t).triggerHandler(st.types.INTRO))
        },
        outro: function(e, t) {
          t.__wf_intro && (t.__wf_intro = null, yo(t).triggerHandler(st.types.OUTRO))
        }
      };
    st.triggers = {};
    st.types = {
      INTRO: "w-ix-intro" + R0,
      OUTRO: "w-ix-outro" + R0
    };
    st.init = function() {
      for (var e = gi.length, t = 0; t < e; t++) {
        var r = gi[t];
        r[0](0, r[1])
      }
      gi = [], yo.extend(st.triggers, yi)
    };
    st.async = function() {
      for (var e in yi) {
        var t = yi[e];
        yi.hasOwnProperty(e) && (st.triggers[e] = function(r, n) {
          gi.push([t, n])
        })
      }
    };
    st.async();
    M0.exports = st
  });
  var Zr = I((MX, N0) => {
    "use strict";
    var vo = F0();

    function L0(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
    }
    var OV = window.jQuery,
      vi = {},
      D0 = ".w-ix",
      CV = {
        reset: function(e, t) {
          vo.triggers.reset(e, t)
        },
        intro: function(e, t) {
          vo.triggers.intro(e, t), L0(t, "COMPONENT_ACTIVE")
        },
        outro: function(e, t) {
          vo.triggers.outro(e, t), L0(t, "COMPONENT_INACTIVE")
        }
      };
    vi.triggers = {};
    vi.types = {
      INTRO: "w-ix-intro" + D0,
      OUTRO: "w-ix-outro" + D0
    };
    OV.extend(vi.triggers, CV);
    N0.exports = vi
  });
  var V0 = I((FX, k0) => {
    "use strict";
    var xt = Me(),
      wV = Zr(),
      Oe = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
    xt.define("navbar", k0.exports = function(e, t) {
      var r = {},
        n = e.tram,
        i = e(window),
        a = e(document),
        o = t.debounce,
        s, l, f, u, p = xt.env(),
        g = '<div class="w-nav-overlay" data-wf-ignore />',
        d = ".w-nav",
        h = "w--open",
        m = "w--nav-dropdown-open",
        c = "w--nav-dropdown-toggle-open",
        y = "w--nav-dropdown-list-open",
        v = "w--nav-link-open",
        E = wV.triggers,
        b = e();
      r.ready = r.design = r.preview = _, r.destroy = function() {
        b = e(), A(), l && l.length && l.each(w)
      };

      function _() {
        f = p && xt.env("design"), u = xt.env("editor"), s = e(document.body), l = a.find(d), l.length && (l.each(L), A(), S())
      }

      function A() {
        xt.resize.off(x)
      }

      function S() {
        xt.resize.on(x)
      }

      function x() {
        l.each(N)
      }

      function L(R, Z) {
        var ie = e(Z),
          j = e.data(Z, d);
        j || (j = e.data(Z, d, {
          open: !1,
          el: ie,
          config: {},
          selectedIdx: -1
        })), j.menu = ie.find(".w-nav-menu"), j.links = j.menu.find(".w-nav-link"), j.dropdowns = j.menu.find(".w-dropdown"), j.dropdownToggle = j.menu.find(".w-dropdown-toggle"), j.dropdownList = j.menu.find(".w-dropdown-list"), j.button = ie.find(".w-nav-button"), j.container = ie.find(".w-container"), j.overlayContainerId = "w-nav-overlay-" + R, j.outside = D(j);
        var he = ie.find(".w-nav-brand");
        he && he.attr("href") === "/" && he.attr("aria-label") == null && he.attr("aria-label", "home"), j.button.attr("style", "-webkit-user-select: text;"), j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"), j.button.attr("role", "button"), j.button.attr("tabindex", "0"), j.button.attr("aria-controls", j.overlayContainerId), j.button.attr("aria-haspopup", "menu"), j.button.attr("aria-expanded", "false"), j.el.off(d), j.button.off(d), j.menu.off(d), M(j), f ? (C(j), j.el.on("setting" + d, F(j))) : (k(j), j.button.on("click" + d, G(j)), j.menu.on("click" + d, "a", J(j)), j.button.on("keydown" + d, U(j)), j.el.on("keydown" + d, X(j))), N(R, Z)
      }

      function w(R, Z) {
        var ie = e.data(Z, d);
        ie && (C(ie), e.removeData(Z, d))
      }

      function C(R) {
        R.overlay && (te(R, !0), R.overlay.remove(), R.overlay = null)
      }

      function k(R) {
        R.overlay || (R.overlay = e(g).appendTo(R.el), R.overlay.attr("id", R.overlayContainerId), R.parent = R.menu.parent(), te(R, !0))
      }

      function M(R) {
        var Z = {},
          ie = R.config || {},
          j = Z.animation = R.el.attr("data-animation") || "default";
        Z.animOver = /^over/.test(j), Z.animDirect = /left$/.test(j) ? -1 : 1, ie.animation !== j && R.open && t.defer(P, R), Z.easing = R.el.attr("data-easing") || "ease", Z.easing2 = R.el.attr("data-easing2") || "ease";
        var he = R.el.attr("data-duration");
        Z.duration = he != null ? Number(he) : 400, Z.docHeight = R.el.attr("data-doc-height"), R.config = Z
      }

      function F(R) {
        return function(Z, ie) {
          ie = ie || {};
          var j = i.width();
          M(R), ie.open === !0 && ee(R, !0), ie.open === !1 && te(R, !0), R.open && t.defer(function() {
            j !== i.width() && P(R)
          })
        }
      }

      function U(R) {
        return function(Z) {
          switch (Z.keyCode) {
            case Oe.SPACE:
            case Oe.ENTER:
              return G(R)(), Z.preventDefault(), Z.stopPropagation();
            case Oe.ESCAPE:
              return te(R), Z.preventDefault(), Z.stopPropagation();
            case Oe.ARROW_RIGHT:
            case Oe.ARROW_DOWN:
            case Oe.HOME:
            case Oe.END:
              return R.open ? (Z.keyCode === Oe.END ? R.selectedIdx = R.links.length - 1 : R.selectedIdx = 0, ne(R), Z.preventDefault(), Z.stopPropagation()) : (Z.preventDefault(), Z.stopPropagation())
          }
        }
      }

      function X(R) {
        return function(Z) {
          if (R.open) switch (R.selectedIdx = R.links.index(document.activeElement), Z.keyCode) {
            case Oe.HOME:
            case Oe.END:
              return Z.keyCode === Oe.END ? R.selectedIdx = R.links.length - 1 : R.selectedIdx = 0, ne(R), Z.preventDefault(), Z.stopPropagation();
            case Oe.ESCAPE:
              return te(R), R.button.focus(), Z.preventDefault(), Z.stopPropagation();
            case Oe.ARROW_LEFT:
            case Oe.ARROW_UP:
              return R.selectedIdx = Math.max(-1, R.selectedIdx - 1), ne(R), Z.preventDefault(), Z.stopPropagation();
            case Oe.ARROW_RIGHT:
            case Oe.ARROW_DOWN:
              return R.selectedIdx = Math.min(R.links.length - 1, R.selectedIdx + 1), ne(R), Z.preventDefault(), Z.stopPropagation()
          }
        }
      }

      function ne(R) {
        if (R.links[R.selectedIdx]) {
          var Z = R.links[R.selectedIdx];
          Z.focus(), J(Z)
        }
      }

      function P(R) {
        R.open && (te(R, !0), ee(R, !0))
      }

      function G(R) {
        return o(function() {
          R.open ? te(R) : ee(R)
        })
      }

      function J(R) {
        return function(Z) {
          var ie = e(this),
            j = ie.attr("href");
          if (!xt.validClick(Z.currentTarget)) {
            Z.preventDefault();
            return
          }
          j && j.indexOf("#") === 0 && R.open && te(R)
        }
      }

      function D(R) {
        return R.outside && a.off("click" + d, R.outside),
          function(Z) {
            var ie = e(Z.target);
            u && ie.closest(".w-editor-bem-EditorOverlay").length || Q(R, ie)
          }
      }
      var Q = o(function(R, Z) {
        if (R.open) {
          var ie = Z.closest(".w-nav-menu");
          R.menu.is(ie) || te(R)
        }
      });

      function N(R, Z) {
        var ie = e.data(Z, d),
          j = ie.collapsed = ie.button.css("display") !== "none";
        if (ie.open && !j && !f && te(ie, !0), ie.container.length) {
          var he = q(ie);
          ie.links.each(he), ie.dropdowns.each(he)
        }
        ie.open && ae(ie)
      }
      var T = "max-width";

      function q(R) {
        var Z = R.container.css(T);
        return Z === "none" && (Z = ""),
          function(ie, j) {
            j = e(j), j.css(T, ""), j.css(T) === "none" && j.css(T, Z)
          }
      }

      function H(R, Z) {
        Z.setAttribute("data-nav-menu-open", "")
      }

      function B(R, Z) {
        Z.removeAttribute("data-nav-menu-open")
      }

      function ee(R, Z) {
        if (R.open) return;
        R.open = !0, R.menu.each(H), R.links.addClass(v), R.dropdowns.addClass(m), R.dropdownToggle.addClass(c), R.dropdownList.addClass(y), R.button.addClass(h);
        var ie = R.config,
          j = ie.animation;
        (j === "none" || !n.support.transform || ie.duration <= 0) && (Z = !0);
        var he = ae(R),
          be = R.menu.outerHeight(!0),
          _e = R.menu.outerWidth(!0),
          O = R.el.height(),
          V = R.el[0];
        if (N(0, V), E.intro(0, V), xt.redraw.up(), f || a.on("click" + d, R.outside), Z) {
          K();
          return
        }
        var z = "transform " + ie.duration + "ms " + ie.easing;
        if (R.overlay && (b = R.menu.prev(), R.overlay.show().append(R.menu)), ie.animOver) {
          n(R.menu).add(z).set({
            x: ie.animDirect * _e,
            height: he
          }).start({
            x: 0
          }).then(K), R.overlay && R.overlay.width(_e);
          return
        }
        var W = O + be;
        n(R.menu).add(z).set({
          y: -W
        }).start({
          y: 0
        }).then(K);

        function K() {
          R.button.attr("aria-expanded", "true")
        }
      }

      function ae(R) {
        var Z = R.config,
          ie = Z.docHeight ? a.height() : s.height();
        return Z.animOver ? R.menu.height(ie) : R.el.css("position") !== "fixed" && (ie -= R.el.outerHeight(!0)), R.overlay && R.overlay.height(ie), ie
      }

      function te(R, Z) {
        if (!R.open) return;
        R.open = !1, R.button.removeClass(h);
        var ie = R.config;
        if ((ie.animation === "none" || !n.support.transform || ie.duration <= 0) && (Z = !0), E.outro(0, R.el[0]), a.off("click" + d, R.outside), Z) {
          n(R.menu).stop(), V();
          return
        }
        var j = "transform " + ie.duration + "ms " + ie.easing2,
          he = R.menu.outerHeight(!0),
          be = R.menu.outerWidth(!0),
          _e = R.el.height();
        if (ie.animOver) {
          n(R.menu).add(j).start({
            x: be * ie.animDirect
          }).then(V);
          return
        }
        var O = _e + he;
        n(R.menu).add(j).start({
          y: -O
        }).then(V);

        function V() {
          R.menu.height(""), n(R.menu).set({
            x: 0,
            y: 0
          }), R.menu.each(B), R.links.removeClass(v), R.dropdowns.removeClass(m), R.dropdownToggle.removeClass(c), R.dropdownList.removeClass(y), R.overlay && R.overlay.children().length && (b.length ? R.menu.insertAfter(b) : R.menu.prependTo(R.parent), R.overlay.attr("style", "").hide()), R.el.triggerHandler("w-close"), R.button.attr("aria-expanded", "false")
        }
      }
      return r
    })
  });
  var de = I((LX, q0) => {
    var Ei = function(e) {
      return e && e.Math == Math && e
    };
    q0.exports = Ei(typeof globalThis == "object" && globalThis) || Ei(typeof window == "object" && window) || Ei(typeof self == "object" && self) || Ei(typeof global == "object" && global) || function() {
      return this
    }() || Function("return this")()
  });
  var Pt = I((DX, B0) => {
    B0.exports = function(e) {
      try {
        return !!e()
      } catch {
        return !0
      }
    }
  });
  var dt = I((NX, G0) => {
    var RV = Pt();
    G0.exports = !RV(function() {
      return Object.defineProperty({}, 1, {
        get: function() {
          return 7
        }
      })[1] != 7
    })
  });
  var zt = I((kX, U0) => {
    var Jr = Function.prototype.call;
    U0.exports = Jr.bind ? Jr.bind(Jr) : function() {
      return Jr.apply(Jr, arguments)
    }
  });
  var X0 = I(W0 => {
    "use strict";
    var z0 = {}.propertyIsEnumerable,
      H0 = Object.getOwnPropertyDescriptor,
      MV = H0 && !z0.call({
        1: 2
      }, 1);
    W0.f = MV ? function(t) {
      var r = H0(this, t);
      return !!r && r.enumerable
    } : z0
  });
  var Eo = I((qX, j0) => {
    j0.exports = function(e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t
      }
    }
  });
  var Ce = I((BX, K0) => {
    var Y0 = Function.prototype,
      bo = Y0.bind,
      Io = Y0.call,
      FV = bo && bo.bind(Io);
    K0.exports = bo ? function(e) {
      return e && FV(Io, e)
    } : function(e) {
      return e && function() {
        return Io.apply(e, arguments)
      }
    }
  });
  var bi = I((GX, $0) => {
    var Q0 = Ce(),
      LV = Q0({}.toString),
      DV = Q0("".slice);
    $0.exports = function(e) {
      return DV(LV(e), 8, -1)
    }
  });
  var Ii = I((UX, Z0) => {
    var NV = de(),
      kV = Ce(),
      VV = Pt(),
      qV = bi(),
      To = NV.Object,
      BV = kV("".split);
    Z0.exports = VV(function() {
      return !To("z").propertyIsEnumerable(0)
    }) ? function(e) {
      return qV(e) == "String" ? BV(e, "") : To(e)
    } : To
  });
  var _o = I((zX, J0) => {
    var GV = de(),
      UV = GV.TypeError;
    J0.exports = function(e) {
      if (e == null) throw UV("Can't call method on " + e);
      return e
    }
  });
  var en = I((HX, ev) => {
    var zV = Ii(),
      HV = _o();
    ev.exports = function(e) {
      return zV(HV(e))
    }
  });
  var Le = I((WX, tv) => {
    tv.exports = function(e) {
      return typeof e == "function"
    }
  });
  var Ht = I((XX, rv) => {
    var WV = Le();
    rv.exports = function(e) {
      return typeof e == "object" ? e !== null : WV(e)
    }
  });
  var ot = I((jX, nv) => {
    var So = de(),
      XV = Le(),
      jV = function(e) {
        return XV(e) ? e : void 0
      };
    nv.exports = function(e, t) {
      return arguments.length < 2 ? jV(So[e]) : So[e] && So[e][t]
    }
  });
  var av = I((YX, iv) => {
    var YV = Ce();
    iv.exports = YV({}.isPrototypeOf)
  });
  var ov = I((KX, sv) => {
    var KV = ot();
    sv.exports = KV("navigator", "userAgent") || ""
  });
  var dv = I((QX, pv) => {
    var hv = de(),
      Ao = ov(),
      lv = hv.process,
      cv = hv.Deno,
      uv = lv && lv.versions || cv && cv.version,
      fv = uv && uv.v8,
      $e, Ti;
    fv && ($e = fv.split("."), Ti = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
    !Ti && Ao && ($e = Ao.match(/Edge\/(\d+)/), (!$e || $e[1] >= 74) && ($e = Ao.match(/Chrome\/(\d+)/), $e && (Ti = +$e[1])));
    pv.exports = Ti
  });
  var xo = I(($X, gv) => {
    var mv = dv(),
      QV = Pt();
    gv.exports = !!Object.getOwnPropertySymbols && !QV(function() {
      var e = Symbol();
      return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && mv && mv < 41
    })
  });
  var Po = I((ZX, yv) => {
    var $V = xo();
    yv.exports = $V && !Symbol.sham && typeof Symbol.iterator == "symbol"
  });
  var Oo = I((JX, vv) => {
    var ZV = de(),
      JV = ot(),
      e6 = Le(),
      t6 = av(),
      r6 = Po(),
      n6 = ZV.Object;
    vv.exports = r6 ? function(e) {
      return typeof e == "symbol"
    } : function(e) {
      var t = JV("Symbol");
      return e6(t) && t6(t.prototype, n6(e))
    }
  });
  var Co = I((ej, Ev) => {
    var i6 = de(),
      a6 = i6.String;
    Ev.exports = function(e) {
      try {
        return a6(e)
      } catch {
        return "Object"
      }
    }
  });
  var Sr = I((tj, bv) => {
    var s6 = de(),
      o6 = Le(),
      l6 = Co(),
      c6 = s6.TypeError;
    bv.exports = function(e) {
      if (o6(e)) return e;
      throw c6(l6(e) + " is not a function")
    }
  });
  var Wt = I((rj, Iv) => {
    var u6 = Sr();
    Iv.exports = function(e, t) {
      var r = e[t];
      return r == null ? void 0 : u6(r)
    }
  });
  var _v = I((nj, Tv) => {
    var f6 = de(),
      wo = zt(),
      Ro = Le(),
      Mo = Ht(),
      h6 = f6.TypeError;
    Tv.exports = function(e, t) {
      var r, n;
      if (t === "string" && Ro(r = e.toString) && !Mo(n = wo(r, e)) || Ro(r = e.valueOf) && !Mo(n = wo(r, e)) || t !== "string" && Ro(r = e.toString) && !Mo(n = wo(r, e))) return n;
      throw h6("Can't convert object to primitive value")
    }
  });
  var Fo = I((ij, Sv) => {
    Sv.exports = !1
  });
  var _i = I((aj, xv) => {
    var Av = de(),
      p6 = Object.defineProperty;
    xv.exports = function(e, t) {
      try {
        p6(Av, e, {
          value: t,
          configurable: !0,
          writable: !0
        })
      } catch {
        Av[e] = t
      }
      return t
    }
  });
  var tn = I((sj, Ov) => {
    var d6 = de(),
      m6 = _i(),
      Pv = "__core-js_shared__",
      g6 = d6[Pv] || m6(Pv, {});
    Ov.exports = g6
  });
  var Lo = I((oj, wv) => {
    var y6 = Fo(),
      Cv = tn();
    (wv.exports = function(e, t) {
      return Cv[e] || (Cv[e] = t !== void 0 ? t : {})
    })("versions", []).push({
      version: "3.19.0",
      mode: y6 ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
    })
  });
  var mt = I((lj, Rv) => {
    var v6 = de(),
      E6 = _o(),
      b6 = v6.Object;
    Rv.exports = function(e) {
      return b6(E6(e))
    }
  });
  var gt = I((cj, Mv) => {
    var I6 = Ce(),
      T6 = mt(),
      _6 = I6({}.hasOwnProperty);
    Mv.exports = Object.hasOwn || function(t, r) {
      return _6(T6(t), r)
    }
  });
  var Do = I((uj, Fv) => {
    var S6 = Ce(),
      A6 = 0,
      x6 = Math.random(),
      P6 = S6(1 .toString);
    Fv.exports = function(e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + P6(++A6 + x6, 36)
    }
  });
  var lt = I((fj, Vv) => {
    var O6 = de(),
      C6 = Lo(),
      Lv = gt(),
      w6 = Do(),
      Dv = xo(),
      kv = Po(),
      Ar = C6("wks"),
      Xt = O6.Symbol,
      Nv = Xt && Xt.for,
      R6 = kv ? Xt : Xt && Xt.withoutSetter || w6;
    Vv.exports = function(e) {
      if (!Lv(Ar, e) || !(Dv || typeof Ar[e] == "string")) {
        var t = "Symbol." + e;
        Dv && Lv(Xt, e) ? Ar[e] = Xt[e] : kv && Nv ? Ar[e] = Nv(t) : Ar[e] = R6(t)
      }
      return Ar[e]
    }
  });
  var Uv = I((hj, Gv) => {
    var M6 = de(),
      F6 = zt(),
      qv = Ht(),
      Bv = Oo(),
      L6 = Wt(),
      D6 = _v(),
      N6 = lt(),
      k6 = M6.TypeError,
      V6 = N6("toPrimitive");
    Gv.exports = function(e, t) {
      if (!qv(e) || Bv(e)) return e;
      var r = L6(e, V6),
        n;
      if (r) {
        if (t === void 0 && (t = "default"), n = F6(r, e, t), !qv(n) || Bv(n)) return n;
        throw k6("Can't convert object to primitive value")
      }
      return t === void 0 && (t = "number"), D6(e, t)
    }
  });
  var Si = I((pj, zv) => {
    var q6 = Uv(),
      B6 = Oo();
    zv.exports = function(e) {
      var t = q6(e, "string");
      return B6(t) ? t : t + ""
    }
  });
  var ko = I((dj, Wv) => {
    var G6 = de(),
      Hv = Ht(),
      No = G6.document,
      U6 = Hv(No) && Hv(No.createElement);
    Wv.exports = function(e) {
      return U6 ? No.createElement(e) : {}
    }
  });
  var Vo = I((mj, Xv) => {
    var z6 = dt(),
      H6 = Pt(),
      W6 = ko();
    Xv.exports = !z6 && !H6(function() {
      return Object.defineProperty(W6("div"), "a", {
        get: function() {
          return 7
        }
      }).a != 7
    })
  });
  var qo = I(Yv => {
    var X6 = dt(),
      j6 = zt(),
      Y6 = X0(),
      K6 = Eo(),
      Q6 = en(),
      $6 = Si(),
      Z6 = gt(),
      J6 = Vo(),
      jv = Object.getOwnPropertyDescriptor;
    Yv.f = X6 ? jv : function(t, r) {
      if (t = Q6(t), r = $6(r), J6) try {
        return jv(t, r)
      } catch {}
      if (Z6(t, r)) return K6(!j6(Y6.f, t, r), t[r])
    }
  });
  var yt = I((yj, Qv) => {
    var Kv = de(),
      e8 = Ht(),
      t8 = Kv.String,
      r8 = Kv.TypeError;
    Qv.exports = function(e) {
      if (e8(e)) return e;
      throw r8(t8(e) + " is not an object")
    }
  });
  var jt = I(Jv => {
    var n8 = de(),
      i8 = dt(),
      a8 = Vo(),
      $v = yt(),
      s8 = Si(),
      o8 = n8.TypeError,
      Zv = Object.defineProperty;
    Jv.f = i8 ? Zv : function(t, r, n) {
      if ($v(t), r = s8(r), $v(n), a8) try {
        return Zv(t, r, n)
      } catch {}
      if ("get" in n || "set" in n) throw o8("Accessors not supported");
      return "value" in n && (t[r] = n.value), t
    }
  });
  var Ai = I((Ej, eE) => {
    var l8 = dt(),
      c8 = jt(),
      u8 = Eo();
    eE.exports = l8 ? function(e, t, r) {
      return c8.f(e, t, u8(1, r))
    } : function(e, t, r) {
      return e[t] = r, e
    }
  });
  var xi = I((bj, tE) => {
    var f8 = Ce(),
      h8 = Le(),
      Bo = tn(),
      p8 = f8(Function.toString);
    h8(Bo.inspectSource) || (Bo.inspectSource = function(e) {
      return p8(e)
    });
    tE.exports = Bo.inspectSource
  });
  var iE = I((Ij, nE) => {
    var d8 = de(),
      m8 = Le(),
      g8 = xi(),
      rE = d8.WeakMap;
    nE.exports = m8(rE) && /native code/.test(g8(rE))
  });
  var Pi = I((Tj, sE) => {
    var y8 = Lo(),
      v8 = Do(),
      aE = y8("keys");
    sE.exports = function(e) {
      return aE[e] || (aE[e] = v8(e))
    }
  });
  var Oi = I((_j, oE) => {
    oE.exports = {}
  });
  var Xo = I((Sj, hE) => {
    var E8 = iE(),
      fE = de(),
      Go = Ce(),
      b8 = Ht(),
      I8 = Ai(),
      Uo = gt(),
      zo = tn(),
      T8 = Pi(),
      _8 = Oi(),
      lE = "Object already initialized",
      Wo = fE.TypeError,
      S8 = fE.WeakMap,
      Ci, rn, wi, A8 = function(e) {
        return wi(e) ? rn(e) : Ci(e, {})
      },
      x8 = function(e) {
        return function(t) {
          var r;
          if (!b8(t) || (r = rn(t)).type !== e) throw Wo("Incompatible receiver, " + e + " required");
          return r
        }
      };
    E8 || zo.state ? (Ot = zo.state || (zo.state = new S8), cE = Go(Ot.get), Ho = Go(Ot.has), uE = Go(Ot.set), Ci = function(e, t) {
      if (Ho(Ot, e)) throw new Wo(lE);
      return t.facade = e, uE(Ot, e, t), t
    }, rn = function(e) {
      return cE(Ot, e) || {}
    }, wi = function(e) {
      return Ho(Ot, e)
    }) : (Yt = T8("state"), _8[Yt] = !0, Ci = function(e, t) {
      if (Uo(e, Yt)) throw new Wo(lE);
      return t.facade = e, I8(e, Yt, t), t
    }, rn = function(e) {
      return Uo(e, Yt) ? e[Yt] : {}
    }, wi = function(e) {
      return Uo(e, Yt)
    });
    var Ot, cE, Ho, uE, Yt;
    hE.exports = {
      set: Ci,
      get: rn,
      has: wi,
      enforce: A8,
      getterFor: x8
    }
  });
  var mE = I((Aj, dE) => {
    var jo = dt(),
      P8 = gt(),
      pE = Function.prototype,
      O8 = jo && Object.getOwnPropertyDescriptor,
      Yo = P8(pE, "name"),
      C8 = Yo && function() {}.name === "something",
      w8 = Yo && (!jo || jo && O8(pE, "name").configurable);
    dE.exports = {
      EXISTS: Yo,
      PROPER: C8,
      CONFIGURABLE: w8
    }
  });
  var Ri = I((xj, EE) => {
    var R8 = de(),
      gE = Le(),
      M8 = gt(),
      yE = Ai(),
      F8 = _i(),
      L8 = xi(),
      vE = Xo(),
      D8 = mE().CONFIGURABLE,
      N8 = vE.get,
      k8 = vE.enforce,
      V8 = String(String).split("String");
    (EE.exports = function(e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        a = n ? !!n.enumerable : !1,
        o = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        l;
      if (gE(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!M8(r, "name") || D8 && r.name !== s) && yE(r, "name", s), l = k8(r), l.source || (l.source = V8.join(typeof s == "string" ? s : ""))), e === R8) {
        a ? e[t] = r : F8(t, r);
        return
      } else i ? !o && e[t] && (a = !0) : delete e[t];
      a ? e[t] = r : yE(e, t, r)
    })(Function.prototype, "toString", function() {
      return gE(this) && N8(this).source || L8(this)
    })
  });
  var Ko = I((Pj, bE) => {
    var q8 = Math.ceil,
      B8 = Math.floor;
    bE.exports = function(e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? B8 : q8)(t)
    }
  });
  var TE = I((Oj, IE) => {
    var G8 = Ko(),
      U8 = Math.max,
      z8 = Math.min;
    IE.exports = function(e, t) {
      var r = G8(e);
      return r < 0 ? U8(r + t, 0) : z8(r, t)
    }
  });
  var SE = I((Cj, _E) => {
    var H8 = Ko(),
      W8 = Math.min;
    _E.exports = function(e) {
      return e > 0 ? W8(H8(e), 9007199254740991) : 0
    }
  });
  var Kt = I((wj, AE) => {
    var X8 = SE();
    AE.exports = function(e) {
      return X8(e.length)
    }
  });
  var OE = I((Rj, PE) => {
    var j8 = en(),
      Y8 = TE(),
      K8 = Kt(),
      xE = function(e) {
        return function(t, r, n) {
          var i = j8(t),
            a = K8(i),
            o = Y8(n, a),
            s;
          if (e && r != r) {
            for (; a > o;)
              if (s = i[o++], s != s) return !0
          } else
            for (; a > o; o++)
              if ((e || o in i) && i[o] === r) return e || o || 0;
          return !e && -1
        }
      };
    PE.exports = {
      includes: xE(!0),
      indexOf: xE(!1)
    }
  });
  var $o = I((Mj, wE) => {
    var Q8 = Ce(),
      Qo = gt(),
      $8 = en(),
      Z8 = OE().indexOf,
      J8 = Oi(),
      CE = Q8([].push);
    wE.exports = function(e, t) {
      var r = $8(e),
        n = 0,
        i = [],
        a;
      for (a in r) !Qo(J8, a) && Qo(r, a) && CE(i, a);
      for (; t.length > n;) Qo(r, a = t[n++]) && (~Z8(i, a) || CE(i, a));
      return i
    }
  });
  var Mi = I((Fj, RE) => {
    RE.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  });
  var FE = I(ME => {
    var e9 = $o(),
      t9 = Mi(),
      r9 = t9.concat("length", "prototype");
    ME.f = Object.getOwnPropertyNames || function(t) {
      return e9(t, r9)
    }
  });
  var DE = I(LE => {
    LE.f = Object.getOwnPropertySymbols
  });
  var kE = I((Nj, NE) => {
    var n9 = ot(),
      i9 = Ce(),
      a9 = FE(),
      s9 = DE(),
      o9 = yt(),
      l9 = i9([].concat);
    NE.exports = n9("Reflect", "ownKeys") || function(t) {
      var r = a9.f(o9(t)),
        n = s9.f;
      return n ? l9(r, n(t)) : r
    }
  });
  var qE = I((kj, VE) => {
    var c9 = gt(),
      u9 = kE(),
      f9 = qo(),
      h9 = jt();
    VE.exports = function(e, t) {
      for (var r = u9(t), n = h9.f, i = f9.f, a = 0; a < r.length; a++) {
        var o = r[a];
        c9(e, o) || n(e, o, i(t, o))
      }
    }
  });
  var GE = I((Vj, BE) => {
    var p9 = Pt(),
      d9 = Le(),
      m9 = /#|\.prototype\./,
      nn = function(e, t) {
        var r = y9[g9(e)];
        return r == E9 ? !0 : r == v9 ? !1 : d9(t) ? p9(t) : !!t
      },
      g9 = nn.normalize = function(e) {
        return String(e).replace(m9, ".").toLowerCase()
      },
      y9 = nn.data = {},
      v9 = nn.NATIVE = "N",
      E9 = nn.POLYFILL = "P";
    BE.exports = nn
  });
  var Qt = I((qj, UE) => {
    var Zo = de(),
      b9 = qo().f,
      I9 = Ai(),
      T9 = Ri(),
      _9 = _i(),
      S9 = qE(),
      A9 = GE();
    UE.exports = function(e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        a, o, s, l, f, u;
      if (n ? o = Zo : i ? o = Zo[r] || _9(r, {}) : o = (Zo[r] || {}).prototype, o)
        for (s in t) {
          if (f = t[s], e.noTargetGet ? (u = b9(o, s), l = u && u.value) : l = o[s], a = A9(n ? s : r + (i ? "." : "#") + s, e.forced), !a && l !== void 0) {
            if (typeof f == typeof l) continue;
            S9(f, l)
          }(e.sham || l && l.sham) && I9(f, "sham", !0), T9(o, s, f, e)
        }
    }
  });
  var Fi = I((Bj, WE) => {
    var zE = Ce(),
      x9 = Sr(),
      HE = zE(zE.bind);
    WE.exports = function(e, t) {
      return x9(e), t === void 0 ? e : HE ? HE(e, t) : function() {
        return e.apply(t, arguments)
      }
    }
  });
  var YE = I((Gj, jE) => {
    var P9 = lt(),
      O9 = P9("toStringTag"),
      XE = {};
    XE[O9] = "z";
    jE.exports = String(XE) === "[object z]"
  });
  var Jo = I((Uj, KE) => {
    var C9 = de(),
      w9 = YE(),
      R9 = Le(),
      Li = bi(),
      M9 = lt(),
      F9 = M9("toStringTag"),
      L9 = C9.Object,
      D9 = Li(function() {
        return arguments
      }()) == "Arguments",
      N9 = function(e, t) {
        try {
          return e[t]
        } catch {}
      };
    KE.exports = w9 ? Li : function(e) {
      var t, r, n;
      return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = N9(t = L9(e), F9)) == "string" ? r : D9 ? Li(t) : (n = Li(t)) == "Object" && R9(t.callee) ? "Arguments" : n
    }
  });
  var tl = I((zj, JE) => {
    var k9 = Ce(),
      V9 = Pt(),
      QE = Le(),
      q9 = Jo(),
      B9 = ot(),
      G9 = xi(),
      $E = function() {},
      U9 = [],
      ZE = B9("Reflect", "construct"),
      el = /^\s*(?:class|function)\b/,
      z9 = k9(el.exec),
      H9 = !el.exec($E),
      an = function(e) {
        if (!QE(e)) return !1;
        try {
          return ZE($E, U9, e), !0
        } catch {
          return !1
        }
      },
      W9 = function(e) {
        if (!QE(e)) return !1;
        switch (q9(e)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1
        }
        return H9 || !!z9(el, G9(e))
      };
    JE.exports = !ZE || V9(function() {
      var e;
      return an(an.call) || !an(Object) || !an(function() {
        e = !0
      }) || e
    }) ? W9 : an
  });
  var n1 = I((Hj, r1) => {
    var rl = Function.prototype,
      e1 = rl.apply,
      X9 = rl.bind,
      t1 = rl.call;
    r1.exports = typeof Reflect == "object" && Reflect.apply || (X9 ? t1.bind(e1) : function() {
      return t1.apply(e1, arguments)
    })
  });
  var a1 = I((Wj, i1) => {
    var j9 = $o(),
      Y9 = Mi();
    i1.exports = Object.keys || function(t) {
      return j9(t, Y9)
    }
  });
  var o1 = I((Xj, s1) => {
    var K9 = dt(),
      Q9 = jt(),
      $9 = yt(),
      Z9 = en(),
      J9 = a1();
    s1.exports = K9 ? Object.defineProperties : function(t, r) {
      $9(t);
      for (var n = Z9(r), i = J9(r), a = i.length, o = 0, s; a > o;) Q9.f(t, s = i[o++], n[s]);
      return t
    }
  });
  var c1 = I((jj, l1) => {
    var eq = ot();
    l1.exports = eq("document", "documentElement")
  });
  var sn = I((Yj, g1) => {
    var tq = yt(),
      rq = o1(),
      u1 = Mi(),
      nq = Oi(),
      iq = c1(),
      aq = ko(),
      sq = Pi(),
      f1 = ">",
      h1 = "<",
      il = "prototype",
      al = "script",
      d1 = sq("IE_PROTO"),
      nl = function() {},
      m1 = function(e) {
        return h1 + al + f1 + e + h1 + "/" + al + f1
      },
      p1 = function(e) {
        e.write(m1("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t
      },
      oq = function() {
        var e = aq("iframe"),
          t = "java" + al + ":",
          r;
        return e.style.display = "none", iq.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(m1("document.F=Object")), r.close(), r.F
      },
      Di, Ni = function() {
        try {
          Di = new ActiveXObject("htmlfile")
        } catch {}
        Ni = typeof document < "u" ? document.domain && Di ? p1(Di) : oq() : p1(Di);
        for (var e = u1.length; e--;) delete Ni[il][u1[e]];
        return Ni()
      };
    nq[d1] = !0;
    g1.exports = Object.create || function(t, r) {
      var n;
      return t !== null ? (nl[il] = tq(t), n = new nl, nl[il] = null, n[d1] = t) : n = Ni(), r === void 0 ? n : rq(n, r)
    }
  });
  var v1 = I((Kj, y1) => {
    var lq = Ri();
    y1.exports = function(e, t, r) {
      for (var n in t) lq(e, n, t[n], r);
      return e
    }
  });
  var b1 = I((Qj, E1) => {
    var cq = Pt();
    E1.exports = !cq(function() {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    })
  });
  var _1 = I(($j, T1) => {
    var uq = de(),
      fq = gt(),
      hq = Le(),
      pq = mt(),
      dq = Pi(),
      mq = b1(),
      I1 = dq("IE_PROTO"),
      sl = uq.Object,
      gq = sl.prototype;
    T1.exports = mq ? sl.getPrototypeOf : function(e) {
      var t = pq(e);
      if (fq(t, I1)) return t[I1];
      var r = t.constructor;
      return hq(r) && t instanceof r ? r.prototype : t instanceof sl ? gq : null
    }
  });
  var M1 = I((Zj, R1) => {
    var O1 = de(),
      C1 = tn(),
      w1 = Le(),
      yq = sn(),
      ki = _1(),
      vq = Ri(),
      Eq = lt(),
      bq = Fo(),
      S1 = "USE_FUNCTION_CONSTRUCTOR",
      A1 = Eq("asyncIterator"),
      x1 = O1.AsyncIterator,
      P1 = C1.AsyncIteratorPrototype,
      ct, ol;
    if (P1) ct = P1;
    else if (w1(x1)) ct = x1.prototype;
    else if (C1[S1] || O1[S1]) try {
      ol = ki(ki(ki(Function("return async function*(){}()")()))), ki(ol) === Object.prototype && (ct = ol)
    } catch {}
    ct ? bq && (ct = yq(ct)) : ct = {};
    w1(ct[A1]) || vq(ct, A1, function() {
      return this
    });
    R1.exports = ct
  });
  var fl = I((Jj, N1) => {
    "use strict";
    var ll = n1(),
      Vi = yt(),
      Iq = sn(),
      F1 = Wt(),
      Tq = v1(),
      L1 = Xo(),
      _q = ot(),
      Sq = M1(),
      qi = _q("Promise"),
      Aq = L1.set,
      cl = L1.get,
      ul = function(e, t, r) {
        var n = e.done;
        qi.resolve(e.value).then(function(i) {
          t({
            done: n,
            value: i
          })
        }, r)
      },
      D1 = function(t) {
        Aq(this, {
          iterator: Vi(t),
          next: t.next
        })
      };
    D1.prototype = Tq(Iq(Sq), {
      next: function(t) {
        var r = cl(this),
          n = !!arguments.length;
        return new qi(function(i, a) {
          var o = Vi(ll(r.next, r.iterator, n ? [t] : []));
          ul(o, i, a)
        })
      },
      return: function(e) {
        var t = cl(this).iterator,
          r = !!arguments.length;
        return new qi(function(n, i) {
          var a = F1(t, "return");
          if (a === void 0) return n({
            done: !0,
            value: e
          });
          var o = Vi(ll(a, t, r ? [e] : []));
          ul(o, n, i)
        })
      },
      throw: function(e) {
        var t = cl(this).iterator,
          r = !!arguments.length;
        return new qi(function(n, i) {
          var a = F1(t, "throw");
          if (a === void 0) return i(e);
          var o = Vi(ll(a, t, r ? [e] : []));
          ul(o, n, i)
        })
      }
    });
    N1.exports = D1
  });
  var V1 = I((eY, k1) => {
    k1.exports = {}
  });
  var hl = I((tY, B1) => {
    var xq = Jo(),
      q1 = Wt(),
      Pq = V1(),
      Oq = lt(),
      Cq = Oq("iterator");
    B1.exports = function(e) {
      if (e != null) return q1(e, Cq) || q1(e, "@@iterator") || Pq[xq(e)]
    }
  });
  var pl = I((rY, G1) => {
    var wq = de(),
      Rq = zt(),
      Mq = Sr(),
      Fq = yt(),
      Lq = Co(),
      Dq = hl(),
      Nq = wq.TypeError;
    G1.exports = function(e, t) {
      var r = arguments.length < 2 ? Dq(e) : t;
      if (Mq(r)) return Fq(Rq(r, e));
      throw Nq(Lq(e) + " is not iterable")
    }
  });
  var z1 = I((nY, U1) => {
    var kq = zt(),
      Vq = fl(),
      qq = yt(),
      Bq = pl(),
      Gq = Wt(),
      Uq = lt(),
      zq = Uq("asyncIterator");
    U1.exports = function(e, t) {
      var r = arguments.length < 2 ? Gq(e, zq) : t;
      return r ? qq(kq(r, e)) : new Vq(Bq(e))
    }
  });
  var W1 = I((iY, H1) => {
    var Hq = de();
    H1.exports = function(e) {
      return Hq[e].prototype
    }
  });
  var K1 = I((aY, Y1) => {
    "use strict";
    var Wq = de(),
      X1 = zt(),
      j1 = Sr(),
      dl = yt(),
      Xq = ot(),
      jq = Wt(),
      Yq = 9007199254740991,
      Kq = Wq.TypeError,
      on = function(e) {
        var t = e == 0,
          r = e == 1,
          n = e == 2,
          i = e == 3;
        return function(a, o, s) {
          dl(a);
          var l = Xq("Promise"),
            f = j1(a.next),
            u = 0,
            p = o !== void 0;
          return (p || !t) && j1(o), new l(function(g, d) {
            var h = function(y, v) {
                try {
                  var E = jq(a, "return");
                  if (E) return l.resolve(X1(E, a)).then(function() {
                    y(v)
                  }, function(b) {
                    d(b)
                  })
                } catch (b) {
                  return d(b)
                }
                y(v)
              },
              m = function(y) {
                h(d, y)
              },
              c = function() {
                try {
                  if (t && u > Yq && p) throw Kq("The allowed number of iterations has been exceeded");
                  l.resolve(dl(X1(f, a))).then(function(y) {
                    try {
                      if (dl(y).done) t ? (s.length = u, g(s)) : g(i ? !1 : n || void 0);
                      else {
                        var v = y.value;
                        p ? l.resolve(t ? o(v, u) : o(v)).then(function(E) {
                          r ? c() : n ? E ? c() : h(g, !1) : t ? (s[u++] = E, c()) : E ? h(g, i || v) : c()
                        }, m) : (s[u++] = v, c())
                      }
                    } catch (E) {
                      m(E)
                    }
                  }, m)
                } catch (y) {
                  m(y)
                }
              };
            c()
          })
        }
      };
    Y1.exports = {
      toArray: on(0),
      forEach: on(1),
      every: on(2),
      some: on(3),
      find: on(4)
    }
  });
  var $1 = I((sY, Q1) => {
    "use strict";
    var Qq = Fi(),
      $q = mt(),
      Zq = tl(),
      Jq = z1(),
      eB = pl(),
      tB = hl(),
      rB = Wt(),
      nB = W1(),
      iB = ot(),
      aB = lt(),
      sB = fl(),
      oB = K1().toArray,
      lB = aB("asyncIterator"),
      cB = nB("Array").values;
    Q1.exports = function(t) {
      var r = this,
        n = arguments.length,
        i = n > 1 ? arguments[1] : void 0,
        a = n > 2 ? arguments[2] : void 0;
      return new(iB("Promise"))(function(o) {
        var s = $q(t);
        i !== void 0 && (i = Qq(i, a));
        var l = rB(s, lB),
          f = l ? void 0 : tB(s) || cB,
          u = Zq(r) ? new r : [],
          p = l ? Jq(s, l) : new sB(eB(s, f));
        o(oB(p, i, u))
      })
    }
  });
  var Z1 = I(() => {
    var uB = Qt(),
      fB = $1();
    uB({
      target: "Array",
      stat: !0
    }, {
      fromAsync: fB
    })
  });
  var ml = I((cY, J1) => {
    var hB = bi();
    J1.exports = Array.isArray || function(t) {
      return hB(t) == "Array"
    }
  });
  var gl = I((uY, rb) => {
    var pB = de(),
      eb = ml(),
      dB = tl(),
      mB = Ht(),
      gB = lt(),
      yB = gB("species"),
      tb = pB.Array;
    rb.exports = function(e) {
      var t;
      return eb(e) && (t = e.constructor, dB(t) && (t === tb || eb(t.prototype)) ? t = void 0 : mB(t) && (t = t[yB], t === null && (t = void 0))), t === void 0 ? tb : t
    }
  });
  var yl = I((fY, nb) => {
    var vB = gl();
    nb.exports = function(e, t) {
      return new(vB(e))(t === 0 ? 0 : t)
    }
  });
  var vl = I((hY, ab) => {
    var EB = Fi(),
      bB = Ce(),
      IB = Ii(),
      TB = mt(),
      _B = Kt(),
      SB = yl(),
      ib = bB([].push),
      Ct = function(e) {
        var t = e == 1,
          r = e == 2,
          n = e == 3,
          i = e == 4,
          a = e == 6,
          o = e == 7,
          s = e == 5 || a;
        return function(l, f, u, p) {
          for (var g = TB(l), d = IB(g), h = EB(f, u), m = _B(d), c = 0, y = p || SB, v = t ? y(l, m) : r || o ? y(l, 0) : void 0, E, b; m > c; c++)
            if ((s || c in d) && (E = d[c], b = h(E, c, g), e))
              if (t) v[c] = b;
              else if (b) switch (e) {
            case 3:
              return !0;
            case 5:
              return E;
            case 6:
              return c;
            case 2:
              ib(v, E)
          } else switch (e) {
            case 4:
              return !1;
            case 7:
              ib(v, E)
          }
          return a ? -1 : n || i ? i : v
        }
      };
    ab.exports = {
      forEach: Ct(0),
      map: Ct(1),
      filter: Ct(2),
      some: Ct(3),
      every: Ct(4),
      find: Ct(5),
      findIndex: Ct(6),
      filterReject: Ct(7)
    }
  });
  var $t = I((pY, sb) => {
    var AB = lt(),
      xB = sn(),
      PB = jt(),
      El = AB("unscopables"),
      bl = Array.prototype;
    bl[El] == null && PB.f(bl, El, {
      configurable: !0,
      value: xB(null)
    });
    sb.exports = function(e) {
      bl[El][e] = !0
    }
  });
  var lb = I(() => {
    "use strict";
    var OB = Qt(),
      CB = vl().filterReject,
      wB = $t();
    OB({
      target: "Array",
      proto: !0
    }, {
      filterOut: function(t) {
        return CB(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    wB("filterOut")
  });
  var cb = I(() => {
    "use strict";
    var RB = Qt(),
      MB = vl().filterReject,
      FB = $t();
    RB({
      target: "Array",
      proto: !0
    }, {
      filterReject: function(t) {
        return MB(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    FB("filterReject")
  });
  var fb = I((vY, ub) => {
    ub.exports = function(e, t) {
      for (var r = 0, n = t.length, i = new e(n); n > r;) i[r] = t[r++];
      return i
    }
  });
  var pb = I((EY, hb) => {
    var LB = de(),
      DB = Fi(),
      NB = Ce(),
      kB = Ii(),
      VB = mt(),
      qB = Si(),
      BB = Kt(),
      GB = sn(),
      UB = fb(),
      zB = LB.Array,
      HB = NB([].push);
    hb.exports = function(e, t, r, n) {
      for (var i = VB(e), a = kB(i), o = DB(t, r), s = GB(null), l = BB(a), f = 0, u, p, g; l > f; f++) g = a[f], p = qB(o(g, f, i)), p in s ? HB(s[p], g) : s[p] = [g];
      if (n && (u = n(i), u !== zB))
        for (p in s) s[p] = UB(u, s[p]);
      return s
    }
  });
  var db = I(() => {
    "use strict";
    var WB = Qt(),
      XB = pb(),
      jB = gl(),
      YB = $t();
    WB({
      target: "Array",
      proto: !0
    }, {
      groupBy: function(t) {
        var r = arguments.length > 1 ? arguments[1] : void 0;
        return XB(this, t, r, jB)
      }
    });
    YB("groupBy")
  });
  var yb = I(() => {
    var KB = Qt(),
      QB = ml(),
      mb = Object.isFrozen,
      gb = function(e, t) {
        if (!mb || !QB(e) || !mb(e)) return !1;
        for (var r = 0, n = e.length, i; r < n;)
          if (i = e[r++], !(typeof i == "string" || t && typeof i > "u")) return !1;
        return n !== 0
      };
    KB({
      target: "Array",
      stat: !0
    }, {
      isTemplateObject: function(t) {
        if (!gb(t, !0)) return !1;
        var r = t.raw;
        return !(r.length !== t.length || !gb(r, !1))
      }
    })
  });
  var vb = I(() => {
    "use strict";
    var $B = dt(),
      ZB = $t(),
      JB = mt(),
      eG = Kt(),
      tG = jt().f;
    $B && !("lastIndex" in []) && (tG(Array.prototype, "lastIndex", {
      configurable: !0,
      get: function() {
        var t = JB(this),
          r = eG(t);
        return r == 0 ? 0 : r - 1
      }
    }), ZB("lastIndex"))
  });
  var Ib = I(() => {
    "use strict";
    var rG = dt(),
      nG = $t(),
      Eb = mt(),
      bb = Kt(),
      iG = jt().f;
    rG && !("lastItem" in []) && (iG(Array.prototype, "lastItem", {
      configurable: !0,
      get: function() {
        var t = Eb(this),
          r = bb(t);
        return r == 0 ? void 0 : t[r - 1]
      },
      set: function(t) {
        var r = Eb(this),
          n = bb(r);
        return r[n == 0 ? 0 : n - 1] = t
      }
    }), nG("lastItem"))
  });
  var Sb = I((OY, _b) => {
    "use strict";
    var aG = ot(),
      Bi = Ce(),
      sG = Sr(),
      oG = Kt(),
      lG = mt(),
      cG = yl(),
      Tb = aG("Map"),
      Il = Tb.prototype,
      uG = Bi(Il.forEach),
      fG = Bi(Il.has),
      hG = Bi(Il.set),
      pG = Bi([].push);
    _b.exports = function(t) {
      var r = lG(this),
        n = oG(r),
        i = cG(r, 0),
        a = new Tb,
        o = t != null ? sG(t) : function(u) {
          return u
        },
        s, l, f;
      for (s = 0; s < n; s++) l = r[s], f = o(l), fG(a, f) || hG(a, f, l);
      return uG(a, function(u) {
        pG(i, u)
      }), i
    }
  });
  var Ab = I(() => {
    "use strict";
    var dG = Qt(),
      mG = $t(),
      gG = Sb();
    dG({
      target: "Array",
      proto: !0
    }, {
      uniqueBy: gG
    });
    mG("uniqueBy")
  });
  var zb = I(Pl => {
    "use strict";
    Object.defineProperty(Pl, "__esModule", {
      value: !0
    });

    function yG(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    yG(Pl, {
      strFromU8: function() {
        return Ub
      },
      unzip: function() {
        return wG
      }
    });
    var xb = {},
      vG = function(e, t, r, n, i) {
        let a = new Worker(xb[t] || (xb[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
          type: "text/javascript"
        }))));
        return a.onmessage = function(o) {
          let s = o.data,
            l = s.$e$;
          if (l) {
            let f = new Error(l[0]);
            f.code = l[1], f.stack = l[2], i(f, null)
          } else i(null, s)
        }, a.postMessage(r, n), a
      },
      Ne = Uint8Array,
      Rt = Uint16Array,
      Tl = Uint32Array,
      _l = new Ne([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      Sl = new Ne([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      wb = new Ne([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      Rb = function(e, t) {
        let r = new Rt(31);
        for (var n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
        let i = new Tl(r[30]);
        for (n = 1; n < 30; ++n)
          for (let a = r[n]; a < r[n + 1]; ++a) i[a] = a - r[n] << 5 | n;
        return [r, i]
      },
      Mb = Rb(_l, 2),
      Al = Mb[0],
      EG = Mb[1];
    Al[28] = 258, EG[258] = 28;
    var bG = Rb(Sl, 0),
      Fb = bG[0],
      Hi = new Rt(32768);
    for (ye = 0; ye < 32768; ++ye) {
      let e = (43690 & ye) >>> 1 | (21845 & ye) << 1;
      e = (52428 & e) >>> 2 | (13107 & e) << 2, e = (61680 & e) >>> 4 | (3855 & e) << 4, Hi[ye] = ((65280 & e) >>> 8 | (255 & e) << 8) >>> 1
    }
    var ye, xr = function(e, t, r) {
        let n = e.length,
          i = 0,
          a = new Rt(t);
        for (; i < n; ++i) e[i] && ++a[e[i] - 1];
        let o = new Rt(t);
        for (i = 0; i < t; ++i) o[i] = o[i - 1] + a[i - 1] << 1;
        let s;
        if (r) {
          s = new Rt(1 << t);
          let l = 15 - t;
          for (i = 0; i < n; ++i)
            if (e[i]) {
              let f = i << 4 | e[i],
                u = t - e[i],
                p = o[e[i] - 1]++ << u;
              for (let g = p | (1 << u) - 1; p <= g; ++p) s[Hi[p] >>> l] = f
            }
        } else
          for (s = new Rt(n), i = 0; i < n; ++i) e[i] && (s[i] = Hi[o[e[i] - 1]++] >>> 15 - e[i]);
        return s
      },
      ln = new Ne(288);
    for (ye = 0; ye < 144; ++ye) ln[ye] = 8;
    for (ye = 144; ye < 256; ++ye) ln[ye] = 9;
    for (ye = 256; ye < 280; ++ye) ln[ye] = 7;
    for (ye = 280; ye < 288; ++ye) ln[ye] = 8;
    var Lb = new Ne(32);
    for (ye = 0; ye < 32; ++ye) Lb[ye] = 5;
    var Db = xr(ln, 9, 1),
      Nb = xr(Lb, 5, 1),
      Ui = function(e) {
        let t = e[0];
        for (let r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
        return t
      },
      He = function(e, t, r) {
        let n = t / 8 | 0;
        return (e[n] | e[n + 1] << 8) >> (7 & t) & r
      },
      zi = function(e, t) {
        let r = t / 8 | 0;
        return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
      },
      kb = function(e) {
        return (e + 7) / 8 | 0
      },
      Wi = function(e, t, r) {
        (t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length);
        let n = new(e.BYTES_PER_ELEMENT === 2 ? Rt : e.BYTES_PER_ELEMENT === 4 ? Tl : Ne)(r - t);
        return n.set(e.subarray(t, r)), n
      },
      Vb = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
      De = function(e, t, r) {
        let n = new Error(t || Vb[e]);
        if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, De), !r) throw n;
        return n
      },
      qb = function(e, t, r) {
        let n = e.length;
        if (!n || r && r.f && !r.l) return t || new Ne(0);
        let i = !t || r,
          a = !r || r.i;
        r || (r = {}), t || (t = new Ne(3 * n));
        let o = function(b) {
            let _ = t.length;
            if (b > _) {
              let A = new Ne(Math.max(2 * _, b));
              A.set(t), t = A
            }
          },
          s = r.f || 0,
          l = r.p || 0,
          f = r.b || 0,
          u = r.l,
          p = r.d,
          g = r.m,
          d = r.n,
          h = 8 * n;
        do {
          if (!u) {
            s = He(e, l, 1);
            let S = He(e, l + 1, 3);
            if (l += 3, !S) {
              let x = e[(c = kb(l) + 4) - 4] | e[c - 3] << 8,
                L = c + x;
              if (L > n) {
                a && De(0);
                break
              }
              i && o(f + x), t.set(e.subarray(c, L), f), r.b = f += x, r.p = l = 8 * L, r.f = s;
              continue
            }
            if (S === 1) u = Db, p = Nb, g = 9, d = 5;
            else if (S === 2) {
              let x = He(e, l, 31) + 257,
                L = He(e, l + 10, 15) + 4,
                w = x + He(e, l + 5, 31) + 1;
              l += 14;
              let C = new Ne(w),
                k = new Ne(19);
              for (var m = 0; m < L; ++m) k[wb[m]] = He(e, l + 3 * m, 7);
              l += 3 * L;
              let M = Ui(k),
                F = (1 << M) - 1,
                U = xr(k, M, 1);
              for (m = 0; m < w;) {
                let ne = U[He(e, l, F)];
                var c;
                if (l += 15 & ne, (c = ne >>> 4) < 16) C[m++] = c;
                else {
                  var y = 0;
                  let P = 0;
                  for (c === 16 ? (P = 3 + He(e, l, 3), l += 2, y = C[m - 1]) : c === 17 ? (P = 3 + He(e, l, 7), l += 3) : c === 18 && (P = 11 + He(e, l, 127), l += 7); P--;) C[m++] = y
                }
              }
              let X = C.subarray(0, x);
              var v = C.subarray(x);
              g = Ui(X), d = Ui(v), u = xr(X, g, 1), p = xr(v, d, 1)
            } else De(1);
            if (l > h) {
              a && De(0);
              break
            }
          }
          i && o(f + 131072);
          let b = (1 << g) - 1,
            _ = (1 << d) - 1,
            A = l;
          for (;; A = l) {
            let S = (y = u[zi(e, l) & b]) >>> 4;
            if (l += 15 & y, l > h) {
              a && De(0);
              break
            }
            if (y || De(2), S < 256) t[f++] = S;
            else {
              if (S === 256) {
                A = l, u = null;
                break
              } {
                let x = S - 254;
                if (S > 264) {
                  var E = _l[m = S - 257];
                  x = He(e, l, (1 << E) - 1) + Al[m], l += E
                }
                let L = p[zi(e, l) & _],
                  w = L >>> 4;
                if (L || De(3), l += 15 & L, v = Fb[w], w > 3 && (E = Sl[w], v += zi(e, l) & (1 << E) - 1, l += E), l > h) {
                  a && De(0);
                  break
                }
                i && o(f + 131072);
                let C = f + x;
                for (; f < C; f += 4) t[f] = t[f - v], t[f + 1] = t[f + 1 - v], t[f + 2] = t[f + 2 - v], t[f + 3] = t[f + 3 - v];
                f = C
              }
            }
          }
          r.l = u, r.p = A, r.b = f, r.f = s, u && (s = 1, r.m = g, r.d = p, r.n = d)
        } while (!s);
        return f === t.length ? t : Wi(t, 0, f)
      },
      IG = function(e, t) {
        let r = {};
        for (var n in e) r[n] = e[n];
        for (var n in t) r[n] = t[n];
        return r
      },
      Pb = function(e, t, r) {
        let n = e(),
          i = e.toString(),
          a = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(",");
        for (let o = 0; o < n.length; ++o) {
          let s = n[o],
            l = a[o];
          if (typeof s == "function") {
            t += ";" + l + "=";
            let f = s.toString();
            if (s.prototype)
              if (f.indexOf("[native code]") !== -1) {
                let u = f.indexOf(" ", 8) + 1;
                t += f.slice(u, f.indexOf("(", u))
              } else {
                t += f;
                for (let u in s.prototype) t += ";" + l + ".prototype." + u + "=" + s.prototype[u].toString()
              }
            else t += f
          } else r[l] = s
        }
        return [t, r]
      },
      Gi = [],
      TG = function(e) {
        let t = [];
        for (let r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
        return t
      },
      _G = function(e, t, r, n) {
        let i;
        if (!Gi[r]) {
          let o = "",
            s = {},
            l = e.length - 1;
          for (let f = 0; f < l; ++f) i = Pb(e[f], o, s), o = i[0], s = i[1];
          Gi[r] = Pb(e[l], o, s)
        }
        let a = IG({}, Gi[r][1]);
        return vG(Gi[r][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + t.toString() + "}", r, a, TG(a), n)
      },
      SG = function() {
        return [Ne, Rt, Tl, _l, Sl, wb, Al, Fb, Db, Nb, Hi, Vb, xr, Ui, He, zi, kb, Wi, De, qb, xl, Bb, Gb]
      },
      Bb = function(e) {
        return postMessage(e, [e.buffer])
      },
      Gb = function(e) {
        return e && e.size && new Ne(e.size)
      },
      AG = function(e, t, r, n, i, a) {
        var o = _G(r, n, i, function(s, l) {
          o.terminate(), a(s, l)
        });
        return o.postMessage([e, t], t.consume ? [e.buffer] : []),
          function() {
            o.terminate()
          }
      },
      wt = function(e, t) {
        return e[t] | e[t + 1] << 8
      },
      vt = function(e, t) {
        return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
      };

    function xG(e, t, r) {
      return r || (r = t, t = {}), typeof r != "function" && De(7), AG(e, t, [SG], function(n) {
        return Bb(xl(n.data[0], Gb(n.data[1])))
      }, 1, r)
    }

    function xl(e, t) {
      return qb(e, t)
    }
    var Ob = typeof TextDecoder < "u" && new TextDecoder,
      PG = function(e) {
        for (let t = "", r = 0;;) {
          let n = e[r++],
            i = (n > 127) + (n > 223) + (n > 239);
          if (r + i > e.length) return [t, Wi(e, r - 1)];
          i ? i === 3 ? (n = ((15 & n) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, t += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)) : t += 1 & i ? String.fromCharCode((31 & n) << 6 | 63 & e[r++]) : String.fromCharCode((15 & n) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : t += String.fromCharCode(n)
        }
      };

    function Ub(e, t) {
      if (t) {
        let r = "";
        for (let n = 0; n < e.length; n += 16384) r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
        return r
      }
      if (Ob) return Ob.decode(e);
      {
        let r = PG(e),
          n = r[0];
        return r[1].length && De(8), n
      }
    }
    var OG = function(e, t) {
        return t + 30 + wt(e, t + 26) + wt(e, t + 28)
      },
      CG = function(e, t, r) {
        let n = wt(e, t + 28),
          i = Ub(e.subarray(t + 46, t + 46 + n), !(2048 & wt(e, t + 8))),
          a = t + 46 + n,
          o = vt(e, t + 20),
          s = r && o === 4294967295 ? z64e(e, a) : [o, vt(e, t + 24), vt(e, t + 42)],
          l = s[0],
          f = s[1],
          u = s[2];
        return [wt(e, t + 10), l, f, i, a + wt(e, t + 30) + wt(e, t + 32), u]
      },
      Cb = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
        e()
      };

    function wG(e, t, r) {
      r || (r = t, t = {}), typeof r != "function" && De(7);
      let n = [],
        i = function() {
          for (let f = 0; f < n.length; ++f) n[f]()
        },
        a = {},
        o = function(f, u) {
          Cb(function() {
            r(f, u)
          })
        };
      Cb(function() {
        o = r
      });
      let s = e.length - 22;
      for (; vt(e, s) !== 101010256; --s)
        if (!s || e.length - s > 65558) return o(De(13, 0, 1), null), i;
      let l = wt(e, s + 8);
      if (l) {
        let f = l,
          u = vt(e, s + 16),
          p = u === 4294967295 || f === 65535;
        if (p) {
          let h = vt(e, s - 12);
          p = vt(e, h) === 101075792, p && (f = l = vt(e, h + 32), u = vt(e, h + 48))
        }
        let g = t && t.filter,
          d = function() {
            let h = CG(e, u, p),
              m = h[0],
              c = h[1],
              y = h[2],
              v = h[3],
              E = h[4],
              b = h[5],
              _ = OG(e, b);
            u = E;
            let A = function(S, x) {
              S ? (i(), o(S, null)) : (x && (a[v] = x), --l || o(null, a))
            };
            if (!g || g({
                name: v,
                size: c,
                originalSize: y,
                compression: m
              }))
              if (m)
                if (m === 8) {
                  let S = e.subarray(_, _ + c);
                  if (c < 32e4) try {
                    A(null, xl(S, new Ne(y)))
                  } catch (x) {
                    A(x, null)
                  } else n.push(xG(S, {
                    size: y
                  }, A))
                } else A(De(14, "unknown compression type " + m, 1), null);
            else A(null, Wi(e, _, _ + c));
            else A(null, null)
          };
        for (let h = 0; h < f; ++h) d(h)
      } else o(null, {});
      return i
    }
  });
  var Xb = I(Ol => {
    "use strict";
    Object.defineProperty(Ol, "__esModule", {
      value: !0
    });

    function RG(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    RG(Ol, {
      fetchLottie: function() {
        return VG
      },
      unZipDotLottie: function() {
        return Wb
      }
    });
    var Hb = zb();

    function MG(e) {
      let t = JSON.parse(e);
      if (!("animations" in t)) throw new Error("Manifest not found");
      if (t.animations.length === 0) throw new Error("No animations listed in the manifest");
      return t
    }

    function FG(e) {
      let t = new Uint8Array(e, 0, 32);
      return t[0] === 80 && t[1] === 75 && t[2] === 3 && t[3] === 4
    }
    async function LG(e) {
      return await fetch(new URL(e, window?.location?.href).href).then(t => t.arrayBuffer())
    }
    async function DG(e) {
      return (await new Promise(r => {
        let n = new FileReader;
        n.readAsDataURL(new Blob([e])), n.onload = () => r(n.result)
      })).split(",", 2)[1]
    }
    async function NG(e) {
      let t = new Uint8Array(e),
        r = await new Promise((n, i) => {
          (0, Hb.unzip)(t, (a, o) => a ? i(a) : n(o))
        });
      return {
        read: n => (0, Hb.strFromU8)(r[n]),
        readB64: async n => await DG(r[n])
      }
    }
    async function kG(e, t) {
      if (!("assets" in e)) return e;
      async function r(i) {
        let {
          p: a
        } = i;
        if (a == null || t.read(`images/${a}`) == null) return i;
        let o = a.split(".").pop(),
          s = await t.readB64(`images/${a}`);
        if (o?.startsWith("data:")) return i.p = o, i.e = 1, i;
        switch (o) {
          case "svg":
          case "svg+xml":
            i.p = `data:image/svg+xml;base64,${s}`;
            break;
          case "png":
          case "jpg":
          case "jpeg":
          case "gif":
          case "webp":
            i.p = `data:image/${o};base64,${s}`;
            break;
          default:
            i.p = `data:;base64,${s}`
        }
        return i.e = 1, i
      }
      return (await Promise.all(e.assets.map(r))).map((i, a) => {
        e.assets[a] = i
      }), e
    }
    async function Wb(e) {
      let t = await NG(e),
        r = MG(t.read("manifest.json"));
      return (await Promise.all(r.animations.map(i => {
        let a = JSON.parse(t.read(`animations/${i.id}.json`));
        return kG(a, t)
      })))[0]
    }
    async function VG(e) {
      let t = await LG(e);
      return FG(t) ? await Wb(t) : JSON.parse(new TextDecoder().decode(t))
    }
  });
  var $b = I(Fl => {
    "use strict";
    Object.defineProperty(Fl, "__esModule", {
      value: !0
    });

    function qG(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    qG(Fl, {
      cleanupElement: function() {
        return Ml
      },
      createInstance: function() {
        return Kb
      },
      destroy: function() {
        return HG
      },
      init: function() {
        return Qb
      },
      ready: function() {
        return WG
      }
    });
    Z1();
    lb();
    cb();
    db();
    yb();
    vb();
    Ib();
    Ab();
    var Cl = GG(es()),
      BG = Xb();

    function GG(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var UG = e => e.Webflow.require("lottie").lottie,
      zG = e => !!(e.Webflow.env("design") || e.Webflow.env("preview")),
      cn = {
        Playing: "playing",
        Stopped: "stopped"
      },
      wl = class {
        _cache = [];
        set(t, r) {
          let n = (0, Cl.default)(this._cache, ({
            wrapper: i
          }) => i === t);
          n !== -1 && this._cache.splice(n, 1), this._cache.push({
            wrapper: t,
            instance: r
          })
        }
        delete(t) {
          let r = (0, Cl.default)(this._cache, ({
            wrapper: n
          }) => n === t);
          r !== -1 && this._cache.splice(r, 1)
        }
        get(t) {
          let r = (0, Cl.default)(this._cache, ({
            wrapper: n
          }) => n === t);
          return r !== -1 ? this._cache[r].instance : null
        }
      },
      Xi = new wl,
      jb = {},
      Rl = class {
        config = null;
        currentState = cn.Stopped;
        animationItem;
        handlers = {
          enterFrame: [],
          complete: [],
          loop: [],
          dataReady: [],
          destroy: [],
          error: []
        };
        load(t) {
          let n = (t.dataset || jb).src || "";
          n.endsWith(".lottie") ? (0, BG.fetchLottie)(n).then(i => {
            this._loadAnimation(t, i)
          }) : this._loadAnimation(t, void 0), Xi.set(t, this), this.container = t
        }
        _loadAnimation(t, r) {
          let n = t.dataset || jb,
            i = n.src || "",
            a = n.preserveAspectRatio || "xMidYMid meet",
            o = n.renderer || "svg",
            s = parseFloat(n.loop) === 1,
            l = parseFloat(n.direction) || 1,
            f = parseFloat(n.autoplay) === 1,
            u = parseFloat(n.duration) || 0,
            p = parseFloat(n.isIx2Target) === 1,
            g = parseFloat(n.ix2InitialState);
          isNaN(g) && (g = null);
          let d = {
            src: i,
            loop: s,
            autoplay: f,
            renderer: o,
            direction: l,
            duration: u,
            hasIx2: p,
            ix2InitialValue: g,
            preserveAspectRatio: a
          };
          if (this.animationItem && this.config && this.config.src === i && o === this.config.renderer && a === this.config.preserveAspectRatio) {
            if (s !== this.config.loop && this.setLooping(s), p || (l !== this.config.direction && this.setDirection(l), u !== this.config.duration && (u > 0 && u !== this.duration ? this.setSpeed(this.duration / u) : this.setSpeed(1))), f && this.play(), g && g !== this.config.ix2InitialValue) {
              let c = g / 100;
              this.goToFrame(this.frames * c)
            }
            this.config = d;
            return
          }
          let h = {
              container: t,
              loop: s,
              autoplay: f,
              renderer: o,
              rendererSettings: {
                preserveAspectRatio: a,
                progressiveLoad: !0,
                hideOnTransparent: !0
              }
            },
            m = t.ownerDocument.defaultView;
          try {
            this.animationItem && this.destroy(), this.animationItem = UG(m).loadAnimation({
              ...h,
              ...r ? {
                animationData: r
              } : {
                path: i
              }
            })
          } catch (c) {
            this.handlers.error.forEach(y => y(c));
            return
          }
          this.animationItem && (zG(m) && (this.animationItem.addEventListener("enterFrame", () => {
            if (!this.isPlaying) return;
            let {
              currentFrame: c,
              totalFrames: y,
              playDirection: v
            } = this.animationItem, E = c / y * 100, b = Math.round(v === 1 ? E : 100 - E);
            this.handlers.enterFrame.forEach(_ => _(b, c))
          }), this.animationItem.addEventListener("complete", () => {
            if (this.currentState !== cn.Playing) {
              this.handlers.complete.forEach(c => c());
              return
            }
            if (!this.animationItem.loop) {
              this.handlers.complete.forEach(c => c());
              return
            }
            this.currentState = cn.Stopped
          }), this.animationItem.addEventListener("loopComplete", c => {
            this.handlers.loop.forEach(y => y(c))
          }), this.animationItem.addEventListener("data_failed", c => {
            this.handlers.error.forEach(y => y(c))
          }), this.animationItem.addEventListener("error", c => {
            this.handlers.error.forEach(y => y(c))
          })), this.isLoaded ? (this.handlers.dataReady.forEach(c => c()), f && this.play()) : this.animationItem.addEventListener("data_ready", () => {
            if (this.handlers.dataReady.forEach(c => c()), p || (this.setDirection(l), u > 0 && u !== this.duration && this.setSpeed(this.duration / u), f && this.play()), g) {
              let c = g / 100;
              this.goToFrame(this.frames * c)
            }
          }), this.config = d)
        }
        onFrameChange(t) {
          this.handlers.enterFrame.indexOf(t) === -1 && this.handlers.enterFrame.push(t)
        }
        onPlaybackComplete(t) {
          this.handlers.complete.indexOf(t) === -1 && this.handlers.complete.push(t)
        }
        onLoopComplete(t) {
          this.handlers.loop.indexOf(t) === -1 && this.handlers.loop.push(t)
        }
        onDestroy(t) {
          this.handlers.destroy.indexOf(t) === -1 && this.handlers.destroy.push(t)
        }
        onDataReady(t) {
          this.handlers.dataReady.indexOf(t) === -1 && this.handlers.dataReady.push(t)
        }
        onError(t) {
          this.handlers.error.indexOf(t) === -1 && this.handlers.error.push(t)
        }
        play() {
          if (!this.animationItem) return;
          let t = this.animationItem.playDirection === 1 ? 0 : this.frames;
          this.animationItem.goToAndPlay(t, !0), this.currentState = cn.Playing
        }
        stop() {
          if (this.animationItem) {
            if (this.isPlaying) {
              let {
                playDirection: t
              } = this.animationItem, r = t === 1 ? 0 : this.frames;
              this.animationItem.goToAndStop(r, !0)
            }
            this.currentState = cn.Stopped
          }
        }
        destroy() {
          this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(t => t()), this.container && Xi.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(t => this.handlers[t].length = 0), this.animationItem = null, this.container = null, this.config = null)
        }
        get isPlaying() {
          return this.animationItem ? !this.animationItem.isPaused : !1
        }
        get isPaused() {
          return this.animationItem ? this.animationItem.isPaused : !1
        }
        get duration() {
          return this.animationItem ? this.animationItem.getDuration() : 0
        }
        get frames() {
          return this.animationItem ? this.animationItem.totalFrames : 0
        }
        get direction() {
          return this.animationItem ? this.animationItem.playDirection : 1
        }
        get isLoaded() {
          return this.animationItem, this.animationItem.isLoaded
        }
        get ix2InitialValue() {
          return this.config ? this.config.ix2InitialValue : null
        }
        goToFrame(t) {
          this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
        }
        setSubframe(t) {
          this.animationItem && this.animationItem.setSubframe(t)
        }
        setSpeed(t = 1) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
        }
        setLooping(t) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
        }
        setDirection(t) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(t === 1 ? 0 : this.frames))
        }
      },
      Yb = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]')),
      Kb = e => {
        let t = Xi.get(e);
        return t == null && (t = new Rl), t.load(e), t
      },
      Ml = e => {
        let t = Xi.get(e);
        t && t.destroy()
      },
      Qb = () => {
        Yb().forEach(e => {
          parseFloat(e.getAttribute("data-is-ix2-target")) === 1 || Ml(e), Kb(e)
        })
      },
      HG = () => {
        Yb().forEach(Ml)
      },
      WG = Qb
  });
  var Zb = I((exports, module) => {
    typeof navigator < "u" && function(e, t) {
      typeof exports == "object" && typeof module < "u" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).lottie = t()
    }(exports, function() {
      "use strict";
      var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        _useWebWorker = !1,
        initialDefaultFrame = -999999,
        setWebWorker = function(e) {
          _useWebWorker = !!e
        },
        getWebWorker = function() {
          return _useWebWorker
        },
        setLocationHref = function(e) {
          locationHref = e
        },
        getLocationHref = function() {
          return locationHref
        };

      function createTag(e) {
        return document.createElement(e)
      }

      function extendPrototype(e, t) {
        var r, n, i = e.length;
        for (r = 0; r < i; r += 1)
          for (var a in n = e[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (t.prototype[a] = n[a])
      }

      function getDescriptor(e, t) {
        return Object.getOwnPropertyDescriptor(e, t)
      }

      function createProxyFunction(e) {
        function t() {}
        return t.prototype = e, t
      }
      var audioControllerFactory = function() {
          function e(t) {
            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
          }
          return e.prototype = {
              addAudio: function(t) {
                this.audios.push(t)
              },
              pause: function() {
                var t, r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].pause()
              },
              resume: function() {
                var t, r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].resume()
              },
              setRate: function(t) {
                var r, n = this.audios.length;
                for (r = 0; r < n; r += 1) this.audios[r].setRate(t)
              },
              createAudio: function(t) {
                return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                  src: [t]
                }) : {
                  isPlaying: !1,
                  play: function() {
                    this.isPlaying = !0
                  },
                  seek: function() {
                    this.isPlaying = !1
                  },
                  playing: function() {},
                  rate: function() {},
                  setVolume: function() {}
                }
              },
              setAudioFactory: function(t) {
                this.audioFactory = t
              },
              setVolume: function(t) {
                this._volume = t, this._updateVolume()
              },
              mute: function() {
                this._isMuted = !0, this._updateVolume()
              },
              unmute: function() {
                this._isMuted = !1, this._updateVolume()
              },
              getVolume: function() {
                return this._volume
              },
              _updateVolume: function() {
                var t, r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
              }
            },
            function() {
              return new e
            }
        }(),
        createTypedArray = function() {
          function e(t, r) {
            var n, i = 0,
              a = [];
            switch (t) {
              case "int16":
              case "uint8c":
                n = 1;
                break;
              default:
                n = 1.1
            }
            for (i = 0; i < r; i += 1) a.push(n);
            return a
          }
          return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function(t, r) {
            return t === "float32" ? new Float32Array(r) : t === "int16" ? new Int16Array(r) : t === "uint8c" ? new Uint8ClampedArray(r) : e(t, r)
          } : e
        }();

      function createSizedArray(e) {
        return Array.apply(null, {
          length: e
        })
      }

      function _typeof$6(e) {
        return _typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$6(e)
      }
      var subframeEnabled = !0,
        expressionsPlugin = null,
        expressionsInterfaces = null,
        idPrefix$1 = "",
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        _shouldRoundValues = !1,
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};

      function ProjectInterface$1() {
        return {}
      }(function() {
        var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
          r = t.length;
        for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
      })(), BMMath.random = Math.random, BMMath.abs = function(e) {
        if (_typeof$6(e) === "object" && e.length) {
          var t, r = createSizedArray(e.length),
            n = e.length;
          for (t = 0; t < n; t += 1) r[t] = Math.abs(e[t]);
          return r
        }
        return Math.abs(e)
      };
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = .5519;

      function roundValues(e) {
        _shouldRoundValues = !!e
      }

      function bmRnd(e) {
        return _shouldRoundValues ? Math.round(e) : e
      }

      function styleDiv(e) {
        e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
      }

      function BMEnterFrameEvent(e, t, r, n) {
        this.type = e, this.currentTime = t, this.totalTime = r, this.direction = n < 0 ? -1 : 1
      }

      function BMCompleteEvent(e, t) {
        this.type = e, this.direction = t < 0 ? -1 : 1
      }

      function BMCompleteLoopEvent(e, t, r, n) {
        this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = n < 0 ? -1 : 1
      }

      function BMSegmentStartEvent(e, t, r) {
        this.type = e, this.firstFrame = t, this.totalFrames = r
      }

      function BMDestroyEvent(e, t) {
        this.type = e, this.target = t
      }

      function BMRenderFrameErrorEvent(e, t) {
        this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
      }

      function BMConfigErrorEvent(e) {
        this.type = "configError", this.nativeError = e
      }

      function BMAnimationConfigErrorEvent(e, t) {
        this.type = e, this.nativeError = t
      }
      var createElementID = (_count = 0, function() {
          return idPrefix$1 + "__lottie_element_" + (_count += 1)
        }),
        _count;

      function HSVtoRGB(e, t, r) {
        var n, i, a, o, s, l, f, u;
        switch (l = r * (1 - t), f = r * (1 - (s = 6 * e - (o = Math.floor(6 * e))) * t), u = r * (1 - (1 - s) * t), o % 6) {
          case 0:
            n = r, i = u, a = l;
            break;
          case 1:
            n = f, i = r, a = l;
            break;
          case 2:
            n = l, i = r, a = u;
            break;
          case 3:
            n = l, i = f, a = r;
            break;
          case 4:
            n = u, i = l, a = r;
            break;
          case 5:
            n = r, i = l, a = f
        }
        return [n, i, a]
      }

      function RGBtoHSV(e, t, r) {
        var n, i = Math.max(e, t, r),
          a = Math.min(e, t, r),
          o = i - a,
          s = i === 0 ? 0 : o / i,
          l = i / 255;
        switch (i) {
          case a:
            n = 0;
            break;
          case e:
            n = t - r + o * (t < r ? 6 : 0), n /= 6 * o;
            break;
          case t:
            n = r - e + 2 * o, n /= 6 * o;
            break;
          case r:
            n = e - t + 4 * o, n /= 6 * o
        }
        return [n, s, l]
      }

      function addSaturationToRGB(e, t) {
        var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
        return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
      }

      function addBrightnessToRGB(e, t) {
        var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
        return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
      }

      function addHueToRGB(e, t) {
        var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
        return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
      }
      var rgbToHex = function() {
          var e, t, r = [];
          for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = t.length === 1 ? "0" + t : t;
          return function(n, i, a) {
            return n < 0 && (n = 0), i < 0 && (i = 0), a < 0 && (a = 0), "#" + r[n] + r[i] + r[a]
          }
        }(),
        setSubframeEnabled = function(e) {
          subframeEnabled = !!e
        },
        getSubframeEnabled = function() {
          return subframeEnabled
        },
        setExpressionsPlugin = function(e) {
          expressionsPlugin = e
        },
        getExpressionsPlugin = function() {
          return expressionsPlugin
        },
        setExpressionInterfaces = function(e) {
          expressionsInterfaces = e
        },
        getExpressionInterfaces = function() {
          return expressionsInterfaces
        },
        setDefaultCurveSegments = function(e) {
          defaultCurveSegments = e
        },
        getDefaultCurveSegments = function() {
          return defaultCurveSegments
        },
        setIdPrefix = function(e) {
          idPrefix$1 = e
        },
        getIdPrefix = function() {
          return idPrefix$1
        };

      function createNS(e) {
        return document.createElementNS(svgNS, e)
      }

      function _typeof$5(e) {
        return _typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$5(e)
      }
      var dataManager = function() {
          var e, t, r = 1,
            n = [],
            i = {
              onmessage: function() {},
              postMessage: function(l) {
                e({
                  data: l
                })
              }
            },
            a = {
              postMessage: function(l) {
                i.onmessage({
                  data: l
                })
              }
            };

          function o() {
            t || (t = function(l) {
              if (window.Worker && window.Blob && getWebWorker()) {
                var f = new Blob(["var _workerSelf = self; self.onmessage = ", l.toString()], {
                    type: "text/javascript"
                  }),
                  u = URL.createObjectURL(f);
                return new Worker(u)
              }
              return e = l, i
            }(function(l) {
              if (a.dataManager || (a.dataManager = function() {
                  function u(S, x) {
                    var L, w, C, k, M, F, U = S.length;
                    for (w = 0; w < U; w += 1)
                      if ("ks" in (L = S[w]) && !L.completed) {
                        if (L.completed = !0, L.hasMask) {
                          var X = L.masksProperties;
                          for (k = X.length, C = 0; C < k; C += 1)
                            if (X[C].pt.k.i) d(X[C].pt.k);
                            else
                              for (F = X[C].pt.k.length, M = 0; M < F; M += 1) X[C].pt.k[M].s && d(X[C].pt.k[M].s[0]), X[C].pt.k[M].e && d(X[C].pt.k[M].e[0])
                        }
                        L.ty === 0 ? (L.layers = p(L.refId, x), u(L.layers, x)) : L.ty === 4 ? g(L.shapes) : L.ty === 5 && _(L)
                      }
                  }

                  function p(S, x) {
                    var L = function(w, C) {
                      for (var k = 0, M = C.length; k < M;) {
                        if (C[k].id === w) return C[k];
                        k += 1
                      }
                      return null
                    }(S, x);
                    return L ? L.layers.__used ? JSON.parse(JSON.stringify(L.layers)) : (L.layers.__used = !0, L.layers) : null
                  }

                  function g(S) {
                    var x, L, w;
                    for (x = S.length - 1; x >= 0; x -= 1)
                      if (S[x].ty === "sh")
                        if (S[x].ks.k.i) d(S[x].ks.k);
                        else
                          for (w = S[x].ks.k.length, L = 0; L < w; L += 1) S[x].ks.k[L].s && d(S[x].ks.k[L].s[0]), S[x].ks.k[L].e && d(S[x].ks.k[L].e[0]);
                    else S[x].ty === "gr" && g(S[x].it)
                  }

                  function d(S) {
                    var x, L = S.i.length;
                    for (x = 0; x < L; x += 1) S.i[x][0] += S.v[x][0], S.i[x][1] += S.v[x][1], S.o[x][0] += S.v[x][0], S.o[x][1] += S.v[x][1]
                  }

                  function h(S, x) {
                    var L = x ? x.split(".") : [100, 100, 100];
                    return S[0] > L[0] || !(L[0] > S[0]) && (S[1] > L[1] || !(L[1] > S[1]) && (S[2] > L[2] || !(L[2] > S[2]) && null))
                  }
                  var m, c = function() {
                      var S = [4, 4, 14];

                      function x(L) {
                        var w, C, k, M = L.length;
                        for (w = 0; w < M; w += 1) L[w].ty === 5 && (k = void 0, k = (C = L[w]).t.d, C.t.d = {
                          k: [{
                            s: k,
                            t: 0
                          }]
                        })
                      }
                      return function(L) {
                        if (h(S, L.v) && (x(L.layers), L.assets)) {
                          var w, C = L.assets.length;
                          for (w = 0; w < C; w += 1) L.assets[w].layers && x(L.assets[w].layers)
                        }
                      }
                    }(),
                    y = (m = [4, 7, 99], function(S) {
                      if (S.chars && !h(m, S.v)) {
                        var x, L = S.chars.length;
                        for (x = 0; x < L; x += 1) {
                          var w = S.chars[x];
                          w.data && w.data.shapes && (g(w.data.shapes), w.data.ip = 0, w.data.op = 99999, w.data.st = 0, w.data.sr = 1, w.data.ks = {
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            }
                          }, S.chars[x].t || (w.data.shapes.push({
                            ty: "no"
                          }), w.data.shapes[0].it.push({
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            },
                            sk: {
                              k: 0,
                              a: 0
                            },
                            sa: {
                              k: 0,
                              a: 0
                            },
                            ty: "tr"
                          })))
                        }
                      }
                    }),
                    v = function() {
                      var S = [5, 7, 15];

                      function x(L) {
                        var w, C, k = L.length;
                        for (w = 0; w < k; w += 1) L[w].ty === 5 && (C = void 0, typeof(C = L[w].t.p).a == "number" && (C.a = {
                          a: 0,
                          k: C.a
                        }), typeof C.p == "number" && (C.p = {
                          a: 0,
                          k: C.p
                        }), typeof C.r == "number" && (C.r = {
                          a: 0,
                          k: C.r
                        }))
                      }
                      return function(L) {
                        if (h(S, L.v) && (x(L.layers), L.assets)) {
                          var w, C = L.assets.length;
                          for (w = 0; w < C; w += 1) L.assets[w].layers && x(L.assets[w].layers)
                        }
                      }
                    }(),
                    E = function() {
                      var S = [4, 1, 9];

                      function x(w) {
                        var C, k, M, F = w.length;
                        for (C = 0; C < F; C += 1)
                          if (w[C].ty === "gr") x(w[C].it);
                          else if (w[C].ty === "fl" || w[C].ty === "st")
                          if (w[C].c.k && w[C].c.k[0].i)
                            for (M = w[C].c.k.length, k = 0; k < M; k += 1) w[C].c.k[k].s && (w[C].c.k[k].s[0] /= 255, w[C].c.k[k].s[1] /= 255, w[C].c.k[k].s[2] /= 255, w[C].c.k[k].s[3] /= 255), w[C].c.k[k].e && (w[C].c.k[k].e[0] /= 255, w[C].c.k[k].e[1] /= 255, w[C].c.k[k].e[2] /= 255, w[C].c.k[k].e[3] /= 255);
                          else w[C].c.k[0] /= 255, w[C].c.k[1] /= 255, w[C].c.k[2] /= 255, w[C].c.k[3] /= 255
                      }

                      function L(w) {
                        var C, k = w.length;
                        for (C = 0; C < k; C += 1) w[C].ty === 4 && x(w[C].shapes)
                      }
                      return function(w) {
                        if (h(S, w.v) && (L(w.layers), w.assets)) {
                          var C, k = w.assets.length;
                          for (C = 0; C < k; C += 1) w.assets[C].layers && L(w.assets[C].layers)
                        }
                      }
                    }(),
                    b = function() {
                      var S = [4, 4, 18];

                      function x(w) {
                        var C, k, M;
                        for (C = w.length - 1; C >= 0; C -= 1)
                          if (w[C].ty === "sh")
                            if (w[C].ks.k.i) w[C].ks.k.c = w[C].closed;
                            else
                              for (M = w[C].ks.k.length, k = 0; k < M; k += 1) w[C].ks.k[k].s && (w[C].ks.k[k].s[0].c = w[C].closed), w[C].ks.k[k].e && (w[C].ks.k[k].e[0].c = w[C].closed);
                        else w[C].ty === "gr" && x(w[C].it)
                      }

                      function L(w) {
                        var C, k, M, F, U, X, ne = w.length;
                        for (k = 0; k < ne; k += 1) {
                          if ((C = w[k]).hasMask) {
                            var P = C.masksProperties;
                            for (F = P.length, M = 0; M < F; M += 1)
                              if (P[M].pt.k.i) P[M].pt.k.c = P[M].cl;
                              else
                                for (X = P[M].pt.k.length, U = 0; U < X; U += 1) P[M].pt.k[U].s && (P[M].pt.k[U].s[0].c = P[M].cl), P[M].pt.k[U].e && (P[M].pt.k[U].e[0].c = P[M].cl)
                          }
                          C.ty === 4 && x(C.shapes)
                        }
                      }
                      return function(w) {
                        if (h(S, w.v) && (L(w.layers), w.assets)) {
                          var C, k = w.assets.length;
                          for (C = 0; C < k; C += 1) w.assets[C].layers && L(w.assets[C].layers)
                        }
                      }
                    }();

                  function _(S) {
                    S.t.a.length === 0 && S.t.p
                  }
                  var A = {
                    completeData: function(S) {
                      S.__complete || (E(S), c(S), y(S), v(S), b(S), u(S.layers, S.assets), function(x, L) {
                        if (x) {
                          var w = 0,
                            C = x.length;
                          for (w = 0; w < C; w += 1) x[w].t === 1 && (x[w].data.layers = p(x[w].data.refId, L), u(x[w].data.layers, L))
                        }
                      }(S.chars, S.assets), S.__complete = !0)
                    }
                  };
                  return A.checkColors = E, A.checkChars = y, A.checkPathProperties = v, A.checkShapes = b, A.completeLayers = u, A
                }()), a.assetLoader || (a.assetLoader = function() {
                  function u(p) {
                    var g = p.getResponseHeader("content-type");
                    return g && p.responseType === "json" && g.indexOf("json") !== -1 || p.response && _typeof$5(p.response) === "object" ? p.response : p.response && typeof p.response == "string" ? JSON.parse(p.response) : p.responseText ? JSON.parse(p.responseText) : null
                  }
                  return {
                    load: function(p, g, d, h) {
                      var m, c = new XMLHttpRequest;
                      try {
                        c.responseType = "json"
                      } catch {}
                      c.onreadystatechange = function() {
                        if (c.readyState === 4)
                          if (c.status === 200) m = u(c), d(m);
                          else try {
                            m = u(c), d(m)
                          } catch (y) {
                            h && h(y)
                          }
                      };
                      try {
                        c.open(["G", "E", "T"].join(""), p, !0)
                      } catch {
                        c.open(["G", "E", "T"].join(""), g + "/" + p, !0)
                      }
                      c.send()
                    }
                  }
                }()), l.data.type === "loadAnimation") a.assetLoader.load(l.data.path, l.data.fullPath, function(u) {
                a.dataManager.completeData(u), a.postMessage({
                  id: l.data.id,
                  payload: u,
                  status: "success"
                })
              }, function() {
                a.postMessage({
                  id: l.data.id,
                  status: "error"
                })
              });
              else if (l.data.type === "complete") {
                var f = l.data.animation;
                a.dataManager.completeData(f), a.postMessage({
                  id: l.data.id,
                  payload: f,
                  status: "success"
                })
              } else l.data.type === "loadData" && a.assetLoader.load(l.data.path, l.data.fullPath, function(u) {
                a.postMessage({
                  id: l.data.id,
                  payload: u,
                  status: "success"
                })
              }, function() {
                a.postMessage({
                  id: l.data.id,
                  status: "error"
                })
              })
            }), t.onmessage = function(l) {
              var f = l.data,
                u = f.id,
                p = n[u];
              n[u] = null, f.status === "success" ? p.onComplete(f.payload) : p.onError && p.onError()
            })
          }

          function s(l, f) {
            var u = "processId_" + (r += 1);
            return n[u] = {
              onComplete: l,
              onError: f
            }, u
          }
          return {
            loadAnimation: function(l, f, u) {
              o();
              var p = s(f, u);
              t.postMessage({
                type: "loadAnimation",
                path: l,
                fullPath: window.location.origin + window.location.pathname,
                id: p
              })
            },
            loadData: function(l, f, u) {
              o();
              var p = s(f, u);
              t.postMessage({
                type: "loadData",
                path: l,
                fullPath: window.location.origin + window.location.pathname,
                id: p
              })
            },
            completeAnimation: function(l, f, u) {
              o();
              var p = s(f, u);
              t.postMessage({
                type: "complete",
                animation: l,
                id: p
              })
            }
          }
        }(),
        ImagePreloader = function() {
          var e = function() {
            var s = createTag("canvas");
            s.width = 1, s.height = 1;
            var l = s.getContext("2d");
            return l.fillStyle = "rgba(0,0,0,0)", l.fillRect(0, 0, 1, 1), s
          }();

          function t() {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function r() {
            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function n(s, l, f) {
            var u = "";
            if (s.e) u = s.p;
            else if (l) {
              var p = s.p;
              p.indexOf("images/") !== -1 && (p = p.split("/")[1]), u = l + p
            } else u = f, u += s.u ? s.u : "", u += s.p;
            return u
          }

          function i(s) {
            var l = 0,
              f = setInterval(function() {
                (s.getBBox().width || l > 500) && (this._imageLoaded(), clearInterval(f)), l += 1
              }.bind(this), 50)
          }

          function a(s) {
            var l = {
                assetData: s
              },
              f = n(s, this.assetsPath, this.path);
            return dataManager.loadData(f, function(u) {
              l.img = u, this._footageLoaded()
            }.bind(this), function() {
              l.img = {}, this._footageLoaded()
            }.bind(this)), l
          }

          function o() {
            this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
          }
          return o.prototype = {
            loadAssets: function(s, l) {
              var f;
              this.imagesLoadedCb = l;
              var u = s.length;
              for (f = 0; f < u; f += 1) s[f].layers || (s[f].t && s[f].t !== "seq" ? s[f].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(s[f]))) : (this.totalImages += 1, this.images.push(this._createImageData(s[f]))))
            },
            setAssetsPath: function(s) {
              this.assetsPath = s || ""
            },
            setPath: function(s) {
              this.path = s || ""
            },
            loadedImages: function() {
              return this.totalImages === this.loadedAssets
            },
            loadedFootages: function() {
              return this.totalFootages === this.loadedFootagesCount
            },
            destroy: function() {
              this.imagesLoadedCb = null, this.images.length = 0
            },
            getAsset: function(s) {
              for (var l = 0, f = this.images.length; l < f;) {
                if (this.images[l].assetData === s) return this.images[l].img;
                l += 1
              }
              return null
            },
            createImgData: function(s) {
              var l = n(s, this.assetsPath, this.path),
                f = createTag("img");
              f.crossOrigin = "anonymous", f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", function() {
                u.img = e, this._imageLoaded()
              }.bind(this), !1), f.src = l;
              var u = {
                img: f,
                assetData: s
              };
              return u
            },
            createImageData: function(s) {
              var l = n(s, this.assetsPath, this.path),
                f = createNS("image");
              isSafari ? this.testImageLoaded(f) : f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", function() {
                u.img = e, this._imageLoaded()
              }.bind(this), !1), f.setAttributeNS("http://www.w3.org/1999/xlink", "href", l), this._elementHelper.append ? this._elementHelper.append(f) : this._elementHelper.appendChild(f);
              var u = {
                img: f,
                assetData: s
              };
              return u
            },
            imageLoaded: t,
            footageLoaded: r,
            setCacheType: function(s, l) {
              s === "svg" ? (this._elementHelper = l, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
            }
          }, o
        }();

      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function(e, t) {
          if (this._cbs[e])
            for (var r = this._cbs[e], n = 0; n < r.length; n += 1) r[n](t)
        },
        addEventListener: function(e, t) {
          return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
            function() {
              this.removeEventListener(e, t)
            }.bind(this)
        },
        removeEventListener: function(e, t) {
          if (t) {
            if (this._cbs[e]) {
              for (var r = 0, n = this._cbs[e].length; r < n;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, n -= 1), r += 1;
              this._cbs[e].length || (this._cbs[e] = null)
            }
          } else this._cbs[e] = null
        }
      };
      var markerParser = function() {
          function e(t) {
            for (var r, n = t.split(`\r
`), i = {}, a = 0, o = 0; o < n.length; o += 1)(r = n[o].split(":")).length === 2 && (i[r[0]] = r[1].trim(), a += 1);
            if (a === 0) throw new Error;
            return i
          }
          return function(t) {
            for (var r = [], n = 0; n < t.length; n += 1) {
              var i = t[n],
                a = {
                  time: i.tm,
                  duration: i.dr
                };
              try {
                a.payload = JSON.parse(t[n].cm)
              } catch {
                try {
                  a.payload = e(t[n].cm)
                } catch {
                  a.payload = {
                    name: t[n].cm
                  }
                }
              }
              r.push(a)
            }
            return r
          }
        }(),
        ProjectInterface = function() {
          function e(t) {
            this.compositions.push(t)
          }
          return function() {
            function t(r) {
              for (var n = 0, i = this.compositions.length; n < i;) {
                if (this.compositions[n].data && this.compositions[n].data.nm === r) return this.compositions[n].prepareFrame && this.compositions[n].data.xt && this.compositions[n].prepareFrame(this.currentFrame), this.compositions[n].compInterface;
                n += 1
              }
              return null
            }
            return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
          }
        }(),
        renderers = {},
        registerRenderer = function(e, t) {
          renderers[e] = t
        };

      function getRenderer(e) {
        return renderers[e]
      }

      function getRegisteredRenderer() {
        if (renderers.canvas) return "canvas";
        for (var e in renderers)
          if (renderers[e]) return e;
        return ""
      }

      function _typeof$4(e) {
        return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$4(e)
      }
      var AnimationItem = function() {
        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
      };
      extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
        (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
        var t = "svg";
        e.animType ? t = e.animType : e.renderer && (t = e.renderer);
        var r = getRenderer(t);
        this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
      }, AnimationItem.prototype.onSetupError = function() {
        this.trigger("data_failed")
      }, AnimationItem.prototype.setupAnimation = function(e) {
        dataManager.completeAnimation(e, this.configAnimation)
      }, AnimationItem.prototype.setData = function(e, t) {
        t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
        var r = {
            wrapper: e,
            animationData: t
          },
          n = e.attributes;
        r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
        var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
        i === "false" ? r.loop = !1 : i === "true" ? r.loop = !0 : i !== "" && (r.loop = parseInt(i, 10));
        var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
        r.autoplay = a !== "false", r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
      }, AnimationItem.prototype.includeLayers = function(e) {
        e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
        var t, r, n = this.animationData.layers,
          i = n.length,
          a = e.layers,
          o = a.length;
        for (r = 0; r < o; r += 1)
          for (t = 0; t < i;) {
            if (n[t].id === a[r].id) {
              n[t] = a[r];
              break
            }
            t += 1
          }
        if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
          for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
        this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
      }, AnimationItem.prototype.onSegmentComplete = function(e) {
        this.animationData = e;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.loadNextSegment()
      }, AnimationItem.prototype.loadNextSegment = function() {
        var e = this.animationData.segments;
        if (!e || e.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
        var t = e.shift();
        this.timeCompleted = t.time * this.frameRate;
        var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
          this.trigger("data_failed")
        }.bind(this))
      }, AnimationItem.prototype.loadSegments = function() {
        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
      }, AnimationItem.prototype.imagesLoaded = function() {
        this.trigger("loaded_images"), this.checkLoaded()
      }, AnimationItem.prototype.preloadImages = function() {
        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
      }, AnimationItem.prototype.configAnimation = function(e) {
        if (this.renderer) try {
          this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
        } catch (t) {
          this.triggerConfigError(t)
        }
      }, AnimationItem.prototype.waitForFontsLoaded = function() {
        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
      }, AnimationItem.prototype.checkLoaded = function() {
        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
          this.isLoaded = !0;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
            this.trigger("DOMLoaded")
          }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
        }
      }, AnimationItem.prototype.resize = function(e, t) {
        var r = typeof e == "number" ? e : void 0,
          n = typeof t == "number" ? t : void 0;
        this.renderer.updateContainerSize(r, n)
      }, AnimationItem.prototype.setSubframe = function(e) {
        this.isSubframeEnabled = !!e
      }, AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
      }, AnimationItem.prototype.renderFrame = function() {
        if (this.isLoaded !== !1 && this.renderer) try {
          this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
        } catch (e) {
          this.triggerRenderFrameError(e)
        }
      }, AnimationItem.prototype.play = function(e) {
        e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
      }, AnimationItem.prototype.pause = function(e) {
        e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
      }, AnimationItem.prototype.togglePause = function(e) {
        e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause())
      }, AnimationItem.prototype.stop = function(e) {
        e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
      }, AnimationItem.prototype.getMarkerData = function(e) {
        for (var t, r = 0; r < this.markers.length; r += 1)
          if ((t = this.markers[r]).payload && t.payload.name === e) return t;
        return null
      }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
        if (!r || this.name === r) {
          var n = Number(e);
          if (isNaN(n)) {
            var i = this.getMarkerData(e);
            i && this.goToAndStop(i.time, !0)
          } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
          this.pause()
        }
      }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
        if (!r || this.name === r) {
          var n = Number(e);
          if (isNaN(n)) {
            var i = this.getMarkerData(e);
            i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
          } else this.goToAndStop(n, t, r);
          this.play()
        }
      }, AnimationItem.prototype.advanceTime = function(e) {
        if (this.isPaused !== !0 && this.isLoaded !== !1) {
          var t = this.currentRawFrame + e * this.frameModifier,
            r = !1;
          t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
        }
      }, AnimationItem.prototype.adjustSegment = function(e, t) {
        this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
      }, AnimationItem.prototype.setSegment = function(e, t) {
        var r = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
      }, AnimationItem.prototype.playSegments = function(e, t) {
        if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
          var r, n = e.length;
          for (r = 0; r < n; r += 1) this.segments.push(e[r])
        } else this.segments.push(e);
        this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
      }, AnimationItem.prototype.resetSegments = function(e) {
        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
      }, AnimationItem.prototype.checkSegments = function(e) {
        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
      }, AnimationItem.prototype.destroy = function(e) {
        e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
      }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
        this.currentRawFrame = e, this.gotoFrame()
      }, AnimationItem.prototype.setSpeed = function(e) {
        this.playSpeed = e, this.updaFrameModifier()
      }, AnimationItem.prototype.setDirection = function(e) {
        this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
      }, AnimationItem.prototype.setLoop = function(e) {
        this.loop = e
      }, AnimationItem.prototype.setVolume = function(e, t) {
        t && this.name !== t || this.audioController.setVolume(e)
      }, AnimationItem.prototype.getVolume = function() {
        return this.audioController.getVolume()
      }, AnimationItem.prototype.mute = function(e) {
        e && this.name !== e || this.audioController.mute()
      }, AnimationItem.prototype.unmute = function(e) {
        e && this.name !== e || this.audioController.unmute()
      }, AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
      }, AnimationItem.prototype.getPath = function() {
        return this.path
      }, AnimationItem.prototype.getAssetsPath = function(e) {
        var t = "";
        if (e.e) t = e.p;
        else if (this.assetsPath) {
          var r = e.p;
          r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r
        } else t = this.path, t += e.u ? e.u : "", t += e.p;
        return t
      }, AnimationItem.prototype.getAssetData = function(e) {
        for (var t = 0, r = this.assets.length; t < r;) {
          if (e === this.assets[t].id) return this.assets[t];
          t += 1
        }
        return null
      }, AnimationItem.prototype.hide = function() {
        this.renderer.hide()
      }, AnimationItem.prototype.show = function() {
        this.renderer.show()
      }, AnimationItem.prototype.getDuration = function(e) {
        return e ? this.totalFrames : this.totalFrames / this.frameRate
      }, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
        try {
          this.renderer.getElementByPath(e).updateDocumentData(t, r)
        } catch {}
      }, AnimationItem.prototype.trigger = function(e) {
        if (this._cbs && this._cbs[e]) switch (e) {
          case "enterFrame":
            this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
            break;
          case "loopComplete":
            this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(e, new BMDestroyEvent(e, this));
            break;
          default:
            this.triggerEvent(e)
        }
        e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
      }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
        var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
        this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
      }, AnimationItem.prototype.triggerConfigError = function(e) {
        var t = new BMConfigErrorEvent(e, this.currentFrame);
        this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
      };
      var animationManager = function() {
          var e = {},
            t = [],
            r = 0,
            n = 0,
            i = 0,
            a = !0,
            o = !1;

          function s(m) {
            for (var c = 0, y = m.target; c < n;) t[c].animation === y && (t.splice(c, 1), c -= 1, n -= 1, y.isPaused || u()), c += 1
          }

          function l(m, c) {
            if (!m) return null;
            for (var y = 0; y < n;) {
              if (t[y].elem === m && t[y].elem !== null) return t[y].animation;
              y += 1
            }
            var v = new AnimationItem;
            return p(v, m), v.setData(m, c), v
          }

          function f() {
            i += 1, h()
          }

          function u() {
            i -= 1
          }

          function p(m, c) {
            m.addEventListener("destroy", s), m.addEventListener("_active", f), m.addEventListener("_idle", u), t.push({
              elem: c,
              animation: m
            }), n += 1
          }

          function g(m) {
            var c, y = m - r;
            for (c = 0; c < n; c += 1) t[c].animation.advanceTime(y);
            r = m, i && !o ? window.requestAnimationFrame(g) : a = !0
          }

          function d(m) {
            r = m, window.requestAnimationFrame(g)
          }

          function h() {
            !o && i && a && (window.requestAnimationFrame(d), a = !1)
          }
          return e.registerAnimation = l, e.loadAnimation = function(m) {
            var c = new AnimationItem;
            return p(c, null), c.setParams(m), c
          }, e.setSpeed = function(m, c) {
            var y;
            for (y = 0; y < n; y += 1) t[y].animation.setSpeed(m, c)
          }, e.setDirection = function(m, c) {
            var y;
            for (y = 0; y < n; y += 1) t[y].animation.setDirection(m, c)
          }, e.play = function(m) {
            var c;
            for (c = 0; c < n; c += 1) t[c].animation.play(m)
          }, e.pause = function(m) {
            var c;
            for (c = 0; c < n; c += 1) t[c].animation.pause(m)
          }, e.stop = function(m) {
            var c;
            for (c = 0; c < n; c += 1) t[c].animation.stop(m)
          }, e.togglePause = function(m) {
            var c;
            for (c = 0; c < n; c += 1) t[c].animation.togglePause(m)
          }, e.searchAnimations = function(m, c, y) {
            var v, E = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
              b = E.length;
            for (v = 0; v < b; v += 1) y && E[v].setAttribute("data-bm-type", y), l(E[v], m);
            if (c && b === 0) {
              y || (y = "svg");
              var _ = document.getElementsByTagName("body")[0];
              _.innerText = "";
              var A = createTag("div");
              A.style.width = "100%", A.style.height = "100%", A.setAttribute("data-bm-type", y), _.appendChild(A), l(A, m)
            }
          }, e.resize = function() {
            var m;
            for (m = 0; m < n; m += 1) t[m].animation.resize()
          }, e.goToAndStop = function(m, c, y) {
            var v;
            for (v = 0; v < n; v += 1) t[v].animation.goToAndStop(m, c, y)
          }, e.destroy = function(m) {
            var c;
            for (c = n - 1; c >= 0; c -= 1) t[c].animation.destroy(m)
          }, e.freeze = function() {
            o = !0
          }, e.unfreeze = function() {
            o = !1, h()
          }, e.setVolume = function(m, c) {
            var y;
            for (y = 0; y < n; y += 1) t[y].animation.setVolume(m, c)
          }, e.mute = function(m) {
            var c;
            for (c = 0; c < n; c += 1) t[c].animation.mute(m)
          }, e.unmute = function(m) {
            var c;
            for (c = 0; c < n; c += 1) t[c].animation.unmute(m)
          }, e.getRegisteredAnimations = function() {
            var m, c = t.length,
              y = [];
            for (m = 0; m < c; m += 1) y.push(t[m].animation);
            return y
          }, e
        }(),
        BezierFactory = function() {
          var e = {
              getBezierEasing: function(u, p, g, d, h) {
                var m = h || ("bez_" + u + "_" + p + "_" + g + "_" + d).replace(/\./g, "p");
                if (t[m]) return t[m];
                var c = new f([u, p, g, d]);
                return t[m] = c, c
              }
            },
            t = {},
            r = .1,
            n = typeof Float32Array == "function";

          function i(u, p) {
            return 1 - 3 * p + 3 * u
          }

          function a(u, p) {
            return 3 * p - 6 * u
          }

          function o(u) {
            return 3 * u
          }

          function s(u, p, g) {
            return ((i(p, g) * u + a(p, g)) * u + o(p)) * u
          }

          function l(u, p, g) {
            return 3 * i(p, g) * u * u + 2 * a(p, g) * u + o(p)
          }

          function f(u) {
            this._p = u, this._mSampleValues = n ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
          }
          return f.prototype = {
            get: function(u) {
              var p = this._p[0],
                g = this._p[1],
                d = this._p[2],
                h = this._p[3];
              return this._precomputed || this._precompute(), p === g && d === h ? u : u === 0 ? 0 : u === 1 ? 1 : s(this._getTForX(u), g, h)
            },
            _precompute: function() {
              var u = this._p[0],
                p = this._p[1],
                g = this._p[2],
                d = this._p[3];
              this._precomputed = !0, u === p && g === d || this._calcSampleValues()
            },
            _calcSampleValues: function() {
              for (var u = this._p[0], p = this._p[2], g = 0; g < 11; ++g) this._mSampleValues[g] = s(g * r, u, p)
            },
            _getTForX: function(u) {
              for (var p = this._p[0], g = this._p[2], d = this._mSampleValues, h = 0, m = 1; m !== 10 && d[m] <= u; ++m) h += r;
              var c = h + (u - d[--m]) / (d[m + 1] - d[m]) * r,
                y = l(c, p, g);
              return y >= .001 ? function(v, E, b, _) {
                for (var A = 0; A < 4; ++A) {
                  var S = l(E, b, _);
                  if (S === 0) return E;
                  E -= (s(E, b, _) - v) / S
                }
                return E
              }(u, c, p, g) : y === 0 ? c : function(v, E, b, _, A) {
                var S, x, L = 0;
                do(S = s(x = E + (b - E) / 2, _, A) - v) > 0 ? b = x : E = x; while (Math.abs(S) > 1e-7 && ++L < 10);
                return x
              }(u, h, h + r, p, g)
            }
          }, e
        }(),
        pooling = {
          double: function(e) {
            return e.concat(createSizedArray(e.length))
          }
        },
        poolFactory = function(e, t, r) {
          var n = 0,
            i = e,
            a = createSizedArray(i);
          return {
            newElement: function() {
              return n ? a[n -= 1] : t()
            },
            release: function(o) {
              n === i && (a = pooling.double(a), i *= 2), r && r(o), a[n] = o, n += 1
            }
          }
        },
        bezierLengthPool = poolFactory(8, function() {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", getDefaultCurveSegments()),
            lengths: createTypedArray("float32", getDefaultCurveSegments())
          }
        }),
        segmentsLengthPool = poolFactory(8, function() {
          return {
            lengths: [],
            totalLength: 0
          }
        }, function(e) {
          var t, r = e.lengths.length;
          for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
          e.lengths.length = 0
        });

      function bezFunction() {
        var e = Math;

        function t(f, u, p, g, d, h) {
          var m = f * g + u * d + p * h - d * g - h * f - p * u;
          return m > -.001 && m < .001
        }
        var r = function(f, u, p, g) {
          var d, h, m, c, y, v, E = getDefaultCurveSegments(),
            b = 0,
            _ = [],
            A = [],
            S = bezierLengthPool.newElement();
          for (m = p.length, d = 0; d < E; d += 1) {
            for (y = d / (E - 1), v = 0, h = 0; h < m; h += 1) c = bmPow(1 - y, 3) * f[h] + 3 * bmPow(1 - y, 2) * y * p[h] + 3 * (1 - y) * bmPow(y, 2) * g[h] + bmPow(y, 3) * u[h], _[h] = c, A[h] !== null && (v += bmPow(_[h] - A[h], 2)), A[h] = _[h];
            v && (b += v = bmSqrt(v)), S.percents[d] = y, S.lengths[d] = b
          }
          return S.addedLength = b, S
        };

        function n(f) {
          this.segmentLength = 0, this.points = new Array(f)
        }

        function i(f, u) {
          this.partialLength = f, this.point = u
        }
        var a, o = (a = {}, function(f, u, p, g) {
          var d = (f[0] + "_" + f[1] + "_" + u[0] + "_" + u[1] + "_" + p[0] + "_" + p[1] + "_" + g[0] + "_" + g[1]).replace(/\./g, "p");
          if (!a[d]) {
            var h, m, c, y, v, E, b, _ = getDefaultCurveSegments(),
              A = 0,
              S = null;
            f.length === 2 && (f[0] !== u[0] || f[1] !== u[1]) && t(f[0], f[1], u[0], u[1], f[0] + p[0], f[1] + p[1]) && t(f[0], f[1], u[0], u[1], u[0] + g[0], u[1] + g[1]) && (_ = 2);
            var x = new n(_);
            for (c = p.length, h = 0; h < _; h += 1) {
              for (b = createSizedArray(c), v = h / (_ - 1), E = 0, m = 0; m < c; m += 1) y = bmPow(1 - v, 3) * f[m] + 3 * bmPow(1 - v, 2) * v * (f[m] + p[m]) + 3 * (1 - v) * bmPow(v, 2) * (u[m] + g[m]) + bmPow(v, 3) * u[m], b[m] = y, S !== null && (E += bmPow(b[m] - S[m], 2));
              A += E = bmSqrt(E), x.points[h] = new i(E, b), S = b
            }
            x.segmentLength = A, a[d] = x
          }
          return a[d]
        });

        function s(f, u) {
          var p = u.percents,
            g = u.lengths,
            d = p.length,
            h = bmFloor((d - 1) * f),
            m = f * u.addedLength,
            c = 0;
          if (h === d - 1 || h === 0 || m === g[h]) return p[h];
          for (var y = g[h] > m ? -1 : 1, v = !0; v;)
            if (g[h] <= m && g[h + 1] > m ? (c = (m - g[h]) / (g[h + 1] - g[h]), v = !1) : h += y, h < 0 || h >= d - 1) {
              if (h === d - 1) return p[h];
              v = !1
            } return p[h] + (p[h + 1] - p[h]) * c
        }
        var l = createTypedArray("float32", 8);
        return {
          getSegmentsLength: function(f) {
            var u, p = segmentsLengthPool.newElement(),
              g = f.c,
              d = f.v,
              h = f.o,
              m = f.i,
              c = f._length,
              y = p.lengths,
              v = 0;
            for (u = 0; u < c - 1; u += 1) y[u] = r(d[u], d[u + 1], h[u], m[u + 1]), v += y[u].addedLength;
            return g && c && (y[u] = r(d[u], d[0], h[u], m[0]), v += y[u].addedLength), p.totalLength = v, p
          },
          getNewSegment: function(f, u, p, g, d, h, m) {
            d < 0 ? d = 0 : d > 1 && (d = 1);
            var c, y = s(d, m),
              v = s(h = h > 1 ? 1 : h, m),
              E = f.length,
              b = 1 - y,
              _ = 1 - v,
              A = b * b * b,
              S = y * b * b * 3,
              x = y * y * b * 3,
              L = y * y * y,
              w = b * b * _,
              C = y * b * _ + b * y * _ + b * b * v,
              k = y * y * _ + b * y * v + y * b * v,
              M = y * y * v,
              F = b * _ * _,
              U = y * _ * _ + b * v * _ + b * _ * v,
              X = y * v * _ + b * v * v + y * _ * v,
              ne = y * v * v,
              P = _ * _ * _,
              G = v * _ * _ + _ * v * _ + _ * _ * v,
              J = v * v * _ + _ * v * v + v * _ * v,
              D = v * v * v;
            for (c = 0; c < E; c += 1) l[4 * c] = e.round(1e3 * (A * f[c] + S * p[c] + x * g[c] + L * u[c])) / 1e3, l[4 * c + 1] = e.round(1e3 * (w * f[c] + C * p[c] + k * g[c] + M * u[c])) / 1e3, l[4 * c + 2] = e.round(1e3 * (F * f[c] + U * p[c] + X * g[c] + ne * u[c])) / 1e3, l[4 * c + 3] = e.round(1e3 * (P * f[c] + G * p[c] + J * g[c] + D * u[c])) / 1e3;
            return l
          },
          getPointInSegment: function(f, u, p, g, d, h) {
            var m = s(d, h),
              c = 1 - m;
            return [e.round(1e3 * (c * c * c * f[0] + (m * c * c + c * m * c + c * c * m) * p[0] + (m * m * c + c * m * m + m * c * m) * g[0] + m * m * m * u[0])) / 1e3, e.round(1e3 * (c * c * c * f[1] + (m * c * c + c * m * c + c * c * m) * p[1] + (m * m * c + c * m * m + m * c * m) * g[1] + m * m * m * u[1])) / 1e3]
          },
          buildBezierData: o,
          pointOnLine2D: t,
          pointOnLine3D: function(f, u, p, g, d, h, m, c, y) {
            if (p === 0 && h === 0 && y === 0) return t(f, u, g, d, m, c);
            var v, E = e.sqrt(e.pow(g - f, 2) + e.pow(d - u, 2) + e.pow(h - p, 2)),
              b = e.sqrt(e.pow(m - f, 2) + e.pow(c - u, 2) + e.pow(y - p, 2)),
              _ = e.sqrt(e.pow(m - g, 2) + e.pow(c - d, 2) + e.pow(y - h, 2));
            return (v = E > b ? E > _ ? E - b - _ : _ - b - E : _ > b ? _ - b - E : b - E - _) > -1e-4 && v < 1e-4
          }
        }
      }
      var bez = bezFunction(),
        initFrame = initialDefaultFrame,
        mathAbs = Math.abs;

      function interpolateValue(e, t) {
        var r, n = this.offsetTime;
        this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
        for (var i, a, o, s, l, f, u, p, g, d = t.lastIndex, h = d, m = this.keyframes.length - 1, c = !0; c;) {
          if (i = this.keyframes[h], a = this.keyframes[h + 1], h === m - 1 && e >= a.t - n) {
            i.h && (i = a), d = 0;
            break
          }
          if (a.t - n > e) {
            d = h;
            break
          }
          h < m - 1 ? h += 1 : (d = 0, c = !1)
        }
        o = this.keyframesMetadata[h] || {};
        var y, v = a.t - n,
          E = i.t - n;
        if (i.to) {
          o.bezierData || (o.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
          var b = o.bezierData;
          if (e >= v || e < E) {
            var _ = e >= v ? b.points.length - 1 : 0;
            for (l = b.points[_].point.length, s = 0; s < l; s += 1) r[s] = b.points[_].point[s]
          } else {
            o.__fnct ? g = o.__fnct : (g = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, o.__fnct = g), f = g((e - E) / (v - E));
            var A, S = b.segmentLength * f,
              x = t.lastFrame < e && t._lastKeyframeIndex === h ? t._lastAddedLength : 0;
            for (p = t.lastFrame < e && t._lastKeyframeIndex === h ? t._lastPoint : 0, c = !0, u = b.points.length; c;) {
              if (x += b.points[p].partialLength, S === 0 || f === 0 || p === b.points.length - 1) {
                for (l = b.points[p].point.length, s = 0; s < l; s += 1) r[s] = b.points[p].point[s];
                break
              }
              if (S >= x && S < x + b.points[p + 1].partialLength) {
                for (A = (S - x) / b.points[p + 1].partialLength, l = b.points[p].point.length, s = 0; s < l; s += 1) r[s] = b.points[p].point[s] + (b.points[p + 1].point[s] - b.points[p].point[s]) * A;
                break
              }
              p < u - 1 ? p += 1 : c = !1
            }
            t._lastPoint = p, t._lastAddedLength = x - b.points[p].partialLength, t._lastKeyframeIndex = h
          }
        } else {
          var L, w, C, k, M;
          if (m = i.s.length, y = a.s || i.e, this.sh && i.h !== 1) e >= v ? (r[0] = y[0], r[1] = y[1], r[2] = y[2]) : e <= E ? (r[0] = i.s[0], r[1] = i.s[1], r[2] = i.s[2]) : quaternionToEuler(r, slerp(createQuaternion(i.s), createQuaternion(y), (e - E) / (v - E)));
          else
            for (h = 0; h < m; h += 1) i.h !== 1 && (e >= v ? f = 1 : e < E ? f = 0 : (i.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []), o.__fnct[h] ? g = o.__fnct[h] : (L = i.o.x[h] === void 0 ? i.o.x[0] : i.o.x[h], w = i.o.y[h] === void 0 ? i.o.y[0] : i.o.y[h], C = i.i.x[h] === void 0 ? i.i.x[0] : i.i.x[h], k = i.i.y[h] === void 0 ? i.i.y[0] : i.i.y[h], g = BezierFactory.getBezierEasing(L, w, C, k).get, o.__fnct[h] = g)) : o.__fnct ? g = o.__fnct : (L = i.o.x, w = i.o.y, C = i.i.x, k = i.i.y, g = BezierFactory.getBezierEasing(L, w, C, k).get, i.keyframeMetadata = g), f = g((e - E) / (v - E)))), y = a.s || i.e, M = i.h === 1 ? i.s[h] : i.s[h] + (y[h] - i.s[h]) * f, this.propType === "multidimensional" ? r[h] = M : r = M
        }
        return t.lastIndex = d, r
      }

      function slerp(e, t, r) {
        var n, i, a, o, s, l = [],
          f = e[0],
          u = e[1],
          p = e[2],
          g = e[3],
          d = t[0],
          h = t[1],
          m = t[2],
          c = t[3];
        return (i = f * d + u * h + p * m + g * c) < 0 && (i = -i, d = -d, h = -h, m = -m, c = -c), 1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), o = Math.sin((1 - r) * n) / a, s = Math.sin(r * n) / a) : (o = 1 - r, s = r), l[0] = o * f + s * d, l[1] = o * u + s * h, l[2] = o * p + s * m, l[3] = o * g + s * c, l
      }

      function quaternionToEuler(e, t) {
        var r = t[0],
          n = t[1],
          i = t[2],
          a = t[3],
          o = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
          s = Math.asin(2 * r * n + 2 * i * a),
          l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
        e[0] = o / degToRads, e[1] = s / degToRads, e[2] = l / degToRads
      }

      function createQuaternion(e) {
        var t = e[0] * degToRads,
          r = e[1] * degToRads,
          n = e[2] * degToRads,
          i = Math.cos(t / 2),
          a = Math.cos(r / 2),
          o = Math.cos(n / 2),
          s = Math.sin(t / 2),
          l = Math.sin(r / 2),
          f = Math.sin(n / 2);
        return [s * l * o + i * a * f, s * a * o + i * l * f, i * l * o - s * a * f, i * a * o - s * l * f]
      }

      function getValueAtCurrentTime() {
        var e = this.comp.renderedFrame - this.offsetTime,
          t = this.keyframes[0].t - this.offsetTime,
          r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
          this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
          var n = this.interpolateValue(e, this._caching);
          this.pv = n
        }
        return this._caching.lastFrame = e, this.pv
      }

      function setVValue(e) {
        var t;
        if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
        else
          for (var r = 0, n = this.v.length; r < n;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
      }

      function processEffectsSequence() {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
          if (this.lock) this.setVValue(this.pv);
          else {
            var e;
            this.lock = !0, this._mdf = this._isFirstFrame;
            var t = this.effectsSequence.length,
              r = this.kf ? this.pv : this.data.k;
            for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
          }
      }

      function addEffect(e) {
        this.effectsSequence.push(e), this.container.addDynamicProperty(this)
      }

      function ValueProperty(e, t, r, n) {
        this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
      }

      function MultiDimensionalProperty(e, t, r, n) {
        var i;
        this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
        var a = t.k.length;
        for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), i = 0; i < a; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
      }

      function KeyframedValueProperty(e, t, r, n) {
        this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: 0,
          _lastKeyframeIndex: -1
        }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
      }

      function KeyframedMultidimensionalProperty(e, t, r, n) {
        var i;
        this.propType = "multidimensional";
        var a, o, s, l, f = t.k.length;
        for (i = 0; i < f - 1; i += 1) t.k[i].to && t.k[i].s && t.k[i + 1] && t.k[i + 1].s && (a = t.k[i].s, o = t.k[i + 1].s, s = t.k[i].to, l = t.k[i].ti, (a.length === 2 && (a[0] !== o[0] || a[1] !== o[1]) && bez.pointOnLine2D(a[0], a[1], o[0], o[1], a[0] + s[0], a[1] + s[1]) && bez.pointOnLine2D(a[0], a[1], o[0], o[1], o[0] + l[0], o[1] + l[1]) || a.length === 3 && (a[0] !== o[0] || a[1] !== o[1] || a[2] !== o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], o[0], o[1], o[2], a[0] + s[0], a[1] + s[1], a[2] + s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], o[0], o[1], o[2], o[0] + l[0], o[1] + l[1], o[2] + l[2])) && (t.k[i].to = null, t.k[i].ti = null), a[0] === o[0] && a[1] === o[1] && s[0] === 0 && s[1] === 0 && l[0] === 0 && l[1] === 0 && (a.length === 2 || a[2] === o[2] && s[2] === 0 && l[2] === 0) && (t.k[i].to = null, t.k[i].ti = null));
        this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
        var u = t.k[0].s.length;
        for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), i = 0; i < u; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
        this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: createTypedArray("float32", u)
        }, this.addEffect = addEffect
      }
      var PropertyFactory = {
        getProp: function(e, t, r, n, i) {
          var a;
          if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
            if (typeof t.k[0] == "number") a = new MultiDimensionalProperty(e, t, n, i);
            else switch (r) {
              case 0:
                a = new KeyframedValueProperty(e, t, n, i);
                break;
              case 1:
                a = new KeyframedMultidimensionalProperty(e, t, n, i)
            } else a = new ValueProperty(e, t, n, i);
          return a.effectsSequence.length && i.addDynamicProperty(a), a
        }
      };

      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function(e) {
          this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
        },
        iterateDynamicProperties: function() {
          var e;
          this._mdf = !1;
          var t = this.dynamicProperties.length;
          for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
        },
        initDynamicPropertyContainer: function(e) {
          this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
        }
      };
      var pointPool = poolFactory(8, function() {
        return createTypedArray("float32", 2)
      });

      function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
      }
      ShapePath.prototype.setPathData = function(e, t) {
        this.c = e, this.setLength(t);
        for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
      }, ShapePath.prototype.setLength = function(e) {
        for (; this._maxLength < e;) this.doubleArrayLength();
        this._length = e
      }, ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
      }, ShapePath.prototype.setXYAt = function(e, t, r, n, i) {
        var a;
        switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
          case "v":
            a = this.v;
            break;
          case "i":
            a = this.i;
            break;
          case "o":
            a = this.o;
            break;
          default:
            a = []
        }(!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = e, a[n][1] = t
      }, ShapePath.prototype.setTripleAt = function(e, t, r, n, i, a, o, s) {
        this.setXYAt(e, t, "v", o, s), this.setXYAt(r, n, "o", o, s), this.setXYAt(i, a, "i", o, s)
      }, ShapePath.prototype.reverse = function() {
        var e = new ShapePath;
        e.setPathData(this.c, this._length);
        var t = this.v,
          r = this.o,
          n = this.i,
          i = 0;
        this.c && (e.setTripleAt(t[0][0], t[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
        var a, o = this._length - 1,
          s = this._length;
        for (a = i; a < s; a += 1) e.setTripleAt(t[o][0], t[o][1], n[o][0], n[o][1], r[o][0], r[o][1], a, !1), o -= 1;
        return e
      }, ShapePath.prototype.length = function() {
        return this._length
      };
      var shapePool = (factory = poolFactory(4, function() {
          return new ShapePath
        }, function(e) {
          var t, r = e._length;
          for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
          e._length = 0, e.c = !1
        }), factory.clone = function(e) {
          var t, r = factory.newElement(),
            n = e._length === void 0 ? e.v.length : e._length;
          for (r.setLength(n), r.c = e.c, t = 0; t < n; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
          return r
        }, factory),
        factory;

      function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
      }
      ShapeCollection.prototype.addShape = function(e) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
      }, ShapeCollection.prototype.releaseShapes = function() {
        var e;
        for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
        this._length = 0
      };
      var shapeCollectionPool = (ob = {
          newShapeCollection: function() {
            return _length ? pool[_length -= 1] : new ShapeCollection
          },
          release: function(e) {
            var t, r = e._length;
            for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
            e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
          }
        }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
        ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
          var e = -999999;

          function t(d, h, m) {
            var c, y, v, E, b, _, A, S, x, L = m.lastIndex,
              w = this.keyframes;
            if (d < w[0].t - this.offsetTime) c = w[0].s[0], v = !0, L = 0;
            else if (d >= w[w.length - 1].t - this.offsetTime) c = w[w.length - 1].s ? w[w.length - 1].s[0] : w[w.length - 2].e[0], v = !0;
            else {
              for (var C, k, M, F = L, U = w.length - 1, X = !0; X && (C = w[F], !((k = w[F + 1]).t - this.offsetTime > d));) F < U - 1 ? F += 1 : X = !1;
              if (M = this.keyframesMetadata[F] || {}, L = F, !(v = C.h === 1)) {
                if (d >= k.t - this.offsetTime) S = 1;
                else if (d < C.t - this.offsetTime) S = 0;
                else {
                  var ne;
                  M.__fnct ? ne = M.__fnct : (ne = BezierFactory.getBezierEasing(C.o.x, C.o.y, C.i.x, C.i.y).get, M.__fnct = ne), S = ne((d - (C.t - this.offsetTime)) / (k.t - this.offsetTime - (C.t - this.offsetTime)))
                }
                y = k.s ? k.s[0] : C.e[0]
              }
              c = C.s[0]
            }
            for (_ = h._length, A = c.i[0].length, m.lastIndex = L, E = 0; E < _; E += 1)
              for (b = 0; b < A; b += 1) x = v ? c.i[E][b] : c.i[E][b] + (y.i[E][b] - c.i[E][b]) * S, h.i[E][b] = x, x = v ? c.o[E][b] : c.o[E][b] + (y.o[E][b] - c.o[E][b]) * S, h.o[E][b] = x, x = v ? c.v[E][b] : c.v[E][b] + (y.v[E][b] - c.v[E][b]) * S, h.v[E][b] = x
          }

          function r() {
            var d = this.comp.renderedFrame - this.offsetTime,
              h = this.keyframes[0].t - this.offsetTime,
              m = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              c = this._caching.lastFrame;
            return c !== e && (c < h && d < h || c > m && d > m) || (this._caching.lastIndex = c < d ? this._caching.lastIndex : 0, this.interpolateShape(d, this.pv, this._caching)), this._caching.lastFrame = d, this.pv
          }

          function n() {
            this.paths = this.localShapeCollection
          }

          function i(d) {
            (function(h, m) {
              if (h._length !== m._length || h.c !== m.c) return !1;
              var c, y = h._length;
              for (c = 0; c < y; c += 1)
                if (h.v[c][0] !== m.v[c][0] || h.v[c][1] !== m.v[c][1] || h.o[c][0] !== m.o[c][0] || h.o[c][1] !== m.o[c][1] || h.i[c][0] !== m.i[c][0] || h.i[c][1] !== m.i[c][1]) return !1;
              return !0
            })(this.v, d) || (this.v = shapePool.clone(d), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
          }

          function a() {
            if (this.elem.globalData.frameId !== this.frameId)
              if (this.effectsSequence.length)
                if (this.lock) this.setVValue(this.pv);
                else {
                  var d, h;
                  this.lock = !0, this._mdf = !1, d = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                  var m = this.effectsSequence.length;
                  for (h = 0; h < m; h += 1) d = this.effectsSequence[h](d);
                  this.setVValue(d), this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            else this._mdf = !1
          }

          function o(d, h, m) {
            this.propType = "shape", this.comp = d.comp, this.container = d, this.elem = d, this.data = h, this.k = !1, this.kf = !1, this._mdf = !1;
            var c = m === 3 ? h.pt.k : h.ks.k;
            this.v = shapePool.clone(c), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
          }

          function s(d) {
            this.effectsSequence.push(d), this.container.addDynamicProperty(this)
          }

          function l(d, h, m) {
            this.propType = "shape", this.comp = d.comp, this.elem = d, this.container = d, this.offsetTime = d.data.st, this.keyframes = m === 3 ? h.pt.k : h.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
            var c = this.keyframes[0].s[0].i.length;
            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, c), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = n, this._caching = {
              lastFrame: e,
              lastIndex: 0
            }, this.effectsSequence = [r.bind(this)]
          }
          o.prototype.interpolateShape = t, o.prototype.getValue = a, o.prototype.setVValue = i, o.prototype.addEffect = s, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = i, l.prototype.addEffect = s;
          var f = function() {
              var d = roundCorner;

              function h(m, c) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = c.d, this.elem = m, this.comp = m.comp, this.frameId = -1, this.initDynamicPropertyContainer(m), this.p = PropertyFactory.getProp(m, c.p, 1, 0, this), this.s = PropertyFactory.getProp(m, c.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
              }
              return h.prototype = {
                reset: n,
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                },
                convertEllToPath: function() {
                  var m = this.p.v[0],
                    c = this.p.v[1],
                    y = this.s.v[0] / 2,
                    v = this.s.v[1] / 2,
                    E = this.d !== 3,
                    b = this.v;
                  b.v[0][0] = m, b.v[0][1] = c - v, b.v[1][0] = E ? m + y : m - y, b.v[1][1] = c, b.v[2][0] = m, b.v[2][1] = c + v, b.v[3][0] = E ? m - y : m + y, b.v[3][1] = c, b.i[0][0] = E ? m - y * d : m + y * d, b.i[0][1] = c - v, b.i[1][0] = E ? m + y : m - y, b.i[1][1] = c - v * d, b.i[2][0] = E ? m + y * d : m - y * d, b.i[2][1] = c + v, b.i[3][0] = E ? m - y : m + y, b.i[3][1] = c + v * d, b.o[0][0] = E ? m + y * d : m - y * d, b.o[0][1] = c - v, b.o[1][0] = E ? m + y : m - y, b.o[1][1] = c + v * d, b.o[2][0] = E ? m - y * d : m + y * d, b.o[2][1] = c + v, b.o[3][0] = E ? m - y : m + y, b.o[3][1] = c - v * d
                }
              }, extendPrototype([DynamicPropertyContainer], h), h
            }(),
            u = function() {
              function d(h, m) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = h, this.comp = h.comp, this.data = m, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(h), m.sy === 1 ? (this.ir = PropertyFactory.getProp(h, m.ir, 0, 0, this), this.is = PropertyFactory.getProp(h, m.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(h, m.pt, 0, 0, this), this.p = PropertyFactory.getProp(h, m.p, 1, 0, this), this.r = PropertyFactory.getProp(h, m.r, 0, degToRads, this), this.or = PropertyFactory.getProp(h, m.or, 0, 0, this), this.os = PropertyFactory.getProp(h, m.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
              }
              return d.prototype = {
                reset: n,
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                },
                convertStarToPath: function() {
                  var h, m, c, y, v = 2 * Math.floor(this.pt.v),
                    E = 2 * Math.PI / v,
                    b = !0,
                    _ = this.or.v,
                    A = this.ir.v,
                    S = this.os.v,
                    x = this.is.v,
                    L = 2 * Math.PI * _ / (2 * v),
                    w = 2 * Math.PI * A / (2 * v),
                    C = -Math.PI / 2;
                  C += this.r.v;
                  var k = this.data.d === 3 ? -1 : 1;
                  for (this.v._length = 0, h = 0; h < v; h += 1) {
                    c = b ? S : x, y = b ? L : w;
                    var M = (m = b ? _ : A) * Math.cos(C),
                      F = m * Math.sin(C),
                      U = M === 0 && F === 0 ? 0 : F / Math.sqrt(M * M + F * F),
                      X = M === 0 && F === 0 ? 0 : -M / Math.sqrt(M * M + F * F);
                    M += +this.p.v[0], F += +this.p.v[1], this.v.setTripleAt(M, F, M - U * y * c * k, F - X * y * c * k, M + U * y * c * k, F + X * y * c * k, h, !0), b = !b, C += E * k
                  }
                },
                convertPolygonToPath: function() {
                  var h, m = Math.floor(this.pt.v),
                    c = 2 * Math.PI / m,
                    y = this.or.v,
                    v = this.os.v,
                    E = 2 * Math.PI * y / (4 * m),
                    b = .5 * -Math.PI,
                    _ = this.data.d === 3 ? -1 : 1;
                  for (b += this.r.v, this.v._length = 0, h = 0; h < m; h += 1) {
                    var A = y * Math.cos(b),
                      S = y * Math.sin(b),
                      x = A === 0 && S === 0 ? 0 : S / Math.sqrt(A * A + S * S),
                      L = A === 0 && S === 0 ? 0 : -A / Math.sqrt(A * A + S * S);
                    A += +this.p.v[0], S += +this.p.v[1], this.v.setTripleAt(A, S, A - x * E * v * _, S - L * E * v * _, A + x * E * v * _, S + L * E * v * _, h, !0), b += c * _
                  }
                  this.paths.length = 0, this.paths[0] = this.v
                }
              }, extendPrototype([DynamicPropertyContainer], d), d
            }(),
            p = function() {
              function d(h, m) {
                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = h, this.comp = h.comp, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(h), this.p = PropertyFactory.getProp(h, m.p, 1, 0, this), this.s = PropertyFactory.getProp(h, m.s, 1, 0, this), this.r = PropertyFactory.getProp(h, m.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
              }
              return d.prototype = {
                convertRectToPath: function() {
                  var h = this.p.v[0],
                    m = this.p.v[1],
                    c = this.s.v[0] / 2,
                    y = this.s.v[1] / 2,
                    v = bmMin(c, y, this.r.v),
                    E = v * (1 - roundCorner);
                  this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + c, m - y + v, h + c, m - y + v, h + c, m - y + E, 0, !0), this.v.setTripleAt(h + c, m + y - v, h + c, m + y - E, h + c, m + y - v, 1, !0), v !== 0 ? (this.v.setTripleAt(h + c - v, m + y, h + c - v, m + y, h + c - E, m + y, 2, !0), this.v.setTripleAt(h - c + v, m + y, h - c + E, m + y, h - c + v, m + y, 3, !0), this.v.setTripleAt(h - c, m + y - v, h - c, m + y - v, h - c, m + y - E, 4, !0), this.v.setTripleAt(h - c, m - y + v, h - c, m - y + E, h - c, m - y + v, 5, !0), this.v.setTripleAt(h - c + v, m - y, h - c + v, m - y, h - c + E, m - y, 6, !0), this.v.setTripleAt(h + c - v, m - y, h + c - E, m - y, h + c - v, m - y, 7, !0)) : (this.v.setTripleAt(h - c, m + y, h - c + E, m + y, h - c, m + y, 2), this.v.setTripleAt(h - c, m - y, h - c, m - y + E, h - c, m - y, 3))) : (this.v.setTripleAt(h + c, m - y + v, h + c, m - y + E, h + c, m - y + v, 0, !0), v !== 0 ? (this.v.setTripleAt(h + c - v, m - y, h + c - v, m - y, h + c - E, m - y, 1, !0), this.v.setTripleAt(h - c + v, m - y, h - c + E, m - y, h - c + v, m - y, 2, !0), this.v.setTripleAt(h - c, m - y + v, h - c, m - y + v, h - c, m - y + E, 3, !0), this.v.setTripleAt(h - c, m + y - v, h - c, m + y - E, h - c, m + y - v, 4, !0), this.v.setTripleAt(h - c + v, m + y, h - c + v, m + y, h - c + E, m + y, 5, !0), this.v.setTripleAt(h + c - v, m + y, h + c - E, m + y, h + c - v, m + y, 6, !0), this.v.setTripleAt(h + c, m + y - v, h + c, m + y - v, h + c, m + y - E, 7, !0)) : (this.v.setTripleAt(h - c, m - y, h - c + E, m - y, h - c, m - y, 1, !0), this.v.setTripleAt(h - c, m + y, h - c, m + y - E, h - c, m + y, 2, !0), this.v.setTripleAt(h + c, m + y, h + c - E, m + y, h + c, m + y, 3, !0)))
                },
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                },
                reset: n
              }, extendPrototype([DynamicPropertyContainer], d), d
            }(),
            g = {
              getShapeProp: function(d, h, m) {
                var c;
                return m === 3 || m === 4 ? c = (m === 3 ? h.pt : h.ks).k.length ? new l(d, h, m) : new o(d, h, m) : m === 5 ? c = new p(d, h) : m === 6 ? c = new f(d, h) : m === 7 && (c = new u(d, h)), c.k && d.addDynamicProperty(c), c
              },
              getConstructorFunction: function() {
                return o
              },
              getKeyframedConstructorFunction: function() {
                return l
              }
            };
          return g
        }(),
        Matrix = function() {
          var e = Math.cos,
            t = Math.sin,
            r = Math.tan,
            n = Math.round;

          function i() {
            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
          }

          function a(P) {
            if (P === 0) return this;
            var G = e(P),
              J = t(P);
            return this._t(G, -J, 0, 0, J, G, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function o(P) {
            if (P === 0) return this;
            var G = e(P),
              J = t(P);
            return this._t(1, 0, 0, 0, 0, G, -J, 0, 0, J, G, 0, 0, 0, 0, 1)
          }

          function s(P) {
            if (P === 0) return this;
            var G = e(P),
              J = t(P);
            return this._t(G, 0, J, 0, 0, 1, 0, 0, -J, 0, G, 0, 0, 0, 0, 1)
          }

          function l(P) {
            if (P === 0) return this;
            var G = e(P),
              J = t(P);
            return this._t(G, -J, 0, 0, J, G, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function f(P, G) {
            return this._t(1, G, P, 1, 0, 0)
          }

          function u(P, G) {
            return this.shear(r(P), r(G))
          }

          function p(P, G) {
            var J = e(G),
              D = t(G);
            return this._t(J, D, 0, 0, -D, J, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(P), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(J, -D, 0, 0, D, J, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function g(P, G, J) {
            return J || J === 0 || (J = 1), P === 1 && G === 1 && J === 1 ? this : this._t(P, 0, 0, 0, 0, G, 0, 0, 0, 0, J, 0, 0, 0, 0, 1)
          }

          function d(P, G, J, D, Q, N, T, q, H, B, ee, ae, te, R, Z, ie) {
            return this.props[0] = P, this.props[1] = G, this.props[2] = J, this.props[3] = D, this.props[4] = Q, this.props[5] = N, this.props[6] = T, this.props[7] = q, this.props[8] = H, this.props[9] = B, this.props[10] = ee, this.props[11] = ae, this.props[12] = te, this.props[13] = R, this.props[14] = Z, this.props[15] = ie, this
          }

          function h(P, G, J) {
            return J = J || 0, P !== 0 || G !== 0 || J !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, P, G, J, 1) : this
          }

          function m(P, G, J, D, Q, N, T, q, H, B, ee, ae, te, R, Z, ie) {
            var j = this.props;
            if (P === 1 && G === 0 && J === 0 && D === 0 && Q === 0 && N === 1 && T === 0 && q === 0 && H === 0 && B === 0 && ee === 1 && ae === 0) return j[12] = j[12] * P + j[15] * te, j[13] = j[13] * N + j[15] * R, j[14] = j[14] * ee + j[15] * Z, j[15] *= ie, this._identityCalculated = !1, this;
            var he = j[0],
              be = j[1],
              _e = j[2],
              O = j[3],
              V = j[4],
              z = j[5],
              W = j[6],
              K = j[7],
              Y = j[8],
              se = j[9],
              le = j[10],
              oe = j[11],
              re = j[12],
              ue = j[13],
              fe = j[14],
              ve = j[15];
            return j[0] = he * P + be * Q + _e * H + O * te, j[1] = he * G + be * N + _e * B + O * R, j[2] = he * J + be * T + _e * ee + O * Z, j[3] = he * D + be * q + _e * ae + O * ie, j[4] = V * P + z * Q + W * H + K * te, j[5] = V * G + z * N + W * B + K * R, j[6] = V * J + z * T + W * ee + K * Z, j[7] = V * D + z * q + W * ae + K * ie, j[8] = Y * P + se * Q + le * H + oe * te, j[9] = Y * G + se * N + le * B + oe * R, j[10] = Y * J + se * T + le * ee + oe * Z, j[11] = Y * D + se * q + le * ae + oe * ie, j[12] = re * P + ue * Q + fe * H + ve * te, j[13] = re * G + ue * N + fe * B + ve * R, j[14] = re * J + ue * T + fe * ee + ve * Z, j[15] = re * D + ue * q + fe * ae + ve * ie, this._identityCalculated = !1, this
          }

          function c(P) {
            var G = P.props;
            return this.transform(G[0], G[1], G[2], G[3], G[4], G[5], G[6], G[7], G[8], G[9], G[10], G[11], G[12], G[13], G[14], G[15])
          }

          function y() {
            return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
          }

          function v(P) {
            for (var G = 0; G < 16;) {
              if (P.props[G] !== this.props[G]) return !1;
              G += 1
            }
            return !0
          }

          function E(P) {
            var G;
            for (G = 0; G < 16; G += 1) P.props[G] = this.props[G];
            return P
          }

          function b(P) {
            var G;
            for (G = 0; G < 16; G += 1) this.props[G] = P[G]
          }

          function _(P, G, J) {
            return {
              x: P * this.props[0] + G * this.props[4] + J * this.props[8] + this.props[12],
              y: P * this.props[1] + G * this.props[5] + J * this.props[9] + this.props[13],
              z: P * this.props[2] + G * this.props[6] + J * this.props[10] + this.props[14]
            }
          }

          function A(P, G, J) {
            return P * this.props[0] + G * this.props[4] + J * this.props[8] + this.props[12]
          }

          function S(P, G, J) {
            return P * this.props[1] + G * this.props[5] + J * this.props[9] + this.props[13]
          }

          function x(P, G, J) {
            return P * this.props[2] + G * this.props[6] + J * this.props[10] + this.props[14]
          }

          function L() {
            var P = this.props[0] * this.props[5] - this.props[1] * this.props[4],
              G = this.props[5] / P,
              J = -this.props[1] / P,
              D = -this.props[4] / P,
              Q = this.props[0] / P,
              N = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / P,
              T = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / P,
              q = new Matrix;
            return q.props[0] = G, q.props[1] = J, q.props[4] = D, q.props[5] = Q, q.props[12] = N, q.props[13] = T, q
          }

          function w(P) {
            return this.getInverseMatrix().applyToPointArray(P[0], P[1], P[2] || 0)
          }

          function C(P) {
            var G, J = P.length,
              D = [];
            for (G = 0; G < J; G += 1) D[G] = w(P[G]);
            return D
          }

          function k(P, G, J) {
            var D = createTypedArray("float32", 6);
            if (this.isIdentity()) D[0] = P[0], D[1] = P[1], D[2] = G[0], D[3] = G[1], D[4] = J[0], D[5] = J[1];
            else {
              var Q = this.props[0],
                N = this.props[1],
                T = this.props[4],
                q = this.props[5],
                H = this.props[12],
                B = this.props[13];
              D[0] = P[0] * Q + P[1] * T + H, D[1] = P[0] * N + P[1] * q + B, D[2] = G[0] * Q + G[1] * T + H, D[3] = G[0] * N + G[1] * q + B, D[4] = J[0] * Q + J[1] * T + H, D[5] = J[0] * N + J[1] * q + B
            }
            return D
          }

          function M(P, G, J) {
            return this.isIdentity() ? [P, G, J] : [P * this.props[0] + G * this.props[4] + J * this.props[8] + this.props[12], P * this.props[1] + G * this.props[5] + J * this.props[9] + this.props[13], P * this.props[2] + G * this.props[6] + J * this.props[10] + this.props[14]]
          }

          function F(P, G) {
            if (this.isIdentity()) return P + "," + G;
            var J = this.props;
            return Math.round(100 * (P * J[0] + G * J[4] + J[12])) / 100 + "," + Math.round(100 * (P * J[1] + G * J[5] + J[13])) / 100
          }

          function U() {
            for (var P = 0, G = this.props, J = "matrix3d("; P < 16;) J += n(1e4 * G[P]) / 1e4, J += P === 15 ? ")" : ",", P += 1;
            return J
          }

          function X(P) {
            return P < 1e-6 && P > 0 || P > -1e-6 && P < 0 ? n(1e4 * P) / 1e4 : P
          }

          function ne() {
            var P = this.props;
            return "matrix(" + X(P[0]) + "," + X(P[1]) + "," + X(P[4]) + "," + X(P[5]) + "," + X(P[12]) + "," + X(P[13]) + ")"
          }
          return function() {
            this.reset = i, this.rotate = a, this.rotateX = o, this.rotateY = s, this.rotateZ = l, this.skew = u, this.skewFromAxis = p, this.shear = f, this.scale = g, this.setTransform = d, this.translate = h, this.transform = m, this.multiply = c, this.applyToPoint = _, this.applyToX = A, this.applyToY = S, this.applyToZ = x, this.applyToPointArray = M, this.applyToTriplePoints = k, this.applyToPointStringified = F, this.toCSS = U, this.to2dCSS = ne, this.clone = E, this.cloneFromProps = b, this.equals = v, this.inversePoints = C, this.inversePoint = w, this.getInverseMatrix = L, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
          }
        }();

      function _typeof$3(e) {
        return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$3(e)
      }
      var lottie = {},
        standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";

      function setLocation(e) {
        setLocationHref(e)
      }

      function searchAnimations() {
        standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
      }

      function setSubframeRendering(e) {
        setSubframeEnabled(e)
      }

      function setPrefix(e) {
        setIdPrefix(e)
      }

      function loadAnimation(e) {
        return standalone === !0 && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
      }

      function setQuality(e) {
        if (typeof e == "string") switch (e) {
          case "high":
            setDefaultCurveSegments(200);
            break;
          default:
          case "medium":
            setDefaultCurveSegments(50);
            break;
          case "low":
            setDefaultCurveSegments(10)
        } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
        getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
      }

      function inBrowser() {
        return typeof navigator < "u"
      }

      function installPlugin(e, t) {
        e === "expressions" && setExpressionsPlugin(t)
      }

      function getFactory(e) {
        switch (e) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
          default:
            return null
        }
      }

      function checkReady() {
        document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
      }

      function getQueryVariable(e) {
        for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
          var n = t[r].split("=");
          if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1])
        }
        return null
      }
      lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
      var queryString = "";
      if (standalone) {
        var scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || {
            src: ""
          };
        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      try {
        (typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u" || typeof define == "function" && define.amd || (window.bodymovin = lottie)
      } catch (e) {}
      var ShapeModifiers = function() {
        var e = {},
          t = {};
        return e.registerModifier = function(r, n) {
          t[r] || (t[r] = n)
        }, e.getModifier = function(r, n, i) {
          return new t[r](n, i)
        }, e
      }();

      function ShapeModifier() {}

      function TrimModifier() {}

      function PuckerAndBloatModifier() {}
      ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
        if (!this.closed) {
          e.sh.container.addDynamicProperty(e.sh);
          var t = {
            shape: e.sh,
            data: e,
            localShapeCollection: shapeCollectionPool.newShapeCollection()
          };
          this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
        }
      }, ShapeModifier.prototype.init = function(e, t) {
        this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
      }, ShapeModifier.prototype.processKeys = function() {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
      }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
        this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
      }, TrimModifier.prototype.addShapeToModifier = function(e) {
        e.pathsData = []
      }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, n, i) {
        var a = [];
        t <= 1 ? a.push({
          s: e,
          e: t
        }) : e >= 1 ? a.push({
          s: e - 1,
          e: t - 1
        }) : (a.push({
          s: e,
          e: 1
        }), a.push({
          s: 0,
          e: t - 1
        }));
        var o, s, l = [],
          f = a.length;
        for (o = 0; o < f; o += 1) {
          var u, p;
          (s = a[o]).e * i < n || s.s * i > n + r || (u = s.s * i <= n ? 0 : (s.s * i - n) / r, p = s.e * i >= n + r ? 1 : (s.e * i - n) / r, l.push([u, p]))
        }
        return l.length || l.push([0, 0]), l
      }, TrimModifier.prototype.releasePathsData = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
        return e.length = 0, e
      }, TrimModifier.prototype.processShapes = function(e) {
        var t, r, n, i;
        if (this._mdf || e) {
          var a = this.o.v % 360 / 360;
          if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
            var o = t;
            t = r, r = o
          }
          t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
        } else t = this.sValue, r = this.eValue;
        var s, l, f, u, p, g = this.shapes.length,
          d = 0;
        if (r === t)
          for (i = 0; i < g; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
        else if (r === 1 && t === 0 || r === 0 && t === 1) {
          if (this._mdf)
            for (i = 0; i < g; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
        } else {
          var h, m, c = [];
          for (i = 0; i < g; i += 1)
            if ((h = this.shapes[i]).shape._mdf || this._mdf || e || this.m === 2) {
              if (l = (n = h.shape.paths)._length, p = 0, !h.shape._mdf && h.pathsData.length) p = h.totalShapeLength;
              else {
                for (f = this.releasePathsData(h.pathsData), s = 0; s < l; s += 1) u = bez.getSegmentsLength(n.shapes[s]), f.push(u), p += u.totalLength;
                h.totalShapeLength = p, h.pathsData = f
              }
              d += p, h.shape._mdf = !0
            } else h.shape.paths = h.localShapeCollection;
          var y, v = t,
            E = r,
            b = 0;
          for (i = g - 1; i >= 0; i -= 1)
            if ((h = this.shapes[i]).shape._mdf) {
              for ((m = h.localShapeCollection).releaseShapes(), this.m === 2 && g > 1 ? (y = this.calculateShapeEdges(t, r, h.totalShapeLength, b, d), b += h.totalShapeLength) : y = [
                  [v, E]
                ], l = y.length, s = 0; s < l; s += 1) {
                v = y[s][0], E = y[s][1], c.length = 0, E <= 1 ? c.push({
                  s: h.totalShapeLength * v,
                  e: h.totalShapeLength * E
                }) : v >= 1 ? c.push({
                  s: h.totalShapeLength * (v - 1),
                  e: h.totalShapeLength * (E - 1)
                }) : (c.push({
                  s: h.totalShapeLength * v,
                  e: h.totalShapeLength
                }), c.push({
                  s: 0,
                  e: h.totalShapeLength * (E - 1)
                }));
                var _ = this.addShapes(h, c[0]);
                if (c[0].s !== c[0].e) {
                  if (c.length > 1)
                    if (h.shape.paths.shapes[h.shape.paths._length - 1].c) {
                      var A = _.pop();
                      this.addPaths(_, m), _ = this.addShapes(h, c[1], A)
                    } else this.addPaths(_, m), _ = this.addShapes(h, c[1]);
                  this.addPaths(_, m)
                }
              }
              h.shape.paths = m
            }
        }
      }, TrimModifier.prototype.addPaths = function(e, t) {
        var r, n = e.length;
        for (r = 0; r < n; r += 1) t.addShape(e[r])
      }, TrimModifier.prototype.addSegment = function(e, t, r, n, i, a, o) {
        i.setXYAt(t[0], t[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), o && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
      }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, n) {
        t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), n && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
      }, TrimModifier.prototype.addShapes = function(e, t, r) {
        var n, i, a, o, s, l, f, u, p = e.pathsData,
          g = e.shape.paths.shapes,
          d = e.shape.paths._length,
          h = 0,
          m = [],
          c = !0;
        for (r ? (s = r._length, u = r._length) : (r = shapePool.newElement(), s = 0, u = 0), m.push(r), n = 0; n < d; n += 1) {
          for (l = p[n].lengths, r.c = g[n].c, a = g[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
            if (h + (o = l[i - 1]).addedLength < t.s) h += o.addedLength, r.c = !1;
            else {
              if (h > t.e) {
                r.c = !1;
                break
              }
              t.s <= h && t.e >= h + o.addedLength ? (this.addSegment(g[n].v[i - 1], g[n].o[i - 1], g[n].i[i], g[n].v[i], r, s, c), c = !1) : (f = bez.getNewSegment(g[n].v[i - 1], g[n].v[i], g[n].o[i - 1], g[n].i[i], (t.s - h) / o.addedLength, (t.e - h) / o.addedLength, l[i - 1]), this.addSegmentFromArray(f, r, s, c), c = !1, r.c = !1), h += o.addedLength, s += 1
            } if (g[n].c && l.length) {
            if (o = l[i - 1], h <= t.e) {
              var y = l[i - 1].addedLength;
              t.s <= h && t.e >= h + y ? (this.addSegment(g[n].v[i - 1], g[n].o[i - 1], g[n].i[0], g[n].v[0], r, s, c), c = !1) : (f = bez.getNewSegment(g[n].v[i - 1], g[n].v[0], g[n].o[i - 1], g[n].i[0], (t.s - h) / y, (t.e - h) / y, l[i - 1]), this.addSegmentFromArray(f, r, s, c), c = !1, r.c = !1)
            } else r.c = !1;
            h += o.addedLength, s += 1
          }
          if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), h > t.e) break;
          n < d - 1 && (r = shapePool.newElement(), c = !0, m.push(r), s = 0)
        }
        return m
      }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
      }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
        var r = t / 100,
          n = [0, 0],
          i = e._length,
          a = 0;
        for (a = 0; a < i; a += 1) n[0] += e.v[a][0], n[1] += e.v[a][1];
        n[0] /= i, n[1] /= i;
        var o, s, l, f, u, p, g = shapePool.newElement();
        for (g.c = e.c, a = 0; a < i; a += 1) o = e.v[a][0] + (n[0] - e.v[a][0]) * r, s = e.v[a][1] + (n[1] - e.v[a][1]) * r, l = e.o[a][0] + (n[0] - e.o[a][0]) * -r, f = e.o[a][1] + (n[1] - e.o[a][1]) * -r, u = e.i[a][0] + (n[0] - e.i[a][0]) * -r, p = e.i[a][1] + (n[1] - e.i[a][1]) * -r, g.setTripleAt(o, s, l, f, u, p, a);
        return g
      }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
        var t, r, n, i, a, o, s = this.shapes.length,
          l = this.amount.v;
        if (l !== 0)
          for (r = 0; r < s; r += 1) {
            if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(t[n], l));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      };
      var TransformPropertyFactory = function() {
        var e = [0, 0];

        function t(r, n, i) {
          if (this.elem = r, this.frameId = -1, this.propType = "transform", this.data = n, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || r), n.p && n.p.s ? (this.px = PropertyFactory.getProp(r, n.p.x, 0, 0, this), this.py = PropertyFactory.getProp(r, n.p.y, 0, 0, this), n.p.z && (this.pz = PropertyFactory.getProp(r, n.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(r, n.p || {
              k: [0, 0, 0]
            }, 1, 0, this), n.rx) {
            if (this.rx = PropertyFactory.getProp(r, n.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(r, n.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(r, n.rz, 0, degToRads, this), n.or.k[0].ti) {
              var a, o = n.or.k.length;
              for (a = 0; a < o; a += 1) n.or.k[a].to = null, n.or.k[a].ti = null
            }
            this.or = PropertyFactory.getProp(r, n.or, 1, degToRads, this), this.or.sh = !0
          } else this.r = PropertyFactory.getProp(r, n.r || {
            k: 0
          }, 0, degToRads, this);
          n.sk && (this.sk = PropertyFactory.getProp(r, n.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(r, n.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(r, n.a || {
            k: [0, 0, 0]
          }, 1, 0, this), this.s = PropertyFactory.getProp(r, n.s || {
            k: [100, 100, 100]
          }, 1, .01, this), n.o ? this.o = PropertyFactory.getProp(r, n.o, 0, .01, r) : this.o = {
            _mdf: !1,
            v: 1
          }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
        }
        return t.prototype = {
          applyToMatrix: function(r) {
            var n = this._mdf;
            this.iterateDynamicProperties(), this._mdf = this._mdf || n, this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && r.skewFromAxis(-this.sk.v, this.sa.v), this.r ? r.rotate(-this.r.v) : r.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? r.translate(this.px.v, this.py.v, -this.pz.v) : r.translate(this.px.v, this.py.v, 0) : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
          },
          getValue: function(r) {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || r) {
                var n;
                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                  var i, a;
                  if (n = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / n, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / n, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / n, this.p.offsetTime));
                  else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                    i = [], a = [];
                    var o = this.px,
                      s = this.py;
                    o._caching.lastFrame + o.offsetTime <= o.keyframes[0].t ? (i[0] = o.getValueAtTime((o.keyframes[0].t + .01) / n, 0), i[1] = s.getValueAtTime((s.keyframes[0].t + .01) / n, 0), a[0] = o.getValueAtTime(o.keyframes[0].t / n, 0), a[1] = s.getValueAtTime(s.keyframes[0].t / n, 0)) : o._caching.lastFrame + o.offsetTime >= o.keyframes[o.keyframes.length - 1].t ? (i[0] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / n, 0), i[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / n, 0), a[0] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / n, 0), a[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / n, 0)) : (i = [o.pv, s.pv], a[0] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / n, o.offsetTime), a[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / n, s.offsetTime))
                  } else i = a = e;
                  this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
                }
                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
              }
              this.frameId = this.elem.globalData.frameId
            }
          },
          precalculateMatrix: function() {
            if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
              if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
              }
              this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
            }
          },
          autoOrient: function() {}
        }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(r) {
          this._addDynamicProperty(r), this.elem.addDynamicProperty(r), this._isDirty = !0
        }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
          getTransformProperty: function(r, n, i) {
            return new t(r, n, i)
          }
        }
      }();

      function RepeaterModifier() {}

      function RoundCornersModifier() {}

      function floatEqual(e, t) {
        return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
      }

      function floatZero(e) {
        return Math.abs(e) <= 1e-5
      }

      function lerp(e, t, r) {
        return e * (1 - r) + t * r
      }

      function lerpPoint(e, t, r) {
        return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
      }

      function quadRoots(e, t, r) {
        if (e === 0) return [];
        var n = t * t - 4 * e * r;
        if (n < 0) return [];
        var i = -t / (2 * e);
        if (n === 0) return [i];
        var a = Math.sqrt(n) / (2 * e);
        return [i - a, i + a]
      }

      function polynomialCoefficients(e, t, r, n) {
        return [3 * t - e - 3 * r + n, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
      }

      function singlePoint(e) {
        return new PolynomialBezier(e, e, e, e, !1)
      }

      function PolynomialBezier(e, t, r, n, i) {
        i && pointEqual(e, t) && (t = lerpPoint(e, n, 1 / 3)), i && pointEqual(r, n) && (r = lerpPoint(e, n, 2 / 3));
        var a = polynomialCoefficients(e[0], t[0], r[0], n[0]),
          o = polynomialCoefficients(e[1], t[1], r[1], n[1]);
        this.a = [a[0], o[0]], this.b = [a[1], o[1]], this.c = [a[2], o[2]], this.d = [a[3], o[3]], this.points = [e, t, r, n]
      }

      function extrema(e, t) {
        var r = e.points[0][t],
          n = e.points[e.points.length - 1][t];
        if (r > n) {
          var i = n;
          n = r, r = i
        }
        for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), o = 0; o < a.length; o += 1)
          if (a[o] > 0 && a[o] < 1) {
            var s = e.point(a[o])[t];
            s < r ? r = s : s > n && (n = s)
          } return {
          min: r,
          max: n
        }
      }

      function intersectData(e, t, r) {
        var n = e.boundingBox();
        return {
          cx: n.cx,
          cy: n.cy,
          width: n.width,
          height: n.height,
          bez: e,
          t: (t + r) / 2,
          t1: t,
          t2: r
        }
      }

      function splitData(e) {
        var t = e.bez.split(.5);
        return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
      }

      function boxIntersect(e, t) {
        return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
      }

      function intersectsImpl(e, t, r, n, i, a) {
        if (boxIntersect(e, t))
          if (r >= a || e.width <= n && e.height <= n && t.width <= n && t.height <= n) i.push([e.t, t.t]);
          else {
            var o = splitData(e),
              s = splitData(t);
            intersectsImpl(o[0], s[0], r + 1, n, i, a), intersectsImpl(o[0], s[1], r + 1, n, i, a), intersectsImpl(o[1], s[0], r + 1, n, i, a), intersectsImpl(o[1], s[1], r + 1, n, i, a)
          }
      }

      function crossProduct(e, t) {
        return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
      }

      function lineIntersection(e, t, r, n) {
        var i = [e[0], e[1], 1],
          a = [t[0], t[1], 1],
          o = [r[0], r[1], 1],
          s = [n[0], n[1], 1],
          l = crossProduct(crossProduct(i, a), crossProduct(o, s));
        return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
      }

      function polarOffset(e, t, r) {
        return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
      }

      function pointDistance(e, t) {
        return Math.hypot(e[0] - t[0], e[1] - t[1])
      }

      function pointEqual(e, t) {
        return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
      }

      function ZigZagModifier() {}

      function setPoint(e, t, r, n, i, a, o) {
        var s = r - Math.PI / 2,
          l = r + Math.PI / 2,
          f = t[0] + Math.cos(r) * n * i,
          u = t[1] - Math.sin(r) * n * i;
        e.setTripleAt(f, u, f + Math.cos(s) * a, u - Math.sin(s) * a, f + Math.cos(l) * o, u - Math.sin(l) * o, e.length())
      }

      function getPerpendicularVector(e, t) {
        var r = [t[0] - e[0], t[1] - e[1]],
          n = .5 * -Math.PI;
        return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
      }

      function getProjectingAngle(e, t) {
        var r = t === 0 ? e.length() - 1 : t - 1,
          n = (t + 1) % e.length(),
          i = getPerpendicularVector(e.v[r], e.v[n]);
        return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
      }

      function zigZagCorner(e, t, r, n, i, a, o) {
        var s = getProjectingAngle(t, r),
          l = t.v[r % t._length],
          f = t.v[r === 0 ? t._length - 1 : r - 1],
          u = t.v[(r + 1) % t._length],
          p = a === 2 ? Math.sqrt(Math.pow(l[0] - f[0], 2) + Math.pow(l[1] - f[1], 2)) : 0,
          g = a === 2 ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
        setPoint(e, t.v[r % t._length], s, o, n, g / (2 * (i + 1)), p / (2 * (i + 1)), a)
      }

      function zigZagSegment(e, t, r, n, i, a) {
        for (var o = 0; o < n; o += 1) {
          var s = (o + 1) / (n + 1),
            l = i === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
            f = t.normalAngle(s);
          setPoint(e, t.point(s), f, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), a = -a
        }
        return a
      }

      function linearOffset(e, t, r) {
        var n = Math.atan2(t[0] - e[0], t[1] - e[1]);
        return [polarOffset(e, n, r), polarOffset(t, n, r)]
      }

      function offsetSegment(e, t) {
        var r, n, i, a, o, s, l;
        r = (l = linearOffset(e.points[0], e.points[1], t))[0], n = l[1], i = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], o = (l = linearOffset(e.points[2], e.points[3], t))[0], s = l[1];
        var f = lineIntersection(r, n, i, a);
        f === null && (f = n);
        var u = lineIntersection(o, s, i, a);
        return u === null && (u = o), new PolynomialBezier(r, f, u, s)
      }

      function joinLines(e, t, r, n, i) {
        var a = t.points[3],
          o = r.points[0];
        if (n === 3 || pointEqual(a, o)) return a;
        if (n === 2) {
          var s = -t.tangentAngle(1),
            l = -r.tangentAngle(0) + Math.PI,
            f = lineIntersection(a, polarOffset(a, s + Math.PI / 2, 100), o, polarOffset(o, s + Math.PI / 2, 100)),
            u = f ? pointDistance(f, a) : pointDistance(a, o) / 2,
            p = polarOffset(a, s, 2 * u * roundCorner);
          return e.setXYAt(p[0], p[1], "o", e.length() - 1), p = polarOffset(o, l, 2 * u * roundCorner), e.setTripleAt(o[0], o[1], o[0], o[1], p[0], p[1], e.length()), o
        }
        var g = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, o, pointEqual(o, r.points[1]) ? r.points[3] : r.points[1]);
        return g && pointDistance(g, a) < i ? (e.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], e.length()), g) : a
      }

      function getIntersection(e, t) {
        var r = e.intersections(t);
        return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
      }

      function pruneSegmentIntersection(e, t) {
        var r = e.slice(),
          n = t.slice(),
          i = getIntersection(e[e.length - 1], t[0]);
        return i && (r[e.length - 1] = e[e.length - 1].split(i[0])[0], n[0] = t[0].split(i[1])[1]), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1])) ? [
          [e[0].split(i[0])[0]],
          [t[t.length - 1].split(i[1])[1]]
        ] : [r, n]
      }

      function pruneIntersections(e) {
        for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
        return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
      }

      function offsetSegmentSplit(e, t) {
        var r, n, i, a, o = e.inflectionPoints();
        if (o.length === 0) return [offsetSegment(e, t)];
        if (o.length === 1 || floatEqual(o[1], 1)) return r = (i = e.split(o[0]))[0], n = i[1], [offsetSegment(r, t), offsetSegment(n, t)];
        r = (i = e.split(o[0]))[0];
        var s = (o[1] - o[0]) / (1 - o[0]);
        return a = (i = i[1].split(s))[0], n = i[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(n, t)]
      }

      function OffsetPathModifier() {}

      function getFontProperties(e) {
        for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", n = "normal", i = t.length, a = 0; a < i; a += 1) switch (t[a].toLowerCase()) {
          case "italic":
            n = "italic";
            break;
          case "bold":
            r = "700";
            break;
          case "black":
            r = "900";
            break;
          case "medium":
            r = "500";
            break;
          case "regular":
          case "normal":
            r = "400";
            break;
          case "light":
          case "thin":
            r = "200"
        }
        return {
          style: n,
          weight: e.fWeight || r
        }
      }
      extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
      }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, n, i, a) {
        var o = a ? -1 : 1,
          s = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
          l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
        e.translate(n.p.v[0] * o * i, n.p.v[1] * o * i, n.p.v[2]), t.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), t.rotate(-n.r.v * o * i), t.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / s : s, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
      }, RepeaterModifier.prototype.init = function(e, t, r, n) {
        for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
      }, RepeaterModifier.prototype.resetElements = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it)
      }, RepeaterModifier.prototype.cloneElements = function(e) {
        var t = JSON.parse(JSON.stringify(e));
        return this.resetElements(t), t
      }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
        var r, n = e.length;
        for (r = 0; r < n; r += 1) e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t)
      }, RepeaterModifier.prototype.processShapes = function(e) {
        var t, r, n, i, a, o = !1;
        if (this._mdf || e) {
          var s, l = Math.ceil(this.c.v);
          if (this._groups.length < l) {
            for (; this._groups.length < l;) {
              var f = {
                it: this.cloneElements(this._elements),
                ty: "gr"
              };
              f.it.push({
                a: {
                  a: 0,
                  ix: 1,
                  k: [0, 0]
                },
                nm: "Transform",
                o: {
                  a: 0,
                  ix: 7,
                  k: 100
                },
                p: {
                  a: 0,
                  ix: 2,
                  k: [0, 0]
                },
                r: {
                  a: 1,
                  ix: 6,
                  k: [{
                    s: 0,
                    e: 0,
                    t: 0
                  }, {
                    s: 0,
                    e: 0,
                    t: 1
                  }]
                },
                s: {
                  a: 0,
                  ix: 3,
                  k: [100, 100]
                },
                sa: {
                  a: 0,
                  ix: 5,
                  k: 0
                },
                sk: {
                  a: 0,
                  ix: 4,
                  k: 0
                },
                ty: "tr"
              }), this.arr.splice(0, 0, f), this._groups.splice(0, 0, f), this._currentCopies += 1
            }
            this.elem.reloadShapes(), o = !0
          }
          for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
            if (s = a < l, this._groups[n]._render = s, this.changeGroupRender(this._groups[n].it, s), !s) {
              var u = this.elemsData[n].it,
                p = u[u.length - 1];
              p.transform.op.v !== 0 ? (p.transform.op._mdf = !0, p.transform.op.v = 0) : p.transform.op._mdf = !1
            }
            a += 1
          }
          this._currentCopies = l;
          var g = this.o.v,
            d = g % 1,
            h = g > 0 ? Math.floor(g) : Math.ceil(g),
            m = this.pMatrix.props,
            c = this.rMatrix.props,
            y = this.sMatrix.props;
          this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
          var v, E, b = 0;
          if (g > 0) {
            for (; b < h;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
            d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), b += d)
          } else if (g < 0) {
            for (; b > h;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
            d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), b -= d)
          }
          for (n = this.data.m === 1 ? 0 : this._currentCopies - 1, i = this.data.m === 1 ? 1 : -1, a = this._currentCopies; a;) {
            if (E = (r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), b !== 0) {
              for ((n !== 0 && i === 1 || n !== this._currentCopies - 1 && i === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < E; v += 1) r[v] = this.matrix.props[v];
              this.matrix.reset()
            } else
              for (this.matrix.reset(), v = 0; v < E; v += 1) r[v] = this.matrix.props[v];
            b += 1, a -= 1, n += i
          }
        } else
          for (a = this._currentCopies, n = 0, i = 1; a;) r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, n += i;
        return o
      }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
      }, RoundCornersModifier.prototype.processPath = function(e, t) {
        var r, n = shapePool.newElement();
        n.c = e.c;
        var i, a, o, s, l, f, u, p, g, d, h, m, c = e._length,
          y = 0;
        for (r = 0; r < c; r += 1) i = e.v[r], o = e.o[r], a = e.i[r], i[0] === o[0] && i[1] === o[1] && i[0] === a[0] && i[1] === a[1] ? r !== 0 && r !== c - 1 || e.c ? (s = r === 0 ? e.v[c - 1] : e.v[r - 1], f = (l = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(l / 2, t) / l : 0, u = h = i[0] + (s[0] - i[0]) * f, p = m = i[1] - (i[1] - s[1]) * f, g = u - (u - i[0]) * roundCorner, d = p - (p - i[1]) * roundCorner, n.setTripleAt(u, p, g, d, h, m, y), y += 1, s = r === c - 1 ? e.v[0] : e.v[r + 1], f = (l = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(l / 2, t) / l : 0, u = g = i[0] + (s[0] - i[0]) * f, p = d = i[1] + (s[1] - i[1]) * f, h = u - (u - i[0]) * roundCorner, m = p - (p - i[1]) * roundCorner, n.setTripleAt(u, p, g, d, h, m, y), y += 1) : (n.setTripleAt(i[0], i[1], o[0], o[1], a[0], a[1], y), y += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], y), y += 1);
        return n
      }, RoundCornersModifier.prototype.processShapes = function(e) {
        var t, r, n, i, a, o, s = this.shapes.length,
          l = this.rd.v;
        if (l !== 0)
          for (r = 0; r < s; r += 1) {
            if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(t[n], l));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      }, PolynomialBezier.prototype.point = function(e) {
        return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
      }, PolynomialBezier.prototype.derivative = function(e) {
        return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
      }, PolynomialBezier.prototype.tangentAngle = function(e) {
        var t = this.derivative(e);
        return Math.atan2(t[1], t[0])
      }, PolynomialBezier.prototype.normalAngle = function(e) {
        var t = this.derivative(e);
        return Math.atan2(t[0], t[1])
      }, PolynomialBezier.prototype.inflectionPoints = function() {
        var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
        if (floatZero(e)) return [];
        var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
          r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
        if (r < 0) return [];
        var n = Math.sqrt(r);
        return floatZero(n) ? n > 0 && n < 1 ? [t] : [] : [t - n, t + n].filter(function(i) {
          return i > 0 && i < 1
        })
      }, PolynomialBezier.prototype.split = function(e) {
        if (e <= 0) return [singlePoint(this.points[0]), this];
        if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
        var t = lerpPoint(this.points[0], this.points[1], e),
          r = lerpPoint(this.points[1], this.points[2], e),
          n = lerpPoint(this.points[2], this.points[3], e),
          i = lerpPoint(t, r, e),
          a = lerpPoint(r, n, e),
          o = lerpPoint(i, a, e);
        return [new PolynomialBezier(this.points[0], t, i, o, !0), new PolynomialBezier(o, a, n, this.points[3], !0)]
      }, PolynomialBezier.prototype.bounds = function() {
        return {
          x: extrema(this, 0),
          y: extrema(this, 1)
        }
      }, PolynomialBezier.prototype.boundingBox = function() {
        var e = this.bounds();
        return {
          left: e.x.min,
          right: e.x.max,
          top: e.y.min,
          bottom: e.y.max,
          width: e.x.max - e.x.min,
          height: e.y.max - e.y.min,
          cx: (e.x.max + e.x.min) / 2,
          cy: (e.y.max + e.y.min) / 2
        }
      }, PolynomialBezier.prototype.intersections = function(e, t, r) {
        t === void 0 && (t = 2), r === void 0 && (r = 7);
        var n = [];
        return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, n, r), n
      }, PolynomialBezier.shapeSegment = function(e, t) {
        var r = (t + 1) % e.length();
        return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
      }, PolynomialBezier.shapeSegmentInverted = function(e, t) {
        var r = (t + 1) % e.length();
        return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
      }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
      }, ZigZagModifier.prototype.processPath = function(e, t, r, n) {
        var i = e._length,
          a = shapePool.newElement();
        if (a.c = e.c, e.c || (i -= 1), i === 0) return a;
        var o = -1,
          s = PolynomialBezier.shapeSegment(e, 0);
        zigZagCorner(a, e, 0, t, r, n, o);
        for (var l = 0; l < i; l += 1) o = zigZagSegment(a, s, t, r, n, -o), s = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null, zigZagCorner(a, e, l + 1, t, r, n, o);
        return a
      }, ZigZagModifier.prototype.processShapes = function(e) {
        var t, r, n, i, a, o, s = this.shapes.length,
          l = this.amplitude.v,
          f = Math.max(0, Math.round(this.frequency.v)),
          u = this.pointsType.v;
        if (l !== 0)
          for (r = 0; r < s; r += 1) {
            if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(t[n], l, f, u));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
      }, OffsetPathModifier.prototype.processPath = function(e, t, r, n) {
        var i = shapePool.newElement();
        i.c = e.c;
        var a, o, s, l = e.length();
        e.c || (l -= 1);
        var f = [];
        for (a = 0; a < l; a += 1) s = PolynomialBezier.shapeSegment(e, a), f.push(offsetSegmentSplit(s, t));
        if (!e.c)
          for (a = l - 1; a >= 0; a -= 1) s = PolynomialBezier.shapeSegmentInverted(e, a), f.push(offsetSegmentSplit(s, t));
        f = pruneIntersections(f);
        var u = null,
          p = null;
        for (a = 0; a < f.length; a += 1) {
          var g = f[a];
          for (p && (u = joinLines(i, p, g[0], r, n)), p = g[g.length - 1], o = 0; o < g.length; o += 1) s = g[o], u && pointEqual(s.points[0], u) ? i.setXYAt(s.points[1][0], s.points[1][1], "o", i.length() - 1) : i.setTripleAt(s.points[0][0], s.points[0][1], s.points[1][0], s.points[1][1], s.points[0][0], s.points[0][1], i.length()), i.setTripleAt(s.points[3][0], s.points[3][1], s.points[3][0], s.points[3][1], s.points[2][0], s.points[2][1], i.length()), u = s.points[3]
        }
        return f.length && joinLines(i, p, f[0][0], r, n), i
      }, OffsetPathModifier.prototype.processShapes = function(e) {
        var t, r, n, i, a, o, s = this.shapes.length,
          l = this.amount.v,
          f = this.miterLimit.v,
          u = this.lineJoin;
        if (l !== 0)
          for (r = 0; r < s; r += 1) {
            if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(t[n], l, u, f));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      };
      var FontManager = function() {
        var e = {
            w: 0,
            size: 0,
            shapes: [],
            data: {
              shapes: []
            }
          },
          t = [];
        t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
        var r = 127988,
          n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

        function i(u, p) {
          var g = createTag("span");
          g.setAttribute("aria-hidden", !0), g.style.fontFamily = p;
          var d = createTag("span");
          d.innerText = "giItT1WQy@!-/#", g.style.position = "absolute", g.style.left = "-10000px", g.style.top = "-10000px", g.style.fontSize = "300px", g.style.fontVariant = "normal", g.style.fontStyle = "normal", g.style.fontWeight = "normal", g.style.letterSpacing = "0", g.appendChild(d), document.body.appendChild(g);
          var h = d.offsetWidth;
          return d.style.fontFamily = function(m) {
            var c, y = m.split(","),
              v = y.length,
              E = [];
            for (c = 0; c < v; c += 1) y[c] !== "sans-serif" && y[c] !== "monospace" && E.push(y[c]);
            return E.join(",")
          }(u) + ", " + p, {
            node: d,
            w: h,
            parent: g
          }
        }

        function a(u, p) {
          var g, d = document.body && p ? "svg" : "canvas",
            h = getFontProperties(u);
          if (d === "svg") {
            var m = createNS("text");
            m.style.fontSize = "100px", m.setAttribute("font-family", u.fFamily), m.setAttribute("font-style", h.style), m.setAttribute("font-weight", h.weight), m.textContent = "1", u.fClass ? (m.style.fontFamily = "inherit", m.setAttribute("class", u.fClass)) : m.style.fontFamily = u.fFamily, p.appendChild(m), g = m
          } else {
            var c = new OffscreenCanvas(500, 500).getContext("2d");
            c.font = h.style + " " + h.weight + " 100px " + u.fFamily, g = c
          }
          return {
            measureText: function(y) {
              return d === "svg" ? (g.textContent = y, g.getComputedTextLength()) : g.measureText(y).width
            }
          }
        }

        function o(u) {
          var p = 0,
            g = u.charCodeAt(0);
          if (g >= 55296 && g <= 56319) {
            var d = u.charCodeAt(1);
            d >= 56320 && d <= 57343 && (p = 1024 * (g - 55296) + d - 56320 + 65536)
          }
          return p
        }

        function s(u) {
          var p = o(u);
          return p >= 127462 && p <= 127487
        }
        var l = function() {
          this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
        };
        l.isModifier = function(u, p) {
          var g = u.toString(16) + p.toString(16);
          return n.indexOf(g) !== -1
        }, l.isZeroWidthJoiner = function(u) {
          return u === 8205
        }, l.isFlagEmoji = function(u) {
          return s(u.substr(0, 2)) && s(u.substr(2, 2))
        }, l.isRegionalCode = s, l.isCombinedCharacter = function(u) {
          return t.indexOf(u) !== -1
        }, l.isRegionalFlag = function(u, p) {
          var g = o(u.substr(p, 2));
          if (g !== r) return !1;
          var d = 0;
          for (p += 2; d < 5;) {
            if ((g = o(u.substr(p, 2))) < 917601 || g > 917626) return !1;
            d += 1, p += 2
          }
          return o(u.substr(p, 2)) === 917631
        }, l.isVariationSelector = function(u) {
          return u === 65039
        }, l.BLACK_FLAG_CODE_POINT = r;
        var f = {
          addChars: function(u) {
            if (u) {
              var p;
              this.chars || (this.chars = []);
              var g, d, h = u.length,
                m = this.chars.length;
              for (p = 0; p < h; p += 1) {
                for (g = 0, d = !1; g < m;) this.chars[g].style === u[p].style && this.chars[g].fFamily === u[p].fFamily && this.chars[g].ch === u[p].ch && (d = !0), g += 1;
                d || (this.chars.push(u[p]), m += 1)
              }
            }
          },
          addFonts: function(u, p) {
            if (u) {
              if (this.chars) return this.isLoaded = !0, void(this.fonts = u.list);
              if (!document.body) return this.isLoaded = !0, u.list.forEach(function(A) {
                A.helper = a(A), A.cache = {}
              }), void(this.fonts = u.list);
              var g, d = u.list,
                h = d.length,
                m = h;
              for (g = 0; g < h; g += 1) {
                var c, y, v = !0;
                if (d[g].loaded = !1, d[g].monoCase = i(d[g].fFamily, "monospace"), d[g].sansCase = i(d[g].fFamily, "sans-serif"), d[g].fPath) {
                  if (d[g].fOrigin === "p" || d[g].origin === 3) {
                    if ((c = document.querySelectorAll('style[f-forigin="p"][f-family="' + d[g].fFamily + '"], style[f-origin="3"][f-family="' + d[g].fFamily + '"]')).length > 0 && (v = !1), v) {
                      var E = createTag("style");
                      E.setAttribute("f-forigin", d[g].fOrigin), E.setAttribute("f-origin", d[g].origin), E.setAttribute("f-family", d[g].fFamily), E.type = "text/css", E.innerText = "@font-face {font-family: " + d[g].fFamily + "; font-style: normal; src: url('" + d[g].fPath + "');}", p.appendChild(E)
                    }
                  } else if (d[g].fOrigin === "g" || d[g].origin === 1) {
                    for (c = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), y = 0; y < c.length; y += 1) c[y].href.indexOf(d[g].fPath) !== -1 && (v = !1);
                    if (v) {
                      var b = createTag("link");
                      b.setAttribute("f-forigin", d[g].fOrigin), b.setAttribute("f-origin", d[g].origin), b.type = "text/css", b.rel = "stylesheet", b.href = d[g].fPath, document.body.appendChild(b)
                    }
                  } else if (d[g].fOrigin === "t" || d[g].origin === 2) {
                    for (c = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), y = 0; y < c.length; y += 1) d[g].fPath === c[y].src && (v = !1);
                    if (v) {
                      var _ = createTag("link");
                      _.setAttribute("f-forigin", d[g].fOrigin), _.setAttribute("f-origin", d[g].origin), _.setAttribute("rel", "stylesheet"), _.setAttribute("href", d[g].fPath), p.appendChild(_)
                    }
                  }
                } else d[g].loaded = !0, m -= 1;
                d[g].helper = a(d[g], p), d[g].cache = {}, this.fonts.push(d[g])
              }
              m === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            } else this.isLoaded = !0
          },
          getCharData: function(u, p, g) {
            for (var d = 0, h = this.chars.length; d < h;) {
              if (this.chars[d].ch === u && this.chars[d].style === p && this.chars[d].fFamily === g) return this.chars[d];
              d += 1
            }
            return (typeof u == "string" && u.charCodeAt(0) !== 13 || !u) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", u, p, g)), e
          },
          getFontByName: function(u) {
            for (var p = 0, g = this.fonts.length; p < g;) {
              if (this.fonts[p].fName === u) return this.fonts[p];
              p += 1
            }
            return this.fonts[0]
          },
          measureText: function(u, p, g) {
            var d = this.getFontByName(p),
              h = u;
            if (!d.cache[h]) {
              var m = d.helper;
              if (u === " ") {
                var c = m.measureText("|" + u + "|"),
                  y = m.measureText("||");
                d.cache[h] = (c - y) / 100
              } else d.cache[h] = m.measureText(u) / 100
            }
            return d.cache[h] * g
          },
          checkLoadedFonts: function() {
            var u, p, g, d = this.fonts.length,
              h = d;
            for (u = 0; u < d; u += 1) this.fonts[u].loaded ? h -= 1 : this.fonts[u].fOrigin === "n" || this.fonts[u].origin === 0 ? this.fonts[u].loaded = !0 : (p = this.fonts[u].monoCase.node, g = this.fonts[u].monoCase.w, p.offsetWidth !== g ? (h -= 1, this.fonts[u].loaded = !0) : (p = this.fonts[u].sansCase.node, g = this.fonts[u].sansCase.w, p.offsetWidth !== g && (h -= 1, this.fonts[u].loaded = !0)), this.fonts[u].loaded && (this.fonts[u].sansCase.parent.parentNode.removeChild(this.fonts[u].sansCase.parent), this.fonts[u].monoCase.parent.parentNode.removeChild(this.fonts[u].monoCase.parent)));
            h !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
          },
          setIsLoaded: function() {
            this.isLoaded = !0
          }
        };
        return l.prototype = f, l
      }();

      function SlotManager(e) {
        this.animationData = e
      }

      function slotFactory(e) {
        return new SlotManager(e)
      }

      function RenderableElement() {}
      SlotManager.prototype.getProp = function(e) {
        return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
      }, RenderableElement.prototype = {
        initRenderable: function() {
          this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
        },
        addRenderableComponent: function(e) {
          this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
        },
        removeRenderableComponent: function(e) {
          this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
        },
        prepareRenderableFrame: function(e) {
          this.checkLayerLimits(e)
        },
        checkTransparency: function() {
          this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
        },
        checkLayerLimits: function(e) {
          this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
        },
        renderRenderable: function() {
          var e, t = this.renderableComponents.length;
          for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
        },
        sourceRectAtTime: function() {
          return {
            top: 0,
            left: 0,
            width: 100,
            height: 100
          }
        },
        getLayerSize: function() {
          return this.data.ty === 5 ? {
            w: this.data.textData.width,
            h: this.data.textData.height
          } : {
            w: this.data.width,
            h: this.data.height
          }
        }
      };
      var getBlendMode = (blendModeEnums = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity"
        }, function(e) {
          return blendModeEnums[e] || ""
        }),
        blendModeEnums;

      function SliderEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function AngleEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function ColorEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
      }

      function PointEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
      }

      function LayerIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function MaskIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function CheckboxEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function NoValueEffect() {
        this.p = {}
      }

      function EffectsManager(e, t) {
        var r, n = e.ef || [];
        this.effectElements = [];
        var i, a = n.length;
        for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], t), this.effectElements.push(i)
      }

      function GroupEffect(e, t) {
        this.init(e, t)
      }

      function BaseElement() {}

      function FrameElement() {}

      function FootageElement(e, t, r) {
        this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
      }

      function AudioElement(e, t, r) {
        this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
        var n = this.globalData.getAssetsPath(this.assetData);
        this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
          k: [100]
        }, 1, .01, this)
      }

      function BaseRenderer() {}
      extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
        var r;
        this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
        var n, i = this.data.ef.length,
          a = this.data.ef;
        for (r = 0; r < i; r += 1) {
          switch (n = null, a[r].ty) {
            case 0:
              n = new SliderEffect(a[r], t, this);
              break;
            case 1:
              n = new AngleEffect(a[r], t, this);
              break;
            case 2:
              n = new ColorEffect(a[r], t, this);
              break;
            case 3:
              n = new PointEffect(a[r], t, this);
              break;
            case 4:
            case 7:
              n = new CheckboxEffect(a[r], t, this);
              break;
            case 10:
              n = new LayerIndexEffect(a[r], t, this);
              break;
            case 11:
              n = new MaskIndexEffect(a[r], t, this);
              break;
            case 5:
              n = new EffectsManager(a[r], t, this);
              break;
            default:
              n = new NoValueEffect(a[r], t, this)
          }
          n && this.effectElements.push(n)
        }
      }, BaseElement.prototype = {
        checkMasks: function() {
          if (!this.data.hasMask) return !1;
          for (var e = 0, t = this.data.masksProperties.length; e < t;) {
            if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
            e += 1
          }
          return !1
        },
        initExpressions: function() {
          var e = getExpressionInterfaces();
          if (e) {
            var t = e("layer"),
              r = e("effects"),
              n = e("shape"),
              i = e("text"),
              a = e("comp");
            this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var o = r.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(o), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
          }
        },
        setBlendMode: function() {
          var e = getBlendMode(this.data.bm);
          (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
        },
        initBaseData: function(e, t, r) {
          this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
        },
        getType: function() {
          return this.type
        },
        sourceRectAtTime: function() {}
      }, FrameElement.prototype = {
        initFrame: function() {
          this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
        },
        prepareProperties: function(e, t) {
          var r, n = this.dynamicProperties.length;
          for (r = 0; r < n; r += 1)(t || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
        },
        addDynamicProperty: function(e) {
          this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
        }
      }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
        return null
      }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
        var e = getExpressionInterfaces();
        if (e) {
          var t = e("footage");
          this.layerInterface = t(this)
        }
      }, FootageElement.prototype.getFootageData = function() {
        return this.footageData
      }, AudioElement.prototype.prepareFrame = function(e) {
        if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
        else {
          var t = this.tm.v;
          this._currentTime = t
        }
        this._volume = this.lv.v[0];
        var r = this._volume * this._volumeMultiplier;
        this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
      }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
      }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
        this.audio.pause(), this._isPlaying = !1
      }, AudioElement.prototype.pause = function() {
        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
      }, AudioElement.prototype.resume = function() {
        this._canPlay = !0
      }, AudioElement.prototype.setRate = function(e) {
        this.audio.rate(e)
      }, AudioElement.prototype.volume = function(e) {
        this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
      }, AudioElement.prototype.getBaseElement = function() {
        return null
      }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(e) {
        var t, r, n = this.layers.length;
        for (this.completeLayers = !0, t = n - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
        this.checkPendingElements()
      }, BaseRenderer.prototype.createItem = function(e) {
        switch (e.ty) {
          case 2:
            return this.createImage(e);
          case 0:
            return this.createComp(e);
          case 1:
            return this.createSolid(e);
          case 3:
          default:
            return this.createNull(e);
          case 4:
            return this.createShape(e);
          case 5:
            return this.createText(e);
          case 6:
            return this.createAudio(e);
          case 13:
            return this.createCamera(e);
          case 15:
            return this.createFootage(e)
        }
      }, BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.")
      }, BaseRenderer.prototype.createAudio = function(e) {
        return new AudioElement(e, this.globalData, this)
      }, BaseRenderer.prototype.createFootage = function(e) {
        return new FootageElement(e, this.globalData, this)
      }, BaseRenderer.prototype.buildAllItems = function() {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1) this.buildItem(e);
        this.checkPendingElements()
      }, BaseRenderer.prototype.includeLayers = function(e) {
        var t;
        this.completeLayers = !1;
        var r, n = e.length,
          i = this.layers.length;
        for (t = 0; t < n; t += 1)
          for (r = 0; r < i;) {
            if (this.layers[r].id === e[t].id) {
              this.layers[r] = e[t];
              break
            }
            r += 1
          }
      }, BaseRenderer.prototype.setProjectInterface = function(e) {
        this.globalData.projectInterface = e
      }, BaseRenderer.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems()
      }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
        for (var n = this.elements, i = this.layers, a = 0, o = i.length; a < o;) i[a].ind == t && (n[a] && n[a] !== !0 ? (r.push(n[a]), n[a].setAsParent(), i[a].parent !== void 0 ? this.buildElementParenting(e, i[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
      }, BaseRenderer.prototype.addPendingElement = function(e) {
        this.pendingElements.push(e)
      }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1)
          if (e[t].xt) {
            var n = this.createComp(e[t]);
            n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
          }
      }, BaseRenderer.prototype.getElementById = function(e) {
        var t, r = this.elements.length;
        for (t = 0; t < r; t += 1)
          if (this.elements[t].data.ind === e) return this.elements[t];
        return null
      }, BaseRenderer.prototype.getElementByPath = function(e) {
        var t, r = e.shift();
        if (typeof r == "number") t = this.elements[r];
        else {
          var n, i = this.elements.length;
          for (n = 0; n < i; n += 1)
            if (this.elements[n].data.nm === r) {
              t = this.elements[n];
              break
            }
        }
        return e.length === 0 ? t : t.getElementByPath(e)
      }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
        this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
          w: e.w,
          h: e.h
        }
      };
      var effectTypes = {
        TRANSFORM_EFFECT: "transformEFfect"
      };

      function TransformElement() {}

      function MaskElement(e, t, r) {
        this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
        var n, i, a = this.globalData.defs,
          o = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(o), this.solidPath = "";
        var s, l, f, u, p, g, d = this.masksProperties,
          h = 0,
          m = [],
          c = createElementID(),
          y = "clipPath",
          v = "clip-path";
        for (n = 0; n < o; n += 1)
          if ((d[n].mode !== "a" && d[n].mode !== "n" || d[n].inv || d[n].o.k !== 100 || d[n].o.x) && (y = "mask", v = "mask"), d[n].mode !== "s" && d[n].mode !== "i" || h !== 0 ? f = null : ((f = createNS("rect")).setAttribute("fill", "#ffffff"), f.setAttribute("width", this.element.comp.data.w || 0), f.setAttribute("height", this.element.comp.data.h || 0), m.push(f)), i = createNS("path"), d[n].mode === "n") this.viewData[n] = {
            op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
            elem: i,
            lastPath: ""
          }, a.appendChild(i);
          else {
            var E;
            if (h += 1, i.setAttribute("fill", d[n].mode === "s" ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), d[n].x.k !== 0 ? (y = "mask", v = "mask", g = PropertyFactory.getProp(this.element, d[n].x, 0, null, this.element), E = createElementID(), (u = createNS("filter")).setAttribute("id", E), (p = createNS("feMorphology")).setAttribute("operator", "erode"), p.setAttribute("in", "SourceGraphic"), p.setAttribute("radius", "0"), u.appendChild(p), a.appendChild(u), i.setAttribute("stroke", d[n].mode === "s" ? "#000000" : "#ffffff")) : (p = null, g = null), this.storedData[n] = {
                elem: i,
                x: g,
                expan: p,
                lastPath: "",
                lastOperator: "",
                filterId: E,
                lastRadius: 0
              }, d[n].mode === "i") {
              l = m.length;
              var b = createNS("g");
              for (s = 0; s < l; s += 1) b.appendChild(m[s]);
              var _ = createNS("mask");
              _.setAttribute("mask-type", "alpha"), _.setAttribute("id", c + "_" + h), _.appendChild(i), a.appendChild(_), b.setAttribute("mask", "url(" + getLocationHref() + "#" + c + "_" + h + ")"), m.length = 0, m.push(b)
            } else m.push(i);
            d[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
              elem: i,
              lastPath: "",
              op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
              invRect: f
            }, this.viewData[n].prop.k || this.drawPath(d[n], this.viewData[n].prop.v, this.viewData[n])
          } for (this.maskElement = createNS(y), o = m.length, n = 0; n < o; n += 1) this.maskElement.appendChild(m[n]);
        h > 0 && (this.maskElement.setAttribute("id", c), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + c + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
      }
      TransformElement.prototype = {
        initTransform: function() {
          var e = new Matrix;
          this.finalTransform = {
            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
              o: 0
            },
            _matMdf: !1,
            _localMatMdf: !1,
            _opMdf: !1,
            mat: e,
            localMat: e,
            localOpacity: 1
          }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
        },
        renderTransform: function() {
          if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
            var e, t = this.finalTransform.mat,
              r = 0,
              n = this.hierarchy.length;
            if (!this.finalTransform._matMdf)
              for (; r < n;) {
                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = !0;
                  break
                }
                r += 1
              }
            if (this.finalTransform._matMdf)
              for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < n; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
          }
          this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
        },
        renderLocalTransform: function() {
          if (this.localTransforms) {
            var e = 0,
              t = this.localTransforms.length;
            if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
              for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
            if (this.finalTransform._localMatMdf) {
              var r = this.finalTransform.localMat;
              for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
                var n = this.localTransforms[e].matrix;
                r.multiply(n)
              }
              r.multiply(this.finalTransform.mat)
            }
            if (this.finalTransform._opMdf) {
              var i = this.finalTransform.localOpacity;
              for (e = 0; e < t; e += 1) i *= .01 * this.localTransforms[e].opacity;
              this.finalTransform.localOpacity = i
            }
          }
        },
        searchEffectTransforms: function() {
          if (this.renderableEffectsManager) {
            var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
            if (e.length) {
              this.localTransforms = [], this.finalTransform.localMat = new Matrix;
              var t = 0,
                r = e.length;
              for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
            }
          }
        },
        globalToLocal: function(e) {
          var t = [];
          t.push(this.finalTransform);
          for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && t.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
          var a, o = t.length;
          for (r = 0; r < o; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
          return e
        },
        mHelper: new Matrix
      }, MaskElement.prototype.getMaskProperty = function(e) {
        return this.viewData[e].prop
      }, MaskElement.prototype.renderFrame = function(e) {
        var t, r = this.element.finalTransform.mat,
          n = this.masksProperties.length;
        for (t = 0; t < n; t += 1)
          if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), this.masksProperties[t].mode !== "n" && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
            var i = this.storedData[t].expan;
            this.storedData[t].x.v < 0 ? (this.storedData[t].lastOperator !== "erode" && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : (this.storedData[t].lastOperator !== "dilate" && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
          }
      }, MaskElement.prototype.getMaskelement = function() {
        return this.maskElement
      }, MaskElement.prototype.createLayerSolidPath = function() {
        var e = "M0,0 ";
        return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " "
      }, MaskElement.prototype.drawPath = function(e, t, r) {
        var n, i, a = " M" + t.v[0][0] + "," + t.v[0][1];
        for (i = t._length, n = 1; n < i; n += 1) a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[n][0] + "," + t.i[n][1] + " " + t.v[n][0] + "," + t.v[n][1];
        if (t.c && i > 1 && (a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
          var o = "";
          r.elem && (t.c && (o = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", o)), r.lastPath = a
        }
      }, MaskElement.prototype.destroy = function() {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
      };
      var filtersFactory = function() {
          var e = {};
          return e.createFilter = function(t, r) {
            var n = createNS("filter");
            return n.setAttribute("id", t), r !== !0 && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n
          }, e.createAlphaToLuminanceFilter = function() {
            var t = createNS("feColorMatrix");
            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
          }, e
        }(),
        featureSupport = function() {
          var e = {
            maskType: !0,
            svgLumaHidden: !0,
            offscreenCanvas: typeof OffscreenCanvas < "u"
          };
          return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
        }(),
        registeredEffects$1 = {},
        idPrefix = "filter_result_";

      function SVGEffects(e) {
        var t, r, n = "SourceGraphic",
          i = e.data.ef ? e.data.ef.length : 0,
          a = createElementID(),
          o = filtersFactory.createFilter(a, !0),
          s = 0;
        for (this.filters = [], t = 0; t < i; t += 1) {
          r = null;
          var l = e.data.ef[t].ty;
          registeredEffects$1[l] && (r = new registeredEffects$1[l].effect(o, e.effectsManager.effectElements[t], e, idPrefix + s, n), n = idPrefix + s, registeredEffects$1[l].countsAsEffect && (s += 1)), r && this.filters.push(r)
        }
        s && (e.globalData.defs.appendChild(o), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
      }

      function registerEffect$1(e, t, r) {
        registeredEffects$1[e] = {
          effect: t,
          countsAsEffect: r
        }
      }

      function SVGBaseElement() {}

      function HierarchyElement() {}

      function RenderableDOMElement() {}

      function IImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
          top: 0,
          left: 0,
          width: this.assetData.w,
          height: this.assetData.h
        }
      }

      function ProcessedElement(e, t) {
        this.elem = e, this.pos = t
      }

      function IShapeElement() {}
      SVGEffects.prototype.renderFrame = function(e) {
        var t, r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
      }, SVGEffects.prototype.getEffects = function(e) {
        var t, r = this.filters.length,
          n = [];
        for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
        return n
      }, SVGBaseElement.prototype = {
        initRendererElement: function() {
          this.layerElement = createNS("g")
        },
        createContainerElements: function() {
          this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
          var e = null;
          if (this.data.td) {
            this.matteMasks = {};
            var t = createNS("g");
            t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
          } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
          if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
            var r = createNS("clipPath"),
              n = createNS("path");
            n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var i = createElementID();
            if (r.setAttribute("id", i), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
              var a = createNS("g");
              a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
            } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
          }
          this.data.bm !== 0 && this.setBlendMode()
        },
        renderElement: function() {
          this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
        },
        destroyBaseElement: function() {
          this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
        },
        getBaseElement: function() {
          return this.data.hd ? null : this.baseElement
        },
        createRenderableComponents: function() {
          this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
        },
        getMatte: function(e) {
          if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
            var t, r, n, i, a = this.layerId + "_" + e;
            if (e === 1 || e === 3) {
              var o = createNS("mask");
              o.setAttribute("id", a), o.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(n), this.globalData.defs.appendChild(o), featureSupport.maskType || e !== 1 || (o.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(n), o.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
            } else if (e === 2) {
              var s = createNS("mask");
              s.setAttribute("id", a), s.setAttribute("mask-type", "alpha");
              var l = createNS("g");
              s.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
              var f = createNS("feComponentTransfer");
              f.setAttribute("in", "SourceGraphic"), r.appendChild(f);
              var u = createNS("feFuncA");
              u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), f.appendChild(u), this.globalData.defs.appendChild(r);
              var p = createNS("rect");
              p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(p), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(p), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(s)
            }
            this.matteMasks[e] = a
          }
          return this.matteMasks[e]
        },
        setMatte: function(e) {
          this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
        }
      }, HierarchyElement.prototype = {
        initHierarchy: function() {
          this.hierarchy = [], this._isParent = !1, this.checkParenting()
        },
        setHierarchy: function(e) {
          this.hierarchy = e
        },
        setAsParent: function() {
          this._isParent = !0
        },
        checkParenting: function() {
          this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
        }
      }, extendPrototype([RenderableElement, createProxyFunction({
        initElement: function(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
        },
        hide: function() {
          this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
        },
        show: function() {
          this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
        },
        renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        renderInnerContent: function() {},
        prepareFrame: function(e) {
          this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
        },
        destroy: function() {
          this.innerElem = null, this.destroyBaseElement()
        }
      })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
        var e = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
      }, IImageElement.prototype.sourceRectAtTime = function() {
        return this.sourceRect
      }, IShapeElement.prototype = {
        addShapeToModifiers: function(e) {
          var t, r = this.shapeModifiers.length;
          for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
        },
        isShapeInAnimatedModifiers: function(e) {
          for (var t = this.shapeModifiers.length; 0 < t;)
            if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
          return !1
        },
        renderModifiers: function() {
          if (this.shapeModifiers.length) {
            var e, t = this.shapes.length;
            for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
            for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
          }
        },
        searchProcessedElement: function(e) {
          for (var t = this.processedElements, r = 0, n = t.length; r < n;) {
            if (t[r].elem === e) return t[r].pos;
            r += 1
          }
          return 0
        },
        addProcessedElement: function(e, t) {
          for (var r = this.processedElements, n = r.length; n;)
            if (r[n -= 1].elem === e) return void(r[n].pos = t);
          r.push(new ProcessedElement(e, t))
        },
        prepareFrame: function(e) {
          this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
        }
      };
      var lineCapEnum = {
          1: "butt",
          2: "round",
          3: "square"
        },
        lineJoinEnum = {
          1: "miter",
          2: "round",
          3: "bevel"
        };

      function SVGShapeData(e, t, r) {
        this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
        for (var n = 0, i = e.length; n < i;) {
          if (e[n].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break
          }
          n += 1
        }
      }

      function SVGStyleData(e, t) {
        this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null
      }

      function DashProperty(e, t, r, n) {
        var i;
        this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
        var a, o = t.length || 0;
        for (i = 0; i < o; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
          n: t[i].n,
          p: a
        };
        this.k || this.getValue(!0), this._isAnimated = this.k
      }

      function SVGStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
      }

      function SVGFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
      }

      function SVGNoStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
      }

      function GradientProperty(e, t, r) {
        this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
        var n = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
        this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
      }

      function SVGGradientFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
      }

      function SVGGradientStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
      }

      function ShapeGroupData() {
        this.it = [], this.prevViewData = [], this.gr = createNS("g")
      }

      function SVGTransformData(e, t, r) {
        this.transform = {
          mProps: e,
          op: t,
          container: r
        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
      }
      SVGShapeData.prototype.setAsAnimated = function() {
        this._isAnimated = !0
      }, SVGStyleData.prototype.reset = function() {
        this.d = "", this._mdf = !1
      }, DashProperty.prototype.getValue = function(e) {
        if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
          var t = 0,
            r = this.dataProps.length;
          for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1) this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
        }
      }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(e, t) {
        for (var r = 0, n = this.o.length / 2; r < n;) {
          if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
          r += 1
        }
        return !0
      }, GradientProperty.prototype.checkCollapsable = function() {
        if (this.o.length / 2 != this.c.length / 4) return !1;
        if (this.data.k.k[0].s)
          for (var e = 0, t = this.data.k.k.length; e < t;) {
            if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
            e += 1
          } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
        return !0
      }, GradientProperty.prototype.getValue = function(e) {
        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
          var t, r, n, i = 4 * this.data.p;
          for (t = 0; t < i; t += 1) r = t % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[t] * r), this.c[t] !== n && (this.c[t] = n, this._cmdf = !e);
          if (this.o.length)
            for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) r = t % 2 == 0 ? 100 : 1, n = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== n && (this.o[t - 4 * this.data.p] = n, this._omdf = !e);
          this._mdf = !e
        }
      }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
        this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
          k: 0
        }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
          k: 0
        }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
      }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
        var r = createElementID(),
          n = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
        var i, a, o, s = [];
        for (o = 4 * t.g.p, a = 0; a < o; a += 4) i = createNS("stop"), n.appendChild(i), s.push(i);
        e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = n, this.cst = s
      }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
        if (this.g._hasOpacity && !this.g._collapsable) {
          var r, n, i, a = createNS("mask"),
            o = createNS("path");
          a.appendChild(o);
          var s = createElementID(),
            l = createElementID();
          a.setAttribute("id", l);
          var f = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
          f.setAttribute("id", s), f.setAttribute("spreadMethod", "pad"), f.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
          var u = this.stops;
          for (n = 4 * e.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), f.appendChild(r), u.push(r);
          o.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + s + ")"), e.ty === "gs" && (o.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), o.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && o.setAttribute("stroke-miterlimit", e.ml)), this.of = f, this.ms = a, this.ost = u, this.maskId = l, t.msElem = o
        }
      }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
      var buildShapeString = function(e, t, r, n) {
          if (t === 0) return "";
          var i, a = e.o,
            o = e.i,
            s = e.v,
            l = " M" + n.applyToPointStringified(s[0][0], s[0][1]);
          for (i = 1; i < t; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]);
          return r && t && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]), l += "z"), l
        },
        SVGElementsRenderer = function() {
          var e = new Matrix,
            t = new Matrix;

          function r(f, u, p) {
            (p || u.transform.op._mdf) && u.transform.container.setAttribute("opacity", u.transform.op.v), (p || u.transform.mProps._mdf) && u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS())
          }

          function n() {}

          function i(f, u, p) {
            var g, d, h, m, c, y, v, E, b, _, A = u.styles.length,
              S = u.lvl;
            for (y = 0; y < A; y += 1) {
              if (m = u.sh._mdf || p, u.styles[y].lvl < S) {
                for (E = t.reset(), b = S - u.styles[y].lvl, _ = u.transformers.length - 1; !m && b > 0;) m = u.transformers[_].mProps._mdf || m, b -= 1, _ -= 1;
                if (m)
                  for (b = S - u.styles[y].lvl, _ = u.transformers.length - 1; b > 0;) E.multiply(u.transformers[_].mProps.v), b -= 1, _ -= 1
              } else E = e;
              if (d = (v = u.sh.paths)._length, m) {
                for (h = "", g = 0; g < d; g += 1)(c = v.shapes[g]) && c._length && (h += buildShapeString(c, c._length, c.c, E));
                u.caches[y] = h
              } else h = u.caches[y];
              u.styles[y].d += f.hd === !0 ? "" : h, u.styles[y]._mdf = m || u.styles[y]._mdf
            }
          }

          function a(f, u, p) {
            var g = u.style;
            (u.c._mdf || p) && g.pElem.setAttribute("fill", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || p) && g.pElem.setAttribute("fill-opacity", u.o.v)
          }

          function o(f, u, p) {
            s(f, u, p), l(f, u, p)
          }

          function s(f, u, p) {
            var g, d, h, m, c, y = u.gf,
              v = u.g._hasOpacity,
              E = u.s.v,
              b = u.e.v;
            if (u.o._mdf || p) {
              var _ = f.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              u.style.pElem.setAttribute(_, u.o.v)
            }
            if (u.s._mdf || p) {
              var A = f.t === 1 ? "x1" : "cx",
                S = A === "x1" ? "y1" : "cy";
              y.setAttribute(A, E[0]), y.setAttribute(S, E[1]), v && !u.g._collapsable && (u.of.setAttribute(A, E[0]), u.of.setAttribute(S, E[1]))
            }
            if (u.g._cmdf || p) {
              g = u.cst;
              var x = u.g.c;
              for (h = g.length, d = 0; d < h; d += 1)(m = g[d]).setAttribute("offset", x[4 * d] + "%"), m.setAttribute("stop-color", "rgb(" + x[4 * d + 1] + "," + x[4 * d + 2] + "," + x[4 * d + 3] + ")")
            }
            if (v && (u.g._omdf || p)) {
              var L = u.g.o;
              for (h = (g = u.g._collapsable ? u.cst : u.ost).length, d = 0; d < h; d += 1) m = g[d], u.g._collapsable || m.setAttribute("offset", L[2 * d] + "%"), m.setAttribute("stop-opacity", L[2 * d + 1])
            }
            if (f.t === 1)(u.e._mdf || p) && (y.setAttribute("x2", b[0]), y.setAttribute("y2", b[1]), v && !u.g._collapsable && (u.of.setAttribute("x2", b[0]), u.of.setAttribute("y2", b[1])));
            else if ((u.s._mdf || u.e._mdf || p) && (c = Math.sqrt(Math.pow(E[0] - b[0], 2) + Math.pow(E[1] - b[1], 2)), y.setAttribute("r", c), v && !u.g._collapsable && u.of.setAttribute("r", c)), u.e._mdf || u.h._mdf || u.a._mdf || p) {
              c || (c = Math.sqrt(Math.pow(E[0] - b[0], 2) + Math.pow(E[1] - b[1], 2)));
              var w = Math.atan2(b[1] - E[1], b[0] - E[0]),
                C = u.h.v;
              C >= 1 ? C = .99 : C <= -1 && (C = -.99);
              var k = c * C,
                M = Math.cos(w + u.a.v) * k + E[0],
                F = Math.sin(w + u.a.v) * k + E[1];
              y.setAttribute("fx", M), y.setAttribute("fy", F), v && !u.g._collapsable && (u.of.setAttribute("fx", M), u.of.setAttribute("fy", F))
            }
          }

          function l(f, u, p) {
            var g = u.style,
              d = u.d;
            d && (d._mdf || p) && d.dashStr && (g.pElem.setAttribute("stroke-dasharray", d.dashStr), g.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), u.c && (u.c._mdf || p) && g.pElem.setAttribute("stroke", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || p) && g.pElem.setAttribute("stroke-opacity", u.o.v), (u.w._mdf || p) && (g.pElem.setAttribute("stroke-width", u.w.v), g.msElem && g.msElem.setAttribute("stroke-width", u.w.v))
          }
          return {
            createRenderFunction: function(f) {
              switch (f.ty) {
                case "fl":
                  return a;
                case "gf":
                  return s;
                case "gs":
                  return o;
                case "st":
                  return l;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                  return i;
                case "tr":
                  return r;
                case "no":
                  return n;
                default:
                  return null
              }
            }
          }
        }();

      function SVGShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
      }

      function LetterProps(e, t, r, n, i, a) {
        this.o = e, this.sw = t, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
          o: !0,
          sw: !!t,
          sc: !!r,
          fc: !!n,
          m: !0,
          p: !0
        }
      }

      function TextProperty(e, t) {
        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
          ascent: 0,
          boxWidth: this.defaultBoxWidth,
          f: "",
          fStyle: "",
          fWeight: "",
          fc: "",
          j: "",
          justifyOffset: "",
          l: [],
          lh: 0,
          lineWidths: [],
          ls: "",
          of: "",
          s: "",
          sc: "",
          sw: 0,
          t: 0,
          tr: 0,
          sz: 0,
          ps: null,
          fillColorAnim: !1,
          strokeColorAnim: !1,
          strokeWidthAnim: !1,
          yOffset: 0,
          finalSize: 0,
          finalText: [],
          finalLineHeight: 0,
          __complete: !1
        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
      }, SVGShapeElement.prototype.filterUniqueShapes = function() {
        var e, t, r, n, i = this.shapes.length,
          a = this.stylesList.length,
          o = [],
          s = !1;
        for (r = 0; r < a; r += 1) {
          for (n = this.stylesList[r], s = !1, o.length = 0, e = 0; e < i; e += 1)(t = this.shapes[e]).styles.indexOf(n) !== -1 && (o.push(t), s = t._isAnimated || s);
          o.length > 1 && s && this.setShapesAsAnimated(o)
        }
      }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t].setAsAnimated()
      }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
        var r, n = new SVGStyleData(e, t),
          i = n.pElem;
        return e.ty === "st" ? r = new SVGStrokeStyleData(this, e, n) : e.ty === "fl" ? r = new SVGFillStyleData(this, e, n) : e.ty === "gf" || e.ty === "gs" ? (r = new(e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : e.ty === "no" && (r = new SVGNoStyleData(this, e, n)), e.ty !== "st" && e.ty !== "gs" || (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), i.setAttribute("fill-opacity", "0"), e.lj === 1 && i.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(n), this.addToAnimatedContents(e, r), r
      }, SVGShapeElement.prototype.createGroupElement = function(e) {
        var t = new ShapeGroupData;
        return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
      }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
        var r = TransformPropertyFactory.getTransformProperty(this, e, this),
          n = new SVGTransformData(r, r.o, t);
        return this.addToAnimatedContents(e, n), n
      }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
        var n = 4;
        e.ty === "rc" ? n = 5 : e.ty === "el" ? n = 6 : e.ty === "sr" && (n = 7);
        var i = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, n, this));
        return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i
      }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
        for (var r = 0, n = this.animatedContents.length; r < n;) {
          if (this.animatedContents[r].element === t) return;
          r += 1
        }
        this.animatedContents.push({
          fn: SVGElementsRenderer.createRenderFunction(e),
          element: t,
          data: e
        })
      }, SVGShapeElement.prototype.setElementStyles = function(e) {
        var t, r = e.styles,
          n = this.stylesList.length;
        for (t = 0; t < n; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
      }, SVGShapeElement.prototype.reloadShapes = function() {
        var e;
        this._isFirstFrame = !0;
        var t = this.itemsData.length;
        for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
        this.renderModifiers()
      }, SVGShapeElement.prototype.searchShapes = function(e, t, r, n, i, a, o) {
        var s, l, f, u, p, g, d = [].concat(a),
          h = e.length - 1,
          m = [],
          c = [];
        for (s = h; s >= 0; s -= 1) {
          if ((g = this.searchProcessedElement(e[s])) ? t[s] = r[g - 1] : e[s]._render = o, e[s].ty === "fl" || e[s].ty === "st" || e[s].ty === "gf" || e[s].ty === "gs" || e[s].ty === "no") g ? t[s].style.closed = !1 : t[s] = this.createStyleElement(e[s], i), e[s]._render && t[s].style.pElem.parentNode !== n && n.appendChild(t[s].style.pElem), m.push(t[s].style);
          else if (e[s].ty === "gr") {
            if (g)
              for (f = t[s].it.length, l = 0; l < f; l += 1) t[s].prevViewData[l] = t[s].it[l];
            else t[s] = this.createGroupElement(e[s]);
            this.searchShapes(e[s].it, t[s].it, t[s].prevViewData, t[s].gr, i + 1, d, o), e[s]._render && t[s].gr.parentNode !== n && n.appendChild(t[s].gr)
          } else e[s].ty === "tr" ? (g || (t[s] = this.createTransformElement(e[s], n)), u = t[s].transform, d.push(u)) : e[s].ty === "sh" || e[s].ty === "rc" || e[s].ty === "el" || e[s].ty === "sr" ? (g || (t[s] = this.createShapeElement(e[s], d, i)), this.setElementStyles(t[s])) : e[s].ty === "tm" || e[s].ty === "rd" || e[s].ty === "ms" || e[s].ty === "pb" || e[s].ty === "zz" || e[s].ty === "op" ? (g ? (p = t[s]).closed = !1 : ((p = ShapeModifiers.getModifier(e[s].ty)).init(this, e[s]), t[s] = p, this.shapeModifiers.push(p)), c.push(p)) : e[s].ty === "rp" && (g ? (p = t[s]).closed = !0 : (p = ShapeModifiers.getModifier(e[s].ty), t[s] = p, p.init(this, e, s, t), this.shapeModifiers.push(p), o = !1), c.push(p));
          this.addProcessedElement(e[s], s + 1)
        }
        for (h = m.length, s = 0; s < h; s += 1) m[s].closed = !0;
        for (h = c.length, s = 0; s < h; s += 1) c[s].closed = !0
      }, SVGShapeElement.prototype.renderInnerContent = function() {
        var e;
        this.renderModifiers();
        var t = this.stylesList.length;
        for (e = 0; e < t; e += 1) this.stylesList[e].reset();
        for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
      }, SVGShapeElement.prototype.renderShape = function() {
        var e, t, r = this.animatedContents.length;
        for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && t.data !== !0 && t.fn(t.data, t.element, this._isFirstFrame)
      }, SVGShapeElement.prototype.destroy = function() {
        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
      }, LetterProps.prototype.update = function(e, t, r, n, i, a) {
        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
        var o = !1;
        return this.o !== e && (this.o = e, this._mdf.o = !0, o = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, o = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, o = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, o = !0), this.m !== i && (this.m = i, this._mdf.m = !0, o = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, o = !0), o
      }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
      }, TextProperty.prototype.setCurrentData = function(e) {
        e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
      }, TextProperty.prototype.searchProperty = function() {
        return this.searchKeyframes()
      }, TextProperty.prototype.searchKeyframes = function() {
        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
      }, TextProperty.prototype.addEffect = function(e) {
        this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.getValue = function(e) {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
          this.currentData.t = this.data.d.k[this.keysIndex].s.t;
          var t = this.currentData,
            r = this.keysIndex;
          if (this.lock) this.setCurrentData(this.currentData);
          else {
            var n;
            this.lock = !0, this._mdf = !1;
            var i = this.effectsSequence.length,
              a = e || this.data.d.k[this.keysIndex].s;
            for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
            t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
          }
        }
      }, TextProperty.prototype.getKeyframeValue = function() {
        for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, n = e.length; r <= n - 1 && !(r === n - 1 || e[r + 1].t > t);) r += 1;
        return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
      }, TextProperty.prototype.buildFinalText = function(e) {
        for (var t, r, n = [], i = 0, a = e.length, o = !1, s = !1, l = ""; i < a;) o = s, s = !1, t = e.charCodeAt(i), l = e.charAt(i), FontManager.isCombinedCharacter(t) ? o = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, i) ? l = e.substr(i, 14) : (r = e.charCodeAt(i + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (l = e.substr(i, 2), o = !0) : l = FontManager.isFlagEmoji(e.substr(i, 4)) ? e.substr(i, 4) : e.substr(i, 2)) : t > 56319 ? (r = e.charCodeAt(i + 1), FontManager.isVariationSelector(t) && (o = !0)) : FontManager.isZeroWidthJoiner(t) && (o = !0, s = !0), o ? (n[n.length - 1] += l, o = !1) : n.push(l), i += l.length;
        return n
      }, TextProperty.prototype.completeTextData = function(e) {
        e.__complete = !0;
        var t, r, n, i, a, o, s, l = this.elem.globalData.fontManager,
          f = this.data,
          u = [],
          p = 0,
          g = f.m.g,
          d = 0,
          h = 0,
          m = 0,
          c = [],
          y = 0,
          v = 0,
          E = l.getFontByName(e.f),
          b = 0,
          _ = getFontProperties(E);
        e.fWeight = _.weight, e.fStyle = _.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
        var A, S = e.tr / 1e3 * e.finalSize;
        if (e.sz)
          for (var x, L, w = !0, C = e.sz[0], k = e.sz[1]; w;) {
            x = 0, y = 0, r = (L = this.buildFinalText(e.t)).length, S = e.tr / 1e3 * e.finalSize;
            var M = -1;
            for (t = 0; t < r; t += 1) A = L[t].charCodeAt(0), n = !1, L[t] === " " ? M = t : A !== 13 && A !== 3 || (y = 0, n = !0, x += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (s = l.getCharData(L[t], E.fStyle, E.fFamily), b = n ? 0 : s.w * e.finalSize / 100) : b = l.measureText(L[t], e.f, e.finalSize), y + b > C && L[t] !== " " ? (M === -1 ? r += 1 : t = M, x += e.finalLineHeight || 1.2 * e.finalSize, L.splice(t, M === t ? 1 : 0, "\r"), M = -1, y = 0) : (y += b, y += S);
            x += E.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && k < x ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = L, r = e.finalText.length, w = !1)
          }
        y = -S, b = 0;
        var F, U = 0;
        for (t = 0; t < r; t += 1)
          if (n = !1, (A = (F = e.finalText[t]).charCodeAt(0)) === 13 || A === 3 ? (U = 0, c.push(y), v = y > v ? y : v, y = -2 * S, i = "", n = !0, m += 1) : i = F, l.chars ? (s = l.getCharData(F, E.fStyle, l.getFontByName(e.f).fFamily), b = n ? 0 : s.w * e.finalSize / 100) : b = l.measureText(i, e.f, e.finalSize), F === " " ? U += b + S : (y += b + S + U, U = 0), u.push({
              l: b,
              an: b,
              add: d,
              n,
              anIndexes: [],
              val: i,
              line: m,
              animatorJustifyOffset: 0
            }), g == 2) {
            if (d += b, i === "" || i === " " || t === r - 1) {
              for (i !== "" && i !== " " || (d -= b); h <= t;) u[h].an = d, u[h].ind = p, u[h].extra = b, h += 1;
              p += 1, d = 0
            }
          } else if (g == 3) {
          if (d += b, i === "" || t === r - 1) {
            for (i === "" && (d -= b); h <= t;) u[h].an = d, u[h].ind = p, u[h].extra = b, h += 1;
            d = 0, p += 1
          }
        } else u[p].ind = p, u[p].extra = 0, p += 1;
        if (e.l = u, v = y > v ? y : v, c.push(y), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
        else switch (e.boxWidth = v, e.j) {
          case 1:
            e.justifyOffset = -e.boxWidth;
            break;
          case 2:
            e.justifyOffset = -e.boxWidth / 2;
            break;
          default:
            e.justifyOffset = 0
        }
        e.lineWidths = c;
        var X, ne, P, G, J = f.a;
        o = J.length;
        var D = [];
        for (a = 0; a < o; a += 1) {
          for ((X = J[a]).a.sc && (e.strokeColorAnim = !0), X.a.sw && (e.strokeWidthAnim = !0), (X.a.fc || X.a.fh || X.a.fs || X.a.fb) && (e.fillColorAnim = !0), G = 0, P = X.s.b, t = 0; t < r; t += 1)(ne = u[t]).anIndexes[a] = G, (P == 1 && ne.val !== "" || P == 2 && ne.val !== "" && ne.val !== " " || P == 3 && (ne.n || ne.val == " " || t == r - 1) || P == 4 && (ne.n || t == r - 1)) && (X.s.rn === 1 && D.push(G), G += 1);
          f.a[a].s.totalChars = G;
          var Q, N = -1;
          if (X.s.rn === 1)
            for (t = 0; t < r; t += 1) N != (ne = u[t]).anIndexes[a] && (N = ne.anIndexes[a], Q = D.splice(Math.floor(Math.random() * D.length), 1)[0]), ne.anIndexes[a] = Q
        }
        e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = E.ascent * e.finalSize / 100
      }, TextProperty.prototype.updateDocumentData = function(e, t) {
        t = t === void 0 ? this.keysIndex : t;
        var r = this.copyData({}, this.data.d.k[t].s);
        r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.recalculate = function(e) {
        var t = this.data.d.k[e].s;
        t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
      }, TextProperty.prototype.canResizeFont = function(e) {
        this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.setMinimumFontSize = function(e) {
        this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
      };
      var TextSelectorProp = function() {
        var e = Math.max,
          t = Math.min,
          r = Math.floor;

        function n(i, a) {
          this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = i, this.comp = i.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(i), this.s = PropertyFactory.getProp(i, a.s || {
            k: 0
          }, 0, 0, this), this.e = "e" in a ? PropertyFactory.getProp(i, a.e, 0, 0, this) : {
            v: 100
          }, this.o = PropertyFactory.getProp(i, a.o || {
            k: 0
          }, 0, 0, this), this.xe = PropertyFactory.getProp(i, a.xe || {
            k: 0
          }, 0, 0, this), this.ne = PropertyFactory.getProp(i, a.ne || {
            k: 0
          }, 0, 0, this), this.sm = PropertyFactory.getProp(i, a.sm || {
            k: 100
          }, 0, 0, this), this.a = PropertyFactory.getProp(i, a.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
        }
        return n.prototype = {
          getMult: function(i) {
            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
            var a = 0,
              o = 0,
              s = 1,
              l = 1;
            this.ne.v > 0 ? a = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : l = 1 + this.xe.v / 100;
            var f = BezierFactory.getBezierEasing(a, o, s, l).get,
              u = 0,
              p = this.finalS,
              g = this.finalE,
              d = this.data.sh;
            if (d === 2) u = f(u = g === p ? i >= g ? 1 : 0 : e(0, t(.5 / (g - p) + (i - p) / (g - p), 1)));
            else if (d === 3) u = f(u = g === p ? i >= g ? 0 : 1 : 1 - e(0, t(.5 / (g - p) + (i - p) / (g - p), 1)));
            else if (d === 4) g === p ? u = 0 : (u = e(0, t(.5 / (g - p) + (i - p) / (g - p), 1))) < .5 ? u *= 2 : u = 1 - 2 * (u - .5), u = f(u);
            else if (d === 5) {
              if (g === p) u = 0;
              else {
                var h = g - p,
                  m = -h / 2 + (i = t(e(0, i + .5 - p), g - p)),
                  c = h / 2;
                u = Math.sqrt(1 - m * m / (c * c))
              }
              u = f(u)
            } else d === 6 ? (g === p ? u = 0 : (i = t(e(0, i + .5 - p), g - p), u = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (g - p))) / 2), u = f(u)) : (i >= r(p) && (u = e(0, t(i - p < 0 ? t(g, 1) - (p - i) : g - i, 1))), u = f(u));
            if (this.sm.v !== 100) {
              var y = .01 * this.sm.v;
              y === 0 && (y = 1e-8);
              var v = .5 - .5 * y;
              u < v ? u = 0 : (u = (u - v) / y) > 1 && (u = 1)
            }
            return u * this.a.v
          },
          getValue: function(i) {
            this.iterateDynamicProperties(), this._mdf = i || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, i && this.data.r === 2 && (this.e.v = this._currentTextLength);
            var a = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
              o = this.o.v / a,
              s = this.s.v / a + o,
              l = this.e.v / a + o;
            if (s > l) {
              var f = s;
              s = l, l = f
            }
            this.finalS = s, this.finalE = l
          }
        }, extendPrototype([DynamicPropertyContainer], n), {
          getTextSelectorProp: function(i, a, o) {
            return new n(i, a, o)
          }
        }
      }();

      function TextAnimatorDataProperty(e, t, r) {
        var n = {
            propType: !1
          },
          i = PropertyFactory.getProp,
          a = t.a;
        this.a = {
          r: a.r ? i(e, a.r, 0, degToRads, r) : n,
          rx: a.rx ? i(e, a.rx, 0, degToRads, r) : n,
          ry: a.ry ? i(e, a.ry, 0, degToRads, r) : n,
          sk: a.sk ? i(e, a.sk, 0, degToRads, r) : n,
          sa: a.sa ? i(e, a.sa, 0, degToRads, r) : n,
          s: a.s ? i(e, a.s, 1, .01, r) : n,
          a: a.a ? i(e, a.a, 1, 0, r) : n,
          o: a.o ? i(e, a.o, 0, .01, r) : n,
          p: a.p ? i(e, a.p, 1, 0, r) : n,
          sw: a.sw ? i(e, a.sw, 0, 0, r) : n,
          sc: a.sc ? i(e, a.sc, 1, 0, r) : n,
          fc: a.fc ? i(e, a.fc, 1, 0, r) : n,
          fh: a.fh ? i(e, a.fh, 0, 0, r) : n,
          fs: a.fs ? i(e, a.fs, 0, .01, r) : n,
          fb: a.fb ? i(e, a.fb, 0, .01, r) : n,
          t: a.t ? i(e, a.t, 0, 0, r) : n
        }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
      }

      function TextAnimatorProperty(e, t, r) {
        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
          alignment: {}
        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
      }

      function ITextElement() {}
      TextAnimatorProperty.prototype.searchProperties = function() {
        var e, t, r = this._textData.a.length,
          n = PropertyFactory.getProp;
        for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
        this._textData.p && "m" in this._textData.p ? (this._pathData = {
          a: n(this._elem, this._textData.p.a, 0, 0, this),
          f: n(this._elem, this._textData.p.f, 0, 0, this),
          l: n(this._elem, this._textData.p.l, 0, 0, this),
          r: n(this._elem, this._textData.p.r, 0, 0, this),
          p: n(this._elem, this._textData.p.p, 0, 0, this),
          m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
      }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
        if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
          this._isFirstFrame = !1;
          var r, n, i, a, o, s, l, f, u, p, g, d, h, m, c, y, v, E, b, _ = this._moreOptions.alignment.v,
            A = this._animatorsData,
            S = this._textData,
            x = this.mHelper,
            L = this._renderType,
            w = this.renderedLetters.length,
            C = e.l;
          if (this._hasMaskedPath) {
            if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
              var k, M = b.v;
              for (this._pathData.r.v && (M = M.reverse()), o = {
                  tLength: 0,
                  segments: []
                }, a = M._length - 1, y = 0, i = 0; i < a; i += 1) k = bez.buildBezierData(M.v[i], M.v[i + 1], [M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]], [M.i[i + 1][0] - M.v[i + 1][0], M.i[i + 1][1] - M.v[i + 1][1]]), o.tLength += k.segmentLength, o.segments.push(k), y += k.segmentLength;
              i = a, b.v.c && (k = bez.buildBezierData(M.v[i], M.v[0], [M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), o.tLength += k.segmentLength, o.segments.push(k), y += k.segmentLength), this._pathData.pi = o
            }
            if (o = this._pathData.pi, s = this._pathData.f.v, g = 0, p = 1, f = 0, u = !0, m = o.segments, s < 0 && b.v.c)
              for (o.tLength < Math.abs(s) && (s = -Math.abs(s) % o.tLength), p = (h = m[g = m.length - 1].points).length - 1; s < 0;) s += h[p].partialLength, (p -= 1) < 0 && (p = (h = m[g -= 1].points).length - 1);
            d = (h = m[g].points)[p - 1], c = (l = h[p]).partialLength
          }
          a = C.length, r = 0, n = 0;
          var F, U, X, ne, P, G = 1.2 * e.finalSize * .714,
            J = !0;
          X = A.length;
          var D, Q, N, T, q, H, B, ee, ae, te, R, Z, ie = -1,
            j = s,
            he = g,
            be = p,
            _e = -1,
            O = "",
            V = this.defaultPropsArray;
          if (e.j === 2 || e.j === 1) {
            var z = 0,
              W = 0,
              K = e.j === 2 ? -.5 : -1,
              Y = 0,
              se = !0;
            for (i = 0; i < a; i += 1)
              if (C[i].n) {
                for (z && (z += W); Y < i;) C[Y].animatorJustifyOffset = z, Y += 1;
                z = 0, se = !0
              } else {
                for (U = 0; U < X; U += 1)(F = A[U].a).t.propType && (se && e.j === 2 && (W += F.t.v * K), (P = A[U].s.getMult(C[i].anIndexes[U], S.a[U].s.totalChars)).length ? z += F.t.v * P[0] * K : z += F.t.v * P * K);
                se = !1
              } for (z && (z += W); Y < i;) C[Y].animatorJustifyOffset = z, Y += 1
          }
          for (i = 0; i < a; i += 1) {
            if (x.reset(), T = 1, C[i].n) r = 0, n += e.yOffset, n += J ? 1 : 0, s = j, J = !1, this._hasMaskedPath && (p = be, d = (h = m[g = he].points)[p - 1], c = (l = h[p]).partialLength, f = 0), O = "", R = "", ae = "", Z = "", V = this.defaultPropsArray;
            else {
              if (this._hasMaskedPath) {
                if (_e !== C[i].line) {
                  switch (e.j) {
                    case 1:
                      s += y - e.lineWidths[C[i].line];
                      break;
                    case 2:
                      s += (y - e.lineWidths[C[i].line]) / 2
                  }
                  _e = C[i].line
                }
                ie !== C[i].ind && (C[ie] && (s += C[ie].extra), s += C[i].an / 2, ie = C[i].ind), s += _[0] * C[i].an * .005;
                var le = 0;
                for (U = 0; U < X; U += 1)(F = A[U].a).p.propType && ((P = A[U].s.getMult(C[i].anIndexes[U], S.a[U].s.totalChars)).length ? le += F.p.v[0] * P[0] : le += F.p.v[0] * P), F.a.propType && ((P = A[U].s.getMult(C[i].anIndexes[U], S.a[U].s.totalChars)).length ? le += F.a.v[0] * P[0] : le += F.a.v[0] * P);
                for (u = !0, this._pathData.a.v && (s = .5 * C[0].an + (y - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * ie / (a - 1), s += this._pathData.f.v); u;) f + c >= s + le || !h ? (v = (s + le - f) / l.partialLength, Q = d.point[0] + (l.point[0] - d.point[0]) * v, N = d.point[1] + (l.point[1] - d.point[1]) * v, x.translate(-_[0] * C[i].an * .005, -_[1] * G * .01), u = !1) : h && (f += l.partialLength, (p += 1) >= h.length && (p = 0, m[g += 1] ? h = m[g].points : b.v.c ? (p = 0, h = m[g = 0].points) : (f -= l.partialLength, h = null)), h && (d = l, c = (l = h[p]).partialLength));
                D = C[i].an / 2 - C[i].add, x.translate(-D, 0, 0)
              } else D = C[i].an / 2 - C[i].add, x.translate(-D, 0, 0), x.translate(-_[0] * C[i].an * .005, -_[1] * G * .01, 0);
              for (U = 0; U < X; U += 1)(F = A[U].a).t.propType && (P = A[U].s.getMult(C[i].anIndexes[U], S.a[U].s.totalChars), r === 0 && e.j === 0 || (this._hasMaskedPath ? P.length ? s += F.t.v * P[0] : s += F.t.v * P : P.length ? r += F.t.v * P[0] : r += F.t.v * P));
              for (e.strokeWidthAnim && (H = e.sw || 0), e.strokeColorAnim && (q = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (B = [e.fc[0], e.fc[1], e.fc[2]]), U = 0; U < X; U += 1)(F = A[U].a).a.propType && ((P = A[U].s.getMult(C[i].anIndexes[U], S.a[U].s.totalChars)).length ? x.translate(-F.a.v[0] * P[0], -F.a.v[1] * P[1], F.a.v[2] * P[2]) : x.translate(-F.a.v[0] * P, -F.a.v[1] * P, F.a.v[2] * P));
              for (U = 0; U < X; U += 1)(F = A[U].a).s.propType && ((P = A[U].s.getMult(C[i].anIndexes[U], S.a[U].s.totalChars)).length ? x.scale(1 + (F.s.v[0] - 1) * P[0], 1 + (F.s.v[1] - 1) * P[1], 1) : x.scale(1 + (F.s.v[0] - 1) * P, 1 + (F.s.v[1] - 1) * P, 1));
              for (U = 0; U < X; U += 1) {
                if (F = A[U].a, P = A[U].s.getMult(C[i].anIndexes[U], S.a[U].s.totalChars), F.sk.propType && (P.length ? x.skewFromAxis(-F.sk.v * P[0], F.sa.v * P[1]) : x.skewFromAxis(-F.sk.v * P, F.sa.v * P)), F.r.propType && (P.length ? x.rotateZ(-F.r.v * P[2]) : x.rotateZ(-F.r.v * P)), F.ry.propType && (P.length ? x.rotateY(F.ry.v * P[1]) : x.rotateY(F.ry.v * P)), F.rx.propType && (P.length ? x.rotateX(F.rx.v * P[0]) : x.rotateX(F.rx.v * P)), F.o.propType && (P.length ? T += (F.o.v * P[0] - T) * P[0] : T += (F.o.v * P - T) * P), e.strokeWidthAnim && F.sw.propType && (P.length ? H += F.sw.v * P[0] : H += F.sw.v * P), e.strokeColorAnim && F.sc.propType)
                  for (ee = 0; ee < 3; ee += 1) P.length ? q[ee] += (F.sc.v[ee] - q[ee]) * P[0] : q[ee] += (F.sc.v[ee] - q[ee]) * P;
                if (e.fillColorAnim && e.fc) {
                  if (F.fc.propType)
                    for (ee = 0; ee < 3; ee += 1) P.length ? B[ee] += (F.fc.v[ee] - B[ee]) * P[0] : B[ee] += (F.fc.v[ee] - B[ee]) * P;
                  F.fh.propType && (B = P.length ? addHueToRGB(B, F.fh.v * P[0]) : addHueToRGB(B, F.fh.v * P)), F.fs.propType && (B = P.length ? addSaturationToRGB(B, F.fs.v * P[0]) : addSaturationToRGB(B, F.fs.v * P)), F.fb.propType && (B = P.length ? addBrightnessToRGB(B, F.fb.v * P[0]) : addBrightnessToRGB(B, F.fb.v * P))
                }
              }
              for (U = 0; U < X; U += 1)(F = A[U].a).p.propType && (P = A[U].s.getMult(C[i].anIndexes[U], S.a[U].s.totalChars), this._hasMaskedPath ? P.length ? x.translate(0, F.p.v[1] * P[0], -F.p.v[2] * P[1]) : x.translate(0, F.p.v[1] * P, -F.p.v[2] * P) : P.length ? x.translate(F.p.v[0] * P[0], F.p.v[1] * P[1], -F.p.v[2] * P[2]) : x.translate(F.p.v[0] * P, F.p.v[1] * P, -F.p.v[2] * P));
              if (e.strokeWidthAnim && (ae = H < 0 ? 0 : H), e.strokeColorAnim && (te = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"), e.fillColorAnim && e.fc && (R = "rgb(" + Math.round(255 * B[0]) + "," + Math.round(255 * B[1]) + "," + Math.round(255 * B[2]) + ")"), this._hasMaskedPath) {
                if (x.translate(0, -e.ls), x.translate(0, _[1] * G * .01 + n, 0), this._pathData.p.v) {
                  E = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                  var oe = 180 * Math.atan(E) / Math.PI;
                  l.point[0] < d.point[0] && (oe += 180), x.rotate(-oe * Math.PI / 180)
                }
                x.translate(Q, N, 0), s -= _[0] * C[i].an * .005, C[i + 1] && ie !== C[i + 1].ind && (s += C[i].an / 2, s += .001 * e.tr * e.finalSize)
              } else {
                switch (x.translate(r, n, 0), e.ps && x.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                  case 1:
                    x.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]), 0, 0);
                    break;
                  case 2:
                    x.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]) / 2, 0, 0)
                }
                x.translate(0, -e.ls), x.translate(D, 0, 0), x.translate(_[0] * C[i].an * .005, _[1] * G * .01, 0), r += C[i].l + .001 * e.tr * e.finalSize
              }
              L === "html" ? O = x.toCSS() : L === "svg" ? O = x.to2dCSS() : V = [x.props[0], x.props[1], x.props[2], x.props[3], x.props[4], x.props[5], x.props[6], x.props[7], x.props[8], x.props[9], x.props[10], x.props[11], x.props[12], x.props[13], x.props[14], x.props[15]], Z = T
            }
            w <= i ? (ne = new LetterProps(Z, ae, te, R, O, V), this.renderedLetters.push(ne), w += 1, this.lettersChangedFlag = !0) : (ne = this.renderedLetters[i], this.lettersChangedFlag = ne.update(Z, ae, te, R, O, V) || this.lettersChangedFlag)
          }
        }
      }, TextAnimatorProperty.prototype.getValue = function() {
        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
      }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(e, t, r) {
        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
      }, ITextElement.prototype.prepareFrame = function(e) {
        this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
      }, ITextElement.prototype.createPathShape = function(e, t) {
        var r, n, i = t.length,
          a = "";
        for (r = 0; r < i; r += 1) t[r].ty === "sh" && (n = t[r].ks.k, a += buildShapeString(n, n.i.length, !0, e));
        return a
      }, ITextElement.prototype.updateDocumentData = function(e, t) {
        this.textProperty.updateDocumentData(e, t)
      }, ITextElement.prototype.canResizeFont = function(e) {
        this.textProperty.canResizeFont(e)
      }, ITextElement.prototype.setMinimumFontSize = function(e) {
        this.textProperty.setMinimumFontSize(e)
      }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, n, i) {
        switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
          case 1:
            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
            break;
          case 2:
            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
        }
        t.translate(n, i, 0)
      }, ITextElement.prototype.buildColor = function(e) {
        return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
      }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
      };
      var emptyShapeData = {
        shapes: []
      };

      function SVGTextLottieElement(e, t, r) {
        this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
      }

      function ISolidElement(e, t, r) {
        this.initElement(e, t, r)
      }

      function NullElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
      }

      function SVGRendererBase() {}

      function ICompElement() {}

      function SVGCompElement(e, t, r) {
        this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }

      function SVGRenderer(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
        var r = "";
        if (t && t.title) {
          var n = createNS("title"),
            i = createElementID();
          n.setAttribute("id", i), n.textContent = t.title, this.svgElement.appendChild(n), r += i
        }
        if (t && t.description) {
          var a = createNS("desc"),
            o = createElementID();
          a.setAttribute("id", o), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + o
        }
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var s = createNS("defs");
        this.svgElement.appendChild(s);
        var l = createNS("g");
        this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
          preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: t && t.contentVisibility || "visible",
          progressiveLoad: t && t.progressiveLoad || !1,
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          viewBoxOnly: t && t.viewBoxOnly || !1,
          viewBoxSize: t && t.viewBoxSize || !1,
          className: t && t.className || "",
          id: t && t.id || "",
          focusable: t && t.focusable,
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "100%",
            height: t && t.filterSize && t.filterSize.height || "100%",
            x: t && t.filterSize && t.filterSize.x || "0%",
            y: t && t.filterSize && t.filterSize.y || "0%"
          },
          width: t && t.width,
          height: t && t.height,
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          defs: s,
          renderConfig: this.renderConfig
        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
      }

      function ShapeTransformManager() {
        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
      }, SVGTextLottieElement.prototype.buildTextContents = function(e) {
        for (var t = 0, r = e.length, n = [], i = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (n.push(i), i = "") : i += e[t], t += 1;
        return n.push(i), n
      }, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
        if (e.shapes && e.shapes.length) {
          var r = e.shapes[0];
          if (r.it) {
            var n = r.it[r.it.length - 1];
            n.s && (n.s.k[0] = t, n.s.k[1] = t)
          }
        }
        return e
      }, SVGTextLottieElement.prototype.buildNewText = function() {
        var e, t;
        this.addDynamicProperty(this);
        var r = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
        var n = this.globalData.fontManager.getFontByName(r.f);
        if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
        else {
          this.layerElement.setAttribute("font-family", n.fFamily);
          var i = r.fWeight,
            a = r.fStyle;
          this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
        }
        this.layerElement.setAttribute("aria-label", r.t);
        var o, s = r.l || [],
          l = !!this.globalData.fontManager.chars;
        t = s.length;
        var f = this.mHelper,
          u = this.data.singleShape,
          p = 0,
          g = 0,
          d = !0,
          h = .001 * r.tr * r.finalSize;
        if (!u || l || r.sz) {
          var m, c = this.textSpans.length;
          for (e = 0; e < t; e += 1) {
            if (this.textSpans[e] || (this.textSpans[e] = {
                span: null,
                childSpan: null,
                glyph: null
              }), !l || !u || e === 0) {
              if (o = c > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), c <= e) {
                if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = o, l) {
                  var y = createNS("g");
                  o.appendChild(y), this.textSpans[e].childSpan = y
                }
                this.textSpans[e].span = o, this.layerElement.appendChild(o)
              }
              o.style.display = "inherit"
            }
            if (f.reset(), u && (s[e].n && (p = -h, g += r.yOffset, g += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, f, s[e].line, p, g), p += s[e].l || 0, p += h), l) {
              var v;
              if ((m = this.globalData.fontManager.getCharData(r.finalText[e], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t === 1) v = new SVGCompElement(m.data, this.globalData, this);
              else {
                var E = emptyShapeData;
                m.data && m.data.shapes && (E = this.buildShapeData(m.data, r.finalSize)), v = new SVGShapeElement(E, this.globalData, this)
              }
              if (this.textSpans[e].glyph) {
                var b = this.textSpans[e].glyph;
                this.textSpans[e].childSpan.removeChild(b.layerElement), b.destroy()
              }
              this.textSpans[e].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[e].childSpan.appendChild(v.layerElement), m.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
            } else u && o.setAttribute("transform", "translate(" + f.props[12] + "," + f.props[13] + ")"), o.textContent = s[e].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
          }
          u && o && o.setAttribute("d", "")
        } else {
          var _ = this.textContainer,
            A = "start";
          switch (r.j) {
            case 1:
              A = "end";
              break;
            case 2:
              A = "middle";
              break;
            default:
              A = "start"
          }
          _.setAttribute("text-anchor", A), _.setAttribute("letter-spacing", h);
          var S = this.buildTextContents(r.finalText);
          for (t = S.length, g = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(o = this.textSpans[e].span || createNS("tspan")).textContent = S[e], o.setAttribute("x", 0), o.setAttribute("y", g), o.style.display = "inherit", _.appendChild(o), this.textSpans[e] || (this.textSpans[e] = {
            span: null,
            glyph: null
          }), this.textSpans[e].span = o, g += r.finalLineHeight;
          this.layerElement.appendChild(_)
        }
        for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
        this._sizeChanged = !0
      }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
          this._sizeChanged = !1;
          var e = this.layerElement.getBBox();
          this.bbox = {
            top: e.y,
            left: e.x,
            width: e.width,
            height: e.height
          }
        }
        return this.bbox
      }, SVGTextLottieElement.prototype.getValue = function() {
        var e, t, r = this.textSpans.length;
        for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
      }, SVGTextLottieElement.prototype.renderInnerContent = function() {
        if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
          var e, t;
          this._sizeChanged = !0;
          var r, n, i, a = this.textAnimator.renderedLetters,
            o = this.textProperty.currentData.l;
          for (t = o.length, e = 0; e < t; e += 1) o[e].n || (r = a[e], n = this.textSpans[e].span, (i = this.textSpans[e].glyph) && i.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
        }
      }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
        var e = createNS("rect");
        e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
      }, NullElement.prototype.prepareFrame = function(e) {
        this.prepareProperties(e, !0)
      }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
        return null
      }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
        return new NullElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createShape = function(e) {
        return new SVGShapeElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createText = function(e) {
        return new SVGTextLottieElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createImage = function(e) {
        return new IImageElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createSolid = function(e) {
        return new ISolidElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.configAnimation = function(e) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
        var t = this.globalData.defs;
        this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
        var r = createNS("clipPath"),
          n = createNS("rect");
        n.setAttribute("width", e.w), n.setAttribute("height", e.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
        var i = createElementID();
        r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
      }, SVGRendererBase.prototype.destroy = function() {
        var e;
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
        var t = this.layers ? this.layers.length : 0;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
      }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
        var t = 0,
          r = this.layers.length;
        for (t = 0; t < r; t += 1)
          if (this.layers[t].ind === e) return t;
        return -1
      }, SVGRendererBase.prototype.buildItem = function(e) {
        var t = this.elements;
        if (!t[e] && this.layers[e].ty !== 99) {
          t[e] = !0;
          var r = this.createItem(this.layers[e]);
          if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
            var n = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
            if (n === -1) return;
            if (this.elements[n] && this.elements[n] !== !0) {
              var i = t[n].getMatte(this.layers[e].tt);
              r.setMatte(i)
            } else this.buildItem(n), this.addPendingElement(r)
          }
        }
      }, SVGRendererBase.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
          var e = this.pendingElements.pop();
          if (e.checkParenting(), e.data.tt)
            for (var t = 0, r = this.elements.length; t < r;) {
              if (this.elements[t] === e) {
                var n = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                  i = this.elements[n].getMatte(this.layers[t].tt);
                e.setMatte(i);
                break
              }
              t += 1
            }
        }
      }, SVGRendererBase.prototype.renderFrame = function(e) {
        if (this.renderedFrame !== e && !this.destroyed) {
          var t;
          e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
          var r = this.layers.length;
          for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
          if (this.globalData._mdf)
            for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }
      }, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
        var r = e.getBaseElement();
        if (r) {
          for (var n, i = 0; i < t;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
          n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
        }
      }, SVGRendererBase.prototype.hide = function() {
        this.layerElement.style.display = "none"
      }, SVGRendererBase.prototype.show = function() {
        this.layerElement.style.display = "block"
      }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
      }, ICompElement.prototype.prepareFrame = function(e) {
        if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
          if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
          else {
            var t = this.tm.v;
            t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
          }
          var r, n = this.elements.length;
          for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
        }
      }, ICompElement.prototype.renderInnerContent = function() {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }, ICompElement.prototype.setElements = function(e) {
        this.elements = e
      }, ICompElement.prototype.getElements = function() {
        return this.elements
      }, ICompElement.prototype.destroyElements = function() {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
      }, ICompElement.prototype.destroy = function() {
        this.destroyElements(), this.destroyBaseElement()
      }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
        return new SVGCompElement(e, this.globalData, this)
      }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
        return new SVGCompElement(e, this.globalData, this)
      }, ShapeTransformManager.prototype = {
        addTransformSequence: function(e) {
          var t, r = e.length,
            n = "_";
          for (t = 0; t < r; t += 1) n += e[t].transform.key + "_";
          var i = this.sequences[n];
          return i || (i = {
            transforms: [].concat(e),
            finalTransform: new Matrix,
            _mdf: !1
          }, this.sequences[n] = i, this.sequenceList.push(i)), i
        },
        processSequence: function(e, t) {
          for (var r = 0, n = e.transforms.length, i = t; r < n && !t;) {
            if (e.transforms[r].transform.mProps._mdf) {
              i = !0;
              break
            }
            r += 1
          }
          if (i)
            for (e.finalTransform.reset(), r = n - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
          e._mdf = i
        },
        processSequences: function(e) {
          var t, r = this.sequenceList.length;
          for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
        },
        getNewKey: function() {
          return this.transform_key_count += 1, "_" + this.transform_key_count
        }
      };
      var lumaLoader = function() {
        var e = "__lottie_element_luma_buffer",
          t = null,
          r = null,
          n = null;

        function i() {
          var a, o, s;
          t || (a = createNS("svg"), o = createNS("filter"), s = createNS("feColorMatrix"), o.setAttribute("id", e), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), o.appendChild(s), a.appendChild(o), a.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), n = a, document.body.appendChild(n), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
        }
        return {
          load: i,
          get: function(a) {
            return t || i(), t.width = a.width, t.height = a.height, r.filter = "url(#" + e + ")", t
          }
        }
      };

      function createCanvas(e, t) {
        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
        var r = createTag("canvas");
        return r.width = e, r.height = t, r
      }
      var assetLoader = {
          loadLumaCanvas: lumaLoader.load,
          getLumaCanvas: lumaLoader.get,
          createCanvas
        },
        registeredEffects = {};

      function CVEffects(e) {
        var t, r, n = e.data.ef ? e.data.ef.length : 0;
        for (this.filters = [], t = 0; t < n; t += 1) {
          r = null;
          var i = e.data.ef[t].ty;
          registeredEffects[i] && (r = new registeredEffects[i].effect(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
        }
        this.filters.length && e.addRenderableComponent(this)
      }

      function registerEffect(e, t) {
        registeredEffects[e] = {
          effect: t
        }
      }

      function CVMaskElement(e, t) {
        var r;
        this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
        var n = this.masksProperties.length,
          i = !1;
        for (r = 0; r < n; r += 1) this.masksProperties[r].mode !== "n" && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
        this.hasMasks = i, i && this.element.addRenderableComponent(this)
      }

      function CVBaseElement() {}
      CVEffects.prototype.renderFrame = function(e) {
        var t, r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
      }, CVEffects.prototype.getEffects = function(e) {
        var t, r = this.filters.length,
          n = [];
        for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
        return n
      }, CVMaskElement.prototype.renderFrame = function() {
        if (this.hasMasks) {
          var e, t, r, n, i = this.element.finalTransform.mat,
            a = this.element.canvasContext,
            o = this.masksProperties.length;
          for (a.beginPath(), e = 0; e < o; e += 1)
            if (this.masksProperties[e].mode !== "n") {
              var s;
              this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[e].v, t = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(t[0], t[1]);
              var l = n._length;
              for (s = 1; s < l; s += 1) r = i.applyToTriplePoints(n.o[s - 1], n.i[s], n.v[s]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
              r = i.applyToTriplePoints(n.o[s - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
            } this.element.globalData.renderer.save(!0), a.clip()
        }
      }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
        this.element = null
      };
      var operationsMap = {
        1: "source-in",
        2: "source-out",
        3: "source-in",
        4: "source-out"
      };

      function CVShapeData(e, t, r, n) {
        this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
        var i, a = 4;
        t.ty === "rc" ? a = 5 : t.ty === "el" ? a = 6 : t.ty === "sr" && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
        var o, s = r.length;
        for (i = 0; i < s; i += 1) r[i].closed || (o = {
          transforms: n.addTransformSequence(r[i].transforms),
          trNodes: []
        }, this.styledShapes.push(o), r[i].elements.push(o))
      }

      function CVShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
      }

      function CVTextElement(e, t, r) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
          fill: "rgba(0,0,0,0)",
          stroke: "rgba(0,0,0,0)",
          sWidth: 0,
          fValue: ""
        }, this.initElement(e, t, r)
      }

      function CVImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
      }

      function CVSolidElement(e, t, r) {
        this.initElement(e, t, r)
      }

      function CanvasRendererBase() {}

      function CanvasContext() {
        this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
      }

      function CVContextData() {
        var e;
        for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
          var t = new CanvasContext;
          this.stack[e] = t
        }
        this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
      }

      function CVCompElement(e, t, r) {
        this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }

      function CanvasRenderer(e, t) {
        this.animationItem = e, this.renderConfig = {
          clearCanvas: !t || t.clearCanvas === void 0 || t.clearCanvas,
          context: t && t.context || null,
          progressiveLoad: t && t.progressiveLoad || !1,
          preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: t && t.contentVisibility || "visible",
          className: t && t.className || "",
          id: t && t.id || "",
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
          frameNum: -1,
          _mdf: !1,
          renderConfig: this.renderConfig,
          currentGlobalAlpha: -1
        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
      }

      function HBaseElement() {}

      function HSolidElement(e, t, r) {
        this.initElement(e, t, r)
      }

      function HShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        }
      }

      function HTextElement(e, t, r) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
      }

      function HCameraElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
        var n = PropertyFactory.getProp;
        if (this.pe = n(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = n(this, e.ks.p.x, 1, 0, this), this.py = n(this, e.ks.p.y, 1, 0, this), this.pz = n(this, e.ks.p.z, 1, 0, this)) : this.p = n(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = n(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
          var i, a = e.ks.or.k.length;
          for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null
        }
        this.or = n(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, e.ks.rx, 0, degToRads, this), this.ry = n(this, e.ks.ry, 0, degToRads, this), this.rz = n(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
          mProp: this
        }
      }

      function HImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
      }

      function HybridRendererBase(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
          className: t && t.className || "",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "400%",
            height: t && t.filterSize && t.filterSize.height || "400%",
            x: t && t.filterSize && t.filterSize.x || "-100%",
            y: t && t.filterSize && t.filterSize.y || "-100%"
          }
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
      }

      function HCompElement(e, t, r) {
        this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }

      function HybridRenderer(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
          className: t && t.className || "",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "400%",
            height: t && t.filterSize && t.filterSize.height || "400%",
            x: t && t.filterSize && t.filterSize.x || "-100%",
            y: t && t.filterSize && t.filterSize.y || "-100%"
          },
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
      }
      CVBaseElement.prototype = {
        createElements: function() {},
        initRendererElement: function() {},
        createContainerElements: function() {
          if (this.data.tt >= 1) {
            this.buffers = [];
            var e = this.globalData.canvasContext,
              t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
            this.buffers.push(t);
            var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
            this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
          }
          this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
        },
        createContent: function() {},
        setBlendMode: function() {
          var e = this.globalData;
          if (e.blendMode !== this.data.bm) {
            e.blendMode = this.data.bm;
            var t = getBlendMode(this.data.bm);
            e.canvasContext.globalCompositeOperation = t
          }
        },
        createRenderableComponents: function() {
          this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
        },
        hideElement: function() {
          this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
        },
        showElement: function() {
          this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
        },
        clearCanvas: function(e) {
          e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
        },
        prepareLayer: function() {
          if (this.data.tt >= 1) {
            var e = this.buffers[0].getContext("2d");
            this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
          }
        },
        exitLayer: function() {
          if (this.data.tt >= 1) {
            var e = this.buffers[1],
              t = e.getContext("2d");
            if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
              var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
              r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
            }
            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
          }
        },
        renderFrame: function(e) {
          if (!this.hidden && !this.data.hd && (this.data.td !== 1 || e)) {
            this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
            var t = this.data.ty === 0;
            this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
          }
        },
        destroy: function() {
          this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
        },
        mHelper: new Matrix
      }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: !1
      }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
      }, CVShapeElement.prototype.createStyleElement = function(e, t) {
        var r = {
            data: e,
            type: e.ty,
            preTransforms: this.transformsManager.addTransformSequence(t),
            transforms: [],
            elements: [],
            closed: e.hd === !0
          },
          n = {};
        if (e.ty === "fl" || e.ty === "st" ? (n.c = PropertyFactory.getProp(this, e.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : e.ty !== "gf" && e.ty !== "gs" || (n.s = PropertyFactory.getProp(this, e.s, 1, null, this), n.e = PropertyFactory.getProp(this, e.e, 1, null, this), n.h = PropertyFactory.getProp(this, e.h || {
            k: 0
          }, 0, .01, this), n.a = PropertyFactory.getProp(this, e.a || {
            k: 0
          }, 0, degToRads, this), n.g = new GradientProperty(this, e.g, this)), n.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs") {
          if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), n.w = PropertyFactory.getProp(this, e.w, 0, null, this), n.w.k || (r.wi = n.w.v), e.d) {
            var i = new DashProperty(this, e.d, "canvas", this);
            n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
          }
        } else r.r = e.r === 2 ? "evenodd" : "nonzero";
        return this.stylesList.push(r), n.style = r, n
      }, CVShapeElement.prototype.createGroupElement = function() {
        return {
          it: [],
          prevViewData: []
        }
      }, CVShapeElement.prototype.createTransformElement = function(e) {
        return {
          transform: {
            opacity: 1,
            _opMdf: !1,
            key: this.transformsManager.getNewKey(),
            op: PropertyFactory.getProp(this, e.o, 0, .01, this),
            mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
          }
        }
      }, CVShapeElement.prototype.createShapeElement = function(e) {
        var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
        return this.shapes.push(t), this.addShapeToModifiers(t), t
      }, CVShapeElement.prototype.reloadShapes = function() {
        var e;
        this._isFirstFrame = !0;
        var t = this.itemsData.length;
        for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
      }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
        var t, r = this.stylesList.length;
        for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
      }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
        var e, t = this.stylesList.length;
        for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
      }, CVShapeElement.prototype.closeStyles = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t].closed = !0
      }, CVShapeElement.prototype.searchShapes = function(e, t, r, n, i) {
        var a, o, s, l, f, u, p = e.length - 1,
          g = [],
          d = [],
          h = [].concat(i);
        for (a = p; a >= 0; a -= 1) {
          if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = n, e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs") l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], h), g.push(t[a].style);
          else if (e[a].ty === "gr") {
            if (l)
              for (s = t[a].it.length, o = 0; o < s; o += 1) t[a].prevViewData[o] = t[a].it[o];
            else t[a] = this.createGroupElement(e[a]);
            this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, n, h)
          } else e[a].ty === "tr" ? (l || (u = this.createTransformElement(e[a]), t[a] = u), h.push(t[a]), this.addTransformToStyleList(t[a])) : e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr" ? l || (t[a] = this.createShapeElement(e[a])) : e[a].ty === "tm" || e[a].ty === "rd" || e[a].ty === "pb" || e[a].ty === "zz" || e[a].ty === "op" ? (l ? (f = t[a]).closed = !1 : ((f = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = f, this.shapeModifiers.push(f)), d.push(f)) : e[a].ty === "rp" && (l ? (f = t[a]).closed = !0 : (f = ShapeModifiers.getModifier(e[a].ty), t[a] = f, f.init(this, e, a, t), this.shapeModifiers.push(f), n = !1), d.push(f));
          this.addProcessedElement(e[a], a + 1)
        }
        for (this.removeTransformFromStyleList(), this.closeStyles(g), p = d.length, a = 0; a < p; a += 1) d[a].closed = !0
      }, CVShapeElement.prototype.renderInnerContent = function() {
        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
      }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
        (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
      }, CVShapeElement.prototype.drawLayer = function() {
        var e, t, r, n, i, a, o, s, l, f = this.stylesList.length,
          u = this.globalData.renderer,
          p = this.globalData.canvasContext;
        for (e = 0; e < f; e += 1)
          if (((s = (l = this.stylesList[e]).type) !== "st" && s !== "gs" || l.wi !== 0) && l.data._shouldRender && l.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
            for (u.save(), a = l.elements, s === "st" || s === "gs" ? (u.ctxStrokeStyle(s === "st" ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle(s === "fl" ? l.co : l.grd), u.ctxOpacity(l.coOp), s !== "st" && s !== "gs" && p.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
              for (s !== "st" && s !== "gs" || (p.beginPath(), l.da && (p.setLineDash(l.da), p.lineDashOffset = l.do)), i = (o = a[t].trNodes).length, n = 0; n < i; n += 1) o[n].t === "m" ? p.moveTo(o[n].p[0], o[n].p[1]) : o[n].t === "c" ? p.bezierCurveTo(o[n].pts[0], o[n].pts[1], o[n].pts[2], o[n].pts[3], o[n].pts[4], o[n].pts[5]) : p.closePath();
              s !== "st" && s !== "gs" || (u.ctxStroke(), l.da && p.setLineDash(this.dashResetter))
            }
            s !== "st" && s !== "gs" && this.globalData.renderer.ctxFill(l.r), u.restore()
          }
      }, CVShapeElement.prototype.renderShape = function(e, t, r, n) {
        var i, a;
        for (a = e, i = t.length - 1; i >= 0; i -= 1) t[i].ty === "tr" ? (a = r[i].transform, this.renderShapeTransform(e, a)) : t[i].ty === "sh" || t[i].ty === "el" || t[i].ty === "rc" || t[i].ty === "sr" ? this.renderPath(t[i], r[i]) : t[i].ty === "fl" ? this.renderFill(t[i], r[i], a) : t[i].ty === "st" ? this.renderStroke(t[i], r[i], a) : t[i].ty === "gf" || t[i].ty === "gs" ? this.renderGradientFill(t[i], r[i], a) : t[i].ty === "gr" ? this.renderShape(a, t[i].it, r[i].it) : t[i].ty;
        n && this.drawLayer()
      }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
        if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
          var r, n, i, a = e.trNodes,
            o = t.paths,
            s = o._length;
          a.length = 0;
          var l = e.transforms.finalTransform;
          for (i = 0; i < s; i += 1) {
            var f = o.shapes[i];
            if (f && f.v) {
              for (n = f._length, r = 1; r < n; r += 1) r === 1 && a.push({
                t: "m",
                p: l.applyToPointArray(f.v[0][0], f.v[0][1], 0)
              }), a.push({
                t: "c",
                pts: l.applyToTriplePoints(f.o[r - 1], f.i[r], f.v[r])
              });
              n === 1 && a.push({
                t: "m",
                p: l.applyToPointArray(f.v[0][0], f.v[0][1], 0)
              }), f.c && n && (a.push({
                t: "c",
                pts: l.applyToTriplePoints(f.o[r - 1], f.i[0], f.v[0])
              }), a.push({
                t: "z"
              }))
            }
          }
          e.trNodes = a
        }
      }, CVShapeElement.prototype.renderPath = function(e, t) {
        if (e.hd !== !0 && e._shouldRender) {
          var r, n = t.styledShapes.length;
          for (r = 0; r < n; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
        }
      }, CVShapeElement.prototype.renderFill = function(e, t, r) {
        var n = t.style;
        (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity)
      }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
        var n, i = t.style;
        if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
          var a, o = this.globalData.canvasContext,
            s = t.s.v,
            l = t.e.v;
          if (e.t === 1) n = o.createLinearGradient(s[0], s[1], l[0], l[1]);
          else {
            var f = Math.sqrt(Math.pow(s[0] - l[0], 2) + Math.pow(s[1] - l[1], 2)),
              u = Math.atan2(l[1] - s[1], l[0] - s[0]),
              p = t.h.v;
            p >= 1 ? p = .99 : p <= -1 && (p = -.99);
            var g = f * p,
              d = Math.cos(u + t.a.v) * g + s[0],
              h = Math.sin(u + t.a.v) * g + s[1];
            n = o.createRadialGradient(d, h, 0, s[0], s[1], f)
          }
          var m = e.g.p,
            c = t.g.c,
            y = 1;
          for (a = 0; a < m; a += 1) t.g._hasOpacity && t.g._collapsable && (y = t.g.o[2 * a + 1]), n.addColorStop(c[4 * a] / 100, "rgba(" + c[4 * a + 1] + "," + c[4 * a + 2] + "," + c[4 * a + 3] + "," + y + ")");
          i.grd = n
        }
        i.coOp = t.o.v * r.opacity
      }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
        var n = t.style,
          i = t.d;
        i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (n.wi = t.w.v)
      }, CVShapeElement.prototype.destroy = function() {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
        var e = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var t = !1;
        e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
        var r = !1;
        e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
        var n, i, a, o, s, l, f, u, p, g, d, h, m = this.globalData.fontManager.getFontByName(e.f),
          c = e.l,
          y = this.mHelper;
        this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length;
        var v = this.data.singleShape,
          E = .001 * e.tr * e.finalSize,
          b = 0,
          _ = 0,
          A = !0,
          S = 0;
        for (n = 0; n < i; n += 1) {
          o = (a = this.globalData.fontManager.getCharData(e.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, y.reset(), v && c[n].n && (b = -E, _ += e.yOffset, _ += A ? 1 : 0, A = !1), p = (f = o.shapes ? o.shapes[0].it : []).length, y.scale(e.finalSize / 100, e.finalSize / 100), v && this.applyTextPropertiesToMatrix(e, y, c[n].line, b, _), d = createSizedArray(p - 1);
          var x = 0;
          for (u = 0; u < p; u += 1)
            if (f[u].ty === "sh") {
              for (l = f[u].ks.k.i.length, g = f[u].ks.k, h = [], s = 1; s < l; s += 1) s === 1 && h.push(y.applyToX(g.v[0][0], g.v[0][1], 0), y.applyToY(g.v[0][0], g.v[0][1], 0)), h.push(y.applyToX(g.o[s - 1][0], g.o[s - 1][1], 0), y.applyToY(g.o[s - 1][0], g.o[s - 1][1], 0), y.applyToX(g.i[s][0], g.i[s][1], 0), y.applyToY(g.i[s][0], g.i[s][1], 0), y.applyToX(g.v[s][0], g.v[s][1], 0), y.applyToY(g.v[s][0], g.v[s][1], 0));
              h.push(y.applyToX(g.o[s - 1][0], g.o[s - 1][1], 0), y.applyToY(g.o[s - 1][0], g.o[s - 1][1], 0), y.applyToX(g.i[0][0], g.i[0][1], 0), y.applyToY(g.i[0][0], g.i[0][1], 0), y.applyToX(g.v[0][0], g.v[0][1], 0), y.applyToY(g.v[0][0], g.v[0][1], 0)), d[x] = h, x += 1
            } v && (b += c[n].l, b += E), this.textSpans[S] ? this.textSpans[S].elem = d : this.textSpans[S] = {
            elem: d
          }, S += 1
        }
      }, CVTextElement.prototype.renderInnerContent = function() {
        var e, t, r, n, i, a;
        this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var o, s = this.textAnimator.renderedLetters,
          l = this.textProperty.currentData.l;
        t = l.length;
        var f, u, p = null,
          g = null,
          d = null,
          h = this.globalData.renderer;
        for (e = 0; e < t; e += 1)
          if (!l[e].n) {
            if ((o = s[e]) && (h.save(), h.ctxTransform(o.p), h.ctxOpacity(o.o)), this.fill) {
              for (o && o.fc ? p !== o.fc && (h.ctxFillStyle(o.fc), p = o.fc) : p !== this.values.fill && (p = this.values.fill, h.ctxFillStyle(this.values.fill)), n = (f = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                for (a = (u = f[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
              this.globalData.canvasContext.closePath(), h.ctxFill()
            }
            if (this.stroke) {
              for (o && o.sw ? d !== o.sw && (d = o.sw, h.ctxLineWidth(o.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, h.ctxLineWidth(this.values.sWidth)), o && o.sc ? g !== o.sc && (g = o.sc, h.ctxStrokeStyle(o.sc)) : g !== this.values.stroke && (g = this.values.stroke, h.ctxStrokeStyle(this.values.stroke)), n = (f = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                for (a = (u = f[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
              this.globalData.canvasContext.closePath(), h.ctxStroke()
            }
            o && this.globalData.renderer.restore()
          }
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
          var e = createTag("canvas");
          e.width = this.assetData.w, e.height = this.assetData.h;
          var t, r, n = e.getContext("2d"),
            i = this.img.width,
            a = this.img.height,
            o = i / a,
            s = this.assetData.w / this.assetData.h,
            l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
          o > s && l === "xMidYMid slice" || o < s && l !== "xMidYMid slice" ? t = (r = a) * s : r = (t = i) / s, n.drawImage(this.img, (i - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
        }
      }, CVImageElement.prototype.renderInnerContent = function() {
        this.canvasContext.drawImage(this.img, 0, 0)
      }, CVImageElement.prototype.destroy = function() {
        this.img = null
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
        this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
      }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
        return new CVShapeElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createText = function(e) {
        return new CVTextElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createImage = function(e) {
        return new CVImageElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createSolid = function(e) {
        return new CVSolidElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
        e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
      }, CanvasRendererBase.prototype.ctxOpacity = function(e) {
        this.canvasContext.globalAlpha *= e < 0 ? 0 : e
      }, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
        this.canvasContext.fillStyle = e
      }, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
        this.canvasContext.strokeStyle = e
      }, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
        this.canvasContext.lineWidth = e
      }, CanvasRendererBase.prototype.ctxLineCap = function(e) {
        this.canvasContext.lineCap = e
      }, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
        this.canvasContext.lineJoin = e
      }, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
        this.canvasContext.miterLimit = e
      }, CanvasRendererBase.prototype.ctxFill = function(e) {
        this.canvasContext.fill(e)
      }, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, n) {
        this.canvasContext.fillRect(e, t, r, n)
      }, CanvasRendererBase.prototype.ctxStroke = function() {
        this.canvasContext.stroke()
      }, CanvasRendererBase.prototype.reset = function() {
        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
      }, CanvasRendererBase.prototype.save = function() {
        this.canvasContext.save()
      }, CanvasRendererBase.prototype.restore = function(e) {
        this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
      }, CanvasRendererBase.prototype.configAnimation = function(e) {
        if (this.animationItem.wrapper) {
          this.animationItem.container = createTag("canvas");
          var t = this.animationItem.container.style;
          t.width = "100%", t.height = "100%";
          var r = "0px 0px 0px";
          t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
        } else this.canvasContext = this.renderConfig.context;
        this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
          w: e.w,
          h: e.h,
          sx: 0,
          sy: 0,
          tx: 0,
          ty: 0
        }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
      }, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
        var r, n, i, a;
        if (this.reset(), e ? (r = e, n = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = n) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, n = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = n * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
          var o = this.renderConfig.preserveAspectRatio.split(" "),
            s = o[1] || "meet",
            l = o[0] || "xMidYMid",
            f = l.substr(0, 4),
            u = l.substr(4);
          i = r / n, (a = this.transformCanvas.w / this.transformCanvas.h) > i && s === "meet" || a < i && s === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = f === "xMid" && (a < i && s === "meet" || a > i && s === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : f === "xMax" && (a < i && s === "meet" || a > i && s === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = u === "YMid" && (a > i && s === "meet" || a < i && s === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : u === "YMax" && (a > i && s === "meet" || a < i && s === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
        } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
      }, CanvasRendererBase.prototype.destroy = function() {
        var e;
        for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
      }, CanvasRendererBase.prototype.renderFrame = function(e, t) {
        if ((this.renderedFrame !== e || this.renderConfig.clearCanvas !== !0 || t) && !this.destroyed && e !== -1) {
          var r;
          this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
          var n = this.layers.length;
          for (this.completeLayers || this.checkLayers(e), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
          if (this.globalData._mdf) {
            for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
            this.renderConfig.clearCanvas !== !0 && this.restore()
          }
        }
      }, CanvasRendererBase.prototype.buildItem = function(e) {
        var t = this.elements;
        if (!t[e] && this.layers[e].ty !== 99) {
          var r = this.createItem(this.layers[e], this, this.globalData);
          t[e] = r, r.initExpressions()
        }
      }, CanvasRendererBase.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
      }, CanvasRendererBase.prototype.hide = function() {
        this.animationItem.container.style.display = "none"
      }, CanvasRendererBase.prototype.show = function() {
        this.animationItem.container.style.display = "block"
      }, CVContextData.prototype.duplicate = function() {
        var e = 2 * this._length,
          t = 0;
        for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
        this._length = e
      }, CVContextData.prototype.reset = function() {
        this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
      }, CVContextData.prototype.restore = function(e) {
        this.cArrPos -= 1;
        var t, r = this.stack[this.cArrPos],
          n = r.transform,
          i = this.cTr.props;
        for (t = 0; t < 16; t += 1) i[t] = n[t];
        if (e) {
          this.nativeContext.restore();
          var a = this.stack[this.cArrPos + 1];
          this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
        }
        this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), (e || r.opacity !== -1 && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
      }, CVContextData.prototype.save = function(e) {
        e && this.nativeContext.save();
        var t = this.cTr.props;
        this._length <= this.cArrPos && this.duplicate();
        var r, n = this.stack[this.cArrPos];
        for (r = 0; r < 16; r += 1) n.transform[r] = t[r];
        this.cArrPos += 1;
        var i = this.stack[this.cArrPos];
        i.opacity = n.opacity, i.fillStyle = n.fillStyle, i.strokeStyle = n.strokeStyle, i.lineWidth = n.lineWidth, i.lineCap = n.lineCap, i.lineJoin = n.lineJoin, i.miterLimit = n.miterLimit
      }, CVContextData.prototype.setOpacity = function(e) {
        this.stack[this.cArrPos].opacity = e
      }, CVContextData.prototype.setContext = function(e) {
        this.nativeContext = e
      }, CVContextData.prototype.fillStyle = function(e) {
        this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
      }, CVContextData.prototype.strokeStyle = function(e) {
        this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
      }, CVContextData.prototype.lineWidth = function(e) {
        this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
      }, CVContextData.prototype.lineCap = function(e) {
        this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
      }, CVContextData.prototype.lineJoin = function(e) {
        this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
      }, CVContextData.prototype.miterLimit = function(e) {
        this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
      }, CVContextData.prototype.transform = function(e) {
        this.transformMat.cloneFromProps(e);
        var t = this.cTr;
        this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
        var r = t.props;
        this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
      }, CVContextData.prototype.opacity = function(e) {
        var t = this.stack[this.cArrPos].opacity;
        t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
      }, CVContextData.prototype.fill = function(e) {
        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
      }, CVContextData.prototype.fillRect = function(e, t, r, n) {
        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, n)
      }, CVContextData.prototype.stroke = function() {
        this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
      }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
        var e, t = this.canvasContext;
        for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }, CVCompElement.prototype.destroy = function() {
        var e;
        for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
        this.layers = null, this.elements = null
      }, CVCompElement.prototype.createComp = function(e) {
        return new CVCompElement(e, this.globalData, this)
      }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
        return new CVCompElement(e, this.globalData, this)
      }, HBaseElement.prototype = {
        checkBlendMode: function() {},
        initRendererElement: function() {
          this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
        },
        createContainerElements: function() {
          this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
        },
        renderElement: function() {
          var e = this.transformedElement ? this.transformedElement.style : {};
          if (this.finalTransform._matMdf) {
            var t = this.finalTransform.mat.toCSS();
            e.transform = t, e.webkitTransform = t
          }
          this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
        },
        renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        destroy: function() {
          this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
        },
        createRenderableComponents: function() {
          this.maskManager = new MaskElement(this.data, this, this.globalData)
        },
        addEffects: function() {},
        setMatte: function() {}
      }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
        var e;
        this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
      }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
        var e;
        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
        else {
          e = createNS("svg");
          var t = this.comp.data ? this.comp.data : this.globalData.compSize;
          e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
      }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
        var r, n = e.length;
        for (r = 0; r < n; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
        return t
      }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
        var r, n, i, a, o, s = e.sh.v,
          l = e.transformers,
          f = s._length;
        if (!(f <= 1)) {
          for (r = 0; r < f - 1; r += 1) n = this.getTransformedPoint(l, s.v[r]), i = this.getTransformedPoint(l, s.o[r]), a = this.getTransformedPoint(l, s.i[r + 1]), o = this.getTransformedPoint(l, s.v[r + 1]), this.checkBounds(n, i, a, o, t);
          s.c && (n = this.getTransformedPoint(l, s.v[r]), i = this.getTransformedPoint(l, s.o[r]), a = this.getTransformedPoint(l, s.i[0]), o = this.getTransformedPoint(l, s.v[0]), this.checkBounds(n, i, a, o, t))
        }
      }, HShapeElement.prototype.checkBounds = function(e, t, r, n, i) {
        this.getBoundsOfCurve(e, t, r, n);
        var a = this.shapeBoundingBox;
        i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
      }, HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
      }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, n) {
        for (var i, a, o, s, l, f, u, p = [
            [e[0], n[0]],
            [e[1], n[1]]
          ], g = 0; g < 2; ++g) a = 6 * e[g] - 12 * t[g] + 6 * r[g], i = -3 * e[g] + 9 * t[g] - 9 * r[g] + 3 * n[g], o = 3 * t[g] - 3 * e[g], a |= 0, o |= 0, (i |= 0) === 0 && a === 0 || (i === 0 ? (s = -o / a) > 0 && s < 1 && p[g].push(this.calculateF(s, e, t, r, n, g)) : (l = a * a - 4 * o * i) >= 0 && ((f = (-a + bmSqrt(l)) / (2 * i)) > 0 && f < 1 && p[g].push(this.calculateF(f, e, t, r, n, g)), (u = (-a - bmSqrt(l)) / (2 * i)) > 0 && u < 1 && p[g].push(this.calculateF(u, e, t, r, n, g))));
        this.shapeBoundingBox.left = bmMin.apply(null, p[0]), this.shapeBoundingBox.top = bmMin.apply(null, p[1]), this.shapeBoundingBox.right = bmMax.apply(null, p[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, p[1])
      }, HShapeElement.prototype.calculateF = function(e, t, r, n, i, a) {
        return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * n[a] + bmPow(e, 3) * i[a]
      }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
        var r, n = e.length;
        for (r = 0; r < n; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
      }, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
        var r = 0;
        if (e.keyframes) {
          for (var n = 0; n < e.keyframes.length; n += 1) {
            var i = e.keyframes[n].s;
            i > r && (r = i)
          }
          r *= e.mult
        } else r = e.v * e.mult;
        t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
      }, HShapeElement.prototype.currentBoxContains = function(e) {
        return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
      }, HShapeElement.prototype.renderInnerContent = function() {
        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
          var e = this.tempBoundingBox,
            t = 999999;
          if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
          var r = !1;
          if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
            this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
            var n = this.shapeCont.style,
              i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            n.transform = i, n.webkitTransform = i
          }
        }
      }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
        if (this.isMasked = this.checkMasks(), this.isMasked) {
          this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
          var e = createNS("g");
          this.maskedElement.appendChild(e), this.innerElem = e
        } else this.renderType = "html", this.innerElem = this.layerElement;
        this.checkParenting()
      }, HTextElement.prototype.buildNewText = function() {
        var e = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var t = this.innerElem.style,
          r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
        t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
        var n, i, a = this.globalData.fontManager.getFontByName(e.f);
        if (!this.globalData.fontManager.chars)
          if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
          else {
            t.fontFamily = a.fFamily;
            var o = e.fWeight,
              s = e.fStyle;
            t.fontStyle = s, t.fontWeight = o
          } var l, f, u, p = e.l;
        i = p.length;
        var g, d = this.mHelper,
          h = "",
          m = 0;
        for (n = 0; n < i; n += 1) {
          if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? u = (f = this.textSpans[m]).children[0] : ((f = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(f)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (f = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(f = createTag("span")), styleDiv(l = createTag("span")), f.appendChild(l)), this.globalData.fontManager.chars) {
            var c, y = this.globalData.fontManager.getCharData(e.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
            if (c = y ? y.data : null, d.reset(), c && c.shapes && c.shapes.length && (g = c.shapes[0].it, d.scale(e.finalSize / 100, e.finalSize / 100), h = this.createPathShape(d, g), l.setAttribute("d", h)), this.isMasked) this.innerElem.appendChild(l);
            else {
              if (this.innerElem.appendChild(f), c && c.shapes) {
                document.body.appendChild(u);
                var v = u.getBBox();
                u.setAttribute("width", v.width + 2), u.setAttribute("height", v.height + 2), u.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                var E = u.style,
                  b = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                E.transform = b, E.webkitTransform = b, p[n].yOffset = v.y - 1
              } else u.setAttribute("width", 1), u.setAttribute("height", 1);
              f.appendChild(u)
            }
          } else if (l.textContent = p[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
          else {
            this.innerElem.appendChild(f);
            var _ = l.style,
              A = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
            _.transform = A, _.webkitTransform = A
          }
          this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = f, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
        }
        for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
      }, HTextElement.prototype.renderInnerContent = function() {
        var e;
        if (this.validateText(), this.data.singleShape) {
          if (!this._isFirstFrame && !this.lettersChangedFlag) return;
          if (this.isMasked && this.finalTransform._matMdf) {
            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
            var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
            e.transform = t, e.webkitTransform = t
          }
        }
        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
          var r, n, i, a, o, s = 0,
            l = this.textAnimator.renderedLetters,
            f = this.textProperty.currentData.l;
          for (n = f.length, r = 0; r < n; r += 1) f[r].n ? s += 1 : (a = this.textSpans[r], o = this.textPaths[r], i = l[s], s += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && o.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && o.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (o.setAttribute("fill", i.fc), o.style.color = i.fc));
          if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
            var u = this.innerElem.getBBox();
            if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height)), this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
              this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
              var p = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              e.transform = p, e.webkitTransform = p
            }
          }
        }
      }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
        var e, t, r, n, i = this.comp.threeDElements.length;
        for (e = 0; e < i; e += 1)
          if ((t = this.comp.threeDElements[e]).type === "3d") {
            r = t.perspectiveElem.style, n = t.container.style;
            var a = this.pe.v + "px",
              o = "0px 0px 0px",
              s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            r.perspective = a, r.webkitPerspective = a, n.transformOrigin = o, n.mozTransformOrigin = o, n.webkitTransformOrigin = o, r.transform = s, r.webkitTransform = s
          }
      }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
        var e, t, r = this._isFirstFrame;
        if (this.hierarchy)
          for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
        if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
          if (this.mat.reset(), this.hierarchy)
            for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
              var n = this.hierarchy[e].finalTransform.mProp;
              this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
            }
          if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
            var i;
            i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
            var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
              o = [i[0] / a, i[1] / a, i[2] / a],
              s = Math.sqrt(o[2] * o[2] + o[0] * o[0]),
              l = Math.atan2(o[1], s),
              f = Math.atan2(o[0], -o[2]);
            this.mat.rotateY(f).rotateX(-l)
          }
          this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
          var u = !this._prevMat.equals(this.mat);
          if ((u || this.pe._mdf) && this.comp.threeDElements) {
            var p, g, d;
            for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
              if ((p = this.comp.threeDElements[e]).type === "3d") {
                if (u) {
                  var h = this.mat.toCSS();
                  (d = p.container.style).transform = h, d.webkitTransform = h
                }
                this.pe._mdf && ((g = p.perspectiveElem.style).perspective = this.pe.v + "px", g.webkitPerspective = this.pe.v + "px")
              } this.mat.clone(this._prevMat)
          }
        }
        this._isFirstFrame = !1
      }, HCameraElement.prototype.prepareFrame = function(e) {
        this.prepareProperties(e, !0)
      }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
        return null
      }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
        var e = this.globalData.getAssetsPath(this.assetData),
          t = new Image;
        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
      }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
      }, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
        var r = e.getBaseElement();
        if (r) {
          var n = this.layers[t];
          if (n.ddd && this.supports3d) this.addTo3dContainer(r, t);
          else if (this.threeDElements) this.addTo3dContainer(r, t);
          else {
            for (var i, a, o = 0; o < t;) this.elements[o] && this.elements[o] !== !0 && this.elements[o].getBaseElement && (a = this.elements[o], i = (this.layers[o].ddd ? this.getThreeDContainerByPos(o) : a.getBaseElement()) || i), o += 1;
            i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
          }
        }
      }, HybridRendererBase.prototype.createShape = function(e) {
        return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createText = function(e) {
        return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createCamera = function(e) {
        return this.camera = new HCameraElement(e, this.globalData, this), this.camera
      }, HybridRendererBase.prototype.createImage = function(e) {
        return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createSolid = function(e) {
        return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
        for (var t = 0, r = this.threeDElements.length; t < r;) {
          if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
          t += 1
        }
        return null
      }, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
        var r, n, i = createTag("div");
        styleDiv(i);
        var a = createTag("div");
        if (styleDiv(a), t === "3d") {
          (r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
          var o = "50% 50%";
          r.webkitTransformOrigin = o, r.mozTransformOrigin = o, r.transformOrigin = o;
          var s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          (n = a.style).transform = s, n.webkitTransform = s
        }
        i.appendChild(a);
        var l = {
          container: a,
          perspectiveElem: i,
          startPos: e,
          endPos: e,
          type: t
        };
        return this.threeDElements.push(l), l
      }, HybridRendererBase.prototype.build3dContainers = function() {
        var e, t, r = this.layers.length,
          n = "";
        for (e = 0; e < r; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (n !== "3d" && (n = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : (n !== "2d" && (n = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
        for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
      }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
        for (var r = 0, n = this.threeDElements.length; r < n;) {
          if (t <= this.threeDElements[r].endPos) {
            for (var i, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
            i ? this.threeDElements[r].container.insertBefore(e, i) : this.threeDElements[r].container.appendChild(e);
            break
          }
          r += 1
        }
      }, HybridRendererBase.prototype.configAnimation = function(e) {
        var t = createTag("div"),
          r = this.animationItem.wrapper,
          n = t.style;
        n.width = e.w + "px", n.height = e.h + "px", this.resizerElem = t, styleDiv(t), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), n.overflow = "hidden";
        var i = createNS("svg");
        i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
        var a = createNS("defs");
        i.appendChild(a), this.data = e, this.setupGlobalData(e, i), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
      }, HybridRendererBase.prototype.destroy = function() {
        var e;
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
        var t = this.layers ? this.layers.length : 0;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
      }, HybridRendererBase.prototype.updateContainerSize = function() {
        var e, t, r, n, i = this.animationItem.wrapper.offsetWidth,
          a = this.animationItem.wrapper.offsetHeight,
          o = i / a;
        this.globalData.compSize.w / this.globalData.compSize.h > o ? (e = i / this.globalData.compSize.w, t = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0);
        var s = this.resizerElem.style;
        s.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", s.transform = s.webkitTransform
      }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
        this.resizerElem.style.display = "none"
      }, HybridRendererBase.prototype.show = function() {
        this.resizerElem.style.display = "block"
      }, HybridRendererBase.prototype.initItems = function() {
        if (this.buildAllItems(), this.camera) this.camera.setup();
        else {
          var e, t = this.globalData.compSize.w,
            r = this.globalData.compSize.h,
            n = this.threeDElements.length;
          for (e = 0; e < n; e += 1) {
            var i = this.threeDElements[e].perspectiveElem.style;
            i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
          }
        }
      }, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
        var t, r = e.length,
          n = createTag("div");
        for (t = 0; t < r; t += 1)
          if (e[t].xt) {
            var i = this.createComp(e[t], n, this.globalData.comp, null);
            i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
          }
      }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
      }, HCompElement.prototype.addTo3dContainer = function(e, t) {
        for (var r, n = 0; n < t;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
        r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
      }, HCompElement.prototype.createComp = function(e) {
        return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
      }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
        return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
      };
      var CompExpressionInterface = function(e) {
        function t(r) {
          for (var n = 0, i = e.layers.length; n < i;) {
            if (e.layers[n].nm === r || e.layers[n].ind === r) return e.elements[n].layerInterface;
            n += 1
          }
          return null
        }
        return Object.defineProperty(t, "_name", {
          value: e.data.nm
        }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
      };

      function _typeof$2(e) {
        return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$2(e)
      }

      function seedRandom(e, t) {
        var r, n = this,
          i = 256,
          a = t.pow(i, 6),
          o = t.pow(2, 52),
          s = 2 * o,
          l = 255;

        function f(h) {
          var m, c = h.length,
            y = this,
            v = 0,
            E = y.i = y.j = 0,
            b = y.S = [];
          for (c || (h = [c++]); v < i;) b[v] = v++;
          for (v = 0; v < i; v++) b[v] = b[E = l & E + h[v % c] + (m = b[v])], b[E] = m;
          y.g = function(_) {
            for (var A, S = 0, x = y.i, L = y.j, w = y.S; _--;) A = w[x = l & x + 1], S = S * i + w[l & (w[x] = w[L = l & L + A]) + (w[L] = A)];
            return y.i = x, y.j = L, S
          }
        }

        function u(h, m) {
          return m.i = h.i, m.j = h.j, m.S = h.S.slice(), m
        }

        function p(h, m) {
          var c, y = [],
            v = _typeof$2(h);
          if (m && v == "object")
            for (c in h) try {
              y.push(p(h[c], m - 1))
            } catch {}
          return y.length ? y : v == "string" ? h : h + "\0"
        }

        function g(h, m) {
          for (var c, y = h + "", v = 0; v < y.length;) m[l & v] = l & (c ^= 19 * m[l & v]) + y.charCodeAt(v++);
          return d(m)
        }

        function d(h) {
          return String.fromCharCode.apply(0, h)
        }
        t.seedrandom = function(h, m, c) {
          var y = [],
            v = g(p((m = m === !0 ? {
              entropy: !0
            } : m || {}).entropy ? [h, d(e)] : h === null ? function() {
              try {
                var _ = new Uint8Array(i);
                return (n.crypto || n.msCrypto).getRandomValues(_), d(_)
              } catch {
                var A = n.navigator,
                  S = A && A.plugins;
                return [+new Date, n, S, n.screen, d(e)]
              }
            }() : h, 3), y),
            E = new f(y),
            b = function() {
              for (var _ = E.g(6), A = a, S = 0; _ < o;) _ = (_ + S) * i, A *= i, S = E.g(1);
              for (; _ >= s;) _ /= 2, A /= 2, S >>>= 1;
              return (_ + S) / A
            };
          return b.int32 = function() {
            return 0 | E.g(4)
          }, b.quick = function() {
            return E.g(4) / 4294967296
          }, b.double = b, g(d(E.S), e), (m.pass || c || function(_, A, S, x) {
            return x && (x.S && u(x, E), _.state = function() {
              return u(E, {})
            }), S ? (t.random = _, A) : _
          })(b, v, "global" in m ? m.global : this == t, m.state)
        }, g(t.random(), e)
      }

      function initialize$2(e) {
        seedRandom([], e)
      }
      var propTypes = {
        SHAPE: "shape"
      };

      function _typeof$1(e) {
        return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$1(e)
      }
      var ExpressionManager = function() {
          var ob = {},
            Math = BMMath,
            window = null,
            document = null,
            XMLHttpRequest = null,
            fetch = null,
            frames = null,
            _lottieGlobal = {};

          function resetFrame() {
            _lottieGlobal = {}
          }

          function $bm_isInstanceOfArray(e) {
            return e.constructor === Array || e.constructor === Float32Array
          }

          function isNumerable(e, t) {
            return e === "number" || t instanceof Number || e === "boolean" || e === "string"
          }

          function $bm_neg(e) {
            var t = _typeof$1(e);
            if (t === "number" || e instanceof Number || t === "boolean") return -e;
            if ($bm_isInstanceOfArray(e)) {
              var r, n = e.length,
                i = [];
              for (r = 0; r < n; r += 1) i[r] = -e[r];
              return i
            }
            return e.propType ? e.v : -e
          }
          initialize$2(BMMath);
          var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

          function sum(e, t) {
            var r = _typeof$1(e),
              n = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(n, t) || r === "string" || n === "string") return e + t;
            if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] += t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var i = 0, a = e.length, o = t.length, s = []; i < a || i < o;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? s[i] = e[i] + t[i] : s[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
              return s
            }
            return 0
          }
          var add = sum;

          function sub(e, t) {
            var r = _typeof$1(e),
              n = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(n, t)) return r === "string" && (e = parseInt(e, 10)), n === "string" && (t = parseInt(t, 10)), e - t;
            if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] -= t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var i = 0, a = e.length, o = t.length, s = []; i < a || i < o;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? s[i] = e[i] - t[i] : s[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
              return s
            }
            return 0
          }

          function mul(e, t) {
            var r, n, i, a = _typeof$1(e),
              o = _typeof$1(t);
            if (isNumerable(a, e) && isNumerable(o, t)) return e * t;
            if ($bm_isInstanceOfArray(e) && isNumerable(o, t)) {
              for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] * t;
              return r
            }
            if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
              for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e * t[n];
              return r
            }
            return 0
          }

          function div(e, t) {
            var r, n, i, a = _typeof$1(e),
              o = _typeof$1(t);
            if (isNumerable(a, e) && isNumerable(o, t)) return e / t;
            if ($bm_isInstanceOfArray(e) && isNumerable(o, t)) {
              for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] / t;
              return r
            }
            if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
              for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e / t[n];
              return r
            }
            return 0
          }

          function mod(e, t) {
            return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t
          }
          var $bm_sum = sum,
            $bm_sub = sub,
            $bm_mul = mul,
            $bm_div = div,
            $bm_mod = mod;

          function clamp(e, t, r) {
            if (t > r) {
              var n = r;
              r = t, t = n
            }
            return Math.min(Math.max(e, t), r)
          }

          function radiansToDegrees(e) {
            return e / degToRads
          }
          var radians_to_degrees = radiansToDegrees;

          function degreesToRadians(e) {
            return e * degToRads
          }
          var degrees_to_radians = radiansToDegrees,
            helperLengthArray = [0, 0, 0, 0, 0, 0];

          function length(e, t) {
            if (typeof e == "number" || e instanceof Number) return t = t || 0, Math.abs(e - t);
            var r;
            t || (t = helperLengthArray);
            var n = Math.min(e.length, t.length),
              i = 0;
            for (r = 0; r < n; r += 1) i += Math.pow(t[r] - e[r], 2);
            return Math.sqrt(i)
          }

          function normalize(e) {
            return div(e, length(e))
          }

          function rgbToHsl(e) {
            var t, r, n = e[0],
              i = e[1],
              a = e[2],
              o = Math.max(n, i, a),
              s = Math.min(n, i, a),
              l = (o + s) / 2;
            if (o === s) t = 0, r = 0;
            else {
              var f = o - s;
              switch (r = l > .5 ? f / (2 - o - s) : f / (o + s), o) {
                case n:
                  t = (i - a) / f + (i < a ? 6 : 0);
                  break;
                case i:
                  t = (a - n) / f + 2;
                  break;
                case a:
                  t = (n - i) / f + 4
              }
              t /= 6
            }
            return [t, r, l, e[3]]
          }

          function hue2rgb(e, t, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
          }

          function hslToRgb(e) {
            var t, r, n, i = e[0],
              a = e[1],
              o = e[2];
            if (a === 0) t = o, n = o, r = o;
            else {
              var s = o < .5 ? o * (1 + a) : o + a - o * a,
                l = 2 * o - s;
              t = hue2rgb(l, s, i + 1 / 3), r = hue2rgb(l, s, i), n = hue2rgb(l, s, i - 1 / 3)
            }
            return [t, r, n, e[3]]
          }

          function linear(e, t, r, n, i) {
            if (n !== void 0 && i !== void 0 || (n = t, i = r, t = 0, r = 1), r < t) {
              var a = r;
              r = t, t = a
            }
            if (e <= t) return n;
            if (e >= r) return i;
            var o, s = r === t ? 0 : (e - t) / (r - t);
            if (!n.length) return n + (i - n) * s;
            var l = n.length,
              f = createTypedArray("float32", l);
            for (o = 0; o < l; o += 1) f[o] = n[o] + (i[o] - n[o]) * s;
            return f
          }

          function random(e, t) {
            if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
              var r, n = t.length;
              e || (e = createTypedArray("float32", n));
              var i = createTypedArray("float32", n),
                a = BMMath.random();
              for (r = 0; r < n; r += 1) i[r] = e[r] + a * (t[r] - e[r]);
              return i
            }
            return e === void 0 && (e = 0), e + BMMath.random() * (t - e)
          }

          function createPath(e, t, r, n) {
            var i, a = e.length,
              o = shapePool.newElement();
            o.setPathData(!!n, a);
            var s, l, f = [0, 0];
            for (i = 0; i < a; i += 1) s = t && t[i] ? t[i] : f, l = r && r[i] ? r[i] : f, o.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], s[0] + e[i][0], s[1] + e[i][1], i, !0);
            return o
          }

          function initiateExpression(elem, data, property) {
            function noOp(e) {
              return e
            }
            if (!elem.globalData.renderConfig.runExpressions) return noOp;
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = val.indexOf("random") !== -1,
              elemType = elem.data.ty,
              transform, $bm_transform, content, effect, thisProperty = property;
            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
              get: function() {
                return thisProperty.v
              }
            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
              outPoint = elem.data.op / elem.comp.globalData.frameRate,
              width = elem.data.sw ? elem.data.sw : 0,
              height = elem.data.sh ? elem.data.sh : 0,
              name = elem.data.nm,
              loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
              numKeys = property.kf ? data.k.length : 0,
              active = !this.data || this.data.hd !== !0,
              wiggle = function(e, t) {
                var r, n, i = this.pv.length ? this.pv.length : 1,
                  a = createTypedArray("float32", i),
                  o = Math.floor(5 * time);
                for (r = 0, n = 0; r < o;) {
                  for (n = 0; n < i; n += 1) a[n] += -t + 2 * t * BMMath.random();
                  r += 1
                }
                var s = 5 * time,
                  l = s - Math.floor(s),
                  f = createTypedArray("float32", i);
                if (i > 1) {
                  for (n = 0; n < i; n += 1) f[n] = this.pv[n] + a[n] + (-t + 2 * t * BMMath.random()) * l;
                  return f
                }
                return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
              }.bind(this);

            function loopInDuration(e, t) {
              return loopIn(e, t, !0)
            }

            function loopOutDuration(e, t) {
              return loopOut(e, t, !0)
            }
            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
              time, velocity, value, text, textIndex, textTotal, selectorValue;

            function lookAt(e, t) {
              var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
              return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
            }

            function easeOut(e, t, r, n, i) {
              return applyEase(easeOutBez, e, t, r, n, i)
            }

            function easeIn(e, t, r, n, i) {
              return applyEase(easeInBez, e, t, r, n, i)
            }

            function ease(e, t, r, n, i) {
              return applyEase(easeInOutBez, e, t, r, n, i)
            }

            function applyEase(e, t, r, n, i, a) {
              i === void 0 ? (i = r, a = n) : t = (t - r) / (n - r), t > 1 ? t = 1 : t < 0 && (t = 0);
              var o = e(t);
              if ($bm_isInstanceOfArray(i)) {
                var s, l = i.length,
                  f = createTypedArray("float32", l);
                for (s = 0; s < l; s += 1) f[s] = (a[s] - i[s]) * o + i[s];
                return f
              }
              return (a - i) * o + i
            }

            function nearestKey(e) {
              var t, r, n, i = data.k.length;
              if (data.k.length && typeof data.k[0] != "number")
                if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
                else {
                  for (t = 0; t < i - 1; t += 1) {
                    if (e === data.k[t].t) {
                      r = t + 1, n = data.k[t].t;
                      break
                    }
                    if (e > data.k[t].t && e < data.k[t + 1].t) {
                      e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, n = data.k[t + 1].t) : (r = t + 1, n = data.k[t].t);
                      break
                    }
                  }
                  r === -1 && (r = t + 1, n = data.k[t].t)
                }
              else r = 0, n = 0;
              var a = {};
              return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
            }

            function key(e) {
              var t, r, n;
              if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + e);
              e -= 1, t = {
                time: data.k[e].t / elem.comp.globalData.frameRate,
                value: []
              };
              var i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
              for (n = i.length, r = 0; r < n; r += 1) t[r] = i[r], t.value[r] = i[r];
              return t
            }

            function framesToTime(e, t) {
              return t || (t = elem.comp.globalData.frameRate), e / t
            }

            function timeToFrames(e, t) {
              return e || e === 0 || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
            }

            function seedRandom(e) {
              BMMath.seedrandom(randSeed + e)
            }

            function sourceRectAtTime() {
              return elem.sourceRectAtTime()
            }

            function substring(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : ""
            }

            function substr(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : ""
            }

            function posterizeTime(e) {
              time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
            }
            var index = elem.data.ind,
              hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
              parent, randSeed = Math.floor(1e6 * Math.random()),
              globalData = elem.globalData;

            function executeExpression(e) {
              return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
            }
            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
          }
          return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
        }(),
        Expressions = function() {
          var e = {};
          return e.initExpressions = function(t) {
            var r = 0,
              n = [];
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
              r += 1
            }, t.renderer.globalData.popExpression = function() {
              (r -= 1) == 0 && function() {
                var i, a = n.length;
                for (i = 0; i < a; i += 1) n[i].release();
                n.length = 0
              }()
            }, t.renderer.globalData.registerExpressionProperty = function(i) {
              n.indexOf(i) === -1 && n.push(i)
            }
          }, e.resetFrame = ExpressionManager.resetFrame, e
        }(),
        MaskManagerInterface = function() {
          function e(t, r) {
            this._mask = t, this._data = r
          }
          return Object.defineProperty(e.prototype, "maskPath", {
              get: function() {
                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
              }
            }), Object.defineProperty(e.prototype, "maskOpacity", {
              get: function() {
                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
              }
            }),
            function(t) {
              var r, n = createSizedArray(t.viewData.length),
                i = t.viewData.length;
              for (r = 0; r < i; r += 1) n[r] = new e(t.viewData[r], t.masksProperties[r]);
              return function(a) {
                for (r = 0; r < i;) {
                  if (t.masksProperties[r].nm === a) return n[r];
                  r += 1
                }
                return null
              }
            }
        }(),
        ExpressionPropertyInterface = function() {
          var e = {
              pv: 0,
              v: 0,
              mult: 1
            },
            t = {
              pv: [0, 0, 0],
              v: [0, 0, 0],
              mult: 1
            };

          function r(i, a, o) {
            Object.defineProperty(i, "velocity", {
              get: function() {
                return a.getVelocityAtTime(a.comp.currentFrame)
              }
            }), i.numKeys = a.keyframes ? a.keyframes.length : 0, i.key = function(s) {
              if (!i.numKeys) return 0;
              var l = "";
              l = "s" in a.keyframes[s - 1] ? a.keyframes[s - 1].s : "e" in a.keyframes[s - 2] ? a.keyframes[s - 2].e : a.keyframes[s - 2].s;
              var f = o === "unidimensional" ? new Number(l) : Object.assign({}, l);
              return f.time = a.keyframes[s - 1].t / a.elem.comp.globalData.frameRate, f.value = o === "unidimensional" ? l[0] : l, f
            }, i.valueAtTime = a.getValueAtTime, i.speedAtTime = a.getSpeedAtTime, i.velocityAtTime = a.getVelocityAtTime, i.propertyGroup = a.propertyGroup
          }

          function n() {
            return e
          }
          return function(i) {
            return i ? i.propType === "unidimensional" ? function(a) {
              a && "pv" in a || (a = e);
              var o = 1 / a.mult,
                s = a.pv * o,
                l = new Number(s);
              return l.value = s, r(l, a, "unidimensional"),
                function() {
                  return a.k && a.getValue(), s = a.v * o, l.value !== s && ((l = new Number(s)).value = s, r(l, a, "unidimensional")), l
                }
            }(i) : function(a) {
              a && "pv" in a || (a = t);
              var o = 1 / a.mult,
                s = a.data && a.data.l || a.pv.length,
                l = createTypedArray("float32", s),
                f = createTypedArray("float32", s);
              return l.value = f, r(l, a, "multidimensional"),
                function() {
                  a.k && a.getValue();
                  for (var u = 0; u < s; u += 1) f[u] = a.v[u] * o, l[u] = f[u];
                  return l
                }
            }(i) : n
          }
        }(),
        TransformExpressionInterface = function(e) {
          function t(o) {
            switch (o) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return t.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return t.rotation;
              case "ADBE Rotate X":
                return t.xRotation;
              case "ADBE Rotate Y":
                return t.yRotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return t.position;
              case "ADBE Position_0":
                return t.xPosition;
              case "ADBE Position_1":
                return t.yPosition;
              case "ADBE Position_2":
                return t.zPosition;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return t.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return t.opacity;
              default:
                return null
            }
          }
          var r, n, i, a;
          return Object.defineProperty(t, "rotation", {
            get: ExpressionPropertyInterface(e.r || e.rz)
          }), Object.defineProperty(t, "zRotation", {
            get: ExpressionPropertyInterface(e.rz || e.r)
          }), Object.defineProperty(t, "xRotation", {
            get: ExpressionPropertyInterface(e.rx)
          }), Object.defineProperty(t, "yRotation", {
            get: ExpressionPropertyInterface(e.ry)
          }), Object.defineProperty(t, "scale", {
            get: ExpressionPropertyInterface(e.s)
          }), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), n = ExpressionPropertyInterface(e.py), e.pz && (i = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
            get: function() {
              return e.p ? a() : [r(), n(), i ? i() : 0]
            }
          }), Object.defineProperty(t, "xPosition", {
            get: ExpressionPropertyInterface(e.px)
          }), Object.defineProperty(t, "yPosition", {
            get: ExpressionPropertyInterface(e.py)
          }), Object.defineProperty(t, "zPosition", {
            get: ExpressionPropertyInterface(e.pz)
          }), Object.defineProperty(t, "anchorPoint", {
            get: ExpressionPropertyInterface(e.a)
          }), Object.defineProperty(t, "opacity", {
            get: ExpressionPropertyInterface(e.o)
          }), Object.defineProperty(t, "skew", {
            get: ExpressionPropertyInterface(e.sk)
          }), Object.defineProperty(t, "skewAxis", {
            get: ExpressionPropertyInterface(e.sa)
          }), Object.defineProperty(t, "orientation", {
            get: ExpressionPropertyInterface(e.or)
          }), t
        },
        LayerExpressionInterface = function() {
          function e(f) {
            var u = new Matrix;
            return f !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(f).clone(u) : this._elem.finalTransform.mProp.applyToMatrix(u), u
          }

          function t(f, u) {
            var p = this.getMatrix(u);
            return p.props[12] = 0, p.props[13] = 0, p.props[14] = 0, this.applyPoint(p, f)
          }

          function r(f, u) {
            var p = this.getMatrix(u);
            return this.applyPoint(p, f)
          }

          function n(f, u) {
            var p = this.getMatrix(u);
            return p.props[12] = 0, p.props[13] = 0, p.props[14] = 0, this.invertPoint(p, f)
          }

          function i(f, u) {
            var p = this.getMatrix(u);
            return this.invertPoint(p, f)
          }

          function a(f, u) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var p, g = this._elem.hierarchy.length;
              for (p = 0; p < g; p += 1) this._elem.hierarchy[p].finalTransform.mProp.applyToMatrix(f)
            }
            return f.applyToPointArray(u[0], u[1], u[2] || 0)
          }

          function o(f, u) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var p, g = this._elem.hierarchy.length;
              for (p = 0; p < g; p += 1) this._elem.hierarchy[p].finalTransform.mProp.applyToMatrix(f)
            }
            return f.inversePoint(u)
          }

          function s(f) {
            var u = new Matrix;
            if (u.reset(), this._elem.finalTransform.mProp.applyToMatrix(u), this._elem.hierarchy && this._elem.hierarchy.length) {
              var p, g = this._elem.hierarchy.length;
              for (p = 0; p < g; p += 1) this._elem.hierarchy[p].finalTransform.mProp.applyToMatrix(u);
              return u.inversePoint(f)
            }
            return u.inversePoint(f)
          }

          function l() {
            return [1, 1, 1, 1]
          }
          return function(f) {
            var u;

            function p(d) {
              switch (d) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return p.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return u;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return p.effect;
                case "ADBE Text Properties":
                  return p.textInterface;
                default:
                  return null
              }
            }
            p.getMatrix = e, p.invertPoint = o, p.applyPoint = a, p.toWorld = r, p.toWorldVec = t, p.fromWorld = i, p.fromWorldVec = n, p.toComp = r, p.fromComp = s, p.sampleImage = l, p.sourceRectAtTime = f.sourceRectAtTime.bind(f), p._elem = f;
            var g = getDescriptor(u = TransformExpressionInterface(f.finalTransform.mProp), "anchorPoint");
            return Object.defineProperties(p, {
              hasParent: {
                get: function() {
                  return f.hierarchy.length
                }
              },
              parent: {
                get: function() {
                  return f.hierarchy[0].layerInterface
                }
              },
              rotation: getDescriptor(u, "rotation"),
              scale: getDescriptor(u, "scale"),
              position: getDescriptor(u, "position"),
              opacity: getDescriptor(u, "opacity"),
              anchorPoint: g,
              anchor_point: g,
              transform: {
                get: function() {
                  return u
                }
              },
              active: {
                get: function() {
                  return f.isInRange
                }
              }
            }), p.startTime = f.data.st, p.index = f.data.ind, p.source = f.data.refId, p.height = f.data.ty === 0 ? f.data.h : 100, p.width = f.data.ty === 0 ? f.data.w : 100, p.inPoint = f.data.ip / f.comp.globalData.frameRate, p.outPoint = f.data.op / f.comp.globalData.frameRate, p._name = f.data.nm, p.registerMaskInterface = function(d) {
              p.mask = new MaskManagerInterface(d, f)
            }, p.registerEffectsInterface = function(d) {
              p.effect = d
            }, p
          }
        }(),
        propertyGroupFactory = function(e, t) {
          return function(r) {
            return (r = r === void 0 ? 1 : r) <= 0 ? e : t(r - 1)
          }
        },
        PropertyInterface = function(e, t) {
          var r = {
            _name: e
          };
          return function(n) {
            return (n = n === void 0 ? 1 : n) <= 0 ? r : t(n - 1)
          }
        },
        EffectsExpressionInterface = function() {
          function e(r, n, i, a) {
            function o(p) {
              for (var g = r.ef, d = 0, h = g.length; d < h;) {
                if (p === g[d].nm || p === g[d].mn || p === g[d].ix) return g[d].ty === 5 ? f[d] : f[d]();
                d += 1
              }
              throw new Error
            }
            var s, l = propertyGroupFactory(o, i),
              f = [],
              u = r.ef.length;
            for (s = 0; s < u; s += 1) r.ef[s].ty === 5 ? f.push(e(r.ef[s], n.effectElements[s], n.effectElements[s].propertyGroup, a)) : f.push(t(n.effectElements[s], r.ef[s].ty, a, l));
            return r.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
              get: function() {
                return f[0]()
              }
            }), Object.defineProperties(o, {
              numProperties: {
                get: function() {
                  return r.np
                }
              },
              _name: {
                value: r.nm
              },
              propertyGroup: {
                value: l
              }
            }), o.enabled = r.en !== 0, o.active = o.enabled, o
          }

          function t(r, n, i, a) {
            var o = ExpressionPropertyInterface(r.p);
            return r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", a)),
              function() {
                return n === 10 ? i.comp.compInterface(r.p.v) : o()
              }
          }
          return {
            createEffectsInterface: function(r, n) {
              if (r.effectsManager) {
                var i, a = [],
                  o = r.data.ef,
                  s = r.effectsManager.effectElements.length;
                for (i = 0; i < s; i += 1) a.push(e(o[i], r.effectsManager.effectElements[i], n, r));
                var l = r.data.ef || [],
                  f = function(u) {
                    for (i = 0, s = l.length; i < s;) {
                      if (u === l[i].nm || u === l[i].mn || u === l[i].ix) return a[i];
                      i += 1
                    }
                    return null
                  };
                return Object.defineProperty(f, "numProperties", {
                  get: function() {
                    return l.length
                  }
                }), f
              }
              return null
            }
          }
        }(),
        ShapePathInterface = function(e, t, r) {
          var n = t.sh;

          function i(o) {
            return o === "Shape" || o === "shape" || o === "Path" || o === "path" || o === "ADBE Vector Shape" || o === 2 ? i.path : null
          }
          var a = propertyGroupFactory(i, r);
          return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
            path: {
              get: function() {
                return n.k && n.getValue(), n
              }
            },
            shape: {
              get: function() {
                return n.k && n.getValue(), n
              }
            },
            _name: {
              value: e.nm
            },
            ix: {
              value: e.ix
            },
            propertyIndex: {
              value: e.ix
            },
            mn: {
              value: e.mn
            },
            propertyGroup: {
              value: r
            }
          }), i
        },
        ShapeExpressionInterface = function() {
          function e(d, h, m) {
            var c, y = [],
              v = d ? d.length : 0;
            for (c = 0; c < v; c += 1) d[c].ty === "gr" ? y.push(t(d[c], h[c], m)) : d[c].ty === "fl" ? y.push(r(d[c], h[c], m)) : d[c].ty === "st" ? y.push(a(d[c], h[c], m)) : d[c].ty === "tm" ? y.push(o(d[c], h[c], m)) : d[c].ty === "tr" || (d[c].ty === "el" ? y.push(l(d[c], h[c], m)) : d[c].ty === "sr" ? y.push(f(d[c], h[c], m)) : d[c].ty === "sh" ? y.push(ShapePathInterface(d[c], h[c], m)) : d[c].ty === "rc" ? y.push(u(d[c], h[c], m)) : d[c].ty === "rd" ? y.push(p(d[c], h[c], m)) : d[c].ty === "rp" ? y.push(g(d[c], h[c], m)) : d[c].ty === "gf" ? y.push(n(d[c], h[c], m)) : y.push(i(d[c], h[c])));
            return y
          }

          function t(d, h, m) {
            var c = function(E) {
              switch (E) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return c.content;
                default:
                  return c.transform
              }
            };
            c.propertyGroup = propertyGroupFactory(c, m);
            var y = function(E, b, _) {
                var A, S = function(L) {
                  for (var w = 0, C = A.length; w < C;) {
                    if (A[w]._name === L || A[w].mn === L || A[w].propertyIndex === L || A[w].ix === L || A[w].ind === L) return A[w];
                    w += 1
                  }
                  return typeof L == "number" ? A[L - 1] : null
                };
                S.propertyGroup = propertyGroupFactory(S, _), A = e(E.it, b.it, S.propertyGroup), S.numProperties = A.length;
                var x = s(E.it[E.it.length - 1], b.it[b.it.length - 1], S.propertyGroup);
                return S.transform = x, S.propertyIndex = E.cix, S._name = E.nm, S
              }(d, h, c.propertyGroup),
              v = s(d.it[d.it.length - 1], h.it[h.it.length - 1], c.propertyGroup);
            return c.content = y, c.transform = v, Object.defineProperty(c, "_name", {
              get: function() {
                return d.nm
              }
            }), c.numProperties = d.np, c.propertyIndex = d.ix, c.nm = d.nm, c.mn = d.mn, c
          }

          function r(d, h, m) {
            function c(y) {
              return y === "Color" || y === "color" ? c.color : y === "Opacity" || y === "opacity" ? c.opacity : null
            }
            return Object.defineProperties(c, {
              color: {
                get: ExpressionPropertyInterface(h.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(h.o)
              },
              _name: {
                value: d.nm
              },
              mn: {
                value: d.mn
              }
            }), h.c.setGroupProperty(PropertyInterface("Color", m)), h.o.setGroupProperty(PropertyInterface("Opacity", m)), c
          }

          function n(d, h, m) {
            function c(y) {
              return y === "Start Point" || y === "start point" ? c.startPoint : y === "End Point" || y === "end point" ? c.endPoint : y === "Opacity" || y === "opacity" ? c.opacity : null
            }
            return Object.defineProperties(c, {
              startPoint: {
                get: ExpressionPropertyInterface(h.s)
              },
              endPoint: {
                get: ExpressionPropertyInterface(h.e)
              },
              opacity: {
                get: ExpressionPropertyInterface(h.o)
              },
              type: {
                get: function() {
                  return "a"
                }
              },
              _name: {
                value: d.nm
              },
              mn: {
                value: d.mn
              }
            }), h.s.setGroupProperty(PropertyInterface("Start Point", m)), h.e.setGroupProperty(PropertyInterface("End Point", m)), h.o.setGroupProperty(PropertyInterface("Opacity", m)), c
          }

          function i() {
            return function() {
              return null
            }
          }

          function a(d, h, m) {
            var c, y = propertyGroupFactory(A, m),
              v = propertyGroupFactory(_, y);

            function E(S) {
              Object.defineProperty(_, d.d[S].nm, {
                get: ExpressionPropertyInterface(h.d.dataProps[S].p)
              })
            }
            var b = d.d ? d.d.length : 0,
              _ = {};
            for (c = 0; c < b; c += 1) E(c), h.d.dataProps[c].p.setGroupProperty(v);

            function A(S) {
              return S === "Color" || S === "color" ? A.color : S === "Opacity" || S === "opacity" ? A.opacity : S === "Stroke Width" || S === "stroke width" ? A.strokeWidth : null
            }
            return Object.defineProperties(A, {
              color: {
                get: ExpressionPropertyInterface(h.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(h.o)
              },
              strokeWidth: {
                get: ExpressionPropertyInterface(h.w)
              },
              dash: {
                get: function() {
                  return _
                }
              },
              _name: {
                value: d.nm
              },
              mn: {
                value: d.mn
              }
            }), h.c.setGroupProperty(PropertyInterface("Color", y)), h.o.setGroupProperty(PropertyInterface("Opacity", y)), h.w.setGroupProperty(PropertyInterface("Stroke Width", y)), A
          }

          function o(d, h, m) {
            function c(v) {
              return v === d.e.ix || v === "End" || v === "end" ? c.end : v === d.s.ix ? c.start : v === d.o.ix ? c.offset : null
            }
            var y = propertyGroupFactory(c, m);
            return c.propertyIndex = d.ix, h.s.setGroupProperty(PropertyInterface("Start", y)), h.e.setGroupProperty(PropertyInterface("End", y)), h.o.setGroupProperty(PropertyInterface("Offset", y)), c.propertyIndex = d.ix, c.propertyGroup = m, Object.defineProperties(c, {
              start: {
                get: ExpressionPropertyInterface(h.s)
              },
              end: {
                get: ExpressionPropertyInterface(h.e)
              },
              offset: {
                get: ExpressionPropertyInterface(h.o)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function s(d, h, m) {
            function c(v) {
              return d.a.ix === v || v === "Anchor Point" ? c.anchorPoint : d.o.ix === v || v === "Opacity" ? c.opacity : d.p.ix === v || v === "Position" ? c.position : d.r.ix === v || v === "Rotation" || v === "ADBE Vector Rotation" ? c.rotation : d.s.ix === v || v === "Scale" ? c.scale : d.sk && d.sk.ix === v || v === "Skew" ? c.skew : d.sa && d.sa.ix === v || v === "Skew Axis" ? c.skewAxis : null
            }
            var y = propertyGroupFactory(c, m);
            return h.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", y)), h.transform.mProps.p.setGroupProperty(PropertyInterface("Position", y)), h.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", y)), h.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", y)), h.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", y)), h.transform.mProps.sk && (h.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", y)), h.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", y))), h.transform.op.setGroupProperty(PropertyInterface("Opacity", y)), Object.defineProperties(c, {
              opacity: {
                get: ExpressionPropertyInterface(h.transform.mProps.o)
              },
              position: {
                get: ExpressionPropertyInterface(h.transform.mProps.p)
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(h.transform.mProps.a)
              },
              scale: {
                get: ExpressionPropertyInterface(h.transform.mProps.s)
              },
              rotation: {
                get: ExpressionPropertyInterface(h.transform.mProps.r)
              },
              skew: {
                get: ExpressionPropertyInterface(h.transform.mProps.sk)
              },
              skewAxis: {
                get: ExpressionPropertyInterface(h.transform.mProps.sa)
              },
              _name: {
                value: d.nm
              }
            }), c.ty = "tr", c.mn = d.mn, c.propertyGroup = m, c
          }

          function l(d, h, m) {
            function c(E) {
              return d.p.ix === E ? c.position : d.s.ix === E ? c.size : null
            }
            var y = propertyGroupFactory(c, m);
            c.propertyIndex = d.ix;
            var v = h.sh.ty === "tm" ? h.sh.prop : h.sh;
            return v.s.setGroupProperty(PropertyInterface("Size", y)), v.p.setGroupProperty(PropertyInterface("Position", y)), Object.defineProperties(c, {
              size: {
                get: ExpressionPropertyInterface(v.s)
              },
              position: {
                get: ExpressionPropertyInterface(v.p)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function f(d, h, m) {
            function c(E) {
              return d.p.ix === E ? c.position : d.r.ix === E ? c.rotation : d.pt.ix === E ? c.points : d.or.ix === E || E === "ADBE Vector Star Outer Radius" ? c.outerRadius : d.os.ix === E ? c.outerRoundness : !d.ir || d.ir.ix !== E && E !== "ADBE Vector Star Inner Radius" ? d.is && d.is.ix === E ? c.innerRoundness : null : c.innerRadius
            }
            var y = propertyGroupFactory(c, m),
              v = h.sh.ty === "tm" ? h.sh.prop : h.sh;
            return c.propertyIndex = d.ix, v.or.setGroupProperty(PropertyInterface("Outer Radius", y)), v.os.setGroupProperty(PropertyInterface("Outer Roundness", y)), v.pt.setGroupProperty(PropertyInterface("Points", y)), v.p.setGroupProperty(PropertyInterface("Position", y)), v.r.setGroupProperty(PropertyInterface("Rotation", y)), d.ir && (v.ir.setGroupProperty(PropertyInterface("Inner Radius", y)), v.is.setGroupProperty(PropertyInterface("Inner Roundness", y))), Object.defineProperties(c, {
              position: {
                get: ExpressionPropertyInterface(v.p)
              },
              rotation: {
                get: ExpressionPropertyInterface(v.r)
              },
              points: {
                get: ExpressionPropertyInterface(v.pt)
              },
              outerRadius: {
                get: ExpressionPropertyInterface(v.or)
              },
              outerRoundness: {
                get: ExpressionPropertyInterface(v.os)
              },
              innerRadius: {
                get: ExpressionPropertyInterface(v.ir)
              },
              innerRoundness: {
                get: ExpressionPropertyInterface(v.is)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function u(d, h, m) {
            function c(E) {
              return d.p.ix === E ? c.position : d.r.ix === E ? c.roundness : d.s.ix === E || E === "Size" || E === "ADBE Vector Rect Size" ? c.size : null
            }
            var y = propertyGroupFactory(c, m),
              v = h.sh.ty === "tm" ? h.sh.prop : h.sh;
            return c.propertyIndex = d.ix, v.p.setGroupProperty(PropertyInterface("Position", y)), v.s.setGroupProperty(PropertyInterface("Size", y)), v.r.setGroupProperty(PropertyInterface("Rotation", y)), Object.defineProperties(c, {
              position: {
                get: ExpressionPropertyInterface(v.p)
              },
              roundness: {
                get: ExpressionPropertyInterface(v.r)
              },
              size: {
                get: ExpressionPropertyInterface(v.s)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function p(d, h, m) {
            function c(E) {
              return d.r.ix === E || E === "Round Corners 1" ? c.radius : null
            }
            var y = propertyGroupFactory(c, m),
              v = h;
            return c.propertyIndex = d.ix, v.rd.setGroupProperty(PropertyInterface("Radius", y)), Object.defineProperties(c, {
              radius: {
                get: ExpressionPropertyInterface(v.rd)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function g(d, h, m) {
            function c(E) {
              return d.c.ix === E || E === "Copies" ? c.copies : d.o.ix === E || E === "Offset" ? c.offset : null
            }
            var y = propertyGroupFactory(c, m),
              v = h;
            return c.propertyIndex = d.ix, v.c.setGroupProperty(PropertyInterface("Copies", y)), v.o.setGroupProperty(PropertyInterface("Offset", y)), Object.defineProperties(c, {
              copies: {
                get: ExpressionPropertyInterface(v.c)
              },
              offset: {
                get: ExpressionPropertyInterface(v.o)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }
          return function(d, h, m) {
            var c;

            function y(v) {
              if (typeof v == "number") return (v = v === void 0 ? 1 : v) === 0 ? m : c[v - 1];
              for (var E = 0, b = c.length; E < b;) {
                if (c[E]._name === v) return c[E];
                E += 1
              }
              return null
            }
            return y.propertyGroup = propertyGroupFactory(y, function() {
              return m
            }), c = e(d, h, y.propertyGroup), y.numProperties = c.length, y._name = "Contents", y
          }
        }(),
        TextExpressionInterface = function(e) {
          var t;

          function r(n) {
            return n === "ADBE Text Document" ? r.sourceText : null
          }
          return Object.defineProperty(r, "sourceText", {
            get: function() {
              e.textProperty.getValue();
              var n = e.textProperty.currentData.t;
              return t && n === t.value || ((t = new String(n)).value = n || new String(n), Object.defineProperty(t, "style", {
                get: function() {
                  return {
                    fillColor: e.textProperty.currentData.fc
                  }
                }
              })), t
            }
          }), r
        };

      function _typeof(e) {
        return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof(e)
      }
      var FootageInterface = (dataInterfaceFactory = function(e) {
          function t(r) {
            return r === "Outline" ? t.outlineInterface() : null
          }
          return t._name = "Outline", t.outlineInterface = function(r) {
            var n = "",
              i = r.getFootageData();

            function a(o) {
              if (i[o]) return n = o, _typeof(i = i[o]) === "object" ? a : i;
              var s = o.indexOf(n);
              if (s !== -1) {
                var l = parseInt(o.substr(s + n.length), 10);
                return _typeof(i = i[l]) === "object" ? a : i
              }
              return ""
            }
            return function() {
              return n = "", i = r.getFootageData(), a
            }
          }(e), t
        }, function(e) {
          function t(r) {
            return r === "Data" ? t.dataInterface : null
          }
          return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
        }),
        dataInterfaceFactory, interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface
        };

      function getInterface(e) {
        return interfaces[e] || null
      }
      var expressionHelpers = {
        searchExpressions: function(e, t, r) {
          t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
        },
        getSpeedAtTime: function(e) {
          var t = this.getValueAtTime(e),
            r = this.getValueAtTime(e + -.01),
            n = 0;
          if (t.length) {
            var i;
            for (i = 0; i < t.length; i += 1) n += Math.pow(r[i] - t[i], 2);
            n = 100 * Math.sqrt(n)
          } else n = 0;
          return n
        },
        getVelocityAtTime: function(e) {
          if (this.vel !== void 0) return this.vel;
          var t, r, n = -.001,
            i = this.getValueAtTime(e),
            a = this.getValueAtTime(e + n);
          if (i.length)
            for (t = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) t[r] = (a[r] - i[r]) / n;
          else t = (a - i) / n;
          return t
        },
        getValueAtTime: function(e) {
          return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
        },
        getStaticValueAtTime: function() {
          return this.pv
        },
        setGroupProperty: function(e) {
          this.propertyGroup = e
        }
      };

      function addPropertyDecorator() {
        function e(p, g, d) {
          if (!this.k || !this.keyframes) return this.pv;
          p = p ? p.toLowerCase() : "";
          var h, m, c, y, v, E = this.comp.renderedFrame,
            b = this.keyframes,
            _ = b[b.length - 1].t;
          if (E <= _) return this.pv;
          if (d ? m = _ - (h = g ? Math.abs(_ - this.elem.comp.globalData.frameRate * g) : Math.max(0, _ - this.elem.data.ip)) : ((!g || g > b.length - 1) && (g = b.length - 1), h = _ - (m = b[b.length - 1 - g].t)), p === "pingpong") {
            if (Math.floor((E - m) / h) % 2 != 0) return this.getValueAtTime((h - (E - m) % h + m) / this.comp.globalData.frameRate, 0)
          } else {
            if (p === "offset") {
              var A = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
                S = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
                x = this.getValueAtTime(((E - m) % h + m) / this.comp.globalData.frameRate, 0),
                L = Math.floor((E - m) / h);
              if (this.pv.length) {
                for (y = (v = new Array(A.length)).length, c = 0; c < y; c += 1) v[c] = (S[c] - A[c]) * L + x[c];
                return v
              }
              return (S - A) * L + x
            }
            if (p === "continue") {
              var w = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
                C = this.getValueAtTime((_ - .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (y = (v = new Array(w.length)).length, c = 0; c < y; c += 1) v[c] = w[c] + (w[c] - C[c]) * ((E - _) / this.comp.globalData.frameRate) / 5e-4;
                return v
              }
              return w + (E - _) / .001 * (w - C)
            }
          }
          return this.getValueAtTime(((E - m) % h + m) / this.comp.globalData.frameRate, 0)
        }

        function t(p, g, d) {
          if (!this.k) return this.pv;
          p = p ? p.toLowerCase() : "";
          var h, m, c, y, v, E = this.comp.renderedFrame,
            b = this.keyframes,
            _ = b[0].t;
          if (E >= _) return this.pv;
          if (d ? m = _ + (h = g ? Math.abs(this.elem.comp.globalData.frameRate * g) : Math.max(0, this.elem.data.op - _)) : ((!g || g > b.length - 1) && (g = b.length - 1), h = (m = b[g].t) - _), p === "pingpong") {
            if (Math.floor((_ - E) / h) % 2 == 0) return this.getValueAtTime(((_ - E) % h + _) / this.comp.globalData.frameRate, 0)
          } else {
            if (p === "offset") {
              var A = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
                S = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
                x = this.getValueAtTime((h - (_ - E) % h + _) / this.comp.globalData.frameRate, 0),
                L = Math.floor((_ - E) / h) + 1;
              if (this.pv.length) {
                for (y = (v = new Array(A.length)).length, c = 0; c < y; c += 1) v[c] = x[c] - (S[c] - A[c]) * L;
                return v
              }
              return x - (S - A) * L
            }
            if (p === "continue") {
              var w = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
                C = this.getValueAtTime((_ + .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (y = (v = new Array(w.length)).length, c = 0; c < y; c += 1) v[c] = w[c] + (w[c] - C[c]) * (_ - E) / .001;
                return v
              }
              return w + (w - C) * (_ - E) / .001
            }
          }
          return this.getValueAtTime((h - ((_ - E) % h + _)) / this.comp.globalData.frameRate, 0)
        }

        function r(p, g) {
          if (!this.k) return this.pv;
          if (p = .5 * (p || .4), (g = Math.floor(g || 5)) <= 1) return this.pv;
          var d, h, m = this.comp.renderedFrame / this.comp.globalData.frameRate,
            c = m - p,
            y = g > 1 ? (m + p - c) / (g - 1) : 1,
            v = 0,
            E = 0;
          for (d = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; v < g;) {
            if (h = this.getValueAtTime(c + v * y), this.pv.length)
              for (E = 0; E < this.pv.length; E += 1) d[E] += h[E];
            else d += h;
            v += 1
          }
          if (this.pv.length)
            for (E = 0; E < this.pv.length; E += 1) d[E] /= g;
          else d /= g;
          return d
        }

        function n(p) {
          this._transformCachingAtTime || (this._transformCachingAtTime = {
            v: new Matrix
          });
          var g = this._transformCachingAtTime.v;
          if (g.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
            var d = this.a.getValueAtTime(p);
            g.translate(-d[0] * this.a.mult, -d[1] * this.a.mult, d[2] * this.a.mult)
          }
          if (this.appliedTransformations < 2) {
            var h = this.s.getValueAtTime(p);
            g.scale(h[0] * this.s.mult, h[1] * this.s.mult, h[2] * this.s.mult)
          }
          if (this.sk && this.appliedTransformations < 3) {
            var m = this.sk.getValueAtTime(p),
              c = this.sa.getValueAtTime(p);
            g.skewFromAxis(-m * this.sk.mult, c * this.sa.mult)
          }
          if (this.r && this.appliedTransformations < 4) {
            var y = this.r.getValueAtTime(p);
            g.rotate(-y * this.r.mult)
          } else if (!this.r && this.appliedTransformations < 4) {
            var v = this.rz.getValueAtTime(p),
              E = this.ry.getValueAtTime(p),
              b = this.rx.getValueAtTime(p),
              _ = this.or.getValueAtTime(p);
            g.rotateZ(-v * this.rz.mult).rotateY(E * this.ry.mult).rotateX(b * this.rx.mult).rotateZ(-_[2] * this.or.mult).rotateY(_[1] * this.or.mult).rotateX(_[0] * this.or.mult)
          }
          if (this.data.p && this.data.p.s) {
            var A = this.px.getValueAtTime(p),
              S = this.py.getValueAtTime(p);
            if (this.data.p.z) {
              var x = this.pz.getValueAtTime(p);
              g.translate(A * this.px.mult, S * this.py.mult, -x * this.pz.mult)
            } else g.translate(A * this.px.mult, S * this.py.mult, 0)
          } else {
            var L = this.p.getValueAtTime(p);
            g.translate(L[0] * this.p.mult, L[1] * this.p.mult, -L[2] * this.p.mult)
          }
          return g
        }

        function i() {
          return this.v.clone(new Matrix)
        }
        var a = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function(p, g, d) {
          var h = a(p, g, d);
          return h.dynamicProperties.length ? h.getValueAtTime = n.bind(h) : h.getValueAtTime = i.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h
        };
        var o = PropertyFactory.getProp;
        PropertyFactory.getProp = function(p, g, d, h, m) {
          var c = o(p, g, d, h, m);
          c.kf ? c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c) : c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c), c.setGroupProperty = expressionHelpers.setGroupProperty, c.loopOut = e, c.loopIn = t, c.smooth = r, c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c), c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c), c.numKeys = g.a === 1 ? g.k.length : 0, c.propertyIndex = g.ix;
          var y = 0;
          return d !== 0 && (y = createTypedArray("float32", g.a === 1 ? g.k[0].s.length : g.k.length)), c._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: y
          }, expressionHelpers.searchExpressions(p, g, c), c.k && m.addDynamicProperty(c), c
        };
        var s = ShapePropertyFactory.getConstructorFunction(),
          l = ShapePropertyFactory.getKeyframedConstructorFunction();

        function f() {}
        f.prototype = {
          vertices: function(p, g) {
            this.k && this.getValue();
            var d, h = this.v;
            g !== void 0 && (h = this.getValueAtTime(g, 0));
            var m = h._length,
              c = h[p],
              y = h.v,
              v = createSizedArray(m);
            for (d = 0; d < m; d += 1) v[d] = p === "i" || p === "o" ? [c[d][0] - y[d][0], c[d][1] - y[d][1]] : [c[d][0], c[d][1]];
            return v
          },
          points: function(p) {
            return this.vertices("v", p)
          },
          inTangents: function(p) {
            return this.vertices("i", p)
          },
          outTangents: function(p) {
            return this.vertices("o", p)
          },
          isClosed: function() {
            return this.v.c
          },
          pointOnPath: function(p, g) {
            var d = this.v;
            g !== void 0 && (d = this.getValueAtTime(g, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
            for (var h, m = this._segmentsLength, c = m.lengths, y = m.totalLength * p, v = 0, E = c.length, b = 0; v < E;) {
              if (b + c[v].addedLength > y) {
                var _ = v,
                  A = d.c && v === E - 1 ? 0 : v + 1,
                  S = (y - b) / c[v].addedLength;
                h = bez.getPointInSegment(d.v[_], d.v[A], d.o[_], d.i[A], S, c[v]);
                break
              }
              b += c[v].addedLength, v += 1
            }
            return h || (h = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]), h
          },
          vectorOnPath: function(p, g, d) {
            p == 1 ? p = this.v.c : p == 0 && (p = .999);
            var h = this.pointOnPath(p, g),
              m = this.pointOnPath(p + .001, g),
              c = m[0] - h[0],
              y = m[1] - h[1],
              v = Math.sqrt(Math.pow(c, 2) + Math.pow(y, 2));
            return v === 0 ? [0, 0] : d === "tangent" ? [c / v, y / v] : [-y / v, c / v]
          },
          tangentOnPath: function(p, g) {
            return this.vectorOnPath(p, g, "tangent")
          },
          normalOnPath: function(p, g) {
            return this.vectorOnPath(p, g, "normal")
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime
        }, extendPrototype([f], s), extendPrototype([f], l), l.prototype.getValueAtTime = function(p) {
          return this._cachingAtTime || (this._cachingAtTime = {
            shapeValue: shapePool.clone(this.pv),
            lastIndex: 0,
            lastTime: initialDefaultFrame
          }), p *= this.elem.globalData.frameRate, (p -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < p ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = p, this.interpolateShape(p, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
        }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var u = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function(p, g, d, h, m) {
          var c = u(p, g, d, h, m);
          return c.propertyIndex = g.ix, c.lock = !1, d === 3 ? expressionHelpers.searchExpressions(p, g.pt, c) : d === 4 && expressionHelpers.searchExpressions(p, g.ks, c), c.k && p.addDynamicProperty(c), c
        }
      }

      function initialize$1() {
        addPropertyDecorator()
      }

      function addDecorator() {
        TextProperty.prototype.getExpressionValue = function(e, t) {
          var r = this.calculateExpression(t);
          if (e.t !== r) {
            var n = {};
            return this.copyData(n, e), n.t = r.toString(), n.__complete = !1, n
          }
          return e
        }, TextProperty.prototype.searchProperty = function() {
          var e = this.searchKeyframes(),
            t = this.searchExpressions();
          return this.kf = e || t, this.kf
        }, TextProperty.prototype.searchExpressions = function() {
          return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
        }
      }

      function initialize() {
        addDecorator()
      }

      function SVGComposableEffect() {}
      SVGComposableEffect.prototype = {
        createMergeNode: function(e, t) {
          var r, n, i = createNS("feMerge");
          for (i.setAttribute("result", e), n = 0; n < t.length; n += 1)(r = createNS("feMergeNode")).setAttribute("in", t[n]), i.appendChild(r), i.appendChild(r);
          return i
        }
      };
      var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

      function SVGTintFilter(e, t, r, n, i) {
        this.filterManager = t;
        var a = createNS("feColorMatrix");
        a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", n + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", n + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
        var o = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
        e.appendChild(o)
      }

      function SVGFillFilter(e, t, r, n) {
        this.filterManager = t;
        var i = createNS("feColorMatrix");
        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", n), e.appendChild(i), this.matrixFilter = i
      }

      function SVGStrokeEffect(e, t, r) {
        this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
      }

      function SVGTritoneFilter(e, t, r, n) {
        this.filterManager = t;
        var i = createNS("feColorMatrix");
        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(i);
        var a = createNS("feComponentTransfer");
        a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), this.matrixFilter = a;
        var o = createNS("feFuncR");
        o.setAttribute("type", "table"), a.appendChild(o), this.feFuncR = o;
        var s = createNS("feFuncG");
        s.setAttribute("type", "table"), a.appendChild(s), this.feFuncG = s;
        var l = createNS("feFuncB");
        l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
      }

      function SVGProLevelsFilter(e, t, r, n) {
        this.filterManager = t;
        var i = this.filterManager.effectElements,
          a = createNS("feComponentTransfer");
        (i[10].p.k || i[10].p.v !== 0 || i[11].p.k || i[11].p.v !== 1 || i[12].p.k || i[12].p.v !== 1 || i[13].p.k || i[13].p.v !== 0 || i[14].p.k || i[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || i[17].p.v !== 0 || i[18].p.k || i[18].p.v !== 1 || i[19].p.k || i[19].p.v !== 1 || i[20].p.k || i[20].p.v !== 0 || i[21].p.k || i[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || i[24].p.v !== 0 || i[25].p.k || i[25].p.v !== 1 || i[26].p.k || i[26].p.v !== 1 || i[27].p.k || i[27].p.v !== 0 || i[28].p.k || i[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || i[31].p.v !== 0 || i[32].p.k || i[32].p.v !== 1 || i[33].p.k || i[33].p.v !== 1 || i[34].p.k || i[34].p.v !== 0 || i[35].p.k || i[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (i[3].p.k || i[3].p.v !== 0 || i[4].p.k || i[4].p.v !== 1 || i[5].p.k || i[5].p.v !== 1 || i[6].p.k || i[6].p.v !== 0 || i[7].p.k || i[7].p.v !== 1) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
      }

      function SVGDropShadowEffect(e, t, r, n, i) {
        var a = t.container.globalData.renderConfig.filterSize,
          o = t.data.fs || a;
        e.setAttribute("x", o.x || a.x), e.setAttribute("y", o.y || a.y), e.setAttribute("width", o.width || a.width), e.setAttribute("height", o.height || a.height), this.filterManager = t;
        var s = createNS("feGaussianBlur");
        s.setAttribute("in", "SourceAlpha"), s.setAttribute("result", n + "_drop_shadow_1"), s.setAttribute("stdDeviation", "0"), this.feGaussianBlur = s, e.appendChild(s);
        var l = createNS("feOffset");
        l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", n + "_drop_shadow_1"), l.setAttribute("result", n + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
        var f = createNS("feFlood");
        f.setAttribute("flood-color", "#00ff00"), f.setAttribute("flood-opacity", "1"), f.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = f, e.appendChild(f);
        var u = createNS("feComposite");
        u.setAttribute("in", n + "_drop_shadow_3"), u.setAttribute("in2", n + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", n + "_drop_shadow_4"), e.appendChild(u);
        var p = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
        e.appendChild(p)
      }
      extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            n = this.filterManager.effectElements[2].p.v / 100;
          this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
        }
      }, SVGFillFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[2].p.v,
            r = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
        }
      }, SVGStrokeEffect.prototype.initialize = function() {
        var e, t, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (this.filterManager.effectElements[1].p.v === 1 ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < n; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
          p: e,
          m: r
        });
        if (this.filterManager.effectElements[10].p.v === 3) {
          var a = createNS("mask"),
            o = createElementID();
          a.setAttribute("id", o), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
          var s = createNS("g");
          for (s.setAttribute("mask", "url(" + getLocationHref() + "#" + o + ")"); i[0];) s.appendChild(i[0]);
          this.elem.layerElement.appendChild(s), this.masker = a, t.setAttribute("stroke", "#fff")
        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
          if (this.filterManager.effectElements[10].p.v === 2)
            for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
          this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
        }
        this.initialized = !0, this.pathMasker = t
      }, SVGStrokeEffect.prototype.renderFrame = function(e) {
        var t;
        this.initialized || this.initialize();
        var r, n, i = this.paths.length;
        for (t = 0; t < i; t += 1)
          if (this.paths[t].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[t].m], n = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
            var a;
            if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
              var o = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                s = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                l = n.getTotalLength();
              a = "0 0 0 " + l * o + " ";
              var f, u = l * (s - o),
                p = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                g = Math.floor(u / p);
              for (f = 0; f < g; f += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
              a += "0 " + 10 * l + " 0 0"
            } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
            n.setAttribute("stroke-dasharray", a)
          } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
          var d = this.filterManager.effectElements[3].p.v;
          this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
        }
      }, SVGTritoneFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            n = this.filterManager.effectElements[2].p.v,
            i = n[0] + " " + r[0] + " " + t[0],
            a = n[1] + " " + r[1] + " " + t[1],
            o = n[2] + " " + r[2] + " " + t[2];
          this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", o)
        }
      }, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
        var r = createNS(e);
        return r.setAttribute("type", "table"), t.appendChild(r), r
      }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, n, i) {
        for (var a, o, s = 0, l = Math.min(e, t), f = Math.max(e, t), u = Array.call(null, {
            length: 256
          }), p = 0, g = i - n, d = t - e; s <= 256;) o = (a = s / 256) <= l ? d < 0 ? i : n : a >= f ? d < 0 ? n : i : n + g * Math.pow((a - e) / d, 1 / r), u[p] = o, p += 1, s += 256 / 255;
        return u.join(" ")
      }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t, r = this.filterManager.effectElements;
          this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
        }
      }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
            var t = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
          }
          if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
            var r = this.filterManager.effectElements[3].p.v,
              n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
              i = r * Math.cos(n),
              a = r * Math.sin(n);
            this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
          }
        }
      };
      var _svgMatteSymbols = [];

      function SVGMatte3Effect(e, t, r) {
        this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
      }

      function SVGGaussianBlurEffect(e, t, r, n) {
        e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
        var i = createNS("feGaussianBlur");
        i.setAttribute("result", n), e.appendChild(i), this.feGaussianBlur = i
      }

      function TransformEffect() {}

      function SVGTransformEffect(e, t) {
        this.init(t)
      }

      function CVTransformEffect(e) {
        this.init(e)
      }
      return SVGMatte3Effect.prototype.findSymbol = function(e) {
        for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
          if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
          t += 1
        }
        return null
      }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
        var r = e.layerElement.parentNode;
        if (r) {
          for (var n, i = r.children, a = 0, o = i.length; a < o && i[a] !== e.layerElement;) a += 1;
          a <= o - 2 && (n = i[a + 1]);
          var s = createNS("use");
          s.setAttribute("href", "#" + t), n ? r.insertBefore(s, n) : r.appendChild(s)
        }
      }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
        if (!this.findSymbol(t)) {
          var r = createElementID(),
            n = createNS("mask");
          n.setAttribute("id", t.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
          var i = e.globalData.defs;
          i.appendChild(n);
          var a = createNS("symbol");
          a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), i.appendChild(a);
          var o = createNS("use");
          o.setAttribute("href", "#" + r), n.appendChild(o), t.data.hd = !1, t.show()
        }
        e.setMatte(t.layerId)
      }, SVGMatte3Effect.prototype.initialize = function() {
        for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, n = t.length; r < n;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
        this.initialized = !0
      }, SVGMatte3Effect.prototype.renderFrame = function() {
        this.initialized || this.initialize()
      }, SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t = .3 * this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            n = r == 3 ? 0 : t,
            i = r == 2 ? 0 : t;
          this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
          var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
          this.feGaussianBlur.setAttribute("edgeMode", a)
        }
      }, TransformEffect.prototype.init = function(e) {
        this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
      }, TransformEffect.prototype.renderFrame = function(e) {
        if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
          var t = this.effectsManager.effectElements,
            r = t[0].p.v,
            n = t[1].p.v,
            i = t[2].p.v === 1,
            a = t[3].p.v,
            o = i ? a : t[4].p.v,
            s = t[5].p.v,
            l = t[6].p.v,
            f = t[7].p.v;
          this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * o, .01 * a, 1), this.matrix.rotate(-f * degToRads), this.matrix.skewFromAxis(-s * degToRads, (l + 90) * degToRads), this.matrix.translate(n[0], n[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
        }
      }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
    })
  });
  var eI = I((LY, Jb) => {
    "use strict";
    var XG = Me(),
      un = $b(),
      jG = Zb();
    XG.define("lottie", Jb.exports = function() {
      return {
        lottie: jG,
        createInstance: un.createInstance,
        cleanupElement: un.cleanupElement,
        init: un.init,
        destroy: un.destroy,
        ready: un.ready
      }
    })
  });
  var tI = I(() => {
    "use strict";
    (function() {
      if (typeof window > "u") return;
      let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
        t = e ? parseInt(e[1], 10) >= 16 : !1;
      if ("objectFit" in document.documentElement.style && !t) {
        window.objectFitPolyfill = function() {
          return !1
        };
        return
      }
      let n = function(s) {
          let l = window.getComputedStyle(s, null),
            f = l.getPropertyValue("position"),
            u = l.getPropertyValue("overflow"),
            p = l.getPropertyValue("display");
          (!f || f === "static") && (s.style.position = "relative"), u !== "hidden" && (s.style.overflow = "hidden"), (!p || p === "inline") && (s.style.display = "block"), s.clientHeight === 0 && (s.style.height = "100%"), s.className.indexOf("object-fit-polyfill") === -1 && (s.className += " object-fit-polyfill")
        },
        i = function(s) {
          let l = window.getComputedStyle(s, null),
            f = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px"
            };
          for (let u in f) l.getPropertyValue(u) !== f[u] && (s.style[u] = f[u])
        },
        a = function(s) {
          let l = s.parentNode;
          n(l), i(s), s.style.position = "absolute", s.style.height = "100%", s.style.width = "auto", s.clientWidth > l.clientWidth ? (s.style.top = "0", s.style.marginTop = "0", s.style.left = "50%", s.style.marginLeft = s.clientWidth / -2 + "px") : (s.style.width = "100%", s.style.height = "auto", s.style.left = "0", s.style.marginLeft = "0", s.style.top = "50%", s.style.marginTop = s.clientHeight / -2 + "px")
        },
        o = function(s) {
          if (typeof s > "u" || s instanceof Event) s = document.querySelectorAll("[data-object-fit]");
          else if (s && s.nodeName) s = [s];
          else if (typeof s == "object" && s.length && s[0].nodeName) s = s;
          else return !1;
          for (let l = 0; l < s.length; l++) {
            if (!s[l].nodeName) continue;
            let f = s[l].nodeName.toLowerCase();
            if (f === "img") {
              if (t) continue;
              s[l].complete ? a(s[l]) : s[l].addEventListener("load", function() {
                a(this)
              })
            } else f === "video" ? s[l].readyState > 0 ? a(s[l]) : s[l].addEventListener("loadedmetadata", function() {
              a(this)
            }) : a(s[l])
          }
          return !0
        };
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", o) : o(), window.addEventListener("resize", o), window.objectFitPolyfill = o
    })()
  });
  var rI = I(() => {
    "use strict";
    (function() {
      if (typeof window > "u") return;

      function e(n) {
        Webflow.env("design") || ($("video").each(function() {
          n && $(this).prop("autoplay") ? this.play() : this.pause()
        }), $(".w-background-video--control").each(function() {
          n ? r($(this)) : t($(this))
        }))
      }

      function t(n) {
        n.find("> span").each(function(i) {
          $(this).prop("hidden", () => i === 0)
        })
      }

      function r(n) {
        n.find("> span").each(function(i) {
          $(this).prop("hidden", () => i === 1)
        })
      }
      $(document).ready(() => {
        let n = window.matchMedia("(prefers-reduced-motion: reduce)");
        n.addEventListener("change", i => {
          e(!i.matches)
        }), n.matches && e(!1), $("video:not([autoplay])").each(function() {
          $(this).parent().find(".w-background-video--control").each(function() {
            t($(this))
          })
        }), $(document).on("click", ".w-background-video--control", function(i) {
          if (Webflow.env("design")) return;
          let a = $(i.currentTarget),
            o = $(`video#${a.attr("aria-controls")}`).get(0);
          if (o)
            if (o.paused) {
              let s = o.play();
              r(a), s && typeof s.catch == "function" && s.catch(() => {
                t(a)
              })
            } else o.pause(), t(a)
        })
      })
    })()
  });
  var nI = I(Ll => {
    "use strict";
    Object.defineProperty(Ll, "__esModule", {
      value: !0
    });
    Object.defineProperty(Ll, "default", {
      enumerable: !0,
      get: function() {
        return YG
      }
    });

    function YG(e, t, r, n, i, a, o, s, l, f, u, p, g) {
      return function(d) {
        e(d);
        var h = d.form,
          m = {
            name: h.attr("data-name") || h.attr("name") || "Untitled Form",
            pageId: h.attr("data-wf-page-id") || "",
            elementId: h.attr("data-wf-element-id") || "",
            domain: p("html").attr("data-wf-domain") || null,
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(h.html()),
            trackingCookies: n()
          };
        let c = h.attr("data-wf-flow");
        c && (m.wfFlow = c), i(d);
        var y = a(h, m.fields);
        if (y) return o(y);
        if (m.fileUploads = s(h), l(d), !f) {
          u(d);
          return
        }
        p.ajax({
          url: g,
          type: "POST",
          data: m,
          dataType: "json",
          crossDomain: !0
        }).done(function(v) {
          v && v.code === 200 && (d.success = !0), u(d)
        }).fail(function() {
          u(d)
        })
      }
    }
  });
  var aI = I((BY, iI) => {
    "use strict";
    var ji = Me(),
      KG = (e, t, r, n) => {
        let i = document.createElement("div");
        t.appendChild(i), turnstile.render(i, {
          sitekey: e,
          callback: function(a) {
            r(a)
          },
          "error-callback": function() {
            n()
          }
        })
      };
    ji.define("forms", iI.exports = function(e, t) {
      let r = "TURNSTILE_LOADED";
      var n = {},
        i = e(document),
        a, o = window.location,
        s = window.XDomainRequest && !window.atob,
        l = ".w-form",
        f, u = /e(-)?mail/i,
        p = /^\S+@\S+$/,
        g = window.alert,
        d = ji.env(),
        h, m, c;
      let y = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
        v;
      var E = /list-manage[1-9]?.com/i,
        b = t.debounce(function() {
          g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
        }, 100);
      n.ready = n.design = n.preview = function() {
        A(), _(), !d && !h && x()
      };

      function _() {
        f = e("html").attr("data-wf-site"), m = "https://webflow.com/api/v1/form/" + f, s && m.indexOf("https://webflow.com") >= 0 && (m = m.replace("https://webflow.com", "https://formdata.webflow.com")), c = `${m}/signFile`, a = e(l + " form"), a.length && a.each(S)
      }

      function A() {
        y && (v = document.createElement("script"), v.src = "https://challenges.cloudflare.com/turnstile/v0/api.js", document.head.appendChild(v), v.onload = () => {
          i.trigger(r)
        })
      }

      function S(N, T) {
        var q = e(T),
          H = e.data(T, l);
        H || (H = e.data(T, l, {
          form: q
        })), L(H);
        var B = q.closest("div.w-form");
        H.done = B.find("> .w-form-done"), H.fail = B.find("> .w-form-fail"), H.fileUploads = B.find(".w-file-upload"), H.fileUploads.each(function(te) {
          J(te, H)
        }), y && (H.wait = !1, w(H), i.on(typeof turnstile < "u" ? "ready" : r, function() {
          KG(y, T, te => {
            H.turnstileToken = te, L(H)
          }, () => {
            w(H)
          })
        }));
        var ee = H.form.attr("aria-label") || H.form.attr("data-name") || "Form";
        H.done.attr("aria-label") || H.form.attr("aria-label", ee), H.done.attr("tabindex", "-1"), H.done.attr("role", "region"), H.done.attr("aria-label") || H.done.attr("aria-label", ee + " success"), H.fail.attr("tabindex", "-1"), H.fail.attr("role", "region"), H.fail.attr("aria-label") || H.fail.attr("aria-label", ee + " failure");
        var ae = H.action = q.attr("action");
        if (H.handler = null, H.redirect = q.attr("data-redirect"), E.test(ae)) {
          H.handler = ne;
          return
        }
        if (!ae) {
          if (f) {
            H.handler = (() => {
              let te = nI().default;
              return te(L, o, ji, F, G, C, g, k, w, f, P, e, m)
            })();
            return
          }
          b()
        }
      }

      function x() {
        h = !0, i.on("submit", l + " form", function(te) {
          var R = e.data(this, l);
          R.handler && (R.evt = te, R.handler(R))
        });
        let N = ".w-checkbox-input",
          T = ".w-radio-input",
          q = "w--redirected-checked",
          H = "w--redirected-focus",
          B = "w--redirected-focus-visible",
          ee = ":focus-visible, [data-wf-focus-visible]",
          ae = [
            ["checkbox", N],
            ["radio", T]
          ];
        i.on("change", l + ' form input[type="checkbox"]:not(' + N + ")", te => {
          e(te.target).siblings(N).toggleClass(q)
        }), i.on("change", l + ' form input[type="radio"]', te => {
          e(`input[name="${te.target.name}"]:not(${N})`).map((Z, ie) => e(ie).siblings(T).removeClass(q));
          let R = e(te.target);
          R.hasClass("w-radio-input") || R.siblings(T).addClass(q)
        }), ae.forEach(([te, R]) => {
          i.on("focus", l + ` form input[type="${te}"]:not(` + R + ")", Z => {
            e(Z.target).siblings(R).addClass(H), e(Z.target).filter(ee).siblings(R).addClass(B)
          }), i.on("blur", l + ` form input[type="${te}"]:not(` + R + ")", Z => {
            e(Z.target).siblings(R).removeClass(`${H} ${B}`)
          })
        })
      }

      function L(N) {
        var T = N.btn = N.form.find(':input[type="submit"]');
        N.wait = N.btn.attr("data-wait") || null, N.success = !1, T.prop("disabled", !!(y && !N.turnstileToken)), N.label && T.val(N.label)
      }

      function w(N) {
        var T = N.btn,
          q = N.wait;
        T.prop("disabled", !0), q && (N.label = T.val(), T.val(q))
      }

      function C(N, T) {
        var q = null;
        return T = T || {}, N.find(':input:not([type="submit"]):not([type="file"])').each(function(H, B) {
          var ee = e(B),
            ae = ee.attr("type"),
            te = ee.attr("data-name") || ee.attr("name") || "Field " + (H + 1);
          te = encodeURIComponent(te);
          var R = ee.val();
          if (ae === "checkbox") R = ee.is(":checked");
          else if (ae === "radio") {
            if (T[te] === null || typeof T[te] == "string") return;
            R = N.find('input[name="' + ee.attr("name") + '"]:checked').val() || null
          }
          typeof R == "string" && (R = e.trim(R)), T[te] = R, q = q || U(ee, ae, te, R)
        }), q
      }

      function k(N) {
        var T = {};
        return N.find(':input[type="file"]').each(function(q, H) {
          var B = e(H),
            ee = B.attr("data-name") || B.attr("name") || "File " + (q + 1),
            ae = B.attr("data-value");
          typeof ae == "string" && (ae = e.trim(ae)), T[ee] = ae
        }), T
      }
      let M = {
        _mkto_trk: "marketo"
      };

      function F() {
        return document.cookie.split("; ").reduce(function(T, q) {
          let H = q.split("="),
            B = H[0];
          if (B in M) {
            let ee = M[B],
              ae = H.slice(1).join("=");
            T[ee] = ae
          }
          return T
        }, {})
      }

      function U(N, T, q, H) {
        var B = null;
        return T === "password" ? B = "Passwords cannot be submitted." : N.attr("required") ? H ? u.test(N.attr("type")) && (p.test(H) || (B = "Please enter a valid email address for: " + q)) : B = "Please fill out the required field: " + q : q === "g-recaptcha-response" && !H && (B = "Please confirm you\u2019re not a robot."), B
      }

      function X(N) {
        G(N), P(N)
      }

      function ne(N) {
        L(N);
        var T = N.form,
          q = {};
        if (/^https/.test(o.href) && !/^https/.test(N.action)) {
          T.attr("method", "post");
          return
        }
        G(N);
        var H = C(T, q);
        if (H) return g(H);
        w(N);
        var B;
        t.each(q, function(R, Z) {
          u.test(Z) && (q.EMAIL = R), /^((full[ _-]?)?name)$/i.test(Z) && (B = R), /^(first[ _-]?name)$/i.test(Z) && (q.FNAME = R), /^(last[ _-]?name)$/i.test(Z) && (q.LNAME = R)
        }), B && !q.FNAME && (B = B.split(" "), q.FNAME = B[0], q.LNAME = q.LNAME || B[1]);
        var ee = N.action.replace("/post?", "/post-json?") + "&c=?",
          ae = ee.indexOf("u=") + 2;
        ae = ee.substring(ae, ee.indexOf("&", ae));
        var te = ee.indexOf("id=") + 3;
        te = ee.substring(te, ee.indexOf("&", te)), q["b_" + ae + "_" + te] = "", e.ajax({
          url: ee,
          data: q,
          dataType: "jsonp"
        }).done(function(R) {
          N.success = R.result === "success" || /already/.test(R.msg), N.success || console.info("MailChimp error: " + R.msg), P(N)
        }).fail(function() {
          P(N)
        })
      }

      function P(N) {
        var T = N.form,
          q = N.redirect,
          H = N.success;
        if (H && q) {
          ji.location(q);
          return
        }
        N.done.toggle(H), N.fail.toggle(!H), H ? N.done.focus() : N.fail.focus(), T.toggle(!H), L(N)
      }

      function G(N) {
        N.evt && N.evt.preventDefault(), N.evt = null
      }

      function J(N, T) {
        if (!T.fileUploads || !T.fileUploads[N]) return;
        var q, H = e(T.fileUploads[N]),
          B = H.find("> .w-file-upload-default"),
          ee = H.find("> .w-file-upload-uploading"),
          ae = H.find("> .w-file-upload-success"),
          te = H.find("> .w-file-upload-error"),
          R = B.find(".w-file-upload-input"),
          Z = B.find(".w-file-upload-label"),
          ie = Z.children(),
          j = te.find(".w-file-upload-error-msg"),
          he = ae.find(".w-file-upload-file"),
          be = ae.find(".w-file-remove-link"),
          _e = he.find(".w-file-upload-file-name"),
          O = j.attr("data-w-size-error"),
          V = j.attr("data-w-type-error"),
          z = j.attr("data-w-generic-error");
        if (d || Z.on("click keydown", function(oe) {
            oe.type === "keydown" && oe.which !== 13 && oe.which !== 32 || (oe.preventDefault(), R.click())
          }), Z.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), be.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), d) R.on("click", function(oe) {
          oe.preventDefault()
        }), Z.on("click", function(oe) {
          oe.preventDefault()
        }), ie.on("click", function(oe) {
          oe.preventDefault()
        });
        else {
          be.on("click keydown", function(oe) {
            if (oe.type === "keydown") {
              if (oe.which !== 13 && oe.which !== 32) return;
              oe.preventDefault()
            }
            R.removeAttr("data-value"), R.val(""), _e.html(""), B.toggle(!0), ae.toggle(!1), Z.focus()
          }), R.on("change", function(oe) {
            q = oe.target && oe.target.files && oe.target.files[0], q && (B.toggle(!1), te.toggle(!1), ee.toggle(!0), ee.focus(), _e.text(q.name), le() || w(T), T.fileUploads[N].uploading = !0, D(q, Y))
          });
          var W = Z.outerHeight();
          R.height(W), R.width(1)
        }

        function K(oe) {
          var re = oe.responseJSON && oe.responseJSON.msg,
            ue = z;
          typeof re == "string" && re.indexOf("InvalidFileTypeError") === 0 ? ue = V : typeof re == "string" && re.indexOf("MaxFileSizeError") === 0 && (ue = O), j.text(ue), R.removeAttr("data-value"), R.val(""), ee.toggle(!1), B.toggle(!0), te.toggle(!0), te.focus(), T.fileUploads[N].uploading = !1, le() || L(T)
        }

        function Y(oe, re) {
          if (oe) return K(oe);
          var ue = re.fileName,
            fe = re.postData,
            ve = re.fileId,
            Ge = re.s3Url;
          R.attr("data-value", ve), Q(Ge, fe, q, ue, se)
        }

        function se(oe) {
          if (oe) return K(oe);
          ee.toggle(!1), ae.css("display", "inline-block"), ae.focus(), T.fileUploads[N].uploading = !1, le() || L(T)
        }

        function le() {
          var oe = T.fileUploads && T.fileUploads.toArray() || [];
          return oe.some(function(re) {
            return re.uploading
          })
        }
      }

      function D(N, T) {
        var q = new URLSearchParams({
          name: N.name,
          size: N.size
        });
        e.ajax({
          type: "GET",
          url: `${c}?${q}`,
          crossDomain: !0
        }).done(function(H) {
          T(null, H)
        }).fail(function(H) {
          T(H)
        })
      }

      function Q(N, T, q, H, B) {
        var ee = new FormData;
        for (var ae in T) ee.append(ae, T[ae]);
        ee.append("file", q, H), e.ajax({
          type: "POST",
          url: N,
          data: ee,
          processData: !1,
          contentType: !1
        }).done(function() {
          B(null)
        }).fail(function(te) {
          B(te)
        })
      }
      return n
    })
  });
  var lI = I((GY, oI) => {
    "use strict";
    var Mt = Me(),
      QG = Zr(),
      ut = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      },
      sI = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Mt.define("slider", oI.exports = function(e, t) {
      var r = {},
        n = e.tram,
        i = e(document),
        a, o, s = Mt.env(),
        l = ".w-slider",
        f = '<div class="w-slider-dot" data-wf-ignore />',
        u = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
        p = "w-slider-force-show",
        g = QG.triggers,
        d, h = !1;
      r.ready = function() {
        o = Mt.env("design"), m()
      }, r.design = function() {
        o = !0, setTimeout(m, 1e3)
      }, r.preview = function() {
        o = !1, m()
      }, r.redraw = function() {
        h = !0, m(), h = !1
      }, r.destroy = c;

      function m() {
        a = i.find(l), a.length && (a.each(E), !d && (c(), y()))
      }

      function c() {
        Mt.resize.off(v), Mt.redraw.off(r.redraw)
      }

      function y() {
        Mt.resize.on(v), Mt.redraw.on(r.redraw)
      }

      function v() {
        a.filter(":visible").each(X)
      }

      function E(D, Q) {
        var N = e(Q),
          T = e.data(Q, l);
        T || (T = e.data(Q, l, {
          index: 0,
          depth: 1,
          hasFocus: {
            keyboard: !1,
            mouse: !1
          },
          el: N,
          config: {}
        })), T.mask = N.children(".w-slider-mask"), T.left = N.children(".w-slider-arrow-left"), T.right = N.children(".w-slider-arrow-right"), T.nav = N.children(".w-slider-nav"), T.slides = T.mask.children(".w-slide"), T.slides.each(g.reset), h && (T.maskWidth = 0), N.attr("role") === void 0 && N.attr("role", "region"), N.attr("aria-label") === void 0 && N.attr("aria-label", "carousel");
        var q = T.mask.attr("id");
        if (q || (q = "w-slider-mask-" + D, T.mask.attr("id", q)), !o && !T.ariaLiveLabel && (T.ariaLiveLabel = e(u).appendTo(T.mask)), T.left.attr("role", "button"), T.left.attr("tabindex", "0"), T.left.attr("aria-controls", q), T.left.attr("aria-label") === void 0 && T.left.attr("aria-label", "previous slide"), T.right.attr("role", "button"), T.right.attr("tabindex", "0"), T.right.attr("aria-controls", q), T.right.attr("aria-label") === void 0 && T.right.attr("aria-label", "next slide"), !n.support.transform) {
          T.left.hide(), T.right.hide(), T.nav.hide(), d = !0;
          return
        }
        T.el.off(l), T.left.off(l), T.right.off(l), T.nav.off(l), b(T), o ? (T.el.on("setting" + l, M(T)), k(T), T.hasTimer = !1) : (T.el.on("swipe" + l, M(T)), T.left.on("click" + l, x(T)), T.right.on("click" + l, L(T)), T.left.on("keydown" + l, S(T, x)), T.right.on("keydown" + l, S(T, L)), T.nav.on("keydown" + l, "> div", M(T)), T.config.autoplay && !T.hasTimer && (T.hasTimer = !0, T.timerCount = 1, C(T)), T.el.on("mouseenter" + l, A(T, !0, "mouse")), T.el.on("focusin" + l, A(T, !0, "keyboard")), T.el.on("mouseleave" + l, A(T, !1, "mouse")), T.el.on("focusout" + l, A(T, !1, "keyboard"))), T.nav.on("click" + l, "> div", M(T)), s || T.mask.contents().filter(function() {
          return this.nodeType === 3
        }).remove();
        var H = N.filter(":hidden");
        H.addClass(p);
        var B = N.parents(":hidden");
        B.addClass(p), h || X(D, Q), H.removeClass(p), B.removeClass(p)
      }

      function b(D) {
        var Q = {};
        Q.crossOver = 0, Q.animation = D.el.attr("data-animation") || "slide", Q.animation === "outin" && (Q.animation = "cross", Q.crossOver = .5), Q.easing = D.el.attr("data-easing") || "ease";
        var N = D.el.attr("data-duration");
        if (Q.duration = N != null ? parseInt(N, 10) : 500, _(D.el.attr("data-infinite")) && (Q.infinite = !0), _(D.el.attr("data-disable-swipe")) && (Q.disableSwipe = !0), _(D.el.attr("data-hide-arrows")) ? Q.hideArrows = !0 : D.config.hideArrows && (D.left.show(), D.right.show()), _(D.el.attr("data-autoplay"))) {
          Q.autoplay = !0, Q.delay = parseInt(D.el.attr("data-delay"), 10) || 2e3, Q.timerMax = parseInt(D.el.attr("data-autoplay-limit"), 10);
          var T = "mousedown" + l + " touchstart" + l;
          o || D.el.off(T).one(T, function() {
            k(D)
          })
        }
        var q = D.right.width();
        Q.edge = q ? q + 40 : 100, D.config = Q
      }

      function _(D) {
        return D === "1" || D === "true"
      }

      function A(D, Q, N) {
        return function(T) {
          if (Q) D.hasFocus[N] = Q;
          else if (e.contains(D.el.get(0), T.relatedTarget) || (D.hasFocus[N] = Q, D.hasFocus.mouse && N === "keyboard" || D.hasFocus.keyboard && N === "mouse")) return;
          Q ? (D.ariaLiveLabel.attr("aria-live", "polite"), D.hasTimer && k(D)) : (D.ariaLiveLabel.attr("aria-live", "off"), D.hasTimer && C(D))
        }
      }

      function S(D, Q) {
        return function(N) {
          switch (N.keyCode) {
            case ut.SPACE:
            case ut.ENTER:
              return Q(D)(), N.preventDefault(), N.stopPropagation()
          }
        }
      }

      function x(D) {
        return function() {
          U(D, {
            index: D.index - 1,
            vector: -1
          })
        }
      }

      function L(D) {
        return function() {
          U(D, {
            index: D.index + 1,
            vector: 1
          })
        }
      }

      function w(D, Q) {
        var N = null;
        Q === D.slides.length && (m(), ne(D)), t.each(D.anchors, function(T, q) {
          e(T.els).each(function(H, B) {
            e(B).index() === Q && (N = q)
          })
        }), N != null && U(D, {
          index: N,
          immediate: !0
        })
      }

      function C(D) {
        k(D);
        var Q = D.config,
          N = Q.timerMax;
        N && D.timerCount++ > N || (D.timerId = window.setTimeout(function() {
          D.timerId == null || o || (L(D)(), C(D))
        }, Q.delay))
      }

      function k(D) {
        window.clearTimeout(D.timerId), D.timerId = null
      }

      function M(D) {
        return function(Q, N) {
          N = N || {};
          var T = D.config;
          if (o && Q.type === "setting") {
            if (N.select === "prev") return x(D)();
            if (N.select === "next") return L(D)();
            if (b(D), ne(D), N.select == null) return;
            w(D, N.select);
            return
          }
          if (Q.type === "swipe") return T.disableSwipe || Mt.env("editor") ? void 0 : N.direction === "left" ? L(D)() : N.direction === "right" ? x(D)() : void 0;
          if (D.nav.has(Q.target).length) {
            var q = e(Q.target).index();
            if (Q.type === "click" && U(D, {
                index: q
              }), Q.type === "keydown") switch (Q.keyCode) {
              case ut.ENTER:
              case ut.SPACE: {
                U(D, {
                  index: q
                }), Q.preventDefault();
                break
              }
              case ut.ARROW_LEFT:
              case ut.ARROW_UP: {
                F(D.nav, Math.max(q - 1, 0)), Q.preventDefault();
                break
              }
              case ut.ARROW_RIGHT:
              case ut.ARROW_DOWN: {
                F(D.nav, Math.min(q + 1, D.pages)), Q.preventDefault();
                break
              }
              case ut.HOME: {
                F(D.nav, 0), Q.preventDefault();
                break
              }
              case ut.END: {
                F(D.nav, D.pages), Q.preventDefault();
                break
              }
              default:
                return
            }
          }
        }
      }

      function F(D, Q) {
        var N = D.children().eq(Q).focus();
        D.children().not(N)
      }

      function U(D, Q) {
        Q = Q || {};
        var N = D.config,
          T = D.anchors;
        D.previous = D.index;
        var q = Q.index,
          H = {};
        q < 0 ? (q = T.length - 1, N.infinite && (H.x = -D.endX, H.from = 0, H.to = T[0].width)) : q >= T.length && (q = 0, N.infinite && (H.x = T[T.length - 1].width, H.from = -T[T.length - 1].x, H.to = H.from - H.x)), D.index = q;
        var B = D.nav.children().eq(q).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
        D.nav.children().not(B).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), N.hideArrows && (D.index === T.length - 1 ? D.right.hide() : D.right.show(), D.index === 0 ? D.left.hide() : D.left.show());
        var ee = D.offsetX || 0,
          ae = D.offsetX = -T[D.index].x,
          te = {
            x: ae,
            opacity: 1,
            visibility: ""
          },
          R = e(T[D.index].els),
          Z = e(T[D.previous] && T[D.previous].els),
          ie = D.slides.not(R),
          j = N.animation,
          he = N.easing,
          be = Math.round(N.duration),
          _e = Q.vector || (D.index > D.previous ? 1 : -1),
          O = "opacity " + be + "ms " + he,
          V = "transform " + be + "ms " + he;
        if (R.find(sI).removeAttr("tabindex"), R.removeAttr("aria-hidden"), R.find("*").removeAttr("aria-hidden"), ie.find(sI).attr("tabindex", "-1"), ie.attr("aria-hidden", "true"), ie.find("*").attr("aria-hidden", "true"), o || (R.each(g.intro), ie.each(g.outro)), Q.immediate && !h) {
          n(R).set(te), K();
          return
        }
        if (D.index === D.previous) return;
        if (o || D.ariaLiveLabel.text(`Slide ${q+1} of ${T.length}.`), j === "cross") {
          var z = Math.round(be - be * N.crossOver),
            W = Math.round(be - z);
          O = "opacity " + z + "ms " + he, n(Z).set({
            visibility: ""
          }).add(O).start({
            opacity: 0
          }), n(R).set({
            visibility: "",
            x: ae,
            opacity: 0,
            zIndex: D.depth++
          }).add(O).wait(W).then({
            opacity: 1
          }).then(K);
          return
        }
        if (j === "fade") {
          n(Z).set({
            visibility: ""
          }).stop(), n(R).set({
            visibility: "",
            x: ae,
            opacity: 0,
            zIndex: D.depth++
          }).add(O).start({
            opacity: 1
          }).then(K);
          return
        }
        if (j === "over") {
          te = {
            x: D.endX
          }, n(Z).set({
            visibility: ""
          }).stop(), n(R).set({
            visibility: "",
            zIndex: D.depth++,
            x: ae + T[D.index].width * _e
          }).add(V).start({
            x: ae
          }).then(K);
          return
        }
        N.infinite && H.x ? (n(D.slides.not(Z)).set({
          visibility: "",
          x: H.x
        }).add(V).start({
          x: ae
        }), n(Z).set({
          visibility: "",
          x: H.from
        }).add(V).start({
          x: H.to
        }), D.shifted = Z) : (N.infinite && D.shifted && (n(D.shifted).set({
          visibility: "",
          x: ee
        }), D.shifted = null), n(D.slides).set({
          visibility: ""
        }).add(V).start({
          x: ae
        }));

        function K() {
          R = e(T[D.index].els), ie = D.slides.not(R), j !== "slide" && (te.visibility = "hidden"), n(ie).set(te)
        }
      }

      function X(D, Q) {
        var N = e.data(Q, l);
        if (N) {
          if (G(N)) return ne(N);
          o && J(N) && ne(N)
        }
      }

      function ne(D) {
        var Q = 1,
          N = 0,
          T = 0,
          q = 0,
          H = D.maskWidth,
          B = H - D.config.edge;
        B < 0 && (B = 0), D.anchors = [{
          els: [],
          x: 0,
          width: 0
        }], D.slides.each(function(ae, te) {
          T - N > B && (Q++, N += H, D.anchors[Q - 1] = {
            els: [],
            x: T,
            width: 0
          }), q = e(te).outerWidth(!0), T += q, D.anchors[Q - 1].width += q, D.anchors[Q - 1].els.push(te);
          var R = ae + 1 + " of " + D.slides.length;
          e(te).attr("aria-label", R), e(te).attr("role", "group")
        }), D.endX = T, o && (D.pages = null), D.nav.length && D.pages !== Q && (D.pages = Q, P(D));
        var ee = D.index;
        ee >= Q && (ee = Q - 1), U(D, {
          immediate: !0,
          index: ee
        })
      }

      function P(D) {
        var Q = [],
          N, T = D.el.attr("data-nav-spacing");
        T && (T = parseFloat(T) + "px");
        for (var q = 0, H = D.pages; q < H; q++) N = e(f), N.attr("aria-label", "Show slide " + (q + 1) + " of " + H).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), D.nav.hasClass("w-num") && N.text(q + 1), T != null && N.css({
          "margin-left": T,
          "margin-right": T
        }), Q.push(N);
        D.nav.empty().append(Q)
      }

      function G(D) {
        var Q = D.mask.width();
        return D.maskWidth !== Q ? (D.maskWidth = Q, !0) : !1
      }

      function J(D) {
        var Q = 0;
        return D.slides.each(function(N, T) {
          Q += e(T).outerWidth(!0)
        }), D.slidesWidth !== Q ? (D.slidesWidth = Q, !0) : !1
      }
      return r
    })
  });
  var fI = I((UY, uI) => {
    "use strict";
    var Zt = Me(),
      $G = Zr(),
      Ze = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      },
      cI = !0,
      ZG = /^#[a-zA-Z0-9\-_]+$/;
    Zt.define("dropdown", uI.exports = function(e, t) {
      var r = t.debounce,
        n = {},
        i = Zt.env(),
        a = !1,
        o, s = Zt.env.touch,
        l = ".w-dropdown",
        f = "w--open",
        u = $G.triggers,
        p = 900,
        g = "focusout" + l,
        d = "keydown" + l,
        h = "mouseenter" + l,
        m = "mousemove" + l,
        c = "mouseleave" + l,
        y = (s ? "click" : "mouseup") + l,
        v = "w-close" + l,
        E = "setting" + l,
        b = e(document),
        _;
      n.ready = A, n.design = function() {
        a && M(), a = !1, A()
      }, n.preview = function() {
        a = !0, A()
      };

      function A() {
        o = i && Zt.env("design"), _ = b.find(l), _.each(S)
      }

      function S(T, q) {
        var H = e(q),
          B = e.data(q, l);
        B || (B = e.data(q, l, {
          open: !1,
          el: H,
          config: {},
          selectedIdx: -1
        })), B.toggle = B.el.children(".w-dropdown-toggle"), B.list = B.el.children(".w-dropdown-list"), B.links = B.list.find("a:not(.w-dropdown .w-dropdown a)"), B.complete = X(B), B.mouseLeave = P(B), B.mouseUpOutside = U(B), B.mouseMoveOutside = G(B), x(B);
        var ee = B.toggle.attr("id"),
          ae = B.list.attr("id");
        ee || (ee = "w-dropdown-toggle-" + T), ae || (ae = "w-dropdown-list-" + T), B.toggle.attr("id", ee), B.toggle.attr("aria-controls", ae), B.toggle.attr("aria-haspopup", "menu"), B.toggle.attr("aria-expanded", "false"), B.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), B.toggle.prop("tagName") !== "BUTTON" && (B.toggle.attr("role", "button"), B.toggle.attr("tabindex") || B.toggle.attr("tabindex", "0")), B.list.attr("id", ae), B.list.attr("aria-labelledby", ee), B.links.each(function(R, Z) {
          Z.hasAttribute("tabindex") || Z.setAttribute("tabindex", "0"), ZG.test(Z.hash) && Z.addEventListener("click", k.bind(null, B))
        }), B.el.off(l), B.toggle.off(l), B.nav && B.nav.off(l);
        var te = w(B, cI);
        o && B.el.on(E, L(B)), o || (i && (B.hovering = !1, k(B)), B.config.hover && B.toggle.on(h, ne(B)), B.el.on(v, te), B.el.on(d, J(B)), B.el.on(g, N(B)), B.toggle.on(y, te), B.toggle.on(d, Q(B)), B.nav = B.el.closest(".w-nav"), B.nav.on(v, te))
      }

      function x(T) {
        var q = Number(T.el.css("z-index"));
        T.manageZ = q === p || q === p + 1, T.config = {
          hover: T.el.attr("data-hover") === "true" && !s,
          delay: T.el.attr("data-delay")
        }
      }

      function L(T) {
        return function(q, H) {
          H = H || {}, x(T), H.open === !0 && C(T), H.open === !1 && k(T, {
            immediate: !0
          })
        }
      }

      function w(T, q) {
        return r(function(H) {
          if (T.open || H && H.type === "w-close") return k(T, {
            forceClose: q
          });
          C(T)
        })
      }

      function C(T) {
        if (!T.open) {
          F(T), T.open = !0, T.list.addClass(f), T.toggle.addClass(f), T.toggle.attr("aria-expanded", "true"), u.intro(0, T.el[0]), Zt.redraw.up(), T.manageZ && T.el.css("z-index", p + 1);
          var q = Zt.env("editor");
          o || b.on(y, T.mouseUpOutside), T.hovering && !q && T.el.on(c, T.mouseLeave), T.hovering && q && b.on(m, T.mouseMoveOutside), window.clearTimeout(T.delayId)
        }
      }

      function k(T, {
        immediate: q,
        forceClose: H
      } = {}) {
        if (T.open && !(T.config.hover && T.hovering && !H)) {
          T.toggle.attr("aria-expanded", "false"), T.open = !1;
          var B = T.config;
          if (u.outro(0, T.el[0]), b.off(y, T.mouseUpOutside), b.off(m, T.mouseMoveOutside), T.el.off(c, T.mouseLeave), window.clearTimeout(T.delayId), !B.delay || q) return T.complete();
          T.delayId = window.setTimeout(T.complete, B.delay)
        }
      }

      function M() {
        b.find(l).each(function(T, q) {
          e(q).triggerHandler(v)
        })
      }

      function F(T) {
        var q = T.el[0];
        _.each(function(H, B) {
          var ee = e(B);
          ee.is(q) || ee.has(q).length || ee.triggerHandler(v)
        })
      }

      function U(T) {
        return T.mouseUpOutside && b.off(y, T.mouseUpOutside), r(function(q) {
          if (T.open) {
            var H = e(q.target);
            if (!H.closest(".w-dropdown-toggle").length) {
              var B = e.inArray(T.el[0], H.parents(l)) === -1,
                ee = Zt.env("editor");
              if (B) {
                if (ee) {
                  var ae = H.parents().length === 1 && H.parents("svg").length === 1,
                    te = H.parents(".w-editor-bem-EditorHoverControls").length;
                  if (ae || te) return
                }
                k(T)
              }
            }
          }
        })
      }

      function X(T) {
        return function() {
          T.list.removeClass(f), T.toggle.removeClass(f), T.manageZ && T.el.css("z-index", "")
        }
      }

      function ne(T) {
        return function() {
          T.hovering = !0, C(T)
        }
      }

      function P(T) {
        return function() {
          T.hovering = !1, T.links.is(":focus") || k(T)
        }
      }

      function G(T) {
        return r(function(q) {
          if (T.open) {
            var H = e(q.target),
              B = e.inArray(T.el[0], H.parents(l)) === -1;
            if (B) {
              var ee = H.parents(".w-editor-bem-EditorHoverControls").length,
                ae = H.parents(".w-editor-bem-RTToolbar").length,
                te = e(".w-editor-bem-EditorOverlay"),
                R = te.find(".w-editor-edit-outline").length || te.find(".w-editor-bem-RTToolbar").length;
              if (ee || ae || R) return;
              T.hovering = !1, k(T)
            }
          }
        })
      }

      function J(T) {
        return function(q) {
          if (!(o || !T.open)) switch (T.selectedIdx = T.links.index(document.activeElement), q.keyCode) {
            case Ze.HOME:
              return T.open ? (T.selectedIdx = 0, D(T), q.preventDefault()) : void 0;
            case Ze.END:
              return T.open ? (T.selectedIdx = T.links.length - 1, D(T), q.preventDefault()) : void 0;
            case Ze.ESCAPE:
              return k(T), T.toggle.focus(), q.stopPropagation();
            case Ze.ARROW_RIGHT:
            case Ze.ARROW_DOWN:
              return T.selectedIdx = Math.min(T.links.length - 1, T.selectedIdx + 1), D(T), q.preventDefault();
            case Ze.ARROW_LEFT:
            case Ze.ARROW_UP:
              return T.selectedIdx = Math.max(-1, T.selectedIdx - 1), D(T), q.preventDefault()
          }
        }
      }

      function D(T) {
        T.links[T.selectedIdx] && T.links[T.selectedIdx].focus()
      }

      function Q(T) {
        var q = w(T, cI);
        return function(H) {
          if (!o) {
            if (!T.open) switch (H.keyCode) {
              case Ze.ARROW_UP:
              case Ze.ARROW_DOWN:
                return H.stopPropagation()
            }
            switch (H.keyCode) {
              case Ze.SPACE:
              case Ze.ENTER:
                return q(), H.stopPropagation(), H.preventDefault()
            }
          }
        }
      }

      function N(T) {
        return r(function(q) {
          var {
            relatedTarget: H,
            target: B
          } = q, ee = T.el[0], ae = ee.contains(H) || ee.contains(B);
          return ae || k(T), q.stopPropagation()
        })
      }
      return n
    })
  });
  jl();
  Kl();
  $l();
  ec();
  rc();
  ic();
  sc();
  w0();
  Zr();
  V0();
  eI();
  tI();
  rI();
  aI();
  lI();
  fI();
  Webflow.require("ix2").init({
    events: {
      e: {
        id: "e",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-2"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733166576581
      },
      "e-3": {
        id: "e-3",
        name: "",
        animationType: "custom",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-4"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207032805
      },
      "e-4": {
        id: "e-4",
        name: "",
        animationType: "custom",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-3"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207032807
      },
      "e-5": {
        id: "e-5",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-6"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207732285
      },
      "e-6": {
        id: "e-6",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-5"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207732286
      },
      "e-7": {
        id: "e-7",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-8"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|ecd06515-6668-5dab-eaca-123f1a0ea0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|ecd06515-6668-5dab-eaca-123f1a0ea0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207997018
      },
      "e-8": {
        id: "e-8",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-7"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|ecd06515-6668-5dab-eaca-123f1a0ea0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|ecd06515-6668-5dab-eaca-123f1a0ea0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207997018
      },
      "e-9": {
        id: "e-9",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-10"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|ecd06515-6668-5dab-eaca-123f1a0ea0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|ecd06515-6668-5dab-eaca-123f1a0ea0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207997018
      },
      "e-10": {
        id: "e-10",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-9"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|ecd06515-6668-5dab-eaca-123f1a0ea0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|ecd06515-6668-5dab-eaca-123f1a0ea0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207997018
      },
      "e-11": {
        id: "e-11",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-12"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|56d3147b-944e-9bdd-e3f5-9797330ecb56",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|56d3147b-944e-9bdd-e3f5-9797330ecb56",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207999350
      },
      "e-12": {
        id: "e-12",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-11"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|56d3147b-944e-9bdd-e3f5-9797330ecb56",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|56d3147b-944e-9bdd-e3f5-9797330ecb56",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207999350
      },
      "e-13": {
        id: "e-13",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-14"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|56d3147b-944e-9bdd-e3f5-9797330ecb56",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|56d3147b-944e-9bdd-e3f5-9797330ecb56",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207999350
      },
      "e-14": {
        id: "e-14",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-13"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|56d3147b-944e-9bdd-e3f5-9797330ecb56",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|56d3147b-944e-9bdd-e3f5-9797330ecb56",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733207999350
      },
      "e-15": {
        id: "e-15",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-16"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|36be2e0b-dc35-60f7-170b-1a86548b4dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|36be2e0b-dc35-60f7-170b-1a86548b4dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208000424
      },
      "e-16": {
        id: "e-16",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-15"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|36be2e0b-dc35-60f7-170b-1a86548b4dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|36be2e0b-dc35-60f7-170b-1a86548b4dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208000424
      },
      "e-17": {
        id: "e-17",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-18"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|36be2e0b-dc35-60f7-170b-1a86548b4dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|36be2e0b-dc35-60f7-170b-1a86548b4dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208000424
      },
      "e-18": {
        id: "e-18",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-17"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|36be2e0b-dc35-60f7-170b-1a86548b4dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|36be2e0b-dc35-60f7-170b-1a86548b4dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208000424
      },
      "e-19": {
        id: "e-19",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-20"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|cb3b3cbd-1bd0-4e14-6e02-a156baa733b9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|cb3b3cbd-1bd0-4e14-6e02-a156baa733b9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208001349
      },
      "e-20": {
        id: "e-20",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-19"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|cb3b3cbd-1bd0-4e14-6e02-a156baa733b9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|cb3b3cbd-1bd0-4e14-6e02-a156baa733b9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208001349
      },
      "e-21": {
        id: "e-21",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-22"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|cb3b3cbd-1bd0-4e14-6e02-a156baa733b9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|cb3b3cbd-1bd0-4e14-6e02-a156baa733b9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208001349
      },
      "e-22": {
        id: "e-22",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-21"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|cb3b3cbd-1bd0-4e14-6e02-a156baa733b9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|cb3b3cbd-1bd0-4e14-6e02-a156baa733b9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208001349
      },
      "e-23": {
        id: "e-23",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-24"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|0e6e71d2-779e-f3fa-82d5-a5bb3392e48a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|0e6e71d2-779e-f3fa-82d5-a5bb3392e48a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208009912
      },
      "e-24": {
        id: "e-24",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-5",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-23"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|0e6e71d2-779e-f3fa-82d5-a5bb3392e48a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|0e6e71d2-779e-f3fa-82d5-a5bb3392e48a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208009912
      },
      "e-25": {
        id: "e-25",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-26"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|0e6e71d2-779e-f3fa-82d5-a5bb3392e48a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|0e6e71d2-779e-f3fa-82d5-a5bb3392e48a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208009912
      },
      "e-26": {
        id: "e-26",
        name: "",
        animationType: "preset",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-25"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|0e6e71d2-779e-f3fa-82d5-a5bb3392e48a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|0e6e71d2-779e-f3fa-82d5-a5bb3392e48a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733208009912
      },
      "e-27": {
        id: "e-27",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-6",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-28"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".work-card",
          originalId: "6745b25f58afc09807f9d3e4|4f34442f-6fde-e2c4-1777-344bca836714",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".work-card",
          originalId: "6745b25f58afc09807f9d3e4|4f34442f-6fde-e2c4-1777-344bca836714",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733214722060
      },
      "e-28": {
        id: "e-28",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-27"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".work-card",
          originalId: "6745b25f58afc09807f9d3e4|4f34442f-6fde-e2c4-1777-344bca836714",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".work-card",
          originalId: "6745b25f58afc09807f9d3e4|4f34442f-6fde-e2c4-1777-344bca836714",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733214722062
      },
      "e-30": {
        id: "e-30",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-9",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-29"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733225183924
      },
      "e-31": {
        id: "e-31",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-10",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-32"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|a3ad91c4-f315-a232-d873-174eaf5f3f28",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|a3ad91c4-f315-a232-d873-174eaf5f3f28",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733245754759
      },
      "e-32": {
        id: "e-32",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_OUT_OF_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-11",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-31"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|a3ad91c4-f315-a232-d873-174eaf5f3f28",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|a3ad91c4-f315-a232-d873-174eaf5f3f28",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733245754761
      },
      "e-33": {
        id: "e-33",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-34"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|f66504de-957b-ce75-884d-c07eaf7952cc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|f66504de-957b-ce75-884d-c07eaf7952cc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733291701099
      },
      "e-34": {
        id: "e-34",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_OUT_OF_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-33"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|f66504de-957b-ce75-884d-c07eaf7952cc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|f66504de-957b-ce75-884d-c07eaf7952cc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733291701102
      },
      "e-35": {
        id: "e-35",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-36"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|b6eb0888-b45b-ae06-f59b-f255c6768944",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|b6eb0888-b45b-ae06-f59b-f255c6768944",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733292249548
      },
      "e-36": {
        id: "e-36",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_OUT_OF_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-15",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-35"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|b6eb0888-b45b-ae06-f59b-f255c6768944",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|b6eb0888-b45b-ae06-f59b-f255c6768944",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733292249551
      },
      "e-37": {
        id: "e-37",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-38"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|7af6958c-cf9b-c2f5-2c30-c667a35018e3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|7af6958c-cf9b-c2f5-2c30-c667a35018e3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733293647711
      },
      "e-38": {
        id: "e-38",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_OUT_OF_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-37"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|7af6958c-cf9b-c2f5-2c30-c667a35018e3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|7af6958c-cf9b-c2f5-2c30-c667a35018e3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733293647713
      },
      "e-40": {
        id: "e-40",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-39"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733293976577
      },
      "e-42": {
        id: "e-42",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-41"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733297370325
      },
      "e-43": {
        id: "e-43",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-44"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".hero-item-block",
          originalId: "6745b25f58afc09807f9d3e4|1d8e6a86-dac3-19e5-4101-6f575918b69a",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".hero-item-block",
          originalId: "6745b25f58afc09807f9d3e4|1d8e6a86-dac3-19e5-4101-6f575918b69a",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733309731792
      },
      "e-44": {
        id: "e-44",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-43"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".hero-item-block",
          originalId: "6745b25f58afc09807f9d3e4|1d8e6a86-dac3-19e5-4101-6f575918b69a",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".hero-item-block",
          originalId: "6745b25f58afc09807f9d3e4|1d8e6a86-dac3-19e5-4101-6f575918b69a",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733309731795
      },
      "e-46": {
        id: "e-46",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-45"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733310003855
      },
      "e-48": {
        id: "e-48",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-47"
          }
        },
        mediaQueries: ["small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733311792224
      },
      "e-49": {
        id: "e-49",
        name: "",
        animationType: "custom",
        eventTypeId: "NAVBAR_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-24",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-50"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "fa16df0d-10e2-f613-51d7-52da510caaef",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "fa16df0d-10e2-f613-51d7-52da510caaef",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733314836161
      },
      "e-50": {
        id: "e-50",
        name: "",
        animationType: "custom",
        eventTypeId: "NAVBAR_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-25",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-49"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "fa16df0d-10e2-f613-51d7-52da510caaef",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "fa16df0d-10e2-f613-51d7-52da510caaef",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733314836163
      },
      "e-51": {
        id: "e-51",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-26",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-26-p",
          smoothing: 70,
          startsEntering: !0,
          addStartOffset: !1,
          addOffsetValue: 50,
          startsExiting: !1,
          addEndOffset: !1,
          endOffsetValue: 50
        }],
        createdOn: 1733316602722
      },
      "e-52": {
        id: "e-52",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: !1,
          config: {
            actionListId: "growIn",
            autoStopEventId: "e-53"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "6745b25f58afc09807f9d3e4|afb5c919-e3d0-3ff6-984f-b41d857cf79f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|afb5c919-e3d0-3ff6-984f-b41d857cf79f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733317971985
      },
      "e-54": {
        id: "e-54",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-27",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-27-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 70,
          restingState: 50
        }, {
          continuousParameterGroupId: "a-27-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 70,
          restingState: 50
        }],
        createdOn: 1733320830146
      },
      "e-55": {
        id: "e-55",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-27",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "674da0905b4c6b1830b041e0",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "674da0905b4c6b1830b041e0",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-27-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }, {
          continuousParameterGroupId: "a-27-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }],
        createdOn: 1733325419116
      },
      "e-56": {
        id: "e-56",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-27",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "674da07ee3965221b49a567a",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "674da07ee3965221b49a567a",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-27-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }, {
          continuousParameterGroupId: "a-27-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }],
        createdOn: 1733325478124
      },
      "e-57": {
        id: "e-57",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-27",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "674da06c1f979fe98b5c4b3b",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "674da06c1f979fe98b5c4b3b",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-27-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }, {
          continuousParameterGroupId: "a-27-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }],
        createdOn: 1733325531404
      },
      "e-58": {
        id: "e-58",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-59"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "674da06c1f979fe98b5c4b3b|4968cc1e-7b06-503b-153a-4e0fefc5b1a2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "674da06c1f979fe98b5c4b3b|4968cc1e-7b06-503b-153a-4e0fefc5b1a2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733330065743
      },
      "e-60": {
        id: "e-60",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-61"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "674da06c1f979fe98b5c4b3b|c509c720-8033-2ca1-02bf-fc5f4f89d06a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "674da06c1f979fe98b5c4b3b|c509c720-8033-2ca1-02bf-fc5f4f89d06a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733330086301
      },
      "e-62": {
        id: "e-62",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-63"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "674da06c1f979fe98b5c4b3b|c1430279-24f2-e47d-da7d-136f4f931578",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "674da06c1f979fe98b5c4b3b|c1430279-24f2-e47d-da7d-136f4f931578",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733330101268
      },
      "e-64": {
        id: "e-64",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-65"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "674da06c1f979fe98b5c4b3b|25542a58-ebb1-91ca-038f-667527e722a4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "674da06c1f979fe98b5c4b3b|25542a58-ebb1-91ca-038f-667527e722a4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733330115098
      },
      "e-66": {
        id: "e-66",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-67"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "674da07ee3965221b49a567a|6799a4bb-6906-4f34-ef82-42dd4bd1e18e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "674da07ee3965221b49a567a|6799a4bb-6906-4f34-ef82-42dd4bd1e18e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733330133703
      },
      "e-68": {
        id: "e-68",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-69"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".template-content-item",
          originalId: "674da07ee3965221b49a567a|6799a4bb-6906-4f34-ef82-42dd4bd1e195",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".template-content-item",
          originalId: "674da07ee3965221b49a567a|6799a4bb-6906-4f34-ef82-42dd4bd1e195",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733330148478
      },
      "e-70": {
        id: "e-70",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-71"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "674da0905b4c6b1830b041e0|5f755374-4be7-2924-06b1-4559c1f888f0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "674da0905b4c6b1830b041e0|5f755374-4be7-2924-06b1-4559c1f888f0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733330171742
      },
      "e-72": {
        id: "e-72",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-27",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "675061c007a759c32ae926b5",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "675061c007a759c32ae926b5",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-27-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }, {
          continuousParameterGroupId: "a-27-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }],
        createdOn: 1733330746557
      },
      "e-73": {
        id: "e-73",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-74"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|1d96f003-719a-ee23-914d-b7ea6050f42e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|1d96f003-719a-ee23-914d-b7ea6050f42e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733330928880
      },
      "e-75": {
        id: "e-75",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-76"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|d5f3d24e-f85b-4025-0195-0a4a418170bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|d5f3d24e-f85b-4025-0195-0a4a418170bd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733330942240
      },
      "e-77": {
        id: "e-77",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-78"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|e0108f11-b05e-3134-6805-a0954cbefb59",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|e0108f11-b05e-3134-6805-a0954cbefb59",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733330971169
      },
      "e-79": {
        id: "e-79",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-80"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".section-top-block",
          originalId: "6745b25f58afc09807f9d3e4|be9db839-e743-f181-dbbd-c025e368d1b3",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".section-top-block",
          originalId: "6745b25f58afc09807f9d3e4|be9db839-e743-f181-dbbd-c025e368d1b3",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733330981822
      },
      "e-81": {
        id: "e-81",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-82"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|9ea6c64d-5533-ecc8-3814-a3fcc358224d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|9ea6c64d-5533-ecc8-3814-a3fcc358224d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733331026759
      },
      "e-83": {
        id: "e-83",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-84"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|4f34442f-6fde-e2c4-1777-344bca836714",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|4f34442f-6fde-e2c4-1777-344bca836714",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733331044904
      },
      "e-85": {
        id: "e-85",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-86"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".pricing-card",
          originalId: "6745b25f58afc09807f9d3e4|5124bd49-3fca-f87e-d4da-8714ecbf0212",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".pricing-card",
          originalId: "6745b25f58afc09807f9d3e4|5124bd49-3fca-f87e-d4da-8714ecbf0212",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733331063177
      },
      "e-87": {
        id: "e-87",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-88"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|eda09819-a5cd-cdcb-81ce-23db25da0759",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|eda09819-a5cd-cdcb-81ce-23db25da0759",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733331089786
      },
      "e-89": {
        id: "e-89",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-90"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|6d59d714-5a33-5fd7-d933-d84fa928f54f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|6d59d714-5a33-5fd7-d933-d84fa928f54f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733331143682
      },
      "e-91": {
        id: "e-91",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-92"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|64b3b77d-7e1d-98ec-314c-e8f2f26909c0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|64b3b77d-7e1d-98ec-314c-e8f2f26909c0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733331154024
      },
      "e-93": {
        id: "e-93",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-94"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|ab44f0ec-1285-2921-ff2f-5537099f651d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|ab44f0ec-1285-2921-ff2f-5537099f651d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733331168978
      },
      "e-95": {
        id: "e-95",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-96"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6745b25f58afc09807f9d3e4|b106781c-6056-54aa-4c0c-209e8fc1b273",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6745b25f58afc09807f9d3e4|b106781c-6056-54aa-4c0c-209e8fc1b273",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733331190270
      },
      "e-97": {
        id: "e-97",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-98"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".faq-item",
          originalId: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".faq-item",
          originalId: "6745b25f58afc09807f9d3e4|8ee3f510-f0bf-e7c4-1d04-fd000d6d7f73",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733331213066
      },
      "e-99": {
        id: "e-99",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-100"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a1ee66b8-37c1-7a7e-0cf0-17d7cfa505f3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "a1ee66b8-37c1-7a7e-0cf0-17d7cfa505f3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1733331236801
      },
      "e-101": {
        id: "e-101",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-102"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a1ee66b8-37c1-7a7e-0cf0-17d7cfa505fe",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "a1ee66b8-37c1-7a7e-0cf0-17d7cfa505fe",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0
        },
        createdOn: 1733331264312
      }
    },
    actionLists: {
      a: {
        id: "a",
        title: "Partners marquee",
        actionItemGroups: [{
          actionItems: [{
            id: "a-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 3e4,
              target: {
                selector: ".partners-marquee-inner-block",
                selectorGuids: ["67e49988-ed28-ed4d-3948-9f58ccc3db00"]
              },
              xValue: -100,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                selector: ".partners-marquee-inner-block",
                selectorGuids: ["67e49988-ed28-ed4d-3948-9f58ccc3db00"]
              },
              xValue: 0,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733166584387
      },
      "a-2": {
        id: "a-2",
        title: "FAQ Item Open",
        actionItemGroups: [{
          actionItems: [{
            id: "a-2-n",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-icon",
                selectorGuids: ["64e8b074-3049-5df8-0d0a-a266e64f869b"]
              },
              globalSwatchId: "",
              rValue: 140,
              bValue: 136,
              gValue: 136,
              aValue: 1
            }
          }, {
            id: "a-2-n-2",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-answer-block",
                selectorGuids: ["7a9ab314-52b7-45ca-a7e4-61e0c3579123"]
              },
              heightValue: 0,
              widthUnit: "PX",
              heightUnit: "px",
              locked: !1
            }
          }, {
            id: "a-2-n-3",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-answer-wrapper",
                selectorGuids: ["6dc38472-fdfd-59e9-74b7-17e828c6f021"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-2-n-4",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-icon",
                selectorGuids: ["64e8b074-3049-5df8-0d0a-a266e64f869b"]
              },
              globalSwatchId: "--text-color-primary",
              rValue: 43,
              bValue: 43,
              gValue: 43,
              aValue: 1
            }
          }, {
            id: "a-2-n-5",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-answer-block",
                selectorGuids: ["7a9ab314-52b7-45ca-a7e4-61e0c3579123"]
              },
              widthUnit: "PX",
              heightUnit: "AUTO",
              locked: !1
            }
          }]
        }, {
          actionItems: [{
            id: "a-2-n-6",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "ease",
              duration: 100,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-answer-wrapper",
                selectorGuids: ["6dc38472-fdfd-59e9-74b7-17e828c6f021"]
              },
              value: 1,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1733207043865
      },
      "a-3": {
        id: "a-3",
        title: "FAQ item close",
        actionItemGroups: [{
          actionItems: [{
            id: "a-3-n-4",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-icon",
                selectorGuids: ["64e8b074-3049-5df8-0d0a-a266e64f869b"]
              },
              globalSwatchId: "",
              rValue: 140,
              bValue: 136,
              gValue: 136,
              aValue: 1
            }
          }, {
            id: "a-3-n-6",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "ease",
              duration: 100,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-answer-wrapper",
                selectorGuids: ["6dc38472-fdfd-59e9-74b7-17e828c6f021"]
              },
              value: 1,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-3-n-5",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-answer-block",
                selectorGuids: ["7a9ab314-52b7-45ca-a7e4-61e0c3579123"]
              },
              heightValue: 0,
              widthUnit: "PX",
              heightUnit: "px",
              locked: !1
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733207043865
      },
      "a-4": {
        id: "a-4",
        title: "FAQ item hover in",
        actionItemGroups: [{
          actionItems: [{
            id: "a-4-n",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-icon",
                selectorGuids: ["64e8b074-3049-5df8-0d0a-a266e64f869b"]
              },
              globalSwatchId: "--text-color-primary",
              rValue: 43,
              bValue: 43,
              gValue: 43,
              aValue: 1
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733207738345
      },
      "a-5": {
        id: "a-5",
        title: "FAQ item hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-5-n",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-icon",
                selectorGuids: ["64e8b074-3049-5df8-0d0a-a266e64f869b"]
              },
              globalSwatchId: "",
              rValue: 140,
              bValue: 136,
              gValue: 136,
              aValue: 1
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733207782609
      },
      "a-6": {
        id: "a-6",
        title: "Work card hover in",
        actionItemGroups: [{
          actionItems: [{
            id: "a-6-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".work-image",
                selectorGuids: ["c0a914cb-9b91-eb13-89f1-149c2b008d7f"]
              },
              xValue: 1.05,
              yValue: 1.05,
              locked: !0
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733214727917
      },
      "a-7": {
        id: "a-7",
        title: "Work card hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-7-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".work-image",
                selectorGuids: ["c0a914cb-9b91-eb13-89f1-149c2b008d7f"]
              },
              xValue: 1,
              yValue: 1,
              locked: !0
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733214727917
      },
      "a-9": {
        id: "a-9",
        title: "Form marquee",
        actionItemGroups: [{
          actionItems: [{
            id: "a-9-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 24e3,
              target: {
                selector: ".form-marquee-inner-block",
                selectorGuids: ["8cb7ceea-83d4-9c36-140e-5e1c9284d684"]
              },
              xValue: -100,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-9-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                selector: ".form-marquee-inner-block",
                selectorGuids: ["8cb7ceea-83d4-9c36-140e-5e1c9284d684"]
              },
              xValue: 0,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733225189058
      },
      "a-10": {
        id: "a-10",
        title: "Service card v4 into view",
        actionItemGroups: [{
          actionItems: [{
            id: "a-10-n",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-01",
                selectorGuids: ["8aab3b2a-8d73-a717-2ea6-3e39e14bf22d"]
              },
              zValue: 15,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }, {
            id: "a-10-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-01",
                selectorGuids: ["8aab3b2a-8d73-a717-2ea6-3e39e14bf22d"]
              },
              xValue: 40,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            id: "a-10-n-2",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-02",
                selectorGuids: ["ae53e418-871c-0598-6763-9832a90eba62"]
              },
              zValue: -15,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }, {
            id: "a-10-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-02",
                selectorGuids: ["ae53e418-871c-0598-6763-9832a90eba62"]
              },
              xValue: -40,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-10-n-5",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-01",
                selectorGuids: ["8aab3b2a-8d73-a717-2ea6-3e39e14bf22d"]
              },
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }, {
            id: "a-10-n-8",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-02",
                selectorGuids: ["ae53e418-871c-0598-6763-9832a90eba62"]
              },
              xValue: 0,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            id: "a-10-n-7",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-02",
                selectorGuids: ["ae53e418-871c-0598-6763-9832a90eba62"]
              },
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }, {
            id: "a-10-n-6",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-01",
                selectorGuids: ["8aab3b2a-8d73-a717-2ea6-3e39e14bf22d"]
              },
              xValue: 0,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1733245761915
      },
      "a-11": {
        id: "a-11",
        title: "Service card v4 out view",
        actionItemGroups: [{
          actionItems: [{
            id: "a-11-n",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-01",
                selectorGuids: ["8aab3b2a-8d73-a717-2ea6-3e39e14bf22d"]
              },
              zValue: 15,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }, {
            id: "a-11-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-01",
                selectorGuids: ["8aab3b2a-8d73-a717-2ea6-3e39e14bf22d"]
              },
              xValue: 40,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            id: "a-11-n-3",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-02",
                selectorGuids: ["ae53e418-871c-0598-6763-9832a90eba62"]
              },
              zValue: -15,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }, {
            id: "a-11-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v4-image-02",
                selectorGuids: ["ae53e418-871c-0598-6763-9832a90eba62"]
              },
              xValue: -40,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733245761915
      },
      "a-12": {
        id: "a-12",
        title: "Service card v3 into view",
        actionItemGroups: [{
          actionItems: [{
            id: "a-12-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v3-image-01",
                selectorGuids: ["c22bc220-4af1-e3ff-5ff0-6489f4a319c3"]
              },
              xValue: 40,
              yValue: 40,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-12-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v3-image-02",
                selectorGuids: ["e6428092-4605-fa1e-cb03-97adb275763b"]
              },
              xValue: -40,
              yValue: -40,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-12-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v3-image-01",
                selectorGuids: ["c22bc220-4af1-e3ff-5ff0-6489f4a319c3"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-12-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v3-image-02",
                selectorGuids: ["e6428092-4605-fa1e-cb03-97adb275763b"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1733291709489
      },
      "a-13": {
        id: "a-13",
        title: "Service card v3 out view",
        actionItemGroups: [{
          actionItems: [{
            id: "a-13-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v3-image-01",
                selectorGuids: ["c22bc220-4af1-e3ff-5ff0-6489f4a319c3"]
              },
              xValue: 40,
              yValue: 40,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-13-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v3-image-02",
                selectorGuids: ["e6428092-4605-fa1e-cb03-97adb275763b"]
              },
              xValue: -40,
              yValue: -40,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733291709489
      },
      "a-14": {
        id: "a-14",
        title: "Service card v2 into view",
        actionItemGroups: [{
          actionItems: [{
            id: "a-14-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v2-image-01",
                selectorGuids: ["b9b419f6-6d85-e50b-2e54-71da1846871a"]
              },
              xValue: 30,
              yValue: 30,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-14-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v2-image-02",
                selectorGuids: ["c5554ade-f55e-5c8b-54f6-9923271fc302"]
              },
              xValue: -30,
              yValue: -30,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-14-n-8",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v2-image-02",
                selectorGuids: ["c5554ade-f55e-5c8b-54f6-9923271fc302"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-14-n-6",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v2-image-01",
                selectorGuids: ["b9b419f6-6d85-e50b-2e54-71da1846871a"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1733292255087
      },
      "a-15": {
        id: "a-15",
        title: "Service card v2 out  view",
        actionItemGroups: [{
          actionItems: [{
            id: "a-15-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v2-image-01",
                selectorGuids: ["b9b419f6-6d85-e50b-2e54-71da1846871a"]
              },
              xValue: 30,
              yValue: 30,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-15-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v2-image-02",
                selectorGuids: ["c5554ade-f55e-5c8b-54f6-9923271fc302"]
              },
              xValue: -30,
              yValue: -30,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733292255087
      },
      "a-16": {
        id: "a-16",
        title: "Service card v1 into view",
        actionItemGroups: [{
          actionItems: [{
            id: "a-16-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v1-image-01",
                selectorGuids: ["6916d67f-2af0-0132-912d-c4c11a73a50c"]
              },
              xValue: 60,
              yValue: -40,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-16-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v1-image-02",
                selectorGuids: ["db9fca85-52ef-669b-11e8-401d79c0dcb2"]
              },
              xValue: -20,
              yValue: 20,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-16-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v1-image-03",
                selectorGuids: ["f714dc63-c491-ee14-b53b-96f28dd35352"]
              },
              xValue: -50,
              yValue: -40,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-16-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v1-image-01",
                selectorGuids: ["6916d67f-2af0-0132-912d-c4c11a73a50c"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-16-n-6",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v1-image-03",
                selectorGuids: ["f714dc63-c491-ee14-b53b-96f28dd35352"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-16-n-5",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v1-image-02",
                selectorGuids: ["db9fca85-52ef-669b-11e8-401d79c0dcb2"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1733293740640
      },
      "a-17": {
        id: "a-17",
        title: "Service card v1 out view",
        actionItemGroups: [{
          actionItems: [{
            id: "a-17-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v1-image-01",
                selectorGuids: ["6916d67f-2af0-0132-912d-c4c11a73a50c"]
              },
              xValue: 60,
              yValue: -40,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-17-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v1-image-02",
                selectorGuids: ["db9fca85-52ef-669b-11e8-401d79c0dcb2"]
              },
              xValue: -20,
              yValue: 20,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-17-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-card-v1-image-03",
                selectorGuids: ["f714dc63-c491-ee14-b53b-96f28dd35352"]
              },
              xValue: -50,
              yValue: -40,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733293740640
      },
      "a-18": {
        id: "a-18",
        title: "Service card v1 moving icons",
        actionItemGroups: [{
          actionItems: [{
            id: "a-18-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 3e3,
              target: {
                id: "6745b25f58afc09807f9d3e4|4d156c20-3685-fca0-4fc4-01ea061dd819"
              },
              xValue: null,
              yValue: 20,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-18-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 3e3,
              target: {
                id: "6745b25f58afc09807f9d3e4|41b78d04-a27f-1901-1922-5c759fc51ae7"
              },
              xValue: 15,
              yValue: null,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-18-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 3e3,
              target: {
                id: "6745b25f58afc09807f9d3e4|4d156c20-3685-fca0-4fc4-01ea061dd819"
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-18-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 3e3,
              target: {
                id: "6745b25f58afc09807f9d3e4|41b78d04-a27f-1901-1922-5c759fc51ae7"
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733293984229
      },
      "a-19": {
        id: "a-19",
        title: "Benefit card iamge moving",
        actionItemGroups: [{
          actionItems: [{
            id: "a-19-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 2e3,
              target: {
                id: "6745b25f58afc09807f9d3e4|f945c3f5-d725-17e2-5a5e-ab5ecb2b5365"
              },
              yValue: -15,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-19-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 2e3,
              target: {
                id: "6745b25f58afc09807f9d3e4|f945c3f5-d725-17e2-5a5e-ab5ecb2b5365"
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733306509998
      },
      "a-20": {
        id: "a-20",
        title: "Hero item hover in",
        actionItemGroups: [{
          actionItems: [{
            id: "a-20-n",
            actionTypeId: "GENERAL_DISPLAY",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".hero-item-text-block",
                selectorGuids: ["8a95afa3-fc08-86a1-f777-bc4d826fd6c3"]
              },
              value: "flex"
            }
          }, {
            id: "a-20-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".hero-item-text-block",
                selectorGuids: ["8a95afa3-fc08-86a1-f777-bc4d826fd6c3"]
              },
              value: 1,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733309738880
      },
      "a-21": {
        id: "a-21",
        title: "Hero item hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-21-n",
            actionTypeId: "GENERAL_DISPLAY",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".hero-item-text-block",
                selectorGuids: ["8a95afa3-fc08-86a1-f777-bc4d826fd6c3"]
              },
              value: "none"
            }
          }, {
            id: "a-21-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".hero-item-text-block",
                selectorGuids: ["8a95afa3-fc08-86a1-f777-bc4d826fd6c3"]
              },
              value: 0,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733309738880
      },
      "a-22": {
        id: "a-22",
        title: "Hero page load desktop animation",
        actionItemGroups: [{
          actionItems: [{
            id: "a-22-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                selector: ".hero-item-block",
                selectorGuids: ["16a1cbf1-e19c-573a-fa90-77ed0eb356a7"]
              },
              xValue: .6,
              yValue: .6,
              locked: !0
            }
          }, {
            id: "a-22-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                id: "6745b25f58afc09807f9d3e4|1d8e6a86-dac3-19e5-4101-6f575918b69a"
              },
              xValue: 80,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            id: "a-22-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                id: "6745b25f58afc09807f9d3e4|30e7f0b1-a8a2-f713-2864-27c417bd48d6"
              },
              xValue: 0,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            id: "a-22-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                id: "6745b25f58afc09807f9d3e4|62970728-0f8f-2b43-4734-208153032a66"
              },
              xValue: -80,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-22-n-6",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 200,
              easing: "easeInOut",
              duration: 800,
              target: {
                id: "6745b25f58afc09807f9d3e4|1d8e6a86-dac3-19e5-4101-6f575918b69a"
              },
              xValue: 0,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            id: "a-22-n-5",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 200,
              easing: "easeInOut",
              duration: 800,
              target: {
                selector: ".hero-item-block",
                selectorGuids: ["16a1cbf1-e19c-573a-fa90-77ed0eb356a7"]
              },
              xValue: 1,
              yValue: 1,
              locked: !0
            }
          }, {
            id: "a-22-n-8",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 200,
              easing: "easeInOut",
              duration: 800,
              target: {
                id: "6745b25f58afc09807f9d3e4|62970728-0f8f-2b43-4734-208153032a66"
              },
              xValue: 0,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            id: "a-22-n-7",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 200,
              easing: "easeInOut",
              duration: 800,
              target: {
                id: "6745b25f58afc09807f9d3e4|30e7f0b1-a8a2-f713-2864-27c417bd48d6"
              },
              xValue: 0,
              xUnit: "%",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1733310018197
      },
      "a-23": {
        id: "a-23",
        title: "Hero page load mobile animation",
        actionItemGroups: [{
          actionItems: [{
            id: "a-23-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                selector: ".hero-item-block",
                selectorGuids: ["16a1cbf1-e19c-573a-fa90-77ed0eb356a7"]
              },
              xValue: .7,
              yValue: .7,
              locked: !0
            }
          }, {
            id: "a-23-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                id: "6745b25f58afc09807f9d3e4|1d8e6a86-dac3-19e5-4101-6f575918b69a"
              },
              yValue: 40,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-23-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                id: "6745b25f58afc09807f9d3e4|30e7f0b1-a8a2-f713-2864-27c417bd48d6"
              },
              yValue: -100,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-23-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                id: "6745b25f58afc09807f9d3e4|62970728-0f8f-2b43-4734-208153032a66"
              },
              yValue: -240,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-23-n-6",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 100,
              easing: "easeInOut",
              duration: 800,
              target: {
                id: "6745b25f58afc09807f9d3e4|1d8e6a86-dac3-19e5-4101-6f575918b69a"
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-23-n-5",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 100,
              easing: "easeInOut",
              duration: 800,
              target: {
                selector: ".hero-item-block",
                selectorGuids: ["16a1cbf1-e19c-573a-fa90-77ed0eb356a7"]
              },
              xValue: 1,
              yValue: 1,
              locked: !0
            }
          }, {
            id: "a-23-n-8",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 100,
              easing: "easeInOut",
              duration: 800,
              target: {
                id: "6745b25f58afc09807f9d3e4|62970728-0f8f-2b43-4734-208153032a66"
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-23-n-7",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 100,
              easing: "easeInOut",
              duration: 800,
              target: {
                id: "6745b25f58afc09807f9d3e4|30e7f0b1-a8a2-f713-2864-27c417bd48d6"
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1733311796168
      },
      "a-24": {
        id: "a-24",
        title: "Nav menu open",
        actionItemGroups: [{
          actionItems: [{
            id: "a-24-n-3",
            actionTypeId: "PLUGIN_LOTTIE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".nav-menu-lottie",
                selectorGuids: ["6c34979b-1a83-3818-583c-0cf02844abd0"]
              },
              value: 2
            }
          }]
        }, {
          actionItems: [{
            id: "a-24-n",
            actionTypeId: "PLUGIN_LOTTIE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".nav-menu-lottie",
                selectorGuids: ["6c34979b-1a83-3818-583c-0cf02844abd0"]
              },
              value: 98
            }
          }, {
            id: "a-24-n-2",
            actionTypeId: "STYLE_FILTER",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".nav-menu-lottie",
                selectorGuids: ["6c34979b-1a83-3818-583c-0cf02844abd0"]
              },
              filters: [{
                type: "invert",
                filterId: "f7a2",
                value: 100,
                unit: "%"
              }]
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1733314840862
      },
      "a-25": {
        id: "a-25",
        title: "Nav menu close",
        actionItemGroups: [{
          actionItems: [{
            id: "a-25-n",
            actionTypeId: "PLUGIN_LOTTIE",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".nav-menu-lottie",
                selectorGuids: ["6c34979b-1a83-3818-583c-0cf02844abd0"]
              },
              value: 0
            }
          }, {
            id: "a-25-n-2",
            actionTypeId: "STYLE_FILTER",
            config: {
              delay: 0,
              easing: "easeInOut",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".nav-menu-lottie",
                selectorGuids: ["6c34979b-1a83-3818-583c-0cf02844abd0"]
              },
              filters: [{
                type: "invert",
                filterId: "f7a2",
                value: 0,
                unit: "%"
              }]
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1733314840862
      },
      "a-26": {
        id: "a-26",
        title: "Fixed nav in scroll",
        continuousParameterGroups: [{
          id: "a-26-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [{
            keyframe: 8,
            actionItems: [{
              id: "a-26-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                value: 0,
                unit: ""
              }
            }, {
              id: "a-26-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX"
              }
            }, {
              id: "a-26-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                xValue: .7,
                yValue: .7,
                locked: !0
              }
            }]
          }, {
            keyframe: 10,
            actionItems: [{
              id: "a-26-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                xValue: 1,
                yValue: 1,
                locked: !0
              }
            }, {
              id: "a-26-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                value: 1,
                unit: ""
              }
            }, {
              id: "a-26-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX"
              }
            }]
          }, {
            keyframe: 95,
            actionItems: [{
              id: "a-26-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                value: 1,
                unit: ""
              }
            }, {
              id: "a-26-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                xValue: 1,
                yValue: 1,
                locked: !0
              }
            }, {
              id: "a-26-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX"
              }
            }]
          }, {
            keyframe: 97,
            actionItems: [{
              id: "a-26-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                xValue: .7,
                yValue: .7,
                locked: !0
              }
            }, {
              id: "a-26-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                value: 0,
                unit: ""
              }
            }, {
              id: "a-26-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6745b25f58afc09807f9d3e4|8fe5c449-5ac3-c5af-3da6-129da27db71b"
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX"
              }
            }]
          }]
        }],
        createdOn: 1733316607733
      },
      "a-27": {
        id: "a-27",
        title: "Cursor move animation",
        continuousParameterGroups: [{
          id: "a-27-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [{
            keyframe: 0,
            actionItems: [{
              id: "a-27-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "52a5206a-6576-6b16-a1b2-c38fa7cbde65"
                },
                xValue: -50,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX"
              }
            }]
          }, {
            keyframe: 100,
            actionItems: [{
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "52a5206a-6576-6b16-a1b2-c38fa7cbde65"
                },
                xValue: 50,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX"
              }
            }]
          }]
        }, {
          id: "a-27-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [{
            keyframe: 0,
            actionItems: [{
              id: "a-27-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "52a5206a-6576-6b16-a1b2-c38fa7cbde65"
                },
                yValue: -50,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX"
              }
            }]
          }, {
            keyframe: 100,
            actionItems: [{
              id: "a-27-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "52a5206a-6576-6b16-a1b2-c38fa7cbde65"
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX"
              }
            }]
          }]
        }],
        createdOn: 1733320837861
      },
      growIn: {
        id: "growIn",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: .7500000000000001,
              yValue: .7500000000000001
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 1,
              yValue: 1
            }
          }, {
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }]
        }]
      },
      slideInBottom: {
        id: "slideInBottom",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 100,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }]
        }]
      },
      fadeIn: {
        id: "fadeIn",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }]
        }]
      }
    },
    site: {
      mediaQueries: [{
        key: "main",
        min: 992,
        max: 1e4
      }, {
        key: "medium",
        min: 768,
        max: 991
      }, {
        key: "small",
        min: 480,
        max: 767
      }, {
        key: "tiny",
        min: 0,
        max: 479
      }]
    }
  });
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/