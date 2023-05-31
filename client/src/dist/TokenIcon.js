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
var TokenIcon = /** @class */ (function (_super) {
    __extends(TokenIcon, _super);
    function TokenIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TokenIcon.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, tokenInfo = _a.tokenInfo;
        return (React.createElement("div", { className: "text-xs flex items-center justify-center rounded-full overflow-hidden", style: { width: width, height: height } }, tokenInfo ? (React.createElement("img", { src: tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.logoURI, alt: tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.symbol, width: width, height: height })) : (React.createElement("div", { className: "items-center justify-center rounded-full overflow-hidden bg-black/20", style: { width: width, height: height } }))));
    };
    return TokenIcon;
}(React.Component));
exports["default"] = TokenIcon;
