var pridiction1="";
var predection2="";
Webcam.set({ 
    width: 350,
    height:350,
    image_format:'png',
    png_quality: 90

});
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML='<img id="display" src="'+data_uri+'">';
    });
}
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/l57uOm25i/model.json',modelLoaded);
function modelLoaded(){
    console.log();
}
function speak(){
    var synth=window.speechSynthesis;
    speakData1="the first predection is "+pridiction1;
    speakData2="the second prediction is "+predection2;
    var utterthis=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(utterthis);
}
function check(){
    img=document.getElementById("display");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);

}
else{
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    pridiction1=results[0].label;
    predection2=results[1].label;
    speak();
    if(results[0].label=="happy"){
        document.getElementById("update_emoji").innerHTML="&#128522";

    }
    if(results[0].label=="sad"){
        document.getElementById("update_emoji").innerHTML="&#128577";

    }
    if(results[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML="	&#128544";

    }
    if(results[0].label=="crying"){
        document.getElementById("update_emoji").innerHTML="&#128557";

    }
    if(results[1].label=="happy"){
        document.getElementById("update_emoji2").innerHTML="&#128522";

    }
    if(results[1].label=="sad"){
        document.getElementById("update_emoji2").innerHTML="&#128577";

    }
    if(results[1].label=="angry"){
        document.getElementById("update_emoji2").innerHTML="	&#128544";

    }
    if(results[1].label=="crying"){
        document.getElementById("update_emoji2").innerHTML="&#128557";

    }
}
}