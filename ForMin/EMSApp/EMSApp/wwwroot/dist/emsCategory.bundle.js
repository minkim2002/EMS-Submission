/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EMSCategory/EMSCategory.tsx":
/*!*****************************************!*\
  !*** ./src/EMSCategory/EMSCategory.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMSCategory = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var EMSCategoryInsertPopup_1 = __webpack_require__(/*! ./EMSCategoryInsertPopup */ "./src/EMSCategory/EMSCategoryInsertPopup.tsx");
var EMSCategoryUpdatePopup_1 = __webpack_require__(/*! ./EMSCategoryUpdatePopup */ "./src/EMSCategory/EMSCategoryUpdatePopup.tsx");
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
            var url = (0, emsUtilities_1.baseApiUrl)() + 'EMSCategory';
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
                React.createElement(core_1.TableBody, null, this.state.EMSVCategory.map(function (item) { return (React.createElement(core_1.TableRow, { hover: true },
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


/***/ }),

/***/ "./src/EMSCategory/EMSCategoryApp.tsx":
/*!********************************************!*\
  !*** ./src/EMSCategory/EMSCategoryApp.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMSCategoryApp = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var EMSCategory_1 = __webpack_require__(/*! ./EMSCategory */ "./src/EMSCategory/EMSCategory.tsx");
var EMSCategoryApp = /** @class */ (function (_super) {
    __extends(EMSCategoryApp, _super);
    function EMSCategoryApp(props) {
        return _super.call(this, props) || this;
    }
    EMSCategoryApp.prototype.render = function () {
        return (React.createElement(EMSCategory_1.EMSCategory, null));
    };
    return EMSCategoryApp;
}(React.Component));
exports.EMSCategoryApp = EMSCategoryApp;


/***/ }),

