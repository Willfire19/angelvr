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

	resp.redirect('/blog');

});

app.get('/blog', function( req, resp ) {

	resp.render('pages/blog');

});

app.get('/first-entry', function( req, resp ) {

	resp.render('pages/blog', {
		partialContent: blogEntries["First Entry"].partial
	});

});

app.get('/joshua-angeley', function( req, resp ) {
	
	resp.render('pages/joshua-angeley');

});

app.get('/joshua-angeley/resume', function( req, resp) {

	resp.render('pages/joshAngeleyResume');

});

http.listen( process.env.PORT || 3000, function() {
	console.log('AngelVR listening on *:3000');
});