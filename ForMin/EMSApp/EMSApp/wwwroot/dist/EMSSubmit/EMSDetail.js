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
exports.EMSDetail = void 0;
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var EMSSubmitTab_1 = require("./EMSSubmitTab");
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
//# sourceMappingURL=EMSDetail.js.map