/***/ "./src/EMSCategory/EMSCategoryInsertPopup.tsx":
/*!****************************************************!*\
  !*** ./src/EMSCategory/EMSCategoryInsertPopup.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMSCategoryInsertPopup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var EMSCategoryInsertPopup = /** @class */ (function (_super) {
    __extends(EMSCategoryInsertPopup, _super);
    function EMSCategoryInsertPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
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
                }], show: false, canSave: false
        };
        _this.userId = '';
        // get ems category
        _this.getEMSCategory = function () {
            var url = (0, emsUtilities_1.baseApiUrl)() + 'EMSCategoryByType?type=Category';
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
            var _a, _b;
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            var currentSQState = __assign(__assign({}, _this.state.EMSCategory), (_a = {}, _a[name] = value, _a));
            if (name === "CategoryType") {
                if (value === "Category")
                    currentSQState = __assign(__assign({}, _this.state.EMSCategory), (_b = {}, _b[name] = value, _b["ParentId"] = 0, _b));
                _this.setState({ EMSCategory: currentSQState });
            }
            else {
                _this.setState({ EMSCategory: currentSQState });
            }
            if (_this.state.EMSCategory.CategoryCode !== null && _this.state.EMSCategory.CategoryCode !== 'undefined' && _this.state.EMSCategory.CategoryDesc !== null && _this.state.EMSCategory.CategoryDesc !== 'undefined') {
                _this.setState({ canSave: true });
            }
            else
                _this.setState({ canSave: false });
        };
        //Insert Category
        _this.handleSubmit = function () {
            var CategoryUrl = (0, emsUtilities_1.baseApiUrl)() + 'Category/Insert';
            var today = new Date().toISOString();
            _this.state.EMSCategory.CreatedBy = _this.userId;
            _this.state.EMSCategory.CreatedDate = today;
            _this.state.EMSCategory.UpdatedBy = _this.userId;
            _this.state.EMSCategory.UpdatedDate = today;
            var requestSQOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: (0, emsUtilities_1.serializeData)(_this.state.EMSCategory)
            };
            fetch(CategoryUrl, requestSQOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                if (responseData === 400)
                    alert((0, emsUtilities_1.getErrorMessage)('This is a Bad Request.'));
                else if (responseData === 401)
                    alert((0, emsUtilities_1.getErrorMessage)('You are not authorized.'));
                else if (responseData === 403)
                    alert((0, emsUtilities_1.getErrorMessage)('You don\'t have the access rights.'));
                else if (responseData === 404)
                    alert((0, emsUtilities_1.getErrorMessage)('There is no data.'));
                else if (responseData === 409)
                    alert((0, emsUtilities_1.getErrorMessage)('There is a conflict.'));
                else if (responseData === 500)
                    alert((0, emsUtilities_1.getErrorMessage)('There is an internal server error.'));
                else {
                    //this.handleClear();
                    alert((0, emsUtilities_1.getSuccessMessage)('A ' + _this.state.EMSCategory.CategoryType));
                    if (_this.state.EMSCategory.CategoryType === 'Category')
                        _this.getEMSCategory();
                }
            }).catch(function (errors) {
                // console.log(errors);
                alert((0, emsUtilities_1.getErrorMessage)('There is an error during inserting a Category'));
            });
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
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
            _this.props.getCategory();
        };
        _this.insertCategory = function () {
            return (React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "left" } },
                React.createElement(core_1.Grid, { container: true, className: "textRight alignRight" },
                    React.createElement(core_1.Button, { variant: "contained", onClick: function () { _this.handleShow(); }, className: "btnImgInsert marginRight10", "data-toggle": "tooltip", title: "New Category" },
                        React.createElement("img", { src: window.location.origin + '/images/add_white.png', className: "btnImage" }))),
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
                                React.createElement(core_1.TextField, { name: "CategoryCode", className: "errorMessage", placeholder: "Category Code", value: _this.state.EMSCategory.CategoryCode, onChange: _this.handleChange, helperText: "Category Code", inputProps: { maxLength: 25 } })),
                            React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 },
                                React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                    React.createElement(core_1.TextField, { name: "CategoryDesc", className: "errorMessage", placeholder: "Category Description", value: _this.state.EMSCategory.CategoryDesc, onChange: _this.handleChange, helperText: "Category Description", inputProps: { maxLength: 255 } }))),
                            React.createElement(core_1.Grid, { item: true, xs: 3, sm: 3 },
                                React.createElement(core_1.TextField, { name: "SortOrder", className: "errorMessage", type: "number", value: _this.state.EMSCategory.SortOrder, onChange: _this.handleChange, helperText: "Sorting Order", inputProps: { max: 9999 } })),
                            React.createElement(core_1.Grid, { item: true, xs: 3, sm: 3 },
                                React.createElement(core_1.FormGroup, null,
                                    React.createElement(core_1.FormControlLabel, { control: React.createElement(core_1.Checkbox, { checked: _this.state.EMSCategory.IsActive, onChange: _this.handleChange, name: "IsActive" }), label: "Active" }))),
                            React.createElement(core_1.Grid, { item: true, xs: 12, sm: 12, className: "textRight" },
                                React.createElement(core_1.Button, { variant: 'contained', color: "primary", onClick: function () { _this.handleSubmit(); }, disabled: !_this.state.canSave }, "Save"),
                                React.createElement(core_1.Button, { variant: 'contained', color: "secondary", onClick: function () { _this.handleClear(); } }, "Clear"),
                                React.createElement(core_1.Button, { variant: 'contained', color: "default", onClick: function () { _this.handleClear(); _this.handleClose(); } }, "Close")))))));
        };
        _this.userId = (0, emsUtilities_1.getUserId)();
        return _this;
    }
    EMSCategoryInsertPopup.prototype.render = function () {
        return (React.createElement(this.insertCategory, null));
    };
    return EMSCategoryInsertPopup;
}(React.Component));
exports.EMSCategoryInsertPopup = EMSCategoryInsertPopup;


/***/ }),

