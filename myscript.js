var r;

function setup() {
        let canvas = createCanvas(windowWidth, document.body.clientHeight);
        canvas.parent('canvas');
        background(255);
        rectMode(CENTER);
        frameRate(random(6, 10));
}

function draw() {
        r = random(25, 500);
        for (var i = 0; i < 1; ++i) {
                noFill();
                stroke(random(100, 200));
                ellipse(random(width), random(height), r, r);
                fadeOut();
        }
}

function fadeOut() {
        noStroke();
        fill(255, 120);
        rectMode(CORNER);
        rect(0, 0, width, height);
}

function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
}