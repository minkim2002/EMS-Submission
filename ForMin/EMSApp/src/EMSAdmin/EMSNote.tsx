import * as React from 'react';
import { Table, TableBody, TableRow, TableCell, TableHead, TableContainer, Grid } from '@material-ui/core';
import { EMSNoteInsertPopup } from './EMSNoteInsertPopup';
import { EMSNoteUpdatePopup } from './EMSNoteUpdatePopup';
import { baseApiUrl, getRequestOptions, getUserName } from '../utilities/emsUtilities';

export interface NoteProps {
    ref: any;
    ComplaintId: number;
}

export class EMSNote extends React.Component<NoteProps, {}> {

    state = {
        Note: [{
            NoteId: 0, /* For the test */
            ComplaintId: 0,
            Note: '',
            CreatedBy: '',
            CreatedDate: '',
            UpdatedBy: '',
            UpdatedDate: '',
            AuthorName: getUserName(),
        }], CanSave: false, show: false
    };

    userId = '';

    eMSNoteInsertPopup = React.createRef<EMSNoteInsertPopup>();
    eMSNoteUpdatePopup = React.createRef<EMSNoteUpdatePopup>();

    constructor(props: any) {
        super(props);
    }

    // get ems note
    getEMSNote = () => {
        const url = baseApiUrl() + 'EMSNote?complaintId=' + this.props.ComplaintId;

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            this.setState({ Note: responseData });
        }).catch((errors) => {
            //console.log(errors);
        });
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow style={(this.props.ComplaintId && this.props.ComplaintId > 0) ? {} : { display: 'none' }}>
                        <th className="SubTableHeader">Author Name</th>
                        <th colSpan={3} className="SubTableHeader"><h5>Note</h5></th>
                        <th className= "SubTableHeader">Date & Time</th>
                        <th className="SubTableHeader textRight"><EMSNoteInsertPopup ref={this.eMSNoteInsertPopup} ComplaintId={this.props.ComplaintId} AuthorName={getUserName()} getEMSNote={this.getEMSNote} /> </th>
                    </TableRow>
                </TableHead>
                {this.state.Note && this.state.Note.length > 0 && this.state.Note[0].NoteId && this.state.Note[0].NoteId > 0 ?
                    <TableBody style={{ marginBottom: '10px !important' }}>
                        {this.state.Note.map((item) => (
                                <TableRow hover>
                                    <td className="textLeft">{item.AuthorName}</td>
                                    <td className="textLeft" colSpan={3}>{item.Note}</td>
                                    <td className="textRight">{item.CreatedDate ? new Date(item.CreatedDate).toLocaleDateString() : ''} {item.CreatedDate ? new Date(item.CreatedDate).toLocaleTimeString() : ''}</td>
                                    <td className="textRight"><EMSNoteUpdatePopup ref={this.eMSNoteUpdatePopup} Note={item} ComplaintId={this.props.ComplaintId} AuthorName={getUserName()} getEMSNote={this.getEMSNote}/></td>
                                </TableRow>
                        ))
                    } </TableBody> : <TableBody>
                        <TableRow>
                            <TableCell colSpan={6} className="textCenter"><h6>No Note</h6></TableCell>
                        </TableRow>
                    </TableBody>}
            </Table>
        )
    }
    componentDidMount() {
        this.getEMSNote();
    }
}