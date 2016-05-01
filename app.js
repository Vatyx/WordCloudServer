var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var EventEmitter = require('events');
var util = require('util');

app.use(bodyParser.json());
app.use(express.static(__dirname));

var filler = "what";

var counter = 0;

function MyEmitter() {
	EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);
const myEmitter = new MyEmitter();

app.post("/", function(req, res) {
	console.log(req.body.hello);
	filler = req.body.hello;

	/*getImage();
	myEmitter.on("done", function () {
		console.log("in route");
		res.json({img: "http://wordcloudapp.herokuapp.com/wordcloud"+ counter +".png"});
		counter++;
	});*/
	res.json({img: "http://dummyimage.com/830x600/000/fff"})
});

app.get("/", function(req, res) {
	res.send("<p>" + filler + "</p>");
});

app.get("/waiting", function(req, res) {
	getImage();
	myEmitter.on("done", function () {
		console.log("in route");
		res.json({img: "http://wordcloudapp.herokuapp.com/wordcloud"+ counter +".png"});
		counter++;
	});
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log("Listening on port 3000");
})

function what(){
	console.log("I'm in here about ti wait");
	setTimeout( function() {
		console.log("done waiting!");	
		myEmitter.emit("done");
	}, 3000);
}

function getImage() {
	
var Promise = require('bluebird');
var Nightmare = require('nightmare');
var path = require('path');
var co = require('co');
require('nightmare-download-manager')

co(function* (){
  var scriptDir = __dirname;
  var fileName = 'wordcloud' + counter + '.png';
  var nightmare = Nightmare({ show: false });

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
  myEmitter.emit('done');
  yield nightmare.end()

}).catch(console.log)
}
