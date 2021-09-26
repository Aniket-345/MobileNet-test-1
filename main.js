Webcam.set({
    width:300,
    hieght:300,
    image_format:"jpg",
    jpg_quality:100,

    constraints:{
        facingMode:"environment"
    }
})

camera=document.getElementById("camera")
Webcam.attach(camera)

function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">"
    })
}

console.log("ml5 version:",ml5.version)

classifier=ml5.imageClassifier("MobileNet",model_loaded)
function model_loaded(){
    console.log("model_loaded")
}
function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img,got_result)
}
function got_result(error,result){
    if(error){
        console.error(error)
    }else{
        console.log(result)
        document.getElementById("object_name").innerHTML=result[0].label
    }
}