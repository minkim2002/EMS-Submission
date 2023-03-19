import * as React from 'react';
import { Button, Paper, Grid, TextField, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, Modal, FormHelperText, Table, TableRow, TableHead, TableBody, TableCell } from '@material-ui/core';
import { baseApiUrl, getRequestOptions } from '../utilities/emsUtilities';
import { EMSCategoryInsertPopup } from './EMSCategoryInsertPopup';
import { EMSCategoryUpdatePopup } from './EMSCategoryUpdatePopup';

export class EMSCategory extends React.Component {

    state = {
        EMSVCategory: [{
            CategoryId: 0,
            ParentId: 0,
            ParentDesc: '',
            CategoryType: '',
            CategoryCode: '',
            CategoryDesc: '',
            SortOrder: 0,
            CreatedDate: '',
            CreatedBy: '',
            UpdatedDate: '',
            UpdatedBy: ''
        }], show: false, canSave: false
    }


    // get ems category
    getEMSCategory = () => {
        const url = baseApiUrl() + 'EMSCategory';

        fetch(url, getRequestOptions).then(res => {
            if (res.status === 200)
                return res.json();
            return res.status;
        }).then(responseData => {
            this.setState({ EMSVCategory: responseData });

            console.log(this.state.EMSVCategory);
        }).catch((errors) => {
            //console.log(errors);
        });
    }


    eMSCategoryInsertPopup = React.createRef<EMSCategoryInsertPopup>();
    eMSCategoryUpdatePopup = React.createRef<EMSCategoryUpdatePopup>();

    render() {
        return (
            <Paper>
                <Table style={{ paddingTop: 10, paddingLeft: 50, marginTop: 10 }}>
                    <TableHead>
                        <TableRow className='SubTableHeader textLeft'>
                            <TableCell><h6><b>Category Id</b></h6></TableCell>
                            <TableCell><h6><b>Category Type</b></h6></TableCell>
                            <TableCell><h6><b>Parent</b></h6></TableCell>
                            <TableCell><h6><b>Category Description</b></h6></TableCell>
                            <TableCell>
                                <EMSCategoryInsertPopup ref={this.eMSCategoryInsertPopup} getCategory={this.getEMSCategory } />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {this.state.EMSVCategory.map(item => (
                                <TableRow>
                                    <TableCell className="textCenter"><h6>{item.CategoryId}</h6></TableCell>
                                    <TableCell className="textCenter"><h6>{item.CategoryType}</h6></TableCell>
                                    <TableCell><h6>{item.ParentDesc}</h6></TableCell>
                                    <TableCell><h6>{item.CategoryDesc}</h6></TableCell>
                                    <TableCell className="textRight">
                                        <EMSCategoryUpdatePopup ref={this.eMSCategoryUpdatePopup} getCategory={this.getEMSCategory} EMSCategory={item} />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
    componentDidMount() {
        this.getEMSCategory();
    }
}