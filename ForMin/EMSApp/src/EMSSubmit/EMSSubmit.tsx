import * as React from 'react';
import { Button, Paper, Grid, TextField, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, Modal, FormHelperText, Table, TableRow, TableHead, TableBody, TableCell } from '@material-ui/core';
import { baseApiUrl, getRequestOptions, getUserId, basePersonApiUrl, serializeData, getErrorMessage, getSuccessMessage } from '../utilities/emsUtilities';
import { SelectAnEmployee } from './SelectAnEmployee';
import { EMSSubmitInsertPopup } from './EMSSubmitInsertPopup';
import { EMSSubmitUpdatePopup } from './EMSSubmitUpdatePopup';

export class EMSSubmit extends React.Component {



    state = {
        EMSVComplaint: [{
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
        }], SearchEMS: {
            CategoryId: 0,
            SubCategoryId: 0,
            Location: '',
            Unit: '',
            ReportStatus: '',
            ReviewedStartDate: new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 120).toISOString(),
            ReviewedEndDate: new Date((new Date()).valueOf() + 1000 * 60 * 60 * 24).toISOString(),
            SortBy: 'Submitted Date',
            SortOrder: 'Descending'
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
        }], PersonalInformation: {
            FullName: '',
            OfficePhone: '',
            Email: '',
            WorkGroupAbbrv: '',
            WorkGroupName: '',
            Shift: ''
        }
    }

    selectAnEmployee = React.createRef<SelectAnEmployee>();
    eMSSubmitInsertPopup = React.createRef<EMSSubmitInsertPopup>();
    eMSSubmitUpdatePopup = React.createRef<EMSSubmitUpdatePopup>();

    userId = '';

    constructor(props: any) {
        super(props);
        this.userId = getUserId();
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

    // set personal information
    setPersonalInformation = (person: any) => {
        if (person !== null) {
            const FullName = person.FullName;
            const OfficePhone = person.OfficePhone;
            let Email = person.UserId + '@fairfaxcounty.gov';
            const WorkGroupAbbrv = person.WorkGroupAbbrv;
            const WorkGroupName = person.WorkGroupName;
            const Shift = person.PosShift;
            if (person.Email && person.Email !== null)
                Email = person.Email;

            const currentState = {
                ...this.state.PersonalInformation, "FullName": FullName, "OfficePhone": OfficePhone, "Email": Email, "WorkGroupAbbrv": WorkGroupAbbrv, "WorkGroupName": WorkGroupName, "Shift": Shift
            };

            this.setState({ PersonalInformation: currentState });
            // set user location
            const currentSearchState = { ...this.state.SearchEMS, "Location": WorkGroupAbbrv };
            this.setState({ SearchEMS: currentSearchState });

            setTimeout(() => {
                this.handleSubmit();
            }, 200);
        }
    }

    //Search
    handleSubmit = () => {
        let ComplaintUrl = baseApiUrl() + 'EMSComplaint/Search';

        let requestSQOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serializeData(this.state.SearchEMS)
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
                alert('There is no data.');
            else if (responseData === 409)
                alert(getErrorMessage('There is a conflict.'));
            else if (responseData === 500)
                alert(getErrorMessage('There is an internal server error.'));
            else {
                this.setState({ EMSVComplaint: responseData });
            }
        }).catch((errors) => {
            // console.log(errors);
            alert(getErrorMessage('There is an error during searching for a complaint'));
        });

    }

    //set state
    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const currentSQState = { ...this.state.SearchEMS, [name]: value };
        this.setState({ SearchEMS: currentSQState });

        if (name === 'CategoryId' && (value !== null && value > 0)) {
            this.getEMSSubCategory(value);
        } else if (name === 'SortBy' || name === 'SortOrder')
            setTimeout(() => { this.handleSubmit(); }, 200);
    }

    handleClear = () => {
        this.setState({
            EMSVComplaint: [{
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
            }], SearchEMS: {
                CategoryId: 0,
                SubCategoryId: 0,
                Location: '',
                Unit: '',
                ReportStatus: '',
                ReviewedStartDate: new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 120).toISOString(),
                ReviewedEndDate: new Date((new Date()).valueOf() + 1000 * 60 * 60 * 24).toISOString(),
                SortBy: 'Submitted Date',
                SortOrder: 'Descending'
            }, PersonalInformation: {
                FullName: '',
                OfficePhone: '',
                Email: '',
                WorkGroupAbbrv: '',
                WorkGroupName: '',
                Shift: ''
            }
        })
    }

    //Manage Page
    render() {
        return (
            <Paper>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <SelectAnEmployee ref={this.selectAnEmployee} setPersonalInformation={this.setPersonalInformation} />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>*Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="CategoryId"
                                label="Category"
                                value={this.state.SearchEMS.CategoryId}
                                onChange={this.handleChange}>
                                <MenuItem value=""><em>Select One</em></MenuItem>
                                {this.state.EMSCategoryList.map((item) => (
                                    <MenuItem value={item.CategoryId}><em>{item.CategoryDesc}</em></MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>*Subcategory</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="SubCategoryId"
                                label="Subcategory"
                                value={this.state.SearchEMS.SubCategoryId}
                                onChange={this.handleChange}>
                                <MenuItem value=""><em>Select One</em></MenuItem>
                                {this.state.EMSSubCategoryList.map((item) => (
                                    <MenuItem value={item.CategoryId}><em>{item.CategoryDesc}</em></MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            id="date"
                            label="* Start Date"
                            type="date"
                            name="ReviewedStartDate"
                            value={this.state.SearchEMS.ReviewedStartDate && this.state.SearchEMS.ReviewedStartDate.length > 9 ? this.state.SearchEMS.ReviewedStartDate.substring(0, 10) : this.state.SearchEMS.ReviewedStartDate}
                            InputLabelProps={{ shrink: true }}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            id="date"
                            label="* End Date"
                            type="date"
                            name="ReviewedEndDate"
                            value={this.state.SearchEMS.ReviewedEndDate && this.state.SearchEMS.ReviewedEndDate.length > 9 ? this.state.SearchEMS.ReviewedEndDate.substring(0, 10) : this.state.SearchEMS.ReviewedEndDate}
                            InputLabelProps={{ shrink: true }}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>*Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="ReportStatus"
                                label="Status"
                                value={this.state.SearchEMS.ReportStatus}
                                onChange={this.handleChange}>
                                <MenuItem value=""><em>All</em></MenuItem>
                                {this.state.EMSStatusList.map((item) => (
                                    <MenuItem value={item.CategoryDesc}><em>{item.CategoryDesc}</em></MenuItem>
                                ))}
                                {/*<MenuItem value="Submitted">Submitted</MenuItem>*/}
                                {/*<MenuItem value="Under Review">Under Review</MenuItem>*/}
                                {/*<MenuItem value="Reviewed">Reviewed</MenuItem>*/}
                                {/*<MenuItem value="Denied">Denied</MenuItem>*/}
                                {/*<MenuItem value="Completed">Completed</MenuItem>*/}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>*Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="Location"
                                label="Location"
                                defaultValue={this.state.PersonalInformation.WorkGroupAbbrv}
                                value={this.state.SearchEMS.Location}
                                onChange={this.handleChange}>
                                <MenuItem value=""><em>Select One</em></MenuItem>
                                {this.state.WorkGroupList.map((item) => (
                                    <MenuItem value={item.WorkGroupAbbrv}><em>{item.WorkGroupName}</em></MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>*Unit</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="Unit"
                                label="Unit"
                                value={this.state.SearchEMS.Unit}
                                onChange={this.handleChange}>
                                <MenuItem value=""><em>Select One</em></MenuItem>
                                {this.state.UnitList.map((item) => (
                                    <MenuItem value={item.Unit}><em>{item.Unit}</em></MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>Sort By</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="SortBy"
                                label="Sort By"
                                value={this.state.SearchEMS.SortBy}
                                onChange={this.handleChange}>
                                <MenuItem value="Category">Category</MenuItem>
                                <MenuItem value="Location">Location</MenuItem>
                                <MenuItem value="Status">Status</MenuItem>
                                <MenuItem value="SubCategory">SubCategory</MenuItem>
                                <MenuItem value="Submitted Date">Submitted Date</MenuItem>
                                <MenuItem value="Submitter">Submitter</MenuItem>
                                <MenuItem value="Unit">Unit</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>Sort Order</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="SortOrder"
                                label="Sort Order"
                                value={this.state.SearchEMS.SortOrder}
                                onChange={this.handleChange}>
                                <MenuItem value="Ascending">Ascending</MenuItem>
                                <MenuItem value="Descending">Descending</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} className="textRight">
                        <Button variant="contained" className="btnImgSearch" onClick={() => { this.handleSubmit() }} style={{ marginRight: '30px', marginTop: '20px' }} data-toggle="tooltip" title="Search EMS Submissions"><img src={window.location.origin + '/images/search_icon.png'} className="btnImage" /></Button>
                    </Grid>
                </Grid>
                {/* Existing Complaints */}
                <Table style={{ paddingTop: 10, paddingLeft: 50, marginTop: 10 }}>
                    <TableHead>
                        <TableRow className='SubTableHeader'>
                            <TableCell><h6><b>Id ({this.state.EMSVComplaint && this.state.EMSVComplaint.length > 0 && this.state.EMSVComplaint[0].ComplaintId && this.state.EMSVComplaint[0].ComplaintId > 0 ? this.state.EMSVComplaint.length : 0})</b></h6></TableCell>
                            <TableCell colSpan={2}><h6><b>Submitter</b></h6></TableCell>
                            <TableCell colSpan={2}><h6><b>Category/SubCategory</b></h6></TableCell>
                            <TableCell><h6><b>Submit&nbsp;Date</b></h6></TableCell>
                            <TableCell colSpan={2}><h6><b>Location</b></h6></TableCell>
                            <TableCell><h6><b>Unit</b></h6></TableCell>
                            <TableCell><h6><b>Status</b></h6></TableCell>
                            <TableCell className="textRight">
                                <EMSSubmitInsertPopup ref={this.eMSSubmitInsertPopup} getEMSComplaint={this.handleSubmit} personalInformation={this.state.PersonalInformation} getEMSCategory={this.getEMSCategory} PageName="Submit" />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {this.state.EMSVComplaint && this.state.EMSVComplaint.length > 0 && this.state.EMSVComplaint[0].ComplaintId && this.state.EMSVComplaint[0].ComplaintId > 0 ?
                        <TableBody>
                            {this.state.EMSVComplaint.map(item => (
                                <TableRow>
                                    <TableCell className="textCenter"><h6>{item.ComplaintId}</h6></TableCell>
                                    <TableCell colSpan={2} className="textCenter"><h6>{item.SubmitterName}</h6></TableCell>
                                    <TableCell colSpan={2} className="textCenter"><h6>{item.CategoryDesc}/{item.SubCategoryDesc}</h6></TableCell>
                                    <TableCell className="textCenter"><h6>{item.RequestDate.substring(0, 10)}</h6></TableCell>
                                    <TableCell colSpan={2} className="textCenter"><h6>{item.WorkGroupName}</h6></TableCell>
                                    <TableCell className="textCenter"><h6>{item.UnitName}</h6></TableCell>
                                    <TableCell className="textCenter"><h6>{item.ComplaintStatus}</h6></TableCell>
                                    <TableCell className="textRight">
                                        <EMSSubmitUpdatePopup ref={this.eMSSubmitUpdatePopup} getEMSComplaint={this.handleSubmit} getEMSCategory={this.getEMSCategory} PageName="Submit" EMSComplaint={item} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody> : <TableBody>
                            <TableRow>
                                <TableCell colSpan={7} className="textCenter"><h6>No Complaints</h6></TableCell>
                            </TableRow>
                        </TableBody>}
                </Table>
            </Paper>
        );
    }

    componentDidMount() {
        this.getWorkGroup();
        this.getUnit();
        this.getEMSCategory();
        this.getEMSStatus();
        this.selectAnEmployee.current.getEmpOrVol();
    }

}