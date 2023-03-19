/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EMSAdmin/EMSAdmin.tsx":
/*!***********************************!*\
  !*** ./src/EMSAdmin/EMSAdmin.tsx ***!
  \***********************************/
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
exports.EMSAdmin = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
//import { SelectAnEmployee } from '../EMSSubmit/SelectAnEmployee';
var EMSSubmitUpdatePopup_1 = __webpack_require__(/*! ../EMSSubmit/EMSSubmitUpdatePopup */ "./src/EMSSubmit/EMSSubmitUpdatePopup.tsx");
var progressPopup_1 = __webpack_require__(/*! ../progressPopup */ "./src/progressPopup.tsx");
var EMSAdmin = /** @class */ (function (_super) {
    __extends(EMSAdmin, _super);
    function EMSAdmin(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            EMSVComplaint: [{
                    ComplaintId: 0,
                    ComplaintStatus: '',
                    SubmitterName: '',
                    SubmitterPhoneNo: '',
                    SubmitterShit: '',
                    RequestDate: '',
                    Location: '',
                    CategoryId: 0,
                    SubCategoryId: 0,
                    SubCategoryOthers: '',
                    Unit: '',
                    VehicleNumber: '',
                    AssetNumber: '',
                    ComplaintPriority: 0,
                    SerialNumber: '',
                    IncidentNumber: '',
                    ComplaintDetail: '',
                    CommentsByAdmin: '',
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: '',
                    CategoryDesc: '',
                    SubCategoryDesc: '',
                    WorkGroupName: '',
                    UnitName: ''
                }], SearchEMS: {
                CategoryId: 0,
                SubCategoryId: 0,
                Location: '',
                Unit: '',
                ReportStatus: '',
                ReviewedStartDate: new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 120).toISOString(),
                ReviewedEndDate: new Date((new Date()).valueOf() + 1000 * 60 * 60 * 24).toISOString(),
                SortBy: 'Submitted Date',
                SortOrder: 'Descending'
            }, EMSCategoryList: [{
                    CategoryId: 0,
                    ParentId: 0,
                    CategoryType: '',
                    CategoryCode: '',
                    CategoryDesc: '',
                    SortOrder: 0,
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }], EMSSubCategoryList: [{
                    CategoryId: 0,
                    ParentId: 0,
                    CategoryType: '',
                    CategoryCode: '',
                    CategoryDesc: '',
                    SortOrder: 0,
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }], EMSStatusList: [{
                    CategoryId: 0,
                    ParentId: 0,
                    CategoryType: '',
                    CategoryCode: '',
                    CategoryDesc: '',
                    SortOrder: 0,
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }], Email: {
                From: 'DoNotReply@fairfaxcounty.gov',
                To: [''],
                CC: [''],
                BCC: ['ykim01@fairfaxcounty.gov'],
                Subject: '',
                Body: ''
            }, UnitList: [{
                    Id: 0,
                    Unit: '',
                    WorkGroupId: '',
                    WorkGroupAbbrv: ''
                }], WorkGroupList: [{
                    Id: 0,
                    WorkGroupAbbrv: '',
                    WorkGroupName: '',
                    battalion: ''
                }], PersonalInformation: {
                FullName: '',
                OfficePhone: '',
                Email: '',
                WorkGroupAbbrv: '',
                WorkGroupName: ''
            }, open: false
        };
        //selectAnEmployee = React.createRef<SelectAnEmployee>();
        _this.eMSSubmitUpdatePopup = React.createRef();
        _this.userId = '';
        // get workgroup
        _this.getWorkGroup = function () {
            var url = (0, emsUtilities_1.baseApiUrl)() + 'Lookup/Locations';
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                _this.setState({ WorkGroupList: responseData });
            }).catch(function (errors) {
                //console.log(errors);
            });
        };
        // get unit
        _this.getUnit = function () {
            var url = (0, emsUtilities_1.baseApiUrl)() + 'Lookup/Units';
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                _this.setState({ UnitList: responseData });
            }).catch(function (errors) {
                //console.log(errors);
            });
        };
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
        // get ems sub category
        _this.getEMSSubCategory = function (value) {
            var url = (0, emsUtilities_1.baseApiUrl)() + 'EMSSubCategoryById?Id=' + value;
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                _this.setState({ EMSSubCategoryList: responseData });
                console.log(_this.state.EMSSubCategoryList);
            }).catch(function (errors) {
                //console.log(errors);
            });
        };
        // get ems complaint status
        _this.getEMSStatus = function () {
            var url = (0, emsUtilities_1.baseApiUrl)() + 'EMSCategoryByType?Type=Status';
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                if (responseData === 404)
                    alert('There is no status data. Plese add status in Manage page');
                else
                    _this.setState({ EMSStatusList: responseData });
            }).catch(function (errors) {
                //console.log(errors);
            });
        };
        // set personal information
        //setPersonalInformation = (person: any) => {
        //    if (person !== null) {
        //        const FullName = person.FullName;
        //        const OfficePhone = person.OfficePhone;
        //        let Email = person.UserId + '@fairfaxcounty.gov';
        //        const WorkGroupAbbrv = person.WorkGroupAbbrv;
        //        const WorkGroupName = person.WorkGroupName;
        //        const Shift = person.PosShift;
        //        if (person.Email && person.Email !== null)
        //            Email = person.Email;
        //        const currentState = {
        //            ...this.state.PersonalInformation, "FullName": FullName, "OfficePhone": OfficePhone, "Email": Email, "WorkGroupAbbrv": WorkGroupAbbrv, "WorkGroupName": WorkGroupName, "Shift": Shift
        //        };
        //        this.setState({ PersonalInformation: currentState });
        //        // set user location
        //        //const currentSearchState = { ...this.state.SearchEMS, "Location": WorkGroupAbbrv };
        //        //this.setState({ SearchEMS: currentSearchState });
        //        setTimeout(() => {
        //            this.handleSubmit();
        //        }, 200);
        //    }
        //}
        //Search
        _this.handleSubmit = function () {
            _this.setState({ open: true });
            var ComplaintUrl = (0, emsUtilities_1.baseApiUrl)() + 'EMSComplaint/Search';
            var requestSQOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: (0, emsUtilities_1.serializeData)(_this.state.SearchEMS)
            };
            fetch(ComplaintUrl, requestSQOptions).then(function (res) {
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
                    alert('There is no data.');
                else if (responseData === 409)
                    alert((0, emsUtilities_1.getErrorMessage)('There is a conflict.'));
                else if (responseData === 500)
                    alert((0, emsUtilities_1.getErrorMessage)('There is an internal server error.'));
                else {
                    _this.setState({ EMSVComplaint: responseData });
                }
                _this.setState({ open: false });
            }).catch(function (errors) {
                // console.log(errors);
                _this.setState({ open: false });
                alert((0, emsUtilities_1.getErrorMessage)('There is an error during searching for a complaint'));
            });
        };
        //set state
        _this.handleChange = function (event) {
            var _a;
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            var currentSQState = __assign(__assign({}, _this.state.SearchEMS), (_a = {}, _a[name] = value, _a));
            _this.setState({ SearchEMS: currentSQState });
            if (name === 'CategoryId' && (value !== null && value > 0)) {
                _this.getEMSSubCategory(value);
            }
            else if (name === 'SortBy' || name === 'SortOrder')
                setTimeout(function () { _this.handleSubmit(); }, 200);
        };
        _this.handleClear = function () {
            _this.setState({
                EMSVComplaint: [{
                        ComplaintId: 0,
                        ComplaintStatus: '',
                        SubmitterName: '',
                        SubmitterPhoneNo: '',
                        SubmitterShit: '',
                        RequestDate: '',
                        Location: '',
                        CategoryId: 0,
                        SubCategoryId: 0,
                        SubCategoryOthers: '',
                        Unit: '',
                        VehicleNumber: '',
                        AssetNumber: '',
                        ComplaintPriority: 0,
                        SerialNumber: '',
                        IncidentNumber: '',
                        ComplaintDetail: '',
                        CommentsByAdmin: '',
                        CreatedDate: '',
                        CreatedBy: '',
                        UpdatedDate: '',
                        UpdatedBy: '',
                        CategoryDesc: '',
                        SubCategoryDesc: '',
                        WorkGroupName: '',
                        UnitName: ''
                    }], SearchEMS: {
                    CategoryId: 0,
                    SubCategoryId: 0,
                    Location: '',
                    Unit: '',
                    ReportStatus: '',
                    ReviewedStartDate: new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 120).toISOString(),
                    ReviewedEndDate: new Date((new Date()).valueOf() + 1000 * 60 * 60 * 24).toISOString(),
                    SortBy: 'Submitted Date',
                    SortOrder: 'Descending'
                }, PersonalInformation: {
                    FullName: '',
                    OfficePhone: '',
                    Email: '',
                    WorkGroupAbbrv: '',
                    WorkGroupName: ''
                }, open: false
            });
        };
        _this.userId = (0, emsUtilities_1.getUserId)();
        return _this;
    }
    /*EMS Admin Page*/
    EMSAdmin.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Paper, null,
            React.createElement(core_1.Grid, { container: true, spacing: 2 },
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(progressPopup_1.ProgressPopup, { open: this.state.open })),
                React.createElement(core_1.Grid, { item: true, xs: 3 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "*Category"),
                        React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "CategoryId", label: "Category", value: this.state.SearchEMS.CategoryId, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "" },
                                React.createElement("em", null, "Select One")),
                            this.state.EMSCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                React.createElement("em", null, item.CategoryDesc))); })))),
                React.createElement(core_1.Grid, { item: true, xs: 3 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "*Subcategory"),
                        React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "SubCategoryId", label: "Subcategory", value: this.state.SearchEMS.SubCategoryId, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "" },
                                React.createElement("em", null, "Select One")),
                            this.state.EMSSubCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                React.createElement("em", null, item.CategoryDesc))); })))),
                React.createElement(core_1.Grid, { item: true, xs: 2 },
                    React.createElement(core_1.TextField, { id: "date", label: "* Start Date", type: "date", name: "ReviewedStartDate", value: this.state.SearchEMS.ReviewedStartDate && this.state.SearchEMS.ReviewedStartDate.length > 9 ? this.state.SearchEMS.ReviewedStartDate.substring(0, 10) : this.state.SearchEMS.ReviewedStartDate, InputLabelProps: { shrink: true }, onChange: this.handleChange })),
                React.createElement(core_1.Grid, { item: true, xs: 2 },
                    React.createElement(core_1.TextField, { id: "date", label: "* End Date", type: "date", name: "ReviewedEndDate", value: this.state.SearchEMS.ReviewedEndDate && this.state.SearchEMS.ReviewedEndDate.length > 9 ? this.state.SearchEMS.ReviewedEndDate.substring(0, 10) : this.state.SearchEMS.ReviewedEndDate, InputLabelProps: { shrink: true }, onChange: this.handleChange })),
                React.createElement(core_1.Grid, { item: true, xs: 2 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "*Status"),
                        React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "ReportStatus", label: "Status", value: this.state.SearchEMS.ReportStatus, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "" },
                                React.createElement("em", null, "All")),
                            this.state.EMSStatusList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryDesc },
                                React.createElement("em", null, item.CategoryDesc))); })))),
                React.createElement(core_1.Grid, { item: true, xs: 3 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "*Location"),
                        React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "Location", label: "Location", defaultValue: this.state.PersonalInformation.WorkGroupAbbrv, value: this.state.SearchEMS.Location, onChange: this.handleChange }, this.state.WorkGroupList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.WorkGroupAbbrv },
                            React.createElement("em", null, item.WorkGroupName))); })))),
                React.createElement(core_1.Grid, { item: true, xs: 3 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "*Unit"),
                        React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "Unit", label: "Unit", value: this.state.SearchEMS.Unit, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "" },
                                React.createElement("em", null, "Select One")),
                            this.state.UnitList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.Unit },
                                React.createElement("em", null, item.Unit))); })))),
                React.createElement(core_1.Grid, { item: true, xs: 2 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "Sort By"),
                        React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "SortBy", label: "Sort By", value: this.state.SearchEMS.SortBy, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "Category" }, "Category"),
                            React.createElement(core_1.MenuItem, { value: "Location" }, "Location"),
                            React.createElement(core_1.MenuItem, { value: "Status" }, "Status"),
                            React.createElement(core_1.MenuItem, { value: "SubCategory" }, "SubCategory"),
                            React.createElement(core_1.MenuItem, { value: "Submitted Date" }, "Submitted Date"),
                            React.createElement(core_1.MenuItem, { value: "Submitter" }, "Submitter"),
                            React.createElement(core_1.MenuItem, { value: "Unit" }, "Unit")))),
                React.createElement(core_1.Grid, { item: true, xs: 2 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "Sort Order"),
                        React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "SortOrder", label: "Sort Order", value: this.state.SearchEMS.SortOrder, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "Ascending" }, "Ascending"),
                            React.createElement(core_1.MenuItem, { value: "Descending" }, "Descending")))),
                React.createElement(core_1.Grid, { item: true, xs: 2, className: "textRight" },
                    React.createElement(core_1.Button, { variant: "contained", className: "btnImgSearch", onClick: function () { _this.handleSubmit(); }, style: { marginRight: '30px', marginTop: '20px' }, "data-toggle": "tooltip", title: "Search EMS Submission" },
                        React.createElement("img", { src: window.location.origin + '/images/search_icon.png', className: "btnImage" })))),
            React.createElement(core_1.Table, { style: { paddingTop: 10, paddingLeft: 50, marginTop: 10 } },
                React.createElement(core_1.TableHead, null,
                    React.createElement(core_1.TableRow, { className: 'SubTableHeader' },
                        React.createElement(core_1.TableCell, null,
                            React.createElement("h6", null,
                                React.createElement("b", null,
                                    "Id (",
                                    this.state.EMSVComplaint && this.state.EMSVComplaint.length > 0 && this.state.EMSVComplaint[0].ComplaintId && this.state.EMSVComplaint[0].ComplaintId > 0 ? this.state.EMSVComplaint.length : 0,
                                    ")"))),
                        React.createElement(core_1.TableCell, { colSpan: 2 },
                            React.createElement("h6", null,
                                React.createElement("b", null, "Submitter"))),
                        React.createElement(core_1.TableCell, { colSpan: 2 },
                            React.createElement("h6", null,
                                React.createElement("b", null, "Category/SubCategory"))),
                        React.createElement(core_1.TableCell, null,
                            React.createElement("h6", null,
                                React.createElement("b", null, "Submit\u00A0Date"))),
                        React.createElement(core_1.TableCell, { colSpan: 2 },
                            React.createElement("h6", null,
                                React.createElement("b", null, "Location"))),
                        React.createElement(core_1.TableCell, null,
                            React.createElement("h6", null,
                                React.createElement("b", null, "Unit"))),
                        React.createElement(core_1.TableCell, null,
                            React.createElement("h6", null,
                                React.createElement("b", null, "Status"))),
                        React.createElement(core_1.TableCell, null,
                            React.createElement("h6", null,
                                React.createElement("b", null))))),
                this.state.EMSVComplaint && this.state.EMSVComplaint.length > 0 && this.state.EMSVComplaint[0].ComplaintId && this.state.EMSVComplaint[0].ComplaintId > 0 ?
                    React.createElement(core_1.TableBody, null, this.state.EMSVComplaint.map(function (item) { return (React.createElement(core_1.TableRow, { hover: true },
                        React.createElement(core_1.TableCell, { className: "textCenter" },
                            React.createElement("h6", null, item.ComplaintId)),
                        React.createElement(core_1.TableCell, { colSpan: 2, className: "textCenter" },
                            React.createElement("h6", null, item.SubmitterName)),
                        React.createElement(core_1.TableCell, { colSpan: 2, className: "textCenter" },
                            React.createElement("h6", null,
                                item.CategoryDesc,
                                "/",
                                item.SubCategoryDesc)),
                        React.createElement(core_1.TableCell, { className: "textCenter" },
                            React.createElement("h6", null, item.RequestDate.substring(0, 10))),
                        React.createElement(core_1.TableCell, { colSpan: 2, className: "textCenter" },
                            React.createElement("h6", null, item.WorkGroupName)),
                        React.createElement(core_1.TableCell, { className: "textCenter" },
                            React.createElement("h6", null, item.UnitName)),
                        React.createElement(core_1.TableCell, { className: "textCenter" },
                            React.createElement("h6", null, item.ComplaintStatus)),
                        React.createElement(core_1.TableCell, { className: "textRight" },
                            React.createElement(EMSSubmitUpdatePopup_1.EMSSubmitUpdatePopup, { ref: _this.eMSSubmitUpdatePopup, getEMSComplaint: _this.handleSubmit, getEMSCategory: _this.getEMSCategory, PageName: "Admin", EMSComplaint: item })))); })) : React.createElement(core_1.TableBody, null,
                    React.createElement(core_1.TableRow, null,
                        React.createElement(core_1.TableCell, { colSpan: 7, className: "textCenter" },
                            React.createElement("h6", null, "No Complaints")))))));
    };
    EMSAdmin.prototype.componentDidMount = function () {
        this.getWorkGroup();
        this.getUnit();
        this.getEMSCategory();
        this.getEMSStatus();
        this.handleSubmit();
        //    this.selectAnEmployee.current.getEmpOrVol();
    };
    return EMSAdmin;
}(React.Component));
exports.EMSAdmin = EMSAdmin;


