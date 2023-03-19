import * as React from 'react';
import { CircularProgress, Modal } from '@material-ui/core';

export interface progressProps {
    open: boolean;
}

export class ProgressPopup extends React.Component<progressProps, {}> {

    constructor(props: any) {
        super(props);
    }

    // display UI on the Person Search Popup Window
    render() {
        return (
            <this.progress />
        );
    }

    progress = () => {
        return (
            <div>
                <Modal open={this.props.open}>
                    <div className="progressDiv">
                        <CircularProgress />
                    </div>
                </Modal>
            </div>
        );
    }
}