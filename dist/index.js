"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    SortOrder: function() {
        return SortOrder;
    },
    changeA: function() {
        return changeA;
    },
    changeN: function() {
        return changeN;
    },
    changeO: function() {
        return changeO;
    },
    extract: function() {
        return extract;
    },
    extractA: function() {
        return extractA;
    },
    get: function() {
        return get;
    },
    getKeyVal: function() {
        return getKeyVal;
    },
    sort: function() {
        return sort;
    }
});
module.exports = __toCommonJS(src_exports);
// src/helpers/enum.ts
var SortOrder = /* @__PURE__ */ function(SortOrder2) {
    SortOrder2[SortOrder2["ASC"] = 1] = "ASC";
    SortOrder2[SortOrder2["DESC"] = 2] = "DESC";
    return SortOrder2;
}(SortOrder || {});
// src/helpers/utils.ts
var extract = function(keys) {
    return function(obj) {
        return Object.fromEntries(Object.entries(keys.reduce(function(ob, key) {
            return _object_spread_props(_object_spread({}, ob), _define_property({}, key, obj[key]));
        }, {})).filter(function(param) {
            var _param = _sliced_to_array(param, 2), _ = _param[0], value = _param[1];
            return value !== void 0;
        }));
    };
};
var changeN = function(key, callback, newKey) {
    return function(obj) {
        return _object_spread_props(_object_spread({}, obj), _define_property({}, newKey !== null && newKey !== void 0 ? newKey : key, callback(obj[key])));
    };
};
var changeO = function(newKey, callback) {
    return function(obj) {
        return _object_spread_props(_object_spread({}, obj), _define_property({}, newKey, callback(obj)));
    };
};
var extractA = function(arr, keys) {
    return arr.map(extract(keys));
};
var changeA = function(arr, newKey, callback) {
    return arr.map(changeO(newKey, callback));
};
var sort = function(arr, key) {
    var order = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1 /* ASC */ ;
    return arr.sort(function(a, b) {
        return (order === 1 /* ASC */  ? a[key] > b[key] : a[key] < b[key]) ? 1 : -1;
    });
};
var getKeyValue = function(currentObject, currentKey) {
    return currentObject !== void 0 && (currentObject === null || currentObject === void 0 ? void 0 : currentObject[currentKey]) ? currentObject === null || currentObject === void 0 ? void 0 : currentObject[currentKey] : void 0;
};
var get = function(obj, path) {
    var _path_split;
    return (_path_split = path.split(".")) === null || _path_split === void 0 ? void 0 : _path_split.reduce(getKeyValue, obj);
};
var getKeyVal = function(ob, key) {
    return ob && typeof ob === "object" && key in ob ? ob[key] : typeof ob === "object" ? Object.values(ob).reduce(function(acc, val) {
        return acc || getKeyVal(val, key);
    }, void 0) : void 0;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    SortOrder: SortOrder,
    changeA: changeA,
    changeN: changeN,
    changeO: changeO,
    extract: extract,
    extractA: extractA,
    get: get,
    getKeyVal: getKeyVal,
    sort: sort
});
//# sourceMappingURL=index.js.map