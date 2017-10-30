// 广告删除
chrome.tabs.onActivated.addListener(function (tab) {
    chrome.tabs.executeScript(null, {code: `
      function clearAD() {
        console.log(222)
        document.querySelectorAll('.slides').forEach(el => el.style.display = 'none')
      }
      clearAD()

      setTimeout(function () {
        clearAD()
      }, 1500);
    `});
})
