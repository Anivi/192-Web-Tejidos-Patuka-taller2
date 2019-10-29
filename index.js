  
var express = require('express');
var motorRender = require('express-handlebars');
var app = express();

var fs = require('fs');
console.log(__dirname);

app.use(express.static('public'));
app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended: true}));
app.engine('handlebars', motorRender({
    defaultLayout: false,
}));
app.get('/',(function(req,res){

res.sendfile('./index.html')
}));

app.get('/tienda',(function(req,res){
   
    
    
      res.render('tienda');
    }));
    
app.listen(5000);