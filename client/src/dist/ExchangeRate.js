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
exports.calculateRate = void 0;
var React = require("react");
var decimal_js_1 = require("decimal.js");
var utils_1 = require("./utils");
var PrecisionTickSize_1 = require("./PrecisionTickSize");
exports.calculateRate = function (_a, reverse) {
    var inAmount = _a.inAmount, inputDecimal = _a.inputDecimal, outAmount = _a.outAmount, outputDecimal = _a.outputDecimal;
    var input = utils_1.fromLamports(inAmount, inputDecimal);
    var output = utils_1.fromLamports(outAmount, outputDecimal);
    var rate = !reverse ? new decimal_js_1["default"](input).div(output) : new decimal_js_1["default"](output).div(input);
    if (Number.isNaN(rate.toNumber())) {
        return new decimal_js_1["default"](0);
    }
    return rate;
};
var ApproxSVG = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 16 : _b, _c = _a.height, height = _c === void 0 ? 16 : _c;
    return (React.createElement("svg", { width: width, height: height, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10.8573 8.18429L13.6323 5.95933L10.8573 3.73438V5.31937H3.32735V6.59937H10.8573V8.18429ZM5.14223 7.81429L2.36719 10.0393L5.14223 12.2642V10.6792H12.6722V9.39922H5.14223V7.81429Z", fill: "#777777" })));
};
var ExchangeRate = /** @class */ (function (_super) {
    __extends(ExchangeRate, _super);
    function ExchangeRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExchangeRate.prototype.onReverse = function () {
    };
    ExchangeRate.prototype.render = function () {
        var reverse = this.props.reversible;
        var fromTokenInfo = this.props.fromTokenInfo;
        var toTokenInfo = this.props.toTokenInfo;
        var rateParams = this.props.rateParams;
        var reversible = this.props.reversible;
        var rate = exports.calculateRate(rateParams, true);
        return (React.createElement("div", { className: 'flex cursor-pointer text-white/30 text-xs align-center', onClick: this.onReverse },
            React.createElement("span", { className: 'max-w-full flex whitespace-nowrap' }, reverse ? (React.createElement(React.Fragment, null,
                "1 ",
                fromTokenInfo.symbol,
                " \u2248",
                React.createElement("div", { className: 'flex ml-0.5' }, rate.gt(0.00001) ?
                    (utils_1.formatNumber.format(rate.toNumber()) + " " + toTokenInfo.symbol)
                    : (React.createElement(React.Fragment, null,
                        React.createElement(PrecisionTickSize_1["default"], { value: rate.toNumber(), maxSuffix: 6 }),
                        " ",
                        toTokenInfo.symbol))))) : (React.createElement(React.Fragment, null,
                "1 ",
                toTokenInfo.symbol,
                " \u2248",
                React.createElement("div", { className: 'flex ml-0.5' }, rate.gt(0.00001) ?
                    (utils_1.formatNumber.format(rate.toNumber()) + " " + fromTokenInfo.symbol)
                    : (React.createElement(React.Fragment, null,
                        React.createElement(PrecisionTickSize_1["default"], { value: rate.toNumber(), maxSuffix: 6 }),
                        " ",
                        fromTokenInfo.symbol)))))),
            reversible ? (React.createElement("div", { className: 'ml-2' },
                React.createElement(ApproxSVG, null))) : null));
    };
    return ExchangeRate;
}(React.Component));
exports["default"] = ExchangeRate;
