var https = require( 'https' );

var timeArray = [2, 5, 10, 15, 30, 60, 90, 120, 180],
	keyData = [{"text":"boobbies"}, {"text":"cat"}],
	options = {
		"hostname": 'hooks.slack.com',
		"path": '/services/T03FGUZ4D/B04D6A2TW/XbMOFCyF1BjhbdHEKYXYSiZC',
		"method": 'POST',
		"headers": {"Content-Type": "application/json"}
	},
	timer;

var postKeyword = function( key ) {
	var req = https.request(options);
	req.write( JSON.stringify( key ) );
	req.end();
};

function getRandom(data) {
	var newKey = data[Math.floor(data.length * Math.random())];
	return newKey;
};

function post(key) {
	postKeyword(key);
	clearInterval(timer);
	timer = setInterval(post, getRandom(timeArray) * 60 * 1000, getRandom(keyData));
};

timer = setInterval(post, getRandom(timeArray) * 60, getRandom(keyData));