/***/ }),

/***/ "./src/EMSAdmin/EMSAdminApp.tsx":
/*!**************************************!*\
  !*** ./src/EMSAdmin/EMSAdminApp.tsx ***!
  \**************************************/
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
exports.EMSAdminApp = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var EMSAdmin_1 = __webpack_require__(/*! ./EMSAdmin */ "./src/EMSAdmin/EMSAdmin.tsx");
var EMSAdminApp = /** @class */ (function (_super) {
    __extends(EMSAdminApp, _super);
    function EMSAdminApp(props) {
        return _super.call(this, props) || this;
    }
    EMSAdminApp.prototype.render = function () {
        return (React.createElement(EMSAdmin_1.EMSAdmin, null));
    };
    return EMSAdminApp;
}(React.Component));
exports.EMSAdminApp = EMSAdminApp;


/***/ }),

/***/ "./src/emsAdmin.tsx":
/*!**************************!*\
  !*** ./src/emsAdmin.tsx ***!
  \**************************/
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
var EMSAdminApp_1 = __webpack_require__(/*! ./EMSAdmin/EMSAdminApp */ "./src/EMSAdmin/EMSAdminApp.tsx");
ReactDOM.render(React.createElement(EMSAdminApp_1.EMSAdminApp, null), document.getElementById('emsAdmin'));


/***/ }),

/***/ "./src/progressPopup.tsx":
/*!*******************************!*\
  !*** ./src/progressPopup.tsx ***!
  \*******************************/
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
exports.ProgressPopup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
/******/ 			"emsAdmin": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_material-ui_core_esm_index_js-n-a05e18","src_EMSSubmit_EMSSubmitUpdatePopup_tsx"], () => (__webpack_require__("./src/emsAdmin.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=emsAdmin.bundle.js.map