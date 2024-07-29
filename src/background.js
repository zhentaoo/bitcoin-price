/**
 * 后台脚本
 * 
 * https://developer.chrome.com/docs/extensions/develop/concepts/messaging?hl=zh-cn
 * 
 * https://developer.chrome.com/docs/extensions/reference/api/runtime?hl=zh-cn
 */

// 

chrome.runtime.onConnect.addListener((port) => {
  console.log('btccc Connected to port:', port.name);
    
  // 监听来自连接端口的消息
  port.onMessage.addListener((message) => {
      console.log('Received message:', message);

      // 发送回复消息
      port.postMessage({ response: `btccc Message: ${message}` });
  });

  // 监听断开事件
  port.onDisconnect.addListener(() => {
      console.log('btccc Port disconnected');
  });
})


// 一次性消息
console.log('btccc, background js run');

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


setInterval(() => {
  console.log('bitccc, back js running');
}, 1000*3);