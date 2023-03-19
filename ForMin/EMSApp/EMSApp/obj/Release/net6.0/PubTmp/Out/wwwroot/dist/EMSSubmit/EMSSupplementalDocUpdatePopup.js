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
exports.EMSSupplementalDocUpdatePopup = void 0;
var React = __importStar(require("react"));
var emsUtilities_1 = require("../utilities/emsUtilities");
var core_1 = require("@material-ui/core");
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
                var url = emsUtilities_1.baseApiUrl() + 'SupplementalDoc/Update';
                var userId = emsUtilities_1.getUserId();
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
                            alert(emsUtilities_1.getSuccessMessage('A Supplemental Document '));
                            _this.state.EMSSupplementalDoc.DocName = responseData.DocName;
                        }
                    }).catch(function (errors) {
                        alert(emsUtilities_1.getErrorMessage('There is an error during Updating a Supplemental Document'));
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
                body: emsUtilities_1.serializeData(delDto)
            };
            fetch(emsUtilities_1.baseApiUrl() + 'SupplementalDoc/Delete', deleteRequestOptions).then(function (res) {
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
                    _this.setState({ CitizenInjury: responseData });
                    alert('This Supplemental Document has been removed');
                    _this.props.getEMSSupplementalDOC();
                }
            }).catch(function (errors) {
                // console.log(errors);
                alert(emsUtilities_1.getErrorMessage('There is an error during deleting a Supplemental Document'));
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
        _this.userId = emsUtilities_1.getUserId();
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
//# sourceMappingURL=EMSSupplementalDocUpdatePopup.js.map