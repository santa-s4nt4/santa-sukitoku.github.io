function setup() {
        createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
        var s = windowWidth / 5;
        var t = windowWidth / 20;
        background(0);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        noFill();
        stroke(255);
        sphere(s);
        rotateZ(frameCount * 0.01);
        torus(t, t);
}

function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
}
