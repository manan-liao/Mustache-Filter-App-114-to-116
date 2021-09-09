noseX = 0;
noseY = 0;

function preload(){
    clownnose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nosex = "+results[0].pose.nose.x);
        console.log("nosey = "+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-30;
        noseY = results[0].pose.nose.y;
    }
}

function modelLoaded(){
    console.log("posenet model is initialized");
}

function draw(){
    image(video, 0,0,400,400);
    //fill("green");
    //stroke("red");
    //circle(noseX,noseY,20);
    image(clownnose,noseX,noseY,60,40);
}

function take_snapshot(){
    save('manan.png');
}