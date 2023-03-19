import * as React from 'react';
import { serializeData, baseApiUrl, basePersonApiUrl, requestOptions, getRequestOptions, getSuccessMessage, getErrorMessage, getUserId, onlyNumbers } from '../utilities/emsUtilities';
import { Grid, Paper, AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';
import { EMSNote } from '../EMSAdmin/EMSNote';
import { EMSSupplementalDoc } from './EMSSupplementalDoc';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

export interface SubmitTabProps {
    ref: any;
    ComplaintId: number;
    PageName: string;
}

export class EMSSubmitTab extends React.Component<SubmitTabProps, {}> {
    state = {
        ComplaintId: 0,
        selectedTab: 'one',
        show: false,
        PageName: ''
    }

    constructor(props: any) {
        super(props);
    }

    eMSNote = React.createRef<EMSNote>();
    eMSSupplementalDoc = React.createRef<EMSSupplementalDoc>();

    render() {
        const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
            this.setState({ selectedTab: newValue });
        };

        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AppBar position="static" style={{ "padding": "0px" }}>
                        <Tabs value={this.state.selectedTab} onChange={handleChange} aria-label="simple tabs">
                            <Tab value="one" label="Supplemental Document" {...a11yProps('one')} />
                            {this.props.PageName && this.props.PageName === 'Admin' ?
                                <Tab value="two" label="Note" {...a11yProps('two')} /> : null}
                        </Tabs>
                    </AppBar>

                    <TabPanel value={this.state.selectedTab} index='one'>
                        <EMSSupplementalDoc ref={this.eMSSupplementalDoc} ComplaintId={this.props.ComplaintId} />
                    </TabPanel>
                    {this.props.PageName && this.props.PageName === 'Admin' ?
                        <TabPanel value={this.state.selectedTab} index='two'>
                            <EMSNote ref={this.eMSNote} ComplaintId={this.props.ComplaintId} />
                        </TabPanel> : null}
                </Grid>
            </Grid>
        );
    }
}