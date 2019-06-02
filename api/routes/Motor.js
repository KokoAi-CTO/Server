const express = require('express');
const router = express.Router();



Motordata ={
    Action:"No Action",
    rspeed:"10",
    lspeed:"10",
};

//This Method Handles Data Sent From User.
router.post('/',(req,res,next) =>{
    const Motor = {
        Action: req.body.Action,
        rspeed: req.body.rspeed,
        lspeed: req.body.lspeed,
    }
    res.status(201).json({
        
        displayedSensor: Motor
    })
    Motordata = Motor;
    SmartRover();
    console.log(Motor.Action);
})

module.exports = router;