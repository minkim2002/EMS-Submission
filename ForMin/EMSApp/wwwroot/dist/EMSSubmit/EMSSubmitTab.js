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
exports.EMSSubmitTab = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var EMSNote_1 = require("../EMSAdmin/EMSNote");
var EMSSupplementalDoc_1 = require("./EMSSupplementalDoc");
function TabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (React.createElement("div", __assign({ role: "tabpanel", hidden: value !== index, id: "wrapped-tabpanel-" + index, "aria-labelledby": "wrapped-tab-" + index }, other), value === index && (React.createElement(core_1.Box, { p: 3 },
        React.createElement(core_1.Typography, null, children)))));
}
function a11yProps(index) {
    return {
        id: "wrapped-tab-" + index,
        'aria-controls': "wrapped-tabpanel-" + index,
    };
}
var EMSSubmitTab = /** @class */ (function (_super) {
    __extends(EMSSubmitTab, _super);
    function EMSSubmitTab(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            ComplaintId: 0,
            selectedTab: 'one',
            show: false,
            PageName: ''
        };
        _this.eMSNote = React.createRef();
        _this.eMSSupplementalDoc = React.createRef();
        return _this;
    }
    EMSSubmitTab.prototype.render = function () {
        var _this = this;
        var handleChange = function (event, newValue) {
            _this.setState({ selectedTab: newValue });
        };
        return (React.createElement(core_1.Grid, { container: true, spacing: 2 },
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.AppBar, { position: "static", style: { "padding": "0px" } },
                    React.createElement(core_1.Tabs, { value: this.state.selectedTab, onChange: handleChange, "aria-label": "simple tabs" },
                        React.createElement(core_1.Tab, __assign({ value: "one", label: "Supplemental Document" }, a11yProps('one'))),
                        this.props.PageName && this.props.PageName === 'Admin' ?
                            React.createElement(core_1.Tab, __assign({ value: "two", label: "Note" }, a11yProps('two'))) : null)),
                React.createElement(TabPanel, { value: this.state.selectedTab, index: 'one' },
                    React.createElement(EMSSupplementalDoc_1.EMSSupplementalDoc, { ref: this.eMSSupplementalDoc, ComplaintId: this.props.ComplaintId })),
                this.props.PageName && this.props.PageName === 'Admin' ?
                    React.createElement(TabPanel, { value: this.state.selectedTab, index: 'two' },
                        React.createElement(EMSNote_1.EMSNote, { ref: this.eMSNote, ComplaintId: this.props.ComplaintId })) : null)));
    };
    return EMSSubmitTab;
}(React.Component));
exports.EMSSubmitTab = EMSSubmitTab;
//# sourceMappingURL=EMSSubmitTab.js.map