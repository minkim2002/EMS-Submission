"use strict";
(self["webpackChunkemsapp"] = self["webpackChunkemsapp"] || []).push([["src_EMSSubmit_EMSSubmitUpdatePopup_tsx"],{

/***/ "./src/EMSAdmin/EMSNote.tsx":
/*!**********************************!*\
  !*** ./src/EMSAdmin/EMSNote.tsx ***!
  \**********************************/
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
exports.EMSNote = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var EMSNoteInsertPopup_1 = __webpack_require__(/*! ./EMSNoteInsertPopup */ "./src/EMSAdmin/EMSNoteInsertPopup.tsx");
var EMSNoteUpdatePopup_1 = __webpack_require__(/*! ./EMSNoteUpdatePopup */ "./src/EMSAdmin/EMSNoteUpdatePopup.tsx");
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var EMSNote = /** @class */ (function (_super) {
    __extends(EMSNote, _super);
    function EMSNote(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            Note: [{
                    NoteId: 0,
                    ComplaintId: 0,
                    Note: '',
                    CreatedBy: '',
                    CreatedDate: '',
                    UpdatedBy: '',
                    UpdatedDate: '',
                    AuthorName: (0, emsUtilities_1.getUserName)(),
                }], CanSave: false, show: false
        };
        _this.userId = '';
        _this.eMSNoteInsertPopup = React.createRef();
        _this.eMSNoteUpdatePopup = React.createRef();
        // get ems note
        _this.getEMSNote = function () {
            var url = (0, emsUtilities_1.baseApiUrl)() + 'EMSNote?complaintId=' + _this.props.ComplaintId;
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                _this.setState({ Note: responseData });
            }).catch(function (errors) {
                //console.log(errors);
            });
        };
        return _this;
    }
    EMSNote.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Table, null,
            React.createElement(core_1.TableHead, null,
                React.createElement(core_1.TableRow, { style: (this.props.ComplaintId && this.props.ComplaintId > 0) ? {} : { display: 'none' } },
                    React.createElement("th", { className: "SubTableHeader" }, "Author Name"),
                    React.createElement("th", { colSpan: 3, className: "SubTableHeader" },
                        React.createElement("h5", null, "Note")),
                    React.createElement("th", { className: "SubTableHeader" }, "Date & Time"),
                    React.createElement("th", { className: "SubTableHeader textRight" },
                        React.createElement(EMSNoteInsertPopup_1.EMSNoteInsertPopup, { ref: this.eMSNoteInsertPopup, ComplaintId: this.props.ComplaintId, AuthorName: (0, emsUtilities_1.getUserName)(), getEMSNote: this.getEMSNote }),
                        " "))),
            this.state.Note && this.state.Note.length > 0 && this.state.Note[0].NoteId && this.state.Note[0].NoteId > 0 ?
                React.createElement(core_1.TableBody, { style: { marginBottom: '10px !important' } },
                    this.state.Note.map(function (item) { return (React.createElement(core_1.TableRow, { hover: true },
                        React.createElement("td", { className: "textLeft" }, item.AuthorName),
                        React.createElement("td", { className: "textLeft", colSpan: 3 }, item.Note),
                        React.createElement("td", { className: "textRight" },
                            item.CreatedDate ? new Date(item.CreatedDate).toLocaleDateString() : '',
                            " ",
                            item.CreatedDate ? new Date(item.CreatedDate).toLocaleTimeString() : ''),
                        React.createElement("td", { className: "textRight" },
                            React.createElement(EMSNoteUpdatePopup_1.EMSNoteUpdatePopup, { ref: _this.eMSNoteUpdatePopup, Note: item, ComplaintId: _this.props.ComplaintId, AuthorName: (0, emsUtilities_1.getUserName)(), getEMSNote: _this.getEMSNote })))); }),
                    " ") : React.createElement(core_1.TableBody, null,
                React.createElement(core_1.TableRow, null,
                    React.createElement(core_1.TableCell, { colSpan: 6, className: "textCenter" },
                        React.createElement("h6", null, "No Note"))))));
    };
    EMSNote.prototype.componentDidMount = function () {
        this.getEMSNote();
    };
    return EMSNote;
}(React.Component));
exports.EMSNote = EMSNote;


/***/ }),

/***/ "./src/EMSAdmin/EMSNoteInsertPopup.tsx":
/*!*********************************************!*\
  !*** ./src/EMSAdmin/EMSNoteInsertPopup.tsx ***!
  \*********************************************/
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
exports.EMSNoteInsertPopup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var EMSNoteInsertPopup = /** @class */ (function (_super) {
    __extends(EMSNoteInsertPopup, _super);
    function EMSNoteInsertPopup(props) {
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
            var NoteUrl = (0, emsUtilities_1.baseApiUrl)() + 'Note/Insert';
            if (_this.state.Note.ComplaintId && _this.state.Note.ComplaintId > 0) {
                var today = new Date().toISOString();
                _this.state.Note.CreatedBy = _this.userId;
                _this.state.Note.CreatedDate = today;
                _this.state.Note.UpdatedBy = _this.userId;
                _this.state.Note.UpdatedDate = today;
                console.log(_this.state.Note);
                var requestSQOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: (0, emsUtilities_1.serializeData)(_this.state.Note)
                };
                fetch(NoteUrl, requestSQOptions).then(function (res) {
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
                        alert((0, emsUtilities_1.getSuccessMessage)('A Note'));
                    }
                }).catch(function (errors) {
                    // console.log(errors);
                    alert((0, emsUtilities_1.getErrorMessage)('There is an error during inserting a Note'));
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
        _this.handleShow = function () {
            _this.setState({ show: true });
            _this.setNote();
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
            _this.props.getEMSNote();
        };
        _this.setNote = function () {
            _this.state.Note.AuthorName = _this.props.AuthorName;
        };
        _this.insertNote = function () {
            return (React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "left" } },
                React.createElement(core_1.Grid, { container: true, className: "textRight alignRight" },
                    React.createElement(core_1.Button, { variant: "contained", onClick: function () { _this.handleShow(); }, className: "btnImgInsert marginRight10", "data-toggle": "tooltip", title: "New Note" },
                        React.createElement("img", { src: window.location.origin + '/images/add_white.png', className: "btnImage" }))),
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
        _this.userId = (0, emsUtilities_1.getUserId)();
        return _this;
    }
    // display UI on the Note Insert Popup Window
    EMSNoteInsertPopup.prototype.render = function () {
        return (React.createElement(this.insertNote, null));
    };
    return EMSNoteInsertPopup;
}(React.Component));
exports.EMSNoteInsertPopup = EMSNoteInsertPopup;


/***/ }),

