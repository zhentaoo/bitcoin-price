/**
 * 文档：https://developer.chrome.com/docs/extensions/mv2/content_scripts/
 * 
 * Content script脚本是指能够在浏览器已经加载的页面内部运行的javascript脚本。
 * 可以将content script看作是网页的一部分，而不是它所在的 chrome 插件 的一部分。
 */ 
console.log("content scripts");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == "onActivated") {
    console.log("onActivated");
    clearAds();
  }

  if (request == "onDetached") {
    console.log("onDetached");
    clearAds();
  }

  if (request == "onCreated") {
    console.log("onCreated");
    clearAds();
  }

  if (request == "onUpdated") {
    console.log("onUpdated");
    clearAds();
  }
  // sendResponse('我收到了你的消息！');
});

function clearAds() {
  document
    .querySelectorAll(".ads")
    .forEach((el) => (el.style.display = "none"));
}

// dom变化时清除广告元素
const observer = new MutationObserver(() => {
  console.log("dom change: clearads");
  clearAds()
});

observer.observe(document, {
  attributes: true,
  childList: true,
  subtree: true,
});
