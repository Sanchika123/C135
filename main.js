video="";
Status="";
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
}