import * as React from 'react';
import { baseApiUrl, getErrorMessage, getRequestOptions, getSuccessMessage, getUserId, serializeData } from '../utilities/emsUtilities';
import { Button, Paper, Grid, TextField, Modal, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@material-ui/core';
import { EMSSubmitTab } from './EMSSubmitTab'

export interface DetailProps {
    ref: any;
    PageName: string;
    EMSVComplaint: any;
}


export class EMSDetail extends React.Component<DetailProps, {}>{

    state = {
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
    }

    eMSSubmitTab = React.createRef<EMSSubmitTab>();

    constructor(props: any) {
        super(props);
    }

    handleShow = () => {
        this.setState({ show: true });
        this.setComplaint();
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    setComplaint = () => {
        this.state.EMSVComplaint.ComplaintId = this.props.EMSVComplaint.ComplaintId;
        this.state.EMSVComplaint.ComplaintStatus = this.props.EMSVComplaint.ComplaintStatus;
        this.state.EMSVComplaint.SubmitterName = this.props.EMSVComplaint.SubmitterName;
        this.state.EMSVComplaint.SubmitterPhoneNo = this.props.EMSVComplaint.SubmitterPhoneNo;
        this.state.EMSVComplaint.SubmitterShit = this.props.EMSVComplaint.SubmitterShit;
        this.state.EMSVComplaint.RequestDate = this.props.EMSVComplaint.RequestDate;
        this.state.EMSVComplaint.Location = this.props.EMSVComplaint.Location;
        this.state.EMSVComplaint.CategoryId = this.props.EMSVComplaint.CategoryId;
        this.state.EMSVComplaint.SubCategoryId = this.props.EMSVComplaint.SubCategoryId;
        this.state.EMSVComplaint.SubCategoryOthers = this.props.EMSVComplaint.SubCategoryOthers;
        this.state.EMSVComplaint.Unit = this.props.EMSVComplaint.Unit;
        this.state.EMSVComplaint.VehicleNumber = this.props.EMSVComplaint.VehicleNumber;
        this.state.EMSVComplaint.AssetNumber = this.props.EMSVComplaint.AssetNumber;
        this.state.EMSVComplaint.ComplaintPriority = this.props.EMSVComplaint.ComplaintPriority;
        this.state.EMSVComplaint.SerialNumber = this.props.EMSVComplaint.SerialNumber;
        this.state.EMSVComplaint.IncidentNumber = this.props.EMSVComplaint.IncidentNumber;
        this.state.EMSVComplaint.ComplaintDetail = this.props.EMSVComplaint.ComplaintDetail;
        this.state.EMSVComplaint.CommentsByAdmin = this.props.EMSVComplaint.CommentsByAdmin;
        this.state.EMSVComplaint.CreatedDate = this.props.EMSVComplaint.CreatedDate;
        this.state.EMSVComplaint.CreatedBy = this.props.EMSVComplaint.CreatedBy;
        this.state.EMSVComplaint.UpdatedDate = this.props.EMSVComplaint.UpdatedDate;
        this.state.EMSVComplaint.UpdatedBy = this.props.EMSVComplaint.UpdatedBy;
        this.state.EMSVComplaint.CategoryDesc = this.props.EMSVComplaint.CategoryDesc;
        this.state.EMSVComplaint.SubCategoryDesc = this.props.EMSVComplaint.SubCategoryDesc;
        this.state.EMSVComplaint.WorkGroupName = this.props.EMSVComplaint.WorkGroupName;
        this.state.EMSVComplaint.UnitName = this.props.EMSVComplaint.UnitName;
    }

    render() {
        return (
            //<Grid item xs={12} style={{ textAlign: "left" }}>
            //    <Grid container className="textRight alignRight" style={{ paddingBottom: "5px" }}>
            //        <Button variant="contained" onClick={() => { this.handleShow() }} data-toggle="tooltip" title="Update Log" className="marginLeft5" style={{ backgroundColor: 'orange' }}><img src={window.location.origin + '/images/MORE_white.png'} className="btnImage" /></Button>
            //    </Grid>
                <Modal className="insertModal" open={this.state.show} onClose={() => { this.handleClose(); }} disableBackdropClick={true}>
                    <Paper className="ModalDiv">
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                            <span><strong>Submitter:</strong> {this.props.EMSVComplaint.SubmitterName}</span>
                            </Grid>
                            <Grid item xs={4}>
                            <span><strong>Category:</strong> {this.props.EMSVComplaint.CategoryDesc}</span>
                            </Grid>
                            <Grid item xs={4}>
                            <span><strong>Subcategory:</strong> {this.props.EMSVComplaint.SubCategoryDesc}</span>
                            </Grid>
                            <Grid item xs={4}>
                            <span><strong>Phone Number:</strong> {this.props.EMSVComplaint.SubmitterPhoneNo}</span>
                            </Grid>
                            <Grid item xs={4}>
                            <span><strong>Vehicle Number:</strong> {this.props.EMSVComplaint.VehicleNumber}</span>
                            </Grid>
                            <Grid item xs={4}>
                            <span><strong>Asset Number:</strong> {this.props.EMSVComplaint.AssetNumber}</span>
                            </Grid>
                            <Grid item xs={4}>
                            <span><strong>Serial Number:</strong> {this.props.EMSVComplaint.SerialNumber}</span>
                            </Grid>
                            <Grid item xs={4}>
                            <span><strong>Incident Number:</strong> {this.props.EMSVComplaint.IncidentNumber}</span>
                            </Grid>
                            <Grid item xs={4}>                                                            
                            <span><strong>Complaint Status:</strong> {this.props.EMSVComplaint.ComplaintStatus}</span>
                            </Grid>
                            <Grid item xs={12}>
                            <span><strong>Complaint Detail:</strong>{this.props.EMSVComplaint.ComplaintDetail}</span>
                            </Grid>
                            <Grid item xs={12}>
                            <span><strong>Comment:</strong> {this.props.EMSVComplaint.CommentsByAdmin}</span>
                            </Grid>
                        <Grid item xs={12}>
                            <EMSSubmitTab ref={this.eMSSubmitTab} ComplaintId={this.props.EMSVComplaint.ComplaintId} PageName={this.props.PageName} />
                            </Grid>
                        <Grid className="textRight" item xs={12} sm={12}>
                            <Button variant='contained' color="default" onClick={() => { this.handleClose(); }}>Close</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Modal>
            /*</Grid>*/
        )
    }
}