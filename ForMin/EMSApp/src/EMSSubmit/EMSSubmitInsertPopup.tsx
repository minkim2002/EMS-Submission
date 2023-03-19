import * as React from 'react';
import { baseApiUrl, baseEmailApiUrl, getErrorMessage, getRequestOptions, getSuccessMessage, getUserId, getUserName, serializeData, getHost } from '../utilities/emsUtilities';
import { Button, Paper, Grid, TextField, Modal, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@material-ui/core';
import { EMSSubmitTab } from './EMSSubmitTab'

export interface ComplaintProps {
    ref: any;
    getEMSComplaint: Function;
    getEMSCategory: Function;
    PageName: string;
    personalInformation: any;
}
export class EMSSubmitInsertPopup extends React.Component<ComplaintProps, {}>{

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
        }, EMSSupplementalDoc: {
            DocId: 0,
            ComplaintId: 0,
            DocType: '',
            DocName: '',
            DocDesc: '',
            DocDescOther: '',
            DocExt: '',
            Doc: '',
            ImageDoc: '',
            DocLocation: '',
            Comments: '',
            CreatedDate: '',
            CreateBy: '',
            UpdatedDate: '',
            UpdatedBy: ''
        }, EMSSupplementalDocs: [{
            DocId: 0,
            ComplaintId: 0,
            DocType: '',
            DocName: '',
            DocDesc: '',
            DocDescOther: '',
            DocExt: '',
            Doc: '',
            ImageDoc: '',
            DocLocation: '',
            Comments: '',
            CreatedDate: '',
            CreateBy: '',
            UpdatedDate: '',
            UpdatedBy: ''
        }], EMSCategoryList: [{
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
        }], UnitList: [{
            Id: 0,
            Unit: '',
            WorkGroupId: '',
            WorkGroupAbbrv: ''
        }], WorkGroupList: [{
            Id: 0,
            WorkGroupAbbrv: '',
            WorkGroupName: '',
            battalion: ''
        }], Email: {
            From: 'DoNotReply-EMS-Submission@fairfaxcounty.gov',
            To: [''],
            CC: [''],
            BCC: ['ykim01@fairfaxcounty.gov'],
            Subject: '',
            Body: ''
        }, show: false, canSave: false, showDetail: true, PageName: ''
    }

    eMSSubmitTab = React.createRef<EMSSubmitTab>();
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


    //Insert Complaint
    handleSubmit = () => {
        console.log(this.state.EMSComplaint);
        if (this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 1) {
            if ((this.state.EMSComplaint.SerialNumber && this.state.EMSComplaint.SerialNumber.length > 1) || (this.state.EMSComplaint.CategoryId === 2 || this.state.EMSComplaint.CategoryId === 35 || this.state.EMSComplaint.CategoryId === 39)) {
                if ((this.state.EMSComplaint.AssetNumber && this.state.EMSComplaint.AssetNumber.length > 1) || (this.state.EMSComplaint.CategoryId === 2 || this.state.EMSComplaint.CategoryId === 35 || this.state.EMSComplaint.CategoryId === 39)) {
                    let ComplaintUrl = baseApiUrl() + 'Complaint/Insert';

                    const today = new Date().toISOString();

                    this.state.EMSComplaint.ComplaintStatus = 'Submitted';
                    this.state.EMSComplaint.RequestDate = today;
                    this.state.EMSComplaint.CreatedBy = this.userId;
                    this.state.EMSComplaint.CreatedDate = today;
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
                            //alert(getSuccessMessage('a complaint'));
                            setTimeout(() => { this.getEMSVComplaint(this.state.EMSComplaint.ComplaintId); }, 200);

                            if (this.state.EMSComplaint.CategoryId && this.state.EMSComplaint.CategoryId > 0) {
                                this.handleShowSupplementalDoc();
                            }
                        }
                    }).catch((errors) => {
                        alert(getErrorMessage('There is an error during inserting a complaint'));
                    })
                } else
                    alert('Please input the County Asset Number');
            } else
                alert('Please input the Security Number');
        } else
            alert('Please select a Unit');
    }

    // send email
    sendEmail = () => {
        this.state.Email.To[0] = 'FIRE-EMSSubmission@fairfaxcounty.gov';

        if (this.userId && this.userId.length > 3)
            this.state.Email.CC[0] = this.userId + '@fairfaxcounty.gov';

        this.state.Email.Subject = 'New complaint has been submitted for ' + this.state.EMSVComplaint.ComplaintId + ' (' + new Date(this.state.EMSVComplaint.CreatedDate).toLocaleDateString() + ')';

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


        body1 = body1 + '</span><br /><br />if you are a <strong style="font-size:1.2em">Submitter</strong> click <a href="'+ getHost() + '/applications/emsapp' + '">here</a> to find your complaint.<span></li>';

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
            }, Email: {
                From: 'DoNotReply-EMS-Submission@fairfaxcounty.gov',
                To: [''],
                CC: [''],
                BCC: ['ykim01@fairfaxcounty.gov'],
                Subject: '',
                Body: ''
            }, canSave: false
        });
    }

    handleShowSupplementalDoc = () => {
        this.setState({ showSupplementalDoc: true });
    }

    handleShow = () => {
        this.setState({ show: true });
        this.getEMSCategory();
        this.getWorkGroup();
        this.getUnit();

        setTimeout(() => { this.setComplaint(); });
    }

    handleClose = () => {
        this.setState({ show: false });
        this.props.getEMSComplaint();
    }

    setComplaint = () => {
        const currentState = {
            ...this.state.EMSComplaint, "SubmitterName": this.props.personalInformation.FullName, "SubmitterPhoneNo": this.props.personalInformation.OfficePhone, "Location": this.props.personalInformation.WorkGroupAbbrv, "SubmitterShit": this.props.personalInformation.Shift
        };

        this.setState({ EMSComplaint: currentState });
    }


    render() {
        return (
            <Grid item xs={12} style={{ textAlign: "left" }}>
                <Grid container className="textRight alignRight">
                    <Button variant="contained" onClick={() => { this.handleShow(); }} className="btnImgInsert marginRight10" data-toggle="tooltip" title="New EMS Submission"><img src={window.location.origin + '/images/add_white.png'} className="btnImage" /></Button>
                </Grid>
                <Modal className="insertModal" open={this.state.show} onClose={() => { this.handleClear.call(this); this.handleClose(); }} disableBackdropClick={true}>
                    <Paper className="ModalDiv">
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <InputLabel style={{ fontSize: 13 }}>*Category</InputLabel>
                                    <Select
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
                            <Grid item xs={6} sm={6}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <InputLabel style={{ fontSize: 13 }}>*Subcategory</InputLabel>
                                    <Select
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
                            </Grid>
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
                                    <InputLabel id={this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 0 ? '' : 'requiredFieldLabel'} style={{ fontSize: 13 }}>*Unit</InputLabel>
                                    <Select
                                        id={this.state.EMSComplaint.Unit && this.state.EMSComplaint.Unit.length > 0 ? '' : 'requiredFieldLabel'}
                                        name="Unit"
                                        label="Unit"
                                        value={this.state.EMSComplaint.Unit}
                                        onChange={this.handleChange}>
                                        <MenuItem value=""><em>Select One</em></MenuItem>
                                        {this.state.UnitList.map((item) => (
                                            <MenuItem value={item.Unit}><em>{item.Unit}</em></MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                {this.state.EMSComplaint.CategoryId === 2 || this.state.EMSComplaint.CategoryId === 35 || this.state.EMSComplaint.CategoryId === 39 ? <TextField name="SerialNumber" className="errorMessage" placeholder="Serial Number" value={this.state.EMSComplaint.SerialNumber} onChange={this.handleChange} helperText="Serial Number" inputProps={{ maxLength: 11 }} /> : <TextField name="SerialNumber" id={this.state.EMSComplaint.SerialNumber.length > 1 ? '' : 'requiredFieldLabel'} className="errorMessage" placeholder="Serial Number" value={this.state.EMSComplaint.SerialNumber} onChange={this.handleChange} helperText="Serial Number" inputProps={{ maxLength: 11 }} />}
                            {/*    <span style={{ color: 'blue', fontSize: '11px', padding: '1.5px' }}></span>*/}
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField name="VehicleNumber" className="errorMessage" placeholder="Vehicle Number" value={this.state.EMSComplaint.VehicleNumber} onChange={this.handleChange} helperText="Vehicle Number" inputProps={{ maxLength: 11 }} />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                {this.state.EMSComplaint.CategoryId === 2 || this.state.EMSComplaint.CategoryId === 35 || this.state.EMSComplaint.CategoryId === 39 ? <TextField name="AssetNumber" className="errorMessage" placeholder="County Asset Number" value={this.state.EMSComplaint.AssetNumber} onChange={this.handleChange} helperText="County Asset Number" inputProps={{ maxLength: 10 }} /> : <TextField name="AssetNumber" id={this.state.EMSComplaint.AssetNumber.length > 1 ? '' : 'requiredFieldLabel'} className="errorMessage" placeholder="County Asset Number" value={this.state.EMSComplaint.AssetNumber} onChange={this.handleChange} helperText="County Asset Number" inputProps={{ maxLength: 10 }} />}
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField name="IncidentNumber" className="errorMessage" placeholder="Incident Number" value={this.state.EMSComplaint.IncidentNumber} onChange={this.handleChange} helperText="Incident Number" inputProps={{ maxLength: 11 }} />
                                <span style={{ color: 'blue', fontSize: '11px', padding: '1.5px' }}></span>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
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
                                </FormControl>
                            </Grid>
                            {(this.state.EMSComplaint.ComplaintId !== null && this.state.EMSComplaint.ComplaintId > 0) ?
                                <Grid item xs={12}>
                                    <EMSSubmitTab ref={this.eMSSubmitTab} ComplaintId={this.state.EMSComplaint.ComplaintId} PageName={this.props.PageName} />
                                </Grid> : null}
                            <Grid className="textRight" item xs={9}>
                                <h6 className="notification">After Submit, Please upload any supplemental documents or images</h6>
                            </Grid>
                            <Grid className="textRight" item xs={3}>
                                <Button variant='contained' color="primary" onClick={() => { this.handleSubmit(); }} disabled={!this.state.canSave}>Submit</Button>
                                <Button variant='contained' color="secondary" onClick={() => { this.handleClear(); }}>Clear</Button>
                                <Button variant='contained' color="default" onClick={() => { this.handleClear(); this.handleClose(); }}>Close</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Modal>
            </Grid>
        )
    }
}