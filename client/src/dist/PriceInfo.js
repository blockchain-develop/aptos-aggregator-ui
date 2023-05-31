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
var jsbi_1 = require("jsbi");
var utils_1 = require("./utils");
var Fees_1 = require("./Fees");
var TransactionFee_1 = require("./TransactionFee");
var ExchangeRate_1 = require("./ExchangeRate");
var PriceInfo = /** @class */ (function (_super) {
    __extends(PriceInfo, _super);
    function PriceInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PriceInfo.prototype.otherAmountThresholdText = function (selectedSwapRoute, toTokenInfo) {
        if (selectedSwapRoute === null || selectedSwapRoute === void 0 ? void 0 : selectedSwapRoute.otherAmountThreshold) {
            var amount = new decimal_js_1["default"](selectedSwapRoute.otherAmountThreshold.toString()).div(Math.pow(10, toTokenInfo.decimals));
            var amountText = utils_1.formatNumber.format(amount.toNumber());
            return amountText + " " + toTokenInfo.symbol;
        }
        return '-';
    };
    PriceInfo.prototype.render = function () {
        var _a, _b;
        var selectedSwapRoute = this.props.selectedSwapRoute;
        var fromTokenInfo = this.props.fromTokenInfo;
        var toTokenInfo = this.props.toTokenInfo;
        var routes = this.props.routes;
        var rateParams = {
            inAmount: (selectedSwapRoute === null || selectedSwapRoute === void 0 ? void 0 : selectedSwapRoute.inAmount) || ((_a = routes === null || routes === void 0 ? void 0 : routes[0]) === null || _a === void 0 ? void 0 : _a.inAmount) || utils_1.ZERO,
            inputDecimal: fromTokenInfo.decimals,
            outAmount: (selectedSwapRoute === null || selectedSwapRoute === void 0 ? void 0 : selectedSwapRoute.outAmount) || ((_b = routes === null || routes === void 0 ? void 0 : routes[0]) === null || _b === void 0 ? void 0 : _b.outAmount) || utils_1.ZERO,
            outputDecimal: toTokenInfo.decimals
        };
        var priceImpact = utils_1.formatNumber.format(new decimal_js_1["default"]((selectedSwapRoute === null || selectedSwapRoute === void 0 ? void 0 : selectedSwapRoute.priceImpactPct) || 0).mul(100).toDP(4).toNumber());
        var priceImpactText = Number(priceImpact) < 0.1 ? "< " + utils_1.formatNumber.format(0.1) + "%" : "~ " + priceImpact + "%";
        var showFullDetails = this.props.showFullDetails;
        var priorityFeeInSOL = 1;
        return (React.createElement("div", { className: 'mt-4 space-y-4 border border-white/5 rounded-xl p-3' },
            React.createElement("div", { className: "flex items-center justify-between text-xs" },
                React.createElement("div", { className: "text-white/30" }, React.createElement("span", null, "Rate")),
                jsbi_1["default"].greaterThan(rateParams.inAmount, utils_1.ZERO) && jsbi_1["default"].greaterThan(rateParams.outAmount, utils_1.ZERO) ? (React.createElement(ExchangeRate_1["default"], { rateParams: rateParams, fromTokenInfo: fromTokenInfo, toTokenInfo: toTokenInfo, reversible: true })) : (React.createElement("span", { className: "text-white/30" }, '-'))),
            React.createElement("div", { className: "flex items-center justify-between text-xs text-white/30" },
                React.createElement("div", null,
                    React.createElement("span", null, "Price Impact")),
                React.createElement("div", null, priceImpactText)),
            React.createElement("div", { className: "flex items-center justify-between text-xs" },
                React.createElement("div", { className: "text-white/30" }, (selectedSwapRoute === null || selectedSwapRoute === void 0 ? void 0 : selectedSwapRoute.swapMode) === 0 ? (React.createElement("span", null, "Minimum Received")) : (React.createElement("span", null, "Maximum Consumed"))),
                React.createElement("div", { className: "text-white/30" }, this.otherAmountThresholdText(selectedSwapRoute, toTokenInfo))),
            showFullDetails ? (React.createElement(React.Fragment, null,
                React.createElement(Fees_1["default"], { marketInfos: [], tokens: new Map() }),
                React.createElement(TransactionFee_1["default"], { feeInformation: 1 }),
                priorityFeeInSOL > 0 ? (React.createElement("div", { className: "flex items-center justify-between text-xs" },
                    React.createElement("div", { className: "text-white/30" }, "Priority Fee"),
                    React.createElement("div", { className: "text-white/30" }, new decimal_js_1["default"](priorityFeeInSOL).toString()))) : null)) : null));
    };
    return PriceInfo;
}(React.Component));
exports["default"] = PriceInfo;
