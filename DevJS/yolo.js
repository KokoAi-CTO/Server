
var model;

console.log('loading coco-ssd model...');
cocoSsd.load().then(function (res) {model = res;console.log('done');
}, function () {
    //failure
    console.log('loading tf model failed');
});
function invoke_upload_image() {
   // $('#upload-btn').click();
}
function upload_image() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var input_elem = document.querySelector('input[type=file]');
    //var file = input_elem.files[0]; //sames as here
    var image = document.getElementById('img');
   
    $.get("http://99.245.132.174/Sensor", function(data, status){
        let imagetemp = data.Image;
        console.log(imagetemp );
    image.src = `data:image/jpeg;base64,${imagetemp}`; 
  });
       
   
        

            if (image.height > 500) {
                image.width = image.width * (500 / image.height);
                image.height = 500;
            }

            model.detect(image).then(function (predictions) {
                console.log(predictions);
                draw_res_image(canvas, ctx, image, predictions);
            });


      
   
}
//Drawing Boy
function draw_sample_image_in_canvas() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var imageObj = new Image();
    canvas.width = 888;
    canvas.height = 500;

    imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0, 888, 500);
    };
    imageObj.src = "./scene00946.png";

    
}
draw_sample_image_in_canvas();


function draw_bbox(ctx, predictions, font) {
    predictions.forEach(function (prediction) {
        var x = prediction.bbox[0];
        var y = prediction.bbox[1];
        var width = prediction.bbox[2];
        var height = prediction.bbox[3];
        ctx.strokeRect(x, y, width, height);
        var textWidth = ctx.measureText(prediction.class).width;
        var textHeight = parseInt(font, 10); // base 10
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });
}

function draw_label(ctx, predictions) {
    predictions.forEach(function (prediction) {
        var x = prediction.bbox[0];
        var y = prediction.bbox[1];

        ctx.fillStyle = '#000000';
        ctx.fillText(prediction.class, x, y);
    });
}

function draw_res_image(canvas, ctx, image, predictions) {
    var font = '16px sans-serif';

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.font = font;
    ctx.textBaseline = 'top';
    ctx.strokeStyle = '#00FFFF';
    ctx.lineWidth = 3;
    ctx.fillStyle = '#00FFFF';

    $('#spinner').hide();
    draw_bbox(ctx, predictions, font);
    draw_label(ctx, predictions);
}



function drawVideoPredictions(predictions) {
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    c.width = 700;
    c.height = 500;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(video, 0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    var font = '16px sans-serif';
    ctx.font = font;
    ctx.textBaseline = 'top';
    predictions.forEach(function (prediction) {
        var x = prediction.bbox[0];
        var y = prediction.bbox[1];
        var width = prediction.bbox[2];
        var height = prediction.bbox[3];
        // Draw the bounding box.
        ctx.strokeStyle = '#00FFFF';
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height);
        // Draw the label background.
        ctx.fillStyle = '#00FFFF';
        var textWidth = ctx.measureText(prediction.class).width;
        var textHeight = parseInt(font, 10); // base 10
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    predictions.forEach(function (prediction) {
        var x = prediction.bbox[0];
        var y = prediction.bbox[1];
        // Draw the text last to ensure it's on top.
        ctx.fillStyle = '#000000';
        ctx.fillText(prediction.class, x, y);
    });
}
//# sourceMappingURL=tfjs-multi-obj-det.js.map
