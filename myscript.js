var r;

function setup() {
        createCanvas(windowWidth, windowHeight);
        background(255);
        rectMode(CENTER);
        frameRate(random(6, 10));
}

function draw() {
        r = random(25, 500);
        for (var i = 0; i < 1; ++i) {
                noFill();
                stroke(random(100, 200));
                ellipse(random(windowWidth), random(windowHeight), r, r);
                fadeOut();
        }
}

function fadeOut() {
        noStroke();
        fill(255, 120);
        rectMode(CORNER);
        rect(0, 0, windowWidth, windowHeight);
}

function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
}
