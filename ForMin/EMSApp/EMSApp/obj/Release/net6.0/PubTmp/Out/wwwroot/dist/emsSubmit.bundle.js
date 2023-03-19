/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EMSSubmit/EMSSubmit.tsx":
/*!*************************************!*\
  !*** ./src/EMSSubmit/EMSSubmit.tsx ***!
  \*************************************/
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
exports.EMSSubmit = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var SelectAnEmployee_1 = __webpack_require__(/*! ./SelectAnEmployee */ "./src/EMSSubmit/SelectAnEmployee.tsx");
var EMSSubmitInsertPopup_1 = __webpack_require__(/*! ./EMSSubmitInsertPopup */ "./src/EMSSubmit/EMSSubmitInsertPopup.tsx");
var EMSSubmitUpdatePopup_1 = __webpack_require__(/*! ./EMSSubmitUpdatePopup */ "./src/EMSSubmit/EMSSubmitUpdatePopup.tsx");
var EMSSubmit = /** @class */ (function (_super) {
    __extends(EMSSubmit, _super);
    function EMSSubmit(props) {
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
                WorkGroupName: '',
                Shift: ''
            }
        };
        _this.selectAnEmployee = React.createRef();
        _this.eMSSubmitInsertPopup = React.createRef();
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
        _this.setPersonalInformation = function (person) {
            if (person !== null) {
                var FullName = person.FullName;
                var OfficePhone = person.OfficePhone;
                var Email = person.UserId + '@fairfaxcounty.gov';
                var WorkGroupAbbrv = person.WorkGroupAbbrv;
                var WorkGroupName = person.WorkGroupName;
                var Shift = person.PosShift;
                if (person.Email && person.Email !== null)
                    Email = person.Email;
                var currentState = __assign(__assign({}, _this.state.PersonalInformation), { "FullName": FullName, "OfficePhone": OfficePhone, "Email": Email, "WorkGroupAbbrv": WorkGroupAbbrv, "WorkGroupName": WorkGroupName, "Shift": Shift });
                _this.setState({ PersonalInformation: currentState });
                // set user location
                var currentSearchState = __assign(__assign({}, _this.state.SearchEMS), { "Location": WorkGroupAbbrv });
                _this.setState({ SearchEMS: currentSearchState });
                setTimeout(function () {
                    _this.handleSubmit();
                }, 200);
            }
        };
        //Search
        _this.handleSubmit = function () {
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
            }).catch(function (errors) {
                // console.log(errors);
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
                    WorkGroupName: '',
                    Shift: ''
                }
            });
        };
        _this.userId = (0, emsUtilities_1.getUserId)();
        return _this;
    }
    //Manage Page
    EMSSubmit.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Paper, null,
            React.createElement(core_1.Grid, { container: true, spacing: 2 },
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(SelectAnEmployee_1.SelectAnEmployee, { ref: this.selectAnEmployee, setPersonalInformation: this.setPersonalInformation })),
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
                        React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "Location", label: "Location", defaultValue: this.state.PersonalInformation.WorkGroupAbbrv, value: this.state.SearchEMS.Location, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "" },
                                React.createElement("em", null, "Select One")),
                            this.state.WorkGroupList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.WorkGroupAbbrv },
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
                    React.createElement(core_1.Button, { variant: "contained", className: "btnImgSearch", onClick: function () { _this.handleSubmit(); }, style: { marginRight: '30px', marginTop: '20px' }, "data-toggle": "tooltip", title: "Search EMS Submissions" },
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
                        React.createElement(core_1.TableCell, { className: "textRight" },
                            React.createElement(EMSSubmitInsertPopup_1.EMSSubmitInsertPopup, { ref: this.eMSSubmitInsertPopup, getEMSComplaint: this.handleSubmit, personalInformation: this.state.PersonalInformation, getEMSCategory: this.getEMSCategory, PageName: "Submit" })))),
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
                            React.createElement(EMSSubmitUpdatePopup_1.EMSSubmitUpdatePopup, { ref: _this.eMSSubmitUpdatePopup, getEMSComplaint: _this.handleSubmit, getEMSCategory: _this.getEMSCategory, PageName: "Submit", EMSComplaint: item })))); })) : React.createElement(core_1.TableBody, null,
                    React.createElement(core_1.TableRow, null,
                        React.createElement(core_1.TableCell, { colSpan: 7, className: "textCenter" },
                            React.createElement("h6", null, "No Complaints")))))));
    };
    EMSSubmit.prototype.componentDidMount = function () {
        this.getWorkGroup();
        this.getUnit();
        this.getEMSCategory();
        this.getEMSStatus();
        this.selectAnEmployee.current.getEmpOrVol();
    };
    return EMSSubmit;
}(React.Component));
exports.EMSSubmit = EMSSubmit;


