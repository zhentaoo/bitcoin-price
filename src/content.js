/**
 * 文档：https://developer.chrome.com/docs/extensions/mv2/content_scripts/
 *
 * Content script脚本是指能够在浏览器已经加载的页面内部运行的javascript脚本。
 * 可以将content script看作是网页的一部分，而不是它所在的 chrome 插件 的一部分。
 */
console.log("bitccc content scripts");

// content script 运行在沙箱环境，不会影响到当前页面的上下文，所以在dapp的开发中，需要注入脚本进去
window.bitcccc = "panghu";
console.log(window.bitcccc); // 可以打印出来，但是对应网站无法访问

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == "onActivated") {
    console.log("bitccc onActivated");
    clearAds();
  }

  if (request == "onDetached") {
    console.log("bitccc onDetached");
    clearAds();
  }

  if (request == "onCreated") {
    console.log("bitccc onCreated");
    clearAds();
  }

  if (request == "onUpdated") {
    console.log("bitccc onUpdated");
    clearAds();
  }
  // sendResponse('我收到了你的消息！');
});


// 
const port = chrome.runtime.connect({name: '1112200-abc'})

// 监听来自后台脚本的消息
port.onMessage.addListener((message) => {
  console.log('Received response:', message);
});

// 发送消息到后台脚本
port.postMessage({ greeting: 'Hello from content script btc' });



function clearAds() {
  document
    .querySelectorAll(".ads")
    .forEach((el) => (el.style.display = "none"));
}

// dom变化时清除广告元素
const observer = new MutationObserver(() => {
  console.log("bitccc dom change: clearads");
  clearAds();
});

observer.observe(document, {
  attributes: true,
  childList: true,
  subtree: true,
});
