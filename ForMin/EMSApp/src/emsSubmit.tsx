import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'es6-promise';
import { EMSSubmitApp } from './EMSSubmit/EMSSubmitApp';

ReactDOM.render(
    <EMSSubmitApp />,
    document.getElementById('emsSubmit')
);