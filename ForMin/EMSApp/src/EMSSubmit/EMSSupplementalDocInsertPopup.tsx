import * as React from 'react';
import { Grid, Card, Paper, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { serializeData, baseApiUrl, getSuccessMessage, getErrorMessage, getRequestOptions, requestOptions, getUserId } from '../utilities/emsUtilities';

export interface EMSSupplementalDocInsertProps {
    ref: any;
    ComplaintId: number;
    getEMSSupplementalDOC: Function;
}

export class EMSSupplementalDocInsertPopup extends React.Component<EMSSupplementalDocInsertProps, {}> {

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
        }, file: [{}], Description: '', show: false
    }

    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // set state
    handleChange = (event: any) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'file')
            this.setState({ file: target.files });
        else if (name === 'Description')
            this.setState({ Description: value });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.fileUpload(this.state.file);
        this.props.getEMSSupplementalDOC();
    }

    fileUpload = (file: any) => {
        /*if (this.props.ComplaintId !== null && this.props.ComplaintId > 0) {*/
            const url = baseApiUrl() + 'SupplementalDoc/Insert';
            const userId = getUserId();
            let formData = new FormData();

            if (file) {
                for (var i = 0; i < file.length; i++) {
                    formData.append('file[$(i)]', file[i]);
                }
                formData.append('ComplaintId', this.props.ComplaintId.toString());
                formData.append('userId', userId);
                formData.append('Description', this.state.Description);

                console.log(formData);

                let requestOptions = {
                    withCredentials: true,
                    method: 'POST',
                    body: formData
                }

                fetch(url, requestOptions).then(res => {
                    //if (res.status === 200)
                    //    return res.json();
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
                        alert(getSuccessMessage('A Supplemental Document'));
                        this.props.getEMSSupplementalDOC();
                        this.handleClear();
                    }
                }).catch((errors) => {
                    alert(getErrorMessage('There is an error during inserting a Supplemental Document'));
                });
            } else
                alert('Please select a file')
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
    };


    // display UI on the Person Search Popup Window
    render() {
        if (this.props.ComplaintId && this.props.ComplaintId > 0) {

            return (
                <form onSubmit={this.handleSubmit} style={{ marginBottom: "10px", marginRight: "10px" }}>
                    <Card className="supervisorInformationDiv" style={{ padding: "10px 10px" }}>
                        <Grid container>
                            <Grid item xs={8} container>
                                    <Grid item xs={12}>
                                        <input type="file" multiple name="file" id="fileInput" onChange={this.handleChange} accept=".jpg, .png, .pdf, .doc, .docx, .xls, .xlsx, .m4a" style={{ marginLeft: "10px", width: "100%" }} />

                                    </Grid> 
                            </Grid>
                            {(this.props.ComplaintId !== null && this.props.ComplaintId > 0) ?
                                <Grid item xs={4}><Button variant='contained' color="primary" type="button" className="btnImgInsert" onClick={this.handleSubmit}>Upload</Button></Grid> : null}

                        </Grid>
                    </Card>
                </form>
            );
        } else {
            return (
                null
            );
        }
    }
}