// serialize JSON data to form data
export const serializeData = (data: any) => {
    var buffer = [];

    for (var i in data) {
        var value = data[i];
        buffer.push(
            encodeURIComponent(i) + '=' + encodeURIComponent((value === null) ? '' : value)
        );
    }

    var source = buffer.join('&').replace('/%20/g', '+');
    return source;
};

// Request Options
export const requestOptions: any = {
    method: 'POST',
    credentials: 'include'
};

export const getRequestOptions: any = {
    method: 'GET',
    credentials: 'include'
};

// Return Base API Url
export const baseUrl = () => {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44307/';
    else
        return protocol + '//' + hostname + '/applications/EMSApp';
};

// Return Base API Url
export const baseApiUrl = () => {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44354/api/';
    else
        return protocol + '//' + hostname + '/FrdApis/EMSAppApi/api/';
};

// Return Base Report API Url
export const baseReportUrl = () => {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    if (hostname === 'localhost')
        return 'https//firenetdev/FirenetReports/Pages/ReportViewer.aspx?';
    else
        return protocol + '//' + hostname + '/FirenetReports/Pages/ReportViewer.aspx?';
};

// Return Person API Url
export const basePersonApiUrl = () => {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44386/api/';
    else
        return protocol + '//' + hostname + '/FrdApis/IncidentReportApi/api/';
};

// Return Email API Url
export const baseEmailApiUrl = () => {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    if (hostname === 'localhost' && protocol === 'http:')
        return protocol + '//' + hostname + ':53512/api/';
    else if (hostname === 'localhost' && protocol === 'https:')
        return protocol + '//' + hostname + ':44383/api/';
    else
        return protocol + '//' + hostname + '/FrdApis/FRDFormApi/api/';
};

// get host
export const getHost: any = () => {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    return protocol + '//' + hostname;
}

// get user id
export const getUserId: any = () => {
    const userId = document.getElementById('userId').textContent.replace('FFX\\', '');
    return userId;
}

// get user name
export const getUserName: any = () => {
    const userName = document.getElementById('userName').textContent;
    return userName;
}

// success save message
export const getSuccessMessage: any = (msg: string) => {
    return msg + ' has been saved successfully.';
}

// error message
export const getErrorMessage: any = (msg: string) => {
    return msg + ' Please refresh your browser and then try it again.If your issue persists, please open an IT Help Desk Ticket.';
}

// no data message
export const getNoDataFound: any = (data: string) => {
    return 'There is no data. Please refresh your browser and then try it again.';
}

export const onlyNumbers = (event: any) => { event.target.value = event.target.value.replace(/[^0-9]/g, '') };

export const onlyDecimal = (event: any) => { event.target.value = event.target.value.replace(/[^0-9.]/g, '') };

export const checkEmail = (value: string) => {
    if (value && value.length > 0) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value))
            return true;
        else {
            alert('Please correct the email address!!');
            return false;
        }
    }

}

// extract Id from query string
export const getIdFromQueryString: any = (value: string) => {
    let sURLVariables = value.split('&');

    let params = [];
    if (sURLVariables && sURLVariables[0].startsWith('Id')) {
        params = value.split('=');
        if (params[1] && Number(params[1]) > 0)
            return Number(params[1]);
    } else
        return 0;
}
