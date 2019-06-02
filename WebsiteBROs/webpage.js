
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
//const sensor = require('../api/routes/Sensor')
const router = express.Router();

router.use('/assets', express.static(__dirname + './Assets'));
router.use('/htmlpages', express.static(__dirname + '/HtmlPages'));
//router.use('/HtmlPages/Coffee.html', express.static(__dirname + './HtmlPages/Coffee.html'));
router.use('/', express.static(__dirname + '/'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'./SuperPage.html'));
});

router.get('/Coffee', function (req, res) {
  console.log("Mr COfeeeeeeeeeeeeeee")
  res.sendFile(path.join(__dirname,'./Coffee.html'));
});

router.get('/Coffee', function (req, res) {
  console.log("Mr COfeeeeeeeeeeeeeee")
  res.sendFile(path.join(__dirname,'./About.html'));
});
module.exports = router;