/***/ "./src/EMSCategory/EMSCategoryUpdatePopup.tsx":
/*!****************************************************!*\
  !*** ./src/EMSCategory/EMSCategoryUpdatePopup.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMSCategoryUpdatePopup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
            var url = (0, emsUtilities_1.baseApiUrl)() + 'EMSCategoryByType?type=Category';
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
            var CategoryUrl = (0, emsUtilities_1.baseApiUrl)() + 'Category/Update';
            var today = new Date().toISOString();
            _this.state.EMSCategory.UpdatedBy = _this.userId;
            _this.state.EMSCategory.UpdatedDate = today;
            var requestSQOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: (0, emsUtilities_1.serializeData)(_this.state.EMSCategory)
            };
            fetch(CategoryUrl, requestSQOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                if (responseData === 400)
                    alert((0, emsUtilities_1.getErrorMessage)('This is a Bad Request.'));
                else if (responseData === 401)
                    alert((0, emsUtilities_1.getErrorMessage)('You are not authorized.'));
                else if (responseData === 403)
                    alert((0, emsUtilities_1.getErrorMessage)('You don\'t have the access rights.'));
                else if (responseData === 404)
                    alert((0, emsUtilities_1.getErrorMessage)('There is no data.'));
                else if (responseData === 409)
                    alert((0, emsUtilities_1.getErrorMessage)('There is a conflict.'));
                else if (responseData === 500)
                    alert((0, emsUtilities_1.getErrorMessage)('There is an internal server error.'));
                else {
                    _this.setState({ EMSCategory: responseData });
                    alert((0, emsUtilities_1.getSuccessMessage)('A ' + _this.state.EMSCategory.CategoryType));
                    if (_this.state.EMSCategory.CategoryType === 'Category')
                        _this.getEMSCategory();
                }
            }).catch(function (errors) {
                // console.log(errors);
                alert((0, emsUtilities_1.getErrorMessage)('There is an error during inserting a Category'));
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
                body: (0, emsUtilities_1.serializeData)(delDto)
            };
            fetch((0, emsUtilities_1.baseApiUrl)() + 'Category/Delete', deleteRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                if (responseData === 400)
                    alert((0, emsUtilities_1.getErrorMessage)('This is a Bad Request.'));
                else if (responseData === 401)
                    alert((0, emsUtilities_1.getErrorMessage)('You are not authorized.'));
                else if (responseData === 403)
                    alert((0, emsUtilities_1.getErrorMessage)('You don\'t have the access rights.'));
                else if (responseData === 404)
                    alert((0, emsUtilities_1.getErrorMessage)('There is no data.'));
                else if (responseData === 409)
                    alert((0, emsUtilities_1.getErrorMessage)('There is a conflict.'));
                else if (responseData === 500)
                    alert((0, emsUtilities_1.getErrorMessage)('There is an internal server error.'));
                else {
                    _this.props.getCategory.call(_this);
                    alert("It has been removed successfully.");
                }
            }).catch(function (errors) {
                // console.log(errors);
                alert((0, emsUtilities_1.getErrorMessage)('There is an error during deleting a Category'));
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
                                    React.createElement(core_1.TextField, { name: "CategoryDesc", className: "errorMessage", placeholder: "Category Description", value: _this.state.EMSCategory.CategoryDesc, onChange: _this.handleChange, helperText: "Category Description", inputProps: { maxLength: 255 } }),
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
        _this.userId = (0, emsUtilities_1.getUserId)();
        return _this;
    }
    EMSCategoryUpdatePopup.prototype.render = function () {
        return (React.createElement(this.updateCategory, null));
    };
    return EMSCategoryUpdatePopup;
}(React.Component));
exports.EMSCategoryUpdatePopup = EMSCategoryUpdatePopup;


/***/ }),

/***/ "./src/emsCategory.tsx":
/*!*****************************!*\
  !*** ./src/emsCategory.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var ReactDOM = __importStar(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
__webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
var EMSCategoryApp_1 = __webpack_require__(/*! ./EMSCategory/EMSCategoryApp */ "./src/EMSCategory/EMSCategoryApp.tsx");
ReactDOM.render(React.createElement(EMSCategoryApp_1.EMSCategoryApp, null), document.getElementById('emsCategory'));


/***/ }),

