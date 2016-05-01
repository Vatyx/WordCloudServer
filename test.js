var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://www.wordclouds.com/')
  .wait()
  .click('/html/body/div[3]/div[3]/div/div[1]/div[1]/button')
  .end()
  .then(function (result) {
    console.log(result)
  })
