var express      = require( 'express' );
var bodyParser   = require( 'body-parser' );
var cookieParser = require( 'cookie-parser' );
var session      = require( 'express-session' );
var path         = require( 'path' );
var passport     = require( 'passport' );
var open         = require( 'open' );
var ip           = require( 'ip' );
var app          = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'app/views/' ) );
app.use( express.static( __dirname ) );
app.use( bodyParser.urlencoded( {
	'extended' : true
} ) );
app.use( bodyParser.json() );
app.use( cookieParser() );
app.use( session( ( {
	'secret'            : 'asdfghjklqwerty',
	'resave'            : true,
	'saveUninitialized' : true
} ) ) );
app.use( passport.initialize() );
app.use( passport.session() );

app.listen( 3000, function () {
	console.log( 'Running at http://' + ip.address() + ':3000' );
	open( 'http://' + ip.address() + ':3000' );
} );

require( './app/config/passport' )( passport );
require( './app/config/routes')( app, passport );
