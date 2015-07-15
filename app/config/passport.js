var LinkedinStrategy = require( 'passport-linkedin' ).Strategy;

module.exports = function ( passport ) {

	passport.serializeUser( function ( user, done ) {
		done( null, user );
	} );

	passport.deserializeUser( function ( user, done ) {
		done( null, user );
	} );

	passport.use( new LinkedinStrategy ( {
		consumerKey    : '75r5pktqccmsf6',
		consumerSecret : 'G2RNSfnUH8MsDyk7',
		callbackURL    : '/auth/linkedin/callback',
		profileFields  : [ 'id', 'first-name', 'last-name', 'positions', 'picture-url' ]
	}, function ( token, tokenSecret, profile, done ) {
		process.nextTick( function () {
			return done( null, profile );
		} );
	} ) );

}
