// ==UserScript==
// @name        Event Detail Concealer (by @Mariam05)
// @namespace   gcal-event-concealer
// @include     *://*/*
// @version     1
// @grant       none
// ==/UserScript==

var endpoint_url = "http://localhost:5000/detect"


function scanPage() {
    var body = document.body;
    // var textContent = body.textContent || body.innerText; // html way
    var textContent = $('body').text();
    console.log("jquery Textbody "  + $('body').text()); // we can use this when I figure out how to add jquery

    $.post(endpoint_url, {"text":textContent}, function(data){
        console.log("Response: " + data);
    });
}

setTimeout(() => chrome.storage.local.get('disabled', storage => {
    console.log(`Hate helper is ${storage.disabled ? 'disabled' : 'enabled'}`);
    if (!storage.disabled) {
        scanPage();
    }
}), 10);