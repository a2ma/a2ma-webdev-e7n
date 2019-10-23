console.log('App.js connected.');

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    console.log('loadData() called.');

    // create XHR object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);
    
//    console.log('READYSTATE', xhr.readyState);
    
    // Optional progress tracker can be used for load animations
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
        if(this.status == 200) {
//            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    
//    onload is new; before that, the ready state values below would have to be checked with:
//    xhr.onreadystatechange = function() {
//        console.log('READYSTATE', xhr.readyState);
//        if(this.status === 200 && this.readyState === 4){
//            console.log(this.responseText);
//        }
//    }

    
    xhr.onerror = function() {
        console.log("Some error message...");
    }
    xhr.send();
    
//    ready state values
//    0: request not initialized
//    1: server connection established
//    2: request received
//    3: processing request
//    4: request finished, response ready

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