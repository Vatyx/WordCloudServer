var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post("/", function(req, res) {
	console.log("Oh boy in post");
	console.log(req.body.hello);
	res.end();
});

app.get("/", function(req, res) {
	res.send("<p>Vedalam villan Kabirduhansingh Wishing Thala AJITH Happy birthday ThalaHBDDearestThalaAjith The past is the past Don't let it hold you back Move forward and be happy I just want to be truly happy for one fucking day at least I guess that's to much to ask for BackPack BackPackAdvance Happy Birthday Kuya WallyALDUBKiligSaSweetDay EBHagdanKS WagasAldub jmalcantara12 JoshuaDtown happy birthday sophiegraceann happy birthday to my love we have soooo many good memories together it's crazy Love you and miss you Wishing Thala AjithKumar sir a very Happy Birthday   Team CVF Excuse me dun sa funnywalaing pumalakpak Haha Echo pa more Happy Sunday ALDUBKiligSaSweetDay HarryStyles  Watching you smile shines my world Love you with all my   soul Stay happyMind following Raztia HAPPY BDAY MY LITTLE PETAL YOU HAVE NO IDEA HOW MUCH YOU MEAN TO ME KEEP BEING CRAZY AND JUST YOURSELF BE FIERCE Aarambam in jaya TV Itsss just the beginning Dthala45Happy birthday Thala Happy birthday to the best Happy Birthday   ThalaAjith HBDDearestThalaAjith vpoffl Premgiamaren actorvaibhav rameshlaus Happy Birthday jaymayzing3  hope you had a great day The limitations of the characters have always been the reason of BASHING Hay naku kasiMAICHARDFaithfulLove meanwhile im just an angry small but also happy and weird Leo TrollywoodTamil ji now trending Happy Birthday Thala  Plz change the tag Happy 24th Birthday to Travis Scott I can tell for real you been working out you look at lot better I can see ur muscle definition I'm happy because if he noticed it's real An article about Thala Movies in India TOday Happy Birthday Thala HBDDearestThalaAjith Happy Sunday Huhu kainggit andaming tao sa Glorieta how I wish andon dn akoo Enjoy po kau dyan ALDUBKiligSaSweetDay es una de las personas ms fuertes que conozco mi amorrrr sabes que te amoooHAPPY BIRTHDAY abravo03 Anyone can make you happy by doing something sweet but only someone special can make you happy without doing anything ExoticLouu happy birthday boo AbdullahFPN where did I mention being happy though Today was my cousins wedding shower  I missed it cuz I had to work but I'm really happy my cuz found a guy that treats her how she deserves happy birthday to one of my favorite people love you so much  seneca12345678 PushinWeight Happy Birthday bro Happy Birthday to the princess that is Gal Gadot Happy Easter to all orthodox Christians  Fulfill this amazing day with unconditional love and have a bless HE'S RISEN tonight made me so happy  thank you so much beautiful muah Thanks twin and i guess i want me to be happy too i don't know how long it will take and i'm not rushing anything i'm happy here Our dearest Honey Thala Ajith Happy Birthday God bless 370K Tweets World Trend Our Tag HBDDearestThalaAjith Get you a girl that makes you this happy RayanAlnowery  happy birthday and sweet 17 like they say Happy birthday Dawson I love you It's never too late to start over If you weren't happy with yesterday try something different today Don't stay stuck D Exposed Happy bday pt 2 hoe  zavalathelama Happy Birthday to Gorgeous Gujarat  Marvellous Maharashtra GujaratDay  MaharashtraDay happy labaur day HarryStyles</p>");	
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log("Listening on port 3000");
})
