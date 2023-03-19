import * as React from 'react';
import { requestOptions, getRequestOptions, baseApiUrl, serializeData, getErrorMessage, getUserId, basePersonApiUrl } from '../utilities/emsUtilities';
import { Modal, Table, TableHead, TableRow, TableCell, TableBody, Paper, Grid, TableContainer } from '@material-ui/core'

export interface SelectAnEmployeeProps {
    ref: any;
    setPersonalInformation: Function;
}

export class SelectAnEmployee extends React.Component<SelectAnEmployeeProps, {}> {

    state = {
        Employee: [{
            Id: 0,
            Ein: '',
            FocusEin: '',
            LastName: '',
            FirstName: '',
            MiddleName: '',
            FullName: '',
            Suffix: '',
            Sex: '',
            DOB: '',
            Race: '',
            FrdHireDate: '',
            AssignedDate: '',
            Code: '',
            CountyAbbr: '',
            DeptAbbr: '',
            ClassTitle: '',
            FocusTitle: '',
            PayActionDesc: '',
            PayScaleGroup: '',
            PayScaleLevel: '',
            PositionNo: '',
            PositionName: '',
            WorkGroupAbbrv: '',
            WorkGroupDesc: '',
            WorkGroupName: '',
            DisasterTeam: '',
            PosShift: '',
            PosFocusTitle: '',
            PosCountyAbbr: '',
            PosDeptAbbr: '',
            PosClassTitle: '',
            Commnets: '',
            Specialty: '',
            EmpTypeCode: '',
            Address1: '',
            Address2: '',
            City: '',
            state: '',
            ZipCode: '',
            UserId: '',
            Email: '',
            Battalion: '',
            OfficePhone: '',
            OfficeCell: ''
        }], show: false
    }

    getEmpOrVol = () => {
        let userId = getUserId();
        let url = basePersonApiUrl() + 'EmpAndVol?userid=' + getUserId();
        // for testing
        //if (userId === 'ykim01')
        //    url = basePersonApiUrl() + 'EmpAndVol?userId=AWOOLF';
        //url = baseApiUrl() + 'EmpAndVol?userId=RGUNDE';

        this.handleShow();

        fetch(url, getRequestOptions).then(res => {
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
                this.setState({ Employee: responseData });

                if (this.state.Employee && this.state.Employee.length > 0 && this.state.Employee[0].Id > 0) {
                    if (this.state.Employee.length === 1) {
                        this.props.setPersonalInformation.call(this, this.state.Employee[0]);
                        this.handleClose();
                    }
                }
            }
        });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    constructor(props: any) {
        super(props);
    }

    // display UI on the Person Search Popup Window
    render() {
        return (
            <this.searchPerson />
        );
    }

    searchPerson = () => {
        return (
            <Grid item xs={6}>
                <Modal className="personSearchModal" open={this.state.show} onClose={this.handleClose}>
                    <div className="ModalDiv">
                        <div>
                            <h3>Select An Employee or Volunteer</h3>
                        </div>
                        <Paper>
                            <TableContainer style={{ maxHeight: "400px" }}>
                                <Table stickyHeader style={this.state.Employee.length > 0 && this.state.Employee[0].FullName.length > 0 ? {} : { display: 'none' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Full Name ({this.state.Employee.length})</TableCell>
                                            <TableCell>EIN</TableCell>
                                            <TableCell>Shift</TableCell>
                                            <TableCell>Battalion</TableCell>
                                            <TableCell>Location</TableCell>
                                            <TableCell>Rank</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            this.state.Employee.map((item, index) => (
                                                <TableRow hover key={index}>
                                                    <TableCell>
                                                        <a href="#" onClick={() => { this.props.setPersonalInformation.call(this, item); this.handleClose(); }}>{item.FullName}</a>
                                                    </TableCell>
                                                    <TableCell>{item.Ein}</TableCell>
                                                    <TableCell>{item.PosShift}</TableCell>
                                                    <TableCell>{item.Battalion}</TableCell>
                                                    <TableCell>{item.WorkGroupDesc}</TableCell>
                                                    <TableCell>{item.ClassTitle}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <h3 className='alert alert-danger col-12' style={this.state.Employee.length > 0 ? { display: 'none' } : {}}>Not Found</h3>
                        </Paper>
                    </div>
                </Modal>
            </Grid>
        );
    }
}