/***/ }),

/***/ "./src/EMSSubmit/EMSSubmitApp.tsx":
/*!****************************************!*\
  !*** ./src/EMSSubmit/EMSSubmitApp.tsx ***!
  \****************************************/
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
exports.EMSSubmitApp = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var EMSSubmit_1 = __webpack_require__(/*! ./EMSSubmit */ "./src/EMSSubmit/EMSSubmit.tsx");
var EMSSubmitApp = /** @class */ (function (_super) {
    __extends(EMSSubmitApp, _super);
    function EMSSubmitApp(props) {
        return _super.call(this, props) || this;
    }
    EMSSubmitApp.prototype.render = function () {
        return (React.createElement(EMSSubmit_1.EMSSubmit, null));
    };
    return EMSSubmitApp;
}(React.Component));
exports.EMSSubmitApp = EMSSubmitApp;


/***/ }),

/***/ "./src/EMSSubmit/EMSSubmitInsertPopup.tsx":
/*!************************************************!*\
  !*** ./src/EMSSubmit/EMSSubmitInsertPopup.tsx ***!
  \************************************************/
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
exports.EMSSubmitInsertPopup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var EMSSubmitTab_1 = __webpack_require__(/*! ./EMSSubmitTab */ "./src/EMSSubmit/EMSSubmitTab.tsx");
var EMSSubmitInsertPopup = /** @class */ (function (_super) {
    __extends(EMSSubmitInsertPopup, _super);
    function EMSSubmitInsertPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            EMSComplaint: {
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
                UpdatedBy: ''
            }, EMSVComplaint: {
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
            }, EMSSupplementalDoc: {
                DocId: 0,
                ComplaintId: 0,
                DocType: '',
                DocName: '',
                DocDesc: '',
                DocDescOther: '',
                DocExt: '',
                Doc: '',
                ImageDoc: '',
                DocLocation: '',
                Comments: '',
                CreatedDate: '',
                CreateBy: '',
                UpdatedDate: '',
                UpdatedBy: ''
            }, EMSSupplementalDocs: [{
                    DocId: 0,
                    ComplaintId: 0,
                    DocType: '',
                    DocName: '',
                    DocDesc: '',
                    DocDescOther: '',
                    DocExt: '',
                    Doc: '',
                    ImageDoc: '',
                    DocLocation: '',
                    Comments: '',
                    CreatedDate: '',
                    CreateBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }], EMSCategoryList: [{
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
                }], UnitList: [{
                    Id: 0,
                    Unit: '',
                    WorkGroupId: '',
                    WorkGroupAbbrv: ''
                }], WorkGroupList: [{
                    Id: 0,
                    WorkGroupAbbrv: '',
                    WorkGroupName: '',
                    battalion: ''
                }], Email: {
                From: 'DoNotReply-EMS-Submission@fairfaxcounty.gov',
                To: [''],
                CC: [''],
                BCC: ['ykim01@fairfaxcounty.gov'],
                Subject: '',
                Body: ''
            }, show: false, canSave: false, showDetail: true, PageName: '',
            SerialNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
            AssetNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
            VehicleNumberRequire: [1, 85],
            InicdentNumberRequire: [131, 132]
        };
        _this.eMSSubmitTab = React.createRef();
        _this.userId = '';
        _this.userName = '';
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
            var currentSQState = __assign(__assign({}, _this.state.EMSComplaint), (_a = {}, _a[name] = value, _a));
            _this.setState({ EMSComplaint: currentSQState });
            if (_this.state.EMSComplaint.ComplaintDetail !== null && _this.state.EMSComplaint.ComplaintDetail !== 'undefined' && _this.state.EMSComplaint.IncidentNumber !== null && _this.state.EMSComplaint.IncidentNumber !== 'undefined') {
                _this.setState({ canSave: true });
            }
            else
                _this.setState({ canSave: false });
            if (name === 'CategoryId' && (value !== null && value > 0)) {
                _this.getEMSSubCategory(value);
            }
        };
        //Get a Complaint
        _this.getEMSVComplaint = function (value) {
            var url = (0, emsUtilities_1.baseApiUrl)() + 'EMSVComplaintById?Id=' + value;
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                _this.setState({ EMSVComplaint: responseData });
                setTimeout(function () { _this.sendEmail(); }, 100);
            }).catch(function (errors) {
                //console.log(errors);
            });
        };
        //Insert Complaint
        _this.handleSubmit = function () {
            console.log(_this.state.EMSComplaint.CategoryId);
            if (_this.state.EMSComplaint.CategoryId && _this.state.EMSComplaint.CategoryId > 0) {
                if (_this.state.EMSComplaint.SubCategoryId && _this.state.EMSComplaint.SubCategoryId > 0) {
                    if (_this.state.EMSComplaint.SubmitterName && _this.state.EMSComplaint.SubmitterName.length > 1) {
                        if (_this.state.EMSComplaint.SubmitterShit && _this.state.EMSComplaint.SubmitterShit.length > 0) {
                            if (_this.state.EMSComplaint.Location && _this.state.EMSComplaint.Location.length > 1) {
                                if (_this.state.EMSComplaint.Unit && _this.state.EMSComplaint.Unit.length > 1 || _this.state.EMSComplaint.CategoryId === 53) {
                                    if ((_this.state.EMSComplaint.SerialNumber && _this.state.EMSComplaint.SerialNumber.length > 1) || _this.state.SerialNumberRequire.indexOf(_this.state.EMSComplaint.CategoryId) < 0) {
                                        if ((_this.state.EMSComplaint.VehicleNumber && _this.state.EMSComplaint.VehicleNumber.length > 1) || _this.state.VehicleNumberRequire.indexOf(_this.state.EMSComplaint.CategoryId) < 0) {
                                            if ((_this.state.EMSComplaint.AssetNumber && _this.state.EMSComplaint.AssetNumber.length > 1) || _this.state.AssetNumberRequire.indexOf(_this.state.EMSComplaint.CategoryId) < 0) {
                                                if ((_this.state.EMSComplaint.IncidentNumber && _this.state.EMSComplaint.IncidentNumber.length === 10) || _this.state.InicdentNumberRequire.indexOf(_this.state.EMSComplaint.SubCategoryId) < 0) {
                                                    var ComplaintUrl = (0, emsUtilities_1.baseApiUrl)() + 'Complaint/Insert';
                                                    var today = new Date().toISOString();
                                                    _this.state.EMSComplaint.ComplaintStatus = 'Submitted';
                                                    _this.state.EMSComplaint.RequestDate = today;
                                                    _this.state.EMSComplaint.CreatedBy = _this.userId;
                                                    _this.state.EMSComplaint.CreatedDate = today;
                                                    _this.state.EMSComplaint.UpdatedBy = _this.userId;
                                                    _this.state.EMSComplaint.UpdatedDate = today;
                                                    var requestSQOptions = {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/x-www-form-urlencoded'
                                                        },
                                                        body: (0, emsUtilities_1.serializeData)(_this.state.EMSComplaint)
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
                                                            alert((0, emsUtilities_1.getErrorMessage)('There is no data.'));
                                                        else if (responseData === 409)
                                                            alert((0, emsUtilities_1.getErrorMessage)('There is a conflict.'));
                                                        else if (responseData === 500)
                                                            alert((0, emsUtilities_1.getErrorMessage)('There is an internal server error.'));
                                                        else {
                                                            _this.setState({ EMSComplaint: responseData });
                                                            //alert(getSuccessMessage('a complaint'));
                                                            setTimeout(function () { _this.getEMSVComplaint(_this.state.EMSComplaint.ComplaintId); }, 200);
                                                            if (_this.state.EMSComplaint.CategoryId && _this.state.EMSComplaint.CategoryId > 0) {
                                                                _this.handleShowSupplementalDoc();
                                                            }
                                                        }
                                                    }).catch(function (errors) {
                                                        alert((0, emsUtilities_1.getErrorMessage)('There is an error during inserting a complaint'));
                                                    });
                                                }
                                                else
                                                    alert('Please input the Incident Number. It must be 10 characters.');
                                            }
                                            else
                                                alert('Please input the County Asset Number');
                                        }
                                        else
                                            alert('Please input the County Vehicle Number');
                                    }
                                    else
                                        alert('Please input the Serial Number');
                                }
                                else
                                    alert('Please select a Unit');
                            }
                            else
                                alert('Please select the Location');
                        }
                        else
                            alert('Please select the Submitter Shift');
                    }
                    else
                        alert("It couldn't get the Submitter Name. Please refresh your browser and then try it again.");
                }
                else
                    alert('Please select a Subcategory');
            }
            else
                alert('Please select a Category');
        };
        // send email
        _this.sendEmail = function () {
            _this.state.Email.To[0] = 'FIRE-EMSSubmission@fairfaxcounty.gov';
            if (_this.userId && _this.userId.length > 3)
                _this.state.Email.CC[0] = _this.userId + '@fairfaxcounty.gov';
            _this.state.Email.Subject = 'New complaint has been submitted for ' + _this.state.EMSVComplaint.ComplaintId + ' (' + new Date(_this.state.EMSVComplaint.CreatedDate).toLocaleDateString() + ')';
            var header1 = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title></title></head><body>' +
                '<div style="color:white; background-color: #3481ab; box-shadow:0.5px 0.5px #003366; border: 20px solid #3481ab; margin: 0px 10px;">' +
                '<h3 style="vertical-align:text-top;"><img src="https://firenet/images/email/FRDPatch.jpg" width="30" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  style="margin-left:15px;">EMS Submission for ' + _this.state.EMSVComplaint.ComplaintId + ' (' + new Date(_this.state.EMSVComplaint.CreatedDate).toLocaleDateString() + ')</span></h3></div>';
            var body1 = '<div style="background-color:white; color:black; padding:10px;">' +
                '<span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Complaint Id:</strong> ' + _this.state.EMSVComplaint.ComplaintId +
                '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Submitter:</strong> ' + _this.state.EMSVComplaint.SubmitterName +
                '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Unit:</strong> ' + _this.state.EMSVComplaint.Unit;
            if (_this.state.EMSVComplaint.CategoryId)
                body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Category:</strong> ' + _this.state.EMSVComplaint.CategoryDesc;
            if (_this.state.EMSVComplaint.SubCategoryId)
                body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Subcategory:</strong> ' + _this.state.EMSVComplaint.SubCategoryDesc;
            if (_this.state.EMSVComplaint.Location)
                body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Location:</strong> ' + _this.state.EMSVComplaint.WorkGroupName;
            if (_this.state.EMSVComplaint.ComplaintDetail)
                body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Complaint Detail:</strong> ' + _this.state.EMSVComplaint.ComplaintDetail;
            body1 = body1 + '</span><br /><br />if you are a <strong style="font-size:1.2em">Submitter</strong> click <a href="' + (0, emsUtilities_1.getHost)() + '/applications/emsapp' + '">here</a> to find your complaint.<span></li>';
            var footer = '<br /><br /><span style="font-weight:normal">Please email <strong><a href="mailto:' + _this.userId + '@fairfaxcounty.gov">me</a></strong> if you have any questions.</span >' +
                '<br /><br /><span style="font-weight:normal">Thank you.</span><br /><span>' + _this.userName + '</span></div>' +
                '</body></html>';
            // fist email
            _this.state.Email.Body = header1 + body1 + footer;
            var requestSQOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: (0, emsUtilities_1.serializeData)(_this.state.Email)
            };
            fetch((0, emsUtilities_1.baseEmailApiUrl)() + 'SendEmails', requestSQOptions).then(function (res) {
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
                    alert('Your complaint has been submitted successfully');
                }
            }).catch(function (errors) {
                alert((0, emsUtilities_1.getErrorMessage)('There is an error during sending a Notification Email.'));
            });
        };
        //clear state
        _this.handleClear = function () {
            _this.setState({
                EMSComplaint: {
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
                    UpdatedBy: ''
                }, Email: {
                    From: 'DoNotReply-EMS-Submission@fairfaxcounty.gov',
                    To: [''],
                    CC: [''],
                    BCC: ['ykim01@fairfaxcounty.gov'],
                    Subject: '',
                    Body: ''
                }, showDetail: false, canSave: false, PageName: '', CurrentStatus: '',
                SerialNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
                AssetNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
                VehicleNumberRequire: [1, 85],
                InicdentNumberRequire: [131, 132]
            });
        };
        _this.handleShowSupplementalDoc = function () {
            _this.setState({ showSupplementalDoc: true });
        };
        _this.handleShow = function () {
            _this.setState({ show: true });
            _this.getEMSCategory();
            _this.getWorkGroup();
            _this.getUnit();
            setTimeout(function () { _this.setComplaint(); });
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
            _this.props.getEMSComplaint();
        };
        _this.setComplaint = function () {
            var currentState = __assign(__assign({}, _this.state.EMSComplaint), { "SubmitterName": _this.props.personalInformation.FullName, "SubmitterPhoneNo": _this.props.personalInformation.OfficePhone, "Location": _this.props.personalInformation.WorkGroupAbbrv, "SubmitterShit": _this.props.personalInformation.Shift });
            _this.setState({ EMSComplaint: currentState });
        };
        _this.userId = (0, emsUtilities_1.getUserId)();
        _this.userName = (0, emsUtilities_1.getUserName)();
        return _this;
    }
    EMSSubmitInsertPopup.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "left" } },
            React.createElement(core_1.Grid, { container: true, className: "textRight alignRight" },
                React.createElement(core_1.Button, { variant: "contained", onClick: function () { _this.handleShow(); }, className: "btnImgInsert marginRight10", "data-toggle": "tooltip", title: "New EMS Submission" },
                    React.createElement("img", { src: window.location.origin + '/images/add_white.png', className: "btnImage" }))),
            React.createElement(core_1.Modal, { className: "insertModal", open: this.state.show, onClose: function () { _this.handleClear.call(_this); _this.handleClose(); }, disableBackdropClick: true },
                React.createElement(core_1.Paper, { className: "ModalDiv" },
                    React.createElement(core_1.Grid, { container: true, spacing: 2 },
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { id: this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel', style: { fontSize: 13 } }, "* Category"),
                                React.createElement(core_1.Select, { id: this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel', name: "CategoryId", label: "Category", value: this.state.EMSComplaint.CategoryId, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: "" },
                                        React.createElement("em", null, "Select One")),
                                    this.state.EMSCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                        React.createElement("em", null, item.CategoryDesc))); })))),
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { id: this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel', style: { fontSize: 13 } }, "* Subcategory"),
                                React.createElement(core_1.Select, { id: this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel', name: "SubCategoryId", label: "SubCategory", value: this.state.EMSComplaint.SubCategoryId, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: "" },
                                        React.createElement("em", null, "Select One")),
                                    this.state.EMSSubCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                        React.createElement("em", null, item.CategoryDesc))); })))),
                        React.createElement(core_1.Grid, { item: true, xs: 4, sm: 4 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { style: { fontSize: 13 } }, "*Location"),
                                React.createElement(core_1.Select, { name: "Location", label: "Location", value: this.state.EMSComplaint.Location, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: "" },
                                        React.createElement("em", null, "Select One")),
                                    this.state.WorkGroupList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.WorkGroupAbbrv },
                                        React.createElement("em", null, item.WorkGroupName))); })))),
                        React.createElement(core_1.Grid, { item: true, xs: 4, sm: 4 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { style: { fontSize: 13 } }, "*Shift"),
                                React.createElement(core_1.Select, { name: "SubmitterShit", label: "Shift", value: this.state.EMSComplaint.SubmitterShit, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: "" },
                                        React.createElement("em", null, "Select One")),
                                    React.createElement(core_1.MenuItem, { value: "A" },
                                        React.createElement("em", null, "A")),
                                    React.createElement(core_1.MenuItem, { value: "B" },
                                        React.createElement("em", null, "B")),
                                    React.createElement(core_1.MenuItem, { value: "C" },
                                        React.createElement("em", null, "C")),
                                    React.createElement(core_1.MenuItem, { value: "D" },
                                        React.createElement("em", null, "D")),
                                    React.createElement(core_1.MenuItem, { value: "Volunteer" },
                                        React.createElement("em", null, "Volunteer"))))),
                        React.createElement(core_1.Grid, { item: true, xs: 4, sm: 4 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { id: (this.state.EMSComplaint.CategoryId === 0 || this.state.EMSComplaint.CategoryId === 53) || (this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 0) ? '' : 'requiredFieldLabel', style: { fontSize: 13 } }, "*Unit"),
                                React.createElement(core_1.Select, { id: (this.state.EMSComplaint.CategoryId === 0 || this.state.EMSComplaint.CategoryId === 53) || (this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 0) ? '' : 'requiredFieldLabel', name: "Unit", label: "Unit", value: this.state.EMSComplaint.Unit, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: 0 },
                                        React.createElement("em", null, "Select One")),
                                    this.state.UnitList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.Unit },
                                        React.createElement("em", null, item.Unit))); })))),
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 }, this.state.SerialNumberRequire.indexOf(this.state.EMSComplaint.CategoryId) > -1 ? React.createElement(core_1.TextField, { name: "SerialNumber", id: this.state.EMSComplaint.SerialNumber && this.state.EMSComplaint.SerialNumber.length > 1 ? '' : 'requiredFieldLabel', className: "errorMessage", placeholder: "Serial Number", value: this.state.EMSComplaint.SerialNumber, onChange: this.handleChange, helperText: "Serial Number", inputProps: { maxLength: 11 } }) : React.createElement(core_1.TextField, { name: "SerialNumber", className: "errorMessage", placeholder: "Serial Number", value: this.state.EMSComplaint.SerialNumber, onChange: this.handleChange, helperText: "Serial Number", inputProps: { maxLength: 11 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 }, this.state.VehicleNumberRequire.indexOf(this.state.EMSComplaint.CategoryId) > -1 ? React.createElement(core_1.TextField, { name: "VehicleNumber", id: this.state.EMSComplaint.VehicleNumber && this.state.EMSComplaint.VehicleNumber.length > 1 ? '' : 'requiredFieldLabel', className: "errorMessage", placeholder: "Vehicle Number", value: this.state.EMSComplaint.VehicleNumber, onChange: this.handleChange, helperText: "Vehicle Number", inputProps: { maxLength: 10 } }) : React.createElement(core_1.TextField, { name: "VehicleNumber", className: "errorMessage", placeholder: "Vehicle Number", value: this.state.EMSComplaint.VehicleNumber, onChange: this.handleChange, helperText: "Vehicle Number", inputProps: { maxLength: 11 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 }, this.state.AssetNumberRequire.indexOf(this.state.EMSComplaint.CategoryId) > -1 ? React.createElement(core_1.TextField, { name: "AssetNumber", id: this.state.EMSComplaint.AssetNumber && this.state.EMSComplaint.AssetNumber.length > 1 ? '' : 'requiredFieldLabel', className: "errorMessage", placeholder: "County Asset Number", value: this.state.EMSComplaint.AssetNumber, onChange: this.handleChange, helperText: "County Asset Number", inputProps: { maxLength: 10 } }) : React.createElement(core_1.TextField, { name: "AssetNumber", className: "errorMessage", placeholder: "County Asset Number", value: this.state.EMSComplaint.AssetNumber, onChange: this.handleChange, helperText: "County Asset Number", inputProps: { maxLength: 10 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 }, this.state.InicdentNumberRequire.indexOf(this.state.EMSComplaint.SubCategoryId) > -1 ? React.createElement(core_1.TextField, { name: "IncidentNumber", id: this.state.EMSComplaint.IncidentNumber && this.state.EMSComplaint.IncidentNumber.length > 1 ? '' : 'requiredFieldLabel', className: "errorMessage", placeholder: "Incident Number", value: this.state.EMSComplaint.IncidentNumber, onChange: this.handleChange, helperText: "Incident Number", inputProps: { maxLength: 11 } }) : React.createElement(core_1.TextField, { name: "IncidentNumber", className: "errorMessage", placeholder: "Incident Number", value: this.state.EMSComplaint.IncidentNumber, onChange: this.handleChange, helperText: "Incident Number", inputProps: { maxLength: 11 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 12 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.TextField, { name: "ComplaintDetail", id: "filled-multiline-static", label: "Complaint Detail", multiline: true, rows: 5, className: "errorMessage", placeholder: "Complaint Detail", style: { width: '100%' }, value: this.state.EMSComplaint.ComplaintDetail, onChange: this.handleChange }))),
                        (this.state.EMSComplaint.ComplaintId !== null && this.state.EMSComplaint.ComplaintId > 0) ?
                            React.createElement(core_1.Grid, { item: true, xs: 12 },
                                React.createElement(EMSSubmitTab_1.EMSSubmitTab, { ref: this.eMSSubmitTab, ComplaintId: this.state.EMSComplaint.ComplaintId, PageName: this.props.PageName })) : null,
                        React.createElement(core_1.Grid, { className: "textRight", item: true, xs: 9 },
                            React.createElement("h6", { className: "notification" }, "Click Submit prior to uploading any supplemental documents or images")),
                        React.createElement(core_1.Grid, { className: "textRight", item: true, xs: 3 },
                            React.createElement(core_1.Button, { variant: 'contained', color: "primary", onClick: function () { _this.handleSubmit(); }, disabled: !this.state.canSave }, "Submit"),
                            React.createElement(core_1.Button, { variant: 'contained', color: "secondary", onClick: function () { _this.handleClear(); } }, "Clear"),
                            React.createElement(core_1.Button, { variant: 'contained', color: "default", onClick: function () { _this.handleClear(); _this.handleClose(); } }, "Close")))))));
    };
    return EMSSubmitInsertPopup;
}(React.Component));
exports.EMSSubmitInsertPopup = EMSSubmitInsertPopup;