/***/ "./src/utilities/emsUtilities.tsx":
/*!****************************************!*\
  !*** ./src/utilities/emsUtilities.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIdFromQueryString = exports.checkEmail = exports.onlyDecimal = exports.onlyNumbers = exports.getNoDataFound = exports.getErrorMessage = exports.getSuccessMessage = exports.getUserName = exports.getUserId = exports.getHost = exports.baseEmailApiUrl = exports.basePersonApiUrl = exports.baseReportUrl = exports.baseApiUrl = exports.baseUrl = exports.getRequestOptions = exports.requestOptions = exports.serializeData = void 0;
// serialize JSON data to form data
var serializeData = function (data) {
    var buffer = [];
    for (var i in data) {
        var value = data[i];
        buffer.push(encodeURIComponent(i) + '=' + encodeURIComponent((value === null) ? '' : value));
    }
    var source = buffer.join('&').replace('/%20/g', '+');
    return source;
};
exports.serializeData = serializeData;
// Request Options
exports.requestOptions = {
    method: 'POST',
    credentials: 'include'
};
exports.getRequestOptions = {
    method: 'GET',
    credentials: 'include'
};
// Return Base API Url
var baseUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44307/';
    else
        return protocol + '//' + hostname + '/applications/EMSApp';
};
exports.baseUrl = baseUrl;
// Return Base API Url
var baseApiUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44354/api/';
    else
        return protocol + '//' + hostname + '/FrdApis/EMSAppApi/api/';
};
exports.baseApiUrl = baseApiUrl;
// Return Base Report API Url
var baseReportUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost')
        return 'https//firenetdev/FirenetReports/Pages/ReportViewer.aspx?';
    else
        return protocol + '//' + hostname + '/FirenetReports/Pages/ReportViewer.aspx?';
};
exports.baseReportUrl = baseReportUrl;
// Return Person API Url
var basePersonApiUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44386/api/';
    else
        return protocol + '//' + hostname + '/FrdApis/IncidentReportApi/api/';
};
exports.basePersonApiUrl = basePersonApiUrl;
// Return Email API Url
var baseEmailApiUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost' && protocol === 'http:')
        return protocol + '//' + hostname + ':53512/api/';
    else if (hostname === 'localhost' && protocol === 'https:')
        return protocol + '//' + hostname + ':44383/api/';
    else
        return protocol + '//' + hostname + '/FrdApis/FRDFormApi/api/';
};
exports.baseEmailApiUrl = baseEmailApiUrl;
// get host
var getHost = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    return protocol + '//' + hostname;
};
exports.getHost = getHost;
// get user id
var getUserId = function () {
    var userId = document.getElementById('userId').textContent.replace('FFX\\', '');
    return userId;
};
exports.getUserId = getUserId;
// get user name
var getUserName = function () {
    var userName = document.getElementById('userName').textContent;
    return userName;
};
exports.getUserName = getUserName;
// success save message
var getSuccessMessage = function (msg) {
    return msg + ' has been saved successfully.';
};
exports.getSuccessMessage = getSuccessMessage;
// error message
var getErrorMessage = function (msg) {
    return msg + ' Please refresh your browser and then try it again.If your issue persists, please open an IT Help Desk Ticket.';
};
exports.getErrorMessage = getErrorMessage;
// no data message
var getNoDataFound = function (data) {
    return 'There is no data. Please refresh your browser and then try it again.';
};
exports.getNoDataFound = getNoDataFound;
var onlyNumbers = function (event) { event.target.value = event.target.value.replace(/[^0-9]/g, ''); };
exports.onlyNumbers = onlyNumbers;
var onlyDecimal = function (event) { event.target.value = event.target.value.replace(/[^0-9.]/g, ''); };
exports.onlyDecimal = onlyDecimal;
var checkEmail = function (value) {
    if (value && value.length > 0) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value))
            return true;
        else {
            alert('Please correct the email address!!');
            return false;
        }
    }
};
exports.checkEmail = checkEmail;
// extract Id from query string
var getIdFromQueryString = function (value) {
    var sURLVariables = value.split('&');
    var params = [];
    if (sURLVariables && sURLVariables[0].startsWith('Id')) {
        params = value.split('=');
        if (params[1] && Number(params[1]) > 0)
            return Number(params[1]);
    }
    else
        return 0;
};
exports.getIdFromQueryString = getIdFromQueryString;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"emsCategory": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkemsapp"] = self["webpackChunkemsapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_material-ui_core_esm_index_js-n-a05e18"], () => (__webpack_require__("./src/emsCategory.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=emsCategory.bundle.js.map