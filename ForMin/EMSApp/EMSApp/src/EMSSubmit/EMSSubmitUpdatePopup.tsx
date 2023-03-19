import * as React from 'react';
import { baseApiUrl, getErrorMessage, getRequestOptions, getSuccessMessage, getUserId, getUserName, serializeData, getHost, baseEmailApiUrl } from '../utilities/emsUtilities';
import { Button, Paper, Grid, TextField, Modal, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@material-ui/core';
import { EMSSubmitTab } from './EMSSubmitTab'
import { EMSDetail } from './EMSDetail';

export interface ComplaintProps {
    ref: any;
    getEMSComplaint: Function;
    getEMSCategory: Function;
    EMSComplaint: any
    PageName: string;
    /*handleDetailShow: Function;*/
}

export class EMSSubmitUpdatePopup extends React.Component<ComplaintProps, {}>{

    state = {
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
        , SerialNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
        AssetNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
        VehicleNumberRequire: [1, 85],
        InicdentNumberRequire: [131, 132]
    }

    eMSSubmitTab = React.createRef<EMSSubmitTab>();
    eMSDetail = React.createRef<EMSDetail>();
    userId = '';
    userName = '';

    constructor(props: any) {
        super(props);
        this.userId = getUserId();
        this.userName = getUserName();
    }

    // get workgroup
    getWorkGroup = () => {
        const url = baseApiUrl() + 'Lookup/Locations';

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            this.setState({ WorkGroupList: responseData });
        }).catch((errors) => {
            //console.log(errors);
        });
    }

    // get unit
    getUnit = () => {
        const url = baseApiUrl() + 'Lookup/Units';

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            this.setState({ UnitList: responseData });
        }).catch((errors) => {
            //console.log(errors);
        });
    }


    // get ems category
    getEMSCategory = () => {
        const url = baseApiUrl() + 'EMSCategoryByType?type=Category';

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            this.setState({ EMSCategoryList: responseData });
        }).catch((errors) => {
            //console.log(errors);
        });
    }


    // get ems sub category
    getEMSSubCategory = (value: number) => {
        const url = baseApiUrl() + 'EMSSubCategoryById?Id=' + value;

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            this.setState({ EMSSubCategoryList: responseData });
            console.log(this.state.EMSSubCategoryList);
        }).catch((errors) => {
            //console.log(errors);
        });
    }

    // get ems complaint status
    getEMSStatus = () => {
        const url = baseApiUrl() + 'EMSCategoryByType?Type=Status';

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            if (responseData === 404)
                alert('There is no status data. Plese add status in Manage page');
            else
                this.setState({ EMSStatusList: responseData });
        }).catch((errors) => {
            //console.log(errors);
        });
    }

    //set state
    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const currentSQState = { ...this.state.EMSComplaint, [name]: value };
        this.setState({ EMSComplaint: currentSQState });
        if (this.state.EMSComplaint.ComplaintDetail !== null && this.state.EMSComplaint.ComplaintDetail !== 'undefined' && this.state.EMSComplaint.IncidentNumber !== null && this.state.EMSComplaint.IncidentNumber !== 'undefined') {
            this.setState({ canSave: true });
        } else
            this.setState({ canSave: false });
        if (name === 'CategoryId' && (value !== null && value > 0)) {
            this.getEMSSubCategory(value);
        }
    }

    //Get a Complaint
    getEMSVComplaint = (value: number) => {
        const url = baseApiUrl() + 'EMSVComplaintById?Id=' + value;

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            this.setState({ EMSVComplaint: responseData });
            setTimeout(() => { this.sendEmail(); }, 100);
        }).catch((errors) => {
            //console.log(errors);
        });
    }

    //Update Complaint
    handleSubmit = () => {
        if (this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0) {
            if (this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0) {
                if (this.state.EMSComplaint.SubmitterName && this.state.EMSComplaint.SubmitterName.length > 1) {
                    if (this.state.EMSComplaint.SubmitterShit && this.state.EMSComplaint.SubmitterShit.length > 0) {
                        if (this.state.EMSComplaint.Location && this.state.EMSComplaint.Location.length > 1) {
                            if (this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 1 || this.state.EMSComplaint.CategoryId === 53) {
                                if ((this.state.EMSComplaint.SerialNumber && this.state.EMSComplaint.SerialNumber.length > 1) || this.state.SerialNumberRequire.indexOf(this.state.EMSComplaint.CategoryId) < 0) {
                                    if ((this.state.EMSComplaint.VehicleNumber && this.state.EMSComplaint.VehicleNumber.length > 1) || (this.state.EMSComplaint.CategoryId !== 1)) {
                                        if ((this.state.EMSComplaint.AssetNumber && this.state.EMSComplaint.AssetNumber.length > 1) || this.state.AssetNumberRequire.indexOf(this.state.EMSComplaint.CategoryId) < 0) {
                                            if ((this.state.EMSComplaint.IncidentNumber && this.state.EMSComplaint.IncidentNumber.length === 10) || this.state.InicdentNumberRequire.indexOf(this.state.EMSComplaint.SubCategoryId) < 0) {
                                                let ComplaintUrl = baseApiUrl() + 'Complaint/Update';

                                                const today = new Date().toISOString();

                                                this.state.EMSComplaint.UpdatedBy = this.userId;
                                                this.state.EMSComplaint.UpdatedDate = today;

                                                let requestSQOptions = {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/x-www-form-urlencoded'
                                                    },
                                                    body: serializeData(this.state.EMSComplaint)
                                                }

                                                fetch(ComplaintUrl, requestSQOptions).then(res => {
                                                    if (res.status === 200)
                                                        return res.json();
                                                    return res.status;
                                                }).then(responseData => {
                                                    if (responseData === 400)
                                                        alert(getErrorMessage('This is a Bad Request.'));
                                                    else if (responseData === 401)
                                                        alert(getErrorMessage('You are not authorized.'));
                                                    else if (responseData === 403)
                                                        alert(getErrorMessage('You don\'t have the access rights.'));
                                                    else if (responseData === 404)
                                                        alert(getErrorMessage('There is no data.'));
                                                    else if (responseData === 409)
                                                        alert(getErrorMessage('There is a conflict.'));
                                                    else if (responseData === 500)
                                                        alert(getErrorMessage('There is an internal server error.'));
                                                    else {
                                                        this.setState({ EMSComplaint: responseData });

                                                        if (this.state.EMSComplaint.ComplaintStatus !== this.state.CurrentStatus) {
                                                            this.setState({ CurrentStatue: this.state.EMSComplaint.ComplaintStatus });
                                                            setTimeout(() => { this.getEMSVComplaint(this.state.EMSComplaint.ComplaintId); }, 200);
                                                        } else
                                                            alert(getSuccessMessage('Complaint ID #' + this.state.EMSComplaint.ComplaintId + ' '));
                                                    }
                                                }).catch((errors) => {
                                                    // console.log(errors);
                                                    alert(getErrorMessage('There is an error during inserting a complaint'));
                                                })
                                            } else
                                                alert('Please input the Incident Number. It must be 10 characters.');
                                        } else
                                            alert('Please input the County Asset Number');
                                    } else
                                        alert('Please input the County Vehicle Number');
                                } else
                                    alert('Please input the Serial Number');
                            } else
                                alert('Please select a Unit');
                        } else
                            alert('Please select the Location');
                    } else
                        alert('Please select the Submitter Shift');
                } else
                    alert("It couldn't get the Submitter Name. Please refresh your browser and then try it again.");
            } else
                alert('Please select a Subcategory');
        } else
            alert('Please select a Category');
    }

    // send email
    sendEmail = () => {
        this.setState({
            Email: {
                From: 'DoNotReply@fairfaxcounty.gov',
                To: [''],
                CC: [''],
                BCC: ['ykim01@fairfaxcounty.gov'],
                Subject: '',
                Body: ''
            }
        });
        this.state.Email.To[0] = 'FIRE-EMSSubmission@fairfaxcounty.gov';
        this.state.Email.CC[0] = this.state.EMSVComplaint.CreatedBy + '@fairfaxcounty.gov';

        if (this.userId && this.userId.length > 3 && this.state.Email.CC.indexOf(this.userId + '@fairfaxcounty.gov') < 0)
            this.state.Email.CC.push(this.userId + '@fairfaxcounty.gov');

        this.state.Email.Subject = 'Complaint (' + this.state.EMSVComplaint.ComplaintId + ') has been changed the Status to ' + this.state.EMSVComplaint.ComplaintStatus + '(' + new Date(this.state.EMSVComplaint.UpdatedDate).toLocaleDateString() + ')';

        const header1 = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title></title></head><body>' +
            '<div style="color:white; background-color: #3481ab; box-shadow:0.5px 0.5px #003366; border: 20px solid #3481ab; margin: 0px 10px;">' +
            '<h3 style="vertical-align:text-top;"><img src="https://firenet/images/email/FRDPatch.jpg" width="30" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  style="margin-left:15px;">EMS Submission for ' + this.state.EMSVComplaint.ComplaintId + ' (' + new Date(this.state.EMSVComplaint.CreatedDate).toLocaleDateString() + ')</span></h3></div>';

        let body1 = '<div style="background-color:white; color:black; padding:10px;">' +
            '<span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Complaint Id:</strong> ' + this.state.EMSVComplaint.ComplaintId +
            '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Submitter:</strong> ' + this.state.EMSVComplaint.SubmitterName +
            '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Unit:</strong> ' + this.state.EMSVComplaint.Unit;

        if (this.state.EMSVComplaint.CategoryId)
            body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Category:</strong> ' + this.state.EMSVComplaint.CategoryDesc;
        if (this.state.EMSVComplaint.SubCategoryId)
            body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Subcategory:</strong> ' + this.state.EMSVComplaint.SubCategoryDesc;
        if (this.state.EMSVComplaint.Location)
            body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Location:</strong> ' + this.state.EMSVComplaint.WorkGroupName;
        if (this.state.EMSVComplaint.ComplaintDetail)
            body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Complaint Detail:</strong> ' + this.state.EMSVComplaint.ComplaintDetail;
        if (this.state.EMSVComplaint.ComplaintDetail)
            body1 = body1 + '</span><br /><span style="font-weight:normal">&nbsp;&nbsp;&nbsp;<strong>Comment By Admin:</strong> ' + this.state.EMSVComplaint.CommentsByAdmin;


        body1 = body1 + '</span><br /><br />if you are a <strong style="font-size:1.2em">Submitter</strong> click <a href="' + getHost() + '/applications/emsapp' + '">here</a> to find your complaint.<span></li>';

        const footer = '<br /><br /><span style="font-weight:normal">Please email <strong><a href="mailto:' + this.userId + '@fairfaxcounty.gov">me</a></strong> if you have any questions.</span >' +
            '<br /><br /><span style="font-weight:normal">Thank you.</span><br /><span>' + this.userName + '</span></div>' +
            '</body></html>';

        // fist email
        this.state.Email.Body = header1 + body1 + footer;

        let requestSQOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serializeData(this.state.Email)
        }

        fetch(baseEmailApiUrl() + 'SendEmails', requestSQOptions).then(res => {
            return res.status;
        }).then(responseData => {
            if (responseData === 400)
                alert(getErrorMessage('This is a Bad Request.'));
            else if (responseData === 401)
                alert(getErrorMessage('You are not authorized.'));
            else if (responseData === 403)
                alert(getErrorMessage('You don\'t have the access rights.'));
            else if (responseData === 404)
                alert(getErrorMessage('There is no data.'));
            else if (responseData === 409)
                alert(getErrorMessage('There is a conflict.'));
            else if (responseData === 500)
                alert(getErrorMessage('There is an internal server error.'));
            else {
                alert('Your complaint has been submitted successfully');
            }
        }).catch((errors) => {
            alert(getErrorMessage('There is an error during sending a Notification Email.'));
        })
    }

    //clear state
    handleClear = () => {
        this.setState({
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
            }, showDetail: false, canSave: false, PageName: '', CurrentStatus: ''
            , SerialNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
            AssetNumberRequire: [29, 1, 35, 26, 23, 19, 53, 16, 13],
            VehicleNumberRequire: [1, 85],
            InicdentNumberRequire: [131, 132]
        });
    }

    handleDelete = (id: number) => {
        this.setComplaint();
        const delDto = {
            Id: id,
            ForeignKey: 0
        };

        const deleteRequestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serializeData(delDto)
        };

        fetch(baseApiUrl() + 'Complaint/Delete', deleteRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            if (responseData === 400)
                alert(getErrorMessage('This is a Bad Request.'));
            else if (responseData === 401)
                alert(getErrorMessage('You are not authorized.'));
            else if (responseData === 403)
                alert(getErrorMessage('You don\'t have the access rights.'));
            else if (responseData === 404)
                alert(getErrorMessage('There is no data.'));
            else if (responseData === 409)
                alert(getErrorMessage('There is a conflict.'));
            else if (responseData === 500)
                alert(getErrorMessage('There is an internal server error.'));
            else {
                this.props.getEMSComplaint.call(this);
                alert("It has been removed successfully.");
            }
        }).catch((errors) => {
            /*console.log(errors);*/
            alert(getErrorMessage('There is an error during deleting a complaint'));
        });

        this.handleClear();
    }



    handleShow = () => {
        this.setState({ show: true });
        this.setState({ CurrentStatus: this.props.EMSComplaint.ComplaintStatus });
        this.getEMSCategory();
        this.getEMSSubCategory(this.props.EMSComplaint.CategoryId)
        this.getEMSStatus();
        this.getWorkGroup();
        this.getUnit();
        setTimeout(() => { this.setComplaint(); }, 200);
    }

    handleClose = () => {
        this.setState({ show: false });
        this.props.getEMSComplaint();
    }

    setComplaint = () => {
        this.state.EMSComplaint.ComplaintId = this.props.EMSComplaint.ComplaintId ?? 0;
        this.state.EMSComplaint.ComplaintStatus = this.props.EMSComplaint.ComplaintStatus;
        this.state.EMSComplaint.SubmitterName = this.props.EMSComplaint.SubmitterName;
        this.state.EMSComplaint.SubmitterPhoneNo = this.props.EMSComplaint.SubmitterPhoneNo;
        this.state.EMSComplaint.SubmitterShit = this.props.EMSComplaint.SubmitterShit;
        this.state.EMSComplaint.RequestDate = this.props.EMSComplaint.RequestDate;
        this.state.EMSComplaint.Location = this.props.EMSComplaint.Location;
        this.state.EMSComplaint.CategoryId = this.props.EMSComplaint.CategoryId;
        this.state.EMSComplaint.SubCategoryId = this.props.EMSComplaint.SubCategoryId;
        this.state.EMSComplaint.SubCategoryOthers = this.props.EMSComplaint.SubCategoryOthers;
        this.state.EMSComplaint.Unit = this.props.EMSComplaint.Unit;
        this.state.EMSComplaint.VehicleNumber = this.props.EMSComplaint.VehicleNumber;
        this.state.EMSComplaint.AssetNumber = this.props.EMSComplaint.AssetNumber;
        this.state.EMSComplaint.ComplaintPriority = this.props.EMSComplaint.ComplaintPriority;
        this.state.EMSComplaint.SerialNumber = this.props.EMSComplaint.SerialNumber;
        this.state.EMSComplaint.IncidentNumber = this.props.EMSComplaint.IncidentNumber;
        this.state.EMSComplaint.ComplaintDetail = this.props.EMSComplaint.ComplaintDetail;
        this.state.EMSComplaint.CommentsByAdmin = this.props.EMSComplaint.CommentsByAdmin;
        this.state.EMSComplaint.CreatedDate = this.props.EMSComplaint.CreatedDate;
        this.state.EMSComplaint.CreatedBy = this.props.EMSComplaint.CreatedBy;
        this.state.EMSComplaint.UpdatedDate = this.props.EMSComplaint.UpdatedDate;
        const currentSQState = { ...this.state.EMSComplaint, "UpdatedBy": this.props.EMSComplaint.UpdatedBy };
        this.setState({ EMSComplaint: currentSQState });
    }


    render() {
        return (
            <Grid item xs={12} style={{ textAlign: "left" }}>
                <Grid container className="textRight alignRight">
                    <Button variant="contained" onClick={() => { this.eMSDetail.current.handleShow(); }} data-toggle="tooltip" title="Show EMS Submission Detail" className="marginLeft5" style={{ backgroundColor: 'orange' }}><img src={window.location.origin + '/images/MORE_white.png'} className="btnImage" /></Button>
                    <React.Fragment>
                        {this.props.PageName === 'Submit' && (this.props.EMSComplaint.ComplaintStatus === 'Completed' || this.props.EMSComplaint.ComplaintStatus === 'Denied') ? null : <Button variant="contained" color="primary" onClick={() => { this.handleShow(); }} data-toggle="tooltip" title="Update EMS Submission" className="marginLeft5"><img src={window.location.origin + '/images/edit_white.png'} className="btnImage" /></Button>}
                        {(this.props.PageName === 'Submit' && this.props.EMSComplaint.ComplaintStatus === 'Submitted') || this.props.PageName === 'Admin' ?
                            <Button variant='contained' color="secondary" onClick={() => { window.confirm('Are you sure you wish to delete this EMS Submission?') && this.handleDelete.call(this, this.props.EMSComplaint.ComplaintId); }} data-toggle="tooltip" title="Delete EMS Submission" className="marginLeft5"><img src={window.location.origin + '/images/delete_white.png'} className="btnImage" /></Button> : null}
                    </React.Fragment>
                </Grid>
                <Modal className="insertModal" open={this.state.show} onClose={() => { this.handleClear.call(this); this.handleClose(); }} disableBackdropClick={true}>
                    <Paper className="ModalDiv">
                        <Grid container spacing={2}>
                            {this.props.PageName === 'Admin' ?
                                <Grid item xs={2}>
                                    <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>*Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="ComplaintStatus"
                                            label="Status"
                                            value={this.state.EMSComplaint.ComplaintStatus}
                                            onChange={this.handleChange}>
                                            <MenuItem value=""><em>All</em></MenuItem>
                                            {this.state.EMSStatusList.map((item) => (
                                                <MenuItem value={item.CategoryDesc}><em>{item.CategoryDesc}</em></MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid> : null}
                            {this.props.PageName === 'Admin' ?
                                <React.Fragment>
                                    <Grid item xs={5} sm={5}>
                                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                            <InputLabel id={this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel'} style={{ fontSize: 13 }}>*Category</InputLabel>
                                            <Select
                                                id={this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel'}
                                                name="CategoryId"
                                                label="Category"
                                                value={this.state.EMSComplaint.CategoryId}
                                                onChange={this.handleChange}>
                                                <MenuItem value=""><em>Select One</em></MenuItem>
                                                {this.state.EMSCategoryList.map((item) => (
                                                    <MenuItem value={item.CategoryId}><em>{item.CategoryDesc}</em></MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={5} sm={5}>
                                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                            <InputLabel id={this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel'} style={{ fontSize: 13 }}>*Subcategory</InputLabel>
                                            <Select
                                                id={this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel'}
                                                name="SubCategoryId"
                                                label="SubCategory"
                                                value={this.state.EMSComplaint.SubCategoryId}
                                                onChange={this.handleChange}>
                                                <MenuItem value=""><em>Select One</em></MenuItem>
                                                {this.state.EMSSubCategoryList.map((item) => (
                                                    <MenuItem value={item.CategoryId}><em>{item.CategoryDesc}</em></MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid></React.Fragment> :
                                <React.Fragment>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                            <InputLabel id={this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel'} style={{ fontSize: 13 }}>*Category</InputLabel>
                                            <Select
                                                id={this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0 ? '' : 'requiredFieldLabel'}
                                                name="CategoryId"
                                                label="Category"
                                                value={this.state.EMSComplaint.CategoryId}
                                                onChange={this.handleChange}>
                                                <MenuItem value=""><em>Select One</em></MenuItem>
                                                {this.state.EMSCategoryList.map((item) => (
                                                    <MenuItem value={item.CategoryId}><em>{item.CategoryDesc}</em></MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                            <InputLabel id={this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel'} style={{ fontSize: 13 }}>*Subcategory</InputLabel>
                                            <Select
                                                id={this.state.EMSComplaint.SubCategoryId && this.state.EMSComplaint.SubCategoryId > 0 ? '' : 'requiredFieldLabel'}
                                                name="SubCategoryId"
                                                label="SubCategory"
                                                value={this.state.EMSComplaint.SubCategoryId}
                                                onChange={this.handleChange}>
                                                <MenuItem value=""><em>Select One</em></MenuItem>
                                                {this.state.EMSSubCategoryList.map((item) => (
                                                    <MenuItem value={item.CategoryId}><em>{item.CategoryDesc}</em></MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid></React.Fragment>}
                            <Grid item xs={4} sm={4}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <InputLabel style={{ fontSize: 13 }}>*Location</InputLabel>
                                    <Select
                                        name="Location"
                                        label="Location"
                                        value={this.state.EMSComplaint.Location}
                                        onChange={this.handleChange}>
                                        <MenuItem value=""><em>Select One</em></MenuItem>
                                        {this.state.WorkGroupList.map((item) => (
                                            <MenuItem value={item.WorkGroupAbbrv}><em>{item.WorkGroupName}</em></MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <InputLabel style={{ fontSize: 13 }}>*Shift</InputLabel>
                                    <Select
                                        name="SubmitterShit"
                                        label="Shift"
                                        value={this.state.EMSComplaint.SubmitterShit}
                                        onChange={this.handleChange}>
                                        <MenuItem value=""><em>Select One</em></MenuItem>
                                        <MenuItem value="A"><em>A</em></MenuItem>
                                        <MenuItem value="B"><em>B</em></MenuItem>
                                        <MenuItem value="C"><em>C</em></MenuItem>
                                        <MenuItem value="D"><em>D</em></MenuItem>
                                        <MenuItem value="Volunteer"><em>Volunteer</em></MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <InputLabel id={(this.state.EMSComplaint.CategoryId === 0 || this.state.EMSComplaint.CategoryId === 53) || (this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 0) ? '' : 'requiredFieldLabel'} style={{ fontSize: 13 }}>*Unit</InputLabel>
                                    <Select
                                        id={(this.state.EMSComplaint.CategoryId === 0 || this.state.EMSComplaint.CategoryId === 53) || (this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 0) ? '' : 'requiredFieldLabel'}
                                        name="Unit"
                                        label="Unit"
                                        value={this.state.EMSComplaint.Unit}
                                        onChange={this.handleChange}>
                                        <MenuItem value={0} ><em>Select One</em></MenuItem>
                                        {this.state.UnitList.map((item) => (
                                            <MenuItem value={item.Unit}><em>{item.Unit}</em></MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                {this.state.SerialNumberRequire.indexOf(this.state.EMSComplaint.CategoryId) > -1 ? <TextField name="SerialNumber" id={this.state.EMSComplaint.SerialNumber && this.state.EMSComplaint.SerialNumber.length > 1 ? '' : 'requiredFieldLabel'} className="errorMessage" placeholder="Serial Number" value={this.state.EMSComplaint.SerialNumber} onChange={this.handleChange} helperText="Serial Number" inputProps={{ maxLength: 11 }} /> : <TextField name="SerialNumber" className="errorMessage" placeholder="Serial Number" value={this.state.EMSComplaint.SerialNumber} onChange={this.handleChange} helperText="Serial Number" inputProps={{ maxLength: 11 }} />}
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                {this.state.VehicleNumberRequire.indexOf(this.state.EMSComplaint.CategoryId) > -1 ? <TextField name="VehicleNumber" id={this.state.EMSComplaint.VehicleNumber && this.state.EMSComplaint.VehicleNumber.length > 1 ? '' : 'requiredFieldLabel'} className="errorMessage" placeholder="Vehicle Number" value={this.state.EMSComplaint.VehicleNumber} onChange={this.handleChange} helperText="Vehicle Number" inputProps={{ maxLength: 10 }} /> : <TextField name="VehicleNumber" className="errorMessage" placeholder="Vehicle Number" value={this.state.EMSComplaint.VehicleNumber} onChange={this.handleChange} helperText="Vehicle Number" inputProps={{ maxLength: 11 }} />}
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                {this.state.AssetNumberRequire.indexOf(this.state.EMSComplaint.CategoryId) > -1 ? <TextField name="AssetNumber" id={this.state.EMSComplaint.AssetNumber && this.state.EMSComplaint.AssetNumber.length > 1 ? '' : 'requiredFieldLabel'} className="errorMessage" placeholder="County Asset Number" value={this.state.EMSComplaint.AssetNumber} onChange={this.handleChange} helperText="County Asset Number" inputProps={{ maxLength: 10 }} /> : <TextField name="AssetNumber" className="errorMessage" placeholder="County Asset Number" value={this.state.EMSComplaint.AssetNumber} onChange={this.handleChange} helperText="County Asset Number" inputProps={{ maxLength: 10 }} />}
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                {this.state.InicdentNumberRequire.indexOf(this.state.EMSComplaint.SubCategoryId) > -1 ? <TextField name="IncidentNumber" id={this.state.EMSComplaint.IncidentNumber && this.state.EMSComplaint.IncidentNumber.length > 1 ? '' : 'requiredFieldLabel'} className="errorMessage" placeholder="Incident Number" value={this.state.EMSComplaint.IncidentNumber} onChange={this.handleChange} helperText="Incident Number" inputProps={{ maxLength: 11 }} /> : <TextField name="IncidentNumber" className="errorMessage" placeholder="Incident Number" value={this.state.EMSComplaint.IncidentNumber} onChange={this.handleChange} helperText="Incident Number" inputProps={{ maxLength: 11 }} />}
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    name="ComplaintDetail"
                                    id="filled-multiline-static"
                                    label="Complaint Detail"
                                    multiline
                                    rows={5}
                                    className="errorMessage"
                                    placeholder="Complaint Detail"
                                    style={{ width: '100%' }}
                                    value={this.state.EMSComplaint.ComplaintDetail}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            {this.props.PageName && this.props.PageName === 'Admin' ?
                                <Grid item xs={12}>
                                    <TextField
                                        name="CommentsByAdmin"
                                        id="filled-multiline-static"
                                        label="Comment Box"
                                        multiline
                                        rows={5}
                                        className="errorMessage"
                                        placeholder="Write a Comment"
                                        style={{ width: '100%' }}
                                        value={this.state.EMSComplaint.CommentsByAdmin}
                                        onChange={this.handleChange}
                                    />
                                </Grid> : <Grid item xs={12}></Grid>}
                            <Grid item xs={12} className="textRight popupCloseBtn">
                                <Button variant='contained' color="primary" onClick={() => { this.handleSubmit(); }}>Update Complaint</Button>
                                <Button variant='contained' color="default" onClick={() => { this.handleClear(); this.handleClose(); }}>Close</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <EMSSubmitTab ref={this.eMSSubmitTab} ComplaintId={this.props.EMSComplaint.ComplaintId} PageName={this.props.PageName} />
                            </Grid>

                        </Grid>
                    </Paper>
                </Modal>
                <EMSDetail ref={this.eMSDetail} PageName={this.props.PageName} EMSVComplaint={this.props.EMSComplaint} />
            </Grid>
        )
    }
}