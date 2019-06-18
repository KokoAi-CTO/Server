//Author: Khalid
//Date: June 17, 2019
//Description: This API handles incoming rover data and outgoing requests for sensory data 
//Library delclaration
const express = require('express');
const CleanData = require('./SmartRover/dataCleaning');
const router = express.Router();

    
    var TempObjgetDicData = null; 
    //A JavaScript Object JSON JavaScript Object Notation - Descrption : A JSON Can Hold String data type and Arrays JSON Is Used To communicate across multiple Platforms
   sendata  = {
        FrontSen:"off", //Front Sensor Data Var 
        BackSen: "off", //Front Sensor Data Var
        LeftSen: "off", //Front Sensor Data Var
        RightSen: "off", //Front Sensor Data Var
        Image: "./Website/Assets/testCam.PNG", //Image Data Var
        SmartData: "", //Object Detection Data Var
        Networks: "no wifi", //Neighboring WiFi Data
    }

 //______________________________________________________________________________API Routes___________________________________________________________________
    //Descrption - 2 Types of HTTP protocols are Used GET and POST - GET HTTP Well SEND Data POST HTTP well receive DATA

    //--------------------------------Route wiil respond with rover data.
    router.get('/',(req,res) =>{ //Setting a new Route to /Sensor/ Request and Respond - GET Method.
        res.setHeader('Access-Control-Allow-Origin', 'http://99.245.132.174'); //Grants access to API from the Origin : security feature by the browser
        res.setHeader('Access-Control-Allow-Origin', 'http://schoolrover.ca');
        res.setHeader('Access-Control-Allow-Methods', 'GET'); 
        sendata.SmartData = TempObjgetDicData; //This is Just for Optimization for Object detection just to Make Sure to Have the Newest Data.
        res.status(200).send(sendata) //Then Send the Data Respond With RoverData .
        SmartRover();
        res.end(); //Then Close the Connection. 
       // console.log("Website is retrieving data")
    });
    
    //----------------------------------This route will handle incoming Rover data.
    router.post('/',(req,res) =>{ //Setting a new Route to /Sensor/ Request and Respond - POST Method
        const RoverData = {
            FrontSen: req.body.FrontSen, //Request Data from Rover exp: Request.FrontSensor Data   |  .body is there Becuase Sometimes we are Parsing from HTML CODE
            BackSen: req.body.BackSen, 
            LeftSen: req.body.LeftSen,
            RightSen: req.body.RightSen,
            Image: req.body.ImageData,
            Networks: req.body.Networks,
        }
        sendata = RoverData //Setting The Reiicvied RoverData to Server Sendata JSON Object
        res.end("Data received"); //Then End the Connection. 
        
       // Debug
       // console.log("Data received from Rover")
    });

    //-----------------------------------This route will respond with Motor Action data For the ROVER
    router.get('/M',(req,res,next) =>{ // Setting a new Route to /Sensor/M Request and Respond - GET Method
        res.setHeader('Access-Control-Allow-Origin', 'http://99.245.132.174');
        res.setHeader('Access-Control-Allow-Origin', 'http://schoolrover.ca');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.status(200).send(Motordata); //Then Send MotorAction Data to the Rover.
        res.end(); //Then End the Connection.
        //DEBUG
        // console.log("Motor Data Command Send To Rover")
    });

    //------------------------------------This route will handle incoming object detection data from Tensorflow agent 
    router.post('/cam',(req,res,next) =>{ //Setting a new Route to /Sensor/Cam Request and Respond - POST Method 
        const ResObjgetDicData = { //Request Object Detection Data 
            SmartImage: req.body.SmartImage 
        }
        TempObjgetDicData  = ResObjgetDicData.SmartImage; //Set the Data to Temp : Why not storeing it right away because to counter the Delay 
        res.end("Object data received"); //Then End the Connection. 
        //console.log("Rover Motor Command Send To Rover")
    });
    
    
//_____________________________________________________________________________________End of Routes__________________________________________________________________________________  

//__________________________________________________________________________________Other Current Method__________________________________________________________
    //Simple Motor Contorle
    function SmartRover() //Simple Method to Test Out stoping Based on Sensor Data 
    {
        if(sendata.FrontSen < 40){ // if the Front Sensor is less than 40cm then Stop The Motors. 
    
            Motordata.Action = "Stop"
        }
    }

//________________________________________________________________________________Currently unused methods___________________________________________________________
    function SetWifi(sendata) //Method just to Display Wifi INFO Disbled at of this Moment 
    {
        console.log(sendata.Networks.length);
        sendata.Networks.forEach(function(element) 
        {
            //element.rssi.sort(function(a, b){return b - a});
            if(element.ssid == "MarsLabExtend" || element.ssid == "MarsLabSuper"){
                console.log(element.ssid + " The dbp rssi " + element.rssi);
            }
         
        });
    }
module.exports = router; //Exporting all the route Methods to be Used the by Main APP.js 

