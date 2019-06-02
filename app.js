//Libary's
const express = require('express'); // http Frame Work
const Logger = require('morgan'); // http Logger
const bodyParser = require('body-parser'); //html parser
const path = require('path'); 

const app = express();
//API Routes Modules
const sensorRoutes = require('./api/routes/Sensor')
const MotorRoutes = require('./api/routes/Motor')
const pageRoutes = require('./Website/webpage')



//Used Package
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/Website', express.static(__dirname + './Website'));

//Routes
app.use('/',pageRoutes);
app.use('/Sensor',sensorRoutes);
app.use('/Motor',MotorRoutes);

//Logger - Dev
app.use(Logger('dev'));
//Error Handeling
app.use((req,res,next)=>{
   // const error = new Error('Page Not Found :( 404');
    res.sendFile(path.join(__dirname,'./PageNotFound.html'));
    error.status = 404;
  //  next(error);
})

app.use((error , req,res,next)=>{
    res.status(error.status || 500);
    
    res.json({
        error:{
            message: error.message
        }
    })
})


module.exports = app;