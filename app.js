//Author: Khalid 
//Date: June 17, 2019 
//Description: Main javascript class 

//Libraries:
const express = require('express'); // http Frame Work : Description - Library to easily use http protocol 
const Logger = require('morgan'); // http Logger : Description - Library to detect incoming traffic and log information in the terminal
const bodyParser = require('body-parser'); //html parser : Description - Library to parse html code to JSOn
const path = require('path'); //built in reader library : Descrption - Similiar to streamreader in c# 

const app = express(); // initializes the express object 

//API Routes Modules
const sensorRoutes = require('./api/routes/Sensor')
const MotorRoutes = require('./api/routes/Motor')
const pageRoutes = require('./Website/webpage')
const UserApi = require('./Website/DAL.js')

//Used Package
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/Website', express.static(__dirname + './Website'));

//_________________________________________________________________________________Routes_____________________________________________________________________
app.use('/',pageRoutes);
app.use('/Sensor',sensorRoutes);
app.use('/Motor',MotorRoutes);
app.use('/UserAPI',UserApi );

//Logger - Dev - Morgan library 
app.use(Logger('dev'));

//___________________________________________________________________________  Error Handeling________________________________________________________________
app.use((req,res,next)=>{
   const error = new Error('Page Not Found :( 404');
    res.sendFile(path.join(__dirname,'./Website/PageNotFound.html'));
    error.status = 404;
    next(error);
})
//Respond with error type 
app.use((error , req,res,next)=>{
    res.status(error.status || 500);
    res.sendFile(path.join(__dirname,'./Website/PageNotFound.html'));
})
//Exports the javascript class 
module.exports = app;