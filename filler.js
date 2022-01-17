// listen for tab changes
chrome.tabs.onActivated.addListener((tabInfo) => {
    // get current tab's url once updated
    chrome.tabs.get(tabInfo.tabId, (tab) => {
        let url = tab?.url ? tab.url : '';
        // act if on a calendar page
        if (url.includes('calendar.google')) {
            console.log('calendar page detected!');
        } else {
            console.log('not on a calendar page..');
        }
    });

});
