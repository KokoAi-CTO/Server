//Author: Khalid
//Date: June 17, 2019
//Description: This API handles incoming Commands form Website. 
const express = require('express');
const router = express.Router();


//JSON To store the Data 
Motordata ={
    Action:"No Action", //Drive Backup Stop Right Left 
    rspeed:"10", //The Speed for the Right Side Of Motors
    lspeed:"10", //The Speed for the Left Side Of Motors
};
//______________________________________________________________________________API Routes___________________________________________________________________
    
//----------------------------------This route will handle incoming Commands from Admin User Page.
router.post('/',(req,res) =>{ //Setting a new Route to /Motor/ Request and Respond - POST Method
    const Motor = {
        Action: req.body.Action, //Request the Motor Action
        rspeed: req.body.rspeed, //Request the Right Speed
        lspeed: req.body.lspeed, //Request the Left Speed
    }
    console.log(Motor.Action);
    Motordata = Motor;// Set the data to MotorData 
    res.end(); //End the Connection

})


module.exports = router; //Exporting all the route Methods to be Used by the Main APP.js 