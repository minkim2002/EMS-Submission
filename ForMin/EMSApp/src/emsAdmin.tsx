import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'es6-promise';
import { EMSAdminApp } from './EMSAdmin/EMSAdminApp';

ReactDOM.render(
    <EMSAdminApp />,
    document.getElementById('emsAdmin')
);