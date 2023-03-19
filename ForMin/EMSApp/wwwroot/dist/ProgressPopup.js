"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressPopup = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var ProgressPopup = /** @class */ (function (_super) {
    __extends(ProgressPopup, _super);
    function ProgressPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.progress = function () {
            return (React.createElement("div", null,
                React.createElement(core_1.Modal, { open: _this.props.open },
                    React.createElement("div", { className: "progressDiv" },
                        React.createElement(core_1.CircularProgress, null)))));
        };
        return _this;
    }
    // display UI on the Person Search Popup Window
    ProgressPopup.prototype.render = function () {
        return (React.createElement(this.progress, null));
    };
    return ProgressPopup;
}(React.Component));
exports.ProgressPopup = ProgressPopup;
//# sourceMappingURL=ProgressPopup.js.map