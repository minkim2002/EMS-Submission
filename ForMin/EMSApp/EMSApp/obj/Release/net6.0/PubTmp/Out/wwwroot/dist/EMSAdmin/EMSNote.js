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
exports.EMSNote = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var EMSNoteInsertPopup_1 = require("./EMSNoteInsertPopup");
var EMSNoteUpdatePopup_1 = require("./EMSNoteUpdatePopup");
var emsUtilities_1 = require("../utilities/emsUtilities");
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
                    AuthorName: emsUtilities_1.getUserName(),
                }], CanSave: false, show: false
        };
        _this.userId = '';
        _this.eMSNoteInsertPopup = React.createRef();
        _this.eMSNoteUpdatePopup = React.createRef();
        // get ems note
        _this.getEMSNote = function () {
            var url = emsUtilities_1.baseApiUrl() + 'EMSNote?complaintId=' + _this.props.ComplaintId;
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
                        React.createElement(EMSNoteInsertPopup_1.EMSNoteInsertPopup, { ref: this.eMSNoteInsertPopup, ComplaintId: this.props.ComplaintId, AuthorName: emsUtilities_1.getUserName(), getEMSNote: this.getEMSNote }),
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
                            React.createElement(EMSNoteUpdatePopup_1.EMSNoteUpdatePopup, { ref: _this.eMSNoteUpdatePopup, Note: item, ComplaintId: _this.props.ComplaintId, AuthorName: emsUtilities_1.getUserName(), getEMSNote: _this.getEMSNote })))); }),
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
//# sourceMappingURL=EMSNote.js.map