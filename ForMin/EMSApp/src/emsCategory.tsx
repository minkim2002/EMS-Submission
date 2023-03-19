import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'es6-promise';
import { EMSCategoryApp } from './EMSCategory/EMSCategoryApp';

ReactDOM.render(
    <EMSCategoryApp />,
    document.getElementById('emsCategory')
);