/***/ "./src/EMSAdmin/EMSNoteUpdatePopup.tsx":
/*!*********************************************!*\
  !*** ./src/EMSAdmin/EMSNoteUpdatePopup.tsx ***!
  \*********************************************/
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
exports.EMSNoteUpdatePopup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
            var NoteUrl = (0, emsUtilities_1.baseApiUrl)() + 'Note/Update';
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
                    body: (0, emsUtilities_1.serializeData)(_this.state.Note)
                };
                fetch(NoteUrl, requestSQOptions).then(function (res) {
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
                        _this.setState({
                            PoliceReport: responseData
                        });
                        alert((0, emsUtilities_1.getSuccessMessage)('A Note'));
                    }
                }).catch(function (errors) {
                    // console.log(errors);
                    alert((0, emsUtilities_1.getErrorMessage)('There is an error during inserting a Note'));
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
                body: (0, emsUtilities_1.serializeData)(delDto)
            };
            fetch((0, emsUtilities_1.baseApiUrl)() + 'Note/Delete', deleteRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                console.log(responseData);
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
                    _this.props.getEMSNote.call(_this);
                    alert("It has been removed successfully.");
                }
            }).catch(function (errors) {
                console.log(errors);
                alert((0, emsUtilities_1.getErrorMessage)('There is an error during deleting a note'));
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
        _this.userId = (0, emsUtilities_1.getUserId)();
        return _this;
    }
    // display UI on the Note Insert Popup Window
    EMSNoteUpdatePopup.prototype.render = function () {
        return (React.createElement(this.insertNote, null));
    };
    return EMSNoteUpdatePopup;
}(React.Component));
exports.EMSNoteUpdatePopup = EMSNoteUpdatePopup;


/***/ }),

/***/ "./src/EMSSubmit/EMSDetail.tsx":
/*!*************************************!*\
  !*** ./src/EMSSubmit/EMSDetail.tsx ***!
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
exports.EMSDetail = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var EMSSubmitTab_1 = __webpack_require__(/*! ./EMSSubmitTab */ "./src/EMSSubmit/EMSSubmitTab.tsx");
var EMSDetail = /** @class */ (function (_super) {
    __extends(EMSDetail, _super);
    function EMSDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            EMSVComplaint: {
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
            }, show: false, PageName: ''
        };
        _this.eMSSubmitTab = React.createRef();
        _this.handleShow = function () {
            _this.setState({ show: true });
            _this.setComplaint();
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
        };
        _this.setComplaint = function () {
            _this.state.EMSVComplaint.ComplaintId = _this.props.EMSVComplaint.ComplaintId;
            _this.state.EMSVComplaint.ComplaintStatus = _this.props.EMSVComplaint.ComplaintStatus;
            _this.state.EMSVComplaint.SubmitterName = _this.props.EMSVComplaint.SubmitterName;
            _this.state.EMSVComplaint.SubmitterPhoneNo = _this.props.EMSVComplaint.SubmitterPhoneNo;
            _this.state.EMSVComplaint.SubmitterShit = _this.props.EMSVComplaint.SubmitterShit;
            _this.state.EMSVComplaint.RequestDate = _this.props.EMSVComplaint.RequestDate;
            _this.state.EMSVComplaint.Location = _this.props.EMSVComplaint.Location;
            _this.state.EMSVComplaint.CategoryId = _this.props.EMSVComplaint.CategoryId;
            _this.state.EMSVComplaint.SubCategoryId = _this.props.EMSVComplaint.SubCategoryId;
            _this.state.EMSVComplaint.SubCategoryOthers = _this.props.EMSVComplaint.SubCategoryOthers;
            _this.state.EMSVComplaint.Unit = _this.props.EMSVComplaint.Unit;
            _this.state.EMSVComplaint.VehicleNumber = _this.props.EMSVComplaint.VehicleNumber;
            _this.state.EMSVComplaint.AssetNumber = _this.props.EMSVComplaint.AssetNumber;
            _this.state.EMSVComplaint.ComplaintPriority = _this.props.EMSVComplaint.ComplaintPriority;
            _this.state.EMSVComplaint.SerialNumber = _this.props.EMSVComplaint.SerialNumber;
            _this.state.EMSVComplaint.IncidentNumber = _this.props.EMSVComplaint.IncidentNumber;
            _this.state.EMSVComplaint.ComplaintDetail = _this.props.EMSVComplaint.ComplaintDetail;
            _this.state.EMSVComplaint.CommentsByAdmin = _this.props.EMSVComplaint.CommentsByAdmin;
            _this.state.EMSVComplaint.CreatedDate = _this.props.EMSVComplaint.CreatedDate;
            _this.state.EMSVComplaint.CreatedBy = _this.props.EMSVComplaint.CreatedBy;
            _this.state.EMSVComplaint.UpdatedDate = _this.props.EMSVComplaint.UpdatedDate;
            _this.state.EMSVComplaint.UpdatedBy = _this.props.EMSVComplaint.UpdatedBy;
            _this.state.EMSVComplaint.CategoryDesc = _this.props.EMSVComplaint.CategoryDesc;
            _this.state.EMSVComplaint.SubCategoryDesc = _this.props.EMSVComplaint.SubCategoryDesc;
            _this.state.EMSVComplaint.WorkGroupName = _this.props.EMSVComplaint.WorkGroupName;
            _this.state.EMSVComplaint.UnitName = _this.props.EMSVComplaint.UnitName;
        };
        return _this;
    }
    EMSDetail.prototype.render = function () {
        var _this = this;
        return (
        //<Grid item xs={12} style={{ textAlign: "left" }}>
        //    <Grid container className="textRight alignRight" style={{ paddingBottom: "5px" }}>
        //        <Button variant="contained" onClick={() => { this.handleShow() }} data-toggle="tooltip" title="Update Log" className="marginLeft5" style={{ backgroundColor: 'orange' }}><img src={window.location.origin + '/images/MORE_white.png'} className="btnImage" /></Button>
        //    </Grid>
        React.createElement(core_1.Modal, { className: "insertModal", open: this.state.show, onClose: function () { _this.handleClose(); }, disableBackdropClick: true },
            React.createElement(core_1.Paper, { className: "ModalDiv" },
                React.createElement(core_1.Grid, { container: true, spacing: 2 },
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Submitter:"),
                            " ",
                            this.props.EMSVComplaint.SubmitterName)),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Category:"),
                            " ",
                            this.props.EMSVComplaint.CategoryDesc)),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Subcategory:"),
                            " ",
                            this.props.EMSVComplaint.SubCategoryDesc)),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Phone Number:"),
                            " ",
                            this.props.EMSVComplaint.SubmitterPhoneNo)),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Vehicle Number:"),
                            " ",
                            this.props.EMSVComplaint.VehicleNumber)),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Asset Number:"),
                            " ",
                            this.props.EMSVComplaint.AssetNumber)),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Serial Number:"),
                            " ",
                            this.props.EMSVComplaint.SerialNumber)),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Incident Number:"),
                            " ",
                            this.props.EMSVComplaint.IncidentNumber)),
                    React.createElement(core_1.Grid, { item: true, xs: 4 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Complaint Status:"),
                            " ",
                            this.props.EMSVComplaint.ComplaintStatus)),
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Complaint Detail:"),
                            this.props.EMSVComplaint.ComplaintDetail)),
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Comment:"),
                            " ",
                            this.props.EMSVComplaint.CommentsByAdmin)),
                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                        React.createElement(EMSSubmitTab_1.EMSSubmitTab, { ref: this.eMSSubmitTab, ComplaintId: this.props.EMSVComplaint.ComplaintId, PageName: this.props.PageName })),
                    React.createElement(core_1.Grid, { className: "textRight", item: true, xs: 12, sm: 12 },
                        React.createElement(core_1.Button, { variant: 'contained', color: "default", onClick: function () { _this.handleClose(); } }, "Close")))))
        /*</Grid>*/
        );
    };
    return EMSDetail;
}(React.Component));
exports.EMSDetail = EMSDetail;


