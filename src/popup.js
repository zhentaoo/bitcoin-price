document.addEventListener('DOMContentLoaded', function () {

  function getAllPriceInfo() {
    var body = document.querySelector('body')
    // body.innerHTML = Math.random()

    var btc = document.querySelector('#btc')
    var eth = document.querySelector('#eth')
    var bcc = document.querySelector('#bcc')
    var gold = document.querySelector('#gold')
    var dollar = document.querySelector('#dollar')

    fetch('https://www.btc123.com/api/getTicker?symbol=btcchinabtccny')
      .then(res => res.json())
      .then(res => {
        btc.innerHTML = res.datas.ticker.buy
      })
      .catch(res => {
        btc.innerHTML = res
      })
  }

  getAllPriceInfo();
  setInterval(getAllPriceInfo, 1000 * 20);

});
