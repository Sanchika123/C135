video="";
Status="";
objects=[];
function preload(){
    video= createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas= createCanvas(450, 380);
    canvas.center();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML= "Status: Detecting Object";
}

function modelLoaded(){
    console.log('Model Loaded!');
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw(){
    image(video, 0, 0, 450, 380);
    if(Status != ""){
        objectDetector.detect(video, gotResults);
        for(i=0; i< objects.length; i++){
            document.getElementById('status').innerHTML = "Status: Object Detected";
            document.getElementById('number_of_objects').innerHTML = "Number of objects are "+ objects.length;
            percent= floor(objects[i].confidence*100);
            fill('#FF0000');
            text(objects[i].label+' '+ percent+ "%", objects[i].x + 15, objects[i].y+ 15);
            noFill();
            stroke('#FF0000');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log('start');
        console.log(results);
        console.log('end');
        objects = results;
    }
}