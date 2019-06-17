const express = require('express');
const CleanData = require('./SmartRover/dataCleaning');
const router = express.Router();

    
    var TempSmart = null;
    sendata = {
        FrontSen:"off",
        BackSen: "off",
        LeftSen: "off",
        RightSen: "off",
        Image: "./Website/Assets/testCam.PNG",
        SmartData: "",
        Networks: "no wifi",
    }

    
 //Routes__________________________________________________________________________________  
    //This Method Well Respond with RoverData
    router.get('/',(req,res,next) =>{
        res.setHeader('Access-Control-Allow-Origin', 'http://99.245.132.174');
        res.setHeader('Access-Control-Allow-Origin', 'http://schoolrover.ca');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        sendata.SmartData = TempSmart;
        res.status(200).send(sendata) 
        SmartRover();
        res.end();
       // console.log("Website Geting Data")
    });
    
    //This Method Well Request the data from the Rover
    router.post('/',(req,res,next) =>{
      //  console.log("You It you BOt")
        const RoverData = {
            FrontSen: req.body.FrontSen,
            BackSen: req.body.BackSen,
            LeftSen: req.body.LeftSen,
            RightSen: req.body.RightSen,
            Image: req.body.ImageData,
            Networks: req.body.Networks,
        }
        sendata = RoverData
       res.end("I got it ");
       // SetWifi(sendata);
        //SmartRover();
        
    });
    //This Method Well Send The Motor Command to The Rover
    router.get('/M',(req,res,next) =>{
        res.setHeader('Access-Control-Allow-Origin', 'http://99.245.132.174');
        res.setHeader('Access-Control-Allow-Origin', 'http://schoolrover.ca');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.status(200).send(Motordata) 
        res.end()
    });
    //This Method Well Get the Smart Camera Data from Vison Worker
    router.post('/cam',(req,res,next) =>{
        const SmartData = {
            SmartImage: req.body.SmartImage
        }
        TempSmart  = SmartData.SmartImage;
        res.end("I got it ");
    });
    
    function SetWifi(sendata){
        console.log(sendata.Networks.length);
        sendata.Networks.forEach(function(element) 
        {
            //element.rssi.sort(function(a, b){return b - a});
            if(element.ssid == "MarsLabExtend" || element.ssid == "MarsLabSuper"){
                console.log(element.ssid + " The dbp rssi " + element.rssi);
            }
         
        });
    }
//End of Routes__________________________________________________________________________________  


    //Simple Motor Contorle
    function SmartRover()
    {
        if(sendata.FrontSen < 40){
    
            Motordata.Action = "Stop"
        }
    }
    
module.exports = router;

