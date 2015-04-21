var https = require( 'https' );

var boobsKey = {"text":"boobbies"},
	kittensKey = {"text":"cat"},
	boobsTime =  30 * 60 * 1000,
	kittensTime = 90 * 60 * 1000,
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


setInterval(
	postKeyword,
	boobsTime,
	boobsKey
);

setInterval(
	postKeyword,
	kittensTime,
	kittensKey
);
