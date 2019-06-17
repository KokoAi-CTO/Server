const tfjs = require('./tfjs.js.js.js');
const cocoSsd = require('./coco-ssd.js.js.js');
const axios = require('axios');


const { Image, createCanvas } = require('canvas');
var model;

console.log('loading coco-ssd model...');
cocoSsd.load().then(function (res) {
    model = res;
    console.log('done');
   
  
 
}, function (n) {
    //failure
    console.log('loading tf model failed');
 
});

const width = 916;
const height = 612;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');
const img = new Image()
var cont = 0;

var SmartData = {
    SmartImage: "", 
}

setTimeout(function () {
    // feed images
    setInterval(function(){
        console.log("Gone Start")
  
img.onload = () => {
//console.log("image loaded.");
ctx.drawImage(img, 0, 0, width, height);
}
axios.get('http://99.245.132.174/Sensor', {})
.then(function (response) {
    
       
  //console.log(`data:image/jpeg;base64,${response.data.Image}`);
  img.src = `data:image/jpeg;base64,${response.data.Image}`;
})
.catch(function (error) {
  console.log(error);
});


img.onerror = err => { throw err }



    model.detect(canvas).then(function (predictions) {
        
        SmartData.SmartImage = predictions;
    });
    cont++;
    console.log("The COnter is " + cont);
 
    console.log(SmartData.SmartImage);
  axios.post('http://99.245.132.174/Sensor/cam', SmartData)
  .then(function (response) {
    //console.log(response.data.message);
  })
  .catch(function (error) {
    console.log(error);
  });
  //consol
    },10);


 }, 4000);
