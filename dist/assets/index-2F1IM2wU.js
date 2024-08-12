;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s)
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === 'childList')
        for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(s) {
    const o = {}
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(s) {
    if (s.ep) return
    s.ep = !0
    const o = n(s)
    fetch(s.href, o)
  }
})()
/**
 * @vue/shared v3.4.37
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Xn(e, t) {
  const n = new Set(e.split(','))
  return (r) => n.has(r)
}
const Z = {},
  mt = [],
  be = () => {},
  jo = () => !1,
  an = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Qn = (e) => e.startsWith('onUpdate:'),
  ie = Object.assign,
  Zn = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Ho = Object.prototype.hasOwnProperty,
  U = (e, t) => Ho.call(e, t),
  L = Array.isArray,
  _t = (e) => fn(e) === '[object Map]',
  ms = (e) => fn(e) === '[object Set]',
  j = (e) => typeof e == 'function',
  ne = (e) => typeof e == 'string',
  Je = (e) => typeof e == 'symbol',
  X = (e) => e !== null && typeof e == 'object',
  _s = (e) => (X(e) || j(e)) && j(e.then) && j(e.catch),
  ys = Object.prototype.toString,
  fn = (e) => ys.call(e),
  Bo = (e) => fn(e).slice(8, -1),
  bs = (e) => fn(e) === '[object Object]',
  er = (e) => ne(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  It = Xn(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  dn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Ko = /-(\w)/g,
  ct = dn((e) => e.replace(Ko, (t, n) => (n ? n.toUpperCase() : ''))),
  Uo = /\B([A-Z])/g,
  at = dn((e) => e.replace(Uo, '-$1').toLowerCase()),
  vs = dn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  wn = dn((e) => (e ? `on${vs(e)}` : '')),
  Ye = (e, t) => !Object.is(e, t),
  xn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Es = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n })
  },
  ko = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let wr
const ws = () =>
  wr ||
  (wr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function tr(e) {
  if (L(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ne(r) ? Go(r) : tr(r)
      if (s) for (const o in s) t[o] = s[o]
    }
    return t
  } else if (ne(e) || X(e)) return e
}
const Do = /;(?![^(]*\))/g,
  Wo = /:([^]+)/,
  zo = /\/\*[^]*?\*\//g
function Go(e) {
  const t = {}
  return (
    e
      .replace(zo, '')
      .split(Do)
      .forEach((n) => {
        if (n) {
          const r = n.split(Wo)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function hn(e) {
  let t = ''
  if (ne(e)) t = e
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const r = hn(e[n])
      r && (t += r + ' ')
    }
  else if (X(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const qo = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Yo = Xn(qo)
function xs(e) {
  return !!e || e === ''
}
const Ss = (e) => !!(e && e.__v_isRef === !0),
  Rs = (e) =>
    ne(e)
      ? e
      : e == null
        ? ''
        : L(e) || (X(e) && (e.toString === ys || !j(e.toString)))
          ? Ss(e)
            ? Rs(e.value)
            : JSON.stringify(e, Cs, 2)
          : String(e),
  Cs = (e, t) =>
    Ss(t)
      ? Cs(e, t.value)
      : _t(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], o) => ((n[Sn(r, o) + ' =>'] = s), n),
              {}
            )
          }
        : ms(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Sn(n)) }
          : Je(t)
            ? Sn(t)
            : X(t) && !L(t) && !bs(t)
              ? String(t)
              : t,
  Sn = (e, t = '') => {
    var n
    return Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.37
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ee
class Ps {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ee),
      !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Ee
      try {
        return (Ee = this), t()
      } finally {
        Ee = n
      }
    }
  }
  on() {
    Ee = this
  }
  off() {
    Ee = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop()
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Jo(e) {
  return new Ps(e)
}
function Xo(e, t = Ee) {
  t && t.active && t.effects.push(e)
}
function Qo() {
  return Ee
}
let ot
class nr {
  constructor(t, n, r, s) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Xo(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), Xe()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (Zo(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Qe()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Ge,
      n = ot
    try {
      return (Ge = !0), (ot = this), this._runnings++, xr(this), this.fn()
    } finally {
      Sr(this), this._runnings--, (ot = n), (Ge = t)
    }
  }
  stop() {
    this.active && (xr(this), Sr(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function Zo(e) {
  return e.value
}
function xr(e) {
  e._trackId++, (e._depsLength = 0)
}
function Sr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Os(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Os(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Ge = !0,
  Fn = 0
const Vs = []
function Xe() {
  Vs.push(Ge), (Ge = !1)
}
function Qe() {
  const e = Vs.pop()
  Ge = e === void 0 ? !0 : e
}
function rr() {
  Fn++
}
function sr() {
  for (Fn--; !Fn && Nn.length; ) Nn.shift()()
}
function As(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Os(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const Nn = []
function Is(e, t, n) {
  rr()
  for (const r of e.keys()) {
    let s
    r._dirtyLevel < t &&
      (s ?? (s = e.get(r) === r._trackId)) &&
      (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), (r._dirtyLevel = t)),
      r._shouldSchedule &&
        (s ?? (s = e.get(r) === r._trackId)) &&
        (r.trigger(),
        (!r._runnings || r.allowRecurse) &&
          r._dirtyLevel !== 2 &&
          ((r._shouldSchedule = !1), r.scheduler && Nn.push(r.scheduler)))
  }
  sr()
}
const Ts = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  Ln = new WeakMap(),
  it = Symbol(''),
  $n = Symbol('')
function de(e, t, n) {
  if (Ge && ot) {
    let r = Ln.get(e)
    r || Ln.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = Ts(() => r.delete(n)))), As(ot, s)
  }
}
function Le(e, t, n, r, s, o) {
  const i = Ln.get(e)
  if (!i) return
  let c = []
  if (t === 'clear') c = [...i.values()]
  else if (n === 'length' && L(e)) {
    const l = Number(r)
    i.forEach((f, d) => {
      ;(d === 'length' || (!Je(d) && d >= l)) && c.push(f)
    })
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case 'add':
        L(e) ? er(n) && c.push(i.get('length')) : (c.push(i.get(it)), _t(e) && c.push(i.get($n)))
        break
      case 'delete':
        L(e) || (c.push(i.get(it)), _t(e) && c.push(i.get($n)))
        break
      case 'set':
        _t(e) && c.push(i.get(it))
        break
    }
  rr()
  for (const l of c) l && Is(l, 4)
  sr()
}
const ei = Xn('__proto__,__v_isRef,__isVue'),
  Ms = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Je)
  ),
  Rr = ti()
function ti() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = z(this)
        for (let o = 0, i = this.length; o < i; o++) de(r, 'get', o + '')
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(z)) : s
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        Xe(), rr()
        const r = z(this)[t].apply(this, n)
        return sr(), Qe(), r
      }
    }),
    e
  )
}
function ni(e) {
  Je(e) || (e = String(e))
  const t = z(this)
  return de(t, 'has', e), t.hasOwnProperty(e)
}
class Fs {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, r) {
    const s = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !s
    if (n === '__v_isReadonly') return s
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return r === (s ? (o ? gi : js) : o ? $s : Ls).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = L(t)
    if (!s) {
      if (i && U(Rr, n)) return Reflect.get(Rr, n, r)
      if (n === 'hasOwnProperty') return ni
    }
    const c = Reflect.get(t, n, r)
    return (Je(n) ? Ms.has(n) : ei(n)) || (s || de(t, 'get', n), o)
      ? c
      : he(c)
        ? i && er(n)
          ? c
          : c.value
        : X(c)
          ? s
            ? Bs(c)
            : Wt(c)
          : c
  }
}
class Ns extends Fs {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let o = t[n]
    if (!this._isShallow) {
      const l = ut(o)
      if ((!Et(r) && !ut(r) && ((o = z(o)), (r = z(r))), !L(t) && he(o) && !he(r)))
        return l ? !1 : ((o.value = r), !0)
    }
    const i = L(t) && er(n) ? Number(n) < t.length : U(t, n),
      c = Reflect.set(t, n, r, s)
    return t === z(s) && (i ? Ye(r, o) && Le(t, 'set', n, r) : Le(t, 'add', n, r)), c
  }
  deleteProperty(t, n) {
    const r = U(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return s && r && Le(t, 'delete', n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!Je(n) || !Ms.has(n)) && de(t, 'has', n), r
  }
  ownKeys(t) {
    return de(t, 'iterate', L(t) ? 'length' : it), Reflect.ownKeys(t)
  }
}
class ri extends Fs {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const si = new Ns(),
  oi = new ri(),
  ii = new Ns(!0)
const or = (e) => e,
  pn = (e) => Reflect.getPrototypeOf(e)
function qt(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = z(e),
    o = z(t)
  n || (Ye(t, o) && de(s, 'get', t), de(s, 'get', o))
  const { has: i } = pn(s),
    c = r ? or : n ? cr : jt
  if (i.call(s, t)) return c(e.get(t))
  if (i.call(s, o)) return c(e.get(o))
  e !== s && e.get(t)
}
function Yt(e, t = !1) {
  const n = this.__v_raw,
    r = z(n),
    s = z(e)
  return (
    t || (Ye(e, s) && de(r, 'has', e), de(r, 'has', s)), e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function Jt(e, t = !1) {
  return (e = e.__v_raw), !t && de(z(e), 'iterate', it), Reflect.get(e, 'size', e)
}
function Cr(e, t = !1) {
  !t && !Et(e) && !ut(e) && (e = z(e))
  const n = z(this)
  return pn(n).has.call(n, e) || (n.add(e), Le(n, 'add', e, e)), this
}
function Pr(e, t, n = !1) {
  !n && !Et(t) && !ut(t) && (t = z(t))
  const r = z(this),
    { has: s, get: o } = pn(r)
  let i = s.call(r, e)
  i || ((e = z(e)), (i = s.call(r, e)))
  const c = o.call(r, e)
  return r.set(e, t), i ? Ye(t, c) && Le(r, 'set', e, t) : Le(r, 'add', e, t), this
}
function Or(e) {
  const t = z(this),
    { has: n, get: r } = pn(t)
  let s = n.call(t, e)
  s || ((e = z(e)), (s = n.call(t, e))), r && r.call(t, e)
  const o = t.delete(e)
  return s && Le(t, 'delete', e, void 0), o
}
function Vr() {
  const e = z(this),
    t = e.size !== 0,
    n = e.clear()
  return t && Le(e, 'clear', void 0, void 0), n
}
function Xt(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      c = z(i),
      l = t ? or : e ? cr : jt
    return !e && de(c, 'iterate', it), i.forEach((f, d) => r.call(s, l(f), l(d), o))
  }
}
function Qt(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = z(s),
      i = _t(o),
      c = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      f = s[e](...r),
      d = n ? or : t ? cr : jt
    return (
      !t && de(o, 'iterate', l ? $n : it),
      {
        next() {
          const { value: h, done: p } = f.next()
          return p ? { value: h, done: p } : { value: c ? [d(h[0]), d(h[1])] : d(h), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Ue(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function li() {
  const e = {
      get(o) {
        return qt(this, o)
      },
      get size() {
        return Jt(this)
      },
      has: Yt,
      add: Cr,
      set: Pr,
      delete: Or,
      clear: Vr,
      forEach: Xt(!1, !1)
    },
    t = {
      get(o) {
        return qt(this, o, !1, !0)
      },
      get size() {
        return Jt(this)
      },
      has: Yt,
      add(o) {
        return Cr.call(this, o, !0)
      },
      set(o, i) {
        return Pr.call(this, o, i, !0)
      },
      delete: Or,
      clear: Vr,
      forEach: Xt(!1, !0)
    },
    n = {
      get(o) {
        return qt(this, o, !0)
      },
      get size() {
        return Jt(this, !0)
      },
      has(o) {
        return Yt.call(this, o, !0)
      },
      add: Ue('add'),
      set: Ue('set'),
      delete: Ue('delete'),
      clear: Ue('clear'),
      forEach: Xt(!0, !1)
    },
    r = {
      get(o) {
        return qt(this, o, !0, !0)
      },
      get size() {
        return Jt(this, !0)
      },
      has(o) {
        return Yt.call(this, o, !0)
      },
      add: Ue('add'),
      set: Ue('set'),
      delete: Ue('delete'),
      clear: Ue('clear'),
      forEach: Xt(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = Qt(o, !1, !1)),
        (n[o] = Qt(o, !0, !1)),
        (t[o] = Qt(o, !1, !0)),
        (r[o] = Qt(o, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [ci, ui, ai, fi] = li()
function ir(e, t) {
  const n = t ? (e ? fi : ai) : e ? ui : ci
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
          ? r
          : Reflect.get(U(n, s) && s in r ? n : r, s, o)
}
const di = { get: ir(!1, !1) },
  hi = { get: ir(!1, !0) },
  pi = { get: ir(!0, !1) }
const Ls = new WeakMap(),
  $s = new WeakMap(),
  js = new WeakMap(),
  gi = new WeakMap()
function mi(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function _i(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mi(Bo(e))
}
function Wt(e) {
  return ut(e) ? e : lr(e, !1, si, di, Ls)
}
function Hs(e) {
  return lr(e, !1, ii, hi, $s)
}
function Bs(e) {
  return lr(e, !0, oi, pi, js)
}
function lr(e, t, n, r, s) {
  if (!X(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = s.get(e)
  if (o) return o
  const i = _i(e)
  if (i === 0) return e
  const c = new Proxy(e, i === 2 ? r : n)
  return s.set(e, c), c
}
function Tt(e) {
  return ut(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ut(e) {
  return !!(e && e.__v_isReadonly)
}
function Et(e) {
  return !!(e && e.__v_isShallow)
}
function Ks(e) {
  return e ? !!e.__v_raw : !1
}
function z(e) {
  const t = e && e.__v_raw
  return t ? z(t) : e
}
function Us(e) {
  return Object.isExtensible(e) && Es(e, '__v_skip', !0), e
}
const jt = (e) => (X(e) ? Wt(e) : e),
  cr = (e) => (X(e) ? Bs(e) : e)
class ks {
  constructor(t, n, r, s) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new nr(
        () => t(this._value),
        () => en(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = z(this)
    return (
      (!t._cacheable || t.effect.dirty) && Ye(t._value, (t._value = t.effect.run())) && en(t, 4),
      Ds(t),
      t.effect._dirtyLevel >= 2 && en(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function yi(e, t, n = !1) {
  let r, s
  const o = j(e)
  return o ? ((r = e), (s = be)) : ((r = e.get), (s = e.set)), new ks(r, s, o || !s, n)
}
function Ds(e) {
  var t
  Ge &&
    ot &&
    ((e = z(e)),
    As(
      ot,
      (t = e.dep) != null ? t : (e.dep = Ts(() => (e.dep = void 0), e instanceof ks ? e : void 0))
    ))
}
function en(e, t = 4, n, r) {
  e = z(e)
  const s = e.dep
  s && Is(s, t)
}
function he(e) {
  return !!(e && e.__v_isRef === !0)
}
function ur(e) {
  return Ws(e, !1)
}
function bi(e) {
  return Ws(e, !0)
}
function Ws(e, t) {
  return he(e) ? e : new vi(e, t)
}
class vi {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : z(t)),
      (this._value = n ? t : jt(t))
  }
  get value() {
    return Ds(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Et(t) || ut(t)
    ;(t = n ? t : z(t)),
      Ye(t, this._rawValue) &&
        (this._rawValue, (this._rawValue = t), (this._value = n ? t : jt(t)), en(this, 4))
  }
}
function lt(e) {
  return he(e) ? e.value : e
}
const Ei = {
  get: (e, t, n) => lt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return he(s) && !he(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  }
}
function zs(e) {
  return Tt(e) ? e : new Proxy(e, Ei)
}
/**
 * @vue/runtime-core v3.4.37
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function qe(e, t, n, r) {
  try {
    return r ? e(...r) : e()
  } catch (s) {
    gn(s, t, n)
  }
}
function we(e, t, n, r) {
  if (j(e)) {
    const s = qe(e, t, n, r)
    return (
      s &&
        _s(s) &&
        s.catch((o) => {
          gn(o, t, n)
        }),
      s
    )
  }
  if (L(e)) {
    const s = []
    for (let o = 0; o < e.length; o++) s.push(we(e[o], t, n, r))
    return s
  }
}
function gn(e, t, n, r = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; o; ) {
      const f = o.ec
      if (f) {
        for (let d = 0; d < f.length; d++) if (f[d](e, i, c) === !1) return
      }
      o = o.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      Xe(), qe(l, null, 10, [e, i, c]), Qe()
      return
    }
  }
  wi(e, n, s, r)
}
function wi(e, t, n, r = !0) {
  console.error(e)
}
let Ht = !1,
  jn = !1
const oe = []
let Ie = 0
const yt = []
let De = null,
  rt = 0
const Gs = Promise.resolve()
let ar = null
function qs(e) {
  const t = ar || Gs
  return e ? t.then(this ? e.bind(this) : e) : t
}
function xi(e) {
  let t = Ie + 1,
    n = oe.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = oe[r],
      o = Bt(s)
    o < e || (o === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function fr(e) {
  ;(!oe.length || !oe.includes(e, Ht && e.allowRecurse ? Ie + 1 : Ie)) &&
    (e.id == null ? oe.push(e) : oe.splice(xi(e.id), 0, e), Ys())
}
function Ys() {
  !Ht && !jn && ((jn = !0), (ar = Gs.then(Xs)))
}
function Si(e) {
  const t = oe.indexOf(e)
  t > Ie && oe.splice(t, 1)
}
function Ri(e) {
  L(e) ? yt.push(...e) : (!De || !De.includes(e, e.allowRecurse ? rt + 1 : rt)) && yt.push(e), Ys()
}
function Ar(e, t, n = Ht ? Ie + 1 : 0) {
  for (; n < oe.length; n++) {
    const r = oe[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      oe.splice(n, 1), n--, r()
    }
  }
}
function Js(e) {
  if (yt.length) {
    const t = [...new Set(yt)].sort((n, r) => Bt(n) - Bt(r))
    if (((yt.length = 0), De)) {
      De.push(...t)
      return
    }
    for (De = t, rt = 0; rt < De.length; rt++) {
      const n = De[rt]
      n.active !== !1 && n()
    }
    ;(De = null), (rt = 0)
  }
}
const Bt = (e) => (e.id == null ? 1 / 0 : e.id),
  Ci = (e, t) => {
    const n = Bt(e) - Bt(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Xs(e) {
  ;(jn = !1), (Ht = !0), oe.sort(Ci)
  try {
    for (Ie = 0; Ie < oe.length; Ie++) {
      const t = oe[Ie]
      t && t.active !== !1 && qe(t, t.i, t.i ? 15 : 14)
    }
  } finally {
    ;(Ie = 0), (oe.length = 0), Js(), (Ht = !1), (ar = null), (oe.length || yt.length) && Xs()
  }
}
let Te = null,
  mn = null
function ln(e) {
  const t = Te
  return (Te = e), (mn = (e && e.type.__scopeId) || null), t
}
function Pi(e) {
  mn = e
}
function Oi() {
  mn = null
}
function Vi(e, t = Te, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && jr(-1)
    const o = ln(t)
    let i
    try {
      i = e(...s)
    } finally {
      ln(o), r._d && jr(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function tt(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    o && (c.oldValue = o[i].value)
    let l = c.dir[r]
    l && (Xe(), we(l, n, 8, [e.el, c, e, t]), Qe())
  }
}
function Qs(e, t) {
  e.shapeFlag & 6 && e.component
    ? Qs(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
/*! #__NO_SIDE_EFFECTS__ */ function Rt(e, t) {
  return j(e) ? ie({ name: e.name }, t, { setup: e }) : e
}
const tn = (e) => !!e.type.__asyncLoader,
  Zs = (e) => e.type.__isKeepAlive
