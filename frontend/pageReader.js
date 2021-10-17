// ==UserScript==
// @name        Event Detail Concealer (by @Mariam05)
// @namespace   gcal-event-concealer
// @include     *://*/*
// @version     1
// @grant       none
// ==/UserScript==

var endpoint_url = "http://localhost:5000/"

var scanPage =  () => {
    // var textContent = document.body.textContent || document.body.innerText; // html way
    var textContent = $('body').text();
    console.log("jquery Textbody "  + $('body').text()); // we can use this when I figure out how to add jquery
    var domain = window.location.hostname;
    console.log("domain " + domain);

    $.ajax({
        url: endpoint_url+"detect",
        type: "POST",
        data: JSON.stringify({'Text':textContent, 'domain':'reddit.com'}),
        contentType:"application/json",
        success: function(data) {
            console.log("response: " + JSON.stringify(data));
            console.log("success");
            response =  JSON.stringify(data);
            if (data == "True") {
                console.log("hate speech");
                sendMessage();
            } else {
                console.log("Not hate speech");
            }
        },
        error: function(data) {
            // console.log(data);
            console.log("failure");
        }
      });
}

function sendMessage() {
    chrome.runtime.sendMessage({showmessage: "yes"}, function(response) {
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

