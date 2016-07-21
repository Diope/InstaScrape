// Packages
var express = require('express');
var app = express();
const instagramApi = require('instagram-node').instagram();
var profileRoute = require('./controllers/profileRoute');
var port = process.env.PORT || 2088;


// Configuration
app.use(express.static(__dirname + '/public'));
app.set('views', './views/pages/');
app.set('view engine', 'ejs');

//authentication
instagramApi.use ({
    access_token: //
});

// Route (to be refactored)
app.get('/', function (req, res) {
    instagramApi.user_self_media_recent(function (err, medias, pagination, remaining, limit) {
        res.render('index', {
            grams: medias
        });
    });
});

// Server
app.listen(port);
console.log("Server loaded at port " + port);