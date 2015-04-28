var https = require( 'https' );

var timeArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
	keyData = [{"text":"boobbies"}, {"text":"cat"}],
	options = {
		"hostname": 'hooks.slack.com',
		"path": '/services/T03FGUZ4D/B04D6A2TW/XbMOFCyF1BjhbdHEKYXYSiZC',
		"method": 'POST',
		"headers": {"Content-Type": "application/json"}
	};

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
	setTimeout(post, getRandom(timeArray) * 60 * 1000 + 1, getRandom(keyData));
};

post(getRandom(keyData));