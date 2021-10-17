const getSetting = () => new Promise(res => chrome.storage.local.get('disabled', (s) => res(s.disabled)));

const setIcon = (disabled) => chrome.action.setIcon({
  path: disabled ? "images/disabledHearts.png" : "images/hearts.png"
});

getSetting().then(setIcon);

chrome.action.onClicked.addListener(function(tab) {
  getSetting().then(disabled => {
    const toggled = !disabled;
    chrome.storage.local.set({'disabled': toggled });
    setIcon(toggled);
  })
});


// to communicate with content script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.showmessage === "yes"){
      var notifOptions = {
        type: 'basic',
        iconUrl: 'images/sadheart.png',
        title: title,
        message: message
      };
      chrome.notifications.create('HateDetectedNotif', notifOptions);
    }
     
  }
);

var title = "We've detected hate speech on this page! "
var message = "Please consider reporting this in one of two ways: \n \
1. via (https://www.nccm.ca/programs/incident-report-form/) \n \
2. via the site reporting capabilities \n \
Recognizing instances of hate speech helps to raise awareness about how harmful prejudice is perpetuated in online spaces and sets a standard for organizations to take accountability.";
