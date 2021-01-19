### Chrome 插件--比特币、黄金、美元价格

> 正如你看到的，这是个 chrome 插件，主要是显示 比特币、黄金、美元当前的 RMB 价格
> 如果你对区块链、前端技术，以及投资感兴趣，那就一起参与这个项目吧！！！
> 项目中用到的接口都是第三方的，不保证稳定性....

![./doc/bitcoin.png](./doc/bitcoin.png)

## 如何使用该插件?

打开 Chrome，更多工具（more tools），扩展（extensions），加载解压的扩展（load unpacked extension），选择 bitcoin-price / src 目录

## 如何写一个 自己的Chrome 插件？

### 官方文档

官方文档：https://developer.chrome.com/docs/extensions/mv2/match_patterns/

360 翻译：http://open.chrome.360.cn/extension_dev/background_pages.html

### 概诉

一个 Chrome 插件，其实是压缩在一起的一组文件，包括 HTML，CSS，Javascript 脚本，图片文件，还有其它任何需要的文件。插件本质上来说就是 web 页面，它们可以使用所有的浏览器提供的 API，从 XMLHttpRequest 到 JSON 到 HTML5 全都有。

插件 可以与 Web 页面交互，或者通过 content script 或 cross-origin XMLHttpRequests 与服务器交互。插件 还可以访问浏览器提供的内部功能，例如标签或书签等。


### 配置文件

manifest.json 是插件的主要配置文件，包含了插件权限、插件弹出页、后台执行脚本、网站匹配脚本执行；

### background_pages

- 文档：https://developer.chrome.com/docs/extensions/mv2/background_pages/
- 在插件启动时，就会执行该脚本，不需要 HTML 文件，例：background.js；
  绝大多数插件都包含一个背景页面(background page)，用来执行插件的主要功能。

### Content scripts

- 文档：https://developer.chrome.com/docs/extensions/mv2/content_scripts/

- 如果一个应用（扩展）需要与 web 页面交互，那么就需要使用一个 content script。Content script 脚本是指能够在浏览器已经加载的页面内部运行的 javascript 脚本。可以将 content script 看作是网页的一部分，而不是它所在的应用（扩展）的一部分。

### Popup html

一个 browser action 可以包含一个弹窗(popup)，而弹窗就是用 html 页面实现的。应用（扩展）还可以使用 chrome.tabs.create()或者 window.open()来显示内部的 HTML 文件。

应用（扩展）里面的 HTML 页面可以互相访问各自 DOM 树中的全部元素，或者互相调用其中的函数。
