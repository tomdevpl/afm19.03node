const express = require('express');
const dataFromfunctions = require('./functions');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const outsideSubtitle = "podtytyul"
app.set('view engine', 'hbs')
app.use('/assets', express.static(path.join(__dirname, './assets')))
app.use('/js', express.static(path.join(__dirname, './js')))

const send = {
    pageTitle: "Zajecia AFM 19.03.2022h",
    subTitle: outsideSubtitle,
    example: dataFromfunctions.sayHello()
};

app.get('/', function(req, res) {
    res.render('index', send);
})

app.get('/about', function(req, res) {
    res.render('about', send);
})

// app.get('/about', function(req, res) {
//     res.send("<h2> Strona o mnie </h2>");
// })


app.listen(port, (err) => {
    if (err) { return console.log(`Wystapił błąd ${err.message}`); }
    return console.log(`Apka działa na porcie ${port}`);
})