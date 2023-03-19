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
exports.EMSCategory = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var emsUtilities_1 = require("../utilities/emsUtilities");
var EMSCategoryInsertPopup_1 = require("./EMSCategoryInsertPopup");
var EMSCategoryUpdatePopup_1 = require("./EMSCategoryUpdatePopup");
var EMSCategory = /** @class */ (function (_super) {
    __extends(EMSCategory, _super);
    function EMSCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            EMSVCategory: [{
                    CategoryId: 0,
                    ParentId: 0,
                    ParentDesc: '',
                    CategoryType: '',
                    CategoryCode: '',
                    CategoryDesc: '',
                    SortOrder: 0,
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }], show: false, canSave: false
        };
        // get ems category
        _this.getEMSCategory = function () {
            var url = emsUtilities_1.baseApiUrl() + 'EMSCategory';
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                _this.setState({ EMSVCategory: responseData });
                console.log(_this.state.EMSVCategory);
            }).catch(function (errors) {
                //console.log(errors);
            });
        };
        _this.eMSCategoryInsertPopup = React.createRef();
        _this.eMSCategoryUpdatePopup = React.createRef();
        return _this;
    }
    EMSCategory.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Paper, null,
            React.createElement(core_1.Table, { style: { paddingTop: 10, paddingLeft: 50, marginTop: 10 } },
                React.createElement(core_1.TableHead, null,
                    React.createElement(core_1.TableRow, { className: 'SubTableHeader textLeft' },
                        React.createElement(core_1.TableCell, null,
                            React.createElement("h6", null,
                                React.createElement("b", null, "Category Id"))),
                        React.createElement(core_1.TableCell, null,
                            React.createElement("h6", null,
                                React.createElement("b", null, "Category Type"))),
                        React.createElement(core_1.TableCell, null,
                            React.createElement("h6", null,
                                React.createElement("b", null, "Parent"))),
                        React.createElement(core_1.TableCell, null,
                            React.createElement("h6", null,
                                React.createElement("b", null, "Category Description"))),
                        React.createElement(core_1.TableCell, null,
                            React.createElement(EMSCategoryInsertPopup_1.EMSCategoryInsertPopup, { ref: this.eMSCategoryInsertPopup, getCategory: this.getEMSCategory })))),
                React.createElement(core_1.TableBody, null, this.state.EMSVCategory.map(function (item) { return (React.createElement(core_1.TableRow, null,
                    React.createElement(core_1.TableCell, { className: "textCenter" },
                        React.createElement("h6", null, item.CategoryId)),
                    React.createElement(core_1.TableCell, { className: "textCenter" },
                        React.createElement("h6", null, item.CategoryType)),
                    React.createElement(core_1.TableCell, null,
                        React.createElement("h6", null, item.ParentDesc)),
                    React.createElement(core_1.TableCell, null,
                        React.createElement("h6", null, item.CategoryDesc)),
                    React.createElement(core_1.TableCell, { className: "textRight" },
                        React.createElement(EMSCategoryUpdatePopup_1.EMSCategoryUpdatePopup, { ref: _this.eMSCategoryUpdatePopup, getCategory: _this.getEMSCategory, EMSCategory: item })))); })))));
    };
    EMSCategory.prototype.componentDidMount = function () {
        this.getEMSCategory();
    };
    return EMSCategory;
}(React.Component));
exports.EMSCategory = EMSCategory;
//# sourceMappingURL=EMSCategory.js.map