"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var decimal_js_1 = require("decimal.js");
function precisionTick(value) {
    var firstSD = decimal_js_1["default"].abs(decimal_js_1["default"].ceil(new decimal_js_1["default"](-1).mul(decimal_js_1["default"].log10(value)))).toNumber();
    var _a = [
        new decimal_js_1["default"](value).toFixed().slice(0, firstSD + 2),
        new decimal_js_1["default"](value).toFixed().slice(firstSD + 1),
    ], prefix = _a[0], suffix = _a[1];
    return [firstSD, prefix, suffix];
}
function generateSubscriptNumbers(x) {
    var subscriptNumbers = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
    var xString = x.toString();
    var result = '';
    for (var i = 0; i < xString.length; i++) {
        var digit = parseInt(xString.charAt(i), 10);
        var subscriptNumber = subscriptNumbers[digit];
        result += subscriptNumber;
    }
    return result;
}
var PrecisionTickSize = /** @class */ (function (_super) {
    __extends(PrecisionTickSize, _super);
    function PrecisionTickSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrecisionTickSize.prototype.render = function () {
        var value = this.props.value;
        var maxSuffix = this.props.maxSuffix;
        var _a = precisionTick(value), firstSD = _a[0], _ = _a[1], suffix = _a[2];
        return (React.createElement("span", { className: 'flex items-center h-4' },
            "0.0",
            React.createElement("span", { className: 'mb-3 text-xl mx-0.5' }, generateSubscriptNumbers(firstSD - 1)),
            suffix.slice(0, maxSuffix)));
    };
    return PrecisionTickSize;
}(React.Component));
exports["default"] = PrecisionTickSize;