/***/ }),

/***/ "./src/EMSSubmit/SelectAnEmployee.tsx":
/*!********************************************!*\
  !*** ./src/EMSSubmit/SelectAnEmployee.tsx ***!
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
exports.SelectAnEmployee = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var SelectAnEmployee = /** @class */ (function (_super) {
    __extends(SelectAnEmployee, _super);
    function SelectAnEmployee(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            Employee: [{
                    Id: 0,
                    Ein: '',
                    FocusEin: '',
                    LastName: '',
                    FirstName: '',
                    MiddleName: '',
                    FullName: '',
                    Suffix: '',
                    Sex: '',
                    DOB: '',
                    Race: '',
                    FrdHireDate: '',
                    AssignedDate: '',
                    Code: '',
                    CountyAbbr: '',
                    DeptAbbr: '',
                    ClassTitle: '',
                    FocusTitle: '',
                    PayActionDesc: '',
                    PayScaleGroup: '',
                    PayScaleLevel: '',
                    PositionNo: '',
                    PositionName: '',
                    WorkGroupAbbrv: '',
                    WorkGroupDesc: '',
                    WorkGroupName: '',
                    DisasterTeam: '',
                    PosShift: '',
                    PosFocusTitle: '',
                    PosCountyAbbr: '',
                    PosDeptAbbr: '',
                    PosClassTitle: '',
                    Commnets: '',
                    Specialty: '',
                    EmpTypeCode: '',
                    Address1: '',
                    Address2: '',
                    City: '',
                    state: '',
                    ZipCode: '',
                    UserId: '',
                    Email: '',
                    Battalion: '',
                    OfficePhone: '',
                    OfficeCell: ''
                }], show: false
        };
        _this.getEmpOrVol = function () {
            var userId = (0, emsUtilities_1.getUserId)();
            var url = (0, emsUtilities_1.basePersonApiUrl)() + 'EmpAndVol?userid=' + (0, emsUtilities_1.getUserId)();
            // for testing
            //if (userId === 'ykim01')
            //    url = basePersonApiUrl() + 'EmpAndVol?userId=AWOOLF';
            //url = baseApiUrl() + 'EmpAndVol?userId=RGUNDE';
            _this.handleShow();
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
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
                    _this.setState({ Employee: responseData });
                    if (_this.state.Employee && _this.state.Employee.length > 0 && _this.state.Employee[0].Id > 0) {
                        if (_this.state.Employee.length === 1) {
                            _this.props.setPersonalInformation.call(_this, _this.state.Employee[0]);
                            _this.handleClose();
                        }
                    }
                }
            });
        };
        _this.handleShow = function () {
            _this.setState({ show: true });
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
        };
        _this.searchPerson = function () {
            return (React.createElement(core_1.Grid, { item: true, xs: 6 },
                React.createElement(core_1.Modal, { className: "personSearchModal", open: _this.state.show, onClose: _this.handleClose },
                    React.createElement("div", { className: "ModalDiv" },
                        React.createElement("div", null,
                            React.createElement("h3", null, "Select An Employee or Volunteer")),
                        React.createElement(core_1.Paper, null,
                            React.createElement(core_1.TableContainer, { style: { maxHeight: "400px" } },
                                React.createElement(core_1.Table, { stickyHeader: true, style: _this.state.Employee.length > 0 && _this.state.Employee[0].FullName.length > 0 ? {} : { display: 'none' } },
                                    React.createElement(core_1.TableHead, null,
                                        React.createElement(core_1.TableRow, null,
                                            React.createElement(core_1.TableCell, null,
                                                "Full Name (",
                                                _this.state.Employee.length,
                                                ")"),
                                            React.createElement(core_1.TableCell, null, "EIN"),
                                            React.createElement(core_1.TableCell, null, "Shift"),
                                            React.createElement(core_1.TableCell, null, "Battalion"),
                                            React.createElement(core_1.TableCell, null, "Location"),
                                            React.createElement(core_1.TableCell, null, "Rank"))),
                                    React.createElement(core_1.TableBody, null, _this.state.Employee.map(function (item, index) { return (React.createElement(core_1.TableRow, { hover: true, key: index },
                                        React.createElement(core_1.TableCell, null,
                                            React.createElement("a", { href: "#", onClick: function () { _this.props.setPersonalInformation.call(_this, item); _this.handleClose(); } }, item.FullName)),
                                        React.createElement(core_1.TableCell, null, item.Ein),
                                        React.createElement(core_1.TableCell, null, item.PosShift),
                                        React.createElement(core_1.TableCell, null, item.Battalion),
                                        React.createElement(core_1.TableCell, null, item.WorkGroupDesc),
                                        React.createElement(core_1.TableCell, null, item.ClassTitle))); })))),
                            React.createElement("h3", { className: 'alert alert-danger col-12', style: _this.state.Employee.length > 0 ? { display: 'none' } : {} }, "Not Found"))))));
        };
        return _this;
    }
    // display UI on the Person Search Popup Window
    SelectAnEmployee.prototype.render = function () {
        return (React.createElement(this.searchPerson, null));
    };
    return SelectAnEmployee;
}(React.Component));
exports.SelectAnEmployee = SelectAnEmployee;


/***/ }),

/***/ "./src/emsSubmit.tsx":
/*!***************************!*\
  !*** ./src/emsSubmit.tsx ***!
  \***************************/
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
var EMSSubmitApp_1 = __webpack_require__(/*! ./EMSSubmit/EMSSubmitApp */ "./src/EMSSubmit/EMSSubmitApp.tsx");
ReactDOM.render(React.createElement(EMSSubmitApp_1.EMSSubmitApp, null), document.getElementById('emsSubmit'));


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
/******/ 			"emsSubmit": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_material-ui_core_esm_index_js-n-a05e18","src_EMSSubmit_EMSSubmitUpdatePopup_tsx"], () => (__webpack_require__("./src/emsSubmit.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=emsSubmit.bundle.js.map