// ==UserScript==
// @name        Event Detail Concealer (by @Mariam05)
// @namespace   gcal-event-concealer
// @include     *://*/*
// @version     1
// @grant       none
// ==/UserScript==

var endpoint_url = "http://localhost:5000/"

var scanPage =  () => {
    console.log("in scan page");
    // var textContent = document.body.textContent || document.body.innerText; // html way
    var textContent = $('body').text();
    console.log("jquery Textbody "  + $('body').text()); // we can use this when I figure out how to add jquery

    $.post(endpoint_url+"detect", {"text":textContent}, function(data){
        console.log("Response: " + data);
        console.log("url: " + window.location.toString());
        // if hate
            // sendMessage();
            // reportDomain();
    });
}

// report the domain of the hate speech
function reportDomain() {
    var domain = window.location.hostname;
    $.post(endpoint_url+"report", {"domain": domain});
}


function sendMessage() {
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response.farewell);
      });
}



setTimeout(() => chrome.storage.local.get('disabled', storage => {
    console.log(`Hate helper is ${storage.disabled ? 'disabled' : 'enabled'}`);
    if (!storage.disabled) {
        console.log("Storage enabled");
        scanPage();
    }
}), 10);

