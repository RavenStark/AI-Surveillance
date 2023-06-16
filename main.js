objects = [];
status = "";


function setup() {
    canvas = createCanvas(600 , 380);
    canvas.center();

    video.hide();
}

function preload() {
video = createVideo('video.mp4');

}

function draw() {
    image(video , 0 , 0 , 600 , 380);

if (status != "") {
objectDetector.detect(video , gotResult);
for (i = 0 ; i < objects.length ; i++ ) {
document.getElementById('status').innerHTML = "Status: Objects Detected";
document.getElementById('no_Objects').innerHTML = "No. Of Objects: " + objects.length;

fill("blue");
percent = Math.floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
noFill()
stroke("blue");
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);

}



}

}

function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
console.log('model loaded');
status = true;
video.loop();
video.volume(0);
video.speed(1);

}


function gotResult(error , results) {

    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;


}



