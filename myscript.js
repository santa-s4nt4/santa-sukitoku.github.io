function setup() {
        createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
        var s = 400;
        background(0);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        noFill();
        stroke(255);
        sphere(s);
}

function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
}
