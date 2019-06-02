//Smart Cam


function draw_label(predictions) {
    predictions.forEach(function (prediction) {
        if(prediction.class == "person")
        {
            console.log("Yes there is a Person Here ")
            //var x = prediction.bbox[0];
        }
        else
        {
            console.log("nobody here")
        } 

    });
}
