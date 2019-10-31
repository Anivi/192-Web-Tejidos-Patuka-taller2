const express = require('express'),
    engines = require('consolidate');

var app = express();


app.engine('handlebars', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//---------------//

//Index
app.get( '/', ( req, res ) => {
    res.render('index');
});

//Tienda
app.get('/tienda', (req,res) => {
    res.render('tienda');
});

    
app.listen(5000);