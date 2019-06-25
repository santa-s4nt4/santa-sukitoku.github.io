function setup() {
        createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
        var c;
        if (windowWidth > 1080) {
                var s = windowWidth / 5;
                var t = windowWidth / 20;
                c = 255;
        } if (windowWidth <= 1080) {
                var s = windowHeight / 5;
                var t = windowHeight / 20;
                c = 160;
        }
        background(0);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        noFill();
        stroke(c);
        sphere(s);
        rotateZ(frameCount * 0.01);
        torus(t, t);
}

function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
}
