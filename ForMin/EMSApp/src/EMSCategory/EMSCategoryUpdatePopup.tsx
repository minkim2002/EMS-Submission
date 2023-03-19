import * as React from 'react';
import { baseApiUrl, getErrorMessage, getRequestOptions, getSuccessMessage, getUserId, serializeData } from '../utilities/emsUtilities';
import { Button, Paper, Grid, TextField, Modal, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';


export interface CategoryProps {
    ref: any;
    getCategory: Function;
    EMSCategory: any;
}

export class EMSCategoryUpdatePopup extends React.Component<CategoryProps, {}>{

    state = {
        EMSCategory: {
            CategoryId: 0,
            ParentId: 0,
            CategoryType: '',
            CategoryCode: '',
            CategoryDesc: '',
            SortOrder: 0,
            IsActive: true,
            CreatedDate: '',
            CreatedBy: '',
            UpdatedDate: '',
            UpdatedBy: ''
        }, EMSCategoryList: [{
            CategoryId: 0,
            ParentId: 0,
            CategoryType: 'Category',
            CategoryCode: '',
            CategoryDesc: '',
            SortOrder: 0,
            IsActive: true,
            CreatedDate: '',
            CreatedBy: '',
            UpdatedDate: '',
            UpdatedBy: ''
        }], show: false, canSave: false
    }


    userId = '';

    constructor(props: any) {
        super(props);
        this.userId = getUserId();
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

    //set state
    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const currentSQState = { ...this.state.EMSCategory, [name]: value };
        this.setState({ EMSCategory: currentSQState });
        if (this.state.EMSCategory.CategoryCode !== null && this.state.EMSCategory.CategoryCode !== 'undefined' && this.state.EMSCategory.CategoryDesc !== null && this.state.EMSCategory.CategoryDesc !== 'undefined') {
            this.setState({ canSave: true });
        } else
            this.setState({ canSave: false });

    }

    //Insert Category
    handleSubmit = () => {
        let CategoryUrl = baseApiUrl() + 'Category/Update';

        const today = new Date().toISOString();

        this.state.EMSCategory.UpdatedBy = this.userId;
        this.state.EMSCategory.UpdatedDate = today;
        
        let requestSQOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serializeData(this.state.EMSCategory)
        }

        fetch(CategoryUrl, requestSQOptions).then(res => {
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
                this.setState({EMSCategory: responseData});
                alert(getSuccessMessage('A ' + this.state.EMSCategory.CategoryType));
                if (this.state.EMSCategory.CategoryType === 'Category')
                    this.getEMSCategory();
            }
        }).catch((errors) => {
            // console.log(errors);
            alert(getErrorMessage('There is an error during inserting a Category'));
        })

    }

    handleDelete = (id: number) => {
        this.setCategory();
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

        fetch(baseApiUrl() + 'Category/Delete', deleteRequestOptions).then(res => {
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
                this.props.getCategory.call(this);
                alert("It has been removed successfully.");
            }
        }).catch((errors) => {
            // console.log(errors);
            alert(getErrorMessage('There is an error during deleting a Category'));
        });

        this.handleClear();
    }


    //clear state
    handleClear = () => {
        this.setState({
            EMSCategory: {
                CategoryId: 0,
                ParentId: 0,
                CategoryType: 'Category',
                CategoryCode: '',
                CategoryDesc: '',
                SortOrder: 0,
                IsActive: true,
                CreatedDate: '',
                CreatedBy: '',
                UpdatedDate: '',
                UpdatedBy: ''
            }, EMSCategoryList: [{
                CategoryId: 0,
                ParentId: 0,
                CategoryType: 'Category',
                CategoryCode: '',
                CategoryDesc: '',
                SortOrder: 0,
                IsActive: true,
                CreatedDate: '',
                CreatedBy: '',
                UpdatedDate: '',
                UpdatedBy: ''
            }], canSave: false
        });
    }

    handleShow = () => {
        this.setState({ show: true });
        this.getEMSCategory();
        setTimeout(() => { this.setCategory(); });
    }

    handleClose = () => {
        this.setState({ show: false });
        this.props.getCategory();
    }

    setCategory = () => {
        this.state.EMSCategory.CategoryId = this.props.EMSCategory.CategoryId;
        this.state.EMSCategory.ParentId = this.props.EMSCategory.ParentId;
        this.state.EMSCategory.CategoryType = this.props.EMSCategory.CategoryType;
        this.state.EMSCategory.CategoryDesc = this.props.EMSCategory.CategoryDesc;
        this.state.EMSCategory.CategoryCode = this.props.EMSCategory.CategoryCode;
        this.state.EMSCategory.SortOrder = this.props.EMSCategory.SortOrder;
        this.state.EMSCategory.IsActive = this.props.EMSCategory.IsActive;
        this.state.EMSCategory.CreatedBy = this.props.EMSCategory.CreatedBy;
        this.state.EMSCategory.CreatedDate = this.props.EMSCategory.CreatedDate;
        this.state.EMSCategory.UpdatedBy = this.props.EMSCategory.UpdatedBy;
        const currentSQState = { ...this.state.EMSCategory, "UpdateDate": this.props.EMSCategory.UpdatedDate };
        this.setState({ EMSCategory: currentSQState });
    }


    render() {
        return (
            <this.updateCategory />
        );
    }

    updateCategory = () => {
        //const category = this.props.EMSCategory;
        //let id = 0;
        //if (this.props.EMSCategory && this.props.EMSCategory.CategoryId && this.props.EMSCategory.CategoryId > 0)
        //    id = this.props.EMSCategory.CategoryId;
        return (
            <Grid item xs={12} style={{ textAlign: "left" }}>
                <Grid container className="textRight alignRight">
                    <Button variant="contained" color="primary" onClick={() => { this.handleShow(); }} data-toggle="tooltip" title="Update Category" className="marginLeft5"><img src={window.location.origin + '/images/edit_white.png'} className="btnImage" /></Button>
                    <Button variant='contained' color="secondary" onClick={() => { window.confirm('Are you sure you wish to delete this Category?') && this.handleDelete.call(this, this.props.EMSCategory.CategoryId); }} data-toggle="tooltip" title="Delete Category" className="marginLeft5"><img src={window.location.origin + '/images/delete_white.png'} className="btnImage" /></Button>
                </Grid>
                <Modal className="insertModal" open={this.state.show} onClose={() => { this.handleClear.call(this); this.handleClose(); }} disableBackdropClick={true}>
                    <Paper className="ModalDiv">
                        <Grid container spacing={2}>
                            <Grid item xs={4} sm={4}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name="CategoryType"
                                        label="CategoryType"
                                        defaultValue={this.state.EMSCategory.CategoryType}
                                        onChange={this.handleChange}>
                                        <MenuItem value="Category"><em>Category</em></MenuItem>
                                        <MenuItem value="Subcategory"><em>Subcategory</em></MenuItem>
                                        <MenuItem value="Status"><em>Status</em></MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {this.state.EMSCategory.CategoryType && this.state.EMSCategory.CategoryType === "Subcategory" ?
                                <Grid item xs={4} sm={4}>
                                    <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-outlined-label" style={{ fontSize: 13 }}>*Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="ParentId"
                                            label="Category"
                                            onChange={this.handleChange}                                        >
                                            <MenuItem value=""><em>Select One</em></MenuItem>
                                            {this.state.EMSCategoryList.map((item) => (
                                                <MenuItem value={item.CategoryId}><em>{item.CategoryDesc}</em></MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid> : <Grid item xs={4}></Grid>
                            }
                            <Grid item xs={4} sm={4}>
                                <TextField name="CategoryCode" className="errorMessage" placeholder="Category Code" value={this.state.EMSCategory.CategoryCode} onChange={this.handleChange} helperText="Category Code" inputProps={{ maxLength: 20 }} />
                                <span style={{ color: 'blue', fontSize: '11px', padding: '1.5px' }}></span>
                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <FormControl variant="outlined" className="selectForm" style={{ width: '100%' }}>
                                    <TextField name="CategoryDesc" className="errorMessage" placeholder="Category Description" value={this.state.EMSCategory.CategoryDesc} onChange={this.handleChange} helperText="Category Description" inputProps={{ maxLength: 20 }} />
                                    <span style={{ color: 'blue', fontSize: '11px', padding: '1.5px' }}></span>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <TextField name="SortOrder" className="errorMessage" placeholder="Sorting Order" value={this.state.EMSCategory.SortOrder} onChange={this.handleChange} helperText="Sorting Order" inputProps={{ maxLength: 20 }} />
                                <span style={{ color: 'blue', fontSize: '11px', padding: '1.5px' }}></span>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox checked={this.state.EMSCategory.IsActive} onChange={this.handleChange} name="IsActive" />} label="Active" />
                                </FormGroup>
                            </Grid>

                            <Grid item xs={12} className="textRight">
                                <Button variant='contained' color="primary" onClick={() => { this.handleSubmit(); }}>Save Category</Button>
                                <Button variant='contained' color="default" onClick={() => { this.handleClear(); this.handleClose(); }}>Close</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Modal>
            </Grid>
        )
    }
}