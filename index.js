var express= require('express');
var ejs= require('ejs');
var app= express();

// Middleware
app.use(express.static('Public'));

// ejs middleware
app.set('./views', 'view engine');

app.get('/home', function (req, res) {
    res.render('home.ejs');
});
app.get('/menu', function (req, res) {
    res.render('menu.ejs')
});
app.get('/thali', function (req, res) {
    res.render('thali.ejs')
});
app.get('/soups', function (req, res) {
    res.render('soups.ejs')
});
app.get('/bread', function (req, res) {
    res.render('bread.ejs')
});
app.get('/quickbite', function (req, res) {
    res.render('quickbite.ejs')
});
app.get('/northIndia', function (req, res) {
    res.render('northIndian.ejs')
});
app.get('/southIndia', function (req, res) {
    res.render('southIndian.ejs')
});
app.get('/Punjabi', function (req, res) {
    res.render('punjabi.ejs')
});
app.get('/chinese', function (req, res) {
    res.render('chinese.ejs')
});
app.get('/biryani', function (req, res) {
    res.render('biryani.ejs')
});
app.get('/noodles', function (req, res) {
    res.render('noodles.ejs')
});
app.get('/dessert', function (req, res) {
    res.render('dessert.ejs')
});
app.get('/order', function(req, res){
    res.render('order.ejs')
});
app.get('/feedback', function (req, res) {
    res.render('feedback.ejs');
});
app.get('/find', function (req, res) {
    res.render('find.ejs');
});
app.get('/signup', function (req, res) {
    res.render('signup.ejs')
});
app.get('/login', function (req, res) {
    res.render('login.ejs')
});
app.get('/header', function(req, res){
    res.render('header.ejs')
});

app.listen(process.env.PORT || 1222, console.log('http://localhost:1222/home'));