function Ai(e, t) {
  eo(e, 'a', t)
}
function Ii(e, t) {
  eo(e, 'da', t)
}
function eo(e, t, n = ce) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return e()
    })
  if ((_n(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) Zs(s.parent.vnode) && Ti(r, t, n, s), (s = s.parent)
  }
}
function Ti(e, t, n, r) {
  const s = _n(t, e, r, !0)
  to(() => {
    Zn(r[t], s)
  }, n)
}
function _n(e, t, n = ce, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          Xe()
          const c = zt(n),
            l = we(t, n, e, i)
          return c(), Qe(), l
        })
    return r ? s.unshift(o) : s.push(o), o
  }
}
const He =
    (e) =>
    (t, n = ce) => {
      ;(!vn || e === 'sp') && _n(e, (...r) => t(...r), n)
    },
  Mi = He('bm'),
  Fi = He('m'),
  Ni = He('bu'),
  Li = He('u'),
  $i = He('bum'),
  to = He('um'),
  ji = He('sp'),
  Hi = He('rtg'),
  Bi = He('rtc')
function Ki(e, t = ce) {
  _n('ec', e, t)
}
const Ui = Symbol.for('v-ndc')
function ki(e, t, n, r) {
  let s
  const o = n
  if (L(e) || ne(e)) {
    s = new Array(e.length)
    for (let i = 0, c = e.length; i < c; i++) s[i] = t(e[i], i, void 0, o)
  } else if (typeof e == 'number') {
    s = new Array(e)
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o)
  } else if (X(e))
    if (e[Symbol.iterator]) s = Array.from(e, (i, c) => t(i, c, void 0, o))
    else {
      const i = Object.keys(e)
      s = new Array(i.length)
      for (let c = 0, l = i.length; c < l; c++) {
        const f = i[c]
        s[c] = t(e[f], f, c, o)
      }
    }
  else s = []
  return s
}
const Hn = (e) => (e ? (Eo(e) ? gr(e) : Hn(e.parent)) : null),
  Mt = ie(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hn(e.parent),
    $root: (e) => Hn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => dr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), fr(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = qs.bind(e.proxy)),
    $watch: (e) => dl.bind(e)
  }),
  Rn = (e, t) => e !== Z && !e.__isScriptSetup && U(e, t),
  Di = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: c, appContext: l } = e
      let f
      if (t[0] !== '$') {
        const m = i[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t]
            case 2:
              return s[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (Rn(r, t)) return (i[t] = 1), r[t]
          if (s !== Z && U(s, t)) return (i[t] = 2), s[t]
          if ((f = e.propsOptions[0]) && U(f, t)) return (i[t] = 3), o[t]
          if (n !== Z && U(n, t)) return (i[t] = 4), n[t]
          Bn && (i[t] = 0)
        }
      }
      const d = Mt[t]
      let h, p
      if (d) return t === '$attrs' && de(e.attrs, 'get', ''), d(e)
      if ((h = c.__cssModules) && (h = h[t])) return h
      if (n !== Z && U(n, t)) return (i[t] = 4), n[t]
      if (((p = l.config.globalProperties), U(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e
      return Rn(s, t)
        ? ((s[t] = n), !0)
        : r !== Z && U(r, t)
          ? ((r[t] = n), !0)
          : U(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o } },
      i
    ) {
      let c
      return (
        !!n[i] ||
        (e !== Z && U(e, i)) ||
        Rn(t, i) ||
        ((c = o[0]) && U(c, i)) ||
        U(r, i) ||
        U(Mt, i) ||
        U(s.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : U(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function Ir(e) {
  return L(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Bn = !0
function Wi(e) {
  const t = dr(e),
    n = e.proxy,
    r = e.ctx
  ;(Bn = !1), t.beforeCreate && Tr(t.beforeCreate, e, 'bc')
  const {
    data: s,
    computed: o,
    methods: i,
    watch: c,
    provide: l,
    inject: f,
    created: d,
    beforeMount: h,
    mounted: p,
    beforeUpdate: m,
    updated: I,
    activated: C,
    deactivated: H,
    beforeDestroy: N,
    beforeUnmount: F,
    destroyed: V,
    unmounted: k,
    render: te,
    renderTracked: B,
    renderTriggered: ee,
    errorCaptured: me,
    serverPrefetch: Ze,
    expose: Se,
    inheritAttrs: Be,
    components: et,
    directives: Re,
    filters: Ct
  } = t
  if ((f && zi(f, r, null), i))
    for (const Y in i) {
      const D = i[Y]
      j(D) && (r[Y] = D.bind(n))
    }
  if (s) {
    const Y = s.call(n, n)
    X(Y) && (e.data = Wt(Y))
  }
  if (((Bn = !0), o))
    for (const Y in o) {
      const D = o[Y],
        Me = j(D) ? D.bind(n, n) : j(D.get) ? D.get.bind(n, n) : be,
        Ke = !j(D) && j(D.set) ? D.set.bind(n) : be,
        Ce = ye({ get: Me, set: Ke })
      Object.defineProperty(r, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (ue) => (Ce.value = ue)
      })
    }
  if (c) for (const Y in c) no(c[Y], r, n, Y)
  if (l) {
    const Y = j(l) ? l.call(n) : l
    Reflect.ownKeys(Y).forEach((D) => {
      nn(D, Y[D])
    })
  }
  d && Tr(d, e, 'c')
  function re(Y, D) {
    L(D) ? D.forEach((Me) => Y(Me.bind(n))) : D && Y(D.bind(n))
  }
  if (
    (re(Mi, h),
    re(Fi, p),
    re(Ni, m),
    re(Li, I),
    re(Ai, C),
    re(Ii, H),
    re(Ki, me),
    re(Bi, B),
    re(Hi, ee),
    re($i, F),
    re(to, k),
    re(ji, Ze),
    L(Se))
  )
    if (Se.length) {
      const Y = e.exposed || (e.exposed = {})
      Se.forEach((D) => {
        Object.defineProperty(Y, D, { get: () => n[D], set: (Me) => (n[D] = Me) })
      })
    } else e.exposed || (e.exposed = {})
  te && e.render === be && (e.render = te),
    Be != null && (e.inheritAttrs = Be),
    et && (e.components = et),
    Re && (e.directives = Re)
}
function zi(e, t, n = be) {
  L(e) && (e = Kn(e))
  for (const r in e) {
    const s = e[r]
    let o
    X(s)
      ? 'default' in s
        ? (o = $e(s.from || r, s.default, !0))
        : (o = $e(s.from || r))
      : (o = $e(s)),
      he(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i)
          })
        : (t[r] = o)
  }
}
function Tr(e, t, n) {
  we(L(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function no(e, t, n, r) {
  const s = r.includes('.') ? _o(n, r) : () => n[r]
  if (ne(e)) {
    const o = t[e]
    j(o) && rn(s, o)
  } else if (j(e)) rn(s, e.bind(n))
  else if (X(e))
    if (L(e)) e.forEach((o) => no(o, t, n, r))
    else {
      const o = j(e.handler) ? e.handler.bind(n) : t[e.handler]
      j(o) && rn(s, o, e)
    }
}
function dr(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i }
    } = e.appContext,
    c = o.get(t)
  let l
  return (
    c
      ? (l = c)
      : !s.length && !n && !r
        ? (l = t)
        : ((l = {}), s.length && s.forEach((f) => cn(l, f, i, !0)), cn(l, t, i)),
    X(t) && o.set(t, l),
    l
  )
}
function cn(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t
  o && cn(e, o, n, !0), s && s.forEach((i) => cn(e, i, n, !0))
  for (const i in t)
    if (!(r && i === 'expose')) {
      const c = Gi[i] || (n && n[i])
      e[i] = c ? c(e[i], t[i]) : t[i]
    }
  return e
}
const Gi = {
  data: Mr,
  props: Fr,
  emits: Fr,
  methods: At,
  computed: At,
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  components: At,
  directives: At,
  watch: Yi,
  provide: Mr,
  inject: qi
}
function Mr(e, t) {
  return t
    ? e
      ? function () {
          return ie(j(e) ? e.call(this, this) : e, j(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function qi(e, t) {
  return At(Kn(e), Kn(t))
}
function Kn(e) {
  if (L(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function At(e, t) {
  return e ? ie(Object.create(null), e, t) : t
}
function Fr(e, t) {
  return e
    ? L(e) && L(t)
      ? [...new Set([...e, ...t])]
      : ie(Object.create(null), Ir(e), Ir(t ?? {}))
    : t
}
function Yi(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ie(Object.create(null), e)
  for (const r in t) n[r] = le(e[r], t[r])
  return n
}
function ro() {
  return {
    app: null,
    config: {
      isNativeTag: jo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let Ji = 0
function Xi(e, t) {
  return function (r, s = null) {
    j(r) || (r = ie({}, r)), s != null && !X(s) && (s = null)
    const o = ro(),
      i = new WeakSet()
    let c = !1
    const l = (o.app = {
      _uid: Ji++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Nl,
      get config() {
        return o.config
      },
      set config(f) {},
      use(f, ...d) {
        return (
          i.has(f) ||
            (f && j(f.install) ? (i.add(f), f.install(l, ...d)) : j(f) && (i.add(f), f(l, ...d))),
          l
        )
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), l
      },
      component(f, d) {
        return d ? ((o.components[f] = d), l) : o.components[f]
      },
      directive(f, d) {
        return d ? ((o.directives[f] = d), l) : o.directives[f]
      },
      mount(f, d, h) {
        if (!c) {
          const p = fe(r, s)
          return (
            (p.appContext = o),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            d && t ? t(p, f) : e(p, f, h),
            (c = !0),
            (l._container = f),
            (f.__vue_app__ = l),
            gr(p.component)
          )
        }
      },
      unmount() {
        c && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(f, d) {
        return (o.provides[f] = d), l
      },
      runWithContext(f) {
        const d = bt
        bt = l
        try {
          return f()
        } finally {
          bt = d
        }
      }
    })
    return l
  }
}
let bt = null
function nn(e, t) {
  if (ce) {
    let n = ce.provides
    const r = ce.parent && ce.parent.provides
    r === n && (n = ce.provides = Object.create(r)), (n[e] = t)
  }
}
function $e(e, t, n = !1) {
  const r = ce || Te
  if (r || bt) {
    const s = bt
      ? bt._context.provides
      : r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && j(t) ? t.call(r && r.proxy) : t
  }
}
const so = {},
  oo = () => Object.create(so),
  io = (e) => Object.getPrototypeOf(e) === so
function Qi(e, t, n, r = !1) {
  const s = {},
    o = oo()
  ;(e.propsDefaults = Object.create(null)), lo(e, t, s, o)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : Hs(s)) : e.type.props ? (e.props = s) : (e.props = o), (e.attrs = o)
}
function Zi(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i }
    } = e,
    c = z(s),
    [l] = e.propsOptions
  let f = !1
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps
      for (let h = 0; h < d.length; h++) {
        let p = d[h]
        if (yn(e.emitsOptions, p)) continue
        const m = t[p]
        if (l)
          if (U(o, p)) m !== o[p] && ((o[p] = m), (f = !0))
          else {
            const I = ct(p)
            s[I] = Un(l, c, I, m, e, !1)
          }
        else m !== o[p] && ((o[p] = m), (f = !0))
      }
    }
  } else {
    lo(e, t, s, o) && (f = !0)
    let d
    for (const h in c)
      (!t || (!U(t, h) && ((d = at(h)) === h || !U(t, d)))) &&
        (l
          ? n && (n[h] !== void 0 || n[d] !== void 0) && (s[h] = Un(l, c, h, void 0, e, !0))
          : delete s[h])
    if (o !== c) for (const h in o) (!t || !U(t, h)) && (delete o[h], (f = !0))
  }
  f && Le(e.attrs, 'set', '')
}
function lo(e, t, n, r) {
  const [s, o] = e.propsOptions
  let i = !1,
    c
  if (t)
    for (let l in t) {
      if (It(l)) continue
      const f = t[l]
      let d
      s && U(s, (d = ct(l)))
        ? !o || !o.includes(d)
          ? (n[d] = f)
          : ((c || (c = {}))[d] = f)
        : yn(e.emitsOptions, l) || ((!(l in r) || f !== r[l]) && ((r[l] = f), (i = !0)))
    }
  if (o) {
    const l = z(n),
      f = c || Z
    for (let d = 0; d < o.length; d++) {
      const h = o[d]
      n[h] = Un(s, l, h, f[h], e, !U(f, h))
    }
  }
  return i
}
function Un(e, t, n, r, s, o) {
  const i = e[n]
  if (i != null) {
    const c = U(i, 'default')
    if (c && r === void 0) {
      const l = i.default
      if (i.type !== Function && !i.skipFactory && j(l)) {
        const { propsDefaults: f } = s
        if (n in f) r = f[n]
        else {
          const d = zt(s)
          ;(r = f[n] = l.call(null, t)), d()
        }
      } else r = l
    }
    i[0] && (o && !c ? (r = !1) : i[1] && (r === '' || r === at(n)) && (r = !0))
  }
  return r
}
const el = new WeakMap()
function co(e, t, n = !1) {
  const r = n ? el : t.propsCache,
    s = r.get(e)
  if (s) return s
  const o = e.props,
    i = {},
    c = []
  let l = !1
  if (!j(e)) {
    const d = (h) => {
      l = !0
      const [p, m] = co(h, t, !0)
      ie(i, p), m && c.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d)
  }
  if (!o && !l) return X(e) && r.set(e, mt), mt
  if (L(o))
    for (let d = 0; d < o.length; d++) {
      const h = ct(o[d])
      Nr(h) && (i[h] = Z)
    }
  else if (o)
    for (const d in o) {
      const h = ct(d)
      if (Nr(h)) {
        const p = o[d],
          m = (i[h] = L(p) || j(p) ? { type: p } : ie({}, p)),
          I = m.type
        let C = !1,
          H = !0
        if (L(I))
          for (let N = 0; N < I.length; ++N) {
            const F = I[N],
              V = j(F) && F.name
            if (V === 'Boolean') {
              C = !0
              break
            } else V === 'String' && (H = !1)
          }
        else C = j(I) && I.name === 'Boolean'
        ;(m[0] = C), (m[1] = H), (C || U(m, 'default')) && c.push(h)
      }
    }
  const f = [i, c]
  return X(e) && r.set(e, f), f
}
function Nr(e) {
  return e[0] !== '$' && !It(e)
}
const uo = (e) => e[0] === '_' || e === '$stable',
  hr = (e) => (L(e) ? e.map(Ae) : [Ae(e)]),
  tl = (e, t, n) => {
    if (t._n) return t
    const r = Vi((...s) => hr(t(...s)), n)
    return (r._c = !1), r
  },
  ao = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (uo(s)) continue
      const o = e[s]
      if (j(o)) t[s] = tl(s, o, r)
      else if (o != null) {
        const i = hr(o)
        t[s] = () => i
      }
    }
  },
  fo = (e, t) => {
    const n = hr(t)
    e.slots.default = () => n
  },
  ho = (e, t, n) => {
    for (const r in t) (n || r !== '_') && (e[r] = t[r])
  },
  nl = (e, t, n) => {
    const r = (e.slots = oo())
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? (ho(r, t, n), n && Es(r, '_', s, !0)) : ao(t, r)
    } else t && fo(e, t)
  },
  rl = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let o = !0,
      i = Z
    if (r.shapeFlag & 32) {
      const c = t._
      c ? (n && c === 1 ? (o = !1) : ho(s, t, n)) : ((o = !t.$stable), ao(t, s)), (i = t)
    } else t && (fo(e, t), (i = { default: 1 }))
    if (o) for (const c in s) !uo(c) && i[c] == null && delete s[c]
  }
function kn(e, t, n, r, s = !1) {
  if (L(e)) {
    e.forEach((p, m) => kn(p, t && (L(t) ? t[m] : t), n, r, s))
    return
  }
  if (tn(r) && !s) return
  const o = r.shapeFlag & 4 ? gr(r.component) : r.el,
    i = s ? null : o,
    { i: c, r: l } = e,
    f = t && t.r,
    d = c.refs === Z ? (c.refs = {}) : c.refs,
    h = c.setupState
  if (
    (f != null &&
      f !== l &&
      (ne(f) ? ((d[f] = null), U(h, f) && (h[f] = null)) : he(f) && (f.value = null)),
    j(l))
  )
    qe(l, c, 12, [i, d])
  else {
    const p = ne(l),
      m = he(l)
    if (p || m) {
      const I = () => {
        if (e.f) {
          const C = p ? (U(h, l) ? h[l] : d[l]) : l.value
          s
            ? L(C) && Zn(C, o)
            : L(C)
              ? C.includes(o) || C.push(o)
              : p
                ? ((d[l] = [o]), U(h, l) && (h[l] = d[l]))
                : ((l.value = [o]), e.k && (d[e.k] = l.value))
        } else p ? ((d[l] = i), U(h, l) && (h[l] = i)) : m && ((l.value = i), e.k && (d[e.k] = i))
      }
      i ? ((I.id = -1), ae(I, n)) : I()
    }
  }
}
const sl = Symbol('_vte'),
  ol = (e) => e.__isTeleport,
  ae = vl
function il(e) {
  return ll(e)
}
function ll(e, t) {
  const n = ws()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: c,
      createComment: l,
      setText: f,
      setElementText: d,
      parentNode: h,
      nextSibling: p,
      setScopeId: m = be,
      insertStaticContent: I
    } = e,
    C = (u, a, g, b = null, _ = null, E = null, S = void 0, w = null, x = !!a.dynamicChildren) => {
      if (u === a) return
      u && !Ot(u, a) && ((b = y(u)), ue(u, _, E, !0), (u = null)),
        a.patchFlag === -2 && ((x = !1), (a.dynamicChildren = null))
      const { type: v, ref: O, shapeFlag: M } = a
      switch (v) {
        case bn:
          H(u, a, g, b)
          break
        case Kt:
          N(u, a, g, b)
          break
        case On:
          u == null && F(a, g, b, S)
          break
        case Ve:
          et(u, a, g, b, _, E, S, w, x)
          break
        default:
          M & 1
            ? te(u, a, g, b, _, E, S, w, x)
            : M & 6
              ? Re(u, a, g, b, _, E, S, w, x)
              : (M & 64 || M & 128) && v.process(u, a, g, b, _, E, S, w, x, A)
      }
      O != null && _ && kn(O, u && u.ref, E, a || u, !a)
    },
    H = (u, a, g, b) => {
      if (u == null) r((a.el = c(a.children)), g, b)
      else {
        const _ = (a.el = u.el)
        a.children !== u.children && f(_, a.children)
      }
    },
    N = (u, a, g, b) => {
      u == null ? r((a.el = l(a.children || '')), g, b) : (a.el = u.el)
    },
    F = (u, a, g, b) => {
      ;[u.el, u.anchor] = I(u.children, a, g, b, u.el, u.anchor)
    },
    V = ({ el: u, anchor: a }, g, b) => {
      let _
      for (; u && u !== a; ) (_ = p(u)), r(u, g, b), (u = _)
      r(a, g, b)
    },
    k = ({ el: u, anchor: a }) => {
      let g
      for (; u && u !== a; ) (g = p(u)), s(u), (u = g)
      s(a)
    },
    te = (u, a, g, b, _, E, S, w, x) => {
      a.type === 'svg' ? (S = 'svg') : a.type === 'math' && (S = 'mathml'),
        u == null ? B(a, g, b, _, E, S, w, x) : Ze(u, a, _, E, S, w, x)
    },
    B = (u, a, g, b, _, E, S, w) => {
      let x, v
      const { props: O, shapeFlag: M, transition: T, dirs: $ } = u
      if (
        ((x = u.el = i(u.type, E, O && O.is, O)),
        M & 8 ? d(x, u.children) : M & 16 && me(u.children, x, null, b, _, Cn(u, E), S, w),
        $ && tt(u, null, b, 'created'),
        ee(x, u, u.scopeId, S, b),
        O)
      ) {
        for (const J in O) J !== 'value' && !It(J) && o(x, J, null, O[J], E, b)
        'value' in O && o(x, 'value', null, O.value, E), (v = O.onVnodeBeforeMount) && Oe(v, b, u)
      }
      $ && tt(u, null, b, 'beforeMount')
      const K = cl(_, T)
      K && T.beforeEnter(x),
        r(x, a, g),
        ((v = O && O.onVnodeMounted) || K || $) &&
          ae(() => {
            v && Oe(v, b, u), K && T.enter(x), $ && tt(u, null, b, 'mounted')
          }, _)
    },
    ee = (u, a, g, b, _) => {
      if ((g && m(u, g), b)) for (let E = 0; E < b.length; E++) m(u, b[E])
      if (_) {
        let E = _.subTree
        if (a === E) {
          const S = _.vnode
          ee(u, S, S.scopeId, S.slotScopeIds, _.parent)
        }
      }
    },
    me = (u, a, g, b, _, E, S, w, x = 0) => {
      for (let v = x; v < u.length; v++) {
        const O = (u[v] = w ? We(u[v]) : Ae(u[v]))
        C(null, O, a, g, b, _, E, S, w)
      }
    },
    Ze = (u, a, g, b, _, E, S) => {
      const w = (a.el = u.el)
      let { patchFlag: x, dynamicChildren: v, dirs: O } = a
      x |= u.patchFlag & 16
      const M = u.props || Z,
        T = a.props || Z
      let $
      if (
        (g && nt(g, !1),
        ($ = T.onVnodeBeforeUpdate) && Oe($, g, a, u),
        O && tt(a, u, g, 'beforeUpdate'),
        g && nt(g, !0),
        ((M.innerHTML && T.innerHTML == null) || (M.textContent && T.textContent == null)) &&
          d(w, ''),
        v
          ? Se(u.dynamicChildren, v, w, g, b, Cn(a, _), E)
          : S || D(u, a, w, null, g, b, Cn(a, _), E, !1),
        x > 0)
      ) {
        if (x & 16) Be(w, M, T, g, _)
        else if (
          (x & 2 && M.class !== T.class && o(w, 'class', null, T.class, _),
          x & 4 && o(w, 'style', M.style, T.style, _),
          x & 8)
        ) {
          const K = a.dynamicProps
          for (let J = 0; J < K.length; J++) {
            const W = K[J],
              se = M[W],
              ve = T[W]
            ;(ve !== se || W === 'value') && o(w, W, se, ve, _, g)
          }
        }
        x & 1 && u.children !== a.children && d(w, a.children)
      } else !S && v == null && Be(w, M, T, g, _)
      ;(($ = T.onVnodeUpdated) || O) &&
        ae(() => {
          $ && Oe($, g, a, u), O && tt(a, u, g, 'updated')
        }, b)
    },
    Se = (u, a, g, b, _, E, S) => {
      for (let w = 0; w < a.length; w++) {
        const x = u[w],
          v = a[w],
          O = x.el && (x.type === Ve || !Ot(x, v) || x.shapeFlag & 70) ? h(x.el) : g
        C(x, v, O, null, b, _, E, S, !0)
      }
    },
    Be = (u, a, g, b, _) => {
      if (a !== g) {
        if (a !== Z) for (const E in a) !It(E) && !(E in g) && o(u, E, a[E], null, _, b)
        for (const E in g) {
          if (It(E)) continue
          const S = g[E],
            w = a[E]
          S !== w && E !== 'value' && o(u, E, w, S, _, b)
        }
        'value' in g && o(u, 'value', a.value, g.value, _)
      }
    },
    et = (u, a, g, b, _, E, S, w, x) => {
      const v = (a.el = u ? u.el : c('')),
        O = (a.anchor = u ? u.anchor : c(''))
      let { patchFlag: M, dynamicChildren: T, slotScopeIds: $ } = a
      $ && (w = w ? w.concat($) : $),
        u == null
          ? (r(v, g, b), r(O, g, b), me(a.children || [], g, O, _, E, S, w, x))
          : M > 0 && M & 64 && T && u.dynamicChildren
            ? (Se(u.dynamicChildren, T, g, _, E, S, w),
              (a.key != null || (_ && a === _.subTree)) && po(u, a, !0))
            : D(u, a, g, O, _, E, S, w, x)
    },
    Re = (u, a, g, b, _, E, S, w, x) => {
      ;(a.slotScopeIds = w),
        u == null
          ? a.shapeFlag & 512
            ? _.ctx.activate(a, g, b, S, x)
            : Ct(a, g, b, _, E, S, x)
          : ft(u, a, x)
    },
    Ct = (u, a, g, b, _, E, S) => {
      const w = (u.component = Vl(u, b, _))
      if ((Zs(u) && (w.ctx.renderer = A), Al(w, !1, S), w.asyncDep)) {
        if ((_ && _.registerDep(w, re, S), !u.el)) {
          const x = (w.subTree = fe(Kt))
          N(null, x, a, g)
        }
      } else re(w, u, a, g, _, E, S)
    },
    ft = (u, a, g) => {
      const b = (a.component = u.component)
      if (_l(u, a, g))
        if (b.asyncDep && !b.asyncResolved) {
          Y(b, a, g)
          return
        } else (b.next = a), Si(b.update), (b.effect.dirty = !0), b.update()
      else (a.el = u.el), (b.vnode = a)
    },
    re = (u, a, g, b, _, E, S) => {
      const w = () => {
          if (u.isMounted) {
            let { next: O, bu: M, u: T, parent: $, vnode: K } = u
            {
              const pt = go(u)
              if (pt) {
                O && ((O.el = K.el), Y(u, O, S)),
                  pt.asyncDep.then(() => {
                    u.isUnmounted || w()
                  })
                return
              }
            }
            let J = O,
              W
            nt(u, !1),
              O ? ((O.el = K.el), Y(u, O, S)) : (O = K),
              M && xn(M),
              (W = O.props && O.props.onVnodeBeforeUpdate) && Oe(W, $, O, K),
              nt(u, !0)
            const se = Pn(u),
              ve = u.subTree
            ;(u.subTree = se),
              C(ve, se, h(ve.el), y(ve), u, _, E),
              (O.el = se.el),
              J === null && yl(u, se.el),
              T && ae(T, _),
              (W = O.props && O.props.onVnodeUpdated) && ae(() => Oe(W, $, O, K), _)
          } else {
            let O
            const { el: M, props: T } = a,
              { bm: $, m: K, parent: J } = u,
              W = tn(a)
            if (
              (nt(u, !1),
              $ && xn($),
              !W && (O = T && T.onVnodeBeforeMount) && Oe(O, J, a),
              nt(u, !0),
              M && Q)
            ) {
              const se = () => {
                ;(u.subTree = Pn(u)), Q(M, u.subTree, u, _, null)
              }
              W ? a.type.__asyncLoader().then(() => !u.isUnmounted && se()) : se()
            } else {
              const se = (u.subTree = Pn(u))
              C(null, se, g, b, u, _, E), (a.el = se.el)
            }
            if ((K && ae(K, _), !W && (O = T && T.onVnodeMounted))) {
              const se = a
              ae(() => Oe(O, J, se), _)
            }
            ;(a.shapeFlag & 256 || (J && tn(J.vnode) && J.vnode.shapeFlag & 256)) &&
              u.a &&
              ae(u.a, _),
              (u.isMounted = !0),
              (a = g = b = null)
          }
        },
        x = (u.effect = new nr(w, be, () => fr(v), u.scope)),
        v = (u.update = () => {
          x.dirty && x.run()
        })
      ;(v.i = u), (v.id = u.uid), nt(u, !0), v()
    },
    Y = (u, a, g) => {
      a.component = u
      const b = u.vnode.props
      ;(u.vnode = a), (u.next = null), Zi(u, a.props, b, g), rl(u, a.children, g), Xe(), Ar(u), Qe()
    },
    D = (u, a, g, b, _, E, S, w, x = !1) => {
      const v = u && u.children,
        O = u ? u.shapeFlag : 0,
        M = a.children,
        { patchFlag: T, shapeFlag: $ } = a
      if (T > 0) {
        if (T & 128) {
          Ke(v, M, g, b, _, E, S, w, x)
          return
        } else if (T & 256) {
          Me(v, M, g, b, _, E, S, w, x)
          return
        }
      }
      $ & 8
        ? (O & 16 && _e(v, _, E), M !== v && d(g, M))
        : O & 16
          ? $ & 16
            ? Ke(v, M, g, b, _, E, S, w, x)
            : _e(v, _, E, !0)
          : (O & 8 && d(g, ''), $ & 16 && me(M, g, b, _, E, S, w, x))
    },
    Me = (u, a, g, b, _, E, S, w, x) => {
      ;(u = u || mt), (a = a || mt)
      const v = u.length,
        O = a.length,
        M = Math.min(v, O)
      let T
      for (T = 0; T < M; T++) {
        const $ = (a[T] = x ? We(a[T]) : Ae(a[T]))
        C(u[T], $, g, null, _, E, S, w, x)
      }
      v > O ? _e(u, _, E, !0, !1, M) : me(a, g, b, _, E, S, w, x, M)
    },
    Ke = (u, a, g, b, _, E, S, w, x) => {
      let v = 0
      const O = a.length
      let M = u.length - 1,
        T = O - 1
      for (; v <= M && v <= T; ) {
        const $ = u[v],
          K = (a[v] = x ? We(a[v]) : Ae(a[v]))
        if (Ot($, K)) C($, K, g, null, _, E, S, w, x)
        else break
        v++
      }
      for (; v <= M && v <= T; ) {
        const $ = u[M],
          K = (a[T] = x ? We(a[T]) : Ae(a[T]))
        if (Ot($, K)) C($, K, g, null, _, E, S, w, x)
        else break
        M--, T--
      }
      if (v > M) {
        if (v <= T) {
          const $ = T + 1,
            K = $ < O ? a[$].el : b
          for (; v <= T; ) C(null, (a[v] = x ? We(a[v]) : Ae(a[v])), g, K, _, E, S, w, x), v++
        }
      } else if (v > T) for (; v <= M; ) ue(u[v], _, E, !0), v++
      else {
        const $ = v,
          K = v,
          J = new Map()
        for (v = K; v <= T; v++) {
          const pe = (a[v] = x ? We(a[v]) : Ae(a[v]))
          pe.key != null && J.set(pe.key, v)
        }
        let W,
          se = 0
        const ve = T - K + 1
        let pt = !1,
          br = 0
        const Pt = new Array(ve)
        for (v = 0; v < ve; v++) Pt[v] = 0
        for (v = $; v <= M; v++) {
          const pe = u[v]
          if (se >= ve) {
            ue(pe, _, E, !0)
            continue
          }
          let Pe
          if (pe.key != null) Pe = J.get(pe.key)
          else
            for (W = K; W <= T; W++)
              if (Pt[W - K] === 0 && Ot(pe, a[W])) {
                Pe = W
                break
              }
          Pe === void 0
            ? ue(pe, _, E, !0)
            : ((Pt[Pe - K] = v + 1),
              Pe >= br ? (br = Pe) : (pt = !0),
              C(pe, a[Pe], g, null, _, E, S, w, x),
              se++)
        }
        const vr = pt ? ul(Pt) : mt
        for (W = vr.length - 1, v = ve - 1; v >= 0; v--) {
          const pe = K + v,
            Pe = a[pe],
            Er = pe + 1 < O ? a[pe + 1].el : b
          Pt[v] === 0
            ? C(null, Pe, g, Er, _, E, S, w, x)
            : pt && (W < 0 || v !== vr[W] ? Ce(Pe, g, Er, 2) : W--)
        }
      }
    },
    Ce = (u, a, g, b, _ = null) => {
      const { el: E, type: S, transition: w, children: x, shapeFlag: v } = u
      if (v & 6) {
        Ce(u.component.subTree, a, g, b)
        return
      }
      if (v & 128) {
        u.suspense.move(a, g, b)
        return
      }
      if (v & 64) {
        S.move(u, a, g, A)
        return
      }
      if (S === Ve) {
        r(E, a, g)
        for (let M = 0; M < x.length; M++) Ce(x[M], a, g, b)
        r(u.anchor, a, g)
        return
      }
      if (S === On) {
        V(u, a, g)
        return
      }
      if (b !== 2 && v & 1 && w)
        if (b === 0) w.beforeEnter(E), r(E, a, g), ae(() => w.enter(E), _)
        else {
          const { leave: M, delayLeave: T, afterLeave: $ } = w,
            K = () => r(E, a, g),
            J = () => {
              M(E, () => {
                K(), $ && $()
              })
            }
          T ? T(E, K, J) : J()
        }
      else r(E, a, g)
    },
    ue = (u, a, g, b = !1, _ = !1) => {
      const {
        type: E,
        props: S,
        ref: w,
        children: x,
        dynamicChildren: v,
        shapeFlag: O,
        patchFlag: M,
        dirs: T,
        cacheIndex: $
      } = u
      if (
        (M === -2 && (_ = !1),
        w != null && kn(w, null, g, u, !0),
        $ != null && (a.renderCache[$] = void 0),
        O & 256)
      ) {
        a.ctx.deactivate(u)
        return
      }
      const K = O & 1 && T,
        J = !tn(u)
      let W
      if ((J && (W = S && S.onVnodeBeforeUnmount) && Oe(W, a, u), O & 6)) Gt(u.component, g, b)
      else {
        if (O & 128) {
          u.suspense.unmount(g, b)
          return
        }
        K && tt(u, null, a, 'beforeUnmount'),
          O & 64
            ? u.type.remove(u, a, g, A, b)
            : v && !v.hasOnce && (E !== Ve || (M > 0 && M & 64))
              ? _e(v, a, g, !1, !0)
              : ((E === Ve && M & 384) || (!_ && O & 16)) && _e(x, a, g),
          b && dt(u)
      }
      ;((J && (W = S && S.onVnodeUnmounted)) || K) &&
        ae(() => {
          W && Oe(W, a, u), K && tt(u, null, a, 'unmounted')
        }, g)
    },
    dt = (u) => {
      const { type: a, el: g, anchor: b, transition: _ } = u
      if (a === Ve) {
        ht(g, b)
        return
      }
      if (a === On) {
        k(u)
        return
      }
      const E = () => {
        s(g), _ && !_.persisted && _.afterLeave && _.afterLeave()
      }
      if (u.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: S, delayLeave: w } = _,
          x = () => S(g, E)
        w ? w(u.el, E, x) : x()
      } else E()
    },
    ht = (u, a) => {
      let g
      for (; u !== a; ) (g = p(u)), s(u), (u = g)
      s(a)
    },
    Gt = (u, a, g) => {
      const { bum: b, scope: _, update: E, subTree: S, um: w, m: x, a: v } = u
      Lr(x),
        Lr(v),
        b && xn(b),
        _.stop(),
        E && ((E.active = !1), ue(S, u, a, g)),
        w && ae(w, a),
        ae(() => {
          u.isUnmounted = !0
        }, a),
        a &&
          a.pendingBranch &&
          !a.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === a.pendingId &&
          (a.deps--, a.deps === 0 && a.resolve())
    },
    _e = (u, a, g, b = !1, _ = !1, E = 0) => {
      for (let S = E; S < u.length; S++) ue(u[S], a, g, b, _)
    },
    y = (u) => {
      if (u.shapeFlag & 6) return y(u.component.subTree)
      if (u.shapeFlag & 128) return u.suspense.next()
      const a = p(u.anchor || u.el),
        g = a && a[sl]
      return g ? p(g) : a
    }
  let P = !1
  const R = (u, a, g) => {
      u == null
        ? a._vnode && ue(a._vnode, null, null, !0)
        : C(a._vnode || null, u, a, null, null, null, g),
        (a._vnode = u),
        P || ((P = !0), Ar(), Js(), (P = !1))
    },
    A = { p: C, um: ue, m: Ce, r: dt, mt: Ct, mc: me, pc: D, pbc: Se, n: y, o: e }
  let G, Q
  return { render: R, hydrate: G, createApp: Xi(R, G) }
}
function Cn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function nt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function cl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function po(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (L(r) && L(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o]
      let c = s[o]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = s[o] = We(s[o])), (c.el = i.el)),
        !n && c.patchFlag !== -2 && po(i, c)),
        c.type === bn && (c.el = i.el)
    }
}
function ul(e) {
  const t = e.slice(),
    n = [0]
  let r, s, o, i, c
  const l = e.length
  for (r = 0; r < l; r++) {
    const f = e[r]
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        ;(t[r] = s), n.push(r)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; ) (c = (o + i) >> 1), e[n[c]] < f ? (o = c + 1) : (i = c)
      f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
function go(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : go(t)
}
function Lr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].active = !1
}
const al = Symbol.for('v-scx'),
  fl = () => $e(al),
  Zt = {}
