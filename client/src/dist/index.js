"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var petra_plugin_wallet_adapter_1 = require("petra-plugin-wallet-adapter");
var wallet_adapter_react_1 = require("@aptos-labs/wallet-adapter-react");
var root = client_1["default"].createRoot(document.getElementById('root'));
var wallets = [new petra_plugin_wallet_adapter_1.PetraWallet()];
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(wallet_adapter_react_1.AptosWalletAdapterProvider, { plugins: wallets, autoConnect: true },
        react_1["default"].createElement(App_1["default"], null))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
