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
exports.EMSSupplementalDoc = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var EMSSupplementalDocInsertPopup_1 = require("./EMSSupplementalDocInsertPopup");
var EMSSupplementalDocUpdatePopup_1 = require("./EMSSupplementalDocUpdatePopup");
var emsUtilities_1 = require("../utilities/emsUtilities");
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
            var url = emsUtilities_1.baseApiUrl() + 'EMSSupplementalDocByComplaintId?complaintId=' + _this.props.ComplaintId;
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
        _this.userId = emsUtilities_1.getUserId();
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
//# sourceMappingURL=EMSSupplementalDoc.js.map