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
exports.EMSAdmin = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var emsUtilities_1 = require("../utilities/emsUtilities");
//import { SelectAnEmployee } from '../EMSSubmit/SelectAnEmployee';
var EMSSubmitUpdatePopup_1 = require("../EMSSubmit/EMSSubmitUpdatePopup");
var progressPopup_1 = require("../progressPopup");
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
            var url = emsUtilities_1.baseApiUrl() + 'Lookup/Locations';
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
            var url = emsUtilities_1.baseApiUrl() + 'Lookup/Units';
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
        // get ems sub category
        _this.getEMSSubCategory = function (value) {
            var url = emsUtilities_1.baseApiUrl() + 'EMSSubCategoryById?Id=' + value;
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
            var url = emsUtilities_1.baseApiUrl() + 'EMSCategoryByType?Type=Status';
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
            var ComplaintUrl = emsUtilities_1.baseApiUrl() + 'EMSComplaint/Search';
            var requestSQOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: emsUtilities_1.serializeData(_this.state.SearchEMS)
            };
            fetch(ComplaintUrl, requestSQOptions).then(function (res) {
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
                    alert('There is no data.');
                else if (responseData === 409)
                    alert(emsUtilities_1.getErrorMessage('There is a conflict.'));
                else if (responseData === 500)
                    alert(emsUtilities_1.getErrorMessage('There is an internal server error.'));
                else {
                    _this.setState({ EMSVComplaint: responseData });
                }
                _this.setState({ open: false });
            }).catch(function (errors) {
                // console.log(errors);
                _this.setState({ open: false });
                alert(emsUtilities_1.getErrorMessage('There is an error during searching for a complaint'));
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
        _this.userId = emsUtilities_1.getUserId();
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
//# sourceMappingURL=EMSAdmin.js.map