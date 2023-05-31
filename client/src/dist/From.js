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
exports.RoutesSVG = void 0;
var React = require("react");
var TokenIcon_1 = require("./TokenIcon");
var react_number_format_1 = require("react-number-format");
var JupButton_1 = require("./JupButton");
var PriceInfo_1 = require("./PriceInfo");
var SexyChameleonText = function (_a) {
    var children = _a.children, className = _a.className;
    var baseClass = 'text-transparent bg-clip-text bg-gradient-to-r from-[rgba(252,192,10,1)] to-[rgba(78,186,233,1)] dark:bg-200-auto dark:bg-jupiter-gradient-alternative animate-hue dark:animate-shine';
    var classes = [baseClass, className].join(' ');
    return React.createElement("span", { className: classes }, children);
};
var ChevronDownIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement("svg", { className: className, width: "10", height: "6", viewBox: "0 0 10 6", fill: "inherit", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z", fill: "currentColor" })));
};
var IconSwitchPairDark = function () { return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M9.04393 5.74021L12 3.3701L9.04393 1V2.68839H1.0228V4.05189H9.04393V5.74021ZM2.95607 5.34607L0 7.71617L2.95607 10.0863V8.39789H10.9772V7.03439H2.95607V5.34607Z", fill: "white", fillOpacity: "0.5" }))); };
var SwitchPairButton = function (_a) {
    var className = _a.className, onClick = _a.onClick, disabled = _a.disabled;
    return (React.createElement("div", { className: "flex justify-center" },
        React.createElement("div", { onClick: onClick, className: "border border-black/50 fill-current text-black bg-black/10 dark:text-white-35 dark:hover:text-white/50 dark:border dark:border-white-35 dark:hover:border-white/50 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer " + (disabled ? 'opacity-50 cursor-not-allowed' : '') + " " + className },
            React.createElement("div", { className: "block -rotate-45" },
                React.createElement(IconSwitchPairDark, null)))));
};
exports.RoutesSVG = function (_a) {
    var _b = _a.width, width = _b === void 0 ? '20' : _b, _c = _a.height, height = _c === void 0 ? '20' : _c;
    return (React.createElement("svg", { width: width, height: height, viewBox: "0 0 7 9", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M2.11894 4.99859H4.79173C5.96242 4.99859 6.92699 4.04958 6.94255 2.89521C6.94255 1.72452 5.97798 0.791834 4.79173 0.791834L2.75212 0.791092C2.54675 0.332152 2.08781 0 1.5503 0C0.822978 0 0.237252 0.601291 0.237252 1.31305C0.237252 2.0248 0.838542 2.62609 1.5503 2.62609C2.10414 2.62609 2.56232 2.29394 2.75212 1.835H4.79248C5.40934 1.835 5.91573 2.34139 5.91573 2.91079C5.91573 3.4802 5.40934 3.98659 4.79248 3.98659H2.15083C0.980134 3.98659 0.0155637 4.93559 0 6.08997C0 7.27622 0.964571 8.19334 2.15083 8.19334H4.34911C4.55447 8.65228 5.01341 9 5.55093 9C6.27825 9 6.86398 8.39871 6.86398 7.68695C6.86398 6.95964 6.26269 6.37391 5.55093 6.37391C4.99709 6.37391 4.53891 6.70606 4.34911 7.165L2.13527 7.16574C1.51841 7.16574 1.01202 6.65935 1.01202 6.08995C1.01202 5.50498 1.50209 5.01415 2.11894 4.99859Z", fill: "white", fillOpacity: "0.5" })));
};
var From = /** @class */ (function (_super) {
    __extends(From, _super);
    function From() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    From.prototype.onClickSelectFromMint = function () {
    };
    From.prototype.onChangeFromValue = function (value) {
    };
    From.prototype.onClickSwitchPair = function () {
    };
    From.prototype.onClickSelectToMint = function () {
    };
    From.prototype.onChangeToValue = function (value) {
    };
    From.prototype.setShowRouteSelector = function (x) {
    };
    From.prototype.onConnectWallet = function () {
    };
    From.prototype.onSubmit = function () {
    };
    From.prototype.render = function () {
        var _this = this;
        var fromTokenInfo = {
            name: "usdc",
            symbol: "USDC",
            decimals: 6,
            logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CpMah17kQEL2wqyMKt3mZBdTnZbkbfx4nqmQMFDP5vwp/logo.png"
        };
        var toTokenInfo = {
            name: "usdc",
            symbol: "USDC",
            decimals: 6,
            logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CpMah17kQEL2wqyMKt3mZBdTnZbkbfx4nqmQMFDP5vwp/logo.png"
        };
        var routes;
        routes = [];
        var marketRoutes = "";
        var walletPublicKey = "";
        var selectedSwapRoute = routes[0];
        return (React.createElement("div", { className: "h-full flex flex-col items-center justify-center pb-4" },
            React.createElement("div", { className: "w-full mt-2 rounded-xl flex flex-col px-2" },
                React.createElement("div", { className: "flex-col" },
                    React.createElement("div", { className: "border-b border-transparent bg-[#212128] rounded-xl transition-all" },
                        React.createElement("div", { className: "px-x border-transparent rounded-xl " },
                            React.createElement("div", null,
                                React.createElement("div", { className: "py-5 px-4 flex flex-col dark:text-white" },
                                    React.createElement("div", { className: "flex justify-between items-center" },
                                        React.createElement("button", { type: "button", className: "py-2 px-3 rounded-2xl flex items-center bg-[#36373E] hover:bg-white/20 text-white", disabled: false, onClick: this.onClickSelectFromMint },
                                            React.createElement("div", { className: "h-5 w-5" },
                                                React.createElement(TokenIcon_1["default"], { tokenInfo: fromTokenInfo, width: 20, height: 20 })),
                                            React.createElement("div", { className: "ml-4 mr-2 font-semibold", translate: "no" }, fromTokenInfo === null || fromTokenInfo === void 0 ? void 0 : fromTokenInfo.symbol),
                                            React.createElement("span", { className: "text-white/25 fill-current" },
                                                React.createElement(ChevronDownIcon, null))),
                                        React.createElement("div", { className: "text-right" },
                                            React.createElement(react_number_format_1.NumericFormat, { disabled: false, value: 100, decimalScale: fromTokenInfo === null || fromTokenInfo === void 0 ? void 0 : fromTokenInfo.decimals, thousandSeparator: true, allowNegative: false, valueIsNumericString: true, onValueChange: function (_a) {
                                                    var value = _a.value;
                                                    return _this.onChangeFromValue(value);
                                                }, placeholder: '0.00', className: "h-full w-full bg-transparent text-white text-right font-semibold dark:placeholder:text-white/25 text-lg", decimalSeparator: "." }))))))),
                    React.createElement("div", { className: "my-2" },
                        React.createElement(SwitchPairButton, { onClick: this.onClickSwitchPair, className: "transition-all" })),
                    React.createElement("div", { className: "border-b border-transparent bg-[#212128] rounded-xl" },
                        React.createElement("div", { className: "px-x border-transparent rounded-xl" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "py-5 px-4 flex flex-col dark:text-white" },
                                    React.createElement("div", { className: "flex justify-between items-center" },
                                        React.createElement("button", { type: "button", className: "py-2 px-3 rounded-2xl flex items-center bg-[#36373E] hover:bg-white/20 disabled:hover:bg-[#36373E] text-white", disabled: false, onClick: this.onClickSelectToMint },
                                            React.createElement("div", { className: "h-5 w-5" },
                                                React.createElement(TokenIcon_1["default"], { tokenInfo: toTokenInfo, width: 20, height: 20 })),
                                            React.createElement("div", { className: "ml-4 mr-2 font-semibold", translate: "no" }, toTokenInfo === null || toTokenInfo === void 0 ? void 0 : toTokenInfo.symbol),
                                            React.createElement("span", { className: "text-white/25 fill-current" },
                                                React.createElement(ChevronDownIcon, null))),
                                        React.createElement("div", { className: "text-right" },
                                            React.createElement(react_number_format_1.NumericFormat, { disabled: true, value: "", decimalScale: toTokenInfo === null || toTokenInfo === void 0 ? void 0 : toTokenInfo.decimals, thousandSeparator: ".", allowNegative: false, valueIsNumericString: true, onValueChange: function (_a) {
                                                    var value = _a.value;
                                                    return _this.onChangeToValue(value);
                                                }, placeholder: "", className: "h-full w-full bg-transparent text-white text-right font-semibold dark:placeholder:text-white/25 placeholder:text-sm placeholder:font-normal text-lg", decimalSeparator: "." }))))))),
                    routes ? (React.createElement("div", { className: "flex items-center mt-2 text-xs space-x-1" },
                        React.createElement("div", { className: "bg-black/20 rounded-xl px-2 py-1 cursor-pointer text-white/50 flex items-center space-x-1", onClick: function () { return _this.setShowRouteSelector(true); } },
                            React.createElement("span", null, routes === null || routes === void 0 ? void 0 : routes.length),
                            React.createElement(exports.RoutesSVG, { width: 7, height: 9 })),
                        React.createElement("span", { className: "text-white/30" }, "using"),
                        React.createElement("span", { className: "text-white/50 overflow-hidden whitespace-nowrap text-ellipsis max-w-[70%]" }, marketRoutes))) : null)),
            React.createElement("div", { className: "w-full px-2" },
                !walletPublicKey ? (React.createElement(JupButton_1["default"], { onClick: this.onConnectWallet }, "Connect Wallet")) : (React.createElement(JupButton_1["default"], { onClick: this.onSubmit },
                    React.createElement(SexyChameleonText, null, "Swap"))),
                routes && selectedSwapRoute && fromTokenInfo && toTokenInfo ? (React.createElement(PriceInfo_1["default"], { routes: routes, selectedSwapRoute: selectedSwapRoute, fromTokenInfo: fromTokenInfo, toTokenInfo: toTokenInfo, showFullDetails: true })) : null)));
    };
    return From;
}(React.Component));
exports["default"] = From;
