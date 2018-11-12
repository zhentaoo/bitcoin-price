// 广告删除
chrome.tabs.onActivated.addListener(function (tab) {
    chrome.tabs.executeScript(null, {code: `
      function clearAD() {
        document.querySelectorAll('.ads').forEach(el => el.style.display = 'none')
      }
      clearAD()

      setTimeout(function () {
        clearAD()
      }, 1500);
    `});
})
