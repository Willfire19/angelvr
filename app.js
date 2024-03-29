var express = require('express');
var app = express();
var http = require('http').Server(app);


app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var blogEntries = {
	"First Entry" : {title: "First Entry", partial: "../partials/blog/AmaranTime/first-entry.ejs" }
};

app.get('/', function( req, resp ) {

	resp.redirect('/joshua-angeley');

});

app.get('/blog', function( req, resp ) {

	resp.render('pages/blog', {
		blogPosts: blogEntries
	});

});

app.get('/first-entry', function( req, resp ) {

	resp.render('pages/blog', {
		blogPosts: blogEntries["First Entry"]
	});

});

app.get('/joshua-angeley', function( req, resp ) {
	
	resp.render('pages/joshua-angeley');

});

app.get('/joshua-angeley/vr-general-resume', function( req, resp) {

	resp.render('pages/joshua-angeley');

});

app.get('/joshua-angeley/vr-tech-resume', function( req, resp) {

	resp.render('pages/joshua-angeley-vr-tech');

});

app.get('/joshua-angeley/standard-resume', function( req, resp) {

	resp.render('pages/joshua-angeley-standard');

});

app.get('/joshua-angeley/two-pager-vr-resume', function( req, resp) {

	resp.render('pages/joshua-angeley-two-pager-vr');

});

http.listen( process.env.PORT || 3000, function() {
	console.log('AngelVR listening on *:3000');
});