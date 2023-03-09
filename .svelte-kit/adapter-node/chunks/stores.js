import { w as writable } from "./index3.js";
import e from "util";
import r from "crypto";
var t = function(e2, r2) {
  return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, r3) {
    e3.__proto__ = r3;
  } || function(e3, r3) {
    for (var t2 in r3)
      Object.prototype.hasOwnProperty.call(r3, t2) && (e3[t2] = r3[t2]);
  }, t(e2, r2);
}, n = function() {
  return n = Object.assign || function(e2) {
    for (var r2, t2 = 1, n2 = arguments.length; t2 < n2; t2++)
      for (var i2 in r2 = arguments[t2])
        Object.prototype.hasOwnProperty.call(r2, i2) && (e2[i2] = r2[i2]);
    return e2;
  }, n.apply(this, arguments);
};
function i(e2, r2, t2) {
  if (t2 || 2 === arguments.length)
    for (var n2, i2 = 0, o2 = r2.length; i2 < o2; i2++)
      !n2 && i2 in r2 || (n2 || (n2 = Array.prototype.slice.call(r2, 0, i2)), n2[i2] = r2[i2]);
  return e2.concat(n2 || Array.prototype.slice.call(r2));
}
var o = {}, s = /* @__PURE__ */ new Set(), a = {}, c = function(e2) {
  function r2() {
    return null !== e2 && e2.apply(this, arguments) || this;
  }
  return function(e3, r3) {
    if ("function" != typeof r3 && null !== r3)
      throw new TypeError("Class extends value " + String(r3) + " is not a constructor or null");
    function n2() {
      this.constructor = e3;
    }
    t(e3, r3), e3.prototype = null === r3 ? Object.create(r3) : (n2.prototype = r3.prototype, new n2());
  }(r2, e2), r2;
}(Error);
function u(e2, r2) {
  if ("string" == typeof e2 || "number" == typeof e2 && !isNaN(e2) && Math.abs(e2) !== 1 / 0 || null == e2 || "boolean" == typeof e2)
    return e2;
  var t2 = r2.indexOf(e2);
  if (-1 !== t2)
    return "#$@__instance__" + t2;
  r2.push(e2);
  var i2 = r2.length - 1;
  if (e2.constructor === Array) {
    var o2 = e2.map(function(e3) {
      return u(e3, r2);
    });
    return o2.unshift("#$@__reference__" + i2), o2;
  }
  if (e2.constructor === Object) {
    var c2 = Object.fromEntries(Object.entries(e2).map(function(e3) {
      return [e3[0], u(e3[1], r2)];
    }));
    return c2["#$@__reference__"] = i2, c2;
  }
  s.add(e2.constructor);
  var f2 = {};
  f2 = Object.defineProperty(f2, "#$@__constructor__", { value: e2.constructor.name, enumerable: true }), f2 = Object.defineProperty(f2, "#$@__reference__", { value: i2, enumerable: true });
  var l2 = function(e3, r3) {
    if (Object.keys(a).includes(e3.constructor.name))
      return a[e3.constructor.name].toPlain(e3, function(e4) {
        return u(e4, r3);
      });
  }(e2, r2);
  return void 0 !== l2 ? n(n({}, l2), f2) : (Object.getOwnPropertyNames(e2).forEach(function(t3) {
    Object.defineProperty(f2, t3, { value: u(e2[t3], r2), enumerable: true });
  }), f2);
}
function f(e2, r2, t2) {
  var n2;
  if ("string" == typeof e2 && 0 === e2.indexOf("#$@__instance__"))
    return t2[u2 = parseInt(e2.slice("#$@__instance__".length))];
  if ("string" == typeof e2 || "number" == typeof e2 || null == e2 || "boolean" == typeof e2)
    return e2;
  if (e2.constructor === Array) {
    if (0 === e2.length)
      return [];
    var i2 = e2.shift();
    if ("string" != typeof i2 || "#$@__reference__" !== i2.substring(0, "#$@__reference__".length)) {
      if (0 === Object.keys(t2).length)
        return e2.unshift(i2), e2;
      throw new c();
    }
    var o2 = [];
    t2[u2 = i2.slice("#$@__reference__".length)] = o2;
    for (var s2 = 0; s2 < e2.length; s2++)
      o2[s2] = f(e2[s2], r2, t2);
    return o2;
  }
  if (e2.constructor === Object) {
    var u2;
    if (null === (u2 = null !== (n2 = e2["#$@__reference__"]) && void 0 !== n2 ? n2 : null)) {
      if (0 === Object.keys(t2).length)
        return e2;
      throw new c();
    }
    if (delete e2["#$@__reference__"], !Object.keys(e2).includes("#$@__constructor__")) {
      for (var l2 in o2 = {}, t2[u2] = o2, e2)
        o2[l2] = f(e2[l2], r2, t2);
      return o2;
    }
    var d2 = e2["#$@__constructor__"];
    delete e2["#$@__constructor__"];
    var h2 = function(e3, r3, t3, n3) {
      if (Object.keys(a).includes(r3))
        return a[r3].fromPlain(e3, function(e4) {
          return f(e4, t3, n3);
        });
    }(e2, d2, r2, t2);
    if (void 0 !== h2)
      return h2;
    if (!Object.keys(r2).includes(d2))
      throw new Error("The class " + d2 + " is not allowed");
    var p = {};
    for (var l2 in t2[u2] = p, e2)
      p[l2] = f(e2[l2], r2, t2);
    return Object.setPrototypeOf(p, r2[d2].prototype), p;
  }
}
function l(e2) {
  o[e2.name] = e2;
}
!function(e2, r2) {
  e2("Date", (e3) => ({ time: e3.getTime() }), function(e3) {
    let r3 = new Date();
    return r3.setTime(e3.time), r3;
  }), e2("BigInt", (e3) => ({ number: e3.toString() }), (e3) => BigInt(e3.number)), e2("String", (e3) => ({ text: e3.toString() }), (e3) => new String(e3.text)), e2("RegExp", (e3) => ({ source: e3.source, flags: e3.flags }), (e3) => new RegExp(e3.source, e3.flags)), e2("Number", function(e3) {
    let r3 = { nan: false, infinity: false, positive: true, number: null };
    return Math.abs(e3) === 1 / 0 ? (r3.infinity = true, r3.positive = Math.abs(e3) === e3, r3) : isNaN(e3) ? (r3.nan = true, r3) : (r3.number = e3.valueOf(), r3);
  }, function(e3) {
    return e3.nan ? NaN : e3.infinity ? 1 / 0 * (e3.positive ? 1 : -1) : new Number(e3.number);
  }), e2("Map", (e3, r3) => ({ data: Array.from(e3.entries()).map((e4) => r3(e4)) }), function(e3, r3) {
    const t2 = /* @__PURE__ */ new Map();
    return e3.data.map((e4) => r3(e4)).forEach(([e4, r4]) => t2.set(e4, r4)), t2;
  }), e2("Set", (e3, r3) => ({ data: Array.from(e3.values()).map((e4) => r3(e4)) }), function(e3, r3) {
    const t2 = /* @__PURE__ */ new Set();
    return e3.data.map((e4) => r3(e4)).forEach((e4) => t2.add(e4)), t2;
  }), e2("ArrayBuffer", (e3, r3) => ({ data: r3(new Uint8Array(e3)) }), (e3, r3) => r3(e3.data).buffer), e2("DataView", (e3, r3) => ({ buffer: r3(e3.buffer), offset: e3.byteOffset, length: e3.byteLength }), (e3, r3) => new DataView(r3(e3.buffer), e3.offset, e3.length)), [Error, EvalError, RangeError, AggregateError, ReferenceError, SyntaxError, TypeError, URIError, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array].forEach((e3) => r2(e3));
}(function(e2, r2, t2) {
  a[e2] = { toPlain: r2, fromPlain: t2 };
}, l);
var d, h = {};
(d = h).defaults = {}, d.set = function(e2, r2, t2) {
  var n2 = t2 || {}, i2 = d.defaults, o2 = n2.expires || i2.expires, s2 = n2.domain || i2.domain, a2 = void 0 !== n2.path ? n2.path : void 0 !== i2.path ? i2.path : "/", c2 = void 0 !== n2.secure ? n2.secure : i2.secure, u2 = void 0 !== n2.httponly ? n2.httponly : i2.httponly, f2 = void 0 !== n2.samesite ? n2.samesite : i2.samesite, l2 = o2 ? new Date("number" == typeof o2 ? new Date().getTime() + 864e5 * o2 : o2) : 0;
  document.cookie = e2.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + r2.replace(/[^+#$&/:<-\[\]-}]/g, encodeURIComponent) + (l2 && l2.getTime() >= 0 ? ";expires=" + l2.toUTCString() : "") + (s2 ? ";domain=" + s2 : "") + (a2 ? ";path=" + a2 : "") + (c2 ? ";secure" : "") + (u2 ? ";httponly" : "") + (f2 ? ";samesite=" + f2 : "");
}, d.get = function(e2) {
  for (var r2 = document.cookie.split(";"); r2.length; ) {
    var t2 = r2.pop(), n2 = t2.indexOf("=");
    if (n2 = n2 < 0 ? t2.length : n2, decodeURIComponent(t2.slice(0, n2).replace(/^\s+/, "")) === e2)
      return decodeURIComponent(t2.slice(n2 + 1));
  }
  return null;
}, d.erase = function(e2, r2) {
  d.set(e2, "", { expires: -1, domain: r2 && r2.domain, path: r2 && r2.path, secure: 0, httponly: 0 });
}, d.all = function() {
  for (var e2 = {}, r2 = document.cookie.split(";"); r2.length; ) {
    var t2 = r2.pop(), n2 = t2.indexOf("=");
    n2 = n2 < 0 ? t2.length : n2, e2[decodeURIComponent(t2.slice(0, n2).replace(/^\s+/, ""))] = decodeURIComponent(t2.slice(n2 + 1));
  }
  return e2;
};
(function() {
  class t2 {
    constructor(e2 = {}) {
      const { allows: r2, denies: t3, requires: n3, action: i3, resource: o3, behavior: s2 } = e2;
      if (this._edit = true, this._action = null, this._resource = null, this._behavior = null, this._allows = [], this._denies = [], this._requires = {}, "action" in e2 && this.action(i3), "resource" in e2 && this.resource(o3), "behavior" in e2 && this.behavior(s2), "allows" in e2) {
        if (r2 instanceof Array == 0)
          throw new Error("permission allows illegal type");
        r2.forEach((e3) => this.allow(e3));
      }
      if ("denies" in e2) {
        if (t3 instanceof Array == 0)
          throw new Error("permission denies illegal type");
        t3.forEach((e3) => this.deny(e3));
      }
      if ("requires" in e2) {
        if (n3 instanceof Object == 0)
          throw new Error("permission requires illegal type");
        Object.entries(n3).forEach(([e3, r3]) => this.require(e3, r3));
      }
    }
    edit(e2) {
      if (void 0 === e2)
        return this._edit;
      if ("boolean" != typeof e2)
        throw new Error("permission edit boolean required");
      return this._edit = e2, this;
    }
    action(e2) {
      if (void 0 === e2)
        return this._action;
      if ("string" != typeof e2)
        throw new Error("permission action string required");
      return this._action = e2, this;
    }
    resource(e2) {
      if (void 0 === e2)
        return this._resource;
      if ("string" != typeof e2)
        throw new Error("permission resource string required");
      return this._resource = e2, this;
    }
    behavior(e2) {
      if (void 0 === e2)
        return this._behavior;
      if ("boolean" != typeof e2)
        throw new Error("permission behavior boolean required");
      return this._behavior = e2, this;
    }
    allows() {
      return Object.freeze(this._allows);
    }
    allow(e2) {
      if ("string" != typeof e2)
        throw new Error("permission allow string required");
      if (this._allows.includes(e2))
        throw new Error(`permission allow ${e2} exists`);
      return this._allows.push(e2), this;
    }
    denies() {
      return Object.freeze(this._deniess);
    }
    deny(e2) {
      if ("string" != typeof e2)
        throw new Error("permission deny string required");
      if (this._denies.includes(e2))
        throw new Error(`permission deny ${e2} exists`);
      return this._denies.push(e2), this;
    }
    requires() {
      return Object.freeze(this._requires);
    }
    require(e2, r2) {
      if ("string" != typeof e2)
        throw new Error("permission name string required");
      if (!("boolean" != typeof r2 || "number" != typeof r2 || "string" != typeof r2 || r2 instanceof Array))
        throw new Error("permission value string or array required");
      return this._requires[e2] = r2, this;
    }
    traverse(e2, r2) {
      const t3 = e2.split("."), n3 = t3.pop();
      return t3.forEach((e3) => r2 = r2[e3]), [n3, r2];
    }
    validate(e2, r2, t3) {
      if ("object" != typeof t3)
        return false;
      if ("string" != typeof r2)
        return false;
      if ("string" != typeof e2)
        return false;
      if (this._action !== r2)
        return false;
      if (this._resource !== e2)
        return false;
      for (const e3 in this._requires) {
        const [r3, n3] = this.traverse(e3, t3), i3 = this._requires[r3], o3 = n3[r3];
        if (r3 in n3) {
          if (i3 instanceof Array && i3.includes(o3) || i3 === o3)
            continue;
          return false;
        }
        return false;
      }
      if (this._behavior)
        for (const e3 of this._denies) {
          const [r3, n3] = this.traverse(e3, t3);
          if (r3 in n3)
            return false;
        }
      else
        for (const e3 of this._allows) {
          const [r3, n3] = this.traverse(e3, t3);
          if (r3 in n3)
            return false;
        }
      return true;
    }
    valid() {
      return "string" == typeof this._action && "string" == typeof this._resource && "boolean" == typeof this._behavior;
    }
    toJSON() {
      return { edit: this._edit, action: this._action, resource: this._resource, behavior: this._behavior, allows: this._allows, denies: this._denies, requires: this._requires };
    }
  }
  class n2 {
    constructor(e2 = {}) {
      const { name: r2, active: t3, permissions: n3 } = e2;
      if (this._edit = true, this._name = null, this._active = null, this._permissions = [], "name" in e2 && this.name(r2), "active" in e2 && this.active(t3), "permissions" in e2) {
        if (n3 instanceof Array == 0)
          throw new Error("role permissions illegal type");
        n3.forEach((e3) => this.permission(e3));
      }
    }
    edit(e2) {
      if (void 0 === e2)
        return this._edit;
      if ("boolean" != typeof e2)
        throw new Error("role edit boolean required");
      return this._edit = e2, this;
    }
    name(e2) {
      if (void 0 === e2)
        return this._name;
      if ("string" != typeof e2)
        throw new Error("role name string required");
      return this._name = e2, this;
    }
    active(e2) {
      if (void 0 === e2)
        return this._active;
      if ("boolean" != typeof e2)
        throw new Error("role active boolean required");
      return this._active = e2, this;
    }
    permissions() {
      return Object.freeze(this._permissions);
    }
    permission() {
      const e2 = new t2(...arguments);
      return this.add(e2), e2;
    }
    get(e2, r2) {
      return this._permissions.find((t3) => t3.action() === r2 && t3.resource() === e2);
    }
    add(e2) {
      if (e2 instanceof t2 == 0)
        throw new Error("role add requires permission");
      const r2 = e2.action(), n3 = e2.resource();
      if (this._permissions.find(({ _resource: e3, _action: t3 }) => e3 === n3 && t3 === r2))
        throw new Error(`role add permission ${n3} ${r2} exists`);
      return this._permissions.push(e2), this;
    }
    validate(e2, r2, t3) {
      if ("object" != typeof t3)
        return false;
      if ("string" != typeof r2)
        return false;
      if ("string" != typeof e2)
        return false;
      if (false === this._active)
        return false;
      const n3 = this.get(e2, r2);
      return !!n3 && n3.validate(e2, r2, t3);
    }
    valid() {
      if ("string" != typeof this._name)
        return false;
      if ("boolean" != typeof this._active)
        return false;
      for (const e2 of this._permissions)
        if (false === e2.valid())
          return false;
      return true;
    }
    toJSON() {
      return { edit: this._edit, name: this._name, active: this._active, permissions: this._permissions.map((e2) => e2.toJSON()) };
    }
  }
  class i2 {
    constructor(e2 = {}) {
      const { roles: r2 } = e2;
      if (this._roles = {}, "roles" in e2) {
        if (r2 instanceof Array == 0)
          throw new Error("access roles illegal type");
        r2.forEach((e3) => this.role(e3));
      }
    }
    role() {
      const e2 = new n2(...arguments);
      return this.add(e2), e2;
    }
    get(e2) {
      if (e2 instanceof n2 == 0)
        throw new Error("access get requires role");
      const r2 = e2.name();
      return this._roles[r2];
    }
    add(e2) {
      if (e2 instanceof n2 == 0)
        throw new Error("access add requires role");
      const r2 = e2.name();
      if (r2 in this._roles)
        throw new Error(`access add role ${r2} exists`);
      return this._roles[r2] = e2, this;
    }
    remove(e2) {
      if (e2 instanceof n2 == 0)
        throw new Error("access remove requires role");
      const r2 = e2.name();
      if (r2 in this._roles)
        throw new Error(`access remove role ${r2} exists`);
      return delete this._roles[r2], this;
    }
    roles() {
      return Object.freeze(this._roles);
    }
    toJSON() {
      return this._roles;
    }
  }
  const o2 = { ENCODING: "hex", ITERATIONS: 999999, KEY: 32, TAG: 16, SALT: 16, VECTOR: 12, RANDOM: 20, HASH: "sha-512", ALGORITHM: "aes-256-gcm", Role: n2, Access: i2, Permission: t2, role() {
    return new n2(...arguments);
  }, access() {
    return new i2(...arguments);
  }, permission() {
    return new t2(...arguments);
  }, async random(e2) {
    const r2 = this;
    e2 = e2 || r2.RANDOM;
    const t3 = await r2.randomBytes(e2);
    return await r2.bufferToHex(t3);
  }, async hash(e2, r2) {
    const t3 = this;
    if (!e2)
      throw new Error("Cyrup.hash - item argument required");
    r2 = t3.normalizeHash(r2 || t3.HASH);
    const n3 = await t3.stringToBuffer(e2), i3 = await t3.createHash(n3, r2);
    return await t3.bufferToHex(i3);
  }, async compare(e2, r2) {
    const t3 = this;
    if (!r2)
      throw new Error("Cyrup.compare - key argument required");
    if (!e2)
      throw new Error("Cyrup.compare - password argument required");
    const n3 = await t3.hexToBuffer(r2.split(":")[1]);
    return await t3.key(e2, { salt: n3 }) === r2;
  }, async key(e2, r2) {
    const t3 = this;
    if (!e2)
      throw new Error("Cyrup.key - item argument required");
    (r2 = r2 || {}).size = r2.size || t3.KEY, r2.salt = r2.salt || t3.SALT, r2.iterations = r2.iterations || t3.ITERATIONS, r2.hash = t3.normalizeHash(r2.hash || t3.HASH);
    const [n3, i3] = await Promise.all(["string" == typeof e2 ? t3.stringToBuffer(e2) : e2, "string" == typeof r2.salt ? t3.stringToBuffer(r2.salt) : "number" == typeof r2.salt ? t3.randomBytes(r2.salt) : r2.salt]), o3 = await t3.pbkdf2(n3, i3, r2.iterations, r2.size, r2.hash), [s2, a2] = await Promise.all([t3.bufferToHex(o3), t3.bufferToHex(i3)]);
    return `${s2}:${a2}`;
  }, async encrypt(e2, r2, t3, n3) {
    const i3 = this;
    if (!r2)
      throw new Error("Cyrup.encrypt - key argument required");
    if (!e2)
      throw new Error("Cyrup.encrypt - data argument required");
    r2 = r2.split(":"), n3 = n3 || i3.VECTOR, t3 = i3.normalizeAlgorithm(t3 || i3.ALGORITHM);
    const [o3, s2, a2] = await Promise.all([i3.hexToBuffer(r2[0]), "string" == typeof e2 ? i3.stringToBuffer(e2) : e2, "string" == typeof n3 ? i3.stringToBuffer(n3) : i3.randomBytes(n3)]), c2 = await i3.cipher(t3, o3, a2, s2), [u2, f2] = await Promise.all([i3.bufferToHex(c2), i3.bufferToHex(a2)]);
    return `${u2}:${f2}`;
  }, async decrypt(e2, r2, t3) {
    const n3 = this;
    if (!r2)
      throw new Error("Cyrup.decrypt - key argument required");
    if (!e2)
      throw new Error("Cyrup.decrypt - data argument required");
    t3 = n3.normalizeAlgorithm(t3 || n3.ALGORITHM), r2 = r2.split(":"), e2 = e2.split(":");
    const [i3, o3, s2] = await Promise.all([n3.hexToBuffer(r2[0]), n3.hexToBuffer(e2[0]), n3.hexToBuffer(e2[1])]), a2 = await n3.decipher(t3, i3, s2, o3);
    return await n3.bufferToString(a2);
  } };
  if ("undefined" == typeof window) {
    const t3 = e, n3 = r, i3 = t3.promisify(n3.pbkdf2), s2 = t3.promisify(n3.randomBytes);
    o2.normalizeHash = function(e2) {
      return e2.replace("-", "").toLowerCase();
    }, o2.normalizeAlgorithm = function(e2) {
      return 0 !== e2.toLowerCase().indexOf("aes") ? e2 : e2.toLowerCase();
    }, o2.hexToBuffer = async function(e2) {
      return Buffer.from(e2, "hex");
    }, o2.bufferToHex = async function(e2) {
      return e2.toString("hex");
    }, o2.stringToBuffer = async function(e2) {
      return Buffer.from(e2, "utf8");
    }, o2.bufferToString = async function(e2) {
      return e2.toString("utf8");
    }, o2.createHash = async function(e2, r2) {
      return n3.createHash(r2).update(e2).digest();
    }, o2.randomBytes = async function(e2) {
      return s2(e2);
    }, o2.pbkdf2 = async function(e2, r2, t4, n4, o3) {
      return i3(e2, r2, t4, n4, o3);
    }, o2.cipher = async function(e2, r2, t4, i4) {
      const o3 = n3.createCipheriv(e2, r2, t4);
      return Buffer.concat([o3.update(i4, "utf8"), o3.final(), o3.getAuthTag()]);
    }, o2.decipher = async function(e2, r2, t4, i4) {
      const o3 = this, s3 = Buffer.from(i4, "hex"), a2 = s3.slice(s3.byteLength - o3.TAG), c2 = s3.slice(0, s3.byteLength - o3.TAG), u2 = n3.createDecipheriv(e2, r2, t4);
      return u2.setAuthTag(a2), Buffer.concat([u2.update(c2), u2.final()]);
    };
  } else
    o2.normalizeHash = function(e2) {
      return e2.toUpperCase();
    }, o2.normalizeAlgorithm = function(e2) {
      if (0 !== e2.toLowerCase().indexOf("aes"))
        return e2;
      const r2 = e2.split("-");
      return (r2[0] + "-" + r2[2]).toUpperCase();
    }, o2.getAuthTag = function(e2) {
      return e2.slice(e2.byteLength - this.TAG);
    }, o2.hexToBuffer = async function(e2) {
      if ("string" != typeof e2)
        throw new TypeError("Cyrup.hexToBuffer - expected input to be a string");
      if (e2.length % 2 != 0)
        throw new RangeError("Cyrup.hexToBuffer - expected string to be an even number of characters");
      const r2 = new Uint8Array(e2.length / 2);
      for (let t3 = 0, n3 = e2.length; t3 < n3; t3 += 2)
        r2[t3 / 2] = parseInt(e2.substring(t3, t3 + 2), 16);
      return r2.buffer;
    }, o2.bufferToHex = async function(e2) {
      const r2 = new Uint8Array(e2), t3 = new Array(r2.length);
      for (let e3 = 0, n3 = r2.length; e3 < n3; e3++)
        t3[e3] = ("00" + r2[e3].toString(16)).slice(-2);
      return t3.join("");
    }, o2.stringToBuffer = async function(e2) {
      const r2 = new Uint8Array(e2.length);
      for (let t3 = 0, n3 = e2.length; t3 < n3; t3++)
        r2[t3] = e2.charCodeAt(t3);
      return r2.buffer;
    }, o2.bufferToString = async function(e2) {
      const r2 = new Uint8Array(e2), t3 = new Array(r2.length);
      for (let e3 = 0, n3 = r2.length; e3 < n3; e3++)
        t3[e3] = String.fromCharCode(r2[e3]);
      return t3.join("");
    }, o2.createHash = async function(e2, r2) {
      return window.crypto.subtle.digest(r2, e2);
    }, o2.randomBytes = async function(e2) {
      return window.crypto.getRandomValues(new Uint8Array(e2));
    }, o2.pbkdf2 = async function(e2, r2, t3, n3, i3) {
      const o3 = await window.crypto.subtle.importKey("raw", e2, { name: "PBKDF2" }, false, ["deriveBits"]), s2 = await window.crypto.subtle.deriveBits({ salt: r2, iterations: t3, name: "PBKDF2", hash: { name: i3 } }, o3, n3 << 3);
      return new Uint8Array(s2);
    }, o2.cipher = async function(e2, r2, t3, n3) {
      const i3 = this, o3 = await window.crypto.subtle.importKey("raw", r2, { name: e2 }, false, ["encrypt"]);
      return await window.crypto.subtle.encrypt({ iv: t3, name: e2, tagLength: 8 * i3.TAG }, o3, n3);
    }, o2.decipher = async function(e2, r2, t3, n3) {
      const i3 = this, o3 = await window.crypto.subtle.importKey("raw", r2, { name: e2 }, false, ["decrypt"]);
      return await window.crypto.subtle.decrypt({ iv: t3, name: e2, tagLength: 8 * i3.TAG }, o3, n3);
    };
  return o2;
})();
function _(e2) {
  let r2, t2 = e2[0], n2 = 1;
  for (; n2 < e2.length; ) {
    const i2 = e2[n2], o2 = e2[n2 + 1];
    if (n2 += 2, ("optionalAccess" === i2 || "optionalCall" === i2) && null == t2)
      return;
    "access" === i2 || "optionalAccess" === i2 ? (r2 = t2, t2 = o2(t2)) : "call" !== i2 && "optionalCall" !== i2 || (t2 = o2((...e3) => t2.call(r2, ...e3)), r2 = void 0);
  }
  return t2;
}
var v;
!function(e2) {
  e2[e2.EXCEPTION = 0] = "EXCEPTION";
  e2[e2.NO_ENCRYPTION = 1] = "NO_ENCRYPTION";
  e2[e2.NO_STORAGE = 2] = "NO_STORAGE";
}(v || (v = {}));
v.EXCEPTION;
const S = [], L = (e2) => {
  const r2 = "undefined" != typeof process && "production" === _([process, "access", (e3) => e3.env, "optionalAccess", (e3) => e3.NODE_ENV]);
  -1 !== S.indexOf(e2) || r2 || ("undefined" == typeof window && (e2 += "\nAre you running on a server? Most of storages are not available while running on a server."), console.warn(e2), S.push(e2));
}, x = (e2) => {
  L(`Unable to find the ${e2}. No data will be persisted.`);
};
let N = function(e2) {
  return void 0 === e2 ? "undefined" : JSON.stringify(u(e2, []));
}, B = function(e2, r2) {
  if (void 0 === r2 && (r2 = void 0), "string" != typeof e2)
    return e2;
  if (void 0 === r2 && (r2 = {}), "undefined" !== e2) {
    r2 = Object.fromEntries(i(i([], Object.entries(r2), true), Object.entries(o), true));
    try {
      return f(JSON.parse(e2), r2, {});
    } catch (r3) {
      return e2;
    }
  }
};
function q(e2, r2, t2) {
  const n2 = r2.getValue(t2);
  return null !== n2 && e2.set(n2), r2.addListener && r2.addListener(t2, (r3) => {
    e2.set(r3);
  }), e2.subscribe((e3) => {
    r2.setValue(t2, e3);
  }), { ...e2, delete() {
    r2.deleteValue(t2);
  } };
}
function V() {
}
function k(e2 = V, r2 = V) {
  const t2 = [];
  return { callListeners(e3, r3) {
    void 0 !== r3 && t2.filter(({ key: r4 }) => r4 === e3).forEach(({ listener: e4 }) => e4(r3));
  }, addListener(r3, n2) {
    t2.push({ key: r3, listener: n2 }), 1 === t2.length && e2();
  }, removeListener(e3, n2) {
    const i2 = t2.indexOf({ key: e3, listener: n2 });
    -1 !== i2 && t2.splice(i2, 1), 0 === t2.length && r2();
  } };
}
Y();
G();
M();
function z(e2, r2 = false) {
  const t2 = (r3) => {
    const t3 = r3.key;
    r3.storageArea === e2 && i2(t3, B(r3.newValue));
  }, { removeListener: n2, callListeners: i2, addListener: o2 } = k(() => {
    r2 && "undefined" != typeof window && _([window, "optionalAccess", (e3) => e3.addEventListener]) && window.addEventListener("storage", t2);
  }, () => {
    r2 && "undefined" != typeof window && _([window, "optionalAccess", (e3) => e3.removeEventListener]) && window.removeEventListener("storage", t2);
  });
  return { addListener: o2, removeListener: n2, getValue(r3) {
    const t3 = e2.getItem(r3);
    return B(t3);
  }, deleteValue(r3) {
    e2.removeItem(r3);
  }, setValue(r3, t3) {
    e2.setItem(r3, N(t3));
  } };
}
function G(e2 = false) {
  return "undefined" != typeof window && _([window, "optionalAccess", (e3) => e3.localStorage]) ? z(window.localStorage, e2) : (x("window.localStorage"), W());
}
function M(e2 = false) {
  return "undefined" != typeof window && _([window, "optionalAccess", (e3) => e3.sessionStorage]) ? z(window.sessionStorage, e2) : (x("window.sessionStorage"), W());
}
function Y() {
  return "undefined" == typeof document || "string" != typeof _([document, "optionalAccess", (e2) => e2.cookie]) ? (x("document.cookies"), W()) : { getValue(e2) {
    const r2 = h.get(e2);
    return B(r2);
  }, deleteValue(e2) {
    h.erase(e2, { samesite: "Strict" });
  }, setValue(e2, r2) {
    h.set(e2, N(r2), { samesite: "Strict" });
  } };
}
var F;
function W() {
  return { getValue: () => null, deleteValue() {
  }, setValue() {
  } };
}
!function(e2) {
  e2[e2.LOCAL = 0] = "LOCAL";
  e2[e2.SESSION = 1] = "SESSION";
  e2[e2.SYNC = 2] = "SYNC";
}(F || (F = {}));
let LoginStatus = q(writable({ loggedIn: false }), G(), "LoginStatus");
export {
  LoginStatus as L
};
