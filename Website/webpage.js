
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const router = express.Router();

//______________________________________________________________________________Page Routes___________________________________________________________________
router.use('/assets', express.static(__dirname + './Assets')); //Using the Assets Basicly Sending All Files to User 

router.use('/', express.static(__dirname + '/'));

router.get('/', function (req, res) {
  console.log("SomeOne Accesing Home Page")
  res.sendFile(path.join(__dirname,'./home.html'));
});

router.get('/Coffee', function (req, res) {
  console.log("SomeOne Accesing Coffe Page")
  res.sendFile(path.join(__dirname,'./Coffee.html'));
});

router.get('/Coffee', function (req, res) {
  console.log("SomeOne Accesing About Page")
  res.sendFile(path.join(__dirname,'./About.html'));
});

//______________________________________________________________________________Page Routes___________________________________________________________________
module.exports = router; //Exporting all the route Methods to be Used by the Main APP.js 