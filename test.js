var Promise = require('bluebird');
var Nightmare = require('nightmare');
var path = require('path');
var co = require('co');
require('nightmare-download-manager')
var shelljs = require('shelljs/global');

co(function* (){
  var scriptDir = __dirname;
  var fileName = 'book.png';
  var nightmare = Nightmare({ show: true });

  nightmare.on('download', function(state, downloadItem){
    if(state == 'started'){
      nightmare.emit('download', path.join(scriptDir, fileName), downloadItem);
    }
  });

  console.log('navigating');
  yield nightmare
    .goto('http://www.wordclouds.com/')

  var done = false;
  while (!done) {
    yield Promise.delay(500);
    done = yield nightmare
      .evaluate(() => {
        if (document.querySelector('#wait').style.display === 'none' && document.querySelector('#warning').innerText.indexOf('Please wait') === -1) {
            return true;
        }
        return false;
      })
  }

  console.log('generating');
  yield nightmare
    .evaluate( () => {
        ZM.adjust('weightFactor', 80);
    })
    .click('body > div.container > div.well.colors > div > div:nth-child(1) > div:nth-child(2) > button')
    .click('#fileMenu > li:nth-child(5) > a')
    .wait(500)
    .insert('input[type="text"]', "http://wordcloudapp.herokuapp.com")
    .click('body > div.bootbox.modal.fade.bootbox-prompt.in > div > div > div.modal-footer > button.btn.btn-primary')

  var done = false;
  var fiveseconds = false;

	setTimeout(() => {
		fiveseconds = true;
		console.log('printed done');
	}, 5000);

  while (!done && !fiveseconds) {
    yield Promise.delay(500);
    done = yield nightmare
      .evaluate(() => {
        if (document.querySelector('#wait').style.display === 'none' && document.querySelector('#warning').innerText.indexOf('Please wait') === -1) {
            return true;
        }
        return false;
      })
  }

  console.log('downloading')
  var data = yield nightmare
    .downloadManager()
    .click('body > div.container > div.well.colors > div > div:nth-child(1) > div:nth-child(2) > button')
    .click('#fileMenu > li:nth-child(9) > a')
    .waitDownloadsComplete()

  console.log('downloaded');
  yield nightmare.end()

}).catch(console.log)
