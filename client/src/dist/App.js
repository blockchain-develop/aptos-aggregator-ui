"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.moduleAddress = exports.provider = void 0;
var antd_1 = require("antd");
var React = require("react");
var react_1 = require("react");
var wallet_adapter_ant_design_1 = require("@aptos-labs/wallet-adapter-ant-design");
require("@aptos-labs/wallet-adapter-ant-design/dist/index.css");
var aptos_1 = require("aptos");
var wallet_adapter_react_1 = require("@aptos-labs/wallet-adapter-react");
var checkbox_1 = require("antd/es/checkbox");
var From_1 = require("./From");
exports.provider = new aptos_1.Provider(aptos_1.Network.TESTNET);
exports.moduleAddress = "0x2f88a12a17f01228f4ba72ec6214127abb930512dcb3d6205909ca510aca7b29";
function App() {
    var _this = this;
    var _a = react_1.useState(false), accountHasList = _a[0], setAccountHasList = _a[1];
    var _b = react_1.useState(false), transactionInProgress = _b[0], setTransactionInProgress = _b[1];
    var _c = react_1.useState([]), tasks = _c[0], setTasks = _c[1];
    var _d = react_1.useState(""), newTask = _d[0], setNewTask = _d[1];
    var _e = wallet_adapter_react_1.useWallet(), account = _e.account, signAndSubmitTransaction = _e.signAndSubmitTransaction;
    var onWriteTask = function (event) {
        var value = event.target.value;
        setNewTask(value);
    };
    var fetchList = function () { return __awaiter(_this, void 0, void 0, function () {
        var ToolListResource, tableHandle, taskCounter, tasks_1, counter, tableItem, task, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!account)
                        return [2 /*return*/, []];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, exports.provider.getAccountResource(account === null || account === void 0 ? void 0 : account.address, exports.moduleAddress + "::todolist::TodoList")];
                case 2:
                    ToolListResource = _a.sent();
                    setAccountHasList(true);
                    tableHandle = ToolListResource.data.tasks.handle;
                    taskCounter = ToolListResource.data.task_counter;
                    tasks_1 = [];
                    counter = 1;
                    _a.label = 3;
                case 3:
                    if (!(counter <= taskCounter)) return [3 /*break*/, 5];
                    tableItem = {
                        key_type: "u64",
                        value_type: exports.moduleAddress + "::todolist::Task",
                        key: "" + counter
                    };
                    return [4 /*yield*/, exports.provider.getTableItem(tableHandle, tableItem)];
                case 4:
                    task = _a.sent();
                    tasks_1.push(task);
                    counter++;
                    return [3 /*break*/, 3];
                case 5:
                    setTasks(tasks_1);
                    return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    setAccountHasList(false);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var addNewList = function () { return __awaiter(_this, void 0, void 0, function () {
        var payload, response, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!account)
                        return [2 /*return*/, []];
                    setTransactionInProgress(true);
                    payload = {
                        type: "entry_function_payload",
                        "function": exports.moduleAddress + "::todolist::create_list",
                        type_arguments: [],
                        arguments: []
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, signAndSubmitTransaction(payload)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, exports.provider.waitForTransaction(response.hash)];
                case 3:
                    _a.sent();
                    //
                    setAccountHasList(true);
                    return [3 /*break*/, 6];
                case 4:
                    e_2 = _a.sent();
                    setAccountHasList(false);
                    return [3 /*break*/, 6];
                case 5:
                    setTransactionInProgress(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var onTaskAdded = function () { return __awaiter(_this, void 0, void 0, function () {
        var payload, latestId, newTaskToPush, response, newTasks, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!account)
                        return [2 /*return*/];
                    setTransactionInProgress(true);
                    payload = {
                        type: "entry_function_payload",
                        "function": exports.moduleAddress + "::todolist::create_task",
                        type_arguments: [],
                        arguments: [newTask]
                    };
                    latestId = tasks.length > 0 ? parseInt(tasks[tasks.length - 1].task_id) + 1 : 1;
                    newTaskToPush = {
                        address: account.address,
                        completed: false,
                        content: newTask,
                        task_id: latestId + ""
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, signAndSubmitTransaction(payload)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, exports.provider.waitForTransaction(response.hash)];
                case 3:
                    _a.sent();
                    newTasks = __spreadArrays(tasks);
                    newTasks.push(newTaskToPush);
                    setTasks(newTasks);
                    //
                    setNewTask("");
                    return [3 /*break*/, 6];
                case 4:
                    e_3 = _a.sent();
                    console.log("error", e_3);
                    return [3 /*break*/, 6];
                case 5:
                    setTransactionInProgress(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var onCheckboxChange = function (event, taskId) { return __awaiter(_this, void 0, void 0, function () {
        var payload, response, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!account)
                        return [2 /*return*/];
                    if (!event.target.checked)
                        return [2 /*return*/];
                    setTransactionInProgress(true);
                    payload = {
                        type: "entry_function_payload",
                        "function": exports.moduleAddress + "::todolist::complate_task",
                        type_arguments: [],
                        arguments: [taskId]
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, signAndSubmitTransaction(payload)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, exports.provider.waitForTransaction(response.hash)];
                case 3:
                    _a.sent();
                    //
                    setTasks(function (prevState) {
                        var newState = prevState.map(function (obj) {
                            if (obj.task_id === taskId) {
                                return __assign(__assign({}, obj), { completed: true });
                            }
                            return obj;
                        });
                        return newState;
                    });
                    return [3 /*break*/, 6];
                case 4:
                    e_4 = _a.sent();
                    console.log("error", e_4);
                    return [3 /*break*/, 6];
                case 5:
                    setTransactionInProgress(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchList();
    }, [account === null || account === void 0 ? void 0 : account.address]);
    return (React.createElement(React.Fragment, null,
        React.createElement(antd_1.Layout, null,
            React.createElement(antd_1.Row, { align: "middle" },
                React.createElement(antd_1.Col, { span: 10, offset: 2 },
                    React.createElement("h1", null, " Our todolist")),
                React.createElement(antd_1.Col, { span: 12, style: { textAlign: "right", paddingRight: "200px" } },
                    React.createElement(wallet_adapter_ant_design_1.WalletSelector, null)))),
        React.createElement(antd_1.Spin, { spinning: transactionInProgress }, !accountHasList ? (React.createElement(antd_1.Row, { gutter: [0, 32], style: { marginTop: "2rem" } },
            React.createElement(antd_1.Col, { span: 8, offset: 8 },
                React.createElement(antd_1.Button, { disabled: !account, onClick: addNewList, block: true, type: "primary", style: { height: "40px", backgroundColor: "#3f67ff" } }, "Add new list")))) : (React.createElement(antd_1.Row, { gutter: [0, 32], style: { marginTop: "2rem" } },
            React.createElement(antd_1.Col, { span: 8, offset: 8 },
                React.createElement(antd_1.Input.Group, { compact: true },
                    React.createElement(antd_1.Input, { onChange: function (event) { return onWriteTask(event); }, style: { width: "calc(100% - 60px)" }, placeholder: "Add a Task", size: "large", value: newTask }),
                    React.createElement(antd_1.Button, { onClick: onTaskAdded, type: "primary", style: { height: "40px", backgroundColor: "#3f67ff" } }, "Add"))),
            React.createElement(antd_1.Col, { span: 8, offset: 8 }, tasks && (React.createElement(antd_1.List, { size: "small", bordered: true, dataSource: tasks, renderItem: function (task) { return (React.createElement(antd_1.List.Item, { actions: [
                        React.createElement("div", null, task.completed ? (React.createElement(checkbox_1["default"], { defaultChecked: true, disabled: true })) : (React.createElement(checkbox_1["default"], { onChange: function (event) { return onCheckboxChange(event, task.task_id); } }))),
                    ] },
                    React.createElement(antd_1.List.Item.Meta, { title: task.content, description: React.createElement("a", { href: "https://explorer.aptoslabs.com/account/" + task.address + "/", target: "_blank" }, task.address.slice(0, 6) + "..." + task.address.slice(-5)) }))); } })))))),
        React.createElement(antd_1.Layout, null,
            React.createElement("form", null,
                React.createElement(From_1["default"], null)))));
}
exports["default"] = App;
