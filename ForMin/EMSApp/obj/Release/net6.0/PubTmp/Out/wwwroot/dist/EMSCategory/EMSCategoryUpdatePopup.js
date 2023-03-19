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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMSCategoryUpdatePopup = void 0;
var React = __importStar(require("react"));
var emsUtilities_1 = require("../utilities/emsUtilities");
var core_1 = require("@material-ui/core");
var EMSCategoryUpdatePopup = /** @class */ (function (_super) {
    __extends(EMSCategoryUpdatePopup, _super);
    function EMSCategoryUpdatePopup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            EMSCategory: {
                CategoryId: 0,
                ParentId: 0,
                CategoryType: '',
                CategoryCode: '',
                CategoryDesc: '',
                SortOrder: 0,
                IsActive: true,
                CreatedDate: '',
                CreatedBy: '',
                UpdatedDate: '',
                UpdatedBy: ''
            }, EMSCategoryList: [{
                    CategoryId: 0,
                    ParentId: 0,
                    CategoryType: 'Category',
                    CategoryCode: '',
                    CategoryDesc: '',
                    SortOrder: 0,
                    IsActive: true,
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }], show: false, canSave: false
        };
        _this.userId = '';
        // get ems category
        _this.getEMSCategory = function () {
            var url = emsUtilities_1.baseApiUrl() + 'EMSCategoryByType?type=Category';
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                _this.setState({ EMSCategoryList: responseData });
            }).catch(function (errors) {
                //console.log(errors);
            });
        };
        //set state
        _this.handleChange = function (event) {
            var _a;
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            var currentSQState = __assign(__assign({}, _this.state.EMSCategory), (_a = {}, _a[name] = value, _a));
            _this.setState({ EMSCategory: currentSQState });
            if (_this.state.EMSCategory.CategoryCode !== null && _this.state.EMSCategory.CategoryCode !== 'undefined' && _this.state.EMSCategory.CategoryDesc !== null && _this.state.EMSCategory.CategoryDesc !== 'undefined') {
                _this.setState({ canSave: true });
            }
            else
                _this.setState({ canSave: false });
        };
        //Insert Category
        _this.handleSubmit = function () {
            var CategoryUrl = emsUtilities_1.baseApiUrl() + 'Category/Update';
            var today = new Date().toISOString();
            _this.state.EMSCategory.UpdatedBy = _this.userId;
            _this.state.EMSCategory.UpdatedDate = today;
            var requestSQOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: emsUtilities_1.serializeData(_this.state.EMSCategory)
            };
            fetch(CategoryUrl, requestSQOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                if (responseData === 400)
                    alert(emsUtilities_1.getErrorMessage('This is a Bad Request.'));
                else if (responseData === 401)
                    alert(emsUtilities_1.getErrorMessage('You are not authorized.'));
                else if (responseData === 403)
                    alert(emsUtilities_1.getErrorMessage('You don\'t have the access rights.'));
                else if (responseData === 404)
                    alert(emsUtilities_1.getErrorMessage('There is no data.'));
                else if (responseData === 409)
                    alert(emsUtilities_1.getErrorMessage('There is a conflict.'));
                else if (responseData === 500)
                    alert(emsUtilities_1.getErrorMessage('There is an internal server error.'));
                else {
                    _this.setState({ EMSCategory: responseData });
                    alert(emsUtilities_1.getSuccessMessage('A ' + _this.state.EMSCategory.CategoryType));
                    if (_this.state.EMSCategory.CategoryType === 'Category')
                        _this.getEMSCategory();
                }
            }).catch(function (errors) {
                // console.log(errors);
                alert(emsUtilities_1.getErrorMessage('There is an error during inserting a Category'));
            });
        };
        _this.handleDelete = function (id) {
            _this.setCategory();
            var delDto = {
                Id: id,
                ForeignKey: 0
            };
            var deleteRequestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: emsUtilities_1.serializeData(delDto)
            };
            fetch(emsUtilities_1.baseApiUrl() + 'Category/Delete', deleteRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                if (responseData === 400)
                    alert(emsUtilities_1.getErrorMessage('This is a Bad Request.'));
                else if (responseData === 401)
                    alert(emsUtilities_1.getErrorMessage('You are not authorized.'));
                else if (responseData === 403)
                    alert(emsUtilities_1.getErrorMessage('You don\'t have the access rights.'));
                else if (responseData === 404)
                    alert(emsUtilities_1.getErrorMessage('There is no data.'));
                else if (responseData === 409)
                    alert(emsUtilities_1.getErrorMessage('There is a conflict.'));
                else if (responseData === 500)
                    alert(emsUtilities_1.getErrorMessage('There is an internal server error.'));
                else {
                    _this.props.getCategory.call(_this);
                    alert("It has been removed successfully.");
                }
            }).catch(function (errors) {
                // console.log(errors);
                alert(emsUtilities_1.getErrorMessage('There is an error during deleting a Category'));
            });
            _this.handleClear();
        };
        //clear state
        _this.handleClear = function () {
            _this.setState({
                EMSCategory: {
                    CategoryId: 0,
                    ParentId: 0,
                    CategoryType: 'Category',
                    CategoryCode: '',
                    CategoryDesc: '',
                    SortOrder: 0,
                    IsActive: true,
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }, EMSCategoryList: [{
                        CategoryId: 0,
                        ParentId: 0,
                        CategoryType: 'Category',
                        CategoryCode: '',
                        CategoryDesc: '',
                        SortOrder: 0,
                        IsActive: true,
                        CreatedDate: '',
                        CreatedBy: '',
                        UpdatedDate: '',
                        UpdatedBy: ''
                    }], canSave: false
            });
        };
        _this.handleShow = function () {
            _this.setState({ show: true });
            _this.getEMSCategory();
            setTimeout(function () { _this.setCategory(); });
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
            _this.props.getCategory();
        };
        _this.setCategory = function () {
            _this.state.EMSCategory.CategoryId = _this.props.EMSCategory.CategoryId;
            _this.state.EMSCategory.ParentId = _this.props.EMSCategory.ParentId;
            _this.state.EMSCategory.CategoryType = _this.props.EMSCategory.CategoryType;
            _this.state.EMSCategory.CategoryDesc = _this.props.EMSCategory.CategoryDesc;
            _this.state.EMSCategory.CategoryCode = _this.props.EMSCategory.CategoryCode;
            _this.state.EMSCategory.SortOrder = _this.props.EMSCategory.SortOrder;
            _this.state.EMSCategory.IsActive = _this.props.EMSCategory.IsActive;
            _this.state.EMSCategory.CreatedBy = _this.props.EMSCategory.CreatedBy;
            _this.state.EMSCategory.CreatedDate = _this.props.EMSCategory.CreatedDate;
            _this.state.EMSCategory.UpdatedBy = _this.props.EMSCategory.UpdatedBy;
            var currentSQState = __assign(__assign({}, _this.state.EMSCategory), { "UpdateDate": _this.props.EMSCategory.UpdatedDate });
            _this.setState({ EMSCategory: currentSQState });
        };
        _this.updateCategory = function () {
            //const category = this.props.EMSCategory;
            //let id = 0;
            //if (this.props.EMSCategory && this.props.EMSCategory.CategoryId && this.props.EMSCategory.CategoryId > 0)
            //    id = this.props.EMSCategory.CategoryId;
            return (React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "left" } },
                React.createElement(core_1.Grid, { container: true, className: "textRight alignRight" },
                    React.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: function () { _this.handleShow(); }, "data-toggle": "tooltip", title: "Update Category", className: "marginLeft5" },
                        React.createElement("img", { src: window.location.origin + '/images/edit_white.png', className: "btnImage" })),
                    React.createElement(core_1.Button, { variant: 'contained', color: "secondary", onClick: function () { window.confirm('Are you sure you wish to delete this Category?') && _this.handleDelete.call(_this, _this.props.EMSCategory.CategoryId); }, "data-toggle": "tooltip", title: "Delete Category", className: "marginLeft5" },
                        React.createElement("img", { src: window.location.origin + '/images/delete_white.png', className: "btnImage" }))),
                React.createElement(core_1.Modal, { className: "insertModal", open: _this.state.show, onClose: function () { _this.handleClear.call(_this); _this.handleClose(); }, disableBackdropClick: true },
                    React.createElement(core_1.Paper, { className: "ModalDiv" },
                        React.createElement(core_1.Grid, { container: true, spacing: 2 },
                            React.createElement(core_1.Grid, { item: true, xs: 4, sm: 4 },
                                React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                    React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }),
                                    React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "CategoryType", label: "CategoryType", defaultValue: _this.state.EMSCategory.CategoryType, onChange: _this.handleChange },
                                        React.createElement(core_1.MenuItem, { value: "Category" },
                                            React.createElement("em", null, "Category")),
                                        React.createElement(core_1.MenuItem, { value: "Subcategory" },
                                            React.createElement("em", null, "Subcategory")),
                                        React.createElement(core_1.MenuItem, { value: "Status" },
                                            React.createElement("em", null, "Status"))))),
                            _this.state.EMSCategory.CategoryType && _this.state.EMSCategory.CategoryType === "Subcategory" ?
                                React.createElement(core_1.Grid, { item: true, xs: 4, sm: 4 },
                                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "*Category"),
                                        React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "ParentId", label: "Category", onChange: _this.handleChange },
                                            React.createElement(core_1.MenuItem, { value: "" },
                                                React.createElement("em", null, "Select One")),
                                            _this.state.EMSCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                                React.createElement("em", null, item.CategoryDesc))); })))) : React.createElement(core_1.Grid, { item: true, xs: 4 }),
                            React.createElement(core_1.Grid, { item: true, xs: 4, sm: 4 },
                                React.createElement(core_1.TextField, { name: "CategoryCode", className: "errorMessage", placeholder: "Category Code", value: _this.state.EMSCategory.CategoryCode, onChange: _this.handleChange, helperText: "Category Code", inputProps: { maxLength: 20 } }),
                                React.createElement("span", { style: { color: 'blue', fontSize: '11px', padding: '1.5px' } })),
                            React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 },
                                React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                    React.createElement(core_1.TextField, { name: "CategoryDesc", className: "errorMessage", placeholder: "Category Description", value: _this.state.EMSCategory.CategoryDesc, onChange: _this.handleChange, helperText: "Category Description", inputProps: { maxLength: 20 } }),
                                    React.createElement("span", { style: { color: 'blue', fontSize: '11px', padding: '1.5px' } }))),
                            React.createElement(core_1.Grid, { item: true, xs: 3, sm: 3 },
                                React.createElement(core_1.TextField, { name: "SortOrder", className: "errorMessage", placeholder: "Sorting Order", value: _this.state.EMSCategory.SortOrder, onChange: _this.handleChange, helperText: "Sorting Order", inputProps: { maxLength: 20 } }),
                                React.createElement("span", { style: { color: 'blue', fontSize: '11px', padding: '1.5px' } })),
                            React.createElement(core_1.Grid, { item: true, xs: 3, sm: 3 },
                                React.createElement(core_1.FormGroup, null,
                                    React.createElement(core_1.FormControlLabel, { control: React.createElement(core_1.Checkbox, { checked: _this.state.EMSCategory.IsActive, onChange: _this.handleChange, name: "IsActive" }), label: "Active" }))),
                            React.createElement(core_1.Grid, { item: true, xs: 12, className: "textRight" },
                                React.createElement(core_1.Button, { variant: 'contained', color: "primary", onClick: function () { _this.handleSubmit(); } }, "Save Category"),
                                React.createElement(core_1.Button, { variant: 'contained', color: "default", onClick: function () { _this.handleClear(); _this.handleClose(); } }, "Close")))))));
        };
        _this.userId = emsUtilities_1.getUserId();
        return _this;
    }
    EMSCategoryUpdatePopup.prototype.render = function () {
        return (React.createElement(this.updateCategory, null));
    };
    return EMSCategoryUpdatePopup;
}(React.Component));
exports.EMSCategoryUpdatePopup = EMSCategoryUpdatePopup;
//# sourceMappingURL=EMSCategoryUpdatePopup.js.map