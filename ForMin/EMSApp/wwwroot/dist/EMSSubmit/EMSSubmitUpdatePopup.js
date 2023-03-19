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
exports.EMSSubmitUpdatePopup = void 0;
var React = __importStar(require("react"));
var emsUtilities_1 = require("../utilities/emsUtilities");
var core_1 = require("@material-ui/core");
var EMSSubmitTab_1 = require("./EMSSubmitTab");
var EMSDetail_1 = require("./EMSDetail");
var EMSSubmitUpdatePopup = /** @class */ (function (_super) {
    __extends(EMSSubmitUpdatePopup, _super);
    function EMSSubmitUpdatePopup(props) {
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
                }], show: false, showDetail: false, canSave: false, PageName: '', CurrentStatus: ''
        };
        _this.eMSSubmitTab = React.createRef();
        _this.eMSDetail = React.createRef();
        _this.userId = '';
        _this.userName = '';
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
            var url = emsUtilities_1.baseApiUrl() + 'EMSVComplaintById?Id=' + value;
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
        //Update Complaint
        _this.handleSubmit = function () {
            if (_this.state.EMSComplaint.Unit && _this.state.EMSComplaint.Unit.length > 1) {
                if ((_this.state.EMSComplaint.SerialNumber && _this.state.EMSComplaint.SerialNumber.length > 1) || (_this.state.EMSComplaint.CategoryId === 2 || _this.state.EMSComplaint.CategoryId === 35 || _this.state.EMSComplaint.CategoryId === 39)) {
                    if ((_this.state.EMSComplaint.AssetNumber && _this.state.EMSComplaint.AssetNumber.length > 1) || (_this.state.EMSComplaint.CategoryId === 2 || _this.state.EMSComplaint.CategoryId === 35 || _this.state.EMSComplaint.CategoryId === 39)) {
                        var ComplaintUrl = emsUtilities_1.baseApiUrl() + 'Complaint/Update';
                        var today = new Date().toISOString();
                        _this.state.EMSComplaint.UpdatedBy = _this.userId;
                        _this.state.EMSComplaint.UpdatedDate = today;
                        var requestSQOptions = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            body: emsUtilities_1.serializeData(_this.state.EMSComplaint)
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
                                alert(emsUtilities_1.getErrorMessage('There is no data.'));
                            else if (responseData === 409)
                                alert(emsUtilities_1.getErrorMessage('There is a conflict.'));
                            else if (responseData === 500)
                                alert(emsUtilities_1.getErrorMessage('There is an internal server error.'));
                            else {
                                _this.setState({ EMSComplaint: responseData });
                                if (_this.state.EMSComplaint.ComplaintStatus !== _this.state.CurrentStatus) {
                                    _this.setState({ CurrentStatue: _this.state.EMSComplaint.ComplaintStatus });
                                    setTimeout(function () { _this.getEMSVComplaint(_this.state.EMSComplaint.ComplaintId); }, 200);
                                }
                                else
                                    alert(emsUtilities_1.getSuccessMessage('Complaint ID #' + _this.state.EMSComplaint.ComplaintId + ' '));
                            }
                        }).catch(function (errors) {
                            // console.log(errors);
                            alert(emsUtilities_1.getErrorMessage('There is an error during inserting a complaint'));
                        });
                    }
                    else
                        alert('Please input the County Asset Number');
                }
                else
                    alert('Please input the Security Number');
            }
            else
                alert('Please select a Unit');
        };
        // send email
        _this.sendEmail = function () {
            _this.state.Email.To[0] = _this.state.EMSVComplaint.CreatedBy + 'FIRE-EMSSubmission@fairfaxcounty.gov';
            if (_this.userId && _this.userId.length > 3)
                _this.state.Email.CC[0] = 'FIRE-EMSSubmission@fairfaxcounty.gov';
            _this.state.Email.Subject = 'Complaint (' + _this.state.EMSVComplaint.ComplaintId + ') has been changed the Status to ' + _this.state.EMSVComplaint.ComplaintStatus + '(' + new Date(_this.state.EMSVComplaint.UpdatedDate).toLocaleDateString() + ')';
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
            body1 = body1 + '</span><br /><br />if you are a <strong style="font-size:1.2em">Submitter</strong> click <a href="' + emsUtilities_1.getHost() + '/applications/emsapp' + '">here</a> to find your complaint.<span></li>';
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
                body: emsUtilities_1.serializeData(_this.state.Email)
            };
            fetch(emsUtilities_1.baseEmailApiUrl() + 'SendEmails', requestSQOptions).then(function (res) {
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
                    alert('Your complaint has been submitted successfully');
                }
            }).catch(function (errors) {
                alert(emsUtilities_1.getErrorMessage('There is an error during sending a Notification Email.'));
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
                    Loacation: '',
                    CategoryId: 0,
                    SubCategoryId: 0,
                    SubCategoryOthers: '',
                    Unit: '',
                    VehicleNumber: '',
                    AssetNumber: '',
                    ComlaintPriority: 0,
                    SerialNumber: '',
                    IncidentNumber: '',
                    ComplaintDetail: '',
                    CommentByAdmin: '',
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }
            });
        };
        _this.handleDelete = function (id) {
            _this.setComplaint();
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
            fetch(emsUtilities_1.baseApiUrl() + 'Complaint/Delete', deleteRequestOptions).then(function (res) {
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
                    _this.props.getEMSComplaint.call(_this);
                    alert("It has been removed successfully.");
                }
            }).catch(function (errors) {
                /*console.log(errors);*/
                alert(emsUtilities_1.getErrorMessage('There is an error during deleting a complaint'));
            });
            _this.handleClear();
        };
        _this.handleShow = function () {
            _this.setState({ show: true });
            _this.setState({ CurrentStatus: _this.props.EMSComplaint.ComplaintStatus });
            _this.getEMSCategory();
            _this.getEMSSubCategory(_this.props.EMSComplaint.CategoryId);
            _this.getEMSStatus();
            _this.getWorkGroup();
            _this.getUnit();
            setTimeout(function () { _this.setComplaint(); }, 200);
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
            _this.props.getEMSComplaint();
        };
        _this.setComplaint = function () {
            _this.state.EMSComplaint.ComplaintId = _this.props.EMSComplaint.ComplaintId;
            _this.state.EMSComplaint.ComplaintStatus = _this.props.EMSComplaint.ComplaintStatus;
            _this.state.EMSComplaint.SubmitterName = _this.props.EMSComplaint.SubmitterName;
            _this.state.EMSComplaint.SubmitterPhoneNo = _this.props.EMSComplaint.SubmitterPhoneNo;
            _this.state.EMSComplaint.SubmitterShit = _this.props.EMSComplaint.SubmitterShit;
            _this.state.EMSComplaint.RequestDate = _this.props.EMSComplaint.RequestDate;
            _this.state.EMSComplaint.Location = _this.props.EMSComplaint.Location;
            _this.state.EMSComplaint.CategoryId = _this.props.EMSComplaint.CategoryId;
            _this.state.EMSComplaint.SubCategoryId = _this.props.EMSComplaint.SubCategoryId;
            _this.state.EMSComplaint.SubCategoryOthers = _this.props.EMSComplaint.SubCategoryOthers;
            _this.state.EMSComplaint.Unit = _this.props.EMSComplaint.Unit;
            _this.state.EMSComplaint.VehicleNumber = _this.props.EMSComplaint.VehicleNumber;
            _this.state.EMSComplaint.AssetNumber = _this.props.EMSComplaint.AssetNumber;
            _this.state.EMSComplaint.ComplaintPriority = _this.props.EMSComplaint.ComplaintPriority;
            _this.state.EMSComplaint.SerialNumber = _this.props.EMSComplaint.SerialNumber;
            _this.state.EMSComplaint.IncidentNumber = _this.props.EMSComplaint.IncidentNumber;
            _this.state.EMSComplaint.ComplaintDetail = _this.props.EMSComplaint.ComplaintDetail;
            _this.state.EMSComplaint.CommentsByAdmin = _this.props.EMSComplaint.CommentsByAdmin;
            _this.state.EMSComplaint.CreatedDate = _this.props.EMSComplaint.CreatedDate;
            _this.state.EMSComplaint.CreatedBy = _this.props.EMSComplaint.CreatedBy;
            _this.state.EMSComplaint.UpdatedDate = _this.props.EMSComplaint.UpdatedDate;
            var currentSQState = __assign(__assign({}, _this.state.EMSComplaint), { "UpdatedBy": _this.props.EMSComplaint.UpdatedBy });
            _this.setState({ EMSComplaint: currentSQState });
        };
        _this.userId = emsUtilities_1.getUserId();
        _this.userName = emsUtilities_1.getUserName();
        return _this;
    }
    EMSSubmitUpdatePopup.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "left" } },
            React.createElement(core_1.Grid, { container: true, className: "textRight alignRight" },
                React.createElement(core_1.Button, { variant: "contained", onClick: function () { _this.eMSDetail.current.handleShow(); }, "data-toggle": "tooltip", title: "Show EMS Submission Detail", className: "marginLeft5", style: { backgroundColor: 'orange' } },
                    React.createElement("img", { src: window.location.origin + '/images/MORE_white.png', className: "btnImage" })),
                this.props.PageName === 'Submit' && (this.props.EMSComplaint.ComplaintStatus === 'Completed' || this.props.EMSComplaint.ComplaintStatus === 'Reviewed' || this.props.EMSComplaint.ComplaintStatus === 'Denied') ? null : React.createElement(React.Fragment, null,
                    React.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: function () { _this.handleShow(); }, "data-toggle": "tooltip", title: "Update EMS Submission", className: "marginLeft5" },
                        React.createElement("img", { src: window.location.origin + '/images/edit_white.png', className: "btnImage" })),
                    React.createElement(core_1.Button, { variant: 'contained', color: "secondary", onClick: function () { window.confirm('Are you sure you wish to delete this EMS Submission?') && _this.handleDelete.call(_this, _this.props.EMSComplaint.ComplaintId); }, "data-toggle": "tooltip", title: "Delete EMS Submission", className: "marginLeft5" },
                        React.createElement("img", { src: window.location.origin + '/images/delete_white.png', className: "btnImage" })))),
            React.createElement(core_1.Modal, { className: "insertModal", open: this.state.show, onClose: function () { _this.handleClear.call(_this); _this.handleClose(); }, disableBackdropClick: true },
                React.createElement(core_1.Paper, { className: "ModalDiv" },
                    React.createElement(core_1.Grid, { container: true, spacing: 2 },
                        React.createElement(core_1.Grid, { item: true, xs: 2 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "*Status"),
                                React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "ComplaintStatus", label: "Status", value: this.state.EMSComplaint.ComplaintStatus, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: "" },
                                        React.createElement("em", null, "All")),
                                    this.state.EMSStatusList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryDesc },
                                        React.createElement("em", null, item.CategoryDesc))); })))),
                        React.createElement(core_1.Grid, { item: true, xs: 5, sm: 5 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { style: { fontSize: 13 } }, "*Category"),
                                React.createElement(core_1.Select, { name: "CategoryId", label: "Category", value: this.state.EMSComplaint.CategoryId, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: "" },
                                        React.createElement("em", null, "Select One")),
                                    this.state.EMSCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                        React.createElement("em", null, item.CategoryDesc))); })))),
                        React.createElement(core_1.Grid, { item: true, xs: 5, sm: 5 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { style: { fontSize: 13 } }, "*Subcategory"),
                                React.createElement(core_1.Select, { name: "SubCategoryId", label: "SubCategory", value: this.state.EMSComplaint.SubCategoryId, onChange: this.handleChange },
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
                                React.createElement(core_1.InputLabel, { id: this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 0 ? '' : 'requiredFieldLabel', style: { fontSize: 13 } }, "*Unit"),
                                React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 0 ? '' : 'requiredFieldLabel', name: "Unit", label: "Unit", value: this.state.EMSComplaint.Unit, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: "" },
                                        React.createElement("em", null, "Select One")),
                                    this.state.UnitList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.Unit },
                                        React.createElement("em", null, item.Unit))); })))),
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 }, this.state.EMSComplaint.CategoryId === 2 || this.state.EMSComplaint.CategoryId === 35 || this.state.EMSComplaint.CategoryId === 39 ? React.createElement(core_1.TextField, { name: "SerialNumber", className: "errorMessage", placeholder: "Serial Number", value: this.state.EMSComplaint.SerialNumber, onChange: this.handleChange, helperText: "Serial Number", inputProps: { maxLength: 11 } }) : React.createElement(core_1.TextField, { name: "SerialNumber", id: this.state.EMSComplaint.SerialNumber.length > 1 ? '' : 'requiredFieldLabel', className: "errorMessage", placeholder: "Serial Number", value: this.state.EMSComplaint.SerialNumber, onChange: this.handleChange, helperText: "Serial Number", inputProps: { maxLength: 11 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 },
                            React.createElement(core_1.TextField, { name: "VehicleNumber", className: "errorMessage", placeholder: "Vehicle Number", value: this.state.EMSComplaint.VehicleNumber, onChange: this.handleChange, helperText: "Vehicle Number", inputProps: { maxLength: 11 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 }, this.state.EMSComplaint.CategoryId === 2 || this.state.EMSComplaint.CategoryId === 35 || this.state.EMSComplaint.CategoryId === 39 ? React.createElement(core_1.TextField, { name: "AssetNumber", className: "errorMessage", placeholder: "County Asset Number", value: this.state.EMSComplaint.AssetNumber, onChange: this.handleChange, helperText: "County Asset Number", inputProps: { maxLength: 10 } }) : React.createElement(core_1.TextField, { name: "AssetNumber", id: this.state.EMSComplaint.AssetNumber.length > 1 ? '' : 'requiredFieldLabel', className: "errorMessage", placeholder: "County Asset Number", value: this.state.EMSComplaint.AssetNumber, onChange: this.handleChange, helperText: "County Asset Number", inputProps: { maxLength: 10 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 6, sm: 6 },
                            React.createElement(core_1.TextField, { name: "IncidentNumber", className: "errorMessage", placeholder: "Incident Number", value: this.state.EMSComplaint.IncidentNumber, onChange: this.handleChange, helperText: "Incident Number", inputProps: { maxLength: 11 } }),
                            React.createElement("span", { style: { color: 'blue', fontSize: '11px', padding: '1.5px' } })),
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 12 },
                            React.createElement(core_1.TextField, { name: "ComplaintDetail", id: "filled-multiline-static", label: "Complaint Detail", multiline: true, rows: 5, className: "errorMessage", placeholder: "Complaint Detail", style: { width: '100%' }, value: this.state.EMSComplaint.ComplaintDetail, onChange: this.handleChange })),
                        this.props.PageName && this.props.PageName === 'Admin' ?
                            React.createElement(core_1.Grid, { item: true, xs: 12 },
                                React.createElement(core_1.TextField, { name: "CommentsByAdmin", id: "filled-multiline-static", label: "Comment Box", multiline: true, rows: 5, className: "errorMessage", placeholder: "Write a Comment", style: { width: '100%' }, value: this.state.EMSComplaint.CommentsByAdmin, onChange: this.handleChange })) : React.createElement(core_1.Grid, { item: true, xs: 12 }),
                        React.createElement(core_1.Grid, { item: true, xs: 12, className: "textRight popupCloseBtn" },
                            React.createElement(core_1.Button, { variant: 'contained', color: "primary", onClick: function () { _this.handleSubmit(); } }, "Update Complaint"),
                            React.createElement(core_1.Button, { variant: 'contained', color: "default", onClick: function () { _this.handleClear(); _this.handleClose(); } }, "Close")),
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(EMSSubmitTab_1.EMSSubmitTab, { ref: this.eMSSubmitTab, ComplaintId: this.props.EMSComplaint.ComplaintId, PageName: this.props.PageName }))))),
            React.createElement(EMSDetail_1.EMSDetail, { ref: this.eMSDetail, PageName: this.props.PageName, EMSVComplaint: this.props.EMSComplaint })));
    };
    return EMSSubmitUpdatePopup;
}(React.Component));
exports.EMSSubmitUpdatePopup = EMSSubmitUpdatePopup;
//# sourceMappingURL=EMSSubmitUpdatePopup.js.map