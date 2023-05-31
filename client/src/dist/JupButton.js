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
var JupButton = /** @class */ (function (_super) {
    __extends(JupButton, _super);
    function JupButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JupButton.prototype.onClick = function () {
    };
    JupButton.prototype.render = function () {
        return (React.createElement("button", { className: 'opacity-50 cursor-not-allowed', type: 'button', disabled: false, onClick: this.onClick },
            React.createElement("div", { className: "p-5 text-md font-semibold h-full w-full leading-none" }, "children")));
    };
    return JupButton;
}(React.Component));
exports["default"] = JupButton;
