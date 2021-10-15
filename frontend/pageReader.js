// ==UserScript==
// @name        Event Detail Concealer (by @Mariam05)
// @namespace   gcal-event-concealer
// @include     *://*/*
// @version     1
// @grant       none
// ==/UserScript==


function scanPage() {
    var body = document.body;
    var textContent = body.textContent || body.innerText;

    // console.log("jquery Textbody" + $('body').text()); // we can use this when I figure out how to add jquery

    console.log("Textbody " + textContent);
}

setTimeout(() => chrome.storage.local.get('disabled', storage => {
    console.log(`Hate helper is ${storage.disabled ? 'disabled' : 'enabled'}`);
    if (!storage.disabled) {
        scanPage();
    }

    chrome.storage.onChanged.addListener(() => window.location.reload())
}), 10);