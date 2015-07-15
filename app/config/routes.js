module.exports = function ( app, passport ) {

	app.get( '/', isAuthenticated, function ( req, res ) {
		res.status( 200 ).render( 'home', { user : req.user } );
	} );

	app.get( '/login', function ( req, res ) {
		res.status( 200 ).render( 'login', { user : req.user } );
	} );

	app.get( '/auth/linkedin', passport.authenticate( 'linkedin' ), function ( req, res ) {

	} );

	app.get( '/auth/linkedin/callback', passport.authenticate( 'linkedin', {
		'failureRedirect' : '/login'
	} ), function ( req, res ) {
		res.redirect( '/' )
	} );

	app.get( '/logout', function ( req, res ) {
		req.logout();
		res.redirect( '/' );
	} );

	function isAuthenticated( req, res, next ) {
		if ( req.isAuthenticated() ) {
			return next();
		}

		res.redirect( '/login' );
	}

}
