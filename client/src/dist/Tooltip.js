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
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        var content = this.props.content;
        var onClick = this.props.onClick;
        var children = this.props.children;
        return (React.createElement("div", { className: "group cursor-pointer", onClick: onClick },
            React.createElement("div", { className: 'invisible absolute rounded shadow-lg py-1 px-2 right-0 w-full -mt-8 flex justify-center items-center text-center' }, content),
            children));
    };
    return Tooltip;
}(React.Component));
exports["default"] = Tooltip;
