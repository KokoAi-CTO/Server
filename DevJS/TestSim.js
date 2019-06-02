const express = require('express');
const app = express();

const axios = require('axios')
var ranNum 
var ranNumV 

/*setInterval(()=>{
    sens1 = Math.floor((Math.random() * 100) + 1);
    sens2  = Math.floor((Math.random() * 100) + 1);
    sens3  = Math.floor((Math.random() * 100) + 1);
    sens4  = Math.floor((Math.random() * 100) + 1);
    var sensordata = {
        FrontSen: sens1,
        BackSen: sens2,
        LeftSen: sens3,
        RightSen: sens4 
    }
  axios.post('http://99.245.132.174/Sensor', sensordata)
  .then(function (response) {
    //console.log(response.data.message);
  })
  .catch(function (error) {
    console.log(error);
  });
  //console.log("Data Send" + sensordata.FrontSen);


},100)*/
setInterval(()=>{

axios.get('http://99.245.132.174/Sensor/M', {
    params: {
      Action: "12345"
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

    sens1 = Math.floor((Math.random() * 100) + 1);
    sens2  = Math.floor((Math.random() * 100) + 1);
    sens3  = Math.floor((Math.random() * 100) + 1);
    sens4  = Math.floor((Math.random() * 100) + 1);
    var sensordata = {
        FrontSen: 100,
        BackSen: sens2,
        LeftSen: sens3,
        RightSen: sens4 
    }
  axios.post('http://99.245.132.174/Sensor', sensordata)
  .then(function (response) {
    //console.log(response.data.message);
  })
  .catch(function (error) {
    console.log(error);
  });
  //console.log("Data Send" + sensordata.FrontSen);

},500)