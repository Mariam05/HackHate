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
