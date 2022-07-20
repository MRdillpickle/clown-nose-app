var noseX = 0;
var noseY = 0;

function preload() {clownNose = loadImage('https://i.postimg.cc/QCckg3Ys/580b57fbd9996e24bc43bed5.png');}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0,0,300,300);
    image(clownNose, noseX,noseY,30,30);
}

function modelLoaded() {console.info("poseNet is declared");}

function take_snapshot() {
    save('MYFILTERIMG.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}