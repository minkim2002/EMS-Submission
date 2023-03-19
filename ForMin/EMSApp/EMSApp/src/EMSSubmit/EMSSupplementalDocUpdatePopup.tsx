import * as React from 'react';
import { serializeData, baseApiUrl, basePersonApiUrl, requestOptions, getRequestOptions, getSuccessMessage, getErrorMessage, getUserId, getUserName, baseEmailApiUrl, checkEmail, onlyNumbers } from '../utilities/emsUtilities';
import { Button, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Modal, Paper, FormHelperText } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

export interface EMSSupplementalDocUpdateProps {
    ref: any;
    ComplaintId: number;
    SupplementalDoc: any;
    getEMSSupplementalDOC: Function;
}

export class EMSSupplementalDocUpdatePopup extends React.Component<EMSSupplementalDocUpdateProps, {}> {

    state = {
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
    }

    url = '';
    userId = '';

    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.userId = getUserId();
    }

    // set state
    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


        if (name === 'file')
            this.setState({ file: target.files[0] });
        else if (name === 'Description')
            this.setState({ Description: value });
    }

    // insert or update supervisor record
    handleSubmit = (event: any) => {
        event.preventDefault();
        this.fileUpload(this.state.file);
    }

    fileUpload = (file: any) => {
        if (this.props.ComplaintId !== null && this.props.ComplaintId > 0) {
            const url = baseApiUrl() + 'SupplementalDoc/Update';
            const userId = getUserId();
            let formData = new FormData();
            if (file) {
                formData.append('id', this.props.SupplementalDoc.DocId);
                formData.append('file', file);
                formData.append('ComplaintId', this.props.ComplaintId.toString());
                formData.append('userId', userId);
                formData.append('Description', this.state.Description);
                

                let requestOptions = {
                    withCredentials: true,
                    method: 'POST',
                    body: formData
                }

                fetch(url, requestOptions).then(res => {
                    if (res.status === 200)
                        return res.json();
                    return res.status

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
                        alert(getSuccessMessage('A Supplemental Document '));
                        this.state.EMSSupplementalDoc.DocName = responseData.DocName;
                      
                    }
                }).catch((errors) => {
                    alert(getErrorMessage('There is an error during Updating a Supplemental Document'));
                });
            } else
                alert('Please select a file')
        } else
            alert("This person doesn't have a complaint");
    }

    handleDelete = (event: any) => {
        const delDto = {
            Id: this.props.SupplementalDoc.DocId,
            ForeignKey: this.props.ComplaintId
        };

        const deleteRequestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serializeData(delDto)
        };

        fetch(baseApiUrl() + 'SupplementalDoc/Delete', deleteRequestOptions).then(res => {
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
                this.setState({ CitizenInjury: responseData });
                alert('This Supplemental Document has been removed');
                this.props.getEMSSupplementalDOC();
            }
        }).catch((errors) => {
            // console.log(errors);
            alert(getErrorMessage('There is an error during deleting a Supplemental Document'));
        });
    }

    handleClear = () => {
        this.setState({

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

    handleShow = () => {
        this.setState({ show: true });
        this.setSupplementalDoc();
    }

    handleClose = () => {
        this.setState({ show: false });
        this.props.getEMSSupplementalDOC();
    }


    // set a FRD member
    setSupplementalDoc = () => {
        this.state.EMSSupplementalDoc.DocId = this.props.SupplementalDoc.DOcId;
        this.state.EMSSupplementalDoc.ComplaintId = this.props.SupplementalDoc.ComplaintId;
        this.state.EMSSupplementalDoc.DocType = this.props.SupplementalDoc.DocType;
        this.state.EMSSupplementalDoc.DocName = this.props.SupplementalDoc.DocName;
        this.state.EMSSupplementalDoc.DocExt = this.props.SupplementalDoc.DocExt;
        this.state.EMSSupplementalDoc.DocDesc = this.props.SupplementalDoc.DocDesc;
        this.state.EMSSupplementalDoc.DocDescOther = this.props.SupplementalDoc.DocDescOther;
        this.state.EMSSupplementalDoc.Doc = this.props.SupplementalDoc.Doc;
        this.state.EMSSupplementalDoc.Comments = this.props.SupplementalDoc.Comments;
        this.state.EMSSupplementalDoc.CreatedBy = this.props.SupplementalDoc.CreatedBy;
        this.state.EMSSupplementalDoc.CreatedDate = this.props.SupplementalDoc.CreatedDate;
        this.state.EMSSupplementalDoc.UpdatedBy = this.props.SupplementalDoc.UpdatedBy;
        this.state.EMSSupplementalDoc.UpdatedDate = this.props.SupplementalDoc.UpdatedDate;

        this.state.Description = this.props.SupplementalDoc.DocDesc;
        /*this.state.DescriptionOther = this.props.SupplementalDoc.DocDescOther;*/
    }

    // download file from database
    saveByteArray = (doc: any, docType: string, docName: string) => {
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
    }


    render() {
        return (
            <Grid item xs={12} style={{ textAlign: "left", paddingBottom: "5px" }}>
                <Grid container className="textRight alignRight marginTop20">
                    <Button variant="contained" onClick={() => { this.saveByteArray(this.props.SupplementalDoc.Doc, this.props.SupplementalDoc.DocType, this.props.SupplementalDoc.DocName); }} data-toggle="tooltip" title={"Download " + this.props.SupplementalDoc.DocName} className="btnImgDownload marginLeft5"><img src={window.location.origin + '/images/download_02_white.png'} className="btnImage" /></Button>
                    <Button variant="contained" color="primary" onClick={() => { this.handleShow(); }} data-toggle="tooltip" title="Update Supplemental Documents" className="marginLeft5"><img src={window.location.origin + '/images/edit_white.png'} className="btnImage" /></Button>
                    <Button variant='contained' color="secondary" onClick={() => {
                        window.confirm('Are you sure you wish to delete this Supplemental Document?') && this.handleDelete.call(this);
                    }} data-toggle="tooltip" title="Delete Supplemental Document" className="marginLeft5"><img src={window.location.origin + '/images/delete_white.png'} className="btnImage" /></Button>
                </Grid>
                <Modal className="insertModal" open={this.state.show} onClose={() => { this.handleClear.call(this); this.handleClose(); }} disableBackdropClick={true}>
                    <Paper className="ModalDiv">
                        <Grid container spacing={3}>
                            <Paper className="marginTop10LightBlue">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} className="contentHeader">
                                        <h5>Update Supplemental Document</h5>
                                    </Grid>

                                    {/* Supplemental Document */}
                                    <Grid container item xs={12}>
                                        {/*<Grid item xs={4}>*/}
                                        {/*    */}{/*<img style={{ width: '85%', marginTop: '5px' }} src={(this.state.SupplementalDoc.Doc !== null) ? this.state.SupplementalDoc.Doc : '/images/blue-person-icon.png'} alt={this.state.staff.FullName} />*/}
                                        {/*</Grid>*/}
                                        <Grid item xs={12}><strong>Document Name: </strong>{this.state.EMSSupplementalDoc.DocName}</Grid>
                                        <Grid item xs={12} container>
                                            {(this.props.ComplaintId !== null && this.props.ComplaintId > 0) ?
                                                <Grid item xs={12}>
                                                    <input type="file" name="file" id="fileInput" onChange={this.handleChange} accept=".jpg, .png, .pdf, .doc, .docx, .xls, .xlsx, .m4a" style={{ marginLeft: "10px", width: "100%" }} />
                                                    {/*<h5><span style={{ color: 'darkred' }}>**</span> Recommended Image Size: <span style={{ color: 'darkblue' }}>600px x 800px</span>, File Format: <span style={{ color: 'darkblue' }}>png</span></h5>*/}
                                                </Grid> : null}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className="textRight popupCloseBtn">
                            <Button variant='contained' color="primary" onClick={this.handleSubmit}>Save</Button>
                            <Button variant='contained' color="default" onClick={this.handleClose}>Close</Button>
                        </Grid>
                    </Paper>
                </Modal>
            </Grid>
        );
    }
}