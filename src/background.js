/**
 * 相当于在
 * 
 */
console.log('background js run');

chrome.tabs.onActivated.addListener(function (tab, changeInfo, changeInfo) {
  chrome.tabs.sendMessage(tab.tabId, 'onActivated')
});

chrome.tabs.onDetached.addListener(function (tab) {
  chrome.tabs.sendMessage(tab, 'onDetached')
});

chrome.tabs.onCreated.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, 'onCreated')
});

chrome.tabs.onUpdated.addListener(function (tab) {
  chrome.tabs.sendMessage(tab, 'onUpdated')
});
