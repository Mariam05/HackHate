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
    if (request.greeting === "hello" && !chrome.storage.local.disabled){
      sendResponse({farewell: "goodbye"});
      // chrome.action.setBadgeText({text: "yes"});
      var notifOptions = {
        type: 'basic',
        iconUrl: 'images/sadheart.png',
        title: 'we detected some hate speech on this page',
        message: "sample messsage"
      };
      chrome.notifications.create('HateDetectedNotif', notifOptions);
    }
     
  }
);