function rn(e, t, n) {
  return mo(e, t, n)
}
function mo(e, t, { immediate: n, deep: r, flush: s, once: o, onTrack: i, onTrigger: c } = Z) {
  if (t && o) {
    const B = t
    t = (...ee) => {
      B(...ee), te()
    }
  }
  const l = ce,
    f = (B) => (r === !0 ? B : st(B, r === !1 ? 1 : void 0))
  let d,
    h = !1,
    p = !1
  if (
    (he(e)
      ? ((d = () => e.value), (h = Et(e)))
      : Tt(e)
        ? ((d = () => f(e)), (h = !0))
        : L(e)
          ? ((p = !0),
            (h = e.some((B) => Tt(B) || Et(B))),
            (d = () =>
              e.map((B) => {
                if (he(B)) return B.value
                if (Tt(B)) return f(B)
                if (j(B)) return qe(B, l, 2)
              })))
          : j(e)
            ? t
              ? (d = () => qe(e, l, 2))
              : (d = () => (m && m(), we(e, l, 3, [I])))
            : (d = be),
    t && r)
  ) {
    const B = d
    d = () => st(B())
  }
  let m,
    I = (B) => {
      m = V.onStop = () => {
        qe(B, l, 4), (m = V.onStop = void 0)
      }
    },
    C
  if (vn)
    if (((I = be), t ? n && we(t, l, 3, [d(), p ? [] : void 0, I]) : d(), s === 'sync')) {
      const B = fl()
      C = B.__watcherHandles || (B.__watcherHandles = [])
    } else return be
  let H = p ? new Array(e.length).fill(Zt) : Zt
  const N = () => {
    if (!(!V.active || !V.dirty))
      if (t) {
        const B = V.run()
        ;(r || h || (p ? B.some((ee, me) => Ye(ee, H[me])) : Ye(B, H))) &&
          (m && m(), we(t, l, 3, [B, H === Zt ? void 0 : p && H[0] === Zt ? [] : H, I]), (H = B))
      } else V.run()
  }
  N.allowRecurse = !!t
  let F
  s === 'sync'
    ? (F = N)
    : s === 'post'
      ? (F = () => ae(N, l && l.suspense))
      : ((N.pre = !0), l && (N.id = l.uid), (F = () => fr(N)))
  const V = new nr(d, be, F),
    k = Qo(),
    te = () => {
      V.stop(), k && Zn(k.effects, V)
    }
  return (
    t ? (n ? N() : (H = V.run())) : s === 'post' ? ae(V.run.bind(V), l && l.suspense) : V.run(),
    C && C.push(te),
    te
  )
}
function dl(e, t, n) {
  const r = this.proxy,
    s = ne(e) ? (e.includes('.') ? _o(r, e) : () => r[e]) : e.bind(r, r)
  let o
  j(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = zt(this),
    c = mo(s, o.bind(r), n)
  return i(), c
}
function _o(e, t) {
  const n = t.split('.')
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function st(e, t = 1 / 0, n) {
  if (t <= 0 || !X(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, he(e))) st(e.value, t, n)
  else if (L(e)) for (let r = 0; r < e.length; r++) st(e[r], t, n)
  else if (ms(e) || _t(e))
    e.forEach((r) => {
      st(r, t, n)
    })
  else if (bs(e)) {
    for (const r in e) st(e[r], t, n)
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && st(e[r], t, n)
  }
  return e
}
const hl = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ct(t)}Modifiers`] || e[`${at(t)}Modifiers`]
function pl(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || Z
  let s = n
  const o = t.startsWith('update:'),
    i = o && hl(r, t.slice(7))
  i && (i.trim && (s = n.map((d) => (ne(d) ? d.trim() : d))), i.number && (s = n.map(ko)))
  let c,
    l = r[(c = wn(t))] || r[(c = wn(ct(t)))]
  !l && o && (l = r[(c = wn(at(t)))]), l && we(l, e, 6, s)
  const f = r[c + 'Once']
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[c]) return
    ;(e.emitted[c] = !0), we(f, e, 6, s)
  }
}
function yo(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const o = e.emits
  let i = {},
    c = !1
  if (!j(e)) {
    const l = (f) => {
      const d = yo(f, t, !0)
      d && ((c = !0), ie(i, d))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !o && !c
    ? (X(e) && r.set(e, null), null)
    : (L(o) ? o.forEach((l) => (i[l] = null)) : ie(i, o), X(e) && r.set(e, i), i)
}
function yn(e, t) {
  return !e || !an(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      U(e, t[0].toLowerCase() + t.slice(1)) || U(e, at(t)) || U(e, t))
}
function Pn(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: c,
      emit: l,
      render: f,
      renderCache: d,
      props: h,
      data: p,
      setupState: m,
      ctx: I,
      inheritAttrs: C
    } = e,
    H = ln(e)
  let N, F
  try {
    if (n.shapeFlag & 4) {
      const k = s || r,
        te = k
      ;(N = Ae(f.call(te, k, d, h, m, p, I))), (F = c)
    } else {
      const k = t
      ;(N = Ae(k.length > 1 ? k(h, { attrs: c, slots: i, emit: l }) : k(h, null))),
        (F = t.props ? c : gl(c))
    }
  } catch (k) {
    ;(Ft.length = 0), gn(k, e, 1), (N = fe(Kt))
  }
  let V = N
  if (F && C !== !1) {
    const k = Object.keys(F),
      { shapeFlag: te } = V
    k.length && te & 7 && (o && k.some(Qn) && (F = ml(F, o)), (V = wt(V, F, !1, !0)))
  }
  return (
    n.dirs && ((V = wt(V, null, !1, !0)), (V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (V.transition = n.transition),
    (N = V),
    ln(H),
    N
  )
}
const gl = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || an(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  ml = (e, t) => {
    const n = {}
    for (const r in e) (!Qn(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function _l(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: c, patchFlag: l } = t,
    f = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return r ? $r(r, i, f) : !!i
    if (l & 8) {
      const d = t.dynamicProps
      for (let h = 0; h < d.length; h++) {
        const p = d[h]
        if (i[p] !== r[p] && !yn(f, p)) return !0
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : r === i ? !1 : r ? (i ? $r(r, i, f) : !0) : !!i
  return !1
}
function $r(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const o = r[s]
    if (t[o] !== e[o] && !yn(n, o)) return !0
  }
  return !1
}
function yl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const bl = (e) => e.__isSuspense
function vl(e, t) {
  t && t.pendingBranch ? (L(e) ? t.effects.push(...e) : t.effects.push(e)) : Ri(e)
}
const Ve = Symbol.for('v-fgt'),
  bn = Symbol.for('v-txt'),
  Kt = Symbol.for('v-cmt'),
  On = Symbol.for('v-stc'),
  Ft = []
let ge = null
function vt(e = !1) {
  Ft.push((ge = e ? null : []))
}
function El() {
  Ft.pop(), (ge = Ft[Ft.length - 1] || null)
}
let Ut = 1
function jr(e) {
  ;(Ut += e), e < 0 && ge && (ge.hasOnce = !0)
}
function bo(e) {
  return (e.dynamicChildren = Ut > 0 ? ge || mt : null), El(), Ut > 0 && ge && ge.push(e), e
}
function Nt(e, t, n, r, s, o) {
  return bo(je(e, t, n, r, s, o, !0))
}
function wl(e, t, n, r, s) {
  return bo(fe(e, t, n, r, s, !0))
}
function Dn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Ot(e, t) {
  return e.type === t.type && e.key === t.key
}
const vo = ({ key: e }) => e ?? null,
  sn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (ne(e) || he(e) || j(e) ? { i: Te, r: e, k: t, f: !!n } : e) : null
  )
function je(e, t = null, n = null, r = 0, s = null, o = e === Ve ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vo(t),
    ref: t && sn(t),
    scopeId: mn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Te
  }
  return (
    c ? (pr(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= ne(n) ? 8 : 16),
    Ut > 0 && !i && ge && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && ge.push(l),
    l
  )
}
const fe = xl
function xl(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Ui) && (e = Kt), Dn(e))) {
    const c = wt(e, t, !0)
    return (
      n && pr(c, n),
      Ut > 0 && !o && ge && (c.shapeFlag & 6 ? (ge[ge.indexOf(e)] = c) : ge.push(c)),
      (c.patchFlag = -2),
      c
    )
  }
  if ((Fl(e) && (e = e.__vccOpts), t)) {
    t = Sl(t)
    let { class: c, style: l } = t
    c && !ne(c) && (t.class = hn(c)), X(l) && (Ks(l) && !L(l) && (l = ie({}, l)), (t.style = tr(l)))
  }
  const i = ne(e) ? 1 : bl(e) ? 128 : ol(e) ? 64 : X(e) ? 4 : j(e) ? 2 : 0
  return je(e, t, n, r, s, i, o, !0)
}
function Sl(e) {
  return e ? (Ks(e) || io(e) ? ie({}, e) : e) : null
}
function wt(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: c, transition: l } = e,
    f = t ? Cl(s || {}, t) : s,
    d = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && vo(f),
      ref: t && t.ref ? (n && o ? (L(o) ? o.concat(sn(t)) : [o, sn(t)]) : sn(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: c,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ve ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && wt(e.ssContent),
      ssFallback: e.ssFallback && wt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    }
  return l && r && Qs(d, l.clone(d)), d
}
function Rl(e = ' ', t = 0) {
  return fe(bn, null, e, t)
}
function Ae(e) {
  return e == null || typeof e == 'boolean'
    ? fe(Kt)
    : L(e)
      ? fe(Ve, null, e.slice())
      : typeof e == 'object'
        ? We(e)
        : fe(bn, null, String(e))
}
function We(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : wt(e)
}
function pr(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (L(t)) n = 16
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), pr(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !io(t)
        ? (t._ctx = Te)
        : s === 3 && Te && (Te.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    j(t)
      ? ((t = { default: t, _ctx: Te }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Rl(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Cl(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === 'class') t.class !== r.class && (t.class = hn([t.class, r.class]))
      else if (s === 'style') t.style = tr([t.style, r.style])
      else if (an(s)) {
        const o = t[s],
          i = r[s]
        i && o !== i && !(L(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
      } else s !== '' && (t[s] = r[s])
  }
  return t
}
function Oe(e, t, n, r = null) {
  we(e, t, 7, [n, r])
}
const Pl = ro()
let Ol = 0
function Vl(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Pl,
    o = {
      uid: Ol++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ps(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: co(r, s),
      emitsOptions: yo(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Z,
      inheritAttrs: r.inheritAttrs,
      ctx: Z,
      data: Z,
      props: Z,
      attrs: Z,
      slots: Z,
      refs: Z,
      setupState: Z,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = pl.bind(null, o)), e.ce && e.ce(o), o
  )
}
let ce = null,
  un,
  Wn
{
  const e = ws(),
    t = (n, r) => {
      let s
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o)
        }
      )
    }
  ;(un = t('__VUE_INSTANCE_SETTERS__', (n) => (ce = n))),
    (Wn = t('__VUE_SSR_SETTERS__', (n) => (vn = n)))
}
const zt = (e) => {
    const t = ce
    return (
      un(e),
      e.scope.on(),
      () => {
        e.scope.off(), un(t)
      }
    )
  },
  Hr = () => {
    ce && ce.scope.off(), un(null)
  }
function Eo(e) {
  return e.vnode.shapeFlag & 4
}
let vn = !1
function Al(e, t = !1, n = !1) {
  t && Wn(t)
  const { props: r, children: s } = e.vnode,
    o = Eo(e)
  Qi(e, r, o, t), nl(e, s, n)
  const i = o ? Il(e, t) : void 0
  return t && Wn(!1), i
}
function Il(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Di))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Ml(e) : null),
      o = zt(e)
    Xe()
    const i = qe(r, e, 0, [e.props, s])
    if ((Qe(), o(), _s(i))) {
      if ((i.then(Hr, Hr), t))
        return i
          .then((c) => {
            Br(e, c, t)
          })
          .catch((c) => {
            gn(c, e, 0)
          })
      e.asyncDep = i
    } else Br(e, i, t)
  } else wo(e, t)
}
function Br(e, t, n) {
  j(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : X(t) && (e.setupState = zs(t)),
    wo(e, n)
}
let Kr
function wo(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Kr && !r.render) {
      const s = r.template || dr(e).template
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = r,
          f = ie(ie({ isCustomElement: o, delimiters: c }, i), l)
        r.render = Kr(s, f)
      }
    }
    e.render = r.render || be
  }
  {
    const s = zt(e)
    Xe()
    try {
      Wi(e)
    } finally {
      Qe(), s()
    }
  }
}
const Tl = {
  get(e, t) {
    return de(e, 'get', ''), e[t]
  }
}
function Ml(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, Tl), slots: e.slots, emit: e.emit, expose: t }
}
function gr(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(zs(Us(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Mt) return Mt[n](e)
          },
          has(t, n) {
            return n in t || n in Mt
          }
        }))
    : e.proxy
}
function Fl(e) {
  return j(e) && '__vccOpts' in e
}
const ye = (e, t) => yi(e, t, vn)
function xo(e, t, n) {
  const r = arguments.length
  return r === 2
    ? X(t) && !L(t)
      ? Dn(t)
        ? fe(e, null, [t])
        : fe(e, t)
      : fe(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Dn(n) && (n = [n]),
      fe(e, t, n))
}
const Nl = '3.4.37'
/**
 * @vue/runtime-dom v3.4.37
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Ll = 'http://www.w3.org/2000/svg',
  $l = 'http://www.w3.org/1998/Math/MathML',
  Ne = typeof document < 'u' ? document : null,
  Ur = Ne && Ne.createElement('template'),
  jl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s =
        t === 'svg'
          ? Ne.createElementNS(Ll, e)
          : t === 'mathml'
            ? Ne.createElementNS($l, e)
            : n
              ? Ne.createElement(e, { is: n })
              : Ne.createElement(e)
      return e === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple), s
    },
    createText: (e) => Ne.createTextNode(e),
    createComment: (e) => Ne.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ne.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); );
      else {
        Ur.innerHTML = r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e
        const c = Ur.content
        if (r === 'svg' || r === 'mathml') {
          const l = c.firstChild
          for (; l.firstChild; ) c.appendChild(l.firstChild)
          c.removeChild(l)
        }
        t.insertBefore(c, n)
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  Hl = Symbol('_vtc')
function Bl(e, t, n) {
  const r = e[Hl]
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const kr = Symbol('_vod'),
  Kl = Symbol('_vsh'),
  Ul = Symbol(''),
  kl = /(^|;)\s*display\s*:/
function Dl(e, t, n) {
  const r = e.style,
    s = ne(n)
  let o = !1
  if (n && !s) {
    if (t)
      if (ne(t))
        for (const i of t.split(';')) {
          const c = i.slice(0, i.indexOf(':')).trim()
          n[c] == null && on(r, c, '')
        }
      else for (const i in t) n[i] == null && on(r, i, '')
    for (const i in n) i === 'display' && (o = !0), on(r, i, n[i])
  } else if (s) {
    if (t !== n) {
      const i = r[Ul]
      i && (n += ';' + i), (r.cssText = n), (o = kl.test(n))
    }
  } else t && e.removeAttribute('style')
  kr in e && ((e[kr] = o ? r.display : ''), e[Kl] && (r.display = 'none'))
}
const Dr = /\s*!important$/
function on(e, t, n) {
  if (L(n)) n.forEach((r) => on(e, t, r))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const r = Wl(e, t)
    Dr.test(n) ? e.setProperty(at(r), n.replace(Dr, ''), 'important') : (e[r] = n)
  }
}
const Wr = ['Webkit', 'Moz', 'ms'],
  Vn = {}
function Wl(e, t) {
  const n = Vn[t]
  if (n) return n
  let r = ct(t)
  if (r !== 'filter' && r in e) return (Vn[t] = r)
  r = vs(r)
  for (let s = 0; s < Wr.length; s++) {
    const o = Wr[s] + r
    if (o in e) return (Vn[t] = o)
  }
  return t
}
const zr = 'http://www.w3.org/1999/xlink'
function Gr(e, t, n, r, s, o = Yo(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(zr, t.slice(6, t.length))
      : e.setAttributeNS(zr, t, n)
    : n == null || (o && !xs(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : Je(n) ? String(n) : n)
}
function zl(e, t, n, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    if (n == null) return
    e[t] = n
    return
  }
  const s = e.tagName
  if (t === 'value' && s !== 'PROGRESS' && !s.includes('-')) {
    const i = s === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? '' : String(n)
    ;(i !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const i = typeof e[t]
    i === 'boolean'
      ? (n = xs(n))
      : n == null && i === 'string'
        ? ((n = ''), (o = !0))
        : i === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(t)
}
function Gl(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function ql(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const qr = Symbol('_vei')
function Yl(e, t, n, r, s = null) {
  const o = e[qr] || (e[qr] = {}),
    i = o[t]
  if (r && i) i.value = r
  else {
    const [c, l] = Jl(t)
    if (r) {
      const f = (o[t] = Zl(r, s))
      Gl(e, c, f, l)
    } else i && (ql(e, c, i, l), (o[t] = void 0))
  }
}
const Yr = /(?:Once|Passive|Capture)$/
function Jl(e) {
  let t
  if (Yr.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Yr)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : at(e.slice(2)), t]
}
let An = 0
const Xl = Promise.resolve(),
  Ql = () => An || (Xl.then(() => (An = 0)), (An = Date.now()))
function Zl(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    we(ec(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = Ql()), n
}
function ec(e, t) {
  if (L(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const Jr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  tc = (e, t, n, r, s, o) => {
    const i = s === 'svg'
    t === 'class'
      ? Bl(e, r, i)
      : t === 'style'
        ? Dl(e, n, r)
        : an(t)
          ? Qn(t) || Yl(e, t, n, r, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : nc(e, t, r, i)
              )
            ? (zl(e, t, r),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Gr(e, t, r, i, o, t !== 'value'))
            : (t === 'true-value' ? (e._trueValue = r) : t === 'false-value' && (e._falseValue = r),
              Gr(e, t, r, i))
  }
function nc(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Jr(t) && j(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const s = e.tagName
    if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE') return !1
  }
  return Jr(t) && ne(n) ? !1 : t in e
}
const rc = ['ctrl', 'shift', 'alt', 'meta'],
  sc = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => rc.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  oc = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join('.')
    return (
      n[r] ||
      (n[r] = (s, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const c = sc[t[i]]
          if (c && c(s, t)) return
        }
        return e(s, ...o)
      })
    )
  },
  ic = ie({ patchProp: tc }, jl)
let Xr
function lc() {
  return Xr || (Xr = il(ic))
}
const cc = (...e) => {
  const t = lc().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const s = ac(r)
      if (!s) return
      const o = t._component
      !j(o) && !o.render && !o.template && (o.template = s.innerHTML), (s.innerHTML = '')
      const i = n(s, !1, uc(s))
      return (
        s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), i
      )
    }),
    t
  )
}
function uc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function ac(e) {
  return ne(e) ? document.querySelector(e) : e
}
var fc = !1
/*!
 * pinia v2.2.1
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const dc = Symbol()
var Qr
;(function (e) {
  ;(e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
})(Qr || (Qr = {}))
function hc() {
  const e = Jo(!0),
    t = e.run(() => ur({}))
  let n = [],
    r = []
  const s = Us({
    install(o) {
      ;(s._a = o),
        o.provide(dc, s),
        (o.config.globalProperties.$pinia = s),
        r.forEach((i) => n.push(i)),
        (r = [])
    },
    use(o) {
      return !this._a && !fc ? r.push(o) : n.push(o), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  })
  return s
}
/*!
 * vue-router v4.4.3
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const gt = typeof document < 'u'
function pc(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const q = Object.assign
function In(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = xe(s) ? s.map(e) : e(s)
  }
  return n
}
const Lt = () => {},
  xe = Array.isArray,
  So = /#/g,
  gc = /&/g,
  mc = /\//g,
  _c = /=/g,
  yc = /\?/g,
  Ro = /\+/g,
  bc = /%5B/g,
  vc = /%5D/g,
  Co = /%5E/g,
  Ec = /%60/g,
  Po = /%7B/g,
  wc = /%7C/g,
  Oo = /%7D/g,
  xc = /%20/g
function mr(e) {
  return encodeURI('' + e)
    .replace(wc, '|')
    .replace(bc, '[')
    .replace(vc, ']')
}
function Sc(e) {
  return mr(e).replace(Po, '{').replace(Oo, '}').replace(Co, '^')
}
function zn(e) {
  return mr(e)
    .replace(Ro, '%2B')
    .replace(xc, '+')
    .replace(So, '%23')
    .replace(gc, '%26')
    .replace(Ec, '`')
    .replace(Po, '{')
    .replace(Oo, '}')
    .replace(Co, '^')
}
function Rc(e) {
  return zn(e).replace(_c, '%3D')
}
function Cc(e) {
  return mr(e).replace(So, '%23').replace(yc, '%3F')
}
function Pc(e) {
  return e == null ? '' : Cc(e).replace(mc, '%2F')
}
function kt(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Oc = /\/$/,
  Vc = (e) => e.replace(Oc, '')
function Tn(e, t, n = '/') {
  let r,
    s = {},
    o = '',
    i = ''
  const c = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 && ((r = t.slice(0, l)), (o = t.slice(l + 1, c > -1 ? c : t.length)), (s = e(o))),
    c > -1 && ((r = r || t.slice(0, c)), (i = t.slice(c, t.length))),
    (r = Mc(r ?? t, n)),
    { fullPath: r + (o && '?') + o + i, path: r, query: s, hash: kt(i) }
  )
}
function Ac(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Zr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Ic(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    xt(t.matched[r], n.matched[s]) &&
    Vo(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function xt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Vo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Tc(e[n], t[n])) return !1
  return !0
}
function Tc(e, t) {
  return xe(e) ? es(e, t) : xe(t) ? es(t, e) : e === t
}
function es(e, t) {
  return xe(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function Mc(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    r = e.split('/'),
    s = r[r.length - 1]
  ;(s === '..' || s === '.') && r.push('')
  let o = n.length - 1,
    i,
    c
  for (i = 0; i < r.length; i++)
    if (((c = r[i]), c !== '.'))
      if (c === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + r.slice(i).join('/')
}
const ke = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0
}
var Dt
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Dt || (Dt = {}))
var $t
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})($t || ($t = {}))
function Fc(e) {
  if (!e)
    if (gt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Vc(e)
}
const Nc = /^[^#]+#/
function Lc(e, t) {
  return e.replace(Nc, '#') + t
}
function $c(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  }
}
const En = () => ({ left: window.scrollX, top: window.scrollY })
function jc(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!s) return
    t = $c(s, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function ts(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Gn = new Map()
function Hc(e, t) {
  Gn.set(e, t)
}
function Bc(e) {
  const t = Gn.get(e)
  return Gn.delete(e), t
}
let Kc = () => location.protocol + '//' + location.host
function Ao(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let c = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(c)
    return l[0] !== '/' && (l = '/' + l), Zr(l, '')
  }
  return Zr(n, e) + r + s
}
function Uc(e, t, n, r) {
  let s = [],
    o = [],
    i = null
  const c = ({ state: p }) => {
    const m = Ao(e, location),
      I = n.value,
      C = t.value
    let H = 0
    if (p) {
      if (((n.value = m), (t.value = p), i && i === I)) {
        i = null
        return
      }
      H = C ? p.position - C.position : 0
    } else r(m)
    s.forEach((N) => {
      N(n.value, I, {
        delta: H,
        type: Dt.pop,
        direction: H ? (H > 0 ? $t.forward : $t.back) : $t.unknown
      })
    })
  }
  function l() {
    i = n.value
  }
  function f(p) {
    s.push(p)
    const m = () => {
      const I = s.indexOf(p)
      I > -1 && s.splice(I, 1)
    }
    return o.push(m), m
  }
  function d() {
    const { history: p } = window
    p.state && p.replaceState(q({}, p.state, { scroll: En() }), '')
  }
  function h() {
    for (const p of o) p()
    ;(o = []),
      window.removeEventListener('popstate', c),
      window.removeEventListener('beforeunload', d)
  }
  return (
    window.addEventListener('popstate', c),
    window.addEventListener('beforeunload', d, { passive: !0 }),
    { pauseListeners: l, listen: f, destroy: h }
  )
}
function ns(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? En() : null
  }
}
function kc(e) {
  const { history: t, location: n } = window,
    r = { value: Ao(e, n) },
    s = { value: t.state }
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function o(l, f, d) {
    const h = e.indexOf('#'),
      p = h > -1 ? (n.host && document.querySelector('base') ? e : e.slice(h)) + l : Kc() + e + l
    try {
      t[d ? 'replaceState' : 'pushState'](f, '', p), (s.value = f)
    } catch (m) {
      console.error(m), n[d ? 'replace' : 'assign'](p)
    }
  }
  function i(l, f) {
    const d = q({}, t.state, ns(s.value.back, l, s.value.forward, !0), f, {
      position: s.value.position
    })
    o(l, d, !0), (r.value = l)
  }
  function c(l, f) {
    const d = q({}, s.value, t.state, { forward: l, scroll: En() })
    o(d.current, d, !0)
    const h = q({}, ns(r.value, l, null), { position: d.position + 1 }, f)
    o(l, h, !1), (r.value = l)
  }
  return { location: r, state: s, push: c, replace: i }
}
function Dc(e) {
  e = Fc(e)
  const t = kc(e),
    n = Uc(e, t.state, t.location, t.replace)
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const s = q({ location: '', base: e, go: r, createHref: Lc.bind(null, e) }, t, n)
  return (
    Object.defineProperty(s, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, 'state', { enumerable: !0, get: () => t.state.value }),
    s
  )
}
function Wc(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Io(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const To = Symbol('')
var rs
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(rs || (rs = {}))
function St(e, t) {
  return q(new Error(), { type: e, [To]: !0 }, t)
}
function Fe(e, t) {
  return e instanceof Error && To in e && (t == null || !!(e.type & t))
}
const ss = '[^/]+?',
  zc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Gc = /[.+*?^${}()[\]/\\]/g
function qc(e, t) {
  const n = q({}, zc, t),
    r = []
  let s = n.start ? '^' : ''
  const o = []
  for (const f of e) {
    const d = f.length ? [] : [90]
    n.strict && !f.length && (s += '/')
    for (let h = 0; h < f.length; h++) {
      const p = f[h]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0) h || (s += '/'), (s += p.value.replace(Gc, '\\$&')), (m += 40)
      else if (p.type === 1) {
        const { value: I, repeatable: C, optional: H, regexp: N } = p
        o.push({ name: I, repeatable: C, optional: H })
        const F = N || ss
        if (F !== ss) {
          m += 10
          try {
            new RegExp(`(${F})`)
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${I}" (${F}): ` + k.message)
          }
        }
        let V = C ? `((?:${F})(?:/(?:${F}))*)` : `(${F})`
        h || (V = H && f.length < 2 ? `(?:/${V})` : '/' + V),
          H && (V += '?'),
          (s += V),
          (m += 20),
          H && (m += -8),
          C && (m += -20),
          F === '.*' && (m += -50)
      }
      d.push(m)
    }
    r.push(d)
  }
  if (n.strict && n.end) {
    const f = r.length - 1
    r[f][r[f].length - 1] += 0.7000000000000001
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && (s += '(?:/|$)')
  const i = new RegExp(s, n.sensitive ? '' : 'i')
  function c(f) {
    const d = f.match(i),
      h = {}
    if (!d) return null
    for (let p = 1; p < d.length; p++) {
      const m = d[p] || '',
        I = o[p - 1]
      h[I.name] = m && I.repeatable ? m.split('/') : m
    }
    return h
  }
  function l(f) {
    let d = '',
      h = !1
    for (const p of e) {
      ;(!h || !d.endsWith('/')) && (d += '/'), (h = !1)
      for (const m of p)
        if (m.type === 0) d += m.value
        else if (m.type === 1) {
          const { value: I, repeatable: C, optional: H } = m,
            N = I in f ? f[I] : ''
          if (xe(N) && !C)
            throw new Error(
              `Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`
            )
          const F = xe(N) ? N.join('/') : N
          if (!F)
            if (H) p.length < 2 && (d.endsWith('/') ? (d = d.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${I}"`)
          d += F
        }
    }
    return d || '/'
  }
  return { re: i, score: r, keys: o, parse: c, stringify: l }
}
function Yc(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function Mo(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const o = Yc(r[n], s[n])
    if (o) return o
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (os(r)) return 1
    if (os(s)) return -1
  }
  return s.length - r.length
}
function os(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Jc = { type: 0, value: '' },
  Xc = /[a-zA-Z0-9_]/
function Qc(e) {
  if (!e) return [[]]
  if (e === '/') return [[Jc]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${f}": ${m}`)
  }
  let n = 0,
    r = n
  const s = []
  let o
  function i() {
    o && s.push(o), (o = [])
  }
  let c = 0,
    l,
    f = '',
    d = ''
  function h() {
    f &&
      (n === 0
        ? o.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: f,
              regexp: d,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?'
            }))
          : t('Invalid state to consume buffer'),
      (f = ''))
  }
  function p() {
    f += l
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === '\\' && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (f && h(), i()) : l === ':' ? (h(), (n = 1)) : p()
        break
      case 4:
        p(), (n = r)
        break
      case 1:
        l === '('
          ? (n = 2)
          : Xc.test(l)
            ? p()
            : (h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--)
        break
      case 2:
        l === ')' ? (d[d.length - 1] == '\\' ? (d = d.slice(0, -1) + l) : (n = 3)) : (d += l)
        break
      case 3:
        h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--, (d = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), h(), i(), s
}
function Zc(e, t, n) {
  const r = qc(Qc(e.path), n),
    s = q(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function eu(e, t) {
  const n = [],
    r = new Map()
  t = cs({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(h) {
    return r.get(h)
  }
  function o(h, p, m) {
    const I = !m,
      C = tu(h)
    C.aliasOf = m && m.record
    const H = cs(t, h),
      N = [C]
    if ('alias' in h) {
      const k = typeof h.alias == 'string' ? [h.alias] : h.alias
      for (const te of k)
        N.push(
          q({}, C, {
            components: m ? m.record.components : C.components,
            path: te,
            aliasOf: m ? m.record : C
          })
        )
    }
    let F, V
    for (const k of N) {
      const { path: te } = k
      if (p && te[0] !== '/') {
        const B = p.record.path,
          ee = B[B.length - 1] === '/' ? '' : '/'
        k.path = p.record.path + (te && ee + te)
      }
      if (
        ((F = Zc(k, p, H)),
        m
          ? m.alias.push(F)
          : ((V = V || F), V !== F && V.alias.push(F), I && h.name && !ls(F) && i(h.name)),
        Fo(F) && l(F),
        C.children)
      ) {
        const B = C.children
        for (let ee = 0; ee < B.length; ee++) o(B[ee], F, m && m.children[ee])
      }
      m = m || F
    }
    return V
      ? () => {
          i(V)
        }
      : Lt
  }
  function i(h) {
    if (Io(h)) {
      const p = r.get(h)
      p && (r.delete(h), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i))
    } else {
      const p = n.indexOf(h)
      p > -1 &&
        (n.splice(p, 1),
        h.record.name && r.delete(h.record.name),
        h.children.forEach(i),
        h.alias.forEach(i))
    }
  }
  function c() {
    return n
  }
  function l(h) {
    const p = su(h, n)
    n.splice(p, 0, h), h.record.name && !ls(h) && r.set(h.record.name, h)
  }
  function f(h, p) {
    let m,
      I = {},
      C,
      H
    if ('name' in h && h.name) {
      if (((m = r.get(h.name)), !m)) throw St(1, { location: h })
      ;(H = m.record.name),
        (I = q(
          is(
            p.params,
            m.keys
              .filter((V) => !V.optional)
              .concat(m.parent ? m.parent.keys.filter((V) => V.optional) : [])
              .map((V) => V.name)
          ),
          h.params &&
            is(
              h.params,
              m.keys.map((V) => V.name)
            )
        )),
        (C = m.stringify(I))
    } else if (h.path != null)
      (C = h.path), (m = n.find((V) => V.re.test(C))), m && ((I = m.parse(C)), (H = m.record.name))
    else {
      if (((m = p.name ? r.get(p.name) : n.find((V) => V.re.test(p.path))), !m))
        throw St(1, { location: h, currentLocation: p })
      ;(H = m.record.name), (I = q({}, p.params, h.params)), (C = m.stringify(I))
    }
    const N = []
    let F = m
    for (; F; ) N.unshift(F.record), (F = F.parent)
    return { name: H, path: C, params: I, matched: N, meta: ru(N) }
  }
  e.forEach((h) => o(h))
  function d() {
    ;(n.length = 0), r.clear()
  }
  return {
    addRoute: o,
    resolve: f,
    removeRoute: i,
    clearRoutes: d,
    getRoutes: c,
    getRecordMatcher: s
  }
}
function is(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function tu(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: nu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function nu(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n
  return t
}
function ls(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function ru(e) {
  return e.reduce((t, n) => q(t, n.meta), {})
}
function cs(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function su(e, t) {
  let n = 0,
    r = t.length
  for (; n !== r; ) {
    const o = (n + r) >> 1
    Mo(e, t[o]) < 0 ? (r = o) : (n = o + 1)
  }
  const s = ou(e)
  return s && (r = t.lastIndexOf(s, r - 1)), r
}
function ou(e) {
  let t = e
  for (; (t = t.parent); ) if (Fo(t) && Mo(e, t) === 0) return t
}
function Fo({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function iu(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const r = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(Ro, ' '),
      i = o.indexOf('='),
      c = kt(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : kt(o.slice(i + 1))
    if (c in t) {
      let f = t[c]
      xe(f) || (f = t[c] = [f]), f.push(l)
    } else t[c] = l
  }
  return t
}
function us(e) {
  let t = ''
  for (let n in e) {
    const r = e[n]
    if (((n = Rc(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(xe(r) ? r.map((o) => o && zn(o)) : [r && zn(r)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function lu(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = xe(r) ? r.map((s) => (s == null ? null : '' + s)) : r == null ? r : '' + r)
  }
  return t
}
const cu = Symbol(''),
  as = Symbol(''),
  _r = Symbol(''),
  No = Symbol(''),
  qn = Symbol('')
function Vt() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r)
        s > -1 && e.splice(s, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function ze(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((c, l) => {
      const f = (p) => {
          p === !1
            ? l(St(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : Wc(p)
                ? l(St(2, { from: t, to: p }))
                : (i && r.enterCallbacks[s] === i && typeof p == 'function' && i.push(p), c())
        },
        d = o(() => e.call(r && r.instances[s], t, n, f))
      let h = Promise.resolve(d)
      e.length < 3 && (h = h.then(f)), h.catch((p) => l(p))
    })
}
function Mn(e, t, n, r, s = (o) => o()) {
  const o = []
  for (const i of e)
    for (const c in i.components) {
      let l = i.components[c]
      if (!(t !== 'beforeRouteEnter' && !i.instances[c]))
        if (uu(l)) {
          const d = (l.__vccOpts || l)[t]
          d && o.push(ze(d, n, r, i, c, s))
        } else {
          let f = l()
          o.push(() =>
            f.then((d) => {
              if (!d)
                return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`))
              const h = pc(d) ? d.default : d
              i.components[c] = h
              const m = (h.__vccOpts || h)[t]
              return m && ze(m, n, r, i, c, s)()
            })
          )
        }
    }
  return o
}
function uu(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function fs(e) {
  const t = $e(_r),
    n = $e(No),
    r = ye(() => {
      const l = lt(e.to)
      return t.resolve(l)
    }),
    s = ye(() => {
      const { matched: l } = r.value,
        { length: f } = l,
        d = l[f - 1],
        h = n.matched
      if (!d || !h.length) return -1
      const p = h.findIndex(xt.bind(null, d))
      if (p > -1) return p
      const m = ds(l[f - 2])
      return f > 1 && ds(d) === m && h[h.length - 1].path !== m
        ? h.findIndex(xt.bind(null, l[f - 2]))
        : p
    }),
    o = ye(() => s.value > -1 && hu(n.params, r.value.params)),
    i = ye(() => s.value > -1 && s.value === n.matched.length - 1 && Vo(n.params, r.value.params))
  function c(l = {}) {
    return du(l) ? t[lt(e.replace) ? 'replace' : 'push'](lt(e.to)).catch(Lt) : Promise.resolve()
  }
  return { route: r, href: ye(() => r.value.href), isActive: o, isExactActive: i, navigate: c }
}
const au = Rt({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: fs,
    setup(e, { slots: t }) {
      const n = Wt(fs(e)),
        { options: r } = $e(_r),
        s = ye(() => ({
          [hs(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [hs(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : xo(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
              },
              o
            )
      }
    }
  }),
  fu = au
function du(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function hu(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == 'string') {
      if (r !== s) return !1
    } else if (!xe(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1
  }
  return !0
}
function ds(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const hs = (e, t, n) => e ?? t ?? n,
  pu = Rt({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = $e(qn),
        s = ye(() => e.route || r.value),
        o = $e(as, 0),
        i = ye(() => {
          let f = lt(o)
          const { matched: d } = s.value
          let h
          for (; (h = d[f]) && !h.components; ) f++
          return f
        }),
        c = ye(() => s.value.matched[i.value])
      nn(
        as,
        ye(() => i.value + 1)
      ),
        nn(cu, c),
        nn(qn, s)
      const l = ur()
      return (
        rn(
          () => [l.value, c.value, e.name],
          ([f, d, h], [p, m, I]) => {
            d &&
              ((d.instances[h] = f),
              m &&
                m !== d &&
                f &&
                f === p &&
                (d.leaveGuards.size || (d.leaveGuards = m.leaveGuards),
                d.updateGuards.size || (d.updateGuards = m.updateGuards))),
              f && d && (!m || !xt(d, m) || !p) && (d.enterCallbacks[h] || []).forEach((C) => C(f))
          },
          { flush: 'post' }
        ),
        () => {
          const f = s.value,
            d = e.name,
            h = c.value,
            p = h && h.components[d]
          if (!p) return ps(n.default, { Component: p, route: f })
          const m = h.props[d],
            I = m ? (m === !0 ? f.params : typeof m == 'function' ? m(f) : m) : null,
            H = xo(
              p,
              q({}, I, t, {
                onVnodeUnmounted: (N) => {
                  N.component.isUnmounted && (h.instances[d] = null)
                },
                ref: l
              })
            )
          return ps(n.default, { Component: H, route: f }) || H
        }
      )
    }
  })
function ps(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Lo = pu
function gu(e) {
  const t = eu(e.routes, e),
    n = e.parseQuery || iu,
    r = e.stringifyQuery || us,
    s = e.history,
    o = Vt(),
    i = Vt(),
    c = Vt(),
    l = bi(ke)
  let f = ke
  gt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const d = In.bind(null, (y) => '' + y),
    h = In.bind(null, Pc),
    p = In.bind(null, kt)
  function m(y, P) {
    let R, A
    return Io(y) ? ((R = t.getRecordMatcher(y)), (A = P)) : (A = y), t.addRoute(A, R)
  }
  function I(y) {
    const P = t.getRecordMatcher(y)
    P && t.removeRoute(P)
  }
  function C() {
    return t.getRoutes().map((y) => y.record)
  }
  function H(y) {
    return !!t.getRecordMatcher(y)
  }
  function N(y, P) {
    if (((P = q({}, P || l.value)), typeof y == 'string')) {
      const a = Tn(n, y, P.path),
        g = t.resolve({ path: a.path }, P),
        b = s.createHref(a.fullPath)
      return q(a, g, { params: p(g.params), hash: kt(a.hash), redirectedFrom: void 0, href: b })
    }
    let R
    if (y.path != null) R = q({}, y, { path: Tn(n, y.path, P.path).path })
    else {
      const a = q({}, y.params)
      for (const g in a) a[g] == null && delete a[g]
      ;(R = q({}, y, { params: h(a) })), (P.params = h(P.params))
    }
    const A = t.resolve(R, P),
      G = y.hash || ''
    A.params = d(p(A.params))
    const Q = Ac(r, q({}, y, { hash: Sc(G), path: A.path })),
      u = s.createHref(Q)
    return q({ fullPath: Q, hash: G, query: r === us ? lu(y.query) : y.query || {} }, A, {
      redirectedFrom: void 0,
      href: u
    })
  }
  function F(y) {
    return typeof y == 'string' ? Tn(n, y, l.value.path) : q({}, y)
  }
  function V(y, P) {
    if (f !== y) return St(8, { from: P, to: y })
  }
  function k(y) {
    return ee(y)
  }
  function te(y) {
    return k(q(F(y), { replace: !0 }))
  }
  function B(y) {
    const P = y.matched[y.matched.length - 1]
    if (P && P.redirect) {
      const { redirect: R } = P
      let A = typeof R == 'function' ? R(y) : R
      return (
        typeof A == 'string' &&
          ((A = A.includes('?') || A.includes('#') ? (A = F(A)) : { path: A }), (A.params = {})),
        q({ query: y.query, hash: y.hash, params: A.path != null ? {} : y.params }, A)
      )
    }
  }
  function ee(y, P) {
    const R = (f = N(y)),
      A = l.value,
      G = y.state,
      Q = y.force,
      u = y.replace === !0,
      a = B(R)
    if (a)
      return ee(
        q(F(a), { state: typeof a == 'object' ? q({}, G, a.state) : G, force: Q, replace: u }),
        P || R
      )
    const g = R
    g.redirectedFrom = P
    let b
    return (
      !Q && Ic(r, A, R) && ((b = St(16, { to: g, from: A })), Ce(A, A, !0, !1)),
      (b ? Promise.resolve(b) : Se(g, A))
        .catch((_) => (Fe(_) ? (Fe(_, 2) ? _ : Ke(_)) : D(_, g, A)))
        .then((_) => {
          if (_) {
            if (Fe(_, 2))
              return ee(
                q({ replace: u }, F(_.to), {
                  state: typeof _.to == 'object' ? q({}, G, _.to.state) : G,
                  force: Q
                }),
                P || g
              )
          } else _ = et(g, A, !0, u, G)
          return Be(g, A, _), _
        })
    )
  }
  function me(y, P) {
    const R = V(y, P)
    return R ? Promise.reject(R) : Promise.resolve()
  }
  function Ze(y) {
    const P = ht.values().next().value
    return P && typeof P.runWithContext == 'function' ? P.runWithContext(y) : y()
  }
  function Se(y, P) {
    let R
    const [A, G, Q] = mu(y, P)
    R = Mn(A.reverse(), 'beforeRouteLeave', y, P)
    for (const a of A)
      a.leaveGuards.forEach((g) => {
        R.push(ze(g, y, P))
      })
    const u = me.bind(null, y, P)
    return (
      R.push(u),
      _e(R)
        .then(() => {
          R = []
          for (const a of o.list()) R.push(ze(a, y, P))
          return R.push(u), _e(R)
        })
        .then(() => {
          R = Mn(G, 'beforeRouteUpdate', y, P)
          for (const a of G)
            a.updateGuards.forEach((g) => {
              R.push(ze(g, y, P))
            })
          return R.push(u), _e(R)
        })
        .then(() => {
          R = []
          for (const a of Q)
            if (a.beforeEnter)
              if (xe(a.beforeEnter)) for (const g of a.beforeEnter) R.push(ze(g, y, P))
              else R.push(ze(a.beforeEnter, y, P))
          return R.push(u), _e(R)
        })
        .then(
          () => (
            y.matched.forEach((a) => (a.enterCallbacks = {})),
            (R = Mn(Q, 'beforeRouteEnter', y, P, Ze)),
            R.push(u),
            _e(R)
          )
        )
        .then(() => {
          R = []
          for (const a of i.list()) R.push(ze(a, y, P))
          return R.push(u), _e(R)
        })
        .catch((a) => (Fe(a, 8) ? a : Promise.reject(a)))
    )
  }
  function Be(y, P, R) {
    c.list().forEach((A) => Ze(() => A(y, P, R)))
  }
  function et(y, P, R, A, G) {
    const Q = V(y, P)
    if (Q) return Q
    const u = P === ke,
      a = gt ? history.state : {}
    R &&
      (A || u
        ? s.replace(y.fullPath, q({ scroll: u && a && a.scroll }, G))
        : s.push(y.fullPath, G)),
      (l.value = y),
      Ce(y, P, R, u),
      Ke()
  }
  let Re
  function Ct() {
    Re ||
      (Re = s.listen((y, P, R) => {
        if (!Gt.listening) return
        const A = N(y),
          G = B(A)
        if (G) {
          ee(q(G, { replace: !0 }), A).catch(Lt)
          return
        }
        f = A
        const Q = l.value
        gt && Hc(ts(Q.fullPath, R.delta), En()),
          Se(A, Q)
            .catch((u) =>
              Fe(u, 12)
                ? u
                : Fe(u, 2)
                  ? (ee(u.to, A)
                      .then((a) => {
                        Fe(a, 20) && !R.delta && R.type === Dt.pop && s.go(-1, !1)
                      })
                      .catch(Lt),
                    Promise.reject())
                  : (R.delta && s.go(-R.delta, !1), D(u, A, Q))
            )
            .then((u) => {
              ;(u = u || et(A, Q, !1)),
                u &&
                  (R.delta && !Fe(u, 8)
                    ? s.go(-R.delta, !1)
                    : R.type === Dt.pop && Fe(u, 20) && s.go(-1, !1)),
                Be(A, Q, u)
            })
            .catch(Lt)
      }))
  }
  let ft = Vt(),
    re = Vt(),
    Y
  function D(y, P, R) {
    Ke(y)
    const A = re.list()
    return A.length ? A.forEach((G) => G(y, P, R)) : console.error(y), Promise.reject(y)
  }
  function Me() {
    return Y && l.value !== ke
      ? Promise.resolve()
      : new Promise((y, P) => {
          ft.add([y, P])
        })
  }
  function Ke(y) {
    return Y || ((Y = !y), Ct(), ft.list().forEach(([P, R]) => (y ? R(y) : P())), ft.reset()), y
  }
  function Ce(y, P, R, A) {
    const { scrollBehavior: G } = e
    if (!gt || !G) return Promise.resolve()
    const Q =
      (!R && Bc(ts(y.fullPath, 0))) || ((A || !R) && history.state && history.state.scroll) || null
    return qs()
      .then(() => G(y, P, Q))
      .then((u) => u && jc(u))
      .catch((u) => D(u, y, P))
  }
  const ue = (y) => s.go(y)
  let dt
  const ht = new Set(),
    Gt = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: I,
      clearRoutes: t.clearRoutes,
      hasRoute: H,
      getRoutes: C,
      resolve: N,
      options: e,
      push: k,
      replace: te,
      go: ue,
      back: () => ue(-1),
      forward: () => ue(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: re.add,
      isReady: Me,
      install(y) {
        const P = this
        y.component('RouterLink', fu),
          y.component('RouterView', Lo),
          (y.config.globalProperties.$router = P),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => lt(l)
          }),
          gt && !dt && l.value === ke && ((dt = !0), k(s.location).catch((G) => {}))
        const R = {}
        for (const G in ke) Object.defineProperty(R, G, { get: () => l.value[G], enumerable: !0 })
        y.provide(_r, P), y.provide(No, Hs(R)), y.provide(qn, l)
        const A = y.unmount
        ht.add(y),
          (y.unmount = function () {
            ht.delete(y),
              ht.size < 1 &&
                ((f = ke), Re && Re(), (Re = null), (l.value = ke), (dt = !1), (Y = !1)),
              A()
          })
      }
    }
  function _e(y) {
    return y.reduce((P, R) => P.then(() => Ze(R)), Promise.resolve())
  }
  return Gt
}
function mu(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < o; i++) {
    const c = t.matched[i]
    c && (e.matched.find((f) => xt(f, c)) ? r.push(c) : n.push(c))
    const l = e.matched[i]
    l && (t.matched.find((f) => xt(f, l)) || s.push(l))
  }
  return [n, r, s]
}
const _u = Rt({
    __name: 'App',
    setup(e) {
      return (t, n) => (vt(), wl(lt(Lo)))
    }
  }),
  yu = { class: 'sudoku-grid' },
  bu = { class: 'candidates' },
  vu = ['value', 'onInput', 'disabled'],
  Eu = Rt({
    __name: 'SudokuGrid',
    props: { cells: {}, activeCellNumber: {} },
    setup(e) {
      function t(n, r) {
        const s = n.target,
          o = String(s.value),
          i = o.slice(o.length - 1, o.length),
          c = Number(i)
        Number.isNaN(c) || c < 1 ? (r.currentValue = 0) : (r.currentValue = c)
      }
      return (n, r) => (
        vt(),
        Nt('div', yu, [
          (vt(!0),
          Nt(
            Ve,
            null,
            ki(
              n.cells,
              (s, o) => (
                vt(),
                Nt(
                  'div',
                  {
                    class: hn([
                      'cell',
                      { active: o === n.activeCellNumber, disabled: s.predefined, solved: s.solved }
                    ])
                  },
                  [
                    je('div', bu, Rs([...s.candidates].join(',')), 1),
                    je(
                      'input',
                      {
                        type: 'text',
                        value: s.currentValue === 0 ? '' : s.currentValue,
                        onInput: (i) => t(i, s),
                        disabled: s.predefined || s.solved
                      },
                      null,
                      40,
                      vu
                    )
                  ],
                  2
                )
              )
            ),
            256
          ))
        ])
      )
    }
  }),
  $o = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  wu = $o(Eu, [['__scopeId', 'data-v-13d04671']])
function xu(e) {
  const t = e.flat().map((n) => ({ ...n, candidates: Array.from(n.candidates).toSorted() }))
  return JSON.stringify(t)
}
function Su(e, t) {
  JSON.parse(e).forEach((r, s) => {
    ;(t[s].currentValue = r.currentValue), t[s].candidates.clear()
    for (const o of r.candidates) t[s].candidates.add(o)
  })
}
const Ru =
    '[{"currentValue":0,"candidates":[]},{"currentValue":3,"candidates":[]},{"currentValue":1,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":2,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":8,"candidates":[]},{"currentValue":9,"candidates":[]},{"currentValue":4,"candidates":[]},{"currentValue":5,"candidates":[]},{"currentValue":1,"candidates":[]},{"currentValue":6,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":7,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":6,"candidates":[]},{"currentValue":5,"candidates":[]},{"currentValue":3,"candidates":[]},{"currentValue":7,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":2,"candidates":[]},{"currentValue":1,"candidates":[]},{"currentValue":9,"candidates":[]},{"currentValue":5,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":2,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":7,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":3,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":7,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":4,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":6,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":5,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":8,"candidates":[]},{"currentValue":1,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":6,"candidates":[]},{"currentValue":7,"candidates":[]},{"currentValue":8,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":4,"candidates":[]},{"currentValue":6,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":7,"candidates":[]},{"currentValue":2,"candidates":[]},{"currentValue":1,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":8,"candidates":[]},{"currentValue":0,"candidates":[]},{"currentValue":0,"candidates":[]}]',
  Cu = (e) => e.flat().find((t) => t.currentValue === 0) === void 0,
  Yn = (e) => new Promise((t) => setTimeout(t, e)),
  Jn = 300,
  Pu = (e, t, n) => {
    const [r, s] = t
    if (n[s][r].currentValue !== 0) return !1
    for (let o = 0; o < 9; o++) {
      if (o === r) continue
      if (n[s][o].currentValue === e) return !1
    }
    return !0
  },
  Ou = (e, t, n) => {
    const [r, s] = t
    if (n[s][r].currentValue !== 0) return !1
    for (let o = 0; o < 9; o++) {
      if (o === s) continue
      if (n[o][r].currentValue === e) return !1
    }
    return !0
  },
  Vu = (e, t, n) => {
    const [r, s] = t
    if (n[s][r].currentValue !== 0) return !1
    const [o, i] = t.map((c) => Math.floor(c / 3))
    for (let c = i * 3; c < (i + 1) * 3; c++)
      for (let l = o * 3; l < (o + 1) * 3; l++) {
        if (l === r && c === s) continue
        if (n[c][l].currentValue === e) return !1
      }
    return !0
  }
function Au(e, t, n) {
  return [Pu, Ou, Vu].map((r) => r.call(null, e, t, n)).every(Boolean)
}
async function Iu(e, t, n) {
  const [r, s] = e,
    o = t[s][r]
  if ((o || console.log('error'), o.currentValue !== 0)) return
  if (((n.value = s * 9 + r), await Yn(Jn), o.candidates.size === 0)) {
    console.error(
      'Cell is empty, but there is no available numbers. Seems like Sudoku is incorrect.'
    )
    return
  }
  if (o.candidates.size === 0) {
    const [l] = Array.from(o.candidates)
    gs(l, e, t)
    return
  }
  const [i, c] = e.map((l) => Math.floor(l / 3))
  for (const l of o.candidates) {
    let f = 0
    for (let d = c * 3; d < (c + 1) * 3; d++)
      for (let h = i * 3; h < (i + 1) * 3; h++) {
        if (h === r && d === s) continue
        const p = t[d][h]
        p.currentValue, p.candidates.has(l) && (f += 1)
      }
    if (f === 0) {
      gs(l, e, t)
      return
    }
  }
}
function gs(e, t, n) {
  const [r, s] = t,
    o = n[s][r]
  ;(o.currentValue = e), (o.solved = !0), o.candidates.clear()
}
const Tu = (e) => (Pi('data-v-e2c76648'), (e = e()), Oi(), e),
  Mu = { id: 'sudoku' },
  Fu = Tu(() =>
    je(
      'header',
      null,
      [
        je('h1', null, 'Sudoku Solver'),
        je('p', null, 'Please enter the initial Sudoku puzzle conditions and press “Solve”.')
      ],
      -1
    )
  ),
  Nu = { class: 'controls' },
  Lu = Rt({
    __name: 'Sudoku',
    setup(e) {
      const t = Wt(
          Array.from({ length: 81 }, () => ({
            currentValue: 0,
            candidates: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
            solved: !1,
            predefined: !1
          }))
        ),
        n = ur(null)
      Su(Ru, t)
      const r = ye(() => {
          const i = []
          let c = []
          for (const l of t) c.push(l), c.length === 9 && (i.push(c), (c = []))
          return i
        }),
        s = Math.pow(10, 3),
        o = async () => {
          t.filter((c) => c.currentValue !== 0).forEach((c) => (c.predefined = !0))
          let i = ''
          for (let c = 1; c <= s; ) {
            if (Cu(r.value)) {
              await Yn(Jn), alert('SOLVED!')
              return
            }
            let l = xu(r.value)
            if ((console.log(l), l === i))
              throw (
                (console.log('failed to solve. iteration number =', c),
                Error('Error: cannot solve'))
              )
            i = l
            for (let f = 0; f < 9 * 9; f++) {
              c++, (n.value = f)
              const [d, h] = [f % 9, Math.floor(Math.floor(f / 9))],
                p = r.value[h][d]
              if (!p) throw Error('Sorry, posValue is not defined: posValue =' + p)
              if ((console.log([...p.candidates].toSorted(), p.currentValue), p.currentValue !== 0))
                continue
              const m = [...p.candidates].toSorted()
              for (let C = 1; C <= 9; C += 1)
                Au(C, [d, h], r.value) ? p.candidates.add(C) : p.candidates.delete(C)
              const I = [...p.candidates].toSorted()
              console.log({ x: d, y: h, before: m.join(), after: I.join() }), await Yn(Jn)
            }
            for (let f = 0; f < 9; f++) {
              const d = Math.floor(f / 3),
                h = f % 3
              for (let p = d * 3; p < (d + 1) * 3; p++)
                for (let m = h * 3; m < (h + 1) * 3; m++) await Iu([m, p], r.value, n)
            }
          }
        }
      return (i, c) => (
        vt(),
        Nt('form', Mu, [
          Fu,
          fe(wu, { cells: t, 'active-cell-number': n.value }, null, 8, [
            'cells',
            'active-cell-number'
          ]),
          je('div', Nu, [
            je(
              'button',
              { class: 'solve-button', type: 'submit', onClick: oc(o, ['prevent']) },
              'Solve!'
            )
          ])
        ])
      )
    }
  }),
  $u = $o(Lu, [['__scopeId', 'data-v-e2c76648']]),
  ju = Rt({
    __name: 'HomeView',
    setup(e) {
      return (t, n) => (vt(), Nt('main', null, [fe($u)]))
    }
  }),
  Hu = gu({ history: Dc('/sudoku-solver/'), routes: [{ path: '/', name: 'home', component: ju }] }),
  yr = cc(_u)
yr.use(hc())
yr.use(Hu)
yr.mount('#app')
