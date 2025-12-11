(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
;
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayLikeToArray
]);
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayWithoutHoles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [app-client] (ecmascript)");
;
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r);
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_iterableToArray
]);
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_unsupportedIterableToArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [app-client] (ecmascript)");
;
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r, a) : void 0;
    }
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_nonIterableSpread
]);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_toConsumableArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithoutHoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js [app-client] (ecmascript)");
;
;
;
;
function _toConsumableArray(r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithoutHoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_defineProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)");
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_asyncToGenerator
]);
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_classCallCheck
]);
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_createClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)");
;
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_possibleConstructorReturn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
;
;
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t);
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_getPrototypeOf
]);
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inherits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)");
;
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, e);
}
;
}),
"[project]/mentor_main/node_modules/format/format.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

//
// format - printf-like string formatting for JavaScript
// github.com/samsonjs/format
// @_sjs
//
// Copyright 2010 - 2013 Sami Samhuri <sami@samhuri.net>
//
// MIT License
// http://sjs.mit-license.org
//
;
(function() {
    //// Export the API
    var namespace;
    // CommonJS / Node module
    if ("TURBOPACK compile-time truthy", 1) {
        namespace = module.exports = format;
    } else //TURBOPACK unreachable
    ;
    namespace.format = format;
    namespace.vsprintf = vsprintf;
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
        namespace.printf = printf;
    }
    function printf() {
        console.log(format.apply(null, arguments));
    }
    function vsprintf(fmt, replacements) {
        return format.apply(null, [
            fmt
        ].concat(replacements));
    }
    function format(fmt) {
        var argIndex = 1 // skip initial format argument
        , args = [].slice.call(arguments), i = 0, n = fmt.length, result = '', c, escaped = false, arg, tmp, leadingZero = false, precision, nextArg = function() {
            return args[argIndex++];
        }, slurpNumber = function() {
            var digits = '';
            while(/\d/.test(fmt[i])){
                digits += fmt[i++];
                c = fmt[i];
            }
            return digits.length > 0 ? parseInt(digits) : null;
        };
        for(; i < n; ++i){
            c = fmt[i];
            if (escaped) {
                escaped = false;
                if (c == '.') {
                    leadingZero = false;
                    c = fmt[++i];
                } else if (c == '0' && fmt[i + 1] == '.') {
                    leadingZero = true;
                    i += 2;
                    c = fmt[i];
                } else {
                    leadingZero = true;
                }
                precision = slurpNumber();
                switch(c){
                    case 'b':
                        result += parseInt(nextArg(), 10).toString(2);
                        break;
                    case 'c':
                        arg = nextArg();
                        if (typeof arg === 'string' || arg instanceof String) result += arg;
                        else result += String.fromCharCode(parseInt(arg, 10));
                        break;
                    case 'd':
                        result += parseInt(nextArg(), 10);
                        break;
                    case 'f':
                        tmp = String(parseFloat(nextArg()).toFixed(precision || 6));
                        result += leadingZero ? tmp : tmp.replace(/^0/, '');
                        break;
                    case 'j':
                        result += JSON.stringify(nextArg());
                        break;
                    case 'o':
                        result += '0' + parseInt(nextArg(), 10).toString(8);
                        break;
                    case 's':
                        result += nextArg();
                        break;
                    case 'x':
                        result += '0x' + parseInt(nextArg(), 10).toString(16);
                        break;
                    case 'X':
                        result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase();
                        break;
                    default:
                        result += c;
                        break;
                }
            } else if (c === '%') {
                escaped = true;
            } else {
                result += c;
            }
        }
        return result;
    }
})();
}),
"[project]/mentor_main/node_modules/fault/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var formatter = __turbopack_context__.r("[project]/mentor_main/node_modules/format/format.js [app-client] (ecmascript)");
var fault = create(Error);
module.exports = fault;
fault.eval = create(EvalError);
fault.range = create(RangeError);
fault.reference = create(ReferenceError);
fault.syntax = create(SyntaxError);
fault.type = create(TypeError);
fault.uri = create(URIError);
fault.create = create;
// Create a new `EConstructor`, with the formatted `format` as a first argument.
function create(EConstructor) {
    FormattedError.displayName = EConstructor.displayName || EConstructor.name;
    return FormattedError;
    //TURBOPACK unreachable
    ;
    function FormattedError(format) {
        if (format) {
            format = formatter.apply(null, arguments);
        }
        return new EConstructor(format);
    }
}
}),
"[project]/mentor_main/node_modules/lowlight/lib/core.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var high = __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/core.js [app-client] (ecmascript)");
var fault = __turbopack_context__.r("[project]/mentor_main/node_modules/fault/index.js [app-client] (ecmascript)");
exports.highlight = highlight;
exports.highlightAuto = highlightAuto;
exports.registerLanguage = registerLanguage;
exports.listLanguages = listLanguages;
exports.registerAlias = registerAlias;
Emitter.prototype.addText = text;
Emitter.prototype.addKeyword = addKeyword;
Emitter.prototype.addSublanguage = addSublanguage;
Emitter.prototype.openNode = open;
Emitter.prototype.closeNode = close;
Emitter.prototype.closeAllNodes = noop;
Emitter.prototype.finalize = noop;
Emitter.prototype.toHTML = toHtmlNoop;
var defaultPrefix = 'hljs-';
// Highlighting `value` in the language `name`.
function highlight(name, value, options) {
    var before = high.configure({});
    var settings = options || {};
    var prefix = settings.prefix;
    var result;
    if (typeof name !== 'string') {
        throw fault('Expected `string` for name, got `%s`', name);
    }
    if (!high.getLanguage(name)) {
        throw fault('Unknown language: `%s` is not registered', name);
    }
    if (typeof value !== 'string') {
        throw fault('Expected `string` for value, got `%s`', value);
    }
    if (prefix === null || prefix === undefined) {
        prefix = defaultPrefix;
    }
    high.configure({
        __emitter: Emitter,
        classPrefix: prefix
    });
    result = high.highlight(value, {
        language: name,
        ignoreIllegals: true
    });
    high.configure(before || {});
    /* istanbul ignore if - Highlight.js seems to use this (currently) for broken
   * grammars, so let’s keep it in there just to be sure. */ if (result.errorRaised) {
        throw result.errorRaised;
    }
    return {
        relevance: result.relevance,
        language: result.language,
        value: result.emitter.rootNode.children
    };
}
function highlightAuto(value, options) {
    var settings = options || {};
    var subset = settings.subset || high.listLanguages();
    var prefix = settings.prefix;
    var length = subset.length;
    var index = -1;
    var result;
    var secondBest;
    var current;
    var name;
    if (prefix === null || prefix === undefined) {
        prefix = defaultPrefix;
    }
    if (typeof value !== 'string') {
        throw fault('Expected `string` for value, got `%s`', value);
    }
    secondBest = {
        relevance: 0,
        language: null,
        value: []
    };
    result = {
        relevance: 0,
        language: null,
        value: []
    };
    while(++index < length){
        name = subset[index];
        if (!high.getLanguage(name)) {
            continue;
        }
        current = highlight(name, value, options);
        current.language = name;
        if (current.relevance > secondBest.relevance) {
            secondBest = current;
        }
        if (current.relevance > result.relevance) {
            secondBest = result;
            result = current;
        }
    }
    if (secondBest.language) {
        result.secondBest = secondBest;
    }
    return result;
}
// Register a language.
function registerLanguage(name, syntax) {
    high.registerLanguage(name, syntax);
}
// Get a list of all registered languages.
function listLanguages() {
    return high.listLanguages();
}
// Register more aliases for an already registered language.
function registerAlias(name, alias) {
    var map = name;
    var key;
    if (alias) {
        map = {};
        map[name] = alias;
    }
    for(key in map){
        high.registerAliases(map[key], {
            languageName: key
        });
    }
}
function Emitter(options) {
    this.options = options;
    this.rootNode = {
        children: []
    };
    this.stack = [
        this.rootNode
    ];
}
function addKeyword(value, name) {
    this.openNode(name);
    this.addText(value);
    this.closeNode();
}
function addSublanguage(other, name) {
    var stack = this.stack;
    var current = stack[stack.length - 1];
    var results = other.rootNode.children;
    var node = name ? {
        type: 'element',
        tagName: 'span',
        properties: {
            className: [
                name
            ]
        },
        children: results
    } : results;
    current.children = current.children.concat(node);
}
function text(value) {
    var stack = this.stack;
    var current;
    var tail;
    if (value === '') return;
    current = stack[stack.length - 1];
    tail = current.children[current.children.length - 1];
    if (tail && tail.type === 'text') {
        tail.value += value;
    } else {
        current.children.push({
            type: 'text',
            value: value
        });
    }
}
function open(name) {
    var stack = this.stack;
    var className = this.options.classPrefix + name;
    var current = stack[stack.length - 1];
    var child = {
        type: 'element',
        tagName: 'span',
        properties: {
            className: [
                className
            ]
        },
        children: []
    };
    current.children.push(child);
    stack.push(child);
}
function close() {
    this.stack.pop();
}
function toHtmlNoop() {
    return '';
}
function noop() {}
}),
"[project]/mentor_main/node_modules/lowlight/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var low = __turbopack_context__.r("[project]/mentor_main/node_modules/lowlight/lib/core.js [app-client] (ecmascript)");
module.exports = low;
low.registerLanguage('1c', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/1c.js [app-client] (ecmascript)"));
low.registerLanguage('abnf', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/abnf.js [app-client] (ecmascript)"));
low.registerLanguage('accesslog', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/accesslog.js [app-client] (ecmascript)"));
low.registerLanguage('actionscript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/actionscript.js [app-client] (ecmascript)"));
low.registerLanguage('ada', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/ada.js [app-client] (ecmascript)"));
low.registerLanguage('angelscript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/angelscript.js [app-client] (ecmascript)"));
low.registerLanguage('apache', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/apache.js [app-client] (ecmascript)"));
low.registerLanguage('applescript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/applescript.js [app-client] (ecmascript)"));
low.registerLanguage('arcade', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/arcade.js [app-client] (ecmascript)"));
low.registerLanguage('arduino', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/arduino.js [app-client] (ecmascript)"));
low.registerLanguage('armasm', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/armasm.js [app-client] (ecmascript)"));
low.registerLanguage('xml', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/xml.js [app-client] (ecmascript)"));
low.registerLanguage('asciidoc', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/asciidoc.js [app-client] (ecmascript)"));
low.registerLanguage('aspectj', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/aspectj.js [app-client] (ecmascript)"));
low.registerLanguage('autohotkey', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/autohotkey.js [app-client] (ecmascript)"));
low.registerLanguage('autoit', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/autoit.js [app-client] (ecmascript)"));
low.registerLanguage('avrasm', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/avrasm.js [app-client] (ecmascript)"));
low.registerLanguage('awk', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/awk.js [app-client] (ecmascript)"));
low.registerLanguage('axapta', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/axapta.js [app-client] (ecmascript)"));
low.registerLanguage('bash', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/bash.js [app-client] (ecmascript)"));
low.registerLanguage('basic', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/basic.js [app-client] (ecmascript)"));
low.registerLanguage('bnf', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/bnf.js [app-client] (ecmascript)"));
low.registerLanguage('brainfuck', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/brainfuck.js [app-client] (ecmascript)"));
low.registerLanguage('c-like', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/c-like.js [app-client] (ecmascript)"));
low.registerLanguage('c', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/c.js [app-client] (ecmascript)"));
low.registerLanguage('cal', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/cal.js [app-client] (ecmascript)"));
low.registerLanguage('capnproto', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/capnproto.js [app-client] (ecmascript)"));
low.registerLanguage('ceylon', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/ceylon.js [app-client] (ecmascript)"));
low.registerLanguage('clean', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/clean.js [app-client] (ecmascript)"));
low.registerLanguage('clojure', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/clojure.js [app-client] (ecmascript)"));
low.registerLanguage('clojure-repl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/clojure-repl.js [app-client] (ecmascript)"));
low.registerLanguage('cmake', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/cmake.js [app-client] (ecmascript)"));
low.registerLanguage('coffeescript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/coffeescript.js [app-client] (ecmascript)"));
low.registerLanguage('coq', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/coq.js [app-client] (ecmascript)"));
low.registerLanguage('cos', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/cos.js [app-client] (ecmascript)"));
low.registerLanguage('cpp', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/cpp.js [app-client] (ecmascript)"));
low.registerLanguage('crmsh', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/crmsh.js [app-client] (ecmascript)"));
low.registerLanguage('crystal', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/crystal.js [app-client] (ecmascript)"));
low.registerLanguage('csharp', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/csharp.js [app-client] (ecmascript)"));
low.registerLanguage('csp', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/csp.js [app-client] (ecmascript)"));
low.registerLanguage('css', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/css.js [app-client] (ecmascript)"));
low.registerLanguage('d', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/d.js [app-client] (ecmascript)"));
low.registerLanguage('markdown', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/markdown.js [app-client] (ecmascript)"));
low.registerLanguage('dart', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/dart.js [app-client] (ecmascript)"));
low.registerLanguage('delphi', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/delphi.js [app-client] (ecmascript)"));
low.registerLanguage('diff', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/diff.js [app-client] (ecmascript)"));
low.registerLanguage('django', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/django.js [app-client] (ecmascript)"));
low.registerLanguage('dns', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/dns.js [app-client] (ecmascript)"));
low.registerLanguage('dockerfile', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/dockerfile.js [app-client] (ecmascript)"));
low.registerLanguage('dos', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/dos.js [app-client] (ecmascript)"));
low.registerLanguage('dsconfig', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/dsconfig.js [app-client] (ecmascript)"));
low.registerLanguage('dts', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/dts.js [app-client] (ecmascript)"));
low.registerLanguage('dust', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/dust.js [app-client] (ecmascript)"));
low.registerLanguage('ebnf', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/ebnf.js [app-client] (ecmascript)"));
low.registerLanguage('elixir', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/elixir.js [app-client] (ecmascript)"));
low.registerLanguage('elm', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/elm.js [app-client] (ecmascript)"));
low.registerLanguage('ruby', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/ruby.js [app-client] (ecmascript)"));
low.registerLanguage('erb', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/erb.js [app-client] (ecmascript)"));
low.registerLanguage('erlang-repl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/erlang-repl.js [app-client] (ecmascript)"));
low.registerLanguage('erlang', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/erlang.js [app-client] (ecmascript)"));
low.registerLanguage('excel', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/excel.js [app-client] (ecmascript)"));
low.registerLanguage('fix', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/fix.js [app-client] (ecmascript)"));
low.registerLanguage('flix', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/flix.js [app-client] (ecmascript)"));
low.registerLanguage('fortran', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/fortran.js [app-client] (ecmascript)"));
low.registerLanguage('fsharp', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/fsharp.js [app-client] (ecmascript)"));
low.registerLanguage('gams', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/gams.js [app-client] (ecmascript)"));
low.registerLanguage('gauss', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/gauss.js [app-client] (ecmascript)"));
low.registerLanguage('gcode', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/gcode.js [app-client] (ecmascript)"));
low.registerLanguage('gherkin', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/gherkin.js [app-client] (ecmascript)"));
low.registerLanguage('glsl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/glsl.js [app-client] (ecmascript)"));
low.registerLanguage('gml', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/gml.js [app-client] (ecmascript)"));
low.registerLanguage('go', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/go.js [app-client] (ecmascript)"));
low.registerLanguage('golo', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/golo.js [app-client] (ecmascript)"));
low.registerLanguage('gradle', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/gradle.js [app-client] (ecmascript)"));
low.registerLanguage('groovy', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/groovy.js [app-client] (ecmascript)"));
low.registerLanguage('haml', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/haml.js [app-client] (ecmascript)"));
low.registerLanguage('handlebars', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/handlebars.js [app-client] (ecmascript)"));
low.registerLanguage('haskell', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/haskell.js [app-client] (ecmascript)"));
low.registerLanguage('haxe', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/haxe.js [app-client] (ecmascript)"));
low.registerLanguage('hsp', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/hsp.js [app-client] (ecmascript)"));
low.registerLanguage('htmlbars', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/htmlbars.js [app-client] (ecmascript)"));
low.registerLanguage('http', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/http.js [app-client] (ecmascript)"));
low.registerLanguage('hy', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/hy.js [app-client] (ecmascript)"));
low.registerLanguage('inform7', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/inform7.js [app-client] (ecmascript)"));
low.registerLanguage('ini', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/ini.js [app-client] (ecmascript)"));
low.registerLanguage('irpf90', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/irpf90.js [app-client] (ecmascript)"));
low.registerLanguage('isbl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/isbl.js [app-client] (ecmascript)"));
low.registerLanguage('java', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/java.js [app-client] (ecmascript)"));
low.registerLanguage('javascript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/javascript.js [app-client] (ecmascript)"));
low.registerLanguage('jboss-cli', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/jboss-cli.js [app-client] (ecmascript)"));
low.registerLanguage('json', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/json.js [app-client] (ecmascript)"));
low.registerLanguage('julia', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/julia.js [app-client] (ecmascript)"));
low.registerLanguage('julia-repl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/julia-repl.js [app-client] (ecmascript)"));
low.registerLanguage('kotlin', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/kotlin.js [app-client] (ecmascript)"));
low.registerLanguage('lasso', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/lasso.js [app-client] (ecmascript)"));
low.registerLanguage('latex', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/latex.js [app-client] (ecmascript)"));
low.registerLanguage('ldif', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/ldif.js [app-client] (ecmascript)"));
low.registerLanguage('leaf', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/leaf.js [app-client] (ecmascript)"));
low.registerLanguage('less', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/less.js [app-client] (ecmascript)"));
low.registerLanguage('lisp', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/lisp.js [app-client] (ecmascript)"));
low.registerLanguage('livecodeserver', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/livecodeserver.js [app-client] (ecmascript)"));
low.registerLanguage('livescript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/livescript.js [app-client] (ecmascript)"));
low.registerLanguage('llvm', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/llvm.js [app-client] (ecmascript)"));
low.registerLanguage('lsl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/lsl.js [app-client] (ecmascript)"));
low.registerLanguage('lua', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/lua.js [app-client] (ecmascript)"));
low.registerLanguage('makefile', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/makefile.js [app-client] (ecmascript)"));
low.registerLanguage('mathematica', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/mathematica.js [app-client] (ecmascript)"));
low.registerLanguage('matlab', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/matlab.js [app-client] (ecmascript)"));
low.registerLanguage('maxima', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/maxima.js [app-client] (ecmascript)"));
low.registerLanguage('mel', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/mel.js [app-client] (ecmascript)"));
low.registerLanguage('mercury', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/mercury.js [app-client] (ecmascript)"));
low.registerLanguage('mipsasm', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/mipsasm.js [app-client] (ecmascript)"));
low.registerLanguage('mizar', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/mizar.js [app-client] (ecmascript)"));
low.registerLanguage('perl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/perl.js [app-client] (ecmascript)"));
low.registerLanguage('mojolicious', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/mojolicious.js [app-client] (ecmascript)"));
low.registerLanguage('monkey', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/monkey.js [app-client] (ecmascript)"));
low.registerLanguage('moonscript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/moonscript.js [app-client] (ecmascript)"));
low.registerLanguage('n1ql', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/n1ql.js [app-client] (ecmascript)"));
low.registerLanguage('nginx', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/nginx.js [app-client] (ecmascript)"));
low.registerLanguage('nim', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/nim.js [app-client] (ecmascript)"));
low.registerLanguage('nix', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/nix.js [app-client] (ecmascript)"));
low.registerLanguage('node-repl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/node-repl.js [app-client] (ecmascript)"));
low.registerLanguage('nsis', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/nsis.js [app-client] (ecmascript)"));
low.registerLanguage('objectivec', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/objectivec.js [app-client] (ecmascript)"));
low.registerLanguage('ocaml', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/ocaml.js [app-client] (ecmascript)"));
low.registerLanguage('openscad', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/openscad.js [app-client] (ecmascript)"));
low.registerLanguage('oxygene', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/oxygene.js [app-client] (ecmascript)"));
low.registerLanguage('parser3', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/parser3.js [app-client] (ecmascript)"));
low.registerLanguage('pf', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/pf.js [app-client] (ecmascript)"));
low.registerLanguage('pgsql', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/pgsql.js [app-client] (ecmascript)"));
low.registerLanguage('php', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/php.js [app-client] (ecmascript)"));
low.registerLanguage('php-template', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/php-template.js [app-client] (ecmascript)"));
low.registerLanguage('plaintext', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/plaintext.js [app-client] (ecmascript)"));
low.registerLanguage('pony', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/pony.js [app-client] (ecmascript)"));
low.registerLanguage('powershell', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/powershell.js [app-client] (ecmascript)"));
low.registerLanguage('processing', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/processing.js [app-client] (ecmascript)"));
low.registerLanguage('profile', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/profile.js [app-client] (ecmascript)"));
low.registerLanguage('prolog', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/prolog.js [app-client] (ecmascript)"));
low.registerLanguage('properties', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/properties.js [app-client] (ecmascript)"));
low.registerLanguage('protobuf', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/protobuf.js [app-client] (ecmascript)"));
low.registerLanguage('puppet', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/puppet.js [app-client] (ecmascript)"));
low.registerLanguage('purebasic', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/purebasic.js [app-client] (ecmascript)"));
low.registerLanguage('python', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/python.js [app-client] (ecmascript)"));
low.registerLanguage('python-repl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/python-repl.js [app-client] (ecmascript)"));
low.registerLanguage('q', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/q.js [app-client] (ecmascript)"));
low.registerLanguage('qml', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/qml.js [app-client] (ecmascript)"));
low.registerLanguage('r', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/r.js [app-client] (ecmascript)"));
low.registerLanguage('reasonml', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/reasonml.js [app-client] (ecmascript)"));
low.registerLanguage('rib', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/rib.js [app-client] (ecmascript)"));
low.registerLanguage('roboconf', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/roboconf.js [app-client] (ecmascript)"));
low.registerLanguage('routeros', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/routeros.js [app-client] (ecmascript)"));
low.registerLanguage('rsl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/rsl.js [app-client] (ecmascript)"));
low.registerLanguage('ruleslanguage', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/ruleslanguage.js [app-client] (ecmascript)"));
low.registerLanguage('rust', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/rust.js [app-client] (ecmascript)"));
low.registerLanguage('sas', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/sas.js [app-client] (ecmascript)"));
low.registerLanguage('scala', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/scala.js [app-client] (ecmascript)"));
low.registerLanguage('scheme', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/scheme.js [app-client] (ecmascript)"));
low.registerLanguage('scilab', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/scilab.js [app-client] (ecmascript)"));
low.registerLanguage('scss', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/scss.js [app-client] (ecmascript)"));
low.registerLanguage('shell', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/shell.js [app-client] (ecmascript)"));
low.registerLanguage('smali', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/smali.js [app-client] (ecmascript)"));
low.registerLanguage('smalltalk', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/smalltalk.js [app-client] (ecmascript)"));
low.registerLanguage('sml', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/sml.js [app-client] (ecmascript)"));
low.registerLanguage('sqf', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/sqf.js [app-client] (ecmascript)"));
low.registerLanguage('sql_more', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/sql_more.js [app-client] (ecmascript)"));
low.registerLanguage('sql', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/sql.js [app-client] (ecmascript)"));
low.registerLanguage('stan', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/stan.js [app-client] (ecmascript)"));
low.registerLanguage('stata', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/stata.js [app-client] (ecmascript)"));
low.registerLanguage('step21', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/step21.js [app-client] (ecmascript)"));
low.registerLanguage('stylus', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/stylus.js [app-client] (ecmascript)"));
low.registerLanguage('subunit', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/subunit.js [app-client] (ecmascript)"));
low.registerLanguage('swift', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/swift.js [app-client] (ecmascript)"));
low.registerLanguage('taggerscript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/taggerscript.js [app-client] (ecmascript)"));
low.registerLanguage('yaml', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/yaml.js [app-client] (ecmascript)"));
low.registerLanguage('tap', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/tap.js [app-client] (ecmascript)"));
low.registerLanguage('tcl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/tcl.js [app-client] (ecmascript)"));
low.registerLanguage('thrift', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/thrift.js [app-client] (ecmascript)"));
low.registerLanguage('tp', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/tp.js [app-client] (ecmascript)"));
low.registerLanguage('twig', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/twig.js [app-client] (ecmascript)"));
low.registerLanguage('typescript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/typescript.js [app-client] (ecmascript)"));
low.registerLanguage('vala', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/vala.js [app-client] (ecmascript)"));
low.registerLanguage('vbnet', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/vbnet.js [app-client] (ecmascript)"));
low.registerLanguage('vbscript', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/vbscript.js [app-client] (ecmascript)"));
low.registerLanguage('vbscript-html', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/vbscript-html.js [app-client] (ecmascript)"));
low.registerLanguage('verilog', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/verilog.js [app-client] (ecmascript)"));
low.registerLanguage('vhdl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/vhdl.js [app-client] (ecmascript)"));
low.registerLanguage('vim', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/vim.js [app-client] (ecmascript)"));
low.registerLanguage('x86asm', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/x86asm.js [app-client] (ecmascript)"));
low.registerLanguage('xl', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/xl.js [app-client] (ecmascript)"));
low.registerLanguage('xquery', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/xquery.js [app-client] (ecmascript)"));
low.registerLanguage('zephir', __turbopack_context__.r("[project]/mentor_main/node_modules/highlight.js/lib/languages/zephir.js [app-client] (ecmascript)"));
}),
"[project]/mentor_main/node_modules/character-entities-legacy/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of legacy HTML named character references that don’t need a trailing semicolon.
 *
 * @type {Array<string>}
 */ __turbopack_context__.s([
    "characterEntitiesLegacy",
    ()=>characterEntitiesLegacy
]);
const characterEntitiesLegacy = [
    'AElig',
    'AMP',
    'Aacute',
    'Acirc',
    'Agrave',
    'Aring',
    'Atilde',
    'Auml',
    'COPY',
    'Ccedil',
    'ETH',
    'Eacute',
    'Ecirc',
    'Egrave',
    'Euml',
    'GT',
    'Iacute',
    'Icirc',
    'Igrave',
    'Iuml',
    'LT',
    'Ntilde',
    'Oacute',
    'Ocirc',
    'Ograve',
    'Oslash',
    'Otilde',
    'Ouml',
    'QUOT',
    'REG',
    'THORN',
    'Uacute',
    'Ucirc',
    'Ugrave',
    'Uuml',
    'Yacute',
    'aacute',
    'acirc',
    'acute',
    'aelig',
    'agrave',
    'amp',
    'aring',
    'atilde',
    'auml',
    'brvbar',
    'ccedil',
    'cedil',
    'cent',
    'copy',
    'curren',
    'deg',
    'divide',
    'eacute',
    'ecirc',
    'egrave',
    'eth',
    'euml',
    'frac12',
    'frac14',
    'frac34',
    'gt',
    'iacute',
    'icirc',
    'iexcl',
    'igrave',
    'iquest',
    'iuml',
    'laquo',
    'lt',
    'macr',
    'micro',
    'middot',
    'nbsp',
    'not',
    'ntilde',
    'oacute',
    'ocirc',
    'ograve',
    'ordf',
    'ordm',
    'oslash',
    'otilde',
    'ouml',
    'para',
    'plusmn',
    'pound',
    'quot',
    'raquo',
    'reg',
    'sect',
    'shy',
    'sup1',
    'sup2',
    'sup3',
    'szlig',
    'thorn',
    'times',
    'uacute',
    'ucirc',
    'ugrave',
    'uml',
    'uuml',
    'yacute',
    'yen',
    'yuml'
];
}),
"[project]/mentor_main/node_modules/character-reference-invalid/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Map of invalid numeric character references to their replacements, according to HTML.
 *
 * @type {Record<number, string>}
 */ __turbopack_context__.s([
    "characterReferenceInvalid",
    ()=>characterReferenceInvalid
]);
const characterReferenceInvalid = {
    0: '�',
    128: '€',
    130: '‚',
    131: 'ƒ',
    132: '„',
    133: '…',
    134: '†',
    135: '‡',
    136: 'ˆ',
    137: '‰',
    138: 'Š',
    139: '‹',
    140: 'Œ',
    142: 'Ž',
    145: '‘',
    146: '’',
    147: '“',
    148: '”',
    149: '•',
    150: '–',
    151: '—',
    152: '˜',
    153: '™',
    154: 'š',
    155: '›',
    156: 'œ',
    158: 'ž',
    159: 'Ÿ'
};
}),
"[project]/mentor_main/node_modules/is-decimal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the given character code, or the character code at the first
 * character, is decimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is a decimal
 */ __turbopack_context__.s([
    "isDecimal",
    ()=>isDecimal
]);
function isDecimal(character) {
    const code = typeof character === 'string' ? character.charCodeAt(0) : character;
    return code >= 48 && code <= 57 /* 0-9 */ ;
}
}),
"[project]/mentor_main/node_modules/is-hexadecimal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the given character code, or the character code at the first
 * character, is hexadecimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is hexadecimal
 */ __turbopack_context__.s([
    "isHexadecimal",
    ()=>isHexadecimal
]);
function isHexadecimal(character) {
    const code = typeof character === 'string' ? character.charCodeAt(0) : character;
    return code >= 97 /* a */  && code <= 102 || code >= 65 /* A */  && code <= 70 || code >= 48 /* A */  && code <= 57;
}
}),
"[project]/mentor_main/node_modules/is-alphabetical/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the given character code, or the character code at the first
 * character, is alphabetical.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is alphabetical.
 */ __turbopack_context__.s([
    "isAlphabetical",
    ()=>isAlphabetical
]);
function isAlphabetical(character) {
    const code = typeof character === 'string' ? character.charCodeAt(0) : character;
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
}),
"[project]/mentor_main/node_modules/is-alphanumerical/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAlphanumerical",
    ()=>isAlphanumerical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$alphabetical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/is-alphabetical/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$decimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/is-decimal/index.js [app-client] (ecmascript)");
;
;
function isAlphanumerical(character) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$alphabetical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAlphabetical"])(character) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$decimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDecimal"])(character);
}
}),
"[project]/mentor_main/node_modules/parse-entities/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Point} from 'unist'
 * @import {Options} from '../index.js'
 */ __turbopack_context__.s([
    "parseEntities",
    ()=>parseEntities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$character$2d$entities$2d$legacy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/character-entities-legacy/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$character$2d$reference$2d$invalid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/character-reference-invalid/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$decimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/is-decimal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$hexadecimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/is-hexadecimal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$alphanumerical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/is-alphanumerical/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/decode-named-character-reference/index.dom.js [app-client] (ecmascript)");
;
;
;
;
;
;
// Warning messages.
const messages = [
    '',
    /* 1: Non terminated (named) */ 'Named character references must be terminated by a semicolon',
    /* 2: Non terminated (numeric) */ 'Numeric character references must be terminated by a semicolon',
    /* 3: Empty (named) */ 'Named character references cannot be empty',
    /* 4: Empty (numeric) */ 'Numeric character references cannot be empty',
    /* 5: Unknown (named) */ 'Named character references must be known',
    /* 6: Disallowed (numeric) */ 'Numeric character references cannot be disallowed',
    /* 7: Prohibited (numeric) */ 'Numeric character references cannot be outside the permissible Unicode range'
];
function parseEntities(value, options) {
    const settings = options || {};
    const additional = typeof settings.additional === 'string' ? settings.additional.charCodeAt(0) : settings.additional;
    /** @type {Array<string>} */ const result = [];
    let index = 0;
    let lines = -1;
    let queue = '';
    /** @type {Point | undefined} */ let point;
    /** @type {Array<number>|undefined} */ let indent;
    if (settings.position) {
        if ('start' in settings.position || 'indent' in settings.position) {
            // @ts-expect-error: points don’t have indent.
            indent = settings.position.indent;
            // @ts-expect-error: points don’t have indent.
            point = settings.position.start;
        } else {
            point = settings.position;
        }
    }
    let line = (point ? point.line : 0) || 1;
    let column = (point ? point.column : 0) || 1;
    // Cache the current point.
    let previous = now();
    /** @type {number|undefined} */ let character;
    // Ensure the algorithm walks over the first character (inclusive).
    index--;
    while(++index <= value.length){
        // If the previous character was a newline.
        if (character === 10 /* `\n` */ ) {
            column = (indent ? indent[lines] : 0) || 1;
        }
        character = value.charCodeAt(index);
        if (character === 38 /* `&` */ ) {
            const following = value.charCodeAt(index + 1);
            // The behavior depends on the identity of the next character.
            if (following === 9 /* `\t` */  || following === 10 /* `\n` */  || following === 12 /* `\f` */  || following === 32 /* ` ` */  || following === 38 /* `&` */  || following === 60 /* `<` */  || Number.isNaN(following) || additional && following === additional) {
                // Not a character reference.
                // No characters are consumed, and nothing is returned.
                // This is not an error, either.
                queue += String.fromCharCode(character);
                column++;
                continue;
            }
            const start = index + 1;
            let begin = start;
            let end = start;
            /** @type {string} */ let type;
            if (following === 35 /* `#` */ ) {
                // Numerical reference.
                end = ++begin;
                // The behavior further depends on the next character.
                const following = value.charCodeAt(end);
                if (following === 88 /* `X` */  || following === 120 /* `x` */ ) {
                    // ASCII hexadecimal digits.
                    type = 'hexadecimal';
                    end = ++begin;
                } else {
                    // ASCII decimal digits.
                    type = 'decimal';
                }
            } else {
                // Named reference.
                type = 'named';
            }
            let characterReferenceCharacters = '';
            let characterReference = '';
            let characters = '';
            // Each type of character reference accepts different characters.
            // This test is used to detect whether a reference has ended (as the semicolon
            // is not strictly needed).
            const test = type === 'named' ? __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$alphanumerical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAlphanumerical"] : type === 'decimal' ? __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$decimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDecimal"] : __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$hexadecimal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexadecimal"];
            end--;
            while(++end <= value.length){
                const following = value.charCodeAt(end);
                if (!test(following)) {
                    break;
                }
                characters += String.fromCharCode(following);
                // Check if we can match a legacy named reference.
                // If so, we cache that as the last viable named reference.
                // This ensures we do not need to walk backwards later.
                if (type === 'named' && __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$character$2d$entities$2d$legacy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterEntitiesLegacy"].includes(characters)) {
                    characterReferenceCharacters = characters;
                    // @ts-expect-error: always able to decode.
                    characterReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])(characters);
                }
            }
            let terminated = value.charCodeAt(end) === 59 /* `;` */ ;
            if (terminated) {
                end++;
                const namedReference = type === 'named' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])(characters) : false;
                if (namedReference) {
                    characterReferenceCharacters = characters;
                    characterReference = namedReference;
                }
            }
            let diff = 1 + end - start;
            let reference = '';
            if (!terminated && settings.nonTerminated === false) {
            // Empty.
            } else if (!characters) {
                // An empty (possible) reference is valid, unless it’s numeric (thus an
                // ampersand followed by an octothorp).
                if (type !== 'named') {
                    warning(4 /* Empty (numeric) */ , diff);
                }
            } else if (type === 'named') {
                // An ampersand followed by anything unknown, and not terminated, is
                // invalid.
                if (terminated && !characterReference) {
                    warning(5 /* Unknown (named) */ , 1);
                } else {
                    // If there’s something after an named reference which is not known,
                    // cap the reference.
                    if (characterReferenceCharacters !== characters) {
                        end = begin + characterReferenceCharacters.length;
                        diff = 1 + end - begin;
                        terminated = false;
                    }
                    // If the reference is not terminated, warn.
                    if (!terminated) {
                        const reason = characterReferenceCharacters ? 1 /* Non terminated (named) */  : 3 /* Empty (named) */ ;
                        if (settings.attribute) {
                            const following = value.charCodeAt(end);
                            if (following === 61 /* `=` */ ) {
                                warning(reason, diff);
                                characterReference = '';
                            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$is$2d$alphanumerical$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAlphanumerical"])(following)) {
                                characterReference = '';
                            } else {
                                warning(reason, diff);
                            }
                        } else {
                            warning(reason, diff);
                        }
                    }
                }
                reference = characterReference;
            } else {
                if (!terminated) {
                    // All nonterminated numeric references are not rendered, and emit a
                    // warning.
                    warning(2 /* Non terminated (numeric) */ , diff);
                }
                // When terminated and numerical, parse as either hexadecimal or
                // decimal.
                let referenceCode = Number.parseInt(characters, type === 'hexadecimal' ? 16 : 10);
                // Emit a warning when the parsed number is prohibited, and replace with
                // replacement character.
                if (prohibited(referenceCode)) {
                    warning(7 /* Prohibited (numeric) */ , diff);
                    reference = String.fromCharCode(65533 /* `�` */ );
                } else if (referenceCode in __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$character$2d$reference$2d$invalid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterReferenceInvalid"]) {
                    // Emit a warning when the parsed number is disallowed, and replace by
                    // an alternative.
                    warning(6 /* Disallowed (numeric) */ , diff);
                    reference = __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$character$2d$reference$2d$invalid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characterReferenceInvalid"][referenceCode];
                } else {
                    // Parse the number.
                    let output = '';
                    // Emit a warning when the parsed number should not be used.
                    if (disallowed(referenceCode)) {
                        warning(6 /* Disallowed (numeric) */ , diff);
                    }
                    // Serialize the number.
                    if (referenceCode > 0xffff) {
                        referenceCode -= 0x10000;
                        output += String.fromCharCode(referenceCode >>> (10 & 0x3ff) | 0xd800);
                        referenceCode = 0xdc00 | referenceCode & 0x3ff;
                    }
                    reference = output + String.fromCharCode(referenceCode);
                }
            }
            // Found it!
            // First eat the queued characters as normal text, then eat a reference.
            if (reference) {
                flush();
                previous = now();
                index = end - 1;
                column += end - start + 1;
                result.push(reference);
                const next = now();
                next.offset++;
                if (settings.reference) {
                    settings.reference.call(settings.referenceContext || undefined, reference, {
                        start: previous,
                        end: next
                    }, value.slice(start - 1, end));
                }
                previous = next;
            } else {
                // If we could not find a reference, queue the checked characters (as
                // normal characters), and move the pointer to their end.
                // This is possible because we can be certain neither newlines nor
                // ampersands are included.
                characters = value.slice(start - 1, end);
                queue += characters;
                column += characters.length;
                index = end - 1;
            }
        } else {
            // Handle anything other than an ampersand, including newlines and EOF.
            if (character === 10 /* `\n` */ ) {
                line++;
                lines++;
                column = 0;
            }
            if (Number.isNaN(character)) {
                flush();
            } else {
                queue += String.fromCharCode(character);
                column++;
            }
        }
    }
    // Return the reduced nodes.
    return result.join('');
    //TURBOPACK unreachable
    ;
    // Get current position.
    function now() {
        return {
            line,
            column,
            offset: index + ((point ? point.offset : 0) || 0)
        };
    }
    /**
   * Handle the warning.
   *
   * @param {1|2|3|4|5|6|7} code
   * @param {number} offset
   */ function warning(code, offset) {
        /** @type {ReturnType<now>} */ let position;
        if (settings.warning) {
            position = now();
            position.column += offset;
            position.offset += offset;
            settings.warning.call(settings.warningContext || undefined, messages[code], position, code);
        }
    }
    /**
   * Flush `queue` (normal text).
   * Macro invoked before each reference and at the end of `value`.
   * Does nothing when `queue` is empty.
   */ function flush() {
        if (queue) {
            result.push(queue);
            if (settings.text) {
                settings.text.call(settings.textContext || undefined, queue, {
                    start: previous,
                    end: now()
                });
            }
            queue = '';
        }
    }
}
/**
 * Check if `character` is outside the permissible unicode range.
 *
 * @param {number} code
 * @returns {boolean}
 */ function prohibited(code) {
    return code >= 0xd800 && code <= 0xdfff || code > 0x10ffff;
}
/**
 * Check if `character` is disallowed.
 *
 * @param {number} code
 * @returns {boolean}
 */ function disallowed(code) {
    return code >= 0x0001 && code <= 0x0008 || code === 0x000b || code >= 0x000d && code <= 0x001f || code >= 0x007f && code <= 0x009f || code >= 0xfdd0 && code <= 0xfdef || (code & 0xffff) === 0xffff || (code & 0xffff) === 0xfffe;
}
}),
]);

//# sourceMappingURL=ad0da_6f66983d._.js.map