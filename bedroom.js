img = "";
status ="";
function preload(){
    img = loadImage('bedroom.jpg');
}


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Object";
}


function modelLoaded() {
console.log("modelLoaded")
status = true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error){
        console.log(error);
    }
    console.log(results);
}

