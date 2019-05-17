function setup() {
        createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
        background(0);
        noFill();
        stroke(255);
        sphere(400);
}

function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
}
