"use strict";
exports.__esModule = true;
exports.formatNumber = exports.numberFormatter = exports.toLamports = exports.fromLamports = exports.ZERO = void 0;
var jsbi_1 = require("jsbi");
var decimal_js_1 = require("decimal.js");
var bn_js_1 = require("bn.js");
exports.ZERO = jsbi_1["default"].BigInt(0);
function fromLamports(lamportsAmount, decimals, rate) {
    if (rate === void 0) { rate = 1.0; }
    if (!lamportsAmount) {
        return 0;
    }
    var amount = bn_js_1["default"].isBN(lamportsAmount) ? lamportsAmount : lamportsAmount;
    var base = 10;
    var precision = new decimal_js_1["default"](base).pow(decimals !== null && decimals !== void 0 ? decimals : 6);
    return new decimal_js_1["default"](amount.toString()).div(precision).mul(rate).toNumber();
}
exports.fromLamports = fromLamports;
function toLamports(lamportsAmount, decimals) {
    var amount = bn_js_1["default"].isBN(lamportsAmount) ? lamportsAmount.toNumber() : Number(lamportsAmount);
    if (Number.isNaN(amount)) {
        amount = 0;
    }
    var precision = Math.pow(10, decimals);
    return Math.floor(amount * precision);
}
exports.toLamports = toLamports;
var userLocale = typeof window !== 'undefined'
    ? navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language
    : 'en-US';
exports.numberFormatter = new Intl.NumberFormat(userLocale, {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 9
});
exports.formatNumber = {
    format: function (val, precision) {
        if (!val && val !== 0) {
            return '--';
        }
        if (precision !== undefined) {
            return val.toFixed(precision);
        }
        else {
            return exports.numberFormatter.format(val);
        }
    }
};
