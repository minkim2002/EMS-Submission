"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdFromQueryString = exports.checkEmail = exports.onlyDecimal = exports.onlyNumbers = exports.getNoDataFound = exports.getErrorMessage = exports.getSuccessMessage = exports.getUserName = exports.getUserId = exports.getHost = exports.baseEmailApiUrl = exports.basePersonApiUrl = exports.baseReportUrl = exports.baseApiUrl = exports.baseUrl = exports.getRequestOptions = exports.requestOptions = exports.serializeData = void 0;
// serialize JSON data to form data
var serializeData = function (data) {
    var buffer = [];
    for (var i in data) {
        var value = data[i];
        buffer.push(encodeURIComponent(i) + '=' + encodeURIComponent((value === null) ? '' : value));
    }
    var source = buffer.join('&').replace('/%20/g', '+');
    return source;
};
exports.serializeData = serializeData;
// Request Options
exports.requestOptions = {
    method: 'POST',
    credentials: 'include'
};
exports.getRequestOptions = {
    method: 'GET',
    credentials: 'include'
};
// Return Base API Url
var baseUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44307/';
    else
        return protocol + '//' + hostname + '/applications/EMSApp';
};
exports.baseUrl = baseUrl;
// Return Base API Url
var baseApiUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44354/api/';
    else
        return protocol + '//' + hostname + '/FrdApis/EMSAppApi/api/';
};
exports.baseApiUrl = baseApiUrl;
// Return Base Report API Url
var baseReportUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost')
        return 'https//firenetdev/FirenetReports/Pages/ReportViewer.aspx?';
    else
        return protocol + '//' + hostname + '/FirenetReports/Pages/ReportViewer.aspx?';
};
exports.baseReportUrl = baseReportUrl;
// Return Person API Url
var basePersonApiUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44386/api/';
    else
        return protocol + '//' + hostname + '/FrdApis/IncidentReportApi/api/';
};
exports.basePersonApiUrl = basePersonApiUrl;
// Return Email API Url
var baseEmailApiUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost' && protocol === 'http:')
        return protocol + '//' + hostname + ':53512/api/';
    else if (hostname === 'localhost' && protocol === 'https:')
        return protocol + '//' + hostname + ':44383/api/';
    else
        return protocol + '//' + hostname + '/FrdApis/FRDFormApi/api/';
};
exports.baseEmailApiUrl = baseEmailApiUrl;
// get host
var getHost = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    return protocol + '//' + hostname;
};
exports.getHost = getHost;
// get user id
var getUserId = function () {
    var userId = document.getElementById('userId').textContent.replace('FFX\\', '');
    return userId;
};
exports.getUserId = getUserId;
// get user name
var getUserName = function () {
    var userName = document.getElementById('userName').textContent;
    return userName;
};
exports.getUserName = getUserName;
// success save message
var getSuccessMessage = function (msg) {
    return msg + ' has been saved successfully.';
};
exports.getSuccessMessage = getSuccessMessage;
// error message
var getErrorMessage = function (msg) {
    return msg + ' Please refresh your browser and then try it again.If your issue persists, please open an IT Help Desk Ticket.';
};
exports.getErrorMessage = getErrorMessage;
// no data message
var getNoDataFound = function (data) {
    return 'There is no data. Please refresh your browser and then try it again.';
};
exports.getNoDataFound = getNoDataFound;
var onlyNumbers = function (event) { event.target.value = event.target.value.replace(/[^0-9]/g, ''); };
exports.onlyNumbers = onlyNumbers;
var onlyDecimal = function (event) { event.target.value = event.target.value.replace(/[^0-9.]/g, ''); };
exports.onlyDecimal = onlyDecimal;
var checkEmail = function (value) {
    if (value && value.length > 0) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value))
            return true;
        else {
            alert('Please correct the email address!!');
            return false;
        }
    }
};
exports.checkEmail = checkEmail;
// extract Id from query string
var getIdFromQueryString = function (value) {
    var sURLVariables = value.split('&');
    var params = [];
    if (sURLVariables && sURLVariables[0].startsWith('Id')) {
        params = value.split('=');
        if (params[1] && Number(params[1]) > 0)
            return Number(params[1]);
    }
    else
        return 0;
};
exports.getIdFromQueryString = getIdFromQueryString;
//# sourceMappingURL=emsUtilities.js.map