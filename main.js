function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initalized!');
}

function draw() {
    background('rgb(173,216,230)');
    fill('#FF90093');
    stroke('F90093');
    square(noseX, noseY, diffrence);
}


function gotPoses(results) 
{
  if(results.length > 0 )
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.rightWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    diffrence = leftWristX - rightWristX;

    console.log("leftWrist = " + leftWristX + "rightWristX = "+ rightWrisX + "difffrence = " + diffrence);
  }    
}

noseX=0;
noseY=0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;
function preload()
{}

function draw() 
{
  background('#F90093');
  stroke('#F90093');
  square(noseX, noseY, 100);
}