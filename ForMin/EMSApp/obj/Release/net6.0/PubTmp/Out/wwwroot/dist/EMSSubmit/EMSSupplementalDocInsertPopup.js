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
exports.EMSSupplementalDocInsertPopup = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var emsUtilities_1 = require("../utilities/emsUtilities");
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
            var url = emsUtilities_1.baseApiUrl() + 'SupplementalDoc/Insert';
            var userId = emsUtilities_1.getUserId();
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
                        alert(emsUtilities_1.getSuccessMessage('A Supplemental Document'));
                        _this.props.getEMSSupplementalDOC();
                        _this.handleClear();
                    }
                }).catch(function (errors) {
                    alert(emsUtilities_1.getErrorMessage('There is an error during inserting a Supplemental Document'));
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
//# sourceMappingURL=EMSSupplementalDocInsertPopup.js.map