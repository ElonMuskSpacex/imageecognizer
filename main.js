Webcam.set({
    width : 300,
    height : 300,
    image_format : 'png',
    png_quality :90
});

camera = document.getElementById("camera")
Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "capturedImage" src = "'+data_uri+'" />';

    });
}

console.log('ml5',ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZI-0ERW-r/',modelLoaded);