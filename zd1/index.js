
var express = require('express');
var bodyParser = require("body-parser");
var app = express();


//подключаем стили сайта
app.use(express.static(__dirname + '/'));
//конструктор парсера
var urlencodedParser = bodyParser.urlencoded({extended: true});

app.get('/', function (req, res) {
    res.sendFile(__dirname +  '/index.html');

});

app.get('/about', function (req, res) {
    res.sendFile(__dirname +  '/about.html');

});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname +  '/contact.html');

});


app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname +  '/404.html');
});



//ничего не происходит????
app.post("/contact", urlencodedParser, function (req, res) {

    console.log(req.body);
    res.send('Привет');
    res.send('{req.body.userEmail} - {req.body.userPassword}');
});



app.listen(3000, function () {
    console.log('Слушаем порт localhost:3000!');
});


