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
var Tooltip_1 = require("./Tooltip");
var TransactionFee = /** @class */ (function (_super) {
    __extends(TransactionFee, _super);
    function TransactionFee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionFee.prototype.feeText = function (feeInformation) {
        if (feeInformation) {
            return utils_1.formatNumber.format(utils_1.fromLamports(feeInformation, 9));
        }
        return '-';
    };
    TransactionFee.prototype.render = function () {
        var feeInformation = this.props.feeInformation;
        return (React.createElement("div", { className: "flex items-center justify-between text-xs" },
            React.createElement("div", { className: "flex w-[50%] text-white/30" },
                React.createElement("span", null, "Transaction Fee"),
                React.createElement(Tooltip_1["default"], { content: React.createElement("span", null, "This is for Solana transaction fee") },
                    React.createElement("span", { className: "ml-1 cursor-pointer" }, "[?]"))),
            React.createElement("div", { className: "text-white/30" },
                this.feeText(feeInformation),
                " SOL")));
    };
    return TransactionFee;
}(React.Component));
exports["default"] = TransactionFee;
