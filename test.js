var unirest = require('unirest');

unirest.post("https://wordcloudservice.p.mashape.com/generate_wc")
.header("X-Mashape-Key", "eptFiBDjvYmsh54pR00lDRjpkWQrp1nsxx8jsnVbzeMPPX7bt3")
.header("Content-Type", "application/json")
.header("Accept", "application/json")
.send({"f_type":"png","width":800,"height":500,"s_max":"4","s_min":".5","f_min":3,"r_color":"TRUE","r_order":"FALSE","s_fit":"FALSE","fixed_asp":"TRUE","rotate":"TRUE","url":"https://wordcloudapp.herokuapp.com/","remove_words":"white house obama president"})
.end(function (result) {
	  console.log(result.status, result.headers, result.body);
});
