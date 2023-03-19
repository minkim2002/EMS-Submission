import * as React from 'react';
import { Table, TableBody, TableRow, TableCell, TableHead, TableContainer, Grid, Button } from '@material-ui/core';
import { EMSSupplementalDocInsertPopup } from './EMSSupplementalDocInsertPopup';
import { EMSSupplementalDocUpdatePopup } from './EMSSupplementalDocUpdatePopup';
import { baseApiUrl, getRequestOptions, getUserId } from '../utilities/emsUtilities';

export interface EMSSupplementalDocProps {
    ref: any;
    ComplaintId: number;
}

export class EMSSupplementalDoc extends React.Component<EMSSupplementalDocProps, {}> {

    state = {
        EMSSupplementalDoc: [{
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
            CreateBy: '',
            UpdatedDate: '',
            UpdatedBy: ''
        }]
    }

    url = '';
    userId = '';

    eMSSupplementalDocInsertPopup = React.createRef<EMSSupplementalDocInsertPopup>();
    eMSSupplementalDocUpdatePopup = React.createRef<EMSSupplementalDocUpdatePopup>();

    constructor(props: any) {
        super(props);
        this.userId = getUserId();
    }

    // get ems supplemental document
    getEMSSupplementalDOC = () => {
        const url = baseApiUrl() + 'EMSSupplementalDocByComplaintId?complaintId=' + this.props.ComplaintId;

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            this.setState({ EMSSupplementalDoc: responseData });
            console.log(this.state.EMSSupplementalDoc);
        }).catch((errors) => {
            //console.log(errors);
        });
    }

    // download file from database
    saveByteArray = (doc: any, docType: string, docName: string) => {
        //var binaryString = window.atob(doc);
        //var binaryLen = binaryString.length;
        //var bytes = new Uint8Array(binaryLen);
        //for (var i = 0; i < binaryLen; i++) {
        //    var ascii = binaryString.charCodeAt(i);
        //    bytes[i] = ascii;
        //}
        //var blob = new Blob([bytes], { type: "application/" + docType });
        var link = document.createElement('a');
        link.href = this.getObjectUrl(doc, docType, docName);
        var fileName = docName;
        link.download = fileName;
        link.click();
    }

    // get object url
    getObjectUrl = (doc: any, docType: string, docName: string) => {
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
        return link.href;
    }

    render() {
        return (
            <Table>
                <TableHead>
                    {(this.props.ComplaintId && this.props.ComplaintId > 0) ?
                        <TableRow>
                            <th colSpan={3} className="SubTableHeader"><h5>Supplemental Document</h5></th>
                            <th colSpan={2} className="textRight SubTableHeader">
                                <EMSSupplementalDocInsertPopup ref={this.eMSSupplementalDocInsertPopup} ComplaintId={this.props.ComplaintId} getEMSSupplementalDOC={this.getEMSSupplementalDOC} />
                            </th>
                        </TableRow> : <TableRow>
                            <th colSpan={5} className="SubTableHeader"><h5>Supplemental Document</h5></th>
                        </TableRow>}
                    <TableRow>
                        <th style={{ "textAlign": "center" }}>Type</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date</th>
                    </TableRow>
                </TableHead>
                {this.state.EMSSupplementalDoc && this.state.EMSSupplementalDoc.length > 0 && this.state.EMSSupplementalDoc[0].DocId && this.state.EMSSupplementalDoc[0].DocId > 0 ?
                    <TableBody>
                        {
                            this.state.EMSSupplementalDoc.map((item, index) => (
                                <TableRow key={index}>
                                    <td className="textLeft"><Button variant="contained" onClick={() => { this.saveByteArray(item.Doc, item.DocType, item.DocName); }} data-toggle="tooltip" title={"Download " + item.DocName} className="btnFileImage marginLeft5">{item.DocType === 'Image' ? <img src={this.getObjectUrl(item.Doc, item.DocType, item.DocName)} className="thumnail" alt={item.DocType} /> : <img src={window.location.origin + '/images/' + item.DocType + '.png'} className="fileImage" alt={item.DocType} />}</Button></td>
                                    <td className="textLeft">{item.DocName}</td>
                                    <td className="textLeft">{item.DocDesc}{item.DocDescOther && item.DocDescOther.length > 0 ? ' - ' + item.DocDescOther : ''}</td>
                                    <td className="textLeft">{item.CreatedDate ? new Date(item.CreatedDate).toLocaleString() : ''}</td>
                                    <th className="textRight">
                                        {(item.DocId === null || item.DocId === 0) ? null : <EMSSupplementalDocUpdatePopup ref={this.eMSSupplementalDocUpdatePopup} ComplaintId={this.props.ComplaintId} SupplementalDoc={item} getEMSSupplementalDOC={this.getEMSSupplementalDOC}/>}
                                    </th>
                                </TableRow>
                            ))
                        }
                    </TableBody> : <TableBody>
                        <TableRow>
                            <TableCell colSpan={4} className="textCenter"><h6>No Document</h6></TableCell>
                        </TableRow>
                    </TableBody>}
            </Table>
        );
    }
    componentDidMount() {
        this.getEMSSupplementalDOC();       
    }
}