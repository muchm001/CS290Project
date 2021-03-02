const express = require('express');
const hbs = require('express-handlebars');
const path = require("path");

const app = express();
const port = 3000;

//Sets handlebars configurations
app.engine('hbs', hbs({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/',
    }));

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');


app.use(express.static('img'));
app.use(express.static('public'));


app.get('/', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('main', {layout: 'index'});
});

app.get('/thinkers', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('thinkers', {layout: 'index'});
});

app.get('/philosophy', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('philosophy', {layout: 'index'});
});

app.get('/orgs', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('orgs', {layout: 'index'});
});

app.use(function(req, res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500);
    res.render('500');
});


app.listen(port, () => console.log(`App listening to port ${port}`));
