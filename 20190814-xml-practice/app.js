console.log('App.js connected.');

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    console.log('loadData() called.');

    // create XHR object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);

    xhr.onLoad = function(){
        if(this.status == 200) {
            console.log(this.responseText);
        }
    }

    xhr.send();

    // HTTP Statuses
    // 200 - "OK"
    // 403 - forbidden
    // 404 - not found
}

// ERRORS:
// CHROME:
// App.js connected.
//     app.js: 6 loadData() called.
//         index.html: 1 Access to XMLHttpRequest at 'file:///E:/Tekhne/CompSci/compdev/webdev/a2ma-webdev-e7n/20190814-xml-practice/data.txt' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome - extension, https.
//             app.js: 20 GET file:///E:/Tekhne/CompSci/compdev/webdev/a2ma-webdev-e7n/20190814-xml-practice/data.txt net::ERR_FAILED

// FIREFOX
// Cross - Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///E:/Tekhne/CompSci/compdev/webdev/a2ma-webdev-e7n/20190814-xml-practice/data.txt. (Reason: CORS request not http).