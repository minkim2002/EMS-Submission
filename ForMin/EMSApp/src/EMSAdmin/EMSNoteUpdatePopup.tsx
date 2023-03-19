import * as React from 'react';
import { serializeData, baseApiUrl, requestOptions, getRequestOptions, getSuccessMessage, getErrorMessage, getUserId, getUserName, baseEmailApiUrl } from '../utilities/emsUtilities';
import { Button, Modal, TableCell, Paper, Grid, TextField, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, InputBase, IconButton } from '@material-ui/core';

export interface NoteProps {
    ref: any;
    Note: any;
    ComplaintId: number;
    AuthorName: string;
    getEMSNote: Function;
}

export class EMSNoteUpdatePopup extends React.Component<NoteProps, {}> {

    state = {
        Note: {
            NoteId: 0, /* For the test */
            ComplaintId: 0,
            Note: '',
            CreatedBy: '',
            CreatedDate: '',
            UpdatedBy: '',
            UpdatedDate: '',
            AuthorName: ''
        }, CanSave: false, show: false
    };

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

        const currentSQState = { ...this.state.Note, [name]: value };
        this.setState({ Note: currentSQState });

        if ((this.props.ComplaintId && this.props.ComplaintId > 0) && (this.state.Note !== null && this.state.Note.Note !== 'undefined' && this.state.Note.Note.length > 10)) {
            this.setState({ CanSave: true });
        } else
            this.setState({ CanSave: false });
    }

    // update Person
    handleSubmit = () => {
        this.state.Note.ComplaintId = this.props.ComplaintId;
        let NoteUrl = baseApiUrl() + 'Note/Update';

        if (this.state.Note.ComplaintId && this.state.Note.ComplaintId > 0) {
            const today = new Date().toISOString();

            this.state.Note.CreatedBy = this.userId;
            this.state.Note.CreatedDate = today;
            this.state.Note.UpdatedBy = this.userId;
            this.state.Note.UpdatedDate = today;

            let requestSQOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: serializeData(this.state.Note)
            }

            fetch(NoteUrl, requestSQOptions).then(res => {
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
                    this.setState({
                        PoliceReport: responseData
                    });
                    alert(getSuccessMessage('A Note'));
                }
            }).catch((errors) => {
                // console.log(errors);
                alert(getErrorMessage('There is an error during inserting a Note'));
            })
        } else
            alert('There is no Complaint Id. Please retrive a Complaint record and then add a Note again');
    }

    // clear state
    handleClear = () => {
        this.setState({
            Note: {
                NoteId: 0, /* For the test */
                ComplaintId: 0,
                Note: '',
                CreatedBy: '',
                CreatedDate: '',
                UpdatedBy: '',
                UpdatedDate: '',
                AuthorType: '',
                AuthorName: ''
            }, CanSave: false, show: false

        });
    }

    handleDelete = (id: number) => {
        this.setNote();
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

        fetch(baseApiUrl() + 'Note/Delete', deleteRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            console.log(responseData);
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
                this.props.getEMSNote.call(this);
                alert("It has been removed successfully.");
            }
        }).catch((errors) => {
            console.log(errors);
            alert(getErrorMessage('There is an error during deleting a note'));
        });

        this.handleClear();
    }

    handleShow = () => {
        this.setState({ show: true });
        this.setNote();
    }

    handleClose = () => {
        this.setState({ show: false });
        this.props.getEMSNote();
    }

    setNote = () => {
        this.state.Note.NoteId = this.props.Note.NoteId;
        this.state.Note.ComplaintId = this.props.Note.ComplaintId;
        this.state.Note.Note = this.props.Note.Note;
        this.state.Note.CreatedBy = this.props.Note.CreatedBy;
        this.state.Note.CreatedDate = this.props.Note.CreatedDate;
        this.state.Note.UpdatedBy = this.props.Note.UpdatedBy;
        this.state.Note.UpdatedDate = this.props.Note.UpdatedDate;
        this.state.Note.AuthorName = this.props.AuthorName;
    }

    // display UI on the Note Insert Popup Window
    render() {
        return (
            <this.insertNote />
        );
    }

    insertNote = () => {
        return (
            <Grid item xs={12} style={{ textAlign: "left" }}>
                <Grid container className="textRight alignRight">
                    <Button variant="contained" color="primary" onClick={() => { this.handleShow(); }} data-toggle="tooltip" title="Update Note" className="marginLeft5"><img src={window.location.origin + '/images/edit_white.png'} className="btnImage" /></Button>
                    <Button variant='contained' color="secondary" onClick={() => { window.confirm('Are you sure you wish to delete this Note?') && this.handleDelete.call(this, this.props.Note.NoteId); }} data-toggle="tooltip" title="Delete Note" className="marginLeft5"><img src={window.location.origin + '/images/delete_white.png'} className="btnImage" /></Button>
                </Grid>

                <Modal className="insertModal" open={this.state.show} onClose={() => { this.handleClear(); this.handleClose(); }} disableBackdropClick={true}>
                    <Paper className="ModalDiv">
                        {/* Note */}
                        <Grid container spacing={3}>
                            <Paper className="marginTop10LightBlue">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} className="contentHeader">
                                        <h5>Add Note</h5>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField value={this.state.Note.AuthorName} name="AuthorName" onChange={this.handleChange} placeholder="Enter Author Name" helperText="* Author Name" inputProps={{ maxLength: 150 }} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <InputLabel id="demo-simple-select-outlined-label">Note</InputLabel>
                                        <TextareaAutosize value={this.state.Note.Note} name="Note" onChange={this.handleChange} placeholder="Enter Note" rows={10} rowsMax={15} />
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className="textRight popupCloseBtn">
                            <Button variant='contained' color="primary" onClick={() => { this.handleSubmit(); }} disabled={!this.state.CanSave}>Save Note</Button>
                            <Button variant='contained' color="default" onClick={() => { this.handleClear(); this.handleClose(); }}>Close</Button>
                        </Grid>
                    </Paper>
                </Modal >
            </Grid >
        );
    }
}