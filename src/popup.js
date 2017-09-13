document.addEventListener('DOMContentLoaded', function () {

  function getAllPriceInfo() {
    var body = document.querySelector('body')
    // body.innerHTML = Math.random()

    var btc = document.querySelector('#btc')
    var eth = document.querySelector('#eth')
    var bcc = document.querySelector('#bcc')
    var gold = document.querySelector('#gold')
    var usd = document.querySelector('#usd')

    // jubi 网 api
    fetch('https://www.jubi.com/coin/trends')
      .then(res => res.json())
      .then(res => {
        btc.innerHTML = res.btc.yprice.toFixed(2)
        bcc.innerHTML = res.bcc.yprice.toFixed(2)
        eth.innerHTML = res.eth.yprice.toFixed(2)
      })
      .catch(res => {
        btc.innerHTML = '--'
      })

    // 雅虎 金融接口，美元汇率
    fetch('https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json')
      .then(res => res.json())
      .then(res => {
        var item = res.list.resources.find(el => el.resource.fields.name == 'USD/CNY')
        usd.innerHTML = item.resource.fields.price
      })
      .catch(res => {
        usd.innerHTML = '--'
      })

    // 黄金
    fetch('http://gold.cnfol.com/fol_inc/v6.0/Gold/goldhq/json/AUT+D_new.json?lastTime=' + new Date().getTime())
      .then(res => res.json())
      .then(res => {
        // alert(res.result.last_price)
        gold.innerHTML = res[1][1].toFixed(2)+"/g"
        // gold.innerHTML = 999
      })
      .catch(res => {
        gold.innerHTML = '--/g'
      })

  }

  getAllPriceInfo();
  setInterval(getAllPriceInfo, 1000 * 20);

});
