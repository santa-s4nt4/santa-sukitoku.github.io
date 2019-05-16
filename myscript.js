var r;

function setup() {
        createCanvas(windowWidth, 2300);
        background(255);
        rectMode(CENTER);
        frameRate(random(6, 10));
}

function draw() {
        r = random(25, 500);
        for (var i = 0; i < 1; ++i) {
                noFill();
                stroke(random(100, 200));
                ellipse(random(windowWidth), random(0, 2300), r, r);
                fadeOut();
        }
}

function fadeOut() {
        noStroke();
        fill(255, 120);
        rectMode(CORNER);
        rect(0, 0, windowWidth, 2300);
}

function windowResized() {
        resizeCanvas(windowWidth, 2300);
}
