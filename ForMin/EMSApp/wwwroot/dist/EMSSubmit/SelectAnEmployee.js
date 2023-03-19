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
exports.SelectAnEmployee = void 0;
var React = __importStar(require("react"));
var emsUtilities_1 = require("../utilities/emsUtilities");
var core_1 = require("@material-ui/core");
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
            var userId = emsUtilities_1.getUserId();
            var url = emsUtilities_1.basePersonApiUrl() + 'EmpAndVol?userid=' + emsUtilities_1.getUserId();
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
//# sourceMappingURL=SelectAnEmployee.js.map