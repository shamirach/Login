// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '334755173366346', // your App ID
		'clientSecret' 	: '2415263a3c6580340371f13656d1d997', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'googleAuth' : {
		'clientID' 		: '814664399727-noiu9tt3v8divavgmc954rscc02f1ghe.apps.googleusercontent.com',
		'clientSecret' 	: '_ciX0cmA8lt1WAxPAZT6atQg',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};