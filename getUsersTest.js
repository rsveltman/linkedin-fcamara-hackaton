var data = {
  apiKey: '77r0mnkus0rvu2',
  secretKey: 'lgXP86Fv0QF9yh2Y',
  host: 'https://fcamara-linkedin-rsov.c9users.io/getUsersTest.js'
};
var a = "t";
var Linkedin = require('node-linkedin')(data['apiKey'], data['secretKey'], data['host']);
//var linkedin = Linkedin.init('my_access_token');
var express = require('express');
var app = express(); 
var pry = require('pryjs');
var server;

// Using a library like `expressjs` the module will 
// redirect for you simply by passing `res`. 
var t = app.get('/oauth/linkedin', function(req, res) {
    var auth_url = Linkedin.auth.authorize(Linkedin.auth.authorize(['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_contactinfo']));
});
eval(pry.it);