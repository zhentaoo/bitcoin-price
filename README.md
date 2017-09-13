## Chrome插件--比特币、黄金、美元价格
> 正如你看到的，这是个chrome插件，主要是显示 比特币、黄金、美元当前的RMB价格
> 如果你对区块链、前端技术，以及投资感兴趣，那就一起参与这个项目吧！！！
> 项目中用到的接口都是第三方的，不保证稳定性....

![./doc/bitcoin.png](./doc/bitcoin.png)

## 如何使用该插件?
打开Chrome，更多工具（more tools），扩展（extensions），加载解压的扩展（load unpacked extension），选择bitcoin-price/src目录

## 本项目中使用到的数据接口
1. 虚拟币价格，聚币网：https://www.jubi.com/coin/trends
2. 黄金价格，中金在线：http://gold.cnfol.com/fol_inc/v6.0/Gold/goldhq/json/AUT+D_new.json?lastTime=
3. 美元汇率，雅虎金融: https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json

## 如何写一个chrome插件
首先可以看360翻译的文档，上面有大量的demo，http://open.chrome.360.cn/extension_dev/background_pages.html


## Chrome extension--重要API解读
### Browser Actions
可以定义应用的图标、name、气泡html

### permissions
定义该应用可以访问的域、资源

### background_scripts
在插件启动时，就会执行该脚本，不需要HTML文件，例：background.js

### content_scripts
在match到的页面下，会执行该脚本，例：content.js会在http://www.zhentaoo.com/*下执行
