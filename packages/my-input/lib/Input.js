"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdaptInput = void 0;
const React = require("react");
const my_button_1 = require("my-button");
require("./styles.css");
function UpdaptInput(_a) {
    var { type, className } = _a, rest = __rest(_a, ["type", "className"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("input", Object.assign({}, rest, { className: className !== null && className !== void 0 ? className : "input", type: type })),
        React.createElement(my_button_1.default, { label: "text" })));
}
exports.UpdaptInput = UpdaptInput;
//# sourceMappingURL=Input.js.map