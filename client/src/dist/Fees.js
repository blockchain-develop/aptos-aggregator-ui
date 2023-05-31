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
var utils_1 = require("./utils");
var decimal_js_1 = require("decimal.js");
var Fees = /** @class */ (function (_super) {
    __extends(Fees, _super);
    function Fees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fees.prototype.render = function () {
        var marketInfos = this.props.marketInfos;
        var tokens = this.props.tokens;
        return (React.createElement(React.Fragment, null, marketInfos.map(function (item, idx) {
            var _a;
            var tokenMint = tokens.get(item.feeToken);
            var decimals = (_a = tokenMint === null || tokenMint === void 0 ? void 0 : tokenMint.decimals) !== null && _a !== void 0 ? _a : 6;
            var feeAmount = utils_1.formatNumber.format(new decimal_js_1["default"](item.feeAmount.toString()).div(Math.pow(10, decimals)).toNumber());
            return (React.createElement("div", { key: idx, className: "flex items-center space-x-4 justify-between text-xs" },
                React.createElement("div", { className: "text-white/30" },
                    React.createElement("span", null,
                        React.createElement("span", null,
                            "Fees paid to ",
                            React.createElement("span", { translate: "no" }, item.label),
                            " LP"))),
                React.createElement("div", { className: "text-white/30 text-right" },
                    feeAmount,
                    " ", tokenMint === null || tokenMint === void 0 ? void 0 :
                    tokenMint.symbol,
                    " (",
                    utils_1.formatNumber.format(new decimal_js_1["default"](item.feePct).mul(100).toNumber()),
                    "%)")));
        })));
    };
    return Fees;
}(React.Component));
exports["default"] = Fees;
