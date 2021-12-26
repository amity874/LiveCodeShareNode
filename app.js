var express = require('express');
var path = require('path');

var logger = require('morgan');
var app=express();
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.listen(3000);