/***/ }),

/***/ "./src/EMSSubmit/EMSSubmitTab.tsx":
/*!****************************************!*\
  !*** ./src/EMSSubmit/EMSSubmitTab.tsx ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMSSubmitTab = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var EMSNote_1 = __webpack_require__(/*! ../EMSAdmin/EMSNote */ "./src/EMSAdmin/EMSNote.tsx");
var EMSSupplementalDoc_1 = __webpack_require__(/*! ./EMSSupplementalDoc */ "./src/EMSSubmit/EMSSupplementalDoc.tsx");
function TabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (React.createElement("div", __assign({ role: "tabpanel", hidden: value !== index, id: "wrapped-tabpanel-".concat(index), "aria-labelledby": "wrapped-tab-".concat(index) }, other), value === index && (React.createElement(core_1.Box, { p: 3 },
        React.createElement(core_1.Typography, null, children)))));
}
function a11yProps(index) {
    return {
        id: "wrapped-tab-".concat(index),
        'aria-controls': "wrapped-tabpanel-".concat(index),
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


/***/ }),

/***/ "./src/EMSSubmit/EMSSubmitUpdatePopup.tsx":
/*!************************************************!*\
  !*** ./src/EMSSubmit/EMSSubmitUpdatePopup.tsx ***!
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
exports.EMSSubmitUpdatePopup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var EMSSubmitTab_1 = __webpack_require__(/*! ./EMSSubmitTab */ "./src/EMSSubmit/EMSSubmitTab.tsx");
var EMSDetail_1 = __webpack_require__(/*! ./EMSDetail */ "./src/EMSSubmit/EMSDetail.tsx");
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
                }], show: false, showDetail: false, canSave: false, PageName: '', CurrentStatus: '',
            SerialNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
            AssetNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
            VehicleNumberRequire: [1, 85],
            InicdentNumberRequire: [131, 132]
        };
        _this.eMSSubmitTab = React.createRef();
        _this.eMSDetail = React.createRef();
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
        //Update Complaint
        _this.handleSubmit = function () {
            if (_this.state.EMSComplaint.CategoryId && _this.state.EMSComplaint.CategoryId > 0) {
                if (_this.state.EMSComplaint.SubCategoryId && _this.state.EMSComplaint.SubCategoryId > 0) {
                    if (_this.state.EMSComplaint.SubmitterName && _this.state.EMSComplaint.SubmitterName.length > 1) {
                        if (_this.state.EMSComplaint.SubmitterShit && _this.state.EMSComplaint.SubmitterShit.length > 0) {
                            if (_this.state.EMSComplaint.Location && _this.state.EMSComplaint.Location.length > 1) {
                                if (_this.state.EMSComplaint.Unit && _this.state.EMSComplaint.Unit.length > 1 || _this.state.EMSComplaint.CategoryId === 53) {
                                    if ((_this.state.EMSComplaint.SerialNumber && _this.state.EMSComplaint.SerialNumber.length > 1) || _this.state.SerialNumberRequire.indexOf(_this.state.EMSComplaint.CategoryId) < 0) {
                                        if ((_this.state.EMSComplaint.VehicleNumber && _this.state.EMSComplaint.VehicleNumber.length > 1) || (_this.state.EMSComplaint.CategoryId !== 1)) {
                                            if ((_this.state.EMSComplaint.AssetNumber && _this.state.EMSComplaint.AssetNumber.length > 1) || _this.state.AssetNumberRequire.indexOf(_this.state.EMSComplaint.CategoryId) < 0) {
                                                if ((_this.state.EMSComplaint.IncidentNumber && _this.state.EMSComplaint.IncidentNumber.length === 10) || _this.state.InicdentNumberRequire.indexOf(_this.state.EMSComplaint.SubCategoryId) < 0) {
                                                    var ComplaintUrl = (0, emsUtilities_1.baseApiUrl)() + 'Complaint/Update';
                                                    var today = new Date().toISOString();
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
                                                            if (_this.state.EMSComplaint.ComplaintStatus !== _this.state.CurrentStatus) {
                                                                _this.setState({ CurrentStatue: _this.state.EMSComplaint.ComplaintStatus });
                                                                setTimeout(function () { _this.getEMSVComplaint(_this.state.EMSComplaint.ComplaintId); }, 200);
                                                            }
                                                            else
                                                                alert((0, emsUtilities_1.getSuccessMessage)('Complaint ID #' + _this.state.EMSComplaint.ComplaintId + ' '));
                                                        }
                                                    }).catch(function (errors) {
                                                        // console.log(errors);
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
            _this.setState({
                Email: {
                    From: 'DoNotReply@fairfaxcounty.gov',
                    To: [''],
                    CC: [''],
                    BCC: ['ykim01@fairfaxcounty.gov'],
                    Subject: '',
                    Body: ''
                }
            });
            _this.state.Email.To[0] = 'FIRE-EMSSubmission@fairfaxcounty.gov';
            _this.state.Email.CC[0] = _this.state.EMSVComplaint.CreatedBy + '@fairfaxcounty.gov';
            if (_this.userId && _this.userId.length > 3 && _this.state.Email.CC.indexOf(_this.userId + '@fairfaxcounty.gov') < 0)
                _this.state.Email.CC.push(_this.userId + '@fairfaxcounty.gov');
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
            if (_this.state.EMSVComplaint.ComplaintDetail)
                body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Comment By Admin:</strong> ' + _this.state.EMSVComplaint.CommentsByAdmin;
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
                }, showDetail: false, canSave: false, PageName: '', CurrentStatus: '',
                SerialNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
                AssetNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
                VehicleNumberRequire: [1, 85],
                InicdentNumberRequire: [131, 132]
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
                body: (0, emsUtilities_1.serializeData)(delDto)
            };
            fetch((0, emsUtilities_1.baseApiUrl)() + 'Complaint/Delete', deleteRequestOptions).then(function (res) {
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
                    _this.props.getEMSComplaint.call(_this);
                    alert("It has been removed successfully.");
                }
            }).catch(function (errors) {
                /*console.log(errors);*/
                alert((0, emsUtilities_1.getErrorMessage)('There is an error during deleting a complaint'));
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
            var _a;
            _this.state.EMSComplaint.ComplaintId = (_a = _this.props.EMSComplaint.ComplaintId) !== null && _a !== void 0 ? _a : 0;
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
        _this.userId = (0, emsUtilities_1.getUserId)();
        _this.userName = (0, emsUtilities_1.getUserName)();
        return _this;
    }
    EMSSubmitUpdatePopup.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "left" } },
            React.createElement(core_1.Grid, { container: true, className: "textRight alignRight" },
                React.createElement(core_1.Button, { variant: "contained", onClick: function () { _this.eMSDetail.current.handleShow(); }, "data-toggle": "tooltip", title: "Show EMS Submission Detail", className: "marginLeft5", style: { backgroundColor: 'orange' } },
                    React.createElement("img", { src: window.location.origin + '/images/MORE_white.png', className: "btnImage" })),
                React.createElement(React.Fragment, null,
                    this.props.PageName === 'Submit' && (this.props.EMSComplaint.ComplaintStatus === 'Completed' || this.props.EMSComplaint.ComplaintStatus === 'Denied') ? null : React.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: function () { _this.handleShow(); }, "data-toggle": "tooltip", title: "Update EMS Submission", className: "marginLeft5" },
                        React.createElement("img", { src: window.location.origin + '/images/edit_white.png', className: "btnImage" })),
                    (this.props.PageName === 'Submit' && this.props.EMSComplaint.ComplaintStatus === 'Submitted') || this.props.PageName === 'Admin' ?
                        React.createElement(core_1.Button, { variant: 'contained', color: "secondary", onClick: function () { window.confirm('Are you sure you wish to delete this EMS Submission?') && _this.handleDelete.call(_this, _this.props.EMSComplaint.ComplaintId); }, "data-toggle": "tooltip", title: "Delete EMS Submission", className: "marginLeft5" },
                            React.createElement("img", { src: window.location.origin + '/images/delete_white.png', className: "btnImage" })) : null)),
            React.createElement(core_1.Modal, { className: "insertModal", open: this.state.show, onClose: function () { _this.handleClear.call(_this); _this.handleClose(); }, disableBackdropClick: true },
                React.createElement(core_1.Paper, { className: "ModalDiv" },
                    React.createElement(core_1.Grid, { container: true, spacing: 2 },
                        this.props.PageName === 'Admin' ?
                            React.createElement(core_1.Grid, { item: true, xs: 2 },
                                React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                    React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "*Status"),
                                    React.createElement(core_1.Select, { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", name: "ComplaintStatus", label: "Status", value: this.state.EMSComplaint.ComplaintStatus, onChange: this.handleChange },
                                        React.createElement(core_1.MenuItem, { value: "" },
                                            React.createElement("em", null, "All")),
                                        this.state.EMSStatusList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryDesc },
                                            React.createElement("em", null, item.CategoryDesc))); })))) : null,
                        this.props.PageName === 'Admin' ?
                            React.createElement(React.Fragment, null,
                                React.createElement(core_1.Grid, { item: true, xs: 5, sm: 5 },
                                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                        React.createElement(core_1.InputLabel, { id: this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel', style: { fontSize: 13 } }, "*Category"),
                                        React.createElement(core_1.Select, { id: this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel', name: "CategoryId", label: "Category", value: this.state.EMSComplaint.CategoryId, onChange: this.handleChange },
                                            React.createElement(core_1.MenuItem, { value: "" },
                                                React.createElement("em", null, "Select One")),
                                            this.state.EMSCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                                React.createElement("em", null, item.CategoryDesc))); })))),
                                React.createElement(core_1.Grid, { item: true, xs: 5, sm: 5 },
                                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                        React.createElement(core_1.InputLabel, { id: this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel', style: { fontSize: 13 } }, "*Subcategory"),
                                        React.createElement(core_1.Select, { id: this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel', name: "SubCategoryId", label: "SubCategory", value: this.state.EMSComplaint.SubCategoryId, onChange: this.handleChange },
                                            React.createElement(core_1.MenuItem, { value: "" },
                                                React.createElement("em", null, "Select One")),
                                            this.state.EMSSubCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                                React.createElement("em", null, item.CategoryDesc))); }))))) :
                            React.createElement(React.Fragment, null,
                                React.createElement(core_1.Grid, { item: true, xs: 6 },
                                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                        React.createElement(core_1.InputLabel, { id: this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel', style: { fontSize: 13 } }, "*Category"),
                                        React.createElement(core_1.Select, { id: this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel', name: "CategoryId", label: "Category", value: this.state.EMSComplaint.CategoryId, onChange: this.handleChange },
                                            React.createElement(core_1.MenuItem, { value: "" },
                                                React.createElement("em", null, "Select One")),
                                            this.state.EMSCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                                React.createElement("em", null, item.CategoryDesc))); })))),
                                React.createElement(core_1.Grid, { item: true, xs: 6 },
                                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                        React.createElement(core_1.InputLabel, { id: this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel', style: { fontSize: 13 } }, "*Subcategory"),
                                        React.createElement(core_1.Select, { id: this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel', name: "SubCategoryId", label: "SubCategory", value: this.state.EMSComplaint.SubCategoryId, onChange: this.handleChange },
                                            React.createElement(core_1.MenuItem, { value: "" },
                                                React.createElement("em", null, "Select One")),
                                            this.state.EMSSubCategoryList.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item.CategoryId },
                                                React.createElement("em", null, item.CategoryDesc))); }))))),
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


