function setup() {
    video = creatCapture(VIDEO);
    video.size(550, 500);

    canvas = creatCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('PoseNet is Initialized!');
}