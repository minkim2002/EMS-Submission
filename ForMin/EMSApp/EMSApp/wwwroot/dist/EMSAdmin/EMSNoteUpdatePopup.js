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
exports.EMSNoteUpdatePopup = void 0;
var React = __importStar(require("react"));
var emsUtilities_1 = require("../utilities/emsUtilities");
var core_1 = require("@material-ui/core");
var EMSNoteUpdatePopup = /** @class */ (function (_super) {
    __extends(EMSNoteUpdatePopup, _super);
    function EMSNoteUpdatePopup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            Note: {
                NoteId: 0,
                ComplaintId: 0,
                Note: '',
                CreatedBy: '',
                CreatedDate: '',
                UpdatedBy: '',
                UpdatedDate: '',
                AuthorName: ''
            }, CanSave: false, show: false
        };
        _this.userId = '';
        // set state
        _this.handleChange = function (event) {
            var _a;
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            var currentSQState = __assign(__assign({}, _this.state.Note), (_a = {}, _a[name] = value, _a));
            _this.setState({ Note: currentSQState });
            if ((_this.props.ComplaintId && _this.props.ComplaintId > 0) && (_this.state.Note !== null && _this.state.Note.Note !== 'undefined' && _this.state.Note.Note.length > 10)) {
                _this.setState({ CanSave: true });
            }
            else
                _this.setState({ CanSave: false });
        };
        // update Person
        _this.handleSubmit = function () {
            _this.state.Note.ComplaintId = _this.props.ComplaintId;
            var NoteUrl = emsUtilities_1.baseApiUrl() + 'Note/Update';
            if (_this.state.Note.ComplaintId && _this.state.Note.ComplaintId > 0) {
                var today = new Date().toISOString();
                _this.state.Note.CreatedBy = _this.userId;
                _this.state.Note.CreatedDate = today;
                _this.state.Note.UpdatedBy = _this.userId;
                _this.state.Note.UpdatedDate = today;
                var requestSQOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: emsUtilities_1.serializeData(_this.state.Note)
                };
                fetch(NoteUrl, requestSQOptions).then(function (res) {
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
                        _this.setState({
                            PoliceReport: responseData
                        });
                        alert(emsUtilities_1.getSuccessMessage('A Note'));
                    }
                }).catch(function (errors) {
                    // console.log(errors);
                    alert(emsUtilities_1.getErrorMessage('There is an error during inserting a Note'));
                });
            }
            else
                alert('There is no Complaint Id. Please retrive a Complaint record and then add a Note again');
        };
        // clear state
        _this.handleClear = function () {
            _this.setState({
                Note: {
                    NoteId: 0,
                    ComplaintId: 0,
                    Note: '',
                    CreatedBy: '',
                    CreatedDate: '',
                    UpdatedBy: '',
                    UpdatedDate: '',
                    AuthorType: '',
                    AuthorName: ''
                }, CanSave: false, show: false
            });
        };
        _this.handleDelete = function (id) {
            _this.setNote();
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
            fetch(emsUtilities_1.baseApiUrl() + 'Note/Delete', deleteRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                console.log(responseData);
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
                    _this.props.getEMSNote.call(_this);
                    alert("It has been removed successfully.");
                }
            }).catch(function (errors) {
                console.log(errors);
                alert(emsUtilities_1.getErrorMessage('There is an error during deleting a note'));
            });
            _this.handleClear();
        };
        _this.handleShow = function () {
            _this.setState({ show: true });
            _this.setNote();
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
            _this.props.getEMSNote();
        };
        _this.setNote = function () {
            _this.state.Note.NoteId = _this.props.Note.NoteId;
            _this.state.Note.ComplaintId = _this.props.Note.ComplaintId;
            _this.state.Note.Note = _this.props.Note.Note;
            _this.state.Note.CreatedBy = _this.props.Note.CreatedBy;
            _this.state.Note.CreatedDate = _this.props.Note.CreatedDate;
            _this.state.Note.UpdatedBy = _this.props.Note.UpdatedBy;
            _this.state.Note.UpdatedDate = _this.props.Note.UpdatedDate;
            _this.state.Note.AuthorName = _this.props.AuthorName;
        };
        _this.insertNote = function () {
            return (React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "left" } },
                React.createElement(core_1.Grid, { container: true, className: "textRight alignRight" },
                    React.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: function () { _this.handleShow(); }, "data-toggle": "tooltip", title: "Update Note", className: "marginLeft5" },
                        React.createElement("img", { src: window.location.origin + '/images/edit_white.png', className: "btnImage" })),
                    React.createElement(core_1.Button, { variant: 'contained', color: "secondary", onClick: function () { window.confirm('Are you sure you wish to delete this Note?') && _this.handleDelete.call(_this, _this.props.Note.NoteId); }, "data-toggle": "tooltip", title: "Delete Note", className: "marginLeft5" },
                        React.createElement("img", { src: window.location.origin + '/images/delete_white.png', className: "btnImage" }))),
                React.createElement(core_1.Modal, { className: "insertModal", open: _this.state.show, onClose: function () { _this.handleClear(); _this.handleClose(); }, disableBackdropClick: true },
                    React.createElement(core_1.Paper, { className: "ModalDiv" },
                        React.createElement(core_1.Grid, { container: true, spacing: 3 },
                            React.createElement(core_1.Paper, { className: "marginTop10LightBlue" },
                                React.createElement(core_1.Grid, { container: true, spacing: 2 },
                                    React.createElement(core_1.Grid, { item: true, xs: 12, className: "contentHeader" },
                                        React.createElement("h5", null, "Add Note")),
                                    React.createElement(core_1.Grid, { item: true, xs: 6 },
                                        React.createElement(core_1.TextField, { value: _this.state.Note.AuthorName, name: "AuthorName", onChange: _this.handleChange, placeholder: "Enter Author Name", helperText: "* Author Name", inputProps: { maxLength: 150 } })),
                                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label" }, "Note"),
                                        React.createElement(core_1.TextareaAutosize, { value: _this.state.Note.Note, name: "Note", onChange: _this.handleChange, placeholder: "Enter Note", rows: 10, rowsMax: 15 }))))),
                        React.createElement(core_1.Grid, { item: true, xs: 12, className: "textRight popupCloseBtn" },
                            React.createElement(core_1.Button, { variant: 'contained', color: "primary", onClick: function () { _this.handleSubmit(); }, disabled: !_this.state.CanSave }, "Save Note"),
                            React.createElement(core_1.Button, { variant: 'contained', color: "default", onClick: function () { _this.handleClear(); _this.handleClose(); } }, "Close"))))));
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleClear = _this.handleClear.bind(_this);
        _this.userId = emsUtilities_1.getUserId();
        return _this;
    }
    // display UI on the Note Insert Popup Window
    EMSNoteUpdatePopup.prototype.render = function () {
        return (React.createElement(this.insertNote, null));
    };
    return EMSNoteUpdatePopup;
}(React.Component));
exports.EMSNoteUpdatePopup = EMSNoteUpdatePopup;
//# sourceMappingURL=EMSNoteUpdatePopup.js.map