/***/ }),

/***/ "./src/EMSSubmit/EMSSupplementalDoc.tsx":
/*!**********************************************!*\
  !*** ./src/EMSSubmit/EMSSupplementalDoc.tsx ***!
  \**********************************************/
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
exports.EMSSupplementalDoc = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var EMSSupplementalDocInsertPopup_1 = __webpack_require__(/*! ./EMSSupplementalDocInsertPopup */ "./src/EMSSubmit/EMSSupplementalDocInsertPopup.tsx");
var EMSSupplementalDocUpdatePopup_1 = __webpack_require__(/*! ./EMSSupplementalDocUpdatePopup */ "./src/EMSSubmit/EMSSupplementalDocUpdatePopup.tsx");
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var EMSSupplementalDoc = /** @class */ (function (_super) {
    __extends(EMSSupplementalDoc, _super);
    function EMSSupplementalDoc(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            EMSSupplementalDoc: [{
                    DocId: 0,
                    ComplaintId: 0,
                    DocType: '',
                    DocName: '',
                    DocDesc: '',
                    DocDescOther: '',
                    DocExt: '',
                    Doc: new Array,
                    ImageDoc: '',
                    DocLocation: '',
                    Comments: '',
                    CreatedDate: '',
                    CreateBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }]
        };
        _this.url = '';
        _this.userId = '';
        _this.eMSSupplementalDocInsertPopup = React.createRef();
        _this.eMSSupplementalDocUpdatePopup = React.createRef();
        // get ems supplemental document
        _this.getEMSSupplementalDOC = function () {
            var url = (0, emsUtilities_1.baseApiUrl)() + 'EMSSupplementalDocByComplaintId?complaintId=' + _this.props.ComplaintId;
            fetch(url, emsUtilities_1.getRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                return res.status;
            }).then(function (responseData) {
                _this.setState({ EMSSupplementalDoc: responseData });
                console.log(_this.state.EMSSupplementalDoc);
            }).catch(function (errors) {
                //console.log(errors);
            });
        };
        // download file from database
        _this.saveByteArray = function (doc, docType, docName) {
            //var binaryString = window.atob(doc);
            //var binaryLen = binaryString.length;
            //var bytes = new Uint8Array(binaryLen);
            //for (var i = 0; i < binaryLen; i++) {
            //    var ascii = binaryString.charCodeAt(i);
            //    bytes[i] = ascii;
            //}
            //var blob = new Blob([bytes], { type: "application/" + docType });
            var link = document.createElement('a');
            link.href = _this.getObjectUrl(doc, docType, docName);
            var fileName = docName;
            link.download = fileName;
            link.click();
        };
        // get object url
        _this.getObjectUrl = function (doc, docType, docName) {
            var binaryString = window.atob(doc);
            var binaryLen = binaryString.length;
            var bytes = new Uint8Array(binaryLen);
            for (var i = 0; i < binaryLen; i++) {
                var ascii = binaryString.charCodeAt(i);
                bytes[i] = ascii;
            }
            var blob = new Blob([bytes], { type: "application/" + docType });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            return link.href;
        };
        _this.userId = (0, emsUtilities_1.getUserId)();
        return _this;
    }
    EMSSupplementalDoc.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Table, null,
            React.createElement(core_1.TableHead, null,
                (this.props.ComplaintId && this.props.ComplaintId > 0) ?
                    React.createElement(core_1.TableRow, null,
                        React.createElement("th", { colSpan: 3, className: "SubTableHeader" },
                            React.createElement("h5", null, "Supplemental Document")),
                        React.createElement("th", { colSpan: 2, className: "textRight SubTableHeader" },
                            React.createElement(EMSSupplementalDocInsertPopup_1.EMSSupplementalDocInsertPopup, { ref: this.eMSSupplementalDocInsertPopup, ComplaintId: this.props.ComplaintId, getEMSSupplementalDOC: this.getEMSSupplementalDOC }))) : React.createElement(core_1.TableRow, null,
                    React.createElement("th", { colSpan: 5, className: "SubTableHeader" },
                        React.createElement("h5", null, "Supplemental Document"))),
                React.createElement(core_1.TableRow, null,
                    React.createElement("th", { style: { "textAlign": "center" } }, "Type"),
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Description"),
                    React.createElement("th", null, "Date"))),
            this.state.EMSSupplementalDoc && this.state.EMSSupplementalDoc.length > 0 && this.state.EMSSupplementalDoc[0].DocId && this.state.EMSSupplementalDoc[0].DocId > 0 ?
                React.createElement(core_1.TableBody, null, this.state.EMSSupplementalDoc.map(function (item, index) { return (React.createElement(core_1.TableRow, { key: index },
                    React.createElement("td", { className: "textLeft" },
                        React.createElement(core_1.Button, { variant: "contained", onClick: function () { _this.saveByteArray(item.Doc, item.DocType, item.DocName); }, "data-toggle": "tooltip", title: "Download " + item.DocName, className: "btnFileImage marginLeft5" }, item.DocType === 'Image' ? React.createElement("img", { src: _this.getObjectUrl(item.Doc, item.DocType, item.DocName), className: "thumnail", alt: item.DocType }) : React.createElement("img", { src: window.location.origin + '/images/' + item.DocType + '.png', className: "fileImage", alt: item.DocType }))),
                    React.createElement("td", { className: "textLeft" }, item.DocName),
                    React.createElement("td", { className: "textLeft" },
                        item.DocDesc,
                        item.DocDescOther && item.DocDescOther.length > 0 ? ' - ' + item.DocDescOther : ''),
                    React.createElement("td", { className: "textLeft" }, item.CreatedDate ? new Date(item.CreatedDate).toLocaleString() : ''),
                    React.createElement("th", { className: "textRight" }, (item.DocId === null || item.DocId === 0) ? null : React.createElement(EMSSupplementalDocUpdatePopup_1.EMSSupplementalDocUpdatePopup, { ref: _this.eMSSupplementalDocUpdatePopup, ComplaintId: _this.props.ComplaintId, SupplementalDoc: item, getEMSSupplementalDOC: _this.getEMSSupplementalDOC })))); })) : React.createElement(core_1.TableBody, null,
                React.createElement(core_1.TableRow, null,
                    React.createElement(core_1.TableCell, { colSpan: 4, className: "textCenter" },
                        React.createElement("h6", null, "No Document"))))));
    };
    EMSSupplementalDoc.prototype.componentDidMount = function () {
        this.getEMSSupplementalDOC();
    };
    return EMSSupplementalDoc;
}(React.Component));
exports.EMSSupplementalDoc = EMSSupplementalDoc;


/***/ }),

/***/ "./src/EMSSubmit/EMSSupplementalDocInsertPopup.tsx":
/*!*********************************************************!*\
  !*** ./src/EMSSubmit/EMSSupplementalDocInsertPopup.tsx ***!
  \*********************************************************/
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
exports.EMSSupplementalDocInsertPopup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var EMSSupplementalDocInsertPopup = /** @class */ (function (_super) {
    __extends(EMSSupplementalDocInsertPopup, _super);
    function EMSSupplementalDocInsertPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            EMSSupplementalDoc: {
                DocId: 0,
                ComplaintId: 0,
                DocType: '',
                DocName: '',
                DocDesc: '',
                DocDescOther: '',
                DocExt: '',
                Doc: new Array,
                ImageDoc: '',
                DocLocation: '',
                Comments: '',
                CreatedDate: '',
                CreatedBy: '',
                UpdatedDate: '',
                UpdatedBy: ''
            }, file: [{}], Description: '', show: false
        };
        // set state
        _this.handleChange = function (event) {
            var target = event.target;
            var value = target.value;
            var name = target.name;
            if (name === 'file')
                _this.setState({ file: target.files });
            else if (name === 'Description')
                _this.setState({ Description: value });
        };
        _this.handleSubmit = function (event) {
            event.preventDefault();
            _this.fileUpload(_this.state.file);
            _this.props.getEMSSupplementalDOC();
        };
        _this.fileUpload = function (file) {
            /*if (this.props.ComplaintId !== null && this.props.ComplaintId > 0) {*/
            var url = (0, emsUtilities_1.baseApiUrl)() + 'SupplementalDoc/Insert';
            var userId = (0, emsUtilities_1.getUserId)();
            var formData = new FormData();
            if (file) {
                for (var i = 0; i < file.length; i++) {
                    formData.append('file[$(i)]', file[i]);
                }
                formData.append('ComplaintId', _this.props.ComplaintId.toString());
                formData.append('userId', userId);
                formData.append('Description', _this.state.Description);
                console.log(formData);
                var requestOptions_1 = {
                    withCredentials: true,
                    method: 'POST',
                    body: formData
                };
                fetch(url, requestOptions_1).then(function (res) {
                    //if (res.status === 200)
                    //    return res.json();
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
                        alert((0, emsUtilities_1.getSuccessMessage)('A Supplemental Document'));
                        _this.props.getEMSSupplementalDOC();
                        _this.handleClear();
                    }
                }).catch(function (errors) {
                    alert((0, emsUtilities_1.getErrorMessage)('There is an error during inserting a Supplemental Document'));
                });
            }
            else
                alert('Please select a file');
        };
        _this.handleClear = function () {
            _this.setState({
                EMSSupplementalDoc: {
                    DocId: 0,
                    ComplaintId: 0,
                    DocType: '',
                    DocName: '',
                    DocDesc: '',
                    DocDescOther: '',
                    DocExt: '',
                    Doc: new Array,
                    ImageDoc: '',
                    DocLocation: '',
                    Comments: '',
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }, file: [{}], Description: ''
            });
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    // display UI on the Person Search Popup Window
    EMSSupplementalDocInsertPopup.prototype.render = function () {
        if (this.props.ComplaintId && this.props.ComplaintId > 0) {
            return (React.createElement("form", { onSubmit: this.handleSubmit, style: { marginBottom: "10px", marginRight: "10px" } },
                React.createElement(core_1.Card, { className: "supervisorInformationDiv", style: { padding: "10px 10px" } },
                    React.createElement(core_1.Grid, { container: true },
                        React.createElement(core_1.Grid, { item: true, xs: 8, container: true },
                            React.createElement(core_1.Grid, { item: true, xs: 12 },
                                React.createElement("input", { type: "file", multiple: true, name: "file", id: "fileInput", onChange: this.handleChange, accept: ".jpg, .png, .pdf, .doc, .docx, .xls, .xlsx, .m4a", style: { marginLeft: "10px", width: "100%" } }))),
                        (this.props.ComplaintId !== null && this.props.ComplaintId > 0) ?
                            React.createElement(core_1.Grid, { item: true, xs: 4 },
                                React.createElement(core_1.Button, { variant: 'contained', color: "primary", type: "button", className: "btnImgInsert", onClick: this.handleSubmit }, "Upload")) : null))));
        }
        else {
            return (null);
        }
    };
    return EMSSupplementalDocInsertPopup;
}(React.Component));
exports.EMSSupplementalDocInsertPopup = EMSSupplementalDocInsertPopup;


/***/ }),

/***/ "./src/EMSSubmit/EMSSupplementalDocUpdatePopup.tsx":
/*!*********************************************************!*\
  !*** ./src/EMSSubmit/EMSSupplementalDocUpdatePopup.tsx ***!
  \*********************************************************/
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
exports.EMSSupplementalDocUpdatePopup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var emsUtilities_1 = __webpack_require__(/*! ../utilities/emsUtilities */ "./src/utilities/emsUtilities.tsx");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var EMSSupplementalDocUpdatePopup = /** @class */ (function (_super) {
    __extends(EMSSupplementalDocUpdatePopup, _super);
    function EMSSupplementalDocUpdatePopup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            EMSSupplementalDoc: {
                DocId: 0,
                ComplaintId: 0,
                DocType: '',
                DocName: '',
                DocDesc: '',
                DocDescOther: '',
                DocExt: '',
                Doc: new Array,
                ImageDoc: '',
                DocLocation: '',
                Comments: '',
                CreatedDate: '',
                CreatedBy: '',
                UpdatedDate: '',
                UpdatedBy: ''
            }, file: {}, Description: '', show: false
        };
        _this.url = '';
        _this.userId = '';
        // set state
        _this.handleChange = function (event) {
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            if (name === 'file')
                _this.setState({ file: target.files[0] });
            else if (name === 'Description')
                _this.setState({ Description: value });
        };
        // insert or update supervisor record
        _this.handleSubmit = function (event) {
            event.preventDefault();
            _this.fileUpload(_this.state.file);
        };
        _this.fileUpload = function (file) {
            if (_this.props.ComplaintId !== null && _this.props.ComplaintId > 0) {
                var url = (0, emsUtilities_1.baseApiUrl)() + 'SupplementalDoc/Update';
                var userId = (0, emsUtilities_1.getUserId)();
                var formData = new FormData();
                if (file) {
                    formData.append('id', _this.props.SupplementalDoc.DocId);
                    formData.append('file', file);
                    formData.append('ComplaintId', _this.props.ComplaintId.toString());
                    formData.append('userId', userId);
                    formData.append('Description', _this.state.Description);
                    var requestOptions_1 = {
                        withCredentials: true,
                        method: 'POST',
                        body: formData
                    };
                    fetch(url, requestOptions_1).then(function (res) {
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
                            alert((0, emsUtilities_1.getSuccessMessage)('A Supplemental Document '));
                            _this.state.EMSSupplementalDoc.DocName = responseData.DocName;
                        }
                    }).catch(function (errors) {
                        alert((0, emsUtilities_1.getErrorMessage)('There is an error during Updating a Supplemental Document'));
                    });
                }
                else
                    alert('Please select a file');
            }
            else
                alert("This person doesn't have a complaint");
        };
        _this.handleDelete = function (event) {
            var delDto = {
                Id: _this.props.SupplementalDoc.DocId,
                ForeignKey: _this.props.ComplaintId
            };
            var deleteRequestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: (0, emsUtilities_1.serializeData)(delDto)
            };
            fetch((0, emsUtilities_1.baseApiUrl)() + 'SupplementalDoc/Delete', deleteRequestOptions).then(function (res) {
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
                    _this.setState({ CitizenInjury: responseData });
                    alert('This Supplemental Document has been removed');
                    _this.props.getEMSSupplementalDOC();
                }
            }).catch(function (errors) {
                // console.log(errors);
                alert((0, emsUtilities_1.getErrorMessage)('There is an error during deleting a Supplemental Document'));
            });
        };
        _this.handleClear = function () {
            _this.setState({
                EMSSupplementalDoc: {
                    DocId: 0,
                    ComplaintId: 0,
                    DocType: '',
                    DocName: '',
                    DocDesc: '',
                    DocDescOther: '',
                    DocExt: '',
                    Doc: new Array,
                    ImageDoc: '',
                    DocLocation: '',
                    Comments: '',
                    CreatedDate: '',
                    CreatedBy: '',
                    UpdatedDate: '',
                    UpdatedBy: ''
                }, file: [{}], Description: ''
            });
            /*this.props.getComplaint.call(this, this.props.ComplaintId);*/
        };
        _this.handleShow = function () {
            _this.setState({ show: true });
            _this.setSupplementalDoc();
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
            _this.props.getEMSSupplementalDOC();
        };
        // set a FRD member
        _this.setSupplementalDoc = function () {
            _this.state.EMSSupplementalDoc.DocId = _this.props.SupplementalDoc.DOcId;
            _this.state.EMSSupplementalDoc.ComplaintId = _this.props.SupplementalDoc.ComplaintId;
            _this.state.EMSSupplementalDoc.DocType = _this.props.SupplementalDoc.DocType;
            _this.state.EMSSupplementalDoc.DocName = _this.props.SupplementalDoc.DocName;
            _this.state.EMSSupplementalDoc.DocExt = _this.props.SupplementalDoc.DocExt;
            _this.state.EMSSupplementalDoc.DocDesc = _this.props.SupplementalDoc.DocDesc;
            _this.state.EMSSupplementalDoc.DocDescOther = _this.props.SupplementalDoc.DocDescOther;
            _this.state.EMSSupplementalDoc.Doc = _this.props.SupplementalDoc.Doc;
            _this.state.EMSSupplementalDoc.Comments = _this.props.SupplementalDoc.Comments;
            _this.state.EMSSupplementalDoc.CreatedBy = _this.props.SupplementalDoc.CreatedBy;
            _this.state.EMSSupplementalDoc.CreatedDate = _this.props.SupplementalDoc.CreatedDate;
            _this.state.EMSSupplementalDoc.UpdatedBy = _this.props.SupplementalDoc.UpdatedBy;
            _this.state.EMSSupplementalDoc.UpdatedDate = _this.props.SupplementalDoc.UpdatedDate;
            _this.state.Description = _this.props.SupplementalDoc.DocDesc;
            /*this.state.DescriptionOther = this.props.SupplementalDoc.DocDescOther;*/
        };
        // download file from database
        _this.saveByteArray = function (doc, docType, docName) {
            var binaryString = window.atob(doc);
            var binaryLen = binaryString.length;
            var bytes = new Uint8Array(binaryLen);
            for (var i = 0; i < binaryLen; i++) {
                var ascii = binaryString.charCodeAt(i);
                bytes[i] = ascii;
            }
            var blob = new Blob([bytes], { type: "application/" + docType });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            var fileName = docName;
            link.download = fileName;
            link.click();
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleClear = _this.handleClear.bind(_this);
        _this.userId = (0, emsUtilities_1.getUserId)();
        return _this;
    }
    EMSSupplementalDocUpdatePopup.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "left", paddingBottom: "5px" } },
            React.createElement(core_1.Grid, { container: true, className: "textRight alignRight marginTop20" },
                React.createElement(core_1.Button, { variant: "contained", onClick: function () { _this.saveByteArray(_this.props.SupplementalDoc.Doc, _this.props.SupplementalDoc.DocType, _this.props.SupplementalDoc.DocName); }, "data-toggle": "tooltip", title: "Download " + this.props.SupplementalDoc.DocName, className: "btnImgDownload marginLeft5" },
                    React.createElement("img", { src: window.location.origin + '/images/download_02_white.png', className: "btnImage" })),
                React.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: function () { _this.handleShow(); }, "data-toggle": "tooltip", title: "Update Supplemental Documents", className: "marginLeft5" },
                    React.createElement("img", { src: window.location.origin + '/images/edit_white.png', className: "btnImage" })),
                React.createElement(core_1.Button, { variant: 'contained', color: "secondary", onClick: function () {
                        window.confirm('Are you sure you wish to delete this Supplemental Document?') && _this.handleDelete.call(_this);
                    }, "data-toggle": "tooltip", title: "Delete Supplemental Document", className: "marginLeft5" },
                    React.createElement("img", { src: window.location.origin + '/images/delete_white.png', className: "btnImage" }))),
            React.createElement(core_1.Modal, { className: "insertModal", open: this.state.show, onClose: function () { _this.handleClear.call(_this); _this.handleClose(); }, disableBackdropClick: true },
                React.createElement(core_1.Paper, { className: "ModalDiv" },
                    React.createElement(core_1.Grid, { container: true, spacing: 3 },
                        React.createElement(core_1.Paper, { className: "marginTop10LightBlue" },
                            React.createElement(core_1.Grid, { container: true, spacing: 2 },
                                React.createElement(core_1.Grid, { item: true, xs: 12, className: "contentHeader" },
                                    React.createElement("h5", null, "Update Supplemental Document")),
                                React.createElement(core_1.Grid, { container: true, item: true, xs: 12 },
                                    React.createElement(core_1.Grid, { item: true, xs: 12 },
                                        React.createElement("strong", null, "Document Name: "),
                                        this.state.EMSSupplementalDoc.DocName),
                                    React.createElement(core_1.Grid, { item: true, xs: 12, container: true }, (this.props.ComplaintId !== null && this.props.ComplaintId > 0) ?
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement("input", { type: "file", name: "file", id: "fileInput", onChange: this.handleChange, accept: ".jpg, .png, .pdf, .doc, .docx, .xls, .xlsx, .m4a", style: { marginLeft: "10px", width: "100%" } })) : null))))),
                    React.createElement(core_1.Grid, { item: true, xs: 12, className: "textRight popupCloseBtn" },
                        React.createElement(core_1.Button, { variant: 'contained', color: "primary", onClick: this.handleSubmit }, "Save"),
                        React.createElement(core_1.Button, { variant: 'contained', color: "default", onClick: this.handleClose }, "Close"))))));
    };
    return EMSSupplementalDocUpdatePopup;
}(React.Component));
exports.EMSSupplementalDocUpdatePopup = EMSSupplementalDocUpdatePopup;


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

}]);
//# sourceMappingURL=src_EMSSubmit_EMSSubmitUpdatePopup_tsx.